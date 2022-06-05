import{_ as t,u as n,o as r,c as o,a as e,t as s,d as c,e as i}from"./app.68c16707.js";const p={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; save (filename) --raw --append</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>filename</code>: the filename to use</li><li><code>--raw</code>: save file as raw binary</li><li><code>--append</code>: append input to the end of the file</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Save a string to foo.txt in current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;save me&#39;</span> <span class="token operator">|</span> save foo.txt
</code></pre></div><p>Save a record to foo.json in current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span> a: <span class="token number">1</span>, b: <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token operator">|</span> save foo.json
</code></pre></div>`,9);function f(_,g,v,x,b,a){return r(),o("div",null,[e("h1",d,[l,h,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),m])}var w=t(p,[["render",f],["__file","save.html.vue"]]);export{w as default};
