import{_ as a,o as s,c as e,e as n}from"./app.68c16707.js";const o={},t=n(`<p>Runs a block on sliding windows of <code>window_size</code> rows of a table at a time.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> each window <span class="token operator">&lt;</span>window_size<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>block<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;window_size&gt;</code> the size of each window</li><li><code>&lt;block&gt;</code> the block to run on each group</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-s, --stride <code>&lt;integer&gt;</code>: the number of rows to slide over between windows</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Echo the sum of each window</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> each window <span class="token number">2</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token variable">$it</span> <span class="token operator">|</span> math <span class="token function">sum</span> <span class="token punctuation">}</span>
</code></pre></div>`,10),c=[t];function l(p,r){return s(),e("div",null,c)}var d=a(o,[["render",l],["__file","each-window.html.vue"]]);export{d as default};
