import{_ as s,u as r,o as n,c as o,a,t,d as c,e as l}from"./app.1457b60e.js";const d={computed:{frontmatter(){return r().value}}},i={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),m={style:{"white-space":"pre-wrap"}},_=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from yaml </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts yaml formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a: 1&#39;</span> <span class="token operator">|</span> from yaml
</code></pre></div><p>Converts yaml formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;[ a: 1, b: [1, 2] ]&#39;</span> <span class="token operator">|</span> from yaml
</code></pre></div>`,7);function u(f,g,x,v,b,e){return n(),o("div",null,[a("h1",i,[p,h,a("code",null,t(e.frontmatter.title),1)]),a("div",m,t(e.frontmatter.usage),1),_])}var k=s(d,[["render",u],["__file","from_yaml.html.vue"]]);export{k as default};
