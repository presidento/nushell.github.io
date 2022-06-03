import{_ as n,u as s,o,c as r,a as e,t,d as i,e as c}from"./app.aa868a80.js";const l={computed:{frontmatter(){return s().value}}},d={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=i(),u={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export env (name) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: name of the environment variable</li><li><code>block</code>: body of the environment variable definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check
https://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Import and evaluate environment variable from a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module foo <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> <span class="token function">env</span> FOO_ENV <span class="token punctuation">{</span> <span class="token string">&quot;BAZ&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use foo FOO_ENV<span class="token punctuation">;</span> <span class="token variable">$env</span>.FOO_ENV
</code></pre></div>`,9);function _(f,v,x,g,k,a){return o(),r("div",null,[e("h1",d,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var N=n(l,[["render",_],["__file","export_env.html.vue"]]);export{N as default};