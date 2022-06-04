import{_ as s,u as r,o as d,c as n,a as e,t,d as i,e as o}from"./app.1457b60e.js";const c={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=i(),u={style:{"white-space":"pre-wrap"}},m=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random dice --dice --sides</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--dice {int}</code>: The amount of dice being rolled</li><li><code>--sides {int}</code>: The amount of sides a die has</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Roll 1 dice with 6 sides each</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random dice
</code></pre></div><p>Roll 10 dice with 12 sides each</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random dice -d <span class="token number">10</span> -s <span class="token number">12</span>
</code></pre></div>`,9);function _(f,g,x,b,v,a){return d(),n("div",null,[e("h1",l,[h,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var w=s(c,[["render",_],["__file","random_dice.html.vue"]]);export{w as default};
