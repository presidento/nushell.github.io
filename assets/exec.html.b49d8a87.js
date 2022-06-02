import{_ as t,o as s,c as n,a as e,t as r,d as c,e as o}from"./app.9011b7da.js";const d={},i=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),c(),e("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; exec (command) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>command</code>: the command to execute</li><li><code>...rest</code>: any additional arguments for the command</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Currently supported only on Unix-based systems.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Execute external &#39;ps aux&#39; tool</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span> <span class="token function">ps</span> aux
</code></pre></div><p>Execute &#39;nautilus&#39;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span> nautilus
</code></pre></div>`,11);function p(a,u){return s(),n("div",null,[i,e("div",l,r(a.$frontmatter.usage),1),h])}var m=t(d,[["render",p],["__file","exec.html.vue"]]);export{m as default};