import{_ as n,o as s,c as a,e}from"./app.1457b60e.js";const o={},p=e(`<p>Use <code>rename</code> to give columns more appropriate names.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> /etc/passwd <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">|</span> <span class="token function">rename</span> user password uid gid gecos home shell
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 user   \u2502 password \u2502 uid  \u2502 gid  \u2502 gecos  \u2502 home            \u2502 shell</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 root   \u2502 x        \u2502 <span class="token number">0</span>    \u2502 <span class="token number">0</span>    \u2502 root   \u2502 /root           \u2502 /bin/bash
  <span class="token number">1</span> \u2502 bin    \u2502 x        \u2502 <span class="token number">1</span>    \u2502 <span class="token number">1</span>    \u2502 bin    \u2502 /bin            \u2502 /usr/bin/nologin
  <span class="token number">2</span> \u2502 daemon \u2502 x        \u2502 <span class="token number">2</span>    \u2502 <span class="token number">2</span>    \u2502 daemon \u2502 /               \u2502 /usr/bin/nologin
  <span class="token number">3</span> \u2502 mail   \u2502 x        \u2502 <span class="token number">8</span>    \u2502 <span class="token number">12</span>   \u2502 mail   \u2502 /var/spool/mail \u2502 /usr/bin/nologin
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,3),t=[p];function r(c,l){return s(),a("div",null,t)}var m=n(o,[["render",r],["__file","rename.html.vue"]]);export{m as default};
