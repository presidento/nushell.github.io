import{_ as t,u as n,o as r,c as o,a,t as s,d as c,e as p}from"./app.68c16707.js";const i={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),h={style:{"white-space":"pre-wrap"}},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ansi strip ...column path</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...column path</code>: optionally, remove ANSI sequences by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Strip ANSI escape sequences from a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span> <span class="token punctuation">(</span>ansi green<span class="token punctuation">)</span> <span class="token punctuation">(</span>ansi cursor_on<span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">]</span> <span class="token operator">|</span> str collect <span class="token operator">|</span> ansi strip
</code></pre></div>`,7);function _(f,g,k,x,b,e){return r(),o("div",null,[a("h1",l,[d,u,a("code",null,s(e.frontmatter.title),1)]),a("div",h,s(e.frontmatter.usage),1),m])}var S=t(i,[["render",_],["__file","ansi_strip.html.vue"]]);export{S as default};
