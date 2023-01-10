import{_ as t,z as l,A as o,X as a,C as s,D as n,a6 as r}from"./framework.3d018c9f.js";const c={},p={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fill-null </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fills the null values by 0</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> <span class="token builtin class-name">shift</span> <span class="token number">2</span> <span class="token operator">|</span> fill-null <span class="token number">0</span>
</code></pre></div>`,5);function h(e,f){return l(),o("div",null,[a("h1",p,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for lazyframe")]),a("div",d,n(e.$frontmatter.lazyframe),1),u])}const _=t(c,[["render",h],["__file","fill-null.html.vue"]]);export{_ as default};