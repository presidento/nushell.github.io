import{_ as l,r,o as a,c as i,a as t,b as n,d as e,e as s}from"./app.68c16707.js";var h="/assets/0_32_themes.a37b6a85.png";const d={},c=t("h1",{id:"nushell-0-33",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-33","aria-hidden":"true"},"#"),e(" Nushell 0.33")],-1),_=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=t("p",null,"Today, we're releasing 0.33 of Nu. This release includes improved completions, support for pipeline variables, syntax theming and more.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),m=e("Nu 0.33 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.33.0",target:"_blank",rel:"noopener noreferrer"},g=e("pre-built binaries"),b=e(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=e("crates.io"),v=e(". If you have Rust installed you can install it using "),y=t("code",null,"cargo install nu",-1),x=e("."),N=s('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="improved-completions-fdncred-niklasjonsson-kubouch-andrasio-jt" tabindex="-1"><a class="header-anchor" href="#improved-completions-fdncred-niklasjonsson-kubouch-andrasio-jt" aria-hidden="true">#</a> Improved completions (fdncred, NiklasJonsson, kubouch, andrasio, jt)</h2>',5),j=e("We've begun the completion improvements that have been planned for some time. In this release, we've added completions for "),I={href:"https://github.com/nushell/nushell/pull/3594",target:"_blank",rel:"noopener noreferrer"},q=e("alias definitions"),W=e(", "),z={href:"https://github.com/nushell/nushell/pull/3589",target:"_blank",rel:"noopener noreferrer"},T=e("source imports"),B=e(", completions for "),E={href:"https://github.com/nushell/nushell/pull/3577",target:"_blank",rel:"noopener noreferrer"},L=e("quoted paths"),V=e(", completions while "),$={href:"https://github.com/nushell/nushell/pull/3575",target:"_blank",rel:"noopener noreferrer"},S=e("inside of a pipeline"),Y=e(", completions in "),A={href:"https://github.com/nushell/nushell/pull/3564",target:"_blank",rel:"noopener noreferrer"},F=e("incomplete expressions"),J=e(", "),P={href:"https://github.com/nushell/nushell/pull/3571",target:"_blank",rel:"noopener noreferrer"},R=e("subcommand completions"),C=e(" and more."),G=e("On Windows, we've "),H={href:"https://github.com/nushell/nushell/pull/3665",target:"_blank",rel:"noopener noreferrer"},M=e("sped up path completions"),O=e(". We've also reworked path handling, which should help make "),D={href:"https://github.com/nushell/nushell/pull/3653",target:"_blank",rel:"noopener noreferrer"},K=e("path completions in Windows more consistent"),Q=e(", including handling of "),U=t("code",null,"~",-1),X=e("."),Z=s(`<p>Behind the scenes, we&#39;ve also refactored completions into their own crate, so that we can more easily grow the areas where completions are supported.</p><h2 id="pipeline-vars-jt" tabindex="-1"><a class="header-anchor" href="#pipeline-vars-jt" aria-hidden="true">#</a> Pipeline vars (jt)</h2><p>Sometimes, when you&#39;re working on a pipeline, you want to refer to values coming in using an xargs style. With 0.33, we&#39;ve introduced a new built-in variable called <code>$in</code>. The <code>$in</code> variable will collect the pipeline into a value for you, allowing you to access the whole stream as a parameter.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token variable">$in</span>.1 * <span class="token variable">$in</span>.2
<span class="token number">6</span>
</code></pre></div><h2 id="new-distributions-itsme-alan-zmedico" tabindex="-1"><a class="header-anchor" href="#new-distributions-itsme-alan-zmedico" aria-hidden="true">#</a> New distributions (itsme-alan, zmedico)</h2>`,5),ee=e("You can now install Nushell from the "),te={href:"https://github.com/microsoft/winget-pkgs/pull/17428",target:"_blank",rel:"noopener noreferrer"},oe=e("winget repo"),ne=e(" and from "),se={href:"https://packages.gentoo.org/packages/app-shells/nushell",target:"_blank",rel:"noopener noreferrer"},le=e("gentoo"),re=e("."),ae=s('<h2 id="more-natural-pipeline-output-jt" tabindex="-1"><a class="header-anchor" href="#more-natural-pipeline-output-jt" aria-hidden="true">#</a> More natural pipeline output (jt)</h2><p>In this release, we&#39;ve also relaxed some of the strictness in when output happens to always be at the end of a pipeline. In previous versions of Nushell, it was common for people to try an example like <code>echo &quot;hello &quot;; echo &quot;world&quot;</code> only to be confused why they only saw <code>world</code> in the output. Now, we treat <code>;</code> like carriage return, so that pipelines more naturally output their results just as they do at the end of lines.</p><p>You can add back in the ignore ability using the new <code>ignore</code> command, which will ignore any stdout or data output from the previous command in the pipeline. For example, <code>ls | ignore</code>.</p><h2 id="syntax-highlighting-themes-fdncred" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting-themes-fdncred" aria-hidden="true">#</a> Syntax highlighting themes (fdncred)</h2><p><img src="'+h+'" alt="image of syntax highlighting themes in Nushell"></p><p><em>Nu, with configurable colors</em></p>',6),ie=e("You can now configure the colors used in syntax highlighting. For the currently supported token types and examples, check out "),he={href:"https://github.com/nushell/nushell/pull/3606",target:"_blank",rel:"noopener noreferrer"},de=e("the original PR"),ce=e("."),_e=t("h2",{id:"new-commands",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#new-commands","aria-hidden":"true"},"#"),e(" New commands")],-1),ue=e("nathom added "),pe={href:"https://github.com/nushell/nushell/pull/3629",target:"_blank",rel:"noopener noreferrer"},me=t("code",null,"unlet_env",-1),fe=e(" to remove environment variables from the current scope"),ge=e("jt added the "),be={href:"https://github.com/nushell/nushell/pull/3643",target:"_blank",rel:"noopener noreferrer"},ke=t("code",null,"ignore",-1),we=e(" command to ignore pipeline output"),ve=e("fdncred added "),ye={href:"https://github.com/nushell/nushell/pull/3570",target:"_blank",rel:"noopener noreferrer"},xe=t("code",null,"ansi gradient",-1),Ne=e(" command"),je=t("h2",{id:"additional-improvements",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#additional-improvements","aria-hidden":"true"},"#"),e(" Additional improvements")],-1),Ie=e("fdncred added "),qe={href:"https://github.com/nushell/nushell/pull/3660",target:"_blank",rel:"noopener noreferrer"},We=e("path and environment path separators to "),ze=t("code",null,"char",-1),Te=e(" to allow for creating more portable scripts, fixed an issue with "),Be={href:"https://github.com/nushell/nushell/pull/3634",target:"_blank",rel:"noopener noreferrer"},Ee=e("error colors"),Le=e(", added "),Ve={href:"https://github.com/nushell/nushell/pull/3601",target:"_blank",rel:"noopener noreferrer"},$e=e("single and double quote to char"),Se=e(", "),Ye={href:"https://github.com/nushell/nushell/pull/3548",target:"_blank",rel:"noopener noreferrer"},Ae=e("version now lists plugins"),Fe=e("efx updated "),Je={href:"https://github.com/nushell/nushell/pull/3649",target:"_blank",rel:"noopener noreferrer"},Pe=e("commands to engine-p style"),Re=e("chrisfinazzo "),Ce={href:"https://github.com/nushell/nushell/pull/3635",target:"_blank",rel:"noopener noreferrer"},Ge=e("fixed some of our helper scripts"),He=e("andrasio, jt "),Me={href:"https://github.com/nushell/nushell/pull/3632",target:"_blank",rel:"noopener noreferrer"},Oe=e("removed the clap dependency, so nushell parses its own parameters"),De=e("vladdoster landed "),Ke={href:"https://github.com/nushell/nushell/pull/3630",target:"_blank",rel:"noopener noreferrer"},Qe=e("some doc improvements"),Ue=e("NiklasJonsson improved "),Xe={href:"https://github.com/nushell/nushell/pull/3628",target:"_blank",rel:"noopener noreferrer"},Ze=e("nu doc comments"),et=e("reaganmcf added "),tt={href:"https://github.com/nushell/nushell/pull/3618",target:"_blank",rel:"noopener noreferrer"},ot=e("an optional plugin for handling mp4 metadata"),nt=e(" and "),st={href:"https://github.com/nushell/nushell/pull/3561",target:"_blank",rel:"noopener noreferrer"},lt=e("bumped sysinfo"),rt=e("voanhduy1512 added support for "),at={href:"https://github.com/nushell/nushell/pull/3611",target:"_blank",rel:"noopener noreferrer"},it=e("invoking external commands via string interpolation"),ht=e("Garfield96 added "),dt={href:"https://github.com/nushell/nushell/pull/3600",target:"_blank",rel:"noopener noreferrer"},ct=e("--sheets for xlsx/ods"),_t=e(", "),ut={href:"https://github.com/nushell/nushell/pull/3529",target:"_blank",rel:"noopener noreferrer"},pt=e("--tables for "),mt=t("code",null,"from sqlite",-1),ft=e(", and "),gt={href:"https://github.com/nushell/nushell/pull/3522",target:"_blank",rel:"noopener noreferrer"},bt=e("fixed a panic with giving empty tables to "),kt=t("code",null,"to sqlite",-1),wt=e("kubouch improved "),vt={href:"https://github.com/nushell/nushell/pull/3588",target:"_blank",rel:"noopener noreferrer"},yt=e("errors and updated commands to engine-p"),xt=e(", improved some "),Nt={href:"https://github.com/nushell/nushell/pull/3580",target:"_blank",rel:"noopener noreferrer"},jt=e("internal handling of "),It=t("code",null,"def",-1),qt=e(", "),Wt={href:"https://github.com/nushell/nushell/pull/3588",target:"_blank",rel:"noopener noreferrer"},zt=e("clarified the "),Tt=t("code",null,"exec",-1),Bt=e(" help message"),Et=e("sholderbach improved "),Lt={href:"https://github.com/nushell/nushell/pull/3573",target:"_blank",rel:"noopener noreferrer"},Vt=t("code",null,"where",-1),$t=e(" docs"),St=e("jt added "),Yt={href:"https://github.com/nushell/nushell/pull/3562",target:"_blank",rel:"noopener noreferrer"},At=e("parsing for hex, binary, and octal numbers"),Ft=e("pka improved "),Jt={href:"https://github.com/nushell/nushell/pull/3560",target:"_blank",rel:"noopener noreferrer"},Pt=e("territory in locale support for byte formatting"),Rt=e("ahkrr fixed handling of "),Ct={href:"https://github.com/nushell/nushell/pull/3524",target:"_blank",rel:"noopener noreferrer"},Gt=e("# in filenames"),Ht=t("li",null,"jt, LovecraftianHorror, apatrushev, sholderbach, elferherrera, inet56 added fixes to the website and docs",-1),Mt=t("li",null,"fdncred, efx, jt, and andrasio all added scripts and fixes to the scripts repo",-1),Ot=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),Dt=e("We're continuing to improve our dataframe support, and hope to be rolling it out a part of the default commands in the next release. Elfherrera has been "),Kt={href:"https://github.com/nushell/nushell/pull/3608",target:"_blank",rel:"noopener noreferrer"},Qt=e("hard at work improving the dataframe support to get it ready"),Ut=e(".");function Xt(Zt,eo){const o=r("ExternalLinkIcon");return a(),i("div",null,[c,_,u,p,t("p",null,[m,t("a",f,[g,n(o)]),b,t("a",k,[w,n(o)]),v,y,x]),N,t("p",null,[j,t("a",I,[q,n(o)]),W,t("a",z,[T,n(o)]),B,t("a",E,[L,n(o)]),V,t("a",$,[S,n(o)]),Y,t("a",A,[F,n(o)]),J,t("a",P,[R,n(o)]),C]),t("p",null,[G,t("a",H,[M,n(o)]),O,t("a",D,[K,n(o)]),Q,U,X]),Z,t("p",null,[ee,t("a",te,[oe,n(o)]),ne,t("a",se,[le,n(o)]),re]),ae,t("p",null,[ie,t("a",he,[de,n(o)]),ce]),_e,t("ul",null,[t("li",null,[ue,t("a",pe,[me,fe,n(o)])]),t("li",null,[ge,t("a",be,[ke,we,n(o)])]),t("li",null,[ve,t("a",ye,[xe,Ne,n(o)])])]),je,t("ul",null,[t("li",null,[Ie,t("a",qe,[We,ze,n(o)]),Te,t("a",Be,[Ee,n(o)]),Le,t("a",Ve,[$e,n(o)]),Se,t("a",Ye,[Ae,n(o)])]),t("li",null,[Fe,t("a",Je,[Pe,n(o)])]),t("li",null,[Re,t("a",Ce,[Ge,n(o)])]),t("li",null,[He,t("a",Me,[Oe,n(o)])]),t("li",null,[De,t("a",Ke,[Qe,n(o)])]),t("li",null,[Ue,t("a",Xe,[Ze,n(o)])]),t("li",null,[et,t("a",tt,[ot,n(o)]),nt,t("a",st,[lt,n(o)])]),t("li",null,[rt,t("a",at,[it,n(o)])]),t("li",null,[ht,t("a",dt,[ct,n(o)]),_t,t("a",ut,[pt,mt,n(o)]),ft,t("a",gt,[bt,kt,n(o)])]),t("li",null,[wt,t("a",vt,[yt,n(o)]),xt,t("a",Nt,[jt,It,n(o)]),qt,t("a",Wt,[zt,Tt,Bt,n(o)])]),t("li",null,[Et,t("a",Lt,[Vt,$t,n(o)])]),t("li",null,[St,t("a",Yt,[At,n(o)])]),t("li",null,[Ft,t("a",Jt,[Pt,n(o)])]),t("li",null,[Rt,t("a",Ct,[Gt,n(o)])]),Ht,Mt]),Ot,t("p",null,[Dt,t("a",Kt,[Qt,n(o)]),Ut])])}var oo=l(d,[["render",Xt],["__file","2021-06-22-nushell_0_33.html.vue"]]);export{oo as default};
