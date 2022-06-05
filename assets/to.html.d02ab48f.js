import{_ as n,r as l,o as c,c as r,a as s,b as o,w as t,d as a,e as p}from"./app.68c16707.js";const m={},d=s("p",null,[a("Converts table data into a string or binary. The target format is specified as a subcommand, like "),s("code",null,"to csv"),a(" or "),s("code",null,"to json"),a(".")],-1),i=s("h2",{id:"available-subcommands",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#available-subcommands","aria-hidden":"true"},"#"),a(" Available Subcommands")],-1),h=s("li",null,"to bson",-1),u=a("to csv"),_=s("li",null,"to html",-1),b=a("to json"),k=a("to md"),f=s("li",null,"to sqlite",-1),g=a("to toml"),v=a("to tsv"),x=a("to url"),y=a("to xml"),C=a("to yaml"),N=p(`<p><em>Subcommands without links are currently missing their documentation.</em></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502   \u2502 name       \u2502 path</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 X \u2502 filesystem \u2502 /home/shaurya
 <span class="token number">1</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Pictures
 <span class="token number">2</span> \u2502   \u2502 filesystem \u2502 /home/shaurya/Desktop
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> shells <span class="token operator">|</span> to csv
 ,name,path
X,filesystem,/home/shaurya
 ,filesystem,/home/shaurya/Pictures
 ,filesystem,/home/shaurya/Desktop
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> sample.url
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 bread    \u2502 cheese \u2502 meat \u2502 fat
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 baguette \u2502 comt\xE9  \u2502 ham  \u2502 butter
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> sample.url  <span class="token operator">|</span> to url
<span class="token assign-left variable">bread</span><span class="token operator">=</span>baguette<span class="token operator">&amp;</span><span class="token assign-left variable">cheese</span><span class="token operator">=</span>comt%C3%A9<span class="token operator">&amp;</span><span class="token assign-left variable">meat</span><span class="token operator">=</span>ham<span class="token operator">&amp;</span><span class="token assign-left variable">fat</span><span class="token operator">=</span>butter
</code></pre></div>`,6);function V(j,w){const e=l("RouterLink");return c(),r("div",null,[d,i,s("ul",null,[h,s("li",null,[o(e,{to:"/old_book/commands/to-csv.html"},{default:t(()=>[u]),_:1})]),_,s("li",null,[o(e,{to:"/old_book/commands/to-json.html"},{default:t(()=>[b]),_:1})]),s("li",null,[o(e,{to:"/old_book/commands/to-md.html"},{default:t(()=>[k]),_:1})]),f,s("li",null,[o(e,{to:"/old_book/commands/to-toml.html"},{default:t(()=>[g]),_:1})]),s("li",null,[o(e,{to:"/old_book/commands/to-tsv.html"},{default:t(()=>[v]),_:1})]),s("li",null,[o(e,{to:"/old_book/commands/to-url.html"},{default:t(()=>[x]),_:1})]),s("li",null,[o(e,{to:"/old_book/commands/to-xml.html"},{default:t(()=>[y]),_:1})]),s("li",null,[o(e,{to:"/old_book/commands/to-yaml.html"},{default:t(()=>[C]),_:1})])]),N])}var S=n(m,[["render",V],["__file","to.html.vue"]]);export{S as default};
