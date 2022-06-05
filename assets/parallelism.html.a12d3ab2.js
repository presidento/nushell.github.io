import{_ as c,r as p,o as l,c as i,a as s,b as o,w as t,d as a,e}from"./app.68c16707.js";const d={},h=s("h1",{id:"\u5E76\u884C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5E76\u884C","aria-hidden":"true"},"#"),a(" \u5E76\u884C")],-1),r=s("p",null,"Nushell \u73B0\u5728\u5DF2\u7ECF\u521D\u6B65\u652F\u6301\u5E76\u884C\u8FD0\u884C\u4EE3\u7801\u4E86\uFF0C\u8FD9\u5141\u8BB8\u4F60\u4F7F\u7528\u66F4\u591A\u7684\u8BA1\u7B97\u673A\u786C\u4EF6\u8D44\u6E90\u6765\u5904\u7406\u4E00\u4E2A\u6D41\u7684\u5404\u4E2A\u5143\u7D20\u3002",-1),_=s("p",null,[a("\u4F60\u4F1A\u6CE8\u610F\u5230\u8FD9\u4E9B\u547D\u4EE4\u5305\u542B\u5176\u7279\u6709\u7684"),s("code",null,"par-"),a("\u547D\u540D\uFF0C\u6BCF\u4E00\u4E2A\u90FD\u5BF9\u5E94\u7740\u4E00\u4E2A\u975E\u5E76\u884C\u7684\u7248\u672C\uFF0C\u8FD9\u5141\u8BB8\u4F60\u5148\u8F7B\u677E\u5730\u4EE5\u4E32\u884C\u7684\u98CE\u683C\u5199\u4EE3\u7801\uFF0C\u7136\u540E\u518D\u56DE\u5934\u7528\u51E0\u4E2A\u989D\u5916\u7684\u5B57\u7B26\u8F7B\u677E\u5730\u5C06\u4E32\u884C\u811A\u672C\u8F6C\u6362\u6210\u5E76\u884C\u811A\u672C\u3002")],-1),u=s("h2",{id:"par-each",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#par-each","aria-hidden":"true"},"#"),a(),s("code",null,"par-each")],-1),k=a("\u6700\u5E38\u89C1\u7684\u5E76\u884C\u547D\u4EE4\u662F"),m=s("code",null,"par-each",-1),b=a("\uFF0C\u5B83\u662F"),f=s("code",null,"each",-1),g=a("\u547D\u4EE4\u7684\u642D\u6863\u3002"),v=a("\u4E0E"),x=s("code",null,"each",-1),N=a("\u4E00\u6837\uFF0C"),$=s("code",null,"par-each",-1),w=a("\u5BF9\u7BA1\u9053\u4E2D\u6D41\u5165\u7684\u5143\u7D20\u8FDB\u884C\u5904\u7406\uFF0C\u5728\u6BCF\u4E2A\u5143\u7D20\u4E0A\u8FD0\u884C\u4E00\u4E2A\u4EE3\u7801\u5757\u3002\u4E0E"),B=s("code",null,"each",-1),C=a("\u4E0D\u540C\uFF0C"),E=s("code",null,"par-each",-1),V=a("\u5C06\u5E76\u884C\u5730\u8FDB\u884C\u8FD9\u4E9B\u64CD\u4F5C\u3002"),y=a("\u5047\u8BBE\u4F60\u60F3\u8BA1\u7B97\u5F53\u524D\u76EE\u5F55\u4E0B\u6BCF\u4E2A\u5B50\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6570\u91CF\u3002\u4F7F\u7528"),F=s("code",null,"each",-1),L=a("\u4F60\u53EF\u4EE5\u8FD9\u6837\u5199\u3002"),R=e(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span>
    <span class="token punctuation">{</span> name: <span class="token variable">$it</span>.name, len: <span class="token punctuation">(</span>ls <span class="token variable">$it</span>.name <span class="token operator">|</span> length<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u6761\u76EE\u521B\u5EFA\u4E00\u6761\u8BB0\u5F55\uFF0C\u5E76\u5728\u5176\u4E2D\u586B\u5165\u76EE\u5F55\u7684\u540D\u79F0\u548C\u8BE5\u5B50\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u6570\u3002</p><p>\u5728\u4F60\u7684\u673A\u5668\u4E0A\uFF0C\u65F6\u95F4\u53EF\u80FD\u6709\u6240\u4E0D\u540C\u3002\u5BF9\u4E8E\u8FD9\u53F0\u673A\u5668\u7684\u5F53\u524D\u76EE\u5F55\u6765\u8BF4\uFF0C\u9700\u8981 21 \u6BEB\u79D2\u7684\u65F6\u95F4\u3002</p>`,3),z=a("\u73B0\u5728\uFF0C\u7531\u4E8E\u8FD9\u4E2A\u64CD\u4F5C\u53EF\u4EE5\u5E76\u884C\u8FD0\u884C\uFF0C\u8BA9\u6211\u4EEC\u628A\u4E0A\u9762\u7684\u64CD\u4F5C\u8F6C\u6362\u4E3A\u5E76\u884C\u7684\uFF0C\u628A"),A=s("code",null,"each",-1),D=a("\u6539\u4E3A"),S=s("code",null,"par-each",-1),T=a("\uFF1A"),j=e(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span> <span class="token operator">|</span> par-each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span>
    <span class="token punctuation">{</span> name: <span class="token variable">$it</span>.name, len: <span class="token punctuation">(</span>ls <span class="token variable">$it</span>.name <span class="token operator">|</span> length<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u8FD9\u53F0\u673A\u5668\u4E0A\uFF0C\u73B0\u5728\u5B83\u7684\u8FD0\u884C\u65F6\u95F4\u4E3A 6 \u6BEB\u79D2\u3002\u8FD9\u662F\u4E00\u4E2A\u76F8\u5F53\u5927\u7684\u5DEE\u5F02!</p>`,2),q=a("\u987A\u4FBF\u63D0\u4E00\u4E0B\uFF1A\u7531\u4E8E "),G=a("\u73AF\u5883\u53D8\u91CF\u662F\u6709\u4F5C\u7528\u57DF\u7684"),H=a("\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528"),I=s("code",null,"par-each",-1),J=a("\u5728\u591A\u4E2A\u76EE\u5F55\u4E2D\u5E76\u884C\u5DE5\u4F5C\uFF08\u6CE8\u610F "),K=s("code",null,"cd",-1),M=a(" \u547D\u4EE4\uFF09\uFF1A"),O=e(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span> <span class="token operator">|</span> par-each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span>
    <span class="token punctuation">{</span> name: <span class="token variable">$it</span>.name, len: <span class="token punctuation">(</span>cd <span class="token variable">$it</span>.name<span class="token punctuation">;</span> <span class="token function">ls</span> <span class="token operator">|</span> length<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),P=a('\u5982\u679C\u4F60\u770B\u4E00\u4E0B\u7ED3\u679C\uFF0C\u4F60\u4F1A\u6CE8\u610F\u5230\uFF0C\u5B83\u4EEC\u6BCF\u6B21\u8FD0\u884C\u8FD4\u56DE\u7684\u987A\u5E8F\u662F\u4E0D\u540C\u7684\uFF08\u8FD9\u53D6\u51B3\u4E8E\u4F60\u7CFB\u7EDF\u4E0A\u7684\u786C\u4EF6\u7EBF\u7A0B\u6570\u91CF\uFF09\u3002\u968F\u7740\u4EFB\u52A1\u7684\u5B8C\u6210\uFF0C\u6211\u4EEC\u5F97\u5230\u4E86\u6B63\u786E\u7684\u7ED3\u679C\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u5F97\u5230\u7ED3\u679C\u4EE5\u7279\u5B9A\u7684\u987A\u5E8F\u51FA\u73B0\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u6DFB\u52A0\u989D\u5916\u7684\u6B65\u9AA4\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4E0A\u8FF0\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u80FD\u60F3\u6309 "name" \u5B57\u6BB5\u5BF9\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F\u3002\u8FD9\u6837\uFF0C\u6211\u4EEC\u7684\u811A\u672C\u7684'),Q=s("code",null,"each",-1),U=a("\u548C"),W=s("code",null,"par-each",-1),X=a("\u7248\u672C\u90FD\u80FD\u5F97\u5230\u76F8\u540C\u7684\u7ED3\u679C\u3002");function Y(Z,ss){const n=p("RouterLink");return l(),i("div",null,[h,r,_,u,s("p",null,[k,o(n,{to:"/book/commands/par-each.html"},{default:t(()=>[m]),_:1}),b,o(n,{to:"/book/commands/each.html"},{default:t(()=>[f]),_:1}),g]),s("p",null,[v,o(n,{to:"/book/commands/each.html"},{default:t(()=>[x]),_:1}),N,o(n,{to:"/book/commands/par-each.html"},{default:t(()=>[$]),_:1}),w,o(n,{to:"/book/commands/each.html"},{default:t(()=>[B]),_:1}),C,o(n,{to:"/book/commands/par-each.html"},{default:t(()=>[E]),_:1}),V]),s("p",null,[y,o(n,{to:"/book/commands/each.html"},{default:t(()=>[F]),_:1}),L]),R,s("p",null,[z,o(n,{to:"/book/commands/each.html"},{default:t(()=>[A]),_:1}),D,o(n,{to:"/book/commands/par-each.html"},{default:t(()=>[S]),_:1}),T]),j,s("p",null,[q,o(n,{to:"/zh-CN/book/environment.html#%E4%BD%9C%E7%94%A8%E5%9F%9F"},{default:t(()=>[G]),_:1}),H,I,J,K,M]),O,s("p",null,[P,o(n,{to:"/book/commands/each.html"},{default:t(()=>[Q]),_:1}),U,o(n,{to:"/book/commands/par-each.html"},{default:t(()=>[W]),_:1}),X])])}var ns=c(d,[["render",Y],["__file","parallelism.html.vue"]]);export{ns as default};
