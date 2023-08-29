(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1484],{76489:function(e,t){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},n=t||{},a=e.split(";"),u=n.decode||o,c=0;c<a.length;c++){var s=a[c],l=s.indexOf("=");if(!(l<0)){var f=s.substring(0,l).trim();if(void 0==r[f]){var p=s.substring(l+1,s.length).trim();'"'===p[0]&&(p=p.slice(1,-1)),r[f]=i(p,u)}}}return r},t.serialize=function(e,t,o){var i=o||{},a=i.encode||r;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!n.test(e))throw new TypeError("argument name is invalid");var u=a(t);if(u&&!n.test(u))throw new TypeError("argument val is invalid");var c=e+"="+u;if(null!=i.maxAge){var s=i.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(s)}if(i.domain){if(!n.test(i.domain))throw new TypeError("option domain is invalid");c+="; Domain="+i.domain}if(i.path){if(!n.test(i.path))throw new TypeError("option path is invalid");c+="; Path="+i.path}if(i.expires){if("function"!==typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+i.expires.toUTCString()}i.httpOnly&&(c+="; HttpOnly");i.secure&&(c+="; Secure");if(i.sameSite){switch("string"===typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var o=decodeURIComponent,r=encodeURIComponent,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function i(e,t){try{return t(e)}catch(o){return e}}},47041:function(e,t,o){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)},n=this&&this.__rest||function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};Object.defineProperty(t,"__esModule",{value:!0}),t.checkCookies=t.hasCookie=t.removeCookies=t.deleteCookie=t.setCookies=t.setCookie=t.getCookie=t.getCookies=void 0;var i=o(76489),a=function(){return"undefined"!==typeof window},u=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(o){return e}};t.getCookies=function(e){var t;if(e&&(t=e.req),!a())return t&&t.cookies?t.cookies:t&&t.headers&&t.headers.cookie?(0,i.parse)(t.headers.cookie):{};for(var o={},r=document.cookie?document.cookie.split("; "):[],n=0,u=r.length;n<u;n++){var c=r[n].split("="),s=c.slice(1).join("=");o[c[0]]=s}return o};t.getCookie=function(e,o){var r,n=(0,t.getCookies)(o)[e];if(void 0!==n)return function(e){return"true"===e||"false"!==e&&("undefined"!==e?"null"===e?null:e:void 0)}((r=n)?r.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):r)};t.setCookie=function(e,t,o){var c,s,l;o&&(s=o.req,l=o.res,c=n(o,["req","res"]));var f=(0,i.serialize)(e,u(t),r({path:"/"},c));if(a())document.cookie=f;else if(l&&s){var p=l.getHeader("Set-Cookie");if(Array.isArray(p)||(p=p?[String(p)]:[]),l.setHeader("Set-Cookie",p.concat(f)),s&&s.cookies){var d=s.cookies;""===t?delete d[e]:d[e]=u(t)}if(s&&s.headers&&s.headers.cookie){d=(0,i.parse)(s.headers.cookie);""===t?delete d[e]:d[e]=u(t),s.headers.cookie=Object.entries(d).reduce((function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))}),"")}}};t.setCookies=function(e,o,r){return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."),(0,t.setCookie)(e,o,r)};t.deleteCookie=function(e,o){return(0,t.setCookie)(e,"",r(r({},o),{maxAge:-1}))};t.removeCookies=function(e,o){return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."),(0,t.deleteCookie)(e,o)};t.hasCookie=function(e,o){return!!e&&(0,t.getCookies)(o).hasOwnProperty(e)};t.checkCookies=function(e,o){return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."),(0,t.hasCookie)(e,o)}},71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(94941).Z;o(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(92648).Z,i=o(17273).Z,a=n(o(67294)),u=o(76273),c=o(22725),s=o(63462),l=o(21018),f=o(57190),p=o(71210),d=o(98684),y={};function v(e,t,o,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,r)).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;y[t+"%"+o+(n?"%"+n:"")]=!0}}var h=a.default.forwardRef((function(e,t){var o,n=e.href,h=e.as,m=e.children,b=e.prefetch,C=e.passHref,k=e.replace,g=e.shallow,w=e.scroll,O=e.locale,S=e.onClick,j=e.onMouseEnter,x=e.onTouchStart,_=e.legacyBehavior,E=void 0===_?!0!==Boolean(!1):_,P=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=m,!E||"string"!==typeof o&&"number"!==typeof o||(o=a.default.createElement("a",null,o));var A=!1!==b,L=a.default.useContext(s.RouterContext),R=a.default.useContext(l.AppRouterContext);R&&(L=R);var T,M=a.default.useMemo((function(){var e=r(u.resolveHref(L,n,!0),2),t=e[0],o=e[1];return{href:t,as:h?u.resolveHref(L,h):o||t}}),[L,n,h]),U=M.href,Z=M.as,I=a.default.useRef(U),N=a.default.useRef(Z);E&&(T=a.default.Children.only(o));var D=E?T&&"object"===typeof T&&T.ref:t,H=r(f.useIntersection({rootMargin:"200px"}),3),B=H[0],K=H[1],q=H[2],W=a.default.useCallback((function(e){N.current===Z&&I.current===U||(q(),N.current=Z,I.current=U),B(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[Z,D,U,q,B]);a.default.useEffect((function(){var e=K&&A&&u.isLocalURL(U),t="undefined"!==typeof O?O:L&&L.locale,o=y[U+"%"+Z+(t?"%"+t:"")];e&&!o&&v(L,U,Z,{locale:t})}),[Z,U,K,O,A,L]);var z={ref:W,onClick:function(e){E||"function"!==typeof S||S(e),E&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,o,r,n,i,c,s,l,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(o)){e.preventDefault();var p=function(){"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:i,locale:s,scroll:c}):t[n?"replace":"push"](o,{forceOptimisticNavigation:!f})};l?a.default.startTransition(p):p()}}(e,L,U,Z,k,g,w,O,Boolean(R),A)},onMouseEnter:function(e){E||"function"!==typeof j||j(e),E&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!A&&R||u.isLocalURL(U)&&v(L,U,Z,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof x||x(e),E&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!A&&R||u.isLocalURL(U)&&v(L,U,Z,{priority:!0})}};if(!E||C||"a"===T.type&&!("href"in T.props)){var G="undefined"!==typeof O?O:L&&L.locale,$=L&&L.isLocaleDomain&&p.getDomainLocale(Z,G,L.locales,L.domainLocales);z.href=$||d.addBasePath(c.addLocale(Z,G,L&&L.defaultLocale))}return E?a.default.cloneElement(T,z):a.default.createElement("a",Object.assign({},P,z),o)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,o(92648).Z)(o(67294)),n=r.default.createContext(null);t.AppRouterContext=n;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var u=r.default.createContext(null);t.TemplateContext=u},41664:function(e,t,o){e.exports=o(48418)},20943:function(e,t,o){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}o.d(t,{Z:function(){return r}})},13375:function(e,t,o){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}o.d(t,{Z:function(){return r}})},69396:function(e,t,o){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}o.d(t,{Z:function(){return r}})},828:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var r=o(13375);var n=o(91566);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var r=o(20943);function n(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?(0,r.Z)(e,t):void 0}}}}]);