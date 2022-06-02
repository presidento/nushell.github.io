import{_ as s,o as t,c as n,a as e,t as o,d as l,e as r}from"./app.9011b7da.js";const i={},c=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),l(),e("code",null,"{{ $frontmatter.title }}")],-1),p={style:{"white-space":"pre-wrap"}},d=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; kill (pid) ...rest --force --quiet --signal</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pid</code>: process id of process that is to be killed</li><li><code>...rest</code>: rest of processes to kill</li><li><code>--force</code>: forcefully kill the process</li><li><code>--quiet</code>: won&#39;t print anything to the console</li><li><code>--signal {int}</code>: signal decimal number to be sent instead of the default 15 (unsupported on Windows)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Kill the pid using the most memory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> sort-by mem <span class="token operator">|</span> last <span class="token operator">|</span> <span class="token function">kill</span> <span class="token variable">$in</span>.pid
</code></pre></div><p>Force kill a given pid</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">kill</span> --force <span class="token number">12345</span>
</code></pre></div><p>Send INT signal</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">kill</span> -s <span class="token number">2</span> <span class="token number">12345</span>
</code></pre></div>`,11);function h(a,u){return t(),n("div",null,[c,e("div",p,o(a.$frontmatter.usage),1),d])}var g=s(i,[["render",h],["__file","kill.html.vue"]]);export{g as default};