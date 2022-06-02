import{_ as s,o as e,c as r,a,t as n,d as o,e as i}from"./app.9011b7da.js";const p={},c=a("h1",{id:"frontmatter-title",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#"),o(),a("code",null,"{{ $frontmatter.title }}")],-1),l={style:{"white-space":"pre-wrap"}},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str starts-with (pattern) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match</li><li><code>...rest</code>: optionally matches prefix of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if string starts with &#39;my&#39; pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str starts-with <span class="token string">&#39;my&#39;</span>
</code></pre></div><p>Checks if string starts with &#39;my&#39; pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Cargo.toml&#39;</span> <span class="token operator">|</span> str starts-with <span class="token string">&#39;Car&#39;</span>
</code></pre></div><p>Checks if string starts with &#39;my&#39; pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Cargo.toml&#39;</span> <span class="token operator">|</span> str starts-with <span class="token string">&#39;.toml&#39;</span>
</code></pre></div>`,11);function d(t,g){return e(),r("div",null,[c,a("div",l,n(t.$frontmatter.usage),1),h])}var u=s(p,[["render",d],["__file","str_starts-with.html.vue"]]);export{u as default};