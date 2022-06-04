import{_ as t,o as d,c as r,e}from"./app.1457b60e.js";const o={},s=e('<h1 id="\u4ECE\u5176\u4ED6-shell-\u6216-dsl-\u5230-nu" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5176\u4ED6-shell-\u6216-dsl-\u5230-nu" aria-hidden="true">#</a> \u4ECE\u5176\u4ED6 Shell \u6216 DSL \u5230 Nu</h1><p>\u8FD9\u4E2A\u8868\u683C\u80CC\u540E\u7684\u60F3\u6CD5\u662F\u5E2E\u52A9\u4F60\u4E86\u89E3 Nu \u7684\u5185\u7F6E\u548C\u63D2\u4EF6\u6240\u63D0\u4F9B\u547D\u4EE4\u4E0E\u5176\u4ED6\u5DF2\u77E5\u7684 Shell \u548C\u7279\u5B9A\u9886\u57DF\u8BED\u8A00(DSL)\u7684\u5173\u7CFB\u3002\u6211\u4EEC\u8BD5\u56FE\u5236\u4F5C\u4E00\u5F20\u6240\u6709 Nu \u547D\u4EE4\u548C\u5B83\u4EEC\u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\u7684\u5BF9\u5E94\u5173\u7CFB\u7684\u8868\u3002\u6B22\u8FCE\u5927\u5BB6\u53C2\u4E0E\u8D21\u732E\u3002</p><p>\u6CE8\u610F\uFF1A\u6B64\u8868\u9488\u5BF9 Nu 0.43 \u6216\u66F4\u9AD8\u7248\u672C\u3002</p><table><thead><tr><th>Nushell</th><th>SQL</th><th>.Net LINQ (C#)</th><th>PowerShell (without external modules)</th><th>Bash</th></tr></thead><tbody><tr><td>alias</td><td>-</td><td>-</td><td>alias</td><td>alias</td></tr><tr><td>append</td><td>-</td><td>Append</td><td>-Append</td><td></td></tr><tr><td>args</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>autoview</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>math avg</td><td>avg</td><td>Average</td><td>Measure-Object, measure</td><td></td></tr><tr><td>calc, <code>&lt;math expression&gt;</code></td><td>math operators</td><td>Aggregate, Average, Count, Max, Min, Sum</td><td></td><td>bc</td></tr><tr><td>cd</td><td>-</td><td>-</td><td>Set-Location, cd</td><td>cd</td></tr><tr><td>clear</td><td>-</td><td>-</td><td>Clear-Host</td><td>clear</td></tr><tr><td>compact</td><td></td><td></td><td></td><td></td></tr><tr><td>config</td><td>-</td><td>-</td><td>$Profile</td><td>vi .bashrc, .profile</td></tr><tr><td>count</td><td>count</td><td>Count</td><td>Measure-Object, measure</td><td>wc</td></tr><tr><td>cp</td><td>-</td><td>-</td><td>Copy-Item, cp, copy</td><td>cp</td></tr><tr><td>date</td><td>NOW() / getdate()</td><td>DateTime class</td><td>Get-Date</td><td>date</td></tr><tr><td>debug</td><td></td><td></td><td></td><td></td></tr><tr><td>default</td><td></td><td></td><td></td><td></td></tr><tr><td>drop</td><td></td><td></td><td></td><td></td></tr><tr><td>du</td><td>-</td><td>-</td><td></td><td>du</td></tr><tr><td>each</td><td>cursor</td><td></td><td>ForEach-Object, foreach, for</td><td></td></tr><tr><td>echo</td><td>print, union all</td><td>-</td><td>Write-Output, write</td><td>echo</td></tr><tr><td>enter</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>exit</td><td>-</td><td></td><td>exit</td><td>exit</td></tr><tr><td>fetch</td><td>-</td><td>HttpClient,WebClient, HttpWebRequest/Response</td><td>Invoke-WebRequest</td><td>wget</td></tr><tr><td>first</td><td>top, limit</td><td>First, FirstOrDefault</td><td>Select-Object -First</td><td>head</td></tr><tr><td>format</td><td></td><td>String.Format</td><td>String.Format</td><td></td></tr><tr><td>from</td><td>import flatfile, openjson, cast(variable as xml)</td><td>-</td><td>Import/ConvertFrom-{Csv,Xml,Html,Json}</td><td></td></tr><tr><td>get</td><td></td><td>Select</td><td>(cmd).column</td><td></td></tr><tr><td>group-by</td><td>group by</td><td>GroupBy, group</td><td>Group-Object, group</td><td></td></tr><tr><td>headers</td><td></td><td></td><td></td><td></td></tr><tr><td>help</td><td>sp_help</td><td>-</td><td>Get-Help, help, man</td><td>man</td></tr><tr><td>histogram</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>history</td><td>-</td><td>-</td><td>Get-History, history</td><td>history</td></tr><tr><td>inc(<code>*</code>)</td><td>-</td><td></td><td>-</td><td>-</td></tr><tr><td>is_empty</td><td>is null</td><td>String.InNullOrEmpty</td><td>String.InNullOrEmpty</td><td></td></tr><tr><td>keep, =take</td><td>top, limit</td><td>Take</td><td>Select-Object -First</td><td>head</td></tr><tr><td>keep-until</td><td></td><td></td><td></td><td></td></tr><tr><td>keep-while</td><td></td><td>TakeWhile</td><td></td><td></td></tr><tr><td>kill</td><td>-</td><td>-</td><td>Stop-Process, kill</td><td>kill</td></tr><tr><td>last</td><td></td><td>Last, LastOrDefault</td><td>Select-Object -Last</td><td>tail</td></tr><tr><td>lines</td><td>-</td><td>-</td><td>File.ReadAllLines</td><td></td></tr><tr><td>ls</td><td>-</td><td>-</td><td>Get-ChildItem, dir, ls</td><td>ls</td></tr><tr><td>match(<code>*</code>)</td><td>case when</td><td>Regex.IsMatch</td><td>[regex]</td><td></td></tr><tr><td>merge</td><td></td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td>-</td><td>-</td><td>mkdir, md</td><td>mkdir</td></tr><tr><td>mv</td><td>-</td><td>-</td><td>Move-Item, mv, move, mi</td><td>mv</td></tr><tr><td>next</td><td></td><td></td><td></td><td></td></tr><tr><td>nth</td><td>limit x offset y, rownumber =</td><td>ElementAt</td><td>[x], indexing operator, ElementAt</td><td></td></tr><tr><td>open</td><td></td><td></td><td>Get-Content, gc, cat, type</td><td>cat</td></tr><tr><td>parse</td><td></td><td></td><td></td><td></td></tr><tr><td>transpose</td><td>pivot</td><td>-</td><td></td><td></td></tr><tr><td>post(<code>*</code>)</td><td>-</td><td>HttpClient,WebClient, HttpWebRequest/Response</td><td>Invoke-WebRequest</td><td></td></tr><tr><td>prepend</td><td></td><td></td><td></td><td></td></tr><tr><td>prev</td><td></td><td></td><td></td><td></td></tr><tr><td>ps(<code>*</code>)</td><td>-</td><td>-</td><td>Get-Process, ps, gps</td><td>ps</td></tr><tr><td>pwd</td><td>-</td><td>-</td><td>Get-Location, pwd</td><td>pwd</td></tr><tr><td>range</td><td></td><td>Range</td><td>1..10, &#39;a&#39;..&#39;f&#39;</td><td></td></tr><tr><td>reduce</td><td></td><td>Aggregate</td><td></td><td></td></tr><tr><td>reject</td><td></td><td></td><td></td><td></td></tr><tr><td>rename</td><td>-</td><td>-</td><td>Rename-Item, ren, rni</td><td>mv</td></tr><tr><td>reverse</td><td></td><td>Reverse</td><td>[Array]::Reverse($var)</td><td></td></tr><tr><td>rm</td><td>-</td><td>-</td><td>Remove-Item, del, erase, rd, ri, rm, rmdir</td><td>rm</td></tr><tr><td>save</td><td>-</td><td>-</td><td>Write-Output, Out-File</td><td>&gt; foo.txt</td></tr><tr><td>select</td><td>select</td><td>Select</td><td>Select-Object, select</td><td></td></tr><tr><td>shells</td><td>-</td><td>-</td><td>-</td><td></td></tr><tr><td>shuffle</td><td></td><td>Random</td><td>Sort-Object {Get-Random}</td><td>-</td></tr><tr><td>size</td><td></td><td></td><td>Measure-Object, measure</td><td>wc</td></tr><tr><td>skip</td><td>where row_number()</td><td>Skip</td><td>Select-Object -Skip</td><td></td></tr><tr><td>skip until</td><td></td><td></td><td></td><td></td></tr><tr><td>skip while</td><td></td><td>SkipWhile</td><td></td><td></td></tr><tr><td>sort-by</td><td>order by</td><td>OrderBy, OrderByDescending, ThenBy, ThenByDescending</td><td>Sort-Object, sort</td><td></td></tr><tr><td>split-by</td><td></td><td>Split</td><td>Split</td><td></td></tr><tr><td>split column</td><td></td><td>-</td><td></td><td></td></tr><tr><td>split row</td><td></td><td>-</td><td></td><td></td></tr><tr><td>str(<code>*</code>)</td><td>string functions</td><td>String class</td><td>String class</td><td></td></tr><tr><td>str collect</td><td>concat_ws</td><td>Join</td><td>Join-String</td><td></td></tr><tr><td>str trim</td><td>rtrim, ltrim</td><td>Trim, TrimStart, TrimEnd</td><td>Trim</td><td></td></tr><tr><td>sum</td><td>sum</td><td>Sum</td><td>Measure-Object, measure</td><td></td></tr><tr><td>sys(<code>*</code>)</td><td>-</td><td>-</td><td>Get-ComputerInfo</td><td>uname, lshw, lsblk, lscpu, lsusb, hdparam, free</td></tr><tr><td>table</td><td></td><td></td><td>Format-Table, ft, Format-List, fl</td><td></td></tr><tr><td>tags</td><td>-</td><td>-</td><td>-</td><td></td></tr><tr><td>textview(<code>*</code>)</td><td>-</td><td>-</td><td>Get-Content, cat</td><td></td></tr><tr><td>tree(<code>*</code>)</td><td>-</td><td>-</td><td>tree</td><td></td></tr><tr><td>to</td><td>-</td><td>-</td><td>Export/ConvertTo-{Csv,Xml,Html,Json}</td><td></td></tr><tr><td>touch</td><td>-</td><td>-</td><td>Set-Content</td><td>touch</td></tr><tr><td>uniq</td><td>distinct</td><td>Distinct</td><td>Get-Unique, gu</td><td>uniq</td></tr><tr><td>upsert</td><td>As</td><td>-</td><td></td><td></td></tr><tr><td>version</td><td>select @@version</td><td>-</td><td>$PSVersionTable</td><td></td></tr><tr><td>with_env</td><td>-</td><td>-</td><td>$env:FOO = &#39;bar&#39;</td><td>export foo = &quot;bar&quot;</td></tr><tr><td>where</td><td>where</td><td>Where</td><td>Where-Object, where, &quot;?&quot; operator</td><td></td></tr><tr><td>which</td><td>-</td><td>-</td><td>-</td><td>which</td></tr><tr><td>wrap</td><td></td><td></td><td></td><td></td></tr></tbody></table><ul><li><code>*</code> - \u8FD9\u4E9B\u547D\u4EE4\u662F\u6807\u51C6\u63D2\u4EF6\u7684\u4E00\u90E8\u5206</li></ul>',5),l=[s];function a(i,c){return d(),r("div",null,l)}var p=t(o,[["render",a],["__file","nushell_map.html.vue"]]);export{p as default};
