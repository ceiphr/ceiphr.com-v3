(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function f(){l=e(s.map((function(e){return e.props}))),T.canUseDOM?t(l):n&&(l=n(l))}var T=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(T,"canUseDOM",u),T}}},"9Dj+":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("VTCk"),c=n("yMzp"),u=n.n(c),l=n("QrDe"),s=n.n(l);n("sg+I");t.a=function(e){var t,n=e.location,r=e.title,c=e.children,l=Object(i.useMediaPredicate)("(prefers-color-scheme: dark)");return"/ceiphr.com-v3/"!==n.pathname&&(t=a.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main navigation"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(o.Link,{className:"navbar-item",to:"/","aria-label":"Go to the home page of this web site."},l?a.a.createElement(u.a,{alt:r,width:"64",height:"64"}):a.a.createElement(s.a,{alt:r,width:"64",height:"64"}))))),a.a.createElement("div",null,a.a.createElement("header",null,t),a.a.createElement("main",{className:"site-main"},c)," ",a.a.createElement("div",{className:"section"},a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"columns is-desktop"},a.a.createElement("div",{className:"column"},a.a.createElement("span",{className:"footer-links"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ceiphr/","aria-label":"Visit the GitHub page for Ari Birnbaum."},"GitHub"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/ari/","aria-label":"Visit the LinkedIn account for Ari Birnbaum."},"LinkedIn"),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://changelog.ceiphr.com/","aria-label":"Visit the change log for projects by Ari Birnbaum."},"Changelog")),a.a.createElement("p",null,"Unless otherwise noted, all content © 2016-2021 Ari Birnbaum.")),a.a.createElement("div",{className:"column"},a.a.createElement("span",{className:"footer-links"},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.iubenda.com/privacy-policy/18781590/legal","aria-label":"Read this site's privacy policy."},"Privacy Policy")," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.iubenda.com/privacy-policy/18781590/cookie-policy","aria-label":"Read this site's cookie policy."},"Cookie Policy")),a.a.createElement("p",null,"Built with"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.gatsbyjs.com/","aria-label":"Learn more about Gatsby.js."},"Gatsby.js"),","," "," and "," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.typescriptlang.org/","aria-label":"Learn more about Microsoft TypeScript."},"TypeScript"),"."," ","Hosted on"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://m.do.co/c/b95c2a8a5568","aria-label":"Learn more about DigitalOcean."},"DigitalOcean"),".")))))))}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var l=o[u];if(!c(l))return!1;var s=e[l],f=t[l];if(!1===(a=n?n.call(r,s,f,l):void 0)||void 0===a&&s!==f)return!1}return!0}},H8eV:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n("Wbzz"),c=n("VTCk"),u=function(e){var t=e.description,n=e.lang,r=(e.meta,e.title),u=e.image,l=Object(i.useStaticQuery)("1324386404").site,s=t||l.siteMetadata.description,f="https://ceiphr.io/ceiphr.com-v3"+(u||"/banner.jpeg"),T=Object(c.useMediaPredicate)("(prefers-color-scheme: dark)")?"https://ceiphr.io/ceiphr.com-v3/favicon-white.png":"https://ceiphr.io/ceiphr.com-v3/favicon-black.png";return a.a.createElement(o.Helmet,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+l.siteMetadata.title},a.a.createElement("link",{key:"gatsby-plugin-manifest-icon-link",rel:"icon",type:"image/png",href:T,sizes:"32x32"}),a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"description",content:s}),a.a.createElement("meta",{name:"image",content:f}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:title",content:r}),a.a.createElement("meta",{property:"og:description",content:s}),a.a.createElement("meta",{property:"og:image",content:f}),a.a.createElement("meta",{property:"twitter:card",content:"summary"}),a.a.createElement("meta",{property:"twitter:image",content:f}),a.a.createElement("meta",{property:"twitter:creator",content:l.siteMetadata.social.twitter}),a.a.createElement("meta",{property:"twitter:title",content:r}),a.a.createElement("meta",{property:"twitter:description",content:s}),a.a.createElement("meta",{name:"color-scheme",content:"dark light"}))};u.defaultProps={lang:"en",meta:[],description:"",image:""},t.a=u},KuXs:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("lEVg");t.a=function(e){var t=e.children,n=e.isFullheight,r=void 0!==n&&n;return Object(o.c)((function(e){e.resize()})),a.a.createElement(o.b,{className:r?"fullheight-heroplane":"heroplane",vertexShader:"\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    // those are the mandatory attributes that the lib sets\n    attribute vec3 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix\n    uniform mat4 uMVMatrix;\n    uniform mat4 uPMatrix;\n\n    // our texture matrix uniform (this is the lib default name, but it could be changed)\n    uniform mat4 uTextureMatrix0;\n\n    // if you want to pass your vertex and texture coords to the fragment shader\n    varying vec3 vVertexPosition;\n    varying vec2 vTextureCoord;\n\n    void main() {\n    // get the vertex position from its attribute\n    vec3 vertexPosition = aVertexPosition;\n    // set its position based on projection and model view matrix\n    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n    // set the varying variables\n    // thanks to the texture matrix we will be able to calculate accurate texture coords\n    // so that our texture will always fit our plane without being distorted\n    vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;\n    vVertexPosition = vertexPosition;\n    }\n",fragmentShader:"\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    // get our varying variables\n    varying vec3 vVertexPosition;\n    varying vec2 vTextureCoord;\n\n    // the uniform we declared inside our javascript\n    uniform float uTime;\n\n    // our texture sampler (this is the lib default name, but it could be changed)\n    uniform sampler2D uSampler0;\n\n    void main() {\n    // get our texture coords\n    vec2 textureCoord = vTextureCoord;\n\n    // displace our pixels along both axis based on our time uniform and texture UVs\n    // this will create a kind of water surface effect\n    // try to comment a line or change the constants to see how it changes the effect\n    // reminder : textures coords are ranging from 0.0 to 1.0 on both axis\n    const float PI = 3.141592;\n\n    textureCoord.x += (\n        sin(textureCoord.x * 10.0 + ((uTime * (PI / 3.0)) * 0.031))\n        + sin(textureCoord.y * 10.0 + ((uTime * (PI / 2.489)) * 0.017))\n        ) * 0.0075;\n\n    textureCoord.y += (\n        sin(textureCoord.y * 20.0 + ((uTime * (PI / 2.023)) * 0.023))\n        + sin(textureCoord.x * 20.0 + ((uTime * (PI / 3.1254)) * 0.037))\n        ) * 0.0125;\n            \n    gl_FragColor = texture2D(uSampler0, textureCoord);\n    }\n",uniforms:{time:{name:"uTime",type:"1f",value:0}},watchScroll:!1,onRender:function(e){e.uniforms.time.value++},onReady:function(e){e.scale.x=1.05,e.scale.y=1.05}},t)}},QrDe:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".cls-1{fill:#fff;}")),r.createElement("g",{id:"Symbol",key:1},r.createElement("path",{id:"ARI",className:"cls-1",d:"M0,128A128,128,0,1,0,128,0,128,128,0,0,0,0,128Zm166,37.26a12.8,12.8,0,0,1,12.8,12.8v1.14A12.8,12.8,0,0,1,166,192h-1.14a12.8,12.8,0,0,1-12.8-12.8v-1.14a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8v-1.14a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v1.14A12.8,12.8,0,0,1,91.14,192H90a12.8,12.8,0,0,1-12.8-12.8v-1.14A12.8,12.8,0,0,1,90,165.26ZM166,128a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V140.8a12.8,12.8,0,0,1,12.8-12.8Zm-37.43-26.74a12.8,12.8,0,0,1,12.8,12.8v27.88a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V114.06a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v27.88a12.8,12.8,0,0,1-12.8,12.8H90a12.8,12.8,0,0,1-12.8-12.8V114.06A12.8,12.8,0,0,1,90,101.26ZM128.57,64a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V76.8A12.8,12.8,0,0,1,127.43,64Z"}))])}a.defaultProps={viewBox:"0 0 256 256"},e.exports=a,a.default=a},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),c=f(n("8+s/")),u=f(n("bmMU")),l=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,E,h,A=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),v=(m=A,h=E=function(e){function t(){return p(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=T(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(o.default.Component),E.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=m.peek,E.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},VTCk:function(e,t,n){var r=n("q1tI");function a(e){return"function"!=typeof matchMedia?null:matchMedia(e)}function o(e){return e?{media:e.media,matches:e.matches}:null}function i(e){var t=r.useState((function(){return o(a(e))})),n=t[1],i=r.useCallback((function(e){return n(o(e))}),[n]);return r.useEffect((function(){var t=a(e);return i(t),t.addListener(i),function(){return t.removeListener(i)}}),[i,e]),t[0]}e.exports={useMedia:i,useMediaPredicate:function(e){var t=i(e);return t&&t.matches||!1}}},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,s=r(t),f=r(n);if(s&&f){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=f)return!1;var T=t instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return t.getTime()==n.getTime();var d=t instanceof RegExp,m=n instanceof RegExp;if(d!=m)return!1;if(d&&m)return t.toString()==n.toString();var E=a(t);if((u=E.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,E[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=E[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"sg+I":function(e,t,n){},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),i=u(n("YVoz")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],l=u.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var l=o[u],s=(0,i.default)({},a[l],r[l]);a[l]=s}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,T=e.title,p=e.titleAttributes;M(c.TAG_NAMES.BODY,r),M(c.TAG_NAMES.HTML,a),P(T,p);var d={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,o),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,u),scriptTags:R(c.TAG_NAMES.SCRIPT,s),styleTags:R(c.TAG_NAMES.STYLE,f)},m={},E={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=d[e].oldTags)})),t&&t(),l(e,m,E)},_=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),M(c.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var f=o.indexOf(l);-1!==f&&o.splice(f,1)}for(var T=o.length-1;T>=0;T--)n.removeAttribute(o[T]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=O(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=w(n),o=_(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&y(S),e.defer?S=v((function(){g(e,(function(){S=null}))})):(g(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,f=e.title,T=void 0===f?"":f,p=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,a,r),link:C(c.TAG_NAMES.LINK,o,r),meta:C(c.TAG_NAMES.META,i,r),noscript:C(c.TAG_NAMES.NOSCRIPT,u,r),script:C(c.TAG_NAMES.SCRIPT,l,r),style:C(c.TAG_NAMES.STYLE,s,r),title:C(c.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=v,t.warn=b}).call(this,n("yLpj"))},yMzp:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".cls-1{fill:#242424;}")),r.createElement("g",{id:"Symbol",key:1},r.createElement("path",{id:"ARI",className:"cls-1",d:"M0,128A128,128,0,1,0,128,0,128,128,0,0,0,0,128Zm166,37.26a12.8,12.8,0,0,1,12.8,12.8v1.14A12.8,12.8,0,0,1,166,192h-1.14a12.8,12.8,0,0,1-12.8-12.8v-1.14a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8v-1.14a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v1.14A12.8,12.8,0,0,1,91.14,192H90a12.8,12.8,0,0,1-12.8-12.8v-1.14A12.8,12.8,0,0,1,90,165.26ZM166,128a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V140.8a12.8,12.8,0,0,1,12.8-12.8Zm-37.43-26.74a12.8,12.8,0,0,1,12.8,12.8v27.88a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V114.06a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v27.88a12.8,12.8,0,0,1-12.8,12.8H90a12.8,12.8,0,0,1-12.8-12.8V114.06A12.8,12.8,0,0,1,90,101.26ZM128.57,64a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V76.8A12.8,12.8,0,0,1,127.43,64Z"}))])}a.defaultProps={viewBox:"0 0 256 256"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=5ab70dd3b6ca162de984cbbccc8160d1acdf6f38-10f26ac29d45ff79bc13.js.map