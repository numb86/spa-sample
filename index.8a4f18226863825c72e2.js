/*!

 */
!function(e){function t(t){for(var r,o,u=t[0],c=t[1],p=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);f.length;)f.shift()();return l.push.apply(l,p||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},l=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/spa-sample/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var i=c;l.push([32,1]),n()}({32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(15),o=n.n(l),u=n(17),c=n(10),p=n(5);const i=()=>a.a.createElement(a.a.Fragment,null,"This is ",a.a.createElement("b",null,"home")," page."),s=()=>a.a.createElement(a.a.Fragment,null,"This is ",a.a.createElement("b",null,"about")," page."),f=u.a`
  body {
    background-color: #eee;
  }
`;o.a.render(a.a.createElement(()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(c.a,null,a.a.createElement("h1",null,"Hello SPA!"),a.a.createElement("nav",null,a.a.createElement(c.b,{to:"/spa-sample/"},"to home")," ",a.a.createElement(c.b,{to:"/spa-sample/about"},"to about")),a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/spa-sample/"},a.a.createElement(i,null)),a.a.createElement(p.a,{path:"/spa-sample/about"},a.a.createElement(s,null))))),null),document.querySelector("#app"))}});