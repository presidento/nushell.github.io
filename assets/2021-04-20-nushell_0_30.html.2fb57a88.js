import{_ as s,r as l,o as r,c as h,a as e,b as o,d as t,e as i}from"./app.68c16707.js";var a="/assets/0_30_0_speed.eb07de9a.png";const _={},d=e("h1",{id:"nushell-0-30",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-30","aria-hidden":"true"},"#"),t(" Nushell 0.30")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"Today, we're releasing 0.30 of Nu. This release adds big improvements to performance and simplicity of the engine.",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),m=t("Nu 0.30 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.30.0",target:"_blank",rel:"noopener noreferrer"},g=t("pre-built binaries"),b=t(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=t("crates.io"),v=t(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),x=t("."),N=i('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="performance-improvements-jonathandturner" tabindex="-1"><a class="header-anchor" href="#performance-improvements-jonathandturner" aria-hidden="true">#</a> Performance improvements (jonathandturner)</h2><p><img src="'+a+'" alt="image of the 0.30 release being 8-20 times faster than 0.29"></p><p><em>Nu, now noticeably faster</em></p>',7),T=t("The 0.30 release is the first to include the engine-p experimental approaches that we mentioned in the last release. These changes streamline the engine, moving it from "),I={href:"https://github.com/nushell/nushell/pull/3270",target:"_blank",rel:"noopener noreferrer"},F=t("async streams to iterators"),j=t(", "),W={href:"https://github.com/nushell/nushell/pull/3281",target:"_blank",rel:"noopener noreferrer"},B=t("simplifying how commands handle their arguments"),R=t(", and how "),L={href:"https://github.com/nushell/nushell/pull/3304",target:"_blank",rel:"noopener noreferrer"},P=t("outputs are passed from one command to the next"),V=t("."),q=t("The end result is an engine that is both simpler and much faster. In the above example we run two different benchmarks. The first is a run of "),A={href:"https://github.com/nushell/nu_scripts/blob/main/coloring/gradient.nu",target:"_blank",rel:"noopener noreferrer"},C=t("this script"),U=t(" in the Nushell script repo. The second is a tight processing loop over many 10 million small records: "),$=e("code",null,"echo 1..10000000 | prepend 777 | append 555 | where $it > 7 | length",-1),z=t("."),D=e("p",null,"Though the performance numbers are still early, they're extremely promising.",-1),E=e("h2",{id:"new-built-in-variable-scope-stevenbarragan-fdncred",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-built-in-variable-scope-stevenbarragan-fdncred","aria-hidden":"true"},"#"),t(" New built-in variable "),e("code",null,"$scope"),t(" (stevenbarragan, fdncred)")],-1),S=e("p",null,[t("We're experimenting with a new built-in variable called "),e("code",null,"$scope"),t(". This gives you access to definitions in scope, including variables.")],-1),M=e("h2",{id:"new-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-commands","aria-hidden":"true"},"#"),t(" New Commands")],-1),K={href:"https://github.com/nushell/nushell/pull/3239",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"math sqrt",-1),G=t(" (luccasmmg)"),H={href:"https://github.com/nushell/nushell/pull/3253",target:"_blank",rel:"noopener noreferrer"},J=e("code",null,"any?",-1),Q=t(" and "),X=e("code",null,"all?",-1),Y=t(" (andrasio)"),Z={href:"https://github.com/nushell/nushell/pull/3256",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"path parse",-1),te=t(", "),ne=e("code",null,"path join",-1),oe=t(", and "),se=e("code",null,"path split",-1),le=t(" (kubouch)"),re={href:"https://github.com/nushell/nushell/pull/3279",target:"_blank",rel:"noopener noreferrer"},he=e("code",null,"into int",-1),ie=t(" (efx)"),ae={href:"https://github.com/nushell/nushell/pull/3327",target:"_blank",rel:"noopener noreferrer"},_e=e("code",null,"query json",-1),de=t(" (fdncred). This is a new experimental query function as we explore how we'd like to do data querying in nushell."),ce=e("h2",{id:"documentation-andrasio",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation-andrasio","aria-hidden":"true"},"#"),t(" Documentation (andrasio)")],-1),ue=t("We have a new "),pe={href:"https://github.com/nushell/nushell/pull/3326",target:"_blank",rel:"noopener noreferrer"},me=t("guide on how to create Nushell commands"),fe=t("."),ge=e("h2",{id:"improvements-lhkipp-luccasmmg-waldyrious-ilius-fdncred-andrasio-donnutpanic-ammrkn-jonathandturner-schrieveslaach-daschl-nightscape",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements-lhkipp-luccasmmg-waldyrious-ilius-fdncred-andrasio-donnutpanic-ammrkn-jonathandturner-schrieveslaach-daschl-nightscape","aria-hidden":"true"},"#"),t(" Improvements (LhKipp, luccasmmg, waldyrious, ilius, fdncred, andrasio, DonnutPanic, ammrkn, jonathandturner, schrieveslaach, daschl, nightscape)")],-1),be=t("Lots of internal optimization updates: "),ke={href:"https://github.com/nushell/nushell/pull/3289",target:"_blank",rel:"noopener noreferrer"},we=t("1"),ve=t(", "),ye={href:"https://github.com/nushell/nushell/pull/3292",target:"_blank",rel:"noopener noreferrer"},xe=t("2"),Ne=t(", "),Te={href:"https://github.com/nushell/nushell/pull/3300",target:"_blank",rel:"noopener noreferrer"},Ie=t("3"),Fe=t(", "),je={href:"https://github.com/nushell/nushell/pull/3301",target:"_blank",rel:"noopener noreferrer"},We=t("4"),Be=t(", "),Re={href:"https://github.com/nushell/nushell/pull/3306",target:"_blank",rel:"noopener noreferrer"},Le=t("5"),Pe=t("Now "),Ve={href:"https://github.com/nushell/nushell/pull/3314",target:"_blank",rel:"noopener noreferrer"},qe=t("appends to the history instead of replacing it"),Ae=t("API improvements to "),Ce={href:"https://github.com/nushell/nushell/pull/3309",target:"_blank",rel:"noopener noreferrer"},Ue=t("allow embedded nushell to have custom commands"),$e=t("Internal implementation "),ze={href:"https://github.com/nushell/nushell/pull/3310",target:"_blank",rel:"noopener noreferrer"},De=t("improvements to "),Ee=e("code",null,"which",-1),Se=t(", "),Me={href:"https://github.com/nushell/nushell/pull/3312",target:"_blank",rel:"noopener noreferrer"},Ke=t("to "),Oe=e("code",null,"all",-1),Ge=t(", "),He={href:"https://github.com/nushell/nushell/pull/3315",target:"_blank",rel:"noopener noreferrer"},Je=t("to "),Qe=e("code",null,"math",-1),Xe=t(" commands"),Ye=t(", "),Ze={href:"https://github.com/nushell/nushell/pull/3320",target:"_blank",rel:"noopener noreferrer"},et=t("to "),tt=e("code",null,"to",-1),nt=t(" and "),ot=e("code",null,"from",-1),st=t(" commands"),lt=t(", "),rt={href:"https://github.com/nushell/nushell/pull/3325",target:"_blank",rel:"noopener noreferrer"},ht=t("to "),it=e("code",null,"compact",-1),at=t("Updated "),_t={href:"https://github.com/nushell/nushell/pull/3322",target:"_blank",rel:"noopener noreferrer"},dt=e("code",null,"echo ..",-1),ct=t(" to no longer prints integers"),ut=t("Removed "),pt={href:"https://github.com/nushell/nushell/pull/3311",target:"_blank",rel:"noopener noreferrer"},mt=t("help flags from the "),ft=e("code",null,"$scope.commands",-1),gt=t(" display"),bt=t("Removed the "),kt={href:"https://github.com/nushell/nushell/pull/3308",target:"_blank",rel:"noopener noreferrer"},wt=t("dupes in get_commands/get_command_names"),vt=t("Fixes to "),yt={href:"https://github.com/nushell/nushell/pull/3305",target:"_blank",rel:"noopener noreferrer"},xt=t("viewing Value as a filepath"),Nt=t("Move "),Tt={href:"https://github.com/nushell/nushell/pull/3294",target:"_blank",rel:"noopener noreferrer"},It=t("arg deserialization out of "),Ft=e("code",null,"str",-1),jt=t("Cleaned up "),Wt={href:"https://github.com/nushell/nushell/pull/3297",target:"_blank",rel:"noopener noreferrer"},Bt=t("error handling"),Rt=t("Fixes to how "),Lt={href:"https://github.com/nushell/nushell/pull/3303",target:"_blank",rel:"noopener noreferrer"},Pt=t("rest arguments are handled"),Vt=t("Fixes to "),qt={href:"https://github.com/nushell/nushell/pull/3293",target:"_blank",rel:"noopener noreferrer"},At=e("code",null,"ansi rgb fg",-1),Ct=t("Updated "),Ut={href:"https://github.com/nushell/nushell/pull/3291",target:"_blank",rel:"noopener noreferrer"},$t=t("the default prompt"),zt=t("Autoview and table now "),Dt={href:"https://github.com/nushell/nushell/pull/3287",target:"_blank",rel:"noopener noreferrer"},Et=t("read from the in-memory config"),St=t("Do not "),Mt={href:"https://github.com/nushell/nushell/pull/3286",target:"_blank",rel:"noopener noreferrer"},Kt=t("store whitespace entries in the history"),Ot=t("Simplified "),Gt={href:"https://github.com/nushell/nushell/pull/3283",target:"_blank",rel:"noopener noreferrer"},Ht=t("internal handling of the runnable context"),Jt=t("Fixed "),Qt={href:"https://github.com/nushell/nushell/pull/3280",target:"_blank",rel:"noopener noreferrer"},Xt=t("external output busy-waiting"),Yt=t("Remove "),Zt={href:"https://github.com/nushell/nushell/pull/3278",target:"_blank",rel:"noopener noreferrer"},en=e("code",null,"rm",-1),tn=t("'s trash flag if it's not supported"),nn=t("Fixed a "),on={href:"https://github.com/nushell/nushell/pull/3271",target:"_blank",rel:"noopener noreferrer"},sn=t("panic when timestamp is out of range"),ln=t("Sysinfo dependency has been "),rn={href:"https://github.com/nushell/nushell/pull/3267",target:"_blank",rel:"noopener noreferrer"},hn=t("updated"),an=t("Config commands "),_n={href:"https://github.com/nushell/nushell/pull/3265",target:"_blank",rel:"noopener noreferrer"},dn=t("are now more unified internally"),cn=t("Added "),un={href:"https://github.com/nushell/nushell/pull/3257",target:"_blank",rel:"noopener noreferrer"},pn=t("TiB and PiB units"),mn=t("Improved "),fn={href:"https://github.com/nushell/nushell/pull/3249",target:"_blank",rel:"noopener noreferrer"},gn=t("auto-suggestion for aliases and custom commands"),bn=t("More "),kn={href:"https://github.com/nushell/nushell/pull/3247",target:"_blank",rel:"noopener noreferrer"},wn=t("logging and tests"),vn=t("Now "),yn={href:"https://github.com/nushell/nushell/pull/3243",target:"_blank",rel:"noopener noreferrer"},xn=t("parses decimal units"),Nn=t("Use "),Tn={href:"https://github.com/nushell/nushell/pull/3242",target:"_blank",rel:"noopener noreferrer"},In=t("one main function to run scripts"),Fn=t("Fixed "),jn={href:"https://github.com/nushell/nushell/pull/3235",target:"_blank",rel:"noopener noreferrer"},Wn=t("errors when deleting a FIFO"),Bn=t("Fixed "),Rn={href:"https://github.com/nushell/nushell/pull/3234",target:"_blank",rel:"noopener noreferrer"},Ln=t("capitalizations of Unicode"),Pn=t("Fixes to "),Vn={href:"https://github.com/nushell/nushell/pull/3335",target:"_blank",rel:"noopener noreferrer"},qn=t("path sync'ing"),An=t(", "),Cn={href:"https://github.com/nushell/nushell/pull/3336",target:"_blank",rel:"noopener noreferrer"},Un=t("more path fixes"),$n=t(", and "),zn={href:"https://github.com/nushell/nushell/pull/3339",target:"_blank",rel:"noopener noreferrer"},Dn=t("improvements to dynamic blocks"),En=e("h2",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),Sn=e("h3",{id:"removed-help-shell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removed-help-shell","aria-hidden":"true"},"#"),t(" Removed help shell")],-1),Mn=t("We have removed the "),Kn={href:"https://github.com/nushell/nushell/pull/3258",target:"_blank",rel:"noopener noreferrer"},On=t("help shell"),Gn=t(" to simplify code."),Hn=e("h3",{id:"removed-ambiguous-units",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removed-ambiguous-units","aria-hidden":"true"},"#"),t(" Removed ambiguous units")],-1),Jn=t("We've also removed "),Qn={href:"https://github.com/nushell/nushell/pull/3262",target:"_blank",rel:"noopener noreferrer"},Xn=e("code",null,"yr",-1),Yn=t(" and "),Zn=e("code",null,"mon",-1),eo=t(" units"),to=t(" because their meaning was too confusing."),no=e("h3",{id:"new-set-of-default-features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-set-of-default-features","aria-hidden":"true"},"#"),t(" New set of default features")],-1),oo=t("The "),so={href:"https://github.com/nushell/nushell/pull/3288",target:"_blank",rel:"noopener noreferrer"},lo=t("default feature list is now simpler"),ro=t(". This means that doing a "),ho=e("code",null,"cargo install",-1),io=t(" will give you fewer of the plugins than previously. We're still working to refine this list. Please do give feedback if these changes negatively impact you."),ao=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),_o=e("p",null,"The new engine and performance improvements should open the door for even more improvements in the future. These improvements also make it easier to explore adding more sophisticated completion logic in the future, as that logic could be written in Nushell itself.",-1);function co(uo,po){const n=l("ExternalLinkIcon");return r(),h("div",null,[d,c,u,p,e("p",null,[m,e("a",f,[g,o(n)]),b,e("a",k,[w,o(n)]),v,y,x]),N,e("p",null,[T,e("a",I,[F,o(n)]),j,e("a",W,[B,o(n)]),R,e("a",L,[P,o(n)]),V]),e("p",null,[q,e("a",A,[C,o(n)]),U,$,z]),D,E,S,M,e("ul",null,[e("li",null,[e("a",K,[O,o(n)]),G]),e("li",null,[e("a",H,[J,Q,X,o(n)]),Y]),e("li",null,[e("a",Z,[ee,te,ne,oe,se,o(n)]),le]),e("li",null,[e("a",re,[he,o(n)]),ie]),e("li",null,[e("a",ae,[_e,o(n)]),de])]),ce,e("p",null,[ue,e("a",pe,[me,o(n)]),fe]),ge,e("ul",null,[e("li",null,[be,e("a",ke,[we,o(n)]),ve,e("a",ye,[xe,o(n)]),Ne,e("a",Te,[Ie,o(n)]),Fe,e("a",je,[We,o(n)]),Be,e("a",Re,[Le,o(n)])]),e("li",null,[Pe,e("a",Ve,[qe,o(n)])]),e("li",null,[Ae,e("a",Ce,[Ue,o(n)])]),e("li",null,[$e,e("a",ze,[De,Ee,o(n)]),Se,e("a",Me,[Ke,Oe,o(n)]),Ge,e("a",He,[Je,Qe,Xe,o(n)]),Ye,e("a",Ze,[et,tt,nt,ot,st,o(n)]),lt,e("a",rt,[ht,it,o(n)])]),e("li",null,[at,e("a",_t,[dt,ct,o(n)])]),e("li",null,[ut,e("a",pt,[mt,ft,gt,o(n)])]),e("li",null,[bt,e("a",kt,[wt,o(n)])]),e("li",null,[vt,e("a",yt,[xt,o(n)])]),e("li",null,[Nt,e("a",Tt,[It,Ft,o(n)])]),e("li",null,[jt,e("a",Wt,[Bt,o(n)])]),e("li",null,[Rt,e("a",Lt,[Pt,o(n)])]),e("li",null,[Vt,e("a",qt,[At,o(n)])]),e("li",null,[Ct,e("a",Ut,[$t,o(n)])]),e("li",null,[zt,e("a",Dt,[Et,o(n)])]),e("li",null,[St,e("a",Mt,[Kt,o(n)])]),e("li",null,[Ot,e("a",Gt,[Ht,o(n)])]),e("li",null,[Jt,e("a",Qt,[Xt,o(n)])]),e("li",null,[Yt,e("a",Zt,[en,tn,o(n)])]),e("li",null,[nn,e("a",on,[sn,o(n)])]),e("li",null,[ln,e("a",rn,[hn,o(n)])]),e("li",null,[an,e("a",_n,[dn,o(n)])]),e("li",null,[cn,e("a",un,[pn,o(n)])]),e("li",null,[mn,e("a",fn,[gn,o(n)])]),e("li",null,[bn,e("a",kn,[wn,o(n)])]),e("li",null,[vn,e("a",yn,[xn,o(n)])]),e("li",null,[Nn,e("a",Tn,[In,o(n)])]),e("li",null,[Fn,e("a",jn,[Wn,o(n)])]),e("li",null,[Bn,e("a",Rn,[Ln,o(n)])]),e("li",null,[Pn,e("a",Vn,[qn,o(n)]),An,e("a",Cn,[Un,o(n)]),$n,e("a",zn,[Dn,o(n)])])]),En,Sn,e("p",null,[Mn,e("a",Kn,[On,o(n)]),Gn]),Hn,e("p",null,[Jn,e("a",Qn,[Xn,Yn,Zn,eo,o(n)]),to]),no,e("p",null,[oo,e("a",so,[lo,o(n)]),ro,ho,io]),ao,_o])}var fo=s(_,[["render",co],["__file","2021-04-20-nushell_0_30.html.vue"]]);export{fo as default};
