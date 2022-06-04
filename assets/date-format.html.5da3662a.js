import{_ as a,o as s,c as e,e as n}from"./app.1457b60e.js";const t={},o=n(`<p>Format a given date using the given format string.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token operator">&lt;</span>format<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;format&gt;</code> strftime format</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-t, --table: print date in a table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Format the current date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y.%m.%d_%H %M %S,%z&#39;</span>
</code></pre></div><p>Format the current date and print in a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> -t <span class="token string">&#39;%Y-%m-%d_%H:%M:%S %z&#39;</span>
</code></pre></div>`,12),r=[o];function p(c,l){return s(),e("div",null,r)}var d=a(t,[["render",p],["__file","date-format.html.vue"]]);export{d as default};
