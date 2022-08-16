import{_ as s,o as t,c as o,a as n,b as r,d as e,e as i,r as c}from"./app.842570d5.js";const l={},p=n("h1",{id:"direnv",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#direnv","aria-hidden":"true"},"#"),e(" Direnv")],-1),d=e("Many people use "),h={href:"https://direnv.net",target:"_blank",rel:"noopener noreferrer"},u=e("direnv"),v=e(" to load an environment upon entering a directory as well as unloading it when exiting the directory. Configuring direnv to work with nushell requires nushell version 0.66 or later."),_=i(`<hr><h3 id="configuring-direnv" tabindex="-1"><a class="header-anchor" href="#configuring-direnv" aria-hidden="true">#</a> Configuring direnv</h3><p>To make direnv work with nushell the way it does with other shells requires us to use the hooks functionality in nushell:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
  hooks: <span class="token punctuation">{</span>
    pre_prompt: <span class="token punctuation">[</span><span class="token punctuation">{</span>
      code: <span class="token string">&quot;
        let direnv = (direnv export json | from json)
        let direnv = if (<span class="token variable">$direnv</span> | length) == 1 { <span class="token variable">$direnv</span> } else { {} }
        <span class="token variable">$direnv</span> | load-env
      &quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>With that configuration in place, direnv should now work with nushell.</p>`,5);function k(f,g){const a=c("ExternalLinkIcon");return t(),o("div",null,[p,n("p",null,[d,n("a",h,[u,r(a)]),v]),_])}var w=s(l,[["render",k],["__file","direnv.html.vue"]]);export{w as default};