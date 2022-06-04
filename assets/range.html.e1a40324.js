import{_ as a,o as s,c as n,e}from"./app.1457b60e.js";const t={},p=e(`<p>Return only the selected rows.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> range <span class="token operator">&lt;</span>rows<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;rows&gt;</code> range of rows to return: Eg) 4..7 (=&gt; from 4 to 7)</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return rows 1 through 3</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span>
</code></pre></div><p>Return the third row from the end, through to the end</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token punctuation">(</span>-3<span class="token punctuation">..</span><span class="token punctuation">)</span>
</code></pre></div>`,12),o=[p];function r(c,l){return s(),n("div",null,o)}var h=a(t,[["render",r],["__file","range.html.vue"]]);export{h as default};
