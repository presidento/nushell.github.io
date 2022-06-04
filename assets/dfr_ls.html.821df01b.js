import{_ as t,u as e,o,c as p,a,t as n,d as c,e as r}from"./app.1457b60e.js";const l={computed:{frontmatter(){return e().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},f=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr ls </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates a new dataframe and shows it in the dataframe list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token builtin class-name">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dfr <span class="token function">ls</span>
</code></pre></div>`,5);function k(m,_,b,g,x,s){return o(),p("div",null,[a("h1",i,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),f])}var w=t(l,[["render",k],["__file","dfr_ls.html.vue"]]);export{w as default};
