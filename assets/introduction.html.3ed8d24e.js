import{_ as e,o as n,c as o,e as t}from"./app.68c16707.js";const a={},s=t(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u5927\u5BB6\u597D\uFF0C\u6B22\u8FCE\u6765\u5230 Nushell \u9879\u76EE\u3002\u8FD9\u4E2A\u9879\u76EE\u7684\u76EE\u6807\u662F\u5F70\u663E Shell \u7684 Unix \u54F2\u5B66\uFF0C\u5C31\u662F\u7528\u7BA1\u9053\u5C06\u7B80\u5355\u7684\u547D\u4EE4\u8FDE\u63A5\u5728\u4E00\u8D77\uFF0C\u5E76\u4E14\u5E26\u6765\u73B0\u4EE3\u7684\u5F00\u53D1\u98CE\u683C\u3002</p><p>Nu \u4ECE\u8BB8\u591A\u719F\u6089\u7684\u9886\u57DF\u4E2D\u6C72\u53D6\u4E86\u7EBF\u7D22\uFF1Abash \u7B49\u4F20\u7EDF shell\uFF0CPowerShell \u7B49\u9AD8\u7EA7 shell\uFF0C\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF0C\u7CFB\u7EDF\u7F16\u7A0B\u7B49\u3002\u4F46\u662F Nu \u5E76\u6CA1\u6709\u8BD5\u56FE\u6210\u4E3A\u6240\u6709\u884C\u4E1A\u7684\u6770\u4F5C\uFF0C\u800C\u662F\u5C06\u7CBE\u529B\u96C6\u4E2D\u5728\u505A\u597D\u4E00\u4E9B\u4E8B\u60C5\u4E0A\uFF1A</p><ul><li>\u521B\u5EFA\u5177\u6709\u73B0\u4EE3\u611F\u7684\u7075\u6D3B\u7684\u8DE8\u5E73\u53F0 Shell</li><li>\u5141\u8BB8\u4F60\u5C06\u547D\u4EE4\u884C\u5E94\u7528\u7A0B\u5E8F\u4E0E\u53EF\u7406\u89E3\u6570\u636E\u7ED3\u6784\u7684 Shell \u8FDB\u884C\u6DF7\u5408\u548C\u5339\u914D</li><li>\u5177\u6709\u73B0\u4EE3\u547D\u4EE4\u884C\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u7684\u7528\u6237\u4F53\u9A8C\u4F18\u5316</li></ul><p>\u4E86\u89E3 Nu \u53EF\u4EE5\u505A\u4EC0\u4E48\u7684\u6700\u7B80\u5355\u65B9\u5F0F\u5C31\u662F\u901A\u8FC7\u4E00\u4E9B\u4F8B\u5B50\uFF0C\u6240\u4EE5\u8BA9\u6211\u4EEC\u6C89\u6D78\u8FDB\u53BB\u5427\u3002</p><p>\u5F53\u4F60\u8FD0\u884C\u4E00\u4E2A\u7C7B\u4F3C <code>ls</code> \u7684\u547D\u4EE4\u65F6\uFF0C\u7B2C\u4E00\u4E2A\u6CE8\u610F\u5230\u7684\u662F\u6240\u5F97\u5230\u7684\u4E0D\u662F\u4E00\u4E2A\u6587\u672C\u5757\uFF0C\u800C\u662F\u4E00\u4E2A\u7ED3\u6784\u5316\u7684\u8868\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502 name               \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 404.html           \u2502 File \u2502  429 B \u2502 3 days ago
  1 \u2502 CONTRIBUTING.md    \u2502 File \u2502  955 B \u2502 8 mins ago
  2 \u2502 Gemfile            \u2502 File \u2502 1.1 KB \u2502 3 days ago
  3 \u2502 Gemfile.lock       \u2502 File \u2502 6.9 KB \u2502 3 days ago
  4 \u2502 LICENSE            \u2502 File \u2502 1.1 KB \u2502 3 days ago
  5 \u2502 README.md          \u2502 File \u2502  213 B \u2502 3 days ago
...
</code></pre></div><p>\u8FD9\u4E2A\u8868\u4E0D\u4EC5\u4EC5\u662F\u7528\u53E6\u4E00\u79CD\u65B9\u5F0F\u663E\u793A\u4E86\u5F53\u524D\u76EE\u5F55\u3002\u5C31\u50CF\u7535\u5B50\u8868\u683C\u4E2D\u7684\u8868\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u52A0\u4EA4\u4E92\u6027\u5730\u5904\u7406\u6570\u636E\u3002</p><p>\u6211\u4EEC\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u662F\u5C06\u8868\u683C\u901A\u8FC7\u5C3A\u5BF8\u6765\u6392\u5E8F\u3002\u4E3A\u4E86\u505A\u5230\u8FD9\u70B9\uFF0C\u6211\u4EEC\u5C06\u4F1A\u628A <code>ls</code> \u7684\u8F93\u51FA\u5582\u7ED9\u4E00\u4E2A\u53EF\u4EE5\u6839\u636E\u5217\u7684\u5185\u5BB9\u6765\u6392\u5E8F\u8868\u683C\u7684\u547D\u4EE4\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | reverse
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502 name               \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 Gemfile.lock       \u2502 File \u2502 6.9 KB \u2502 3 days ago
  1 \u2502 SUMMARY.md         \u2502 File \u2502 3.7 KB \u2502 3 days ago
  2 \u2502 Gemfile            \u2502 File \u2502 1.1 KB \u2502 3 days ago
  3 \u2502 LICENSE            \u2502 File \u2502 1.1 KB \u2502 3 days ago
  4 \u2502 CONTRIBUTING.md    \u2502 File \u2502  955 B \u2502 9 mins ago
  5 \u2502 books.md           \u2502 File \u2502  687 B \u2502 3 days ago
...
</code></pre></div><p>\u4F60\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u6CA1\u6709\u7ED9 <code>ls</code> \u4F20\u9012\u547D\u4EE4\u884C\u53C2\u6570\u3002\u4F5C\u4E3A\u4EE3\u66FF\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 Nu \u63D0\u4F9B\u7684 <code>sort-by</code> \u547D\u4EE4\u6765\u6392\u5E8F <code>ls</code> \u7684\u8F93\u51FA\u3002\u4E3A\u4E86\u8BA9\u6700\u5927\u7684\u6587\u4EF6\u4F4D\u4E8E\u9876\u90E8\uFF0C\u6211\u4EEC\u8FD8\u4F7F\u7528\u4E86 <code>reverse</code>\u3002</p><p>Nu \u63D0\u4F9B\u4E86\u8BB8\u591A\u53EF\u5728\u8868\u683C\u4E0A\u5DE5\u4F5C\u7684\u547D\u4EE4\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FC7\u6EE4 <code>ls</code> \u8868\u683C\uFF0C\u53EA\u663E\u793A\u5927\u4E8E 1 KB \u7684\u6587\u4EF6\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where size &gt; 1kb
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name         \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Gemfile      \u2502 File \u2502 1.1 KB \u2502 3 days ago
 1 \u2502 Gemfile.lock \u2502 File \u2502 6.9 KB \u2502 3 days ago
 2 \u2502 LICENSE      \u2502 File \u2502 1.1 KB \u2502 3 days ago
 3 \u2502 SUMMARY.md   \u2502 File \u2502 3.7 KB \u2502 3 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u5C31\u50CF Unix \u54F2\u5B66\u6240\u4F53\u73B0\u7684\u90A3\u6837\uFF0C\u4F5C\u4E3A\u53EF\u4EE5\u76F8\u4E92\u4EA4\u6D41\u7684\u547D\u4EE4\uFF0C\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u8BB8\u591A\u79CD\u4E0D\u540C\u7684\u914D\u5BF9\u3002\u8BA9\u6211\u4EEC\u770B\u4E00\u4E2A\u4E0D\u540C\u7684\u547D\u4EE4\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ps
\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #   \u2502 pid   \u2502 name             \u2502 status  \u2502 cpu     \u2502 mem      \u2502 virtual
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   0 \u2502 33155 \u2502 nu_plugin_core_p \u2502 Running \u2502  3.8496 \u2502   1.8 MB \u2502  4.4 GB
   1 \u2502 32841 \u2502 mdworker_shared  \u2502 Running \u2502  0.0000 \u2502  19.3 MB \u2502  4.4 GB
   2 \u2502 32829 \u2502 CoreServicesUIAg \u2502 Running \u2502  0.0000 \u2502  16.1 MB \u2502  4.5 GB
   3 \u2502 32828 \u2502 mdworker_shared  \u2502 Running \u2502  0.0000 \u2502  23.0 MB \u2502  4.4 GB
</code></pre></div><p>\u5982\u679C\u4F60\u4F7F\u7528\u8FC7 Linux\uFF0C\u53EF\u80FD\u4F1A\u5BF9 <code>ps</code> \u547D\u4EE4\u76F8\u5F53\u719F\u6089\u3002\u8FD9\u4E2A\u547D\u4EE4\u4E3A\u6211\u4EEC\u5C55\u793A\u4E86\u7CFB\u7EDF\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u548C\u5B83\u4EEC\u7684\u72B6\u6001\u4E0E\u540D\u79F0\u3002\u6211\u4EEC\u540C\u6837\u53EF\u4EE5\u67E5\u770B\u5230\u5B83\u4EEC\u7684 CPU \u5360\u7528\u3002</p><p>\u5982\u679C\u6211\u4EEC\u60F3\u663E\u793A\u6B63\u5728\u4F7F\u7528 CPU \u7684\u8FDB\u7A0B\u600E\u4E48\u529E\uFF1F \u5C31\u50CF\u6211\u4EEC\u4E4B\u524D\u4F7F\u7528 <code>ls</code> \u547D\u4EE4\u4E00\u6837\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>ps</code> \u547D\u4EE4\u8FD4\u56DE\u7684\u8868\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ps | where cpu &gt; 10
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 pid  \u2502 name             \u2502 status  \u2502 cpu    \u2502 mem      \u2502 virtual
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 3971 \u2502 Google Chrome He \u2502 Running \u2502 5.1263 \u2502  99.4 MB \u2502  5.5 GB
 1 \u2502  360 \u2502 iTerm2           \u2502 Running \u2502 6.6635 \u2502 218.6 MB \u2502  6.0 GB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u770B\u5230\u4F7F\u7528 <code>ls</code> \u548C <code>ps</code> \u5217\u51FA\u6587\u4EF6\u548C\u8FDB\u7A0B\u3002 Nu \u8FD8\u63D0\u4F9B\u4E86\u5176\u4ED6\u53EF\u4EE5\u521B\u5EFA\u6709\u7528\u4FE1\u606F\u8868\u7684\u547D\u4EE4\u3002 \u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u63A2\u7D22<code>date</code> \u548C <code>sys</code>\u3002</p><p>\u8FD0\u884C <code>date</code> \u5C06\u7ED9\u51FA\u5F53\u524D\u65E5\u671F\u4E0E\u65F6\u95F4\u7684\u4FE1\u606F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; date
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 year     \u2502 2020
 month    \u2502 5
 day      \u2502 5
 hour     \u2502 21
 minute   \u2502 13
 second   \u2502 17
 timezone \u2502 +02:00
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u8FD0\u884C <code>sys</code> \u5C06\u7ED9\u51FA Nu \u6240\u8FD0\u884C\u7684\u7CFB\u7EDF\u7684\u4FE1\u606F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; sys
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 host    \u2502 [row 7 columns]
 cpu     \u2502 [row cores current ghz max ghz min ghz]
 disks   \u2502 [table 2 rows]
 mem     \u2502 [row free swap free swap total total]
 net     \u2502 [table 11 rows]
 battery \u2502 [table 1 rows]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u548C\u4E4B\u524D\u7684\u8868\u6709\u4E9B\u4E0D\u4E00\u6837\uFF0C <code>sys</code> \u547D\u4EE4\u7ED9\u51FA\u7684\u8868\u5728\u5355\u5143\u683C\u5185\u5305\u542B\u4E86\u53E6\u4E00\u4E9B\u7ED3\u6784\u5316\u7684\u8868\u683C\uFF0C\u800C\u975E\u7B80\u5355\u7684\u6570\u503C\u3002\u4E3A\u4E86\u67E5\u770B\u5230\u8FD9\u4E9B\u6570\u636E\uFF0C\u6211\u4EEC\u9700\u8981\u9009\u62E9\u8981\u770B\u7684\u5217\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; sys | get host
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 Linux
 release  \u2502 5.3.0-1019-azure
 version  \u2502 #20-Ubuntu SMP Fri Mar 27 23:54:23 UTC 2020
 hostname \u2502 lifeless
 arch     \u2502 x86_64
 uptime   \u2502 8:03:47:32
 sessions \u2502 [table 2 rows]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p><code>get</code> \u547D\u4EE4\u8BA9\u6211\u4EEC\u8DF3\u5165\u8868\u683C\u4E2D\u4E00\u5217\u7684\u5185\u5BB9\u3002\u8FD9\u6837\uFF0C\u6211\u4EEC\u6B63\u5728\u89C2\u770B &quot;host&quot; \u5217\uFF0C\u5B83\u5305\u542B\u4E86\u5173\u4E8E Nu \u6240\u8FD0\u884C\u7684\u4E3B\u673A\u7684\u4FE1\u606F\u3002\u64CD\u4F5C\u7CFB\u7EDF\u7684\u540D\u5B57\u3001\u4E3B\u673A\u540D\u3001CPU \u67B6\u6784\u7B49\u7B49\u3002\u8BA9\u6211\u4EEC\u770B\u770B\u7CFB\u7EDF\u4E0A\u7684\u7528\u6237\u540D\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; sys | get host.sessions
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 &lt;value&gt;
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 jonathan
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u76EE\u524D\uFF0C\u7CFB\u7EDF\u4E0A\u53EA\u6709\u4E00\u4E2A\u7528\u6237\uFF0C\u540D\u4E3A <code>jonathan</code>\u3002 \u4F60\u4F1A\u6CE8\u610F\u5230\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F20\u9012\u8DEF\u5F84\uFF08 <code>host.sessions</code> \u90E8\u5206\uFF09\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u4F20\u9012\u5217\u540D\u3002 Nu \u5C06\u91C7\u7528\u8BE5\u8DEF\u5F84\u5E76\u8F6C\u5230\u8868\u4E2D\u7684\u76F8\u5E94\u6570\u636E\u4F4D\u7F6E\u3002</p><p>\u60A8\u53EF\u80FD\u5DF2\u7ECF\u6CE8\u610F\u5230\u5176\u4ED6\u7684\u4E0D\u540C\u4E4B\u5904\u3002 \u6211\u4EEC\u6CA1\u6709\u4E00\u4E2A\u6570\u636E\u8868\uFF0C\u800C\u662F\u53EA\u6709\u4E00\u4E2A\u5143\u7D20\uFF1A\u5B57\u7B26\u4E32 &quot;jonathan&quot;\u3002 Nu \u4F7F\u7528\u6570\u636E\u8868\u548C\u5B57\u7B26\u4E32\u3002 \u5B57\u7B26\u4E32\u662F\u5728 Nu \u4E4B\u5916\u4F7F\u7528\u547D\u4EE4\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002</p><p>\u8BA9\u6211\u4EEC\u770B\u770B\u5B57\u7B26\u4E32\u5982\u4F55\u5728 Nu \u4E4B\u5916\u8D77\u4F5C\u7528\u3002 \u6211\u4EEC\u5C06\u4ECE\u524D\u9762\u7684\u793A\u4F8B\u5F00\u59CB\uFF0C\u5E76\u8FD0\u884C\u5916\u90E8\u7684 <code>echo</code> \u547D\u4EE4\uFF08 <code>^</code> \u544A\u8BC9 nu \u4E0D\u8981\u4F7F\u7528\u5185\u7F6E\u7684 <code>echo</code> \u547D\u4EE4\uFF09\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; sys | get host.sessions | ^echo $it
jonathan
</code></pre></div><p>\u5982\u679C\u8FD9\u770B\u8D77\u6765\u4E0E\u6211\u4EEC\u4EE5\u524D\u7684\u4F20\u7EDF Shell \u975E\u5E38\u76F8\u4F3C\uFF0C\u90A3\u4E48\u5C31\u8BF4\u660E\u4F60\u62E5\u6709\u654F\u9510\u7684\u773C\u775B\uFF01 \u76F8\u4F3C\uFF0C\u4F46\u662F\u6709\u4E00\u4E2A\u91CD\u8981\u7684\u533A\u522B\uFF1A\u6211\u4EEC\u5BF9\u524D\u9762\u770B\u5230\u7684\u503C\u8C03\u7528\u4E86 <code>^echo</code> \u3002 \u8FD9\u5141\u8BB8\u6211\u4EEC\u5C06\u6570\u636E\u4ECE Nu \u4F20\u9012\u5230 <code>echo</code>\uFF08\u6216 Nu \u5916\u90E8\u7684\u4EFB\u4F55\u547D\u4EE4\uFF0C\u4F8B\u5982 <code>git</code>\uFF09\u3002</p><p><em>\u6CE8\u610F\uFF1ANu \u7684\u5185\u5EFA\u547D\u4EE4\u7684\u5E2E\u52A9\u6587\u672C\u53EF\u4EE5\u7528 <code>help</code> \u6765\u6D4F\u89C8</em>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; help config
Configuration management.

Usage:
  &gt; config &lt;subcommand&gt; {flags}

Subcommands:
  config get - Gets a value from the config
  config set - Sets a value in the config
  config set_into - Sets a value in the config
  config clear - clear the config
  config load - Loads the config from the path given
  config remove - Removes a value from the config
  config path - return the path to the config file

Flags:
  -h, --help: Display this help message
</code></pre></div>`,34),c=[s];function d(l,i){return n(),o("div",null,c)}var p=e(a,[["render",d],["__file","introduction.html.vue"]]);export{p as default};
