import{_ as s,u as n,o as r,c as o,a as e,t,d as c,e as i}from"./app.1457b60e.js";const d={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; reject ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the names of columns to remove from the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Lists the files in a directory without showing the modified column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> reject modified
</code></pre></div><p>Reject the specified field in a record</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>a: <span class="token number">1</span>, b: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> reject a
</code></pre></div>`,9);function f(_,g,b,x,k,a){return r(),o("div",null,[e("h1",l,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var j=s(d,[["render",f],["__file","reject.html.vue"]]);export{j as default};
