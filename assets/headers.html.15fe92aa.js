import{_ as e,o as n,c as t,a,t as o,d as r,e as p}from"./app.9011b7da.js";const c={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),r(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; headers </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns headers from table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;a b c|1 2 3&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;|&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; &quot;</span> <span class="token operator">|</span> headers
</code></pre></div><p>Don&#39;t panic on rows with different headers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;a b c|1 2 3|1 2 3 4&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;|&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; &quot;</span> <span class="token operator">|</span> headers
</code></pre></div>`,7);function h(s,u){return n(),t("div",null,[l,a("div",i,o(s.$frontmatter.usage),1),d])}var g=e(c,[["render",h],["__file","headers.html.vue"]]);export{g as default};