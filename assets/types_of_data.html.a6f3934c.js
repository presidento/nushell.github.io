import{_ as n,r as s,o as i,c as l,a,b as o,w as c,e as d,d as e}from"./app.68c16707.js";const r={},h=d(`<h1 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h1><p>\u4F20\u7EDF\u4E0A\uFF0CUnix Shell \u547D\u4EE4\u4E4B\u95F4\u4F7F\u7528\u5B57\u7B26\u4E32\u6587\u672C\u8FDB\u884C\u901A\u4FE1\u3002\u4E00\u4E2A\u547D\u4EE4\u901A\u8FC7\u6807\u51C6\u8F93\u51FA\uFF08\u901A\u5E38\u7F29\u5199\u4E3A &quot;stdout&quot;\uFF09\u8F93\u51FA\u6587\u672C\uFF0C\u53E6\u4E00\u4E2A\u547D\u4EE4\u901A\u8FC7\u6807\u51C6\u8F93\u5165\uFF08\u6216 &quot;stdin&quot;\uFF09\u8BFB\u5165\u6587\u672C\uFF0C\u4EE5\u6B64\u6765\u8BA9\u4E24\u4E2A\u547D\u4EE4\u8FDB\u884C\u901A\u4FE1\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u8FD9\u79CD\u901A\u4FE1\u662F\u57FA\u4E8E\u5B57\u7B26\u4E32\u7684\u3002</p><p>Nu \u5728\u5176\u547D\u4EE4\u4E2D\u91C7\u7528\u4E86\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u5E76\u5C06\u5176\u6269\u5C55\u5230\u5305\u62EC\u5176\u4ED6\u7C7B\u578B\u7684\u6570\u636E\u3002\u76EE\u524D\uFF0CNu \u652F\u6301\u4E24\u79CD\u6570\u636E\u7C7B\u578B\uFF1A\u7B80\u5355\u7684\u548C\u7ED3\u6784\u5316\u7684\u6570\u636E\u3002</p><p>\u50CF\u8BB8\u591A\u7F16\u7A0B\u8BED\u8A00\u4E00\u6837\uFF0CNu \u4F7F\u7528\u4E00\u7EC4\u7B80\u5355\u548C\u7ED3\u6784\u5316\u7684\u6570\u636E\u7C7B\u578B\u5BF9\u6570\u636E\u8FDB\u884C\u5EFA\u6A21\u3002\u7B80\u5355\u7684\u6570\u636E\u7C7B\u578B\u5305\u62EC\u6574\u6570\u3001\u6D6E\u70B9\u6570\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u3001\u65E5\u671F\u548C\u8DEF\u5F84\u3002\u5B83\u8FD8\u5305\u62EC\u4E00\u4E2A\u7528\u4E8E\u8868\u793A\u6587\u4EF6\u5927\u5C0F\u7684\u7279\u6B8A\u7C7B\u578B\u3002</p><h2 id="\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u6574\u6570" aria-hidden="true">#</a> \u6574\u6570</h2><p>\u6574\u6570\uFF08\u6216\u6574\u5F62\uFF09\u6570\u5B57\uFF1A\u4F8B\u5B50\u5305\u62EC 1\u30015 \u548C 100\u3002</p><h2 id="\u5C0F\u6570" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u6570" aria-hidden="true">#</a> \u5C0F\u6570</h2><p>\u5C0F\u6570\u662F\u6307\u5E26\u6709\u4E00\u4E9B\u5C0F\u6570\u6210\u5206\u7684\u6570\u5B57\uFF0C\u4F8B\u5982\uFF0C1.5\uFF0C2.0\uFF0C\u548C 15.333\u3002</p><h2 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h2><p>\u4EE3\u8868\u6587\u672C\u7684\u5B57\u7B26\u4E32\u3002\u5728 Nushell \u4E2D\uFF0C\u6211\u4EEC\u6709\u51E0\u79CD\u65B9\u6CD5\u53EF\u4EE5\u8868\u793A\u5B57\u7B26\u4E32\uFF1A</p><p><strong>\u53CC\u5F15\u53F7</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&quot;my message&quot;
</code></pre></div><p>\u53CC\u5F15\u53F7\u662F\u6700\u5E38\u89C1\u7684\u5F15\u53F7\u5F62\u5F0F\uFF0C\u53EA\u8981\u662F\u9700\u8981\u6587\u5B57\u7684\u5730\u65B9\uFF0C\u4F60\u90FD\u53EF\u80FD\u770B\u5230\u3002</p><p><strong>\u5355\u5F15\u53F7</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&#39;my message&#39;
</code></pre></div><p>\u5355\u5F15\u53F7\u4E5F\u751F\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\u503C\uFF0C\u5C31\u50CF\u53CC\u5F15\u53F7\u4E00\u6837\u3002\u8FD9\u91CC\u7684\u533A\u522B\u662F\uFF0C\u5B83\u4EEC\u5141\u8BB8\u4F60\u5728\u6587\u672C\u4E2D\u4F7F\u7528\u53CC\u5F15\u53F7\uFF0C\u4F8B\u5982\uFF1A<code>&#39;\u4ED6\u8BF4\uFF1A&quot;\u4F60\u80FD\u5E2E\u6211\u62FF\u4E0B\u676F\u5B50\u5417\uFF1F&quot;&#39;</code>\u3002</p><p><strong>\u5B57\u7B26\u4E32\u63D2\u503C</strong></p><p>Nushell \u652F\u6301\u5B57\u7B26\u4E32\u63D2\u503C\uFF0C\u5141\u8BB8\u4F60\u5728\u4EE5<code>$</code>\u4E3A\u524D\u7F00\u7684\u5B57\u7B26\u4E32\u4E2D\u8FD0\u884C\u5B50\u8868\u8FBE\u5F0F\u3002\u6BD4\u5982\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo $&quot;6 x 7 = (6 * 7)&quot;
6 x 7 = 42
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | each { |it| echo $&quot;($it.name) is ($it.size)&quot; }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 genawait is 4.1 KB
 1 \u2502 learncpp is 4.1 KB
 2 \u2502 nuscripts is 4.1 KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p><strong>\u88F8\u5B57\u7B26\u4E32</strong></p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo hello
</code></pre></div><p>Nushell \u7684\u4E00\u4E2A\u72EC\u7279\u7279\u5F81\u662F\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u6CA1\u6709\u4EFB\u4F55\u5F15\u53F7\u7684\u5355\u5B57\u5B57\u7B26\u4E32\u3002</p><p>\u4E0A\u9762\u7684\u5185\u5BB9\u548C\u5982\u4E0B\u5199\u6CD5\u662F\u4E00\u6837\u7684\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo &quot;hello&quot;
</code></pre></div>`,26),p=e("\u53E6\u89C1 "),u=e("\u5B57\u7B26\u4E32\u7684\u4F7F\u7528"),g=e("\u3002"),x=d(`<h2 id="\u6587\u672C\u884C" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u884C" aria-hidden="true">#</a> \u6587\u672C\u884C</h2><p>\u6587\u672C\u884C(Lines)\u662F\u5177\u6709\u9690\u542B\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7279\u5B9A\u884C\u7ED3\u5C3E\u7684\u5B57\u7B26\u4E32\u3002\u4F7F\u7528\u65F6\u9700\u8981\u52A0\u4E0A\u64CD\u4F5C\u7CFB\u7EDF\u7279\u5B9A\u7684\u884C\u5C3E\u6807\u8BC6\u3002</p><h2 id="\u5217\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u5217\u8DEF\u5F84" aria-hidden="true">#</a> \u5217\u8DEF\u5F84</h2><p>\u5217\u8DEF\u5F84(Column Paths)\u662F\u6307\u901A\u8FC7\u8868\u683C\u5230\u7279\u5B9A\u5B50\u8868\u3001\u5217\u3001\u884C\u6216\u5355\u5143\u683C\u7684\u8DEF\u5F84\u3002</p><p>\u4F8B\u5982) <code>open data.toml | get foo.0.bar</code>\u4E2D\u7684\u503C<code>foo.0.bar</code></p><h2 id="glob-\u6A21\u5F0F-\u901A\u914D\u7B26" tabindex="-1"><a class="header-anchor" href="#glob-\u6A21\u5F0F-\u901A\u914D\u7B26" aria-hidden="true">#</a> Glob \u6A21\u5F0F\uFF08\u901A\u914D\u7B26\uFF09</h2><p>\u5728 Nushell \u4E2D\uFF0C\u6587\u4EF6\u64CD\u4F5C\u4E5F\u5141\u8BB8\u4F60\u4F20\u5165\u4E00\u4E2A glob \u6A21\u5F0F\uFF0C\u6709\u65F6\u88AB\u79F0\u4E3A &quot;\u901A\u914D\u7B26&quot;\u3002\u8FD9\u5141\u8BB8\u4F60\u7ED9\u51FA\u4E00\u4E2A\u53EF\u4EE5\u5339\u914D\u591A\u4E2A\u6587\u4EF6\u8DEF\u5F84\u7684\u6A21\u5F0F\u3002</p><p>\u6700\u5E38\u89C1\u7684\u6A21\u5F0F\u662F <code>*</code>\uFF0C\u5B83\u5C06\u5339\u914D\u6240\u6709\u7684\u8DEF\u5F84\u3002\u901A\u5E38\uFF0C\u4F60\u4F1A\u770B\u5230\u8FD9\u4E2A\u6A21\u5F0F\u88AB\u7528\u4F5C\u53E6\u4E00\u4E2A\u6A21\u5F0F\u7684\u4E00\u90E8\u5206\uFF0C\u4F8B\u5982<code>*.bak</code>\u548C<code>temp\\*</code>\u3002</p><p>\u5728 Nushell \u4E2D\uFF0C\u6211\u4EEC\u4E5F\u652F\u6301\u901A\u8FC7\u53CC <code>*</code> \u6765\u904D\u5386\u5176\u4ED6\u76EE\u5F55\u5185\u5D4C\u5957\u5F97\u66F4\u6DF1\u7684\u8DEF\u5F84\u3002\u4F8B\u5982\uFF0C<code>ls **/*</code>\u5C06\u5217\u51FA\u6240\u6709\u5D4C\u5957\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u975E\u9690\u85CF\u8DEF\u5F84\u3002</p><p>\u9664\u4E86<code>*</code>\uFF0C\u8FD8\u6709<code>?</code>\u6A21\u5F0F\uFF0C\u5B83\u5C06\u5339\u914D\u4E00\u4E2A\u5355\u4E00\u7684\u5B57\u7B26\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u6A21\u5F0F<code>p???</code>\u6765\u5339\u914D &quot;port&quot;\u3002</p><h2 id="\u5E03\u5C14\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u7C7B\u578B" aria-hidden="true">#</a> \u5E03\u5C14\u7C7B\u578B</h2><p>\u5E03\u5C14\u7C7B\u578B\u662F\u6307\u771F\u6216\u5047\u7684\u72B6\u6001\u3002\u5B83\u901A\u5E38\u7528\u4E8E\u4E00\u4E2A\u6BD4\u8F83\u7684\u7ED3\u679C\uFF0C\u800C\u975E\u76F4\u63A5\u4F7F\u7528\u8BE5\u503C\u3002</p><p>\u5E03\u5C14\u7C7B\u578B\u7684\u4E24\u4E2A\u503C\u662F<code>true</code>\u548C<code>false</code>\u3002</p><h2 id="\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F" aria-hidden="true">#</a> \u65E5\u671F</h2><p>\u65E5\u671F\u548C\u65F6\u95F4\u88AB\u4FDD\u5B58\u5728\u65E5\u671F(Date)\u503C\u7C7B\u578B\u4E2D\u3002\u7CFB\u7EDF\u4F7F\u7528\u7684\u65E5\u671F\u503C\u662F\u6709\u65F6\u533A\u7684\uFF0C\u9ED8\u8BA4\u4F7F\u7528 UTC \u65F6\u533A\u3002</p><p>\u65E5\u671F\u6709\u4E09\u79CD\u5F62\u5F0F\uFF0C\u57FA\u4E8E RFC 3339 \u6807\u51C6\uFF1A</p><ul><li>\u65E5\u671F: <ul><li><code>2022-02-02</code></li></ul></li><li>\u65E5\u671F\u548C\u65F6\u95F4 (GMT \u683C\u5F0F): <ul><li><code>2022-02-02T14:30:00</code></li></ul></li><li>\u5305\u542B\u65F6\u533A\u7684\u65E5\u671F\u548C\u65F6\u95F4: <ul><li><code>2022-02-02T14:30:00+05:00</code></li></ul></li></ul><h2 id="\u65F6\u95F4\u95F4\u9694" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u95F4\u9694" aria-hidden="true">#</a> \u65F6\u95F4\u95F4\u9694</h2><p>\u65F6\u95F4\u95F4\u9694(Duration)\u8868\u793A\u65F6\u95F4\u7684\u957F\u77ED\u3002\u4E00\u79D2\u949F\u3001\u4E94\u5468\u548C\u4E00\u5E74\u90FD\u662F\u65F6\u95F4\u95F4\u9694\u3002</p><p>Eg) <code>1wk</code>\u662F\u4E00\u4E2A\u661F\u671F\u7684\u65F6\u95F4\u95F4\u9694\u3002</p><p>\u4E0B\u8868\u663E\u793A\u4E86\u76EE\u524D\u652F\u6301\u7684\u6240\u6709\u65F6\u95F4\u95F4\u9694\uFF1A</p><table><thead><tr><th>Duration</th><th>\u65F6\u957F</th></tr></thead><tbody><tr><td><code>1ns</code></td><td>1 \u7EB3\u79D2</td></tr><tr><td><code>1us</code></td><td>1 \u5FAE\u79D2</td></tr><tr><td><code>1ms</code></td><td>1 \u6BEB\u79D2</td></tr><tr><td><code>1sec</code></td><td>1 \u79D2</td></tr><tr><td><code>1min</code></td><td>1 \u5206\u949F</td></tr><tr><td><code>1hr</code></td><td>1 \u5C0F\u65F6</td></tr><tr><td><code>1day</code></td><td>1 \u5929</td></tr><tr><td><code>1wk</code></td><td>1 \u5468</td></tr></tbody></table><h2 id="\u533A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u533A\u95F4" aria-hidden="true">#</a> \u533A\u95F4</h2><p>\u533A\u95F4(Ranges)\u662F\u4E00\u79CD\u8868\u8FBE\u4ECE\u5F00\u59CB\u5230\u7ED3\u675F\u7684\u6570\u503C\u5E8F\u5217\u7684\u65B9\u5F0F\u3002\u5B83\u4EEC\u7684\u5F62\u5F0F\u662F<code>&#39;start&#39; + &#39;..&#39; + &#39;end&#39;</code>\u3002\u4F8B\u5982\uFF0C\u8303\u56F4 <code>1..3</code>\u8868\u793A\u6570\u5B57 1\u30012\u3001\u548C 3\u3002</p><h2 id="\u95ED\u533A\u95F4\u548C\u5F00\u533A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u95ED\u533A\u95F4\u548C\u5F00\u533A\u95F4" aria-hidden="true">#</a> \u95ED\u533A\u95F4\u548C\u5F00\u533A\u95F4</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u533A\u95F4\u662F\u5305\u542B\u6027\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7ED3\u675F\u503C\u88AB\u7B97\u4F5C\u533A\u95F4\u7684\u4E00\u90E8\u5206\u3002\u533A\u95F4<code>1..3</code>\u5305\u62EC\u6570\u5B57<code>3</code>\u4F5C\u4E3A\u533A\u95F4\u5185\u7684\u6700\u540E\u4E00\u4E2A\u503C\u3002</p><p>\u6709\u65F6\uFF0C\u4F60\u53EF\u80FD\u60F3\u8981\u4E00\u4E2A\u8FBE\u5230\u67D0\u4E2A\u6570\u5B57\u7684\u533A\u95F4\uFF0C\u4F46\u5728\u8F93\u51FA\u4E2D\u4E0D\u5305\u542B\u8BE5\u6570\u5B57\u3002\u5BF9\u4E8E\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528<code>..&lt;</code>\u4EE3\u66FF<code>..</code>\u3002\u4F8B\u5982\uFF0C<code>1..&lt;5</code>\u5305\u542B\u6570\u5B57 1\u30012\u30013 \u548C 4\u3002</p><h2 id="\u5F00\u653E\u5F0F\u533A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u5F00\u653E\u5F0F\u533A\u95F4" aria-hidden="true">#</a> \u5F00\u653E\u5F0F\u533A\u95F4</h2><p>\u533A\u95F4\u4E5F\u53EF\u4EE5\u662F\u5F00\u653E\u5F0F\u7684\u3002\u4F60\u53EF\u4EE5\u53BB\u6389\u533A\u95F4\u7684\u8D77\u70B9\u6216\u7EC8\u70B9\uFF0C\u4F7F\u5176\u6210\u4E3A\u5F00\u653E\u5F0F\u7684\u3002</p><p>\u6BD4\u65B9\u8BF4\uFF0C\u4F60\u60F3\u4ECE 3 \u5F00\u59CB\u8BA1\u6570\uFF0C\u4F46\u4F60\u5FC3\u91CC\u6CA1\u6709\u4E00\u4E2A\u5177\u4F53\u7684\u7EC8\u70B9\u3002\u4F60\u53EF\u4EE5\u7528 <code>3..</code> \u8FD9\u4E2A\u533A\u95F4\u6765\u8868\u793A\u3002\u5F53\u4F60\u5728\u53F3\u8FB9\u4F7F\u7528\u4E00\u4E2A\u65E0\u9650\u5236\u7684\u533A\u95F4\u65F6\uFF0C\u8BF7\u8BB0\u4F4F\uFF0C\u8FD9\u5C06\u6301\u7EED\u8BA1\u6570\u5C3D\u53EF\u80FD\u957F\u7684\u65F6\u95F4\uFF0C\u8FD9\u53EF\u80FD\u662F\u4E00\u4E2A\u975E\u5E38\u957F\u7684\u65F6\u95F4\uFF0C\u4F60\u53EF\u80FD\u4F1A\u5728 <code>first</code> \u8FD9\u6837\u7684\u547D\u4EE4\u4E2D\u4F7F\u7528\u5F00\u653E\u5F0F\u533A\u95F4\uFF0C\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u4ECE\u533A\u95F4\u4E2D\u53D6\u51FA\u4F60\u60F3\u8981\u7684\u6307\u5B9A\u6570\u91CF\u7684\u5143\u7D20\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u533A\u95F4\u7684\u5F00\u59CB\u90E8\u5206\u5F00\u653E\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CNushell \u5C06\u4ECE<code>0</code>\u5F00\u59CB\u5411\u4E0A\u8BA1\u6570\u3002\u533A\u95F4<code>..2</code>\u5305\u542B\u6570\u5B57 0\u30011 \u548C 2\u3002</p><h2 id="\u6587\u4EF6\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> \u6587\u4EF6\u8DEF\u5F84</h2><p>\u6587\u4EF6\u8DEF\u5F84(File Paths)\u662F\u5728\u7ED9\u5B9A\u7684\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u4EE3\u8868\u6587\u4EF6\u8DEF\u5F84\u7684\u4E00\u79CD\u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u65B9\u5F0F\u3002\u6BD4\u5982<code>/usr/bin</code>\u548C<code>C:\\Users\\file.txt</code>\u3002</p><h2 id="\u6587\u4EF6\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5927\u5C0F" aria-hidden="true">#</a> \u6587\u4EF6\u5927\u5C0F</h2><p>\u6587\u4EF6\u5927\u5C0F(File Sizes)\u4FDD\u5B58\u5728\u4E00\u79CD\u7279\u6B8A\u7684\u79F0\u4E3A\u5B57\u8282\u7684\u6574\u6570\u7C7B\u578B\u4E2D\u3002\u4F8B\u5982\u5305\u62EC <code>100b</code>, <code>15kb</code>, \u548C <code>100mb</code>\u3002</p><p>\u6587\u4EF6\u5927\u5C0F\u5355\u4F4D\u7684\u5B8C\u6574\u5217\u8868\u662F\uFF1A</p><ul><li><code>b</code>: bytes</li><li><code>kb</code>: kilobytes (aka 1000 bytes)</li><li><code>mb</code>: megabytes</li><li><code>gb</code>: gigabytes</li><li><code>tb</code>: terabytes</li><li><code>pb</code>: petabytes</li><li><code>kib</code>: kibibytes (aka 1024 bytes)</li><li><code>mib</code>: mebibytes</li><li><code>gib</code>: gibibytes</li><li><code>tib</code>: tebibytes</li><li><code>pib</code>: pebibytes</li></ul><h2 id="\u4E8C\u8FDB\u5236\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u6570\u636E" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u6570\u636E</h2><p>\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u50CF\u56FE\u50CF\u6587\u4EF6\u7684\u6570\u636E\u4E00\u6837\uFF0C\u662F\u4E00\u7EC4\u539F\u59CB\u5B57\u8282\u3002</p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>0x[...]</code> \u6216 <code>0b[...]</code> \u6216 <code>0o[...]</code> \u5F62\u5F0F\u5C06\u4E8C\u8FDB\u5236\u5199\u6210\u4E00\u4E2A\u5B57\u9762\u503C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; 0x[1F FF]
&gt; 0b[1 1010]
&gt; 0o[777]
</code></pre></div><p>\u4E0D\u5B8C\u6574\u7684\u5B57\u8282\u5C06\u7528\u96F6\u6765\u586B\u5145\u3002</p><h2 id="\u7ED3\u6784\u5316\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u5316\u6570\u636E" aria-hidden="true">#</a> \u7ED3\u6784\u5316\u6570\u636E</h2><p>\u7ED3\u6784\u5316\u6570\u636E\u662F\u5728\u7B80\u5355\u6570\u636E\u7684\u57FA\u7840\u4E0A\u5EFA\u7ACB\u7684\u3002\u4F8B\u5982\uFF0C\u7ED3\u6784\u5316\u6570\u636E\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u79CD\u5728\u540C\u4E00\u6570\u503C\u4E2D\u8868\u793A\u591A\u4E2A\u6574\u6570\u7684\u65B9\u6CD5\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u5355\u4E00\u7684\u6574\u6570\u3002\u76EE\u524D\u652F\u6301\u7684\u7ED3\u6784\u5316\u6570\u636E\u7C7B\u578B\u6709\uFF1A\u8BB0\u5F55\u3001\u5217\u8868\u548C\u8868\u683C\u3002</p><h2 id="\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u5F55" aria-hidden="true">#</a> \u8BB0\u5F55</h2><p>\u8BB0\u5F55(Records)\u6301\u6709\u952E\u503C\u5BF9\uFF0C\u5F88\u50CF JSON \u4E2D\u7684\u5BF9\u8C61\u3002\u7531\u4E8E\u8FD9\u4E9B\u8BB0\u5F55\u6709\u65F6\u4F1A\u6709\u5F88\u591A\u5B57\u6BB5\uFF0C\u6240\u4EE5\u8BB0\u5F55\u662F\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u7684\uFF0C\u800C\u4E0D\u662F\u4ECE\u5DE6\u5230\u53F3\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo {name: sam, rank: 10}
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name \u2502 sam \u2502
\u2502 rank \u2502 10  \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>\u4F60\u53EF\u4EE5\u5C06\u5176\u8F6C\u6362\u5230\u4E00\u4E2A\u8868\u7136\u540E\u904D\u5386\u8BE5\u8BB0\u5F55\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo {name: sam, rank: 10} | transpose key value
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 # \u2502 key  \u2502 value \u2502
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0 \u2502 name \u2502  sam  \u2502
\u2502 1 \u2502 rank \u2502   10  \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868" aria-hidden="true">#</a> \u5217\u8868</h2><p>\u5217\u8868(Lists)\u53EF\u4EE5\u5BB9\u7EB3\u4E00\u4E2A\u4EE5\u4E0A\u7684\u503C\u3002\u8FD9\u4E9B\u53EF\u4EE5\u662F\u7B80\u5355\u7684\u503C\uFF0C\u4E5F\u53EF\u4EE5\u5BB9\u7EB3\u884C\uFF0C\u800C\u4E00\u7EC4\u8BB0\u5F55\u7684\u7EC4\u5408\u901A\u5E38\u88AB\u79F0\u4E3A &quot;\u8868&quot;\u3002</p><p>\u4F8B\u5982\uFF0C\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5217\u8868\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [sam fred george]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 sam
 1 \u2502 fred
 2 \u2502 george
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="\u8868" tabindex="-1"><a class="header-anchor" href="#\u8868" aria-hidden="true">#</a> \u8868</h2><p>\u8868(Table)\u662F Nushell \u7684\u4E00\u4E2A\u6838\u5FC3\u6570\u636E\u7ED3\u6784\u3002\u5F53\u4F60\u8FD0\u884C Nushell \u547D\u4EE4\u65F6\uFF0C\u4F60\u4F1A\u53D1\u73B0\u8BB8\u591A\u547D\u4EE4\u90FD\u4F1A\u5C06\u8868\u4F5C\u4E3A\u8F93\u51FA\u8FD4\u56DE\u3002\u8868\u7531\u884C\u548C\u5217\u7EC4\u6210\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u8868\uFF0C\u5C31\u50CF\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\u4E00\u6837\u3002\u56E0\u4E3A\u8868\u4E5F\u5305\u542B\u5217\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u503C\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4F20\u5165\u5217\u7684\u540D\u79F0\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[column1, column2]; [Value1, Value2]]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1 \u2502 column2
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Value1  \u2502 Value2
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u6709\u591A\u884C\u6570\u636E\u7684\u8868\u683C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [[column1, column2]; [Value1, Value2] [Value3, Value4]]
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1 \u2502 column2
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Value1  \u2502 Value2
 1 \u2502 Value3  \u2502 Value4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A\u8BB0\u5F55\u5217\u8868\u6765\u521B\u5EFA\u8868\u683C:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; echo [{name: sam, rank: 10}, {name: bob, rank: 7}]
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 # \u2502 name \u2502 rank \u2502
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0 \u2502 sam  \u2502   10 \u2502
\u2502 1 \u2502 bob  \u2502    7 \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h2 id="\u5757" tabindex="-1"><a class="header-anchor" href="#\u5757" aria-hidden="true">#</a> \u5757</h2><p>\u5757(Blocks)\u8868\u793A Nu \u4E2D\u7684\u4E00\u4E2A\u4EE3\u7801\u5757\u3002\u4F8B\u5982\uFF0C\u5728\u547D\u4EE4 <code>each { |it| echo $it }</code> \u4E2D\uFF0C\u5757\u662F\u5305\u542B\u5728\u5927\u62EC\u53F7\u4E2D\u7684\u90E8\u5206\uFF0C<code>{ |it| echo $it }</code>\u3002\u5982\u679C\u6709\u5FC5\u8981\uFF0C\u53EF\u4EE5\u5728\u4E00\u5BF9\u7BA1\u9053\u7B26\u53F7\uFF08\u4F8B\u5982\uFF0C<code>|it|</code>\uFF09\u4E4B\u95F4\u6307\u5B9A\u5757\u53C2\u6570\u3002</p>`,63),b=e("\u5757\u662F\u8868\u793A\u53EF\u4EE5\u5728\u6BCF\u884C\u6570\u636E\u4E0A\u6267\u884C\u7684\u4EE3\u7801\u7684\u4E00\u79CD\u6709\u6548\u65B9\u6CD5\u3002\u5728"),_=a("code",null,"each",-1),m=e("\u5757\u4E2D\u4F7F\u7528"),f=a("code",null,"$it",-1),v=e("\u4F5C\u4E3A\u53C2\u6570\u540D\u662F\u60EF\u4F8B\uFF0C\u4F46\u5E76\u4E0D\u662F\u5FC5\u987B\u7684\uFF1A"),k=a("code",null,"each { |x| echo $x }",-1),y=e("\u4E0E"),q=a("code",null,"each { |it| echo $it }",-1),N=e("\u7684\u7ED3\u679C\u76F8\u540C\u3002"),V=d(`<h2 id="\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7EC4" aria-hidden="true">#</a> \u7EC4</h2><p>\u4EE5\u6B64\u4E3A\u4F8B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>foo <span class="token punctuation">{</span>
  line1
  line2<span class="token punctuation">;</span> line3 <span class="token operator">|</span> line4
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u8BE5\u4EE3\u7801\u5757\u5185\uFF0C\u4F60\u6709\u4E24\u4E2A\u72EC\u7ACB\u7684\u7EC4(Groups)\u76F4\u5230\u8FD0\u884C\u5B8C\u6BD5\u3002\u7EC4\u662F\u4E00\u4E2A\u4EE5\u5206\u53F7\u5206\u9694\u7684\u7BA1\u9053\u96C6\u5408\uFF0C\u5176\u4E2D\u6700\u540E\u4E00\u4E2A\u7BA1\u9053\u4F1A\u8F93\u51FA\u5230\u5C4F\u5E55\u3002</p><ul><li><code>line1</code> \u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u7EC4\uFF0C\u6240\u4EE5\u8BE5\u547D\u4EE4\u5C06\u8FD0\u884C\u5230\u7ED3\u675F\u5E76\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\u3002</li><li><code>line2</code> \u662F\u7B2C\u4E8C\u7EC4\u4E2D\u7684\u4E00\u4E2A\u7BA1\u9053\u3002\u5B83\u4F1A\u8FD0\u884C\uFF0C\u4F46\u5176\u5185\u5BB9\u4E0D\u4F1A\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u3002</li><li><code>line3</code> | <code>line4</code> \u662F\u7B2C\u4E8C\u7EC4\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u7BA1\u9053\u3002\u5B83\u4F1A\u8FD0\u884C\u5E76\u4E14\u5B83\u7684\u5185\u5BB9\u4F1A\u5728\u5C4F\u5E55\u4E0A\u663E\u793A\u3002</li></ul>`,5);function $(B,C){const t=s("RouterLink");return i(),l("div",null,[h,a("p",null,[p,o(t,{to:"/zh-CN/book/loading_data.html#%E5%A4%84%E7%90%86%E5%AD%97%E7%AC%A6%E4%B8%B2"},{default:c(()=>[u]),_:1}),g]),x,a("p",null,[b,o(t,{to:"/book/commands/each.html"},{default:c(()=>[_]),_:1}),m,f,v,k,y,q,N]),V])}var F=n(r,[["render",$],["__file","types_of_data.html.vue"]]);export{F as default};
