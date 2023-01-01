import{_ as n,z as o,A as r,X as a,C as s,D as t,a6 as c}from"./framework.3d018c9f.js";const i={},l={id:"frontmatter-title-for-misc",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-misc","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; history --clear --long</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--clear</code>: Clears out the history entries</li><li><code>--long</code>: Show long listing of entries for sqlite history</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get current history length</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> length
</code></pre></div><p>Show last 5 commands you have ran</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> last <span class="token number">5</span>
</code></pre></div><p>Search all the commands from history that contains &#39;cargo&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> wrap cmd <span class="token operator">|</span> where cmd <span class="token operator">=~</span> <span class="token function">cargo</span>
</code></pre></div>`,11);function m(e,u){return o(),r("div",null,[a("h1",l,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for misc")]),a("div",h,t(e.$frontmatter.misc),1),p])}const f=n(i,[["render",m],["__file","history.html.vue"]]);export{f as default};