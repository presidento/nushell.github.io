import{_ as t,u as n,o as r,c as o,a,t as s,d as c,e as p}from"./app.1457b60e.js";const l={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),h={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; load-env (update)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>update</code>: the record to use for updates</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Load variables from an input stream</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>NAME: ABE, AGE: UNKNOWN<span class="token punctuation">}</span> <span class="token operator">|</span> load-env<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$env</span>.NAME
</code></pre></div><p>Load variables from an argument</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> load-env <span class="token punctuation">{</span>NAME: ABE, AGE: UNKNOWN<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$env</span>.NAME
</code></pre></div>`,9);function _(v,f,g,k,b,e){return r(),o("div",null,[a("h1",d,[i,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var N=t(l,[["render",_],["__file","load-env.html.vue"]]);export{N as default};
