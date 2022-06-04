import{_ as e,u as t,o as p,c as o,a,t as n,d as c,e as l}from"./app.1457b60e.js";const r={computed:{frontmatter(){return t().value}}},u={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),k={style:{"white-space":"pre-wrap"}},h=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; upsert (field) (replacement value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to update or insert</li><li><code>replacement value</code>: the new value to give the cell(s)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Update a column value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> upsert name <span class="token string">&#39;Nushell&#39;</span>
</code></pre></div><p>Insert a new column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> upsert language <span class="token string">&#39;Rust&#39;</span>
</code></pre></div><p>Use in block form for more involved updating logic</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>count fruit<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> upsert count <span class="token punctuation">{</span><span class="token operator">|</span>f<span class="token operator">|</span> <span class="token variable">$f</span>.count + <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre></div><p>Use in block form for more involved updating logic</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>project, authors<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu&#39;</span>, <span class="token punctuation">[</span><span class="token string">&#39;Andr\xE9s&#39;</span>, <span class="token string">&#39;JT&#39;</span>, <span class="token string">&#39;Yehuda&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> upsert authors <span class="token punctuation">{</span><span class="token operator">|</span>a<span class="token operator">|</span> <span class="token variable">$a</span>.authors <span class="token operator">|</span> str collect <span class="token string">&#39;,&#39;</span><span class="token punctuation">}</span>
</code></pre></div>`,13);function g(m,b,f,v,_,s){return p(),o("div",null,[a("h1",u,[i,d,a("code",null,n(s.frontmatter.title),1)]),a("div",k,n(s.frontmatter.usage),1),h])}var w=e(r,[["render",g],["__file","upsert.html.vue"]]);export{w as default};
