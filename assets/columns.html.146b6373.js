import{_ as t,u as e,o,c as p,a,t as n,d as c,e as l}from"./app.1457b60e.js";const r={computed:{frontmatter(){return e().value}}},u={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},k=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; columns </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the columns from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns
</code></pre></div><p>Get the first column from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> first
</code></pre></div><p>Get the second column from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">1</span>
</code></pre></div>`,9);function m(g,_,f,b,x,s){return o(),p("div",null,[a("h1",u,[i,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),k])}var w=t(r,[["render",m],["__file","columns.html.vue"]]);export{w as default};
