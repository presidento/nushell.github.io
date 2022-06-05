import{_ as r,u as s,o as n,c as o,a as e,t,d as c,e as i}from"./app.68c16707.js";const d={computed:{frontmatter(){return s().value}}},h={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=c(),u={style:{"white-space":"pre-wrap"}},_=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq char ...rest --separator --terminator</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: sequence chars</li><li><code>--separator {string}</code>: separator character (defaults to \\n)</li><li><code>--terminator {string}</code>: terminator character (defaults to \\n)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sequence a to e with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char a e
</code></pre></div><p>sequence a to e with pipe separator separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char -s <span class="token string">&#39;|&#39;</span> a e
</code></pre></div>`,9);function m(f,g,x,v,b,a){return n(),o("div",null,[e("h1",h,[l,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),_])}var k=r(d,[["render",m],["__file","seq_char.html.vue"]]);export{k as default};
