import{_ as n,u as t,o as p,c as o,a,t as s,d as r,e as c}from"./app.68c16707.js";const l={computed:{frontmatter(){return t().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=r(),h={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; append (row)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>row</code>: the row, list, or table to append</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Append one Int item</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token number">4</span>
</code></pre></div><p>Append three Int items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token punctuation">[</span><span class="token number">2,3</span>,4<span class="token punctuation">]</span>
</code></pre></div><p>Append Ints and Strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token punctuation">[</span><span class="token number">2</span>,nu,4,shell<span class="token punctuation">]</span>
</code></pre></div>`,11);function k(g,_,b,f,x,e){return p(),o("div",null,[a("h1",d,[i,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var w=n(l,[["render",k],["__file","append.html.vue"]]);export{w as default};
