import{_ as t,o as e,c as n,a,t as r,d as o,e as p}from"./app.9011b7da.js";const c={},i=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr strftime (fmt)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>fmt</code>: Format rule</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Formats date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> dt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;2020-08-04T16:39:18+00:00&#39;</span> <span class="token operator">|</span> into datetime -z <span class="token string">&#39;UTC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$dt</span> <span class="token variable">$dt</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> dfr strftime <span class="token string">&quot;%Y/%m/%d&quot;</span>
</code></pre></div>`,7);function u(s,h){return e(),n("div",null,[i,a("div",l,r(s.$frontmatter.usage),1),d])}var m=t(c,[["render",u],["__file","dfr_strftime.html.vue"]]);export{m as default};