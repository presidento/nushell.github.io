import{_ as t,z as r,A as o,X as a,C as s,D as n,a6 as l}from"./framework.3d018c9f.js";const c={},d={id:"frontmatter-title-for-database",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; order-by ...select --ascending --nulls-first</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...select</code>: Select expression(s) on the table</li><li><code>--ascending</code>: Order by ascending values</li><li><code>--nulls-first</code>: Show nulls first in order</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>orders query by a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> order-by a
    <span class="token operator">|</span> describe
</code></pre></div><p>orders query by column a ascending and by column b</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> order-by a <span class="token parameter variable">--ascending</span>
    <span class="token operator">|</span> order-by b
    <span class="token operator">|</span> describe
</code></pre></div>`,9);function b(e,u){return r(),o("div",null,[a("h1",d,[p,s(),a("code",null,n(e.$frontmatter.title),1),s(" for database")]),a("div",i,n(e.$frontmatter.database),1),h])}const m=t(c,[["render",b],["__file","order-by.html.vue"]]);export{m as default};
