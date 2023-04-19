# Dataframes

::: warning
To use the dataframe support you need a fully-featured build with `cargo build --features dataframe`. Starting with version 0.72, dataframes are *not* included with binary releases of Nushell. [See the installation instructions](/book/installation.md) for further details.
:::

As we have seen so far, Nushell makes working with data its main priority.
`Lists` and `Tables` are there to help you cycle through values in order to
perform multiple operations or find data in a breeze. However, there are
certain operations where a row-based data layout is not the most efficient way
to process data, especially when working with extremely large files. Operations
like group-by or join using large datasets can be costly memory-wise, and may
lead to large computation times if they are not done using the appropriate
data format.

For this reason, the `DataFrame` structure was introduced to Nushell. A
`DataFrame` stores its data in a columnar format using as its base the [Apache
Arrow](https://arrow.apache.org/) specification, and uses
[Polars](https://github.com/pola-rs/polars) as the motor for performing
extremely [fast columnar operations](https://h2oai.github.io/db-benchmark/).

You may be wondering now how fast this combo could be, and how could it make
working with data easier and more reliable. For this reason, let's start this
page by presenting benchmarks on common operations that are done when
processing data.

## Benchmark comparisons

For this little benchmark exercise we will be comparing native Nushell
commands, dataframe Nushell commands and [Python
Pandas](https://pandas.pydata.org/) commands. For the time being don't pay too
much attention to the [`Dataframe` commands](/commands/categories/dataframe.md). They will be explained in later
sections of this page.

> System Details: The benchmarks presented in this section were run using a
> machine with a processor Intel(R) Core(TM) i7-10710U (CPU @1.10GHz 1.61 GHz)
> and 16 gb of RAM.
>
> All examples were run on Nushell version 0.33.1.
> (Command names are updated to Nushell 0.78)

### File information

The file that we will be using for the benchmarks is the
[New Zealand business demography](https://www.stats.govt.nz/assets/Uploads/New-Zealand-business-demography-statistics/New-Zealand-business-demography-statistics-At-February-2020/Download-data/Geographic-units-by-industry-and-statistical-area-2000-2020-descending-order-CSV.zip) dataset.
Feel free to download it if you want to follow these tests.

The dataset has 5 columns and 5,429,252 rows. We can check that by using the
`ls-df` command:

```shell
❯ let df = (dfr open .\Data7602DescendingYearOrder.csv)
❯ dfr ls

╭───┬────────┬─────────┬─────────╮
│ # │  name  │ columns │  rows   │
├───┼────────┼─────────┼─────────┤
│ 0 │ $df    │       5 │ 5429252 │
╰───┴────────┴─────────┴─────────╯```

We can have a look at the first lines of the file using [`first`](/commands/docs/first.md):

```shell
❯ $df | dfr first
╭───┬──────────┬─────────┬──────┬───────────┬──────────╮
│ # │ anzsic06 │  Area   │ year │ geo_count │ ec_count │
├───┼──────────┼─────────┼──────┼───────────┼──────────┤
│ 0 │ A        │ A100100 │ 2000 │        96 │      130 │
╰───┴──────────┴─────────┴──────┴───────────┴──────────╯
```

...and finally, we can get an idea of the inferred data types:

```shell
❯ $df | dfr dtypes
╭───┬───────────┬───────╮
│ # │  column   │ dtype │
├───┼───────────┼───────┤
│ 0 │ anzsic06  │ str   │
│ 1 │ Area      │ str   │
│ 2 │ year      │ i64   │
│ 3 │ geo_count │ i64   │
│ 4 │ ec_count  │ i64   │
╰───┴───────────┴───────╯
```

### Loading the file

Let's start by comparing loading times between the various methods. First, we
will load the data using Nushell's [`open`](/commands/docs/open.md) command:

```shell
❯ timeit {open .\Data7602DescendingYearOrder.csv}
30sec 479ms 614us 400ns
```

Loading the file using native Nushell functionality took 30 seconds. Not bad for
loading five million records! But we can do a bit better than that.

Let's now use Pandas. We are going to use the next script to load the file:

```python
import pandas as pd

df = pd.read_csv("Data7602DescendingYearOrder.csv")
```

And the benchmark for it is:

```shell
❯ timeit {python load.py}
2sec 91ms 872us 900ns
```

That is a great improvement, from 30 seconds to 2 seconds. Nicely done, Pandas!

Probably we can load the data a bit faster. This time we will use Nushell's
`open-df` command:

```shell
❯ timeit {dfr open .\Data7602DescendingYearOrder.csv}
601ms 700us 700ns
```

This time it took us 0.6 seconds. Not bad at all.

### Group-by comparison

Let's do a slightly more complex operation this time. We are going to group the
data by year, and add groups using the column `geo_count`.

Again, we are going to start with a Nushell native command.

::: tip
If you want to run this example, be aware that the next command will
use a large amount of memory. This may affect the performance of your system
while this is being executed.
:::

```shell
❯ timeit {
	open .\Data7602DescendingYearOrder.csv
	| group-by year
	| transpose header rows
	| upsert rows { get rows | math sum }
	| flatten
}

6min 30sec 622ms 312us
```

So, six minutes to perform this aggregated operation.

Let's try the same operation in pandas:

```python
import pandas as pd

df = pd.read_csv("Data7602DescendingYearOrder.csv")
res = df.groupby("year")["geo_count"].sum()
print(res)
```

And the result from the benchmark is:

```shell
❯ timeit {python .\load.py}

1sec 966ms 954us 800ns
```

Not bad at all. Again, pandas managed to get it done in a fraction of the time.

To finish the comparison, let's try Nushell dataframes. We are going to put
all the operations in one `nu` file, to make sure we are doing similar
operations:

```shell
let df = dfr open Data7602DescendingYearOrder.csv
let res = ($df | dfr group-by year | dfr agg (dfr col geo_count | dfr sum))
$res
```

and the benchmark with dataframes is:

```shell
❯ timeit {source load.nu}

557ms 658us 500ns
```

Luckily Nushell dataframes managed to halve the time again. Isn't that great?

As you can see, Nushell's [`Dataframe` commands](/commands/categories/dataframe.md)
are as fast as the most common tools that exist today to do data analysis. The commands
that are included in this release have the potential to become your go-to tool for
doing data analysis. By composing complex Nushell pipelines, you can extract information
from data in a reliable way.

## Working with Dataframes

After seeing a glimpse of the things that can be done with [`Dataframe` commands](/commands/categories/dataframe.md),
now it is time to start testing them. To begin let's create a sample
CSV file that will become our sample dataframe that we will be using along with
the examples. In your favorite file editor paste the next lines to create out
sample csv file.

```csv
int_1,int_2,float_1,float_2,first,second,third,word
1,11,0.1,1.0,a,b,c,first
2,12,0.2,1.0,a,b,c,second
3,13,0.3,2.0,a,b,c,third
4,14,0.4,3.0,b,a,c,second
0,15,0.5,4.0,b,a,a,third
6,16,0.6,5.0,b,a,a,second
7,17,0.7,6.0,b,c,a,third
8,18,0.8,7.0,c,c,b,eight
9,19,0.9,8.0,c,c,b,ninth
0,10,0.0,9.0,c,c,b,ninth
```

Save the file and name it however you want to, for the sake of these examples
the file will be called `test_small.csv`.

Now, to read that file as a dataframe use the `dfr open` command like
this:

```shell
❯ let df = (dfr open test_small.csv)
```

This should create the value `$df` in memory which holds the data we just
created.

::: tip
The command `dfr open` can read either **csv** or **parquet**
files.
:::

To see all the dataframes that are stored in memory you can use

```shell
❯ dfr ls
╭───┬──────┬─────────┬──────╮
│ # │ name │ columns │ rows │
├───┼──────┼─────────┼──────┤
│ 0 │ $df  │       8 │   10 │
╰───┴──────┴─────────┴──────╯
```

As you can see, the command shows the created dataframes together with basic
information about them.

And if you want to see a preview of the loaded dataframe you can send the
dataframe variable to the stream

```shell
❯ $df
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word  │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────┤
│ 0 │     1 │    11 │    0.10 │    1.00 │ a     │ b      │ c     │ first  │
│ 1 │     2 │    12 │    0.20 │    1.00 │ a     │ b      │ c     │ second │
│ 2 │     3 │    13 │    0.30 │    2.00 │ a     │ b      │ c     │ third  │
│ 3 │     4 │    14 │    0.40 │    3.00 │ b     │ a      │ c     │ second │
│ 4 │     0 │    15 │    0.50 │    4.00 │ b     │ a      │ a     │ third  │
│ 5 │     6 │    16 │    0.60 │    5.00 │ b     │ a      │ a     │ second │
│ 6 │     7 │    17 │    0.70 │    6.00 │ b     │ c      │ a     │ third  │
│ 7 │     8 │    18 │    0.80 │    7.00 │ c     │ c      │ b     │ eight  │
│ 8 │     9 │    19 │    0.90 │    8.00 │ c     │ c      │ b     │ ninth  │
│ 9 │     0 │    10 │    0.00 │    9.00 │ c     │ c      │ b     │ ninth  │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────╯
```

With the dataframe in memory we can start doing column operations with the
`DataFrame`

::: tip
If you want to see all the dataframe commands that are available you
can use `$nu.scope.commands | where category =~ dataframe`
:::

## Basic aggregations

Let's start with basic aggregations on the dataframe. Let's sum all the columns
that exist in `df` by using the `aggregate` command

```shell
❯ $df | dfr sum
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬──────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │ word │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼──────┤
│ 0 │    40 │   145 │    4.50 │   46.00 │       │        │       │      │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴──────╯
```

As you can see, the aggregate function computes the sum for those columns where
a sum makes sense. If you want to filter out the text column, you can select
the columns you want by using the [`dfr select`](/commands/docs/dfr_select.md) command

```shell
❯ $df | dfr sum | dfr select int_1 int_2 float_1 float_2
╭───┬───────┬───────┬─────────┬─────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │
├───┼───────┼───────┼─────────┼─────────┤
│ 0 │    40 │   145 │    4.50 │   46.00 │
╰───┴───────┴───────┴─────────┴─────────╯
```

You can even store the result from this aggregation as you would store any
other Nushell variable

```shell
❯ let res = ($df | dfr sum | dfr select int_1 int_2 float_1 float_2)
```

::: tip
Type `let res = ( !! )` and press enter. This will auto complete the previously
executed command. Note the space between ( and !!.
:::

And now we have two dataframes stored in memory

```shell
❯ dfr ls
╭───┬──────┬─────────┬──────╮
│ # │ name │ columns │ rows │
├───┼──────┼─────────┼──────┤
│ 0 │ $res │       4 │    1 │
│ 1 │ $df  │       8 │   10 │
╰───┴──────┴─────────┴──────╯
```

Pretty neat, isn't it?

You can perform several aggregations on the dataframe in order to extract basic
information from the dataframe and do basic data analysis on your brand new
dataframe.

## Joining a DataFrame

It is also possible to join two dataframes using a column as reference. We are
going to join our mini dataframe with another mini dataframe. Copy these lines
in another file and create the corresponding dataframe (for these examples we
are going to call it `test_small_a.csv`)

```
int_1,int_2,float_1,float_2,first
9,14,0.4,3.0,a
8,13,0.3,2.0,a
7,12,0.2,1.0,a
6,11,0.1,0.0,b
```

We use the `open-df` command to create the new variable

```shell
❯ let df_a = (dfr open test_small_a.csv)
```

Now, with the second dataframe loaded in memory we can join them using the
column called `int_1` from the left dataframe and the column `int_1` from the
right dataframe

```shell
❯ $df | dfr join $df_a int_1 int_1
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────┬─────────┬───────────┬───────────┬─────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word  │ int_2_x │ float_1_x │ float_2_x │ first_x │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────┼─────────┼───────────┼───────────┼─────────┤
│ 0 │     6 │    16 │    0.60 │    5.00 │ b     │ a      │ a     │ second │      11 │      0.10 │      0.00 │ b       │
│ 1 │     7 │    17 │    0.70 │    6.00 │ b     │ c      │ a     │ third  │      12 │      0.20 │      1.00 │ a       │
│ 2 │     8 │    18 │    0.80 │    7.00 │ c     │ c      │ b     │ eight  │      13 │      0.30 │      2.00 │ a       │
│ 3 │     9 │    19 │    0.90 │    8.00 │ c     │ c      │ b     │ ninth  │      14 │      0.40 │      3.00 │ a       │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────┴─────────┴───────────┴───────────┴─────────╯
```

::: tip
In `Nu` when a command has multiple arguments that are expecting
multiple values we use brackets `[]` to enclose those values. In the case of
[`dfr join`](/commands/docs/dfr_join.md) we can join on multiple columns
as long as they have the same type.
:::

For example:

```
❯ $df | dfr join $df_a [int_1 first] [int_1 first]
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────┬─────────┬───────────┬───────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word  │ int_2_x │ float_1_x │ float_2_x │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────┼─────────┼───────────┼───────────┤
│ 0 │     6 │    16 │    0.60 │    5.00 │ b     │ a      │ a     │ second │      11 │      0.10 │      0.00 │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────┴─────────┴───────────┴───────────╯
```

By default, the join command does an inner join, meaning that it will keep the
rows where both dataframes share the same value. You can select a left join to
keep the missing rows from the left dataframe. You can also save this result
in order to use it for further operations.

## DataFrame group-by

One of the most powerful operations that can be performed with a DataFrame is
the [`dfr group-by`](/commands/docs/dfr_group-by.md). This command will allow you to perform aggregation operations
based on a grouping criteria. In Nushell, a `GroupBy` is a type of object that
can be stored and reused for multiple aggregations. This is quite handy, since
the creation of the grouped pairs is the most expensive operation while doing
group-by and there is no need to repeat it if you are planning to do multiple
operations with the same group condition.

To create a `GroupBy` object you only need to use the [`dfr_group-by`](/commands/docs/dfr_group-by.md) command

```shell
❯ let group = ($df | dfr group-by first)
❯ $group
╭─────────────┬──────────────────────────────────────────────╮
│ LazyGroupBy │ apply aggregation to complete execution plan │
╰─────────────┴──────────────────────────────────────────────╯
```

When printing the `GroupBy` object we can see that it is in the background a
lazy operation waiting to be completed by adding an aggregation. Using the
`GroupBy` we can create aggregations on a column

```shell
❯ $group | dfr agg (dfr col int_1 | dfr sum)
╭───┬───────┬───────╮
│ # │ first │ int_1 │
├───┼───────┼───────┤
│ 0 │ b     │    17 │
│ 1 │ a     │     6 │
│ 2 │ c     │    17 │
╰───┴───────┴───────╯
```

or we can define multiple aggregations on the same or different columns

```shell
❯ $group | dfr agg [
∙ (dfr col int_1 | dfr n-unique)
∙ (dfr col int_2 | dfr min)
∙ (dfr col float_1 | dfr sum)
∙ (dfr col float_2 | dfr count)
∙ ] | dfr sort-by first
╭───┬───────┬───────┬───────┬─────────┬─────────╮
│ # │ first │ int_1 │ int_2 │ float_1 │ float_2 │
├───┼───────┼───────┼───────┼─────────┼─────────┤
│ 0 │ a     │     3 │    11 │    0.60 │       3 │
│ 1 │ b     │     4 │    14 │    2.20 │       4 │
│ 2 │ c     │     3 │    10 │    1.70 │       3 │
╰───┴───────┴───────┴───────┴─────────┴─────────╯
```

As you can see, the `GroupBy` object is a very powerful variable and it is
worth keeping in memory while you explore your dataset.

## Creating Dataframes

It is also possible to construct dataframes from basic Nushell primitives, such
as integers, decimals, or strings. Let's create a small dataframe using the
command `dfr into-df`.

```shell
❯ let a = ([[a b]; [1 2] [3 4] [5 6]] | dfr into-df)
❯ $a
```

::: tip
For the time being, not all of Nushell primitives can be converted into
a dataframe. This will change in the future, as the dataframe feature matures
:::

We can append columns to a dataframe in order to create a new variable. As an
example, let's append two columns to our mini dataframe `$a`

```shell
❯ let a2 = ($a | dfr with-column $a.a --name a2 | dfr with-column $a.a --name a3)
❯ $a2
╭───┬───┬───┬────┬────╮
│ # │ a │ b │ a2 │ a3 │
├───┼───┼───┼────┼────┤
│ 0 │ 1 │ 2 │  1 │  1 │
│ 1 │ 3 │ 4 │  3 │  3 │
│ 2 │ 5 │ 6 │  5 │  5 │
╰───┴───┴───┴────┴────╯
```

Nushell's powerful piping syntax allows us to create new dataframes by
taking data from other dataframes and appending it to them. Now, if you list your
dataframes you will see in total four dataframes

```shell
❯ dfr ls
╭───┬───────┬─────────┬──────╮
│ # │ name  │ columns │ rows │
├───┼───────┼─────────┼──────┤
│ 0 │ $a2   │       4 │    3 │
│ 1 │ $df_a │       5 │    4 │
│ 2 │ $df   │       8 │   10 │
│ 3 │ $a    │       2 │    3 │
│ 4 │ $res  │       4 │    1 │
╰───┴───────┴─────────┴──────╯
```

One thing that is important to mention is how the memory is being optimized
while working with dataframes, and this is thanks to **Apache Arrow** and
**Polars**. In a very simple representation, each column in a DataFrame is an
Arrow Array, which is using several memory specifications in order to maintain
the data as packed as possible (check [Arrow columnar
format](https://arrow.apache.org/docs/format/Columnar.html)). The other
optimization trick is the fact that whenever possible, the columns from the
dataframes are shared between dataframes, avoiding memory duplication for the
same data. This means that dataframes `$a` and `$a2` are sharing the same two
columns we created using the `dfr into-df` command. For this reason, it isn't
possible to change the value of a column in a dataframe. However, you can
create new columns based on data from other columns or dataframes.

## Working with Series

A `Series` is the building block of a `DataFrame`. Each Series represents a
column with the same data type, and we can create multiple Series of different
types, such as float, int or string.

Let's start our exploration with Series by creating one using the `dfr into-df`
command:

```shell
❯ let new = ([9 8 4] | dfr into-df)
❯ $new
╭───┬───╮
│ # │ 0 │
├───┼───┤
│ 0 │ 9 │
│ 1 │ 8 │
│ 2 │ 4 │
╰───┴───╯
```

We have created a new series from a list of integers (we could have done the
same using floats or strings)

Series have their own basic operations defined, and they can be used to create
other Series. Let's create a new Series by doing some arithmetic on the
previously created column.

```shell
❯ let new_2 = ($new * 3 + 10)
❯ $new_2
╭───┬────╮
│ # │ 0  │
├───┼────┤
│ 0 │ 37 │
│ 1 │ 34 │
│ 2 │ 22 │
╰───┴────╯
```

Now we have a new Series that was constructed by doing basic operations on the
previous variable.

::: tip
If you want to see how many variables you have stored in memory you can
use `$nu.scope.vars`
:::

Let's rename our previous Series so it has a memorable name

```shell
❯ let new_2 = ($new_2 | dfr rename "0" memorable)
❯ $new_2
╭───┬───────────╮
│ # │ memorable │
├───┼───────────┤
│ 0 │        37 │
│ 1 │        34 │
│ 2 │        22 │
╰───┴───────────╯
```

We can also do basic operations with two Series as long as they have the same
data type

```shell
❯ $new - $new_2
╭───┬─────────────────╮
│ # │ sub_0_memorable │
├───┼─────────────────┤
│ 0 │             -28 │
│ 1 │             -26 │
│ 2 │             -18 │
╰───┴─────────────────╯
```

And we can add them to previously defined dataframes

```shell
❯ let new_df = ($a | dfr with-column $new --name new_col)
❯ $new_df
╭───┬───┬───┬─────────╮
│ # │ a │ b │ new_col │
├───┼───┼───┼─────────┤
│ 0 │ 1 │ 2 │       9 │
│ 1 │ 3 │ 4 │       8 │
│ 2 │ 5 │ 6 │       4 │
╰───┴───┴───┴─────────╯
```

The Series stored in a Dataframe can also be used directly, for example,
we can multiply columns `a` and `b` to create a new Series

```shell
❯ $new_df.a * $new_df.b
╭───┬─────────╮
│ # │ mul_a_b │
├───┼─────────┤
│ 0 │       2 │
│ 1 │      12 │
│ 2 │      30 │
╰───┴─────────╯
```

and we can start piping things in order to create new columns and dataframes

```shell
❯ let $new_df = ($new_df | dfr with-column ($new_df.a * $new_df.b / $new_df.new_col) --name my_sum)
❯ $new_df
╭───┬───┬───┬─────────┬────────╮
│ # │ a │ b │ new_col │ my_sum │
├───┼───┼───┼─────────┼────────┤
│ 0 │ 1 │ 2 │       9 │      0 │
│ 1 │ 3 │ 4 │       8 │      1 │
│ 2 │ 5 │ 6 │       4 │      7 │
╰───┴───┴───┴─────────┴────────╯
```

Nushell's piping system can help you create very interesting workflows.

## Series and masks

Series have another key use in when working with `DataFrames`, and it is the fact
that we can build boolean masks out of them. Let's start by creating a simple
mask using the equality operator

```shell
❯ let mask = ($new == 8)
❯ $mask
╭───┬───────╮
│ # │   0   │
├───┼───────┤
│ 0 │ false │
│ 1 │ true  │
│ 2 │ false │
╰───┴───────╯
```

and with this mask we can now filter a dataframe, like this

```shell
❯ $new_df | dfr filter-with $mask
╭───┬───┬───┬─────────┬────────╮
│ # │ a │ b │ new_col │ my_sum │
├───┼───┼───┼─────────┼────────┤
│ 0 │ 3 │ 4 │       8 │      1 │
╰───┴───┴───┴─────────┴────────╯
```

Now we have a new dataframe with only the values where the mask was true.

The masks can also be created from Nushell lists, for example:

```shell
❯ let mask1 = ([true true false] | dfr into-df)
❯ $new_df | dfr filter-with $mask1
╭───┬───┬───┬─────────┬────────╮
│ # │ a │ b │ new_col │ my_sum │
├───┼───┼───┼─────────┼────────┤
│ 0 │ 1 │ 2 │       9 │      0 │
│ 1 │ 3 │ 4 │       8 │      1 │
╰───┴───┴───┴─────────┴────────╯
```

To create complex masks, we have the `AND`

```shell
❯ $mask and $mask1
╭───┬─────────╮
│ # │ and_0_0 │
├───┼─────────┤
│ 0 │ false   │
│ 1 │ true    │
│ 2 │ false   │
╰───┴─────────╯
```

and `OR` operations

```shell
❯ $mask or $mask1
╭───┬────────╮
│ # │ or_0_0 │
├───┼────────┤
│ 0 │ true   │
│ 1 │ true   │
│ 2 │ false  │
╰───┴────────╯
```

We can also create a mask by checking if some values exist in other Series.
Using the first dataframe that we created we can do something like this

```shell
❯ let mask3 = ($df | dfr col first | dfr is-in [b c])
❯ $mask3
╭──────────┬─────────────────────────────────────────────────────────────────────────────────────────────────╮
│          │ ╭───┬─────────┬──────────────╮                                                                  │
│ input    │ │ # │  expr   │    value     │                                                                  │
│          │ ├───┼─────────┼──────────────┤                                                                  │
│          │ │ 0 │ column  │ first        │                                                                  │
│          │ │ 1 │ literal │ Series[list] │                                                                  │
│          │ ╰───┴─────────┴──────────────╯                                                                  │
│ function │ IsIn                                                                                            │
│ options  │ FunctionOptions { collect_groups: ApplyFlat, input_wildcard_expansion: false, auto_explode: tru │
│          │ e, fmt_str: "", cast_to_supertypes: true, allow_rename: false, pass_name_to_apply: false }      │
╰──────────┴─────────────────────────────────────────────────────────────────────────────────────────────────╯
```

and this new mask can be used to filter the dataframe

```shell
❯ $df | dfr filter-with $mask3
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word  │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────┤
│ 0 │     4 │    14 │    0.40 │    3.00 │ b     │ a      │ c     │ second │
│ 1 │     0 │    15 │    0.50 │    4.00 │ b     │ a      │ a     │ third  │
│ 2 │     6 │    16 │    0.60 │    5.00 │ b     │ a      │ a     │ second │
│ 3 │     7 │    17 │    0.70 │    6.00 │ b     │ c      │ a     │ third  │
│ 4 │     8 │    18 │    0.80 │    7.00 │ c     │ c      │ b     │ eight  │
│ 5 │     9 │    19 │    0.90 │    8.00 │ c     │ c      │ b     │ ninth  │
│ 6 │     0 │    10 │    0.00 │    9.00 │ c     │ c      │ b     │ ninth  │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────╯
```

Another operation that can be done with masks is setting or replacing a value
from a series. For example, we can change the value in the column `first` where
the value is equal to `a`

```shell
❯ $df | dfr get first | dfr set new --mask ($df.first =~ a)
╭───┬────────╮
│ # │ string │
├───┼────────┤
│ 0 │ new    │
│ 1 │ new    │
│ 2 │ new    │
│ 3 │ b      │
│ 4 │ b      │
│ 5 │ b      │
│ 6 │ b      │
│ 7 │ c      │
│ 8 │ c      │
│ 9 │ c      │
╰───┴────────╯
```

## Series as indices

Series can be also used as a way of filtering a dataframe by using them as a
list of indices. For example, let's say that we want to get rows 1, 4, and 6
from our original dataframe. With that in mind, we can use the next command to
extract that information

```shell
❯ let indices = ([1 4 6] | dfr into-df)
❯  $df | dfr take $indices
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word  │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────┤
│ 0 │     2 │    12 │    0.20 │    1.00 │ a     │ b      │ c     │ second │
│ 1 │     0 │    15 │    0.50 │    4.00 │ b     │ a      │ a     │ third  │
│ 2 │     7 │    17 │    0.70 │    6.00 │ b     │ c      │ a     │ third  │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────╯
```

The command [`dfr take`](/commands/docs/dfr_take.md) is very handy, especially if we mix it with other commands.
Let's say that we want to extract all rows for the first duplicated element for
column `first`. In order to do that, we can use the command `dfr arg-unique` as
shown in the next example

```shell
❯ let indices = ($df | dfr get first | dfr arg-unique)
❯ $df | dfr take $indices
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word  │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────┤
│ 0 │     1 │    11 │    0.10 │    1.00 │ a     │ b      │ c     │ first  │
│ 1 │     4 │    14 │    0.40 │    3.00 │ b     │ a      │ c     │ second │
│ 2 │     8 │    18 │    0.80 │    7.00 │ c     │ c      │ b     │ eight  │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────╯
```

Or what if we want to create a new sorted dataframe using a column in specific.
We can use the `arg-sort` to accomplish that. In the next example we
can sort the dataframe by the column `word`

::: tip
The same result could be accomplished using the command [`sort`](/commands/docs/sort.md)
:::

```shell
❯ let indices = ($df | dfr get word | dfr arg-sort)
❯ $df | dfr take $indices
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word  │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────┤
│ 0 │     8 │    18 │    0.80 │    7.00 │ c     │ c      │ b     │ eight  │
│ 1 │     1 │    11 │    0.10 │    1.00 │ a     │ b      │ c     │ first  │
│ 2 │     9 │    19 │    0.90 │    8.00 │ c     │ c      │ b     │ ninth  │
│ 3 │     0 │    10 │    0.00 │    9.00 │ c     │ c      │ b     │ ninth  │
│ 4 │     2 │    12 │    0.20 │    1.00 │ a     │ b      │ c     │ second │
│ 5 │     4 │    14 │    0.40 │    3.00 │ b     │ a      │ c     │ second │
│ 6 │     6 │    16 │    0.60 │    5.00 │ b     │ a      │ a     │ second │
│ 7 │     3 │    13 │    0.30 │    2.00 │ a     │ b      │ c     │ third  │
│ 8 │     0 │    15 │    0.50 │    4.00 │ b     │ a      │ a     │ third  │
│ 9 │     7 │    17 │    0.70 │    6.00 │ b     │ c      │ a     │ third  │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────╯
```

And finally, we can create new Series by setting a new value in the marked
indices. Have a look at the next command

```shell
❯ let indices = ([0 2] | dfr into-df);
❯ $df | dfr get int_1 | dfr set-with-idx 123 --indices $indices
╭───┬───────╮
│ # │ int_1 │
├───┼───────┤
│ 0 │   123 │
│ 1 │     2 │
│ 2 │   123 │
│ 3 │     4 │
│ 4 │     0 │
│ 5 │     6 │
│ 6 │     7 │
│ 7 │     8 │
│ 8 │     9 │
│ 9 │     0 │
╰───┴───────╯
```

## Unique values

Another operation that can be done with `Series` is to search for unique values
in a list or column. Lets use again the first dataframe we created to test
these operations.

The first and most common operation that we have is `value_counts`. This
command calculates a count of the unique values that exist in a Series. For
example, we can use it to count how many occurrences we have in the column
`first`

```shell
❯ $df | dfr get first | dfr value-counts
╭───┬───────┬────────╮
│ # │ first │ counts │
├───┼───────┼────────┤
│ 0 │ b     │      4 │
│ 1 │ a     │      3 │
│ 2 │ c     │      3 │
╰───┴───────┴────────╯
```

As expected, the command returns a new dataframe that can be used to do more
queries.

Continuing with our exploration of `Series`, the next thing that we can do is
to only get the unique unique values from a series, like this

```shell
❯ $df | dfr get first | dfr unique
╭───┬───────╮
│ # │ first │
├───┼───────┤
│ 0 │ c     │
│ 1 │ b     │
│ 2 │ a     │
╰───┴───────╯
```

Or we can get a mask that we can use to filter out the rows where data is
unique or duplicated. For example, we can select the rows for unique values
in column `word`

```shell
❯ $df | dfr filter-with ($df | dfr get word | dfr is-unique)
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬───────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │ word  │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼───────┤
│ 0 │     1 │    11 │    0.10 │    1.00 │ a     │ b      │ c     │ first │
│ 1 │     8 │    18 │    0.80 │    7.00 │ c     │ c      │ b     │ eight │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴───────╯
```

Or all the duplicated ones

```shell
❯ $df | dfr filter-with ($df | dfr get word | dfr is-duplicated)
╭───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────╮
│ # │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word  │
├───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────┤
│ 0 │     2 │    12 │    0.20 │    1.00 │ a     │ b      │ c     │ second │
│ 1 │     3 │    13 │    0.30 │    2.00 │ a     │ b      │ c     │ third  │
│ 2 │     4 │    14 │    0.40 │    3.00 │ b     │ a      │ c     │ second │
│ 3 │     0 │    15 │    0.50 │    4.00 │ b     │ a      │ a     │ third  │
│ 4 │     6 │    16 │    0.60 │    5.00 │ b     │ a      │ a     │ second │
│ 5 │     7 │    17 │    0.70 │    6.00 │ b     │ c      │ a     │ third  │
│ 6 │     9 │    19 │    0.90 │    8.00 │ c     │ c      │ b     │ ninth  │
│ 7 │     0 │    10 │    0.00 │    9.00 │ c     │ c      │ b     │ ninth  │
╰───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────╯
```

## Lazy Dataframes

Lazy dataframes are a way to query data by creating a logical plan. The
advantage of this approach is that the plan never gets evaluated until you need
to extract data. This way you could chain together aggregations, joins and
selections and collect the data once you are happy with the selected
operations.

Let's create a small example of a lazy dataframe

```shell
❯ let a = ([[a b]; [1 a] [2 b] [3 c] [4 d]] | dfr into-lazy)
❯ $a
╭────────────────┬─────────────────────────────────────────────────────────╮
│ plan           │   DF ["a", "b"]; PROJECT */2 COLUMNS; SELECTION: "None" │
│                │                                                         │
│ optimized_plan │   DF ["a", "b"]; PROJECT */2 COLUMNS; SELECTION: "None" │
│                │                                                         │
╰────────────────┴─────────────────────────────────────────────────────────╯
```

As you can see, the resulting dataframe is not yet evaluated, it stays as a
set of instructions that can be done on the data. If you were to collect that
dataframe you would get the next result

```shell
❯ $a | dfr collect
╭───┬───┬───╮
│ # │ a │ b │
├───┼───┼───┤
│ 0 │ 1 │ a │
│ 1 │ 2 │ b │
│ 2 │ 3 │ c │
│ 3 │ 4 │ d │
╰───┴───┴───╯
```

as you can see, the collect command executes the plan and creates a nushell
table for you.

All dataframes operations should work with eager or lazy dataframes. They are
converted in the background for compatibility. However, to take advantage of
lazy operations if is recommended to only use lazy operations with lazy
dataframes.

To find all lazy dataframe operations you can use

```shell
$nu.scope.commands | where category =~ lazyframe
```

With your lazy frame defined we can start chaining operations on it. For
example this

```shell
❯ $a |
∙ dfr reverse |
∙ dfr with-column [
∙  ((dfr col a) * 2 | dfr as double_a)
∙  ((dfr col a) / 2 | dfr as half_a)
∙ ] | dfr collect
╭───┬───┬───┬──────────┬────────╮
│ # │ a │ b │ double_a │ half_a │
├───┼───┼───┼──────────┼────────┤
│ 0 │ 4 │ d │        8 │      2 │
│ 1 │ 3 │ c │        6 │      1 │
│ 2 │ 2 │ b │        4 │      1 │
│ 3 │ 1 │ a │        2 │      0 │
╰───┴───┴───┴──────────┴────────╯
```

:::tip
You can use the line buffer editor to format your queries (`ctr + o`) easily
:::

This query uses the lazy reverse command to invert the dataframe and the
`dfr with-column` command to create new two columns using `expressions`.
An `expression` is used to define an operation that is executed on the lazy
frame. When put together they create the whole set of instructions used by the
lazy commands to query the data. To list all the commands that generate an
expression you can use

```shell
$nu.scope.commands | where category =~ expression
```

In our previous example, we use the `dfr col` command to indicate that column `a`
will be multiplied by 2 and then it will be aliased to the name `double_a`.
In some cases the use of the `dfr col` command can be inferred. For example,
using the `dfr select` command we can use only a string

```shell
> $a | dfr select a | dfr collect
```

or the `dfr col` command

```shell
> $a | dfr select (dfr col a) | dfr collect
```

Let's try something more complicated and create aggregations from a lazy
dataframe

```shell
❯ let a = ( [[name value]; [one 1] [two 2] [one 1] [two 3]] | dfr into-lazy )
❯ $a |
∙ dfr group-by name |
∙ dfr agg [
∙  (dfr col value | dfr sum | dfr as sum)
∙  (dfr col value | dfr mean | dfr as mean)
∙ ] | dfr collect
╭───┬──────┬─────┬──────╮
│ # │ name │ sum │ mean │
├───┼──────┼─────┼──────┤
│ 0 │ two  │   5 │ 2.50 │
│ 1 │ one  │   2 │ 1.00 │
╰───┴──────┴─────┴──────╯
```

And we could join on a lazy dataframe that hasn't being collected. Let's join
the resulting group by to the original lazy frame

```shell
❯ let a = ( [[name value]; [one 1] [two 2] [one 1] [two 3]] | dfr into-lazy )
❯ let group = ($a
∙ | dfr group-by name
∙ | dfr agg [
∙   (dfr col value | dfr sum | dfr as sum)
∙   (dfr col value | dfr mean | dfr as mean)
∙ ])
❯ $a | dfr join $group name name | dfr collect
╭───┬──────┬───────┬─────┬──────╮
│ # │ name │ value │ sum │ mean │
├───┼──────┼───────┼─────┼──────┤
│ 0 │ one  │     1 │   2 │ 1.00 │
│ 1 │ two  │     2 │   5 │ 2.50 │
│ 2 │ one  │     1 │   2 │ 1.00 │
│ 3 │ two  │     3 │   5 │ 2.50 │
╰───┴──────┴───────┴─────┴──────╯
```

As you can see lazy frames are a powerful construct that will let you query
data using a flexible syntax, resulting in blazing fast results.

## Dataframe commands

So far we have seen quite a few operations that can be done using `DataFrame`s
commands. However, the commands we have used so far are not all the commands
available to work with data and be assured that there will be more as the
feature becomes more stable.

The next list shows the available dataframe commands with their descriptions, and
whenever possible, their analogous Nushell command.

::: warning
This list may be outdated. To get the up-to-date command list, see
[Dataframe](/commands/categories/dataframe.md),
[Lazyframe](/commands/categories/lazyframe.md),
[Dataframe Or Lazyframe](/commands/categories/dataframe_or_lazyframe.md), and
[Expression](/commands/categories/expression.md)
command categories.
:::


| Command Name    | Applies To                  | Description                                                                | Nushell Equivalent            |
| --------------- | --------------------------- | -------------------------------------------------------------------------- | ----------------------------- |
| aggregate       | DataFrame, GroupBy, Series  | Performs an aggregation operation on a dataframe, groupby or series object | math                          |
| all-false       | Series                      | Returns true if all values are false                                       |                               |
| all-true        | Series                      | Returns true if all values are true                                        | all                           |
| arg-max         | Series                      | Return index for max value in series                                       |                               |
| arg-min         | Series                      | Return index for min value in series                                       |                               |
| arg-sort        | Series                      | Returns indexes for a sorted series                                        |                               |
| arg-true        | Series                      | Returns indexes where values are true                                      |                               |
| arg-unique      | Series                      | Returns indexes for unique values                                          |                               |
| count-null      | Series                      | Counts null values                                                         |                               |
| count-unique    | Series                      | Counts unique value                                                        |                               |
| drop            | DataFrame                   | Creates a new dataframe by dropping the selected columns                   | drop                          |
| drop-duplicates | DataFrame                   | Drops duplicate values in dataframe                                        |                               |
| drop-nulls      | DataFrame, Series           | Drops null values in dataframe                                             |                               |
| dtypes          | DataFrame                   | Show dataframe data types                                                  |                               |
| filter-with     | DataFrame                   | Filters dataframe using a mask as reference                                |                               |
| first           | DataFrame                   | Creates new dataframe with first rows                                      | first                         |
| get             | DataFrame                   | Creates dataframe with the selected columns                                | get                           |
| group-by        | DataFrame                   | Creates a groupby object that can be used for other aggregations           | group-by                      |
| is-duplicated   | Series                      | Creates mask indicating duplicated values                                  |                               |
| is-in           | Series                      | Checks if elements from a series are contained in right series             | in                            |
| is-not-null     | Series                      | Creates mask where value is not null                                       |                               |
| is-null         | Series                      | Creates mask where value is null                                           | `<column_name> == $nothing`   |
| is-unique       | Series                      | Creates mask indicating unique values                                      |                               |
| join            | DataFrame                   | Joins a dataframe using columns as reference                               |                               |
| last            | DataFrame                   | Creates new dataframe with last rows                                       | last                          |
| ls-df           |                             | Lists stored dataframes                                                    |                               |
| melt            | DataFrame                   | Unpivot a DataFrame from wide to long format                               |                               |
| not             | Series Inverts boolean mask |                                                                            |
| open            |                             | Loads dataframe form csv file                                              | open                          |
| pivot           | GroupBy                     | Performs a pivot operation on a groupby object                             | pivot                         |
| rename          | Dataframe, Series           | Renames a series                                                           | rename                        |
| sample          | DataFrame                   | Create sample dataframe                                                    |                               |
| select          | DataFrame                   | Creates a new dataframe with the selected columns                          | select                        |
| set             | Series                      | Sets value where given mask is true                                        |                               |
| set-with-idx    | Series                      | Sets value in the given index                                              |                               |
| shift           | Series                      | Shifts the values by a given period                                        |                               |
| show            | DataFrame                   | Converts a section of the dataframe to a Table or List value               |                               |
| slice           | DataFrame                   | Creates new dataframe from a slice of rows                                 |                               |
| sort-by         | DataFrame, Series           | Creates new sorted dataframe or series                                     | sort                          |
| take            | DataFrame, Series           | Creates new dataframe using the given indices                              |                               |
| to csv          | DataFrame                   | Saves dataframe to csv file                                                | to csv                        |
| into df         |                             | Converts a pipelined Table or List into Dataframe                          |                               |
| dummies         | DataFrame                   | Creates a new dataframe with dummy variables                               |                               |
| to parquet      | DataFrame                   | Saves dataframe to parquet file                                            |                               |
| unique          | Series                      | Returns unique values from a series                                        | uniq                          |
| value-counts    | Series                      | Returns a dataframe with the counts for unique values in series            |                               |
| where           | DataFrame                   | Filter dataframe to match the condition                                    | where                         |
| with-column     | DataFrame                   | Adds a series to the dataframe                                             | `insert <column_name> <value> \| upsert <column_name> { <new_value> }` |

## Future of Dataframes

We hope that by the end of this page you have a solid grasp of how to use the
dataframe commands. As you can see they offer powerful operations that can
help you process data faster and natively.

However, the future of these dataframes is still very experimental. New
commands and tools that take advantage of these commands will be added as they
mature.

Keep visiting this book in order to check the new things happening to
dataframes and how they can help you process data faster and efficiently.
