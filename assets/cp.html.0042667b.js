import{_ as a,o as e,c as s,e as t}from"./app.68c16707.js";const n={},r=t(`<p>Copy files.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> <span class="token operator">&lt;</span>src<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>dst<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;src&gt;</code> the place to copy from</li><li><code>&lt;dst&gt;</code> the place to copy to</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-r, --recursive: copy recursively through subdirectories</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Copy myfile to dir_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> myfile dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> -r dir_a dir_b
</code></pre></div>`,12),c=[r];function o(l,p){return e(),s("div",null,c)}var d=a(n,[["render",o],["__file","cp.html.vue"]]);export{d as default};
