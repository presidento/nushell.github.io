import{_ as t,o as s,c as r,a,t as n,d as o,e as d}from"./app.9011b7da.js";const i={},c=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; metadata (expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>expression</code>: the expression you want metadata for</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the metadata of a variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> metadata <span class="token variable">$a</span>
</code></pre></div><p>Get the metadata of the input</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> metadata
</code></pre></div>`,9);function p(e,m){return s(),r("div",null,[c,a("div",l,n(e.$frontmatter.usage),1),h])}var f=t(i,[["render",p],["__file","metadata.html.vue"]]);export{f as default};