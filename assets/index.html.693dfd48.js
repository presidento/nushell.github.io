import{_ as a,o as s,c as n,e}from"./app.1457b60e.js";const o={},t=e(`<h1 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introducci\xF3n</h1><p>Hola, y bienvenido al proyecto Nushell. El objetivo de este proyecto es tomar la filosof\xEDa Unix de shells, d\xF3nde tuber\xEDas <em>-pipes-</em> conectan comandos simples juntos y llevarlos al estilo moderno de desarrollo.</p><p>Nu toma ideas de muchos territorios familiares: shells tradicionales como bash, shells basadas en objetos como PowerShell, programaci\xF3n funcional, programaci\xF3n de sistemas, y m\xE1s. Pero, en lugar de ser un &quot;Todo en uno&quot;, Nu enfoca su energ\xEDa en hacer algunas cosas bien:</p><ul><li>Crear una multiplataforma shell flexible con un toque moderno.</li><li>Permitir mezclar y combinar aplicaciones de l\xEDnea de comandos con una shell que entiende la estructura de sus datos.</li><li>Tenga el brillo UX que proporcionan las aplicaciones modernas CLI.</li></ul><p>La manera m\xE1s facil de ver qu\xE9 puede hacer Nu es con ejemplos, iniciemos.</p><p>Lo primero que notar\xE1s al ejercutar un comando como <code>ls</code> es que en lugar de un bloque de texto que regresa, recibir\xE1s una tabla estructurada.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment">#  \u2502         name          \u2502 type \u2502   size    \u2502  modified   \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  <span class="token number">0</span> \u2502 <span class="token number">404</span>.html              \u2502 <span class="token function">file</span> \u2502     <span class="token number">429</span> B \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">1</span> \u2502 CONTRIBUTING.md       \u2502 <span class="token function">file</span> \u2502     <span class="token number">955</span> B \u2502 <span class="token number">8</span> mins ago  \u2502
\u2502  <span class="token number">2</span> \u2502 Gemfile               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">3</span> \u2502 Gemfile.lock          \u2502 <span class="token function">file</span> \u2502   <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">4</span> \u2502 LICENSE               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">5</span> \u2502 README.md             \u2502 <span class="token function">file</span> \u2502     <span class="token number">213</span> B \u2502 <span class="token number">3</span> days ago  \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>La tabla no solamente muestra lo que hay en el directorio de una manera distinta sino algo m\xE1s. Como las tablas de una hoja de c\xE1lculo <em>-<em>spreadsheet</em>-</em>, esta tabla te permite trabajar con los datos m\xE1s interactivamente.</p><p>Lo primero que vamos hacer es ordenar nuestra tabla por tama\xF1o. Para poder hacerlo tomaremos la salida de <code>ls</code> y la alimentaremos al comando que ordena tablas basado en los valores de una columna (para este ejemplo ser\xEDa la columna <code>size</code>).</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment">#  \u2502         name          \u2502 type \u2502   size    \u2502  modified   \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  <span class="token number">0</span> \u2502 Gemfile.lock          \u2502 <span class="token function">file</span> \u2502   <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">1</span> \u2502 SUMMARY.md            \u2502 <span class="token function">file</span> \u2502   <span class="token number">3.7</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">2</span> \u2502 Gemfile               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">3</span> \u2502 LICENSE               \u2502 <span class="token function">file</span> \u2502   <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago  \u2502
\u2502  <span class="token number">4</span> \u2502 CONTRIBUTING.md       \u2502 <span class="token function">file</span> \u2502     <span class="token number">955</span> B \u2502 <span class="token number">9</span> mins ago  \u2502
\u2502  <span class="token number">5</span> \u2502 books.md              \u2502 <span class="token function">file</span> \u2502     <span class="token number">687</span> B \u2502 <span class="token number">3</span> days ago  \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>Puedes observar que para lograrlo no tuvimos que pasar argumentos al comando <code>ls</code>. En cambio, nosotros usamos el comando <code>sort-by</code> que proporciona Nu para ordenar la salida del comando <code>ls</code>. Para ver los archivos m\xE1s grandes en las primeras filas usamos el comando <code>reverse</code>.</p><p>Nu proporciona muchos comandos que trabajan con tablas. Por ejemplo, podemos filtrar los contenidos de la tabla de <code>ls</code> para \xFAnicamente mostrar archivos superiores a 1 kilobytes:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502       name        \u2502 type \u2502  size   \u2502  modified  \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 Gemfile           \u2502 <span class="token function">file</span> \u2502 <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">1</span> \u2502 Gemfile.lock      \u2502 <span class="token function">file</span> \u2502 <span class="token number">6.9</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">2</span> \u2502 LICENSE           \u2502 <span class="token function">file</span> \u2502 <span class="token number">1.1</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2502 <span class="token number">3</span> \u2502 SUMMARY.md        \u2502 <span class="token function">file</span> \u2502 <span class="token number">3.7</span> KiB \u2502 <span class="token number">3</span> days ago \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Al igual que en la filosof\xEDa Unix, poder hacer que los comandos hablen entre ellos nos da maneras de mezclar y combinar de formas distintas. Miremos otro ejemplo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502  <span class="token comment">#  \u2502 pid  \u2502         name         \u2502 status  \u2502  cpu  \u2502    mem    \u2502 virtual  \u2502</span>
\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   <span class="token number">0</span> \u2502 <span class="token number">7570</span> \u2502 nu                   \u2502 Running \u2502  <span class="token number">1.96</span> \u2502  <span class="token number">23.2</span> MiB \u2502 <span class="token number">32.8</span> GiB \u2502
\u2502   <span class="token number">1</span> \u2502 <span class="token number">3533</span> \u2502 remindd              \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502 <span class="token number">103.6</span> MiB \u2502 <span class="token number">32.3</span> GiB \u2502
\u2502   <span class="token number">2</span> \u2502 <span class="token number">3495</span> \u2502 TVCacheExtension     \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502  <span class="token number">11.9</span> MiB \u2502 <span class="token number">32.2</span> GiB \u2502
\u2502   <span class="token number">3</span> \u2502 <span class="token number">3490</span> \u2502 MusicCacheExtension  \u2502 Sleep   \u2502  <span class="token number">0.00</span> \u2502  <span class="token number">12.9</span> MiB \u2502 <span class="token number">32.2</span> GiB \u2502
<span class="token punctuation">..</span>.
</code></pre></div><p>Es posible que est\xE9s familiarizado con el comando <code>ps</code> si has utilizado Linux. Con dicho comando, podemos tener una lista de los procesos actuales que ejecuta el sistema, qu\xE9 estado tienen y sus nombres. Tambi\xE9n podemos ver la carga CPU del proceso.</p><p>\xBFQu\xE9 tal si quisi\xE9ramos mostrar los procesos que activamente usan el CPU? As\xED como hicimos con el comando <code>ls</code> previamente, tambi\xE9n podemos trabajar con la tabla que nos devuelve <code>ps</code>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 pid  \u2502      name      \u2502 status  \u2502  cpu   \u2502    mem    \u2502 virtual  \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">1583</span> \u2502 Terminal       \u2502 Running \u2502  <span class="token number">20.69</span> \u2502 <span class="token number">127.8</span> MiB \u2502 <span class="token number">33.0</span> GiB \u2502
\u2502 <span class="token number">1</span> \u2502  <span class="token number">579</span> \u2502 photoanalysisd \u2502 Running \u2502 <span class="token number">139.50</span> \u2502  <span class="token number">99.9</span> MiB \u2502 <span class="token number">32.3</span> GiB \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Hasta ahora, hemos visto el uso de <code>ls</code> y <code>ps</code> para enumerar archivos y procesos. Nu tambi\xE9n ofrece otros comandos que pueden crear tablas con informaci\xF3n de gran utilidad. Exploremos <code>date</code> y <code>sys</code>.</p><p>Ejecutando <code>date now</code> nos proporciona informaci\xF3n del d\xEDa y tiempo:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 -08:00
</code></pre></div><p>Para obtener una tabla podemos alimentar la salida a <code>date to-table</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token comment"># \u2502 year \u2502 month \u2502 day \u2502 hour \u2502 minute \u2502 second \u2502 timezone \u2502</span>
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 <span class="token number">0</span> \u2502 <span class="token number">2022</span> \u2502     <span class="token number">3</span> \u2502   <span class="token number">7</span> \u2502   <span class="token number">14</span> \u2502     <span class="token number">45</span> \u2502      <span class="token number">3</span> \u2502 -08:00   \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Ejecutando <code>sys</code> devuelve informaci\xF3n sobre el sistema en el que se ejecuta Nu:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token function">host</span>  \u2502 <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> \u2502
\u2502 cpu   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    \u2502
\u2502 disks \u2502 <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    \u2502
\u2502 mem   \u2502 <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> \u2502
\u2502 temp  \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     \u2502
\u2502 net   \u2502 <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>Esta tabla se ve un poco diferente con las que ya hemos trabajado. El comando <code>sys</code> nos regresa una tabla que tambi\xE9n contiene tablas estructuradas en las celdas en vez de valores simples. Para explorar esos datos, necesitamos <em>obtener</em> la columna deseada para mostrar:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name           \u2502 Debian GNU/Linux       \u2502
\u2502 os version     \u2502 <span class="token number">11</span>                     \u2502
\u2502 kernel version \u2502 <span class="token number">5.10</span>.92-v8+            \u2502
\u2502 <span class="token function">hostname</span>       \u2502 lifeless               \u2502
\u2502 <span class="token function">uptime</span>         \u2502 19day 21hr 34min 45sec \u2502
\u2502 sessions       \u2502 <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>El comando <code>get</code> nos permite ir directo al valor de una columa de la tabla. Aqu\xED estamos mirando la columna &quot;host&quot; que contiene informaci\xF3n del host d\xF3nde se est\xE1 ejecutando Nu. El nombre del sistema operativo, hostname, CPU, y m\xE1s. Miremos los nombres de los usuarios en el sistema:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u256E
\u2502 <span class="token number">0</span> \u2502 jt \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>En este momento, solo hay un usuario en el sistema llamado &quot;jt&quot;. Notar\xE1s que podemos pasar una ruta de columna <em>-<em>column path</em>-</em> y no \xFAnicamente el nombre de una columna. Nu tomar\xE1 esta ruta de columna e ir\xE1 a los datos correspondientes en la tabla.</p><p>Es posible que hayas notado algo m\xE1s diferente tambi\xE9n. En lugar de tener una tabla de datos, tenemos solo un elemento individual: la cadena &quot;jt&quot;. Nu trabaja tanto con tabla de datos as\xED como cadenas. Cadenas son una parte importante de trabajar con comandos fuera de Nu.</p><p>Miremos en acci\xF3n c\xF3mo funcionan las cadenas fuera de Nu. Tomaremos el ejemplo anterior y ejecutaremos el comando externo <code>echo</code> (el car\xE1cter <code>^</code> le informa a Nu que no se desea usar el comando <em>interno</em> tambi\xE9n llamado <code>echo</code>):</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>Si esto se parece mucho a lo que ten\xEDamos antes, \xA1tienes buen ojo! Es similar, pero con una diferencia importante: hemos llamado <code>echo</code> con el valor que vimos antes. Esto nos permite pasar datos fuera de Nu a <code>echo</code> (o cualquier comando fuera de Nu, como <code>git</code> por ejemplo)</p><p><em>Nota: Para texto de ayuda de los comandos internos de Nu, puedes descubrirlos con el comando <code>help</code></em>:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
Explore and manipulate paths.

There are three ways to represent a path:

* As a path literal, e.g., <span class="token string">&#39;/home/viking/spam.txt&#39;</span>
* As a structured path: a table with <span class="token string">&#39;parent&#39;</span>, <span class="token string">&#39;stem&#39;</span>, and <span class="token string">&#39;extension&#39;</span> <span class="token punctuation">(</span>and
* <span class="token string">&#39;prefix&#39;</span> on Windows<span class="token punctuation">)</span> columns. This <span class="token function">format</span> is produced by the <span class="token string">&#39;path parse&#39;</span>
  subcommand.
* As an inner list of path parts, e.g., <span class="token string">&#39;[[ / home viking spam.txt ]]&#39;</span><span class="token builtin class-name">.</span>
  Splitting into parts is <span class="token keyword">done</span> by the <span class="token variable"><span class="token variable">\`</span>path <span class="token function">split</span><span class="token variable">\`</span></span> command.

All subcommands accept all three variants as an input. Furthermore, the <span class="token string">&#39;path
join&#39;</span> subcommand can be used to <span class="token function">join</span> the structured path or path parts back into
the path literal.

Usage:
  <span class="token operator">&gt;</span> path

Subcommands:
  path <span class="token function">basename</span> - Get the final component of a path
  path <span class="token function">dirname</span> - Get the parent directory of a path
  path exists - Check whether a path exists
  path <span class="token function">expand</span> - Try to <span class="token function">expand</span> a path to its absolute form
  path <span class="token function">join</span> - Join a structured path or a list of path parts.
  path parse - Convert a path into structured data.
  path relative-to - Get a path as relative to another path.
  path <span class="token function">split</span> - Split a path into parts by a separator.
  path <span class="token builtin class-name">type</span> - Get the <span class="token builtin class-name">type</span> of the object a path refers to <span class="token punctuation">(</span>e.g., file, dir, symlink<span class="token punctuation">)</span>

Flags:
  -h, --help
      Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,36),p=[t];function c(l,r){return s(),n("div",null,p)}var u=a(o,[["render",c],["__file","index.html.vue"]]);export{u as default};
