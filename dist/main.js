(()=>{"use strict";var r={428:(r,t,e)=>{r.exports=e.p+"29cadd17846af30c0513.jpeg"}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var t=e.g.document;if(!r&&t&&(t.currentScript&&(r=t.currentScript.src),!r)){var n=t.getElementsByTagName("script");n.length&&(r=n[n.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),(()=>{var r=function(){return(r=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}).apply(this,arguments)};function t(r){return r.toLowerCase()}Object.create,Object.create;var n=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function i(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce((function(r,t){return r.replace(t,e)}),r)}var c,a=e(428);document.getElementById("title").innerHTML=(void 0===c&&(c={}),function(r,e){void 0===e&&(e={});for(var c=e.splitRegexp,a=void 0===c?n:c,s=e.stripRegexp,p=void 0===s?o:s,u=e.transform,l=void 0===u?t:u,f=e.delimiter,g=void 0===f?" ":f,d=i(i("This text requires a module to run",a,"$1\0$2"),p,"\0"),v=0,h=d.length;"\0"===d.charAt(v);)v++;for(;"\0"===d.charAt(h-1);)h--;return d.slice(v,h).split("\0").map(l).join(g)}(0,r({delimiter:"",transform:function(r,t){var e=r.charAt(0),n=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+n:""+e.toUpperCase()+n}},c)));const s=new Image;s.src=a,element.appendChild(s)})()})();