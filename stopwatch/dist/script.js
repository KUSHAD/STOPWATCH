var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let l=a?()=>window.performance.now():()=>Date.now(),c=a?t=>requestAnimationFrame(t):t;const u=new Set;let f,p=!1;function d(){u.forEach(t=>{t[0](l())||(u.delete(t),t[1]())}),(p=u.size>0)&&c(d)}function h(t){let n;return p||(p=!0,c(d)),{promise:new Promise(e=>{u.add(n=[t,e])}),abort(){u.delete(n)}}}function m(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function k(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function C(t,n){n=""+n,t.data!==n&&(t.data=n)}function _(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function E(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}let S,j=0,M={};function q(t,n,e,o,s,r,i,a=0){const l=16.666/o;let c="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*r(t);c+=100*t+`%{${i(o,1-o)}}\n`}const u=c+`100% {${i(e,1-e)}}\n}`,p=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${a}`;if(!M[p]){if(!f){const t=b("style");document.head.appendChild(t),f=t.sheet}M[p]=!0,f.insertRule(`@keyframes ${p} ${u}`,f.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${p} ${o}ms linear ${s}ms 1 both`,j+=1,p}function R(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--j&&c(()=>{if(j)return;let t=f.cssRules.length;for(;t--;)f.deleteRule(t);M={}})}function B(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:o}=n,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=o,function(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform;t.style.transform=`${s} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}(t,s)}}function O(t){S=t}function A(t){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_destroy.push(t)}const P=[],L=[],N=[],z=[],D=Promise.resolve();let T,F=!1;function I(t){N.push(t)}function G(){const t=new Set;do{for(;P.length;){const t=P.shift();O(t),H(t.$$)}for(;L.length;)L.pop()();for(let n=0;n<N.length;n+=1){const e=N[n];t.has(e)||(e(),t.add(e))}N.length=0}while(P.length);for(;z.length;)z.pop()();F=!1}function H(t){t.fragment&&(t.update(t.dirty),s(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(I))}function J(t,n,e){t.dispatchEvent(E(`${n?"intro":"outro"}${e}`))}const K=new Set;let Q;function U(t,n){t&&t.i&&(K.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(K.has(t))return;K.add(t),Q.c.push(()=>{K.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const W={duration:0};function X(e,o,s){let i,a,c=o(e,s),u=!1,f=0;function p(){i&&R(e,i)}function d(){const{delay:o=0,duration:s=300,easing:r=n,tick:d=t,css:m}=c||W;m&&(i=q(e,0,1,s,o,r,m,f++)),d(0,1);const g=l()+o,$=g+s;a&&a.abort(),u=!0,I(()=>J(e,!0,"start")),a=h(t=>{if(u){if(t>=$)return d(1,0),J(e,!0,"end"),p(),u=!1;if(t>=g){const n=r((t-g)/s);d(n,1-n)}}return u})}let m=!1;return{start(){m||(R(e),r(c)?(c=c(),(T||(T=Promise.resolve()).then(()=>{T=null}),T).then(d)):d())},invalidate(){m=!1},end(){u&&(p(),u=!1)}}}function Y(t,n){t.f(),function(t,n){t.d(1),n.delete(t.key)}(t,n)}function Z(t,n,o){const{fragment:i,on_mount:a,on_destroy:l,after_update:c}=t.$$;i.m(n,o),I(()=>{const n=a.map(e).filter(r);l?l.push(...n):s(n),t.$$.on_mount=[]}),c.forEach(I)}function tt(t,n){t.$$.fragment&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function nt(t,n){t.$$.dirty||(P.push(t),F||(F=!0,D.then(G)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function et(n,e,r,i,a,l){const c=S;O(n);const u=e.props||{},f=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:o(),dirty:null};let p=!1;var d;f.ctx=r?r(n,u,(t,e,o=e)=>(f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(f.bound[t]&&f.bound[t](o),p&&nt(n,t)),e)):u,f.update(),p=!0,s(f.before_update),f.fragment=i(f.ctx),e.target&&(e.hydrate?f.fragment.l((d=e.target,Array.from(d.childNodes))):f.fragment.c(),e.intro&&U(n.$$.fragment),Z(n,e.target,e.anchor),G()),O(c)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function st(t){return t>=10?t.toString():`0${t}`}function rt(t){var n;return`${st(Math.floor(t/1e3/60))}:${st(Math.floor(t/1e3)%60)}.${(n=Math.floor(t/100)).toString()[n.toString().length-1]}`}const it=[];function at(n,e=t){let o;const s=[];function r(t){if(i(n,t)&&(n=t,o)){const t=!it.length;for(let t=0;t<s.length;t+=1){const e=s[t];e[1](),it.push(e,n)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(i,a=t){const l=[i,a];return s.push(l),1===s.length&&(o=e(r)||t),i(n),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function lt(t){const n=t-1;return n*n*n+1}function ct(n){var e,o,s,r,i,a,l,c,u,f,p,d,h,b,w,k,E=rt(n.lapse)+"";return{c(){e=y("svg"),o=y("g"),s=y("circle"),r=y("use"),i=y("g"),a=y("g"),l=y("path"),u=y("g"),f=y("g"),p=y("path"),h=y("circle"),b=y("circle"),w=y("text"),k=v(E),x(s,"id","dial"),x(s,"cx","0"),x(s,"cy","0"),x(s,"r","42"),x(s,"fill","none"),x(s,"stroke","currentColor"),x(s,"stroke-width","5"),x(s,"stroke-dasharray","0.3 1.898"),x(r,"href","#dial"),x(r,"transform","scale(-1 1)"),x(l,"d","M -2.25 0 h 4.5 l -2.25 2.5 l -2.25 -2.5"),x(l,"fill","currentColor"),x(l,"stroke","currentColor"),x(l,"stroke-width","1"),x(l,"stroke-linejoin","round"),x(l,"stroke-linecap","round"),x(a,"transform","translate(0 -50)"),x(i,"transform",c="rotate("+n.rotation+")"),x(p,"d","M 0 -1 v -4.5"),x(p,"fill","none"),x(p,"stroke","currentColor"),x(p,"stroke-width","0.4"),x(p,"stroke-linejoin","round"),x(p,"stroke-linecap","round"),x(f,"transform",d="rotate("+60*n.rotation%360+")"),x(h,"r","7"),x(h,"fill","none"),x(h,"stroke","currentColor"),x(h,"stroke-width","0.4"),x(b,"r","1"),x(b,"fill","none"),x(b,"stroke","currentColor"),x(b,"stroke-width","0.4"),x(u,"transform","translate(0 20)"),x(w,"text-anchor","middle"),x(w,"fill","currentColor"),x(w,"dominant-baseline","middle"),x(w,"font-size","10"),_(w,"font-weight","300"),_(w,"letter-spacing","1px"),x(o,"transform","translate(50 50)"),x(e,"viewBox","0 0 100 100"),x(e,"width","300"),x(e,"height","300"),x(e,"class","svelte-1diivmn")},m(t,c){g(t,e,c),m(e,o),m(o,s),m(o,r),m(o,i),m(i,a),m(a,l),n.g1_binding(i),m(o,u),m(u,f),m(f,p),n.g2_binding(f),m(u,h),m(u,b),m(o,w),m(w,k)},p(t,n){t.rotation&&c!==(c="rotate("+n.rotation+")")&&x(i,"transform",c),t.rotation&&d!==(d="rotate("+60*n.rotation%360+")")&&x(f,"transform",d),t.lapse&&E!==(E=rt(n.lapse)+"")&&C(k,E)},i:t,o:t,d(t){t&&$(e),n.g1_binding(null),n.g2_binding(null)}}}function ut(t,n,e){let o,s,r,i,{lapse:a=0}=n;return t.$set=(t=>{"lapse"in t&&e("lapse",a=t.lapse)}),t.$$.update=((t={lapse:1,minutes:1,seconds:1,transitioned:1})=>{t.lapse&&e("rotation",i=a/1e3/60*360%360),(t.lapse||t.minutes||t.seconds)&&!a&&s&&o&&(e("minutes",s.style.transition="transform 0.2s ease-in-out",s),e("seconds",o.style.transition="transform 0.2s ease-in-out",o),e("transitioned",r=!1)),(t.lapse||t.transitioned)&&a&&!r&&(e("minutes",s.style.transition="none",s),e("seconds",o.style.transition="none",o),e("transitioned",r=!0))}),{lapse:a,seconds:o,minutes:s,rotation:i,g1_binding:function(t){L[t?"unshift":"push"](()=>{e("minutes",s=t)})},g2_binding:function(t){L[t?"unshift":"push"](()=>{e("seconds",o=t)})}}}class ft extends ot{constructor(t){super(),et(this,t,ut,ct,i,["lapse"])}}function pt(t,{delay:n=0,duration:e=400,easing:o=lt,x:s=0,y:r=0,opacity:i=0}){const a=getComputedStyle(t),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-i);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*s}px, ${(1-t)*r}px);\n\t\t\topacity: ${l-u*n}`}}function dt(t,n,e){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform,i=n.from.left-n.to.left,a=n.from.top-n.to.top,l=Math.sqrt(i*i+a*a),{delay:c=0,duration:u=(t=>120*Math.sqrt(t)),easing:f=lt}=e;return{delay:c,duration:r(u)?u(l):u,easing:f,css:(t,n)=>`transform: ${s} translate(${n*i}px, ${n*a}px);`}}function ht(t,n,e){const o=Object.create(t);return o.lap=n[e],o}function mt(e,o){var s,r,i,a,c,u,f,p,d,y,k,_,E,S,j,M=o.lap.number+"",O=rt(o.lap.total)+"",A=rt(o.lap.partial)+"",P=t;return{key:e,first:null,c(){s=b("li"),r=b("h2"),i=v("Lap "),a=b("sup"),c=v(M),u=w(),f=b("h3"),p=v(O),d=w(),y=b("h4"),k=v("+"),_=v(A),E=w(),x(a,"class","svelte-1intkjs"),x(r,"class","svelte-1intkjs"),x(f,"class","svelte-1intkjs"),x(y,"class","svelte-1intkjs"),x(s,"class","svelte-1intkjs"),this.first=s},m(t,n){g(t,s,n),m(s,r),m(r,i),m(r,a),m(a,c),m(s,u),m(s,f),m(f,p),m(s,d),m(s,y),m(y,k),m(y,_),m(s,E)},p(t,n){t.laps&&M!==(M=n.lap.number+"")&&C(c,M),t.laps&&O!==(O=rt(n.lap.total)+"")&&C(p,O),t.laps&&A!==(A=rt(n.lap.partial)+"")&&C(_,A)},r(){j=s.getBoundingClientRect()},f(){B(s),P()},a(){P(),P=function(e,o,s,r){if(!o)return t;const i=e.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:a=0,duration:c=300,easing:u=n,start:f=l()+a,end:p=f+c,tick:d=t,css:m}=s(e,{from:o,to:i},r);let g,$=!0,b=!1;function y(){m&&R(e,g),$=!1}return h(t=>{if(!b&&t>=f&&(b=!0),b&&t>=p&&(d(1,0),y()),!$)return!1;if(b){const n=0+1*u((t-f)/c);d(n,1-n)}return!0}),m&&(g=q(e,0,1,c,a,u,m)),a||(b=!0),d(0,1),y}(s,j,dt,{duration:350})},i(t){S||I(()=>{(S=X(s,pt,{y:-20,duration:300,delay:50})).start()})},o:t,d(t){t&&$(s)}}}function gt(n){var e,o=[],s=new Map;let r=n.laps;const i=t=>t.lap.total;for(let t=0;t<r.length;t+=1){let e=ht(n,r,t),a=i(e);s.set(a,o[t]=mt(a,e))}return{c(){e=b("ul");for(let t=0;t<o.length;t+=1)o[t].c();x(e,"class","svelte-1intkjs")},m(t,n){g(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,n){const r=n.laps;for(let t=0;t<o.length;t+=1)o[t].r();o=function(t,n,e,o,s,r,i,a,l,c,u,f){let p=t.length,d=r.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,b=new Map;for(h=d;h--;){const t=f(s,r,h),a=e(t);let l=i.get(a);l?o&&l.p(n,t):(l=c(a,t)).c(),$.set(a,g[h]=l),a in m&&b.set(a,Math.abs(h-m[a]))}const y=new Set,v=new Set;function w(t){U(t,1),t.m(a,u),i.set(t.key,t),u=t.first,d--}for(;p&&d;){const n=g[d-1],e=t[p-1],o=n.key,s=e.key;n===e?(u=n.first,p--,d--):$.has(s)?!i.has(o)||y.has(o)?w(n):v.has(s)?p--:b.get(o)>b.get(s)?(v.add(o),w(n)):(y.add(s),p--):(l(e,i),p--)}for(;p--;){const n=t[p];$.has(n.key)||l(n,i)}for(;d;)w(g[d-1]);return g}(o,t,i,1,n,r,s,e,Y,mt,null,ht);for(let t=0;t<o.length;t+=1)o[t].a()},i(t){for(let t=0;t<r.length;t+=1)U(o[t])},o:t,d(t){t&&$(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function $t(t,n,e){let{laps:o=[]}=n;return t.$set=(t=>{"laps"in t&&e("laps",o=t.laps)}),{laps:o}}class bt extends ot{constructor(t){super(),et(this,t,$t,gt,i,["laps"])}}function yt(t){var n,e;return{c(){(n=b("button")).textContent="Start",x(n,"class","svelte-ucwyqb"),e=k(n,"click",t.start)},m(t,e){g(t,n,e)},d(t){t&&$(n),e()}}}function vt(t){var n,e,o,r;return{c(){(n=b("button")).textContent="Reset",e=w(),(o=b("button")).textContent="Continue",x(n,"class","svelte-ucwyqb"),x(o,"class","svelte-ucwyqb"),r=[k(n,"click",t.stop),k(o,"click",t.start)]},m(t,s){g(t,n,s),g(t,e,s),g(t,o,s)},d(t){t&&($(n),$(e),$(o)),s(r)}}}function wt(t){var n,e,o,r;return{c(){(n=b("button")).textContent="Lap",e=w(),(o=b("button")).textContent="Pause",x(n,"class","svelte-ucwyqb"),x(o,"class","svelte-ucwyqb"),r=[k(n,"click",t.lap),k(o,"click",t.pause)]},m(t,s){g(t,n,s),g(t,e,s),g(t,o,s)},d(t){t&&($(n),$(e),$(o)),s(r)}}}function kt(n){var e;function o(t,n){return n.subscription?wt:n.lapsed?vt:yt}var s=o(0,n),r=s(n);return{c(){e=b("div"),r.c(),x(e,"class","controls svelte-ucwyqb")},m(t,n){g(t,e,n),r.m(e,null)},p(t,n){s!==(s=o(0,n))&&(r.d(1),(r=s(n))&&(r.c(),r.m(e,null)))},i:t,o:t,d(t){t&&$(e),r.d()}}}function xt(t,n,e){const o=function(){const t=S;return(n,e)=>{const o=t.$$.callbacks[n];if(o){const s=E(n,e);o.slice().forEach(n=>{n.call(t,s)})}}}();let{subscription:s,lapsed:r}=n;return t.$set=(t=>{"subscription"in t&&e("subscription",s=t.subscription),"lapsed"in t&&e("lapsed",r=t.lapsed)}),{start:function(){o("start")},stop:function(){o("stop")},pause:function(){o("pause")},lap:function(){o("lap")},subscription:s,lapsed:r}}class Ct extends ot{constructor(t){super(),et(this,t,xt,kt,i,["subscription","lapsed"])}}const _t={subscribe:at(0,function(t){const n=(new Date).getTime(),e=setInterval(()=>{const e=(new Date).getTime();t(e-n)},10);return function(){t(0),clearInterval(e)}}).subscribe};function Et(t){var n,e,o,s,r=new ft({props:{lapse:t.lapse}}),i=new bt({props:{laps:t.laps}}),a=new Ct({props:{subscription:t.subscription,lapsed:t.lapsed}});return a.$on("start",t.start),a.$on("stop",t.stop),a.$on("pause",t.pause),a.$on("lap",t.lap),{c(){n=b("div"),r.$$.fragment.c(),e=w(),i.$$.fragment.c(),o=w(),a.$$.fragment.c(),x(n,"class","stopwatch")},m(t,l){g(t,n,l),Z(r,n,null),m(n,e),Z(i,n,null),m(n,o),Z(a,n,null),s=!0},p(t,n){var e={};t.lapse&&(e.lapse=n.lapse),r.$set(e);var o={};t.laps&&(o.laps=n.laps),i.$set(o);var s={};t.subscription&&(s.subscription=n.subscription),t.lapsed&&(s.lapsed=n.lapsed),a.$set(s)},i(t){s||(U(r.$$.fragment,t),U(i.$$.fragment,t),U(a.$$.fragment,t),s=!0)},o(t){V(r.$$.fragment,t),V(i.$$.fragment,t),V(a.$$.fragment,t),s=!1},d(t){t&&$(n),tt(r),tt(i),tt(a)}}}function St(t,n,e){let o,s=0,r=0;function i(){o&&(o(),e("unsubscribe",o=null))}let a,l,c=[];return A(()=>{i()}),t.$$.update=((t={unsubscribe:1,lapse:1})=>{t.unsubscribe&&e("subscription",a=!!o),t.lapse&&e("lapsed",l=!!s)}),{lapse:s,start:function(){e("unsubscribe",o=_t.subscribe(t=>{e("lapse",s=t+r)}))},stop:function(){e("lapse",s=0),r=0,e("laps",c=[]),i()},pause:function(){r=s,i()},laps:c,lap:function(){const{length:t}=c,n=s,o=t>0?n-c[0].total:n;e("laps",c=[{number:t+1,total:n,partial:o},...c])},subscription:a,lapsed:l}}return new class extends ot{constructor(t){super(),et(this,t,St,Et,i,[])}}({target:document.body})}();