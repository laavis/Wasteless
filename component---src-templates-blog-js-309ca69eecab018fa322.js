(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7oih":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Mqgm"),u=function(){var e=o.data;return a.a.createElement("footer",null,a.a.createElement("p",null,"2020 © ",e.site.siteMetadata.author))},c=n("cK5w"),i=n("Wbzz"),l=n("NE8A"),f=n.n(l),s=n("PPJB"),E=n.n(s),p=function(){var e=a.a.useState(!1),t=e[0],n=e[1],r=c.data;return a.a.createElement("header",{className:E.a.header},a.a.createElement("div",null,a.a.createElement("span",{className:E.a.title},r.site.siteMetadata.title)),a.a.createElement("div",{className:f.a.iconWrapper+" "+f.a.btn,onClick:function(){n(!0)},role:"button"},a.a.createElement("svg",{className:E.a.menuOpenIcon,width:"24",height:"24"},a.a.createElement("line",{className:E.a.lineTop,x1:"2",y1:"8",x2:"22",y2:"8"}),a.a.createElement("line",{className:E.a.lineBottom,x1:"6",y1:"14",x2:"22",y2:"14"}))),a.a.createElement("div",{className:E.a.menuOverlay+" "+(t?E.a.open:"")},a.a.createElement("div",{onClick:function(){n(!1)},className:f.a.iconWrapper+" "+f.a.btn+" "+E.a.btnCloseMenu,role:"button"},a.a.createElement("svg",{className:f.a.iconLight,width:"18",height:"18"},a.a.createElement("line",{x1:"1",y1:"17",x2:"17",y2:"1"}),a.a.createElement("line",{x1:"1",y1:"1",x2:"17",y2:"17"}))),a.a.createElement("ul",{className:E.a.menu},a.a.createElement("li",null,a.a.createElement(i.a,{className:E.a.navItem,activeClassName:E.a.navItemActive,to:"/"},"Home",a.a.createElement("svg",{width:"100%",height:"2"},a.a.createElement("line",{x1:"0",y1:"1",x2:"100%",y2:"1"})))),a.a.createElement("li",null,a.a.createElement(i.a,{className:E.a.navItem,activeClassName:E.a.navItemActive,to:"/blog"},"Blog",a.a.createElement("svg",{width:"100%",height:"2"},a.a.createElement("line",{x1:"0",y1:"1",x2:"100%",y2:"1"})))),a.a.createElement("li",null,a.a.createElement(i.a,{className:E.a.navItem,activeClassName:E.a.navItemActive,to:"/about"},"About",a.a.createElement("svg",{width:"100%",height:"2"},a.a.createElement("line",{x1:"0",y1:"1",x2:"100%",y2:"1"})))),a.a.createElement("li",null,a.a.createElement(i.a,{className:E.a.navItem,activeClassName:E.a.navItemActive,to:"/contact"},"Contact"," ",a.a.createElement("svg",{width:"100%",height:"2"},a.a.createElement("line",{x1:"0",y1:"1",x2:"100%",y2:"1"})))))))},d=(n("+5i3"),n("S6I+")),m=n.n(d);t.a=function(e){return a.a.createElement("div",{className:m.a.container},a.a.createElement(p,null),a.a.createElement("main",{className:m.a.content},e.children),a.a.createElement(u,null))}},AvkS:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("R8uD"),u=n("7oih"),c="2379558243";t.default=function(e){return a.a.createElement(u.a,null,a.a.createElement("h1",null,e.data.contentfulBlogPost.title),a.a.createElement("p",null,e.data.contentfulBlogPost.publishedDate),Object(o.documentToReactComponents)(e.data.contentfulBlogPost.content.json))}},DW2E:function(e,t,n){var r=n("0/R4"),a=n("Z6vF").onFreeze;n("Xtr8")("freeze",(function(e){return function(t){return e&&r(t)?e(a(t)):t}}))},Mqgm:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Sara Suviranta"}}}}')},R8uD:function(e,t,n){"use strict";(function(e){n("DNiP"),n("bWfx"),n("DW2E"),n("hhXQ"),n("Z2Ku"),n("L9s1"),n("hHhE"),n("WLL4"),n("rE2o"),n("rGqo"),n("yt8O"),n("RW0V"),n("pIFo"),n("ioFf"),n("V+eJ"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var i,l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var a,o,u,i="object",l=function(e){return e&&e.Math==Math&&e},f=l(typeof globalThis==i&&globalThis)||l(typeof window==i&&window)||l(typeof self==i&&self)||l(typeof n==i&&n)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},E=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),p={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,m={f:d&&!p.call({1:2},1)?function(e){var t=d(this,e);return!!t&&t.enumerable}:p},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},y={}.toString,v="".split,g=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return y.call(e).slice(8,-1)}(e)?v.call(e,""):Object(e)}:Object,I=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},N=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!N(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!N(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!N(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!N(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,T=function(e,t){return O.call(e,t)},_=f.document,S=N(_)&&N(_.createElement),D=function(e){return S?_.createElement(e):{}},L=!E&&!s((function(){return 7!=Object.defineProperty(D("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,A={f:E?w:function(e,t){if(e=I(e),t=b(t,!0),L)try{return w(e,t)}catch(n){}if(T(e,t))return h(!m.f.call(e,t),e[t])}},P=function(e){if(!N(e))throw TypeError(String(e)+" is not an object");return e},R=Object.defineProperty,j={f:E?R:function(e,t,n){if(P(e),t=b(t,!0),P(n),L)try{return R(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},x=E?function(e,t,n){return j.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},M=function(e,t){try{x(f,e,t)}catch(n){f[e]=t}return t},H=r((function(e){var t=f["__core-js_shared__"]||M("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),C=H("native-function-to-string",Function.toString),k=f.WeakMap,G="function"==typeof k&&/native code/.test(C.call(k)),B=0,K=Math.random(),F=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+K).toString(36)},Y=H("keys"),U=function(e){return Y[e]||(Y[e]=F(e))},W={},q=f.WeakMap;if(G){var z=new q,V=z.get,J=z.has,Q=z.set;a=function(e,t){return Q.call(z,e,t),t},o=function(e){return V.call(z,e)||{}},u=function(e){return J.call(z,e)}}else{var X=U("state");W[X]=!0,a=function(e,t){return x(e,X,t),t},o=function(e){return T(e,X)?e[X]:{}},u=function(e){return T(e,X)}}var Z={set:a,get:o,has:u,enforce:function(e){return u(e)?o(e):a(e,{})},getterFor:function(e){return function(t){var n;if(!N(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=Z.get,n=Z.enforce,r=String(C).split("toString");H("inspectSource",(function(e){return C.call(e)})),(e.exports=function(e,t,a,o){var u=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,i=!!o&&!!o.noTargetGet;"function"==typeof a&&("string"!=typeof t||T(a,"name")||x(a,"name",t),n(a).source=r.join("string"==typeof t?t:"")),e!==f?(u?!i&&e[t]&&(c=!0):delete e[t],c?e[t]=a:x(e,t,a)):c?e[t]=a:M(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C.call(this)}))})),ee=f,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(f[e]):ee[e]&&ee[e][t]||f[e]&&f[e][t]},re=Math.ceil,ae=Math.floor,oe=function(e){return isNaN(e=+e)?0:(e>0?ae:re)(e)},ue=Math.min,ce=Math.max,ie=Math.min,le=function(e){return function(t,n,r){var a,o,u=I(t),c=(a=u.length)>0?ue(oe(a),9007199254740991):0,i=function(e,t){var n=oe(e);return n<0?ce(n+t,0):ie(n,t)}(r,c);if(e&&n!=n){for(;c>i;)if((o=u[i++])!=o)return!0}else for(;c>i;i++)if((e||i in u)&&u[i]===n)return e||i||0;return!e&&-1}},fe={includes:le(!0),indexOf:le(!1)},se=fe.indexOf,Ee=function(e,t){var n,r=I(e),a=0,o=[];for(n in r)!T(W,n)&&T(r,n)&&o.push(n);for(;t.length>a;)T(r,n=t[a++])&&(~se(o,n)||o.push(n));return o},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],de=pe.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return Ee(e,de)}},he={f:Object.getOwnPropertySymbols},ye=ne("Reflect","ownKeys")||function(e){var t=me.f(P(e)),n=he.f;return n?t.concat(n(e)):t},ve=function(e,t){for(var n=ye(t),r=j.f,a=A.f,o=0;o<n.length;o++){var u=n[o];T(e,u)||r(e,u,a(t,u))}},ge=/#|\.prototype\./,Ie=function(e,t){var n=be[Ne(e)];return n==Te||n!=Oe&&("function"==typeof t?s(t):!!t)},Ne=Ie.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},be=Ie.data={},Oe=Ie.NATIVE="N",Te=Ie.POLYFILL="P",_e=Ie,Se=A.f,De=function(e,t){var n,r,a,o,u,c=e.target,i=e.global,l=e.stat;if(n=i?f:l?f[c]||M(c,{}):(f[c]||{}).prototype)for(r in t){if(o=t[r],a=e.noTargetGet?(u=Se(n,r))&&u.value:n[r],!_e(i?r:c+(l?".":"#")+r,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;ve(o,a)}(e.sham||a&&a.sham)&&x(o,"sham",!0),$(n,r,o,e)}},Le=Object.keys||function(e){return Ee(e,pe)},we=m.f,Ae=function(e){return function(t){for(var n,r=I(t),a=Le(r),o=a.length,u=0,c=[];o>u;)n=a[u++],E&&!we.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Pe={entries:Ae(!0),values:Ae(!1)}.values;De({target:"Object",stat:!0},{values:function(e){return Pe(e)}});ee.Object.values;var Re=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),je=f.Symbol,xe=H("wks"),Me=E?Object.defineProperties:function(e,t){P(e);for(var n,r=Le(t),a=r.length,o=0;a>o;)j.f(e,n=r[o++],t[n]);return e},He=ne("document","documentElement"),Ce=U("IE_PROTO"),ke=function(){},Ge=function(){var e,t=D("iframe"),n=pe.length;for(t.style.display="none",He.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ge=e.F;n--;)delete Ge.prototype[pe[n]];return Ge()},Be=Object.create||function(e,t){var n;return null!==e?(ke.prototype=P(e),n=new ke,ke.prototype=null,n[Ce]=e):n=Ge(),void 0===t?n:Me(n,t)};W[Ce]=!0;var Ke,Fe=xe[Ke="unscopables"]||(xe[Ke]=Re&&je[Ke]||(Re?je:F)("Symbol."+Ke)),Ye=Array.prototype;null==Ye[Fe]&&x(Ye,Fe,Be(null));var Ue,We=fe.includes;De({target:"Array",proto:!0},{includes:function(e){return We(this,e,arguments.length>1?arguments[1]:void 0)}}),Ue="includes",Ye[Fe][Ue]=!0;var qe,ze,Ve,Je=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}},Qe=Function.call;qe="includes",Je(Qe,f["Array"].prototype[qe],ze);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Ve||(Ve={}));var Xe,Ze=Ve;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var at=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=at}));(i=l)&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")&&i.default;var f,s,E=l.BLOCKS,p=(l.CONTAINERS,l.INLINES),d=l.MARKS,m=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function h(e,t){return e.map((function(e,n){return r=y(e,t),o=n,a.isValidElement(r)&&null===r.key?a.cloneElement(r,{key:o}):r;var r,o}))}function y(e,t){var n=t.renderNode,r=t.renderMark,a=t.renderText;if(m.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),a?a(e.value):e.value);var u=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):o.createElement(o.Fragment,null,u)}var v=((f={})[E.DOCUMENT]=function(e,t){return t},f[E.PARAGRAPH]=function(e,t){return o.createElement("p",null,t)},f[E.HEADING_1]=function(e,t){return o.createElement("h1",null,t)},f[E.HEADING_2]=function(e,t){return o.createElement("h2",null,t)},f[E.HEADING_3]=function(e,t){return o.createElement("h3",null,t)},f[E.HEADING_4]=function(e,t){return o.createElement("h4",null,t)},f[E.HEADING_5]=function(e,t){return o.createElement("h5",null,t)},f[E.HEADING_6]=function(e,t){return o.createElement("h6",null,t)},f[E.EMBEDDED_ENTRY]=function(e,t){return o.createElement("div",null,t)},f[E.UL_LIST]=function(e,t){return o.createElement("ul",null,t)},f[E.OL_LIST]=function(e,t){return o.createElement("ol",null,t)},f[E.LIST_ITEM]=function(e,t){return o.createElement("li",null,t)},f[E.QUOTE]=function(e,t){return o.createElement("blockquote",null,t)},f[E.HR]=function(){return o.createElement("hr",null)},f[p.ASSET_HYPERLINK]=function(e){return I(p.ASSET_HYPERLINK,e)},f[p.ENTRY_HYPERLINK]=function(e){return I(p.ENTRY_HYPERLINK,e)},f[p.EMBEDDED_ENTRY]=function(e){return I(p.EMBEDDED_ENTRY,e)},f[p.HYPERLINK]=function(e,t){return o.createElement("a",{href:e.data.uri},t)},f),g=((s={})[d.BOLD]=function(e){return o.createElement("b",null,e)},s[d.ITALIC]=function(e){return o.createElement("i",null,e)},s[d.UNDERLINE]=function(e){return o.createElement("u",null,e)},s[d.CODE]=function(e){return o.createElement("code",null,e)},s);function I(e,t){return o.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?y(e,{renderNode:u({},v,t.renderNode),renderMark:u({},g,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},UExd:function(e,t,n){var r=n("nh4g"),a=n("DVgA"),o=n("aCFj"),u=n("UqcF").f;e.exports=function(e){return function(t){for(var n,c=o(t),i=a(c),l=i.length,f=0,s=[];l>f;)n=i[f++],r&&!u.call(c,n)||s.push(e?[n,c[n]]:c[n]);return s}}},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},Wbzz:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("+ZDr"),u=n.n(o);n.d(t,"a",(function(){return u.a}));n("lw3w"),n("emEt").default.enqueue,a.a.createContext({})},cK5w:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Wasteless"}}}}')},hhXQ:function(e,t,n){var r=n("XKFU"),a=n("UExd")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-templates-blog-js-309ca69eecab018fa322.js.map