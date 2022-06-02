import{_ as s,o as t,c as e,a,t as o,d as p,e as r}from"./app.9011b7da.js";const c={},i=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),p(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into duration ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column paths to convert to duration (for table input)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to duration in table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;1sec&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;2min&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;3hr&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;4day&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;5wk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into duration value
</code></pre></div><p>Convert string to duration</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;7min&#39;</span> <span class="token operator">|</span> into duration
</code></pre></div>`,9);function d(n,h){return t(),e("div",null,[i,a("div",l,o(n.$frontmatter.usage),1),u])}var g=s(c,[["render",d],["__file","into_duration.html.vue"]]);export{g as default};