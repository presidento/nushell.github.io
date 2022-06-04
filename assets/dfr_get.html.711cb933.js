import{_ as s,u as n,o as r,c as o,a,t,d as c,e as p}from"./app.1457b60e.js";const d={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),h={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr get ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column names to sort dataframe</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates dataframe with selected columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr get a
</code></pre></div>`,7);function f(_,k,g,x,b,e){return r(),o("div",null,[a("h1",l,[i,u,a("code",null,t(e.frontmatter.title),1)]),a("div",h,t(e.frontmatter.usage),1),m])}var w=s(d,[["render",f],["__file","dfr_get.html.vue"]]);export{w as default};
