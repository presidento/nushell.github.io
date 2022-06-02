import{_ as s,o as t,c as n,a as e,t as r,d as o,e as c}from"./app.9011b7da.js";const i={},p=e("h1",{id:"frontmatter-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),e("code",null,"{{ $frontmatter.title }}")],-1),d={style:{"white-space":"pre-wrap"}},l=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; size </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Count the number of words in a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;There are seven words in this sentence&quot;</span> <span class="token operator">|</span> size
</code></pre></div><p>Counts unicode characters</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;\u4ECA\u5929\u5929\u6C14\u771F\u597D&#39;</span> <span class="token operator">|</span> size
</code></pre></div><p>Counts Unicode characters correctly in a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;Ame\u0301lie Amelie&quot;</span> <span class="token operator">|</span> size
</code></pre></div>`,9);function h(a,u){return t(),n("div",null,[p,e("div",d,r(a.$frontmatter.usage),1),l])}var _=s(i,[["render",h],["__file","size.html.vue"]]);export{_ as default};