import{_ as s,o as t,c as n,a,t as o,d as r,e as p}from"./app.9011b7da.js";const c={},l=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),r(),a("code",null,"{{ $frontmatter.title }}")],-1),i={style:{"white-space":"pre-wrap"}},d=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to text </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs data as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> to text
</code></pre></div><p>Outputs external data as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> <span class="token builtin class-name">help</span> -a <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">find</span> -r <span class="token string">&#39;^ &#39;</span> <span class="token operator">|</span>  to text
</code></pre></div><p>Outputs records as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span>  to text
</code></pre></div>`,9);function h(e,u){return t(),n("div",null,[l,a("div",i,o(e.$frontmatter.usage),1),d])}var x=s(c,[["render",h],["__file","to_text.html.vue"]]);export{x as default};