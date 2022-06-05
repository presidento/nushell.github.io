import{_ as t,u as p,o,c as e,a as n,t as s,d as c,e as r}from"./app.68c16707.js";const u={computed:{frontmatter(){return p().value}}},l={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=c(),d={style:{"white-space":"pre-wrap"}},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr group-by ...Group by expressions</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...Group by expressions</code>: Expression(s) that define the lazy group by</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Group by and perform an aggregation</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr to-df
    <span class="token operator">|</span> dfr group-by a
    <span class="token operator">|</span> dfr aggregate <span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> dfr min <span class="token operator">|</span> dfr as <span class="token string">&quot;b_min&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> dfr max <span class="token operator">|</span> dfr as <span class="token string">&quot;b_max&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> dfr <span class="token function">sum</span> <span class="token operator">|</span> dfr as <span class="token string">&quot;b_sum&quot;</span><span class="token punctuation">)</span>
     <span class="token punctuation">]</span>
</code></pre></div><p>Group by and perform an aggregation</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr to-df
    <span class="token operator">|</span> dfr to-lazy
    <span class="token operator">|</span> dfr group-by a
    <span class="token operator">|</span> dfr aggregate <span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> dfr min <span class="token operator">|</span> dfr as <span class="token string">&quot;b_min&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> dfr max <span class="token operator">|</span> dfr as <span class="token string">&quot;b_max&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> dfr <span class="token function">sum</span> <span class="token operator">|</span> dfr as <span class="token string">&quot;b_sum&quot;</span><span class="token punctuation">)</span>
     <span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr collect
</code></pre></div>`,9);function b(g,f,h,_,q,a){return o(),e("div",null,[n("h1",l,[i,k,n("code",null,s(a.frontmatter.title),1)]),n("div",d,s(a.frontmatter.usage),1),m])}var y=t(u,[["render",b],["__file","dfr_group-by.html.vue"]]);export{y as default};
