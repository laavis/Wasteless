(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=m(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(C,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},C=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var q=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,L=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,q=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:x?1:0,transition:q?"opacity "+b+"ms":"none"},l),V="boolean"==typeof v?"lightgray":v,k={transitionDelay:b+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},q&&k,{},l,{},f),M={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:y};if(p){var T=p,W=g(p);return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),V&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},q&&k)}),W.base64&&d.default.createElement(z,{ariaHidden:!0,src:W.base64,spreadProps:M,imageVariants:T,generateSources:N}),W.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,src:W.tracedSVG,spreadProps:M,imageVariants:T,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,S(T),d.default.createElement(C,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:T}))}}))}if(h){var H=h,j=g(h),G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete G.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},V&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},q&&k)}),j.base64&&d.default.createElement(z,{ariaHidden:!0,src:j.base64,spreadProps:M,imageVariants:H,generateSources:N}),j.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,src:j.tracedSVG,spreadProps:M,imageVariants:H,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,S(H),d.default.createElement(C,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},j,{imageVariants:H}))}}))}return null},t}(d.default.Component);q.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});q.propTypes={resolutions:R,sizes:V,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=q;t.default=k},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},L6Je:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Mqgm"),s=a("rp3q"),l=a.n(s),o=function(){var e=n.data;return i.a.createElement("footer",null,i.a.createElement("p",{className:l.a.cp},"2020 © ",e.site.siteMetadata.author))},d=a("cK5w"),c=a("Wbzz"),u=a("NE8A"),f=a.n(u),m=a("6tlt"),g=a.n(m),p=function(e){var t=e.open,a=e.handleMenuClose;return i.a.createElement("div",{className:g.a.container+" "+(t?g.a.open:"")},i.a.createElement("div",{onClick:a,className:f.a.iconWrapper+" "+f.a.btn+" "+g.a.btnClose,role:"button"},i.a.createElement("svg",{className:f.a.iconLight,width:"32",height:"32"},i.a.createElement("line",{x1:"2",y1:"31",x2:"31",y2:"1"}),i.a.createElement("line",{x1:"1",y1:"1",x2:"31",y2:"31"}))),i.a.createElement("ul",{className:g.a.menu},i.a.createElement("li",null,i.a.createElement(c.a,{className:g.a.navItem,activeClassName:g.a.navItemActive,to:"/"},"Home",i.a.createElement("svg",{width:"100%",height:"2"},i.a.createElement("line",{x1:"0",y1:"1",x2:"100%",y2:"1"})))),i.a.createElement("li",null,i.a.createElement(c.a,{className:g.a.navItem,activeClassName:g.a.navItemActive,to:"/blog"},"Blog",i.a.createElement("svg",{width:"100%",height:"2"},i.a.createElement("line",{x1:"0",y1:"1",x2:"100%",y2:"1"})))),i.a.createElement("li",null,i.a.createElement(c.a,{className:g.a.navItem,activeClassName:g.a.navItemActive,to:"/about"},"About",i.a.createElement("svg",{width:"100%",height:"2"},i.a.createElement("line",{x1:"0",y1:"1",x2:"100%",y2:"1"})))),i.a.createElement("li",null,i.a.createElement(c.a,{className:g.a.navItem,activeClassName:g.a.navItemActive,to:"/contact"},"Contact"," ",i.a.createElement("svg",{width:"100%",height:"2"},i.a.createElement("line",{x1:"0",y1:"1",x2:"100%",y2:"1"}))))))},h=a("PPJB"),v=a.n(h),b=function(){var e=i.a.useState(!1),t=e[0],a=e[1];console.log("aaa");var r=d.data;return i.a.createElement("header",{className:v.a.header},i.a.createElement("div",null,i.a.createElement(c.a,{to:"/",className:v.a.title},r.site.siteMetadata.title)),i.a.createElement("div",{className:f.a.iconWrapper+" "+f.a.btn,onClick:function(){a(!0)},role:"button"},i.a.createElement("svg",{className:v.a.menuOpenIcon},i.a.createElement("line",{className:v.a.lineTop,x1:"2",y1:"8",x2:"30",y2:"8"}),i.a.createElement("line",{className:v.a.lineBottom,x1:"8",y1:"16",x2:"30",y2:"16"}))),i.a.createElement(p,{open:t,handleMenuClose:function(){a(!1)}}))},E=(a("+5i3"),a("S6I+")),y=a.n(E);t.a=function(e){return i.a.createElement("div",{className:y.a.container},i.a.createElement(b,null),i.a.createElement("main",{className:y.a.content},e.children),i.a.createElement(o,null))}},Mqgm:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Sara Suviranta"}}}}')},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},Wbzz:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("+ZDr"),s=a.n(n);a.d(t,"a",(function(){return s.a}));a("lw3w"),a("emEt").default.enqueue,i.a.createContext({})},bT9l:function(e,t,a){"use strict";a.r(t),a.d(t,"imgQuery",(function(){return m}));var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("9eSz"),l=a.n(s),o=a("L6Je"),d=a("/4MY"),c=a.n(d),u=a("NE8A"),f=a.n(u),m="2595994867";t.default=function(e){var t=e.data;return i.a.createElement(o.a,null,i.a.createElement("h2",{className:f.a.titleHighlighted+" "+f.a.titleCentered},"Lorem Ipsum"),i.a.createElement("div",{className:c.a.imgWrapper},i.a.createElement(l.a,{fluid:t.profile.childImageSharp.fluid})),i.a.createElement("div",{className:c.a.description},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),i.a.createElement("p",null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.a.createElement("div",{className:c.a.social},i.a.createElement(n.a,{to:"/",className:c.a.facebook}),i.a.createElement(n.a,{to:"/",className:c.a.twitter}),i.a.createElement(n.a,{to:"/",className:c.a.linkedin}),i.a.createElement(n.a,{to:"/",className:c.a.instagram})))}},cK5w:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Plants in Pots"}}}}')},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-about-jsx-e92b802c8b4b2cef30ad.js.map