import{_ as s,o as n,c as a,e}from"./app.68c16707.js";const p={},o=e(`<p>Obtain the row or column count of a table.</p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li><code>-c</code>, <code>--column</code>: Calculate number of columns in table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name               \u2502 type \u2502 size     \u2502 modified</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span>  \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502   <span class="token number">3.4</span> KB \u2502 <span class="token number">42</span> mins ago
 <span class="token number">1</span>  \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">1.3</span> KB \u2502 <span class="token number">42</span> mins ago
 <span class="token number">2</span>  \u2502 Cargo.lock         \u2502 File \u2502 <span class="token number">113.3</span> KB \u2502 <span class="token number">42</span> mins ago
 <span class="token number">3</span>  \u2502 Cargo.toml         \u2502 File \u2502   <span class="token number">4.6</span> KB \u2502 <span class="token number">42</span> mins ago
 <span class="token number">4</span>  \u2502 LICENSE            \u2502 File \u2502   <span class="token number">1.1</span> KB \u2502 <span class="token number">3</span> months ago
 <span class="token number">5</span>  \u2502 Makefile.toml      \u2502 File \u2502    <span class="token number">449</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">6</span>  \u2502 README.md          \u2502 File \u2502  <span class="token number">15.9</span> KB \u2502 <span class="token number">31</span> mins ago
 <span class="token number">7</span>  \u2502 TODO.md            \u2502 File \u2502      <span class="token number">0</span> B \u2502 <span class="token number">42</span> mins ago
 <span class="token number">8</span>  \u2502 assets             \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">9</span>  \u2502 build.rs           \u2502 File \u2502     <span class="token number">78</span> B \u2502 <span class="token number">4</span> months ago
 <span class="token number">10</span> \u2502 crates             \u2502 Dir  \u2502    <span class="token number">704</span> B \u2502 <span class="token number">42</span> mins ago
 <span class="token number">11</span> \u2502 debian             \u2502 Dir  \u2502    <span class="token number">352</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">12</span> \u2502 <span class="token function">docker</span>             \u2502 Dir  \u2502    <span class="token number">288</span> B \u2502 <span class="token number">3</span> months ago
 <span class="token number">13</span> \u2502 docs               \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">42</span> mins ago
 <span class="token number">14</span> \u2502 features.toml      \u2502 File \u2502    <span class="token number">632</span> B \u2502 <span class="token number">4</span> months ago
 <span class="token number">15</span> \u2502 images             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">16</span> \u2502 rustfmt.toml       \u2502 File \u2502     <span class="token number">16</span> B \u2502 <span class="token number">5</span> months ago
 <span class="token number">17</span> \u2502 src                \u2502 Dir  \u2502    <span class="token number">128</span> B \u2502 <span class="token number">1</span> day ago
 <span class="token number">18</span> \u2502 target             \u2502 Dir  \u2502    <span class="token number">160</span> B \u2502 <span class="token number">5</span> days ago
 <span class="token number">19</span> \u2502 tests              \u2502 Dir  \u2502    <span class="token number">192</span> B \u2502 <span class="token number">3</span> months ago
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>By default, <code>length</code> will return the number of rows in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> length
<span class="token number">20</span>
</code></pre></div><p>The <code>-c</code> flag will produce a count of the columns in the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> length -c
<span class="token number">4</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> File <span class="token operator">|</span> length
<span class="token number">11</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> Dir <span class="token operator">|</span> length
<span class="token number">9</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 2KB <span class="token operator">|</span> length
<span class="token number">4</span>
</code></pre></div>`,12),t=[o];function l(c,r){return n(),a("div",null,t)}var u=s(p,[["render",l],["__file","length.html.vue"]]);export{u as default};
