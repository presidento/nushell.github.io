import{_ as e,o as n,c as t,a,t as r,d as o,e as p}from"./app.9011b7da.js";const l={},c=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr rolling (type) (window)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>type</code>: rolling operation</li><li><code>window</code>: Window size for rolling</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rolling sum for a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr rolling <span class="token function">sum</span> <span class="token number">2</span> <span class="token operator">|</span> dfr drop-nulls
</code></pre></div><p>Rolling max for a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr rolling max <span class="token number">2</span> <span class="token operator">|</span> dfr drop-nulls
</code></pre></div>`,9);function u(s,h){return n(),t("div",null,[c,a("div",i,r(s.$frontmatter.usage),1),d])}var f=e(l,[["render",u],["__file","dfr_rolling.html.vue"]]);export{f as default};