import{_ as t,z as o,A as r,X as a,C as e,D as n,a6 as p}from"./framework.3d018c9f.js";const c={},i={id:"frontmatter-title-for-filters",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; zip (other)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: the other input</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Zip two lists</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">zip</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre></div><p>Zip two streams</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span> <span class="token operator">|</span> <span class="token function">zip</span> <span class="token number">4</span><span class="token punctuation">..</span><span class="token number">6</span>
</code></pre></div>`,9);function h(s,m){return o(),r("div",null,[a("h1",i,[l,e(),a("code",null,n(s.$frontmatter.title),1),e(" for filters")]),a("div",d,n(s.$frontmatter.filters),1),u])}const k=t(c,[["render",h],["__file","zip.html.vue"]]);export{k as default};