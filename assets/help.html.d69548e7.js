import{_ as e,z as a,A as n,a6 as t}from"./framework.3d018c9f.js";const s={},o=t(`<h1 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> Help</h1><p>A good way to become familiar with all that nu has to offer is by utilizing the <code>help</code> command.</p><h3 id="how-to-see-all-supported-commands" tabindex="-1"><a class="header-anchor" href="#how-to-see-all-supported-commands" aria-hidden="true">#</a> How to see all supported commands:</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> commands <span class="token operator">|</span> where is_custom <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token operator">|</span> first <span class="token number">10</span> <span class="token operator">|</span> drop <span class="token function">column</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬───────────────┬────────────┬───────────┬───────────┬────────────────────────────────────────────────────────────────
 # │     name      │  category  │ is_plugin │ is_custom │                             usage
───┼───────────────┼────────────┼───────────┼───────────┼────────────────────────────────────────────────────────────────
 0 │ alias         │ core       │ false     │ false     │ Alias a command (with optional flags) to a new name
 1 │ all           │ filters    │ false     │ false     │ Test if every element of the input matches a predicate.
 2 │ ansi          │ platform   │ false     │ false     │ Output ANSI codes to change color.
 3 │ ansi gradient │ platform   │ false     │ false     │ draw text with a provided start and end code making a gradient
 4 │ ansi strip    │ platform   │ false     │ false     │ strip ansi escape sequences from string
 5 │ any           │ filters    │ false     │ false     │ Tests if any element of the input matches a predicate.
 6 │ append        │ filters    │ false     │ false     │ Append a row to the table.
 7 │ benchmark     │ system     │ false     │ false     │ Time the running time of a block
 8 │ build-string  │ strings    │ false     │ false     │ Create a string from the arguments.
 9 │ cal           │ generators │ false     │ false     │ Display a calendar.
───┴───────────────┴────────────┴───────────┴───────────┴────────────────────────────────────────────────────────────────
</code></pre></div><hr><h3 id="specific-information-on-a-command" tabindex="-1"><a class="header-anchor" href="#specific-information-on-a-command" aria-hidden="true">#</a> Specific information on a command</h3><p>To find more specific information on a command, use <code>help &lt;COMMAND&gt;</code>.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> fetch
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Fetch the contents from a URL (HTTP GET operation).

Usage:
  &gt; fetch {flags} &lt;URL&gt;

Flags:
  -h, --help
      Display this help message
  -u, --user &lt;Any&gt;
      the username when authenticating
  -p, --password &lt;Any&gt;
      the password when authenticating
  -t, --timeout &lt;Int&gt;
      timeout period in seconds
  -H, --headers &lt;Any&gt;
      custom headers you want to add
  -r, --raw
      fetch contents as text rather than a table

Parameters:
  URL: the URL to fetch the contents from

Examples:
  Fetch content from url.com
  &gt; fetch url.com

  Fetch content from url.com, with username and password
  &gt; fetch -u myuser -p mypass url.com

  Fetch content from url.com, with custom header
  &gt; fetch -H [my-header-key my-header-value] url.com
</code></pre></div><hr><h3 id="specific-information-on-a-command-subcommand" tabindex="-1"><a class="header-anchor" href="#specific-information-on-a-command-subcommand" aria-hidden="true">#</a> Specific information on a command subcommand</h3><p>To find more specific information on a command subcommand, use <code>help &lt;COMMAND&gt; &lt;SUBCOMMAND&gt;</code>.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> str reverse
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>outputs the reversals of the strings in the pipeline

Usage:
  &gt; str reverse ...(rest)

Flags:
  -h, --help
      Display this help message

Parameters:
  ...rest: optionally reverse text by column paths

Examples:
  Return the reversals of multiple strings
  &gt; &#39;Nushell&#39; | str reverse
</code></pre></div>`,18),r=[o];function l(c,i){return a(),n("div",null,r)}const d=e(s,[["render",l],["__file","help.html.vue"]]);export{d as default};
