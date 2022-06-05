import{_ as s,u as n,o,c as r,a as e,t,d as c,e as i}from"./app.68c16707.js";const d={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},g=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-timezone (time zone)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>time zone</code>: time zone description</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Use &#39;date list-timezone&#39; to list all supported time zones.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the current date in UTC+05:00</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-timezone +0500
</code></pre></div><p>Get the current local date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-timezone <span class="token builtin class-name">local</span>
</code></pre></div><p>Get the current date in Hawaii</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-timezone US/Hawaii
</code></pre></div><p>Get the current date in Hawaii</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2020-10-10 10:00:00 +02:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> to-timezone <span class="token string">&quot;+0500&quot;</span>
</code></pre></div>`,15);function m(f,_,k,x,v,a){return o(),r("div",null,[e("h1",p,[l,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),g])}var z=s(d,[["render",m],["__file","date_to-timezone.html.vue"]]);export{z as default};
