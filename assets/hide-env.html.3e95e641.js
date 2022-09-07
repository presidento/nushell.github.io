import{_ as t,o as s,c as r,a as e,t as n,d as o,e as i}from"./app.8034769a.js";const d={},c={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; hide-env ...name --ignore-errors</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...name</code>: environment variable names to hide</li><li><code>--ignore-errors</code>: do not throw an error if an environment variable was not found</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Hide an environment variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env HZ_ENV_ABC <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> hide-env HZ_ENV_ABC<span class="token punctuation">;</span> <span class="token string">&#39;HZ_ENV_ABC&#39;</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span>.name
</code></pre></div>`,7);function _(a,m){return s(),r("div",null,[e("h1",c,[l,p,e("code",null,n(a.$frontmatter.title),1)]),e("div",h,n(a.$frontmatter.usage),1),u])}const v=t(d,[["render",_],["__file","hide-env.html.vue"]]);export{v as default};