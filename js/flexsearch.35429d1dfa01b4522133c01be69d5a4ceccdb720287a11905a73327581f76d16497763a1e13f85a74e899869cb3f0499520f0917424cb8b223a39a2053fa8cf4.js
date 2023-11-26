(()=>{var ie=Object.create;var te=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var he=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty;var ue=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var ae=(e,n,s,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of re(n))!le.call(e,o)&&o!==s&&te(e,o,{get:()=>n[o],enumerable:!(i=oe(n,o))||i.enumerable});return e};var ce=(e,n,s)=>(s=e!=null?ie(he(e)):{},ae(n||!e||!e.__esModule?te(s,"default",{value:e,enumerable:!0}):s,e));var ne=ue((exports,module)=>{(function _f(self){"use strict";try{module&&(self=module)}catch(e){}self._factory=_f;var t;function u(e){return typeof e!="undefined"?e:!0}function aa(e){let n=Array(e);for(let s=0;s<e;s++)n[s]=v();return n}function v(){return Object.create(null)}function ba(e,n){return n.length-e.length}function x(e){return typeof e=="string"}function C(e){return typeof e=="object"}function D(e){return typeof e=="function"}function ca(e,n){var s=da;if(e&&(n&&(e=E(e,n)),this.H&&(e=E(e,this.H)),this.J&&1<e.length&&(e=E(e,this.J)),s||s==="")){if(e=e.split(s),this.filter){n=this.filter,s=e.length;let i=[];for(let o=0,r=0;o<s;o++){let h=e[o];h&&!n[h]&&(i[r++]=h)}e=i}return e}return e}let da=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ea=/[\u0300-\u036f]/g;function fa(e,n){let s=Object.keys(e),i=s.length,o=[],r="",h=0;for(let l=0,f,g;l<i;l++)f=s[l],(g=e[f])?(o[h++]=F(n?"(?!\\b)"+f+"(\\b|_)":f),o[h++]=g):r+=(r?"|":"")+f;return r&&(o[h++]=F(n?"(?!\\b)("+r+")(\\b|_)":"("+r+")"),o[h]=""),o}function E(e,n){for(let s=0,i=n.length;s<i&&(e=e.replace(n[s],n[s+1]),e);s+=2);return e}function F(e){return new RegExp(e,"g")}function ha(e){let n="",s="";for(let i=0,o=e.length,r;i<o;i++)(r=e[i])!==s&&(n+=s=r);return n}var ja={encode:ia,F:!1,G:""};function ia(e){return ca.call(this,(""+e).toLowerCase(),!1)}let ka={},G={};function la(e){I(e,"add"),I(e,"append"),I(e,"search"),I(e,"update"),I(e,"remove")}function I(e,n){e[n+"Async"]=function(){let s=this,i=arguments;var o=i[i.length-1];let r;return D(o)&&(r=o,delete i[i.length-1]),o=new Promise(function(h){setTimeout(function(){s.async=!0;let l=s[n].apply(s,i);s.async=!1,h(l)})}),r?(o.then(r),this):o}}function ma(e,n,s,i){let o=e.length,r=[],h,l,f=0;i&&(i=[]);for(let g=o-1;0<=g;g--){let m=e[g],A=m.length,w=v(),k=!h;for(let p=0;p<A;p++){let y=m[p],_=y.length;if(_)for(let j=0,R,q;j<_;j++)if(q=y[j],h){if(h[q]){if(!g){if(s)s--;else if(r[f++]=q,f===n)return r}(g||i)&&(w[q]=1),k=!0}if(i&&(R=(l[q]||0)+1,l[q]=R,R<o)){let H=i[R-2]||(i[R-2]=[]);H[H.length]=q}}else w[q]=1}if(i)h||(l=w);else if(!k)return[];h=w}if(i)for(let g=i.length-1,m,A;0<=g;g--){m=i[g],A=m.length;for(let w=0,k;w<A;w++)if(k=m[w],!h[k]){if(s)s--;else if(r[f++]=k,f===n)return r;h[k]=1}}return r}function na(e,n){let s=v(),i=v(),o=[];for(let r=0;r<e.length;r++)s[e[r]]=1;for(let r=0,h;r<n.length;r++){h=n[r];for(let l=0,f;l<h.length;l++)f=h[l],s[f]&&!i[f]&&(i[f]=1,o[o.length]=f)}return o}function J(e){this.l=e!==!0&&e,this.cache=v(),this.h=[]}function oa(e,n,s){C(e)&&(e=e.query);let i=this.cache.get(e);return i||(i=this.search(e,n,s),this.cache.set(e,i)),i}J.prototype.set=function(e,n){if(!this.cache[e]){var s=this.h.length;for(s===this.l?delete this.cache[this.h[s-1]]:s++,--s;0<s;s--)this.h[s]=this.h[s-1];this.h[0]=e}this.cache[e]=n},J.prototype.get=function(e){let n=this.cache[e];if(this.l&&n&&(e=this.h.indexOf(e))){let s=this.h[e-1];this.h[e-1]=this.h[e],this.h[e]=s}return n};let qa={memory:{charset:"latin:extra",D:3,B:4,m:!1},performance:{D:3,B:3,s:!1,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function ra(e,n,s,i,o,r,h){setTimeout(function(){let l=e(s?s+"."+i:i,JSON.stringify(h));l&&l.then?l.then(function(){n.export(e,n,s,o,r+1)}):n.export(e,n,s,o,r+1)})}function K(e,n){if(!(this instanceof K))return new K(e);var s;if(e){x(e)?e=qa[e]:(s=e.preset)&&(e=Object.assign({},s[s],e)),s=e.charset;var i=e.lang;x(s)&&(s.indexOf(":")===-1&&(s+=":default"),s=G[s]),x(i)&&(i=ka[i])}else e={};let o,r,h=e.context||{};if(this.encode=e.encode||s&&s.encode||ia,this.register=n||v(),this.D=o=e.resolution||9,this.G=n=s&&s.G||e.tokenize||"strict",this.depth=n==="strict"&&h.depth,this.l=u(h.bidirectional),this.s=r=u(e.optimize),this.m=u(e.fastupdate),this.B=e.minlength||1,this.C=e.boost,this.map=r?aa(o):v(),this.A=o=h.resolution||1,this.h=r?aa(o):v(),this.F=s&&s.F||e.rtl,this.H=(n=e.matcher||i&&i.H)&&fa(n,!1),this.J=(n=e.stemmer||i&&i.J)&&fa(n,!0),s=n=e.filter||i&&i.filter){s=n,i=v();for(let l=0,f=s.length;l<f;l++)i[s[l]]=1;s=i}this.filter=s,this.cache=(n=e.cache)&&new J(n)}t=K.prototype,t.append=function(e,n){return this.add(e,n,!0)},t.add=function(e,n,s,i){if(n&&(e||e===0)){if(!i&&!s&&this.register[e])return this.update(e,n);if(n=this.encode(n),i=n.length){let g=v(),m=v(),A=this.depth,w=this.D;for(let k=0;k<i;k++){let p=n[this.F?i-1-k:k];var o=p.length;if(p&&o>=this.B&&(A||!m[p])){var r=L(w,i,k),h="";switch(this.G){case"full":if(2<o){for(r=0;r<o;r++)for(var l=o;l>r;l--)if(l-r>=this.B){var f=L(w,i,k,o,r);h=p.substring(r,l),M(this,m,h,f,e,s)}break}case"reverse":if(1<o){for(l=o-1;0<l;l--)h=p[l]+h,h.length>=this.B&&M(this,m,h,L(w,i,k,o,l),e,s);h=""}case"forward":if(1<o){for(l=0;l<o;l++)h+=p[l],h.length>=this.B&&M(this,m,h,r,e,s);break}default:if(this.C&&(r=Math.min(r/this.C(n,p,k)|0,w-1)),M(this,m,p,r,e,s),A&&1<i&&k<i-1){for(o=v(),h=this.A,r=p,l=Math.min(A+1,i-k),o[r]=1,f=1;f<l;f++)if((p=n[this.F?i-1-k-f:k+f])&&p.length>=this.B&&!o[p]){o[p]=1;let y=this.l&&p>r;M(this,g,y?r:p,L(h+(i/2>h?0:1),i,k,l-1,f-1),e,s,y?p:r)}}}}}this.m||(this.register[e]=1)}}return this};function L(e,n,s,i,o){return s&&1<e?n+(i||0)<=e?s+(o||0):(e-1)/(n+(i||0))*(s+(o||0))+1|0:0}function M(e,n,s,i,o,r,h){let l=h?e.h:e.map;(!n[s]||h&&!n[s][h])&&(e.s&&(l=l[i]),h?(n=n[s]||(n[s]=v()),n[h]=1,l=l[h]||(l[h]=v())):n[s]=1,l=l[s]||(l[s]=[]),e.s||(l=l[i]||(l[i]=[])),r&&l.includes(o)||(l[l.length]=o,e.m&&(e=e.register[o]||(e.register[o]=[]),e[e.length]=l)))}t.search=function(e,n,s){s||(!n&&C(e)?(s=e,e=s.query):C(n)&&(s=n));let i=[],o,r,h=0;if(s){e=s.query||e,n=s.limit,h=s.offset||0;var l=s.context;r=s.suggest}if(e&&(e=this.encode(""+e),o=e.length,1<o)){s=v();var f=[];for(let m=0,A=0,w;m<o;m++)if((w=e[m])&&w.length>=this.B&&!s[w])if(this.s||r||this.map[w])f[A++]=w,s[w]=1;else return i;e=f,o=e.length}if(!o)return i;n||(n=100),l=this.depth&&1<o&&l!==!1,s=0;let g;l?(g=e[0],s=1):1<o&&e.sort(ba);for(let m,A;s<o;s++){if(A=e[s],l?(m=sa(this,i,r,n,h,o===2,A,g),r&&m===!1&&i.length||(g=A)):m=sa(this,i,r,n,h,o===1,A),m)return m;if(r&&s===o-1){if(f=i.length,!f){if(l){l=0,s=-1;continue}return i}if(f===1)return ta(i[0],n,h)}}return ma(i,n,h,r)};function sa(e,n,s,i,o,r,h,l){let f=[],g=l?e.h:e.map;if(e.s||(g=ua(g,h,l,e.l)),g){let m=0,A=Math.min(g.length,l?e.A:e.D);for(let w=0,k=0,p,y;w<A&&!((p=g[w])&&(e.s&&(p=ua(p,h,l,e.l)),o&&p&&r&&(y=p.length,y<=o?(o-=y,p=null):(p=p.slice(o),o=0)),p&&(f[m++]=p,r&&(k+=p.length,k>=i))));w++);if(m){if(r)return ta(f,i,0);n[n.length]=f;return}}return!s&&f}function ta(e,n,s){return e=e.length===1?e[0]:[].concat.apply([],e),s||e.length>n?e.slice(s,s+n):e}function ua(e,n,s,i){return s?(i=i&&n>s,e=(e=e[i?n:s])&&e[i?s:n]):e=e[n],e}t.contain=function(e){return!!this.register[e]},t.update=function(e,n){return this.remove(e).add(e,n)},t.remove=function(e,n){let s=this.register[e];if(s){if(this.m)for(let i=0,o;i<s.length;i++)o=s[i],o.splice(o.indexOf(e),1);else N(this.map,e,this.D,this.s),this.depth&&N(this.h,e,this.A,this.s);if(n||delete this.register[e],this.cache){n=this.cache;for(let i=0,o,r;i<n.h.length;i++)r=n.h[i],o=n.cache[r],o.includes(e)&&(n.h.splice(i--,1),delete n.cache[r])}}return this};function N(e,n,s,i,o){let r=0;if(e.constructor===Array)if(o)n=e.indexOf(n),n!==-1?1<e.length&&(e.splice(n,1),r++):r++;else{o=Math.min(e.length,s);for(let h=0,l;h<o;h++)(l=e[h])&&(r=N(l,n,s,i,o),i||r||delete e[h])}else for(let h in e)(r=N(e[h],n,s,i,o))||delete e[h];return r}t.searchCache=oa,t.export=function(e,n,s,i,o){let r,h;switch(o||(o=0)){case 0:if(r="reg",this.m){h=v();for(let l in this.register)h[l]=1}else h=this.register;break;case 1:r="cfg",h={doc:0,opt:this.s?1:0};break;case 2:r="map",h=this.map;break;case 3:r="ctx",h=this.h;break;default:return}return ra(e,n||this,s,r,i,o,h),!0},t.import=function(e,n){if(n)switch(x(n)&&(n=JSON.parse(n)),e){case"cfg":this.s=!!n.opt;break;case"reg":this.m=!1,this.register=n;break;case"map":this.map=n;break;case"ctx":this.h=n}},la(K.prototype);function va(e){e=e.data;var n=self._index;let s=e.args;var i=e.task;switch(i){case"init":i=e.options||{},e=e.factory,n=i.encode,i.cache=!1,n&&n.indexOf("function")===0&&(i.encode=Function("return "+n)()),e?(Function("return "+e)()(self),self._index=new self.FlexSearch.Index(i),delete self.FlexSearch):self._index=new K(i);break;default:e=e.id,n=n[i].apply(n,s),postMessage(i==="search"?{id:e,msg:n}:{id:e})}}let wa=0;function O(e){if(!(this instanceof O))return new O(e);var n;e?D(n=e.encode)&&(e.encode=n.toString()):e={},(n=(self||window)._factory)&&(n=n.toString());let s=typeof window=="undefined"&&self.exports,i=this;this.o=xa(n,s,e.worker),this.h=v(),this.o&&(s?this.o.on("message",function(o){i.h[o.id](o.msg),delete i.h[o.id]}):this.o.onmessage=function(o){o=o.data,i.h[o.id](o.msg),delete i.h[o.id]},this.o.postMessage({task:"init",factory:n,options:e}))}P("add"),P("append"),P("search"),P("update"),P("remove");function P(e){O.prototype[e]=O.prototype[e+"Async"]=function(){let n=this,s=[].slice.call(arguments);var i=s[s.length-1];let o;return D(i)&&(o=i,s.splice(s.length-1,1)),i=new Promise(function(r){setTimeout(function(){n.h[++wa]=r,n.o.postMessage({task:e,id:wa,args:s})})}),o?(i.then(o),this):i}}function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d}function Q(e){if(!(this instanceof Q))return new Q(e);var n=e.document||e.doc||e,s;this.K=[],this.h=[],this.A=[],this.register=v(),this.key=(s=n.key||n.id)&&S(s,this.A)||"id",this.m=u(e.fastupdate),this.C=(s=n.store)&&s!==!0&&[],this.store=s&&v(),this.I=(s=n.tag)&&S(s,this.A),this.l=s&&v(),this.cache=(s=e.cache)&&new J(s),e.cache=!1,this.o=e.worker,this.async=!1,s=v();let i=n.index||n.field||n;x(i)&&(i=[i]);for(let o=0,r,h;o<i.length;o++)r=i[o],x(r)||(h=r,r=r.field),h=C(h)?Object.assign({},e,h):e,this.o&&(s[r]=new O(h),s[r].o||(this.o=!1)),this.o||(s[r]=new K(h,this.register)),this.K[o]=S(r,this.A),this.h[o]=r;if(this.C)for(e=n.store,x(e)&&(e=[e]),n=0;n<e.length;n++)this.C[n]=S(e[n],this.A);this.index=s}function S(e,n){let s=e.split(":"),i=0;for(let o=0;o<s.length;o++)e=s[o],0<=e.indexOf("[]")&&(e=e.substring(0,e.length-2))&&(n[i]=!0),e&&(s[i++]=e);return i<s.length&&(s.length=i),1<i?s:s[0]}function T(e,n){if(x(n))e=e[n];else for(let s=0;e&&s<n.length;s++)e=e[n[s]];return e}function U(e,n,s,i,o){if(e=e[o],i===s.length-1)n[o]=e;else if(e)if(e.constructor===Array)for(n=n[o]=Array(e.length),o=0;o<e.length;o++)U(e,n,s,i,o);else n=n[o]||(n[o]=v()),o=s[++i],U(e,n,s,i,o)}function V(e,n,s,i,o,r,h,l){if(e=e[h])if(i===n.length-1){if(e.constructor===Array){if(s[i]){for(n=0;n<e.length;n++)o.add(r,e[n],!0,!0);return}e=e.join(" ")}o.add(r,e,l,!0)}else if(e.constructor===Array)for(h=0;h<e.length;h++)V(e,n,s,i,o,r,h,l);else h=n[++i],V(e,n,s,i,o,r,h,l)}t=Q.prototype,t.add=function(e,n,s){if(C(e)&&(n=e,e=T(n,this.key)),n&&(e||e===0)){if(!s&&this.register[e])return this.update(e,n);for(let i=0,o,r;i<this.h.length;i++)r=this.h[i],o=this.K[i],x(o)&&(o=[o]),V(n,o,this.A,0,this.index[r],e,o[0],s);if(this.I){let i=T(n,this.I),o=v();x(i)&&(i=[i]);for(let r=0,h,l;r<i.length;r++)if(h=i[r],!o[h]&&(o[h]=1,l=this.l[h]||(this.l[h]=[]),!s||!l.includes(e))&&(l[l.length]=e,this.m)){let f=this.register[e]||(this.register[e]=[]);f[f.length]=l}}if(this.store&&(!s||!this.store[e])){let i;if(this.C){i=v();for(let o=0,r;o<this.C.length;o++)r=this.C[o],x(r)?i[r]=n[r]:U(n,i,r,0,r[0])}this.store[e]=i||n}}return this},t.append=function(e,n){return this.add(e,n,!0)},t.update=function(e,n){return this.remove(e).add(e,n)},t.remove=function(e){if(C(e)&&(e=T(e,this.key)),this.register[e]){for(var n=0;n<this.h.length&&(this.index[this.h[n]].remove(e,!this.o),!this.m);n++);if(this.I&&!this.m)for(let s in this.l){n=this.l[s];let i=n.indexOf(e);i!==-1&&(1<n.length?n.splice(i,1):delete this.l[s])}this.store&&delete this.store[e],delete this.register[e]}return this},t.search=function(e,n,s,i){s||(!n&&C(e)?(s=e,e=""):C(n)&&(s=n,n=0));let o=[],r=[],h,l,f,g,m,A,w=0;if(s)if(s.constructor===Array)f=s,s=null;else{if(e=s.query||e,f=(h=s.pluck)||s.index||s.field,g=s.tag,l=this.store&&s.enrich,m=s.bool==="and",n=s.limit||n||100,A=s.offset||0,g&&(x(g)&&(g=[g]),!e)){for(let p=0,y;p<g.length;p++)(y=ya.call(this,g[p],n,A,l))&&(o[o.length]=y,w++);return w?o:[]}x(f)&&(f=[f])}f||(f=this.h),m=m&&(1<f.length||g&&1<g.length);let k=!i&&(this.o||this.async)&&[];for(let p=0,y,_,j;p<f.length;p++){let R;if(_=f[p],x(_)||(R=_,_=R.field,e=R.query||e,n=R.limit||n),k)k[p]=this.index[_].searchAsync(e,n,R||s);else{if(i?y=i[p]:y=this.index[_].search(e,n,R||s),j=y&&y.length,g&&j){let q=[],H=0;m&&(q[0]=[y]);for(let X=0,ee,z;X<g.length;X++)ee=g[X],(j=(z=this.l[ee])&&z.length)&&(H++,q[q.length]=m?[z]:z);H&&(y=m?ma(q,n||100,A||0):na(y,q),j=y.length)}if(j)r[w]=_,o[w++]=y;else if(m)return[]}}if(k){let p=this;return new Promise(function(y){Promise.all(k).then(function(_){y(p.search(e,n,s,_))})})}if(!w)return[];if(h&&(!l||!this.store))return o[0];for(let p=0,y;p<r.length;p++){if(y=o[p],y.length&&l&&(y=za.call(this,y)),h)return y;o[p]={field:r[p],result:y}}return o};function ya(e,n,s,i){let o=this.l[e],r=o&&o.length-s;if(r&&0<r)return(r>n||s)&&(o=o.slice(s,s+n)),i&&(o=za.call(this,o)),{tag:e,result:o}}function za(e){let n=Array(e.length);for(let s=0,i;s<e.length;s++)i=e[s],n[s]={id:i,doc:this.store[i]};return n}t.contain=function(e){return!!this.register[e]},t.get=function(e){return this.store[e]},t.set=function(e,n){return this.store[e]=n,this},t.searchCache=oa,t.export=function(e,n,s,i,o){if(o||(o=0),i||(i=0),i<this.h.length){let r=this.h[i],h=this.index[r];n=this,setTimeout(function(){h.export(e,n,o?r:"",i,o++)||(i++,o=1,n.export(e,n,r,i,o))})}else{let r,h;switch(o){case 1:r="tag",h=this.l;break;case 2:r="store",h=this.store;break;default:return}ra(e,this,s,r,i,o,h)}},t.import=function(e,n){if(n)switch(x(n)&&(n=JSON.parse(n)),e){case"tag":this.l=n;break;case"reg":this.m=!1,this.register=n;for(let i=0,o;i<this.h.length;i++)o=this.index[this.h[i]],o.register=n,o.m=!1;break;case"store":this.store=n;break;default:e=e.split(".");let s=e[0];e=e[1],s&&e&&this.index[s].import(e,n)}},la(Q.prototype);var Ba={encode:Aa,F:!1,G:""};let Ca=[F("[\xE0\xE1\xE2\xE3\xE4\xE5]"),"a",F("[\xE8\xE9\xEA\xEB]"),"e",F("[\xEC\xED\xEE\xEF]"),"i",F("[\xF2\xF3\xF4\xF5\xF6\u0151]"),"o",F("[\xF9\xFA\xFB\xFC\u0171]"),"u",F("[\xFD\u0177\xFF]"),"y",F("\xF1"),"n",F("[\xE7c]"),"k",F("\xDF"),"s",F(" & ")," and "];function Aa(e){var n=e=""+e;return n.normalize&&(n=n.normalize("NFD").replace(ea,"")),ca.call(this,n.toLowerCase(),!e.normalize&&Ca)}var Ea={encode:Da,F:!1,G:"strict"};let Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s",\u00DF:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(e){e=Aa.call(this,e).join(" ");let n=[];if(e){let s=e.split(Fa),i=s.length;for(let o=0,r,h=0;o<i;o++)if((e=s[o])&&(!this.filter||!this.filter[e])){r=e[0];let l=Ga[r]||r,f=l;for(let g=1;g<e.length;g++){r=e[g];let m=Ga[r]||r;m&&m!==f&&(l+=m,f=m)}n[h++]=l}}return n}var Ia={encode:Ha,F:!1,G:""};let Ja=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f",F("(?![aeo])h(?![aeo])"),"",F("(?!^[aeo])h(?!^[aeo])"),""];function Ha(e,n){return e&&(e=Da.call(this,e).join(" "),2<e.length&&(e=E(e,Ja)),n||(1<e.length&&(e=ha(e)),e&&(e=e.split(" ")))),e||[]}var La={encode:Ka,F:!1,G:""};let Ma=F("(?!\\b)[aeo]");function Ka(e){return e&&(e=Ha.call(this,e,!0),1<e.length&&(e=e.replace(Ma,"")),1<e.length&&(e=ha(e)),e&&(e=e.split(" "))),e||[]}G["latin:default"]=ja,G["latin:simple"]=Ba,G["latin:balance"]=Ea,G["latin:advanced"]=Ia,G["latin:extra"]=La;let W=self,Y,Z={Index:K,Document:Q,Worker:O,registerCharset:function(e,n){G[e]=n},registerLanguage:function(e,n){ka[e]=n}};(Y=W.define)&&Y.amd?Y([],function(){return Z}):W.exports?W.exports=Z:W.FlexSearch=Z})(exports)});var se=ce(ne());var $=document.getElementById("search__text"),B=document.getElementById("search__suggestions");$!==null&&document.addEventListener("keydown",e=>{e.ctrlKey&&e.key==="/"?(e.preventDefault(),$.focus()):e.key==="Escape"&&($.blur(),B.classList.add("search__suggestions--hidden"))});document.addEventListener("click",e=>{B.contains(e.target)||B.classList.add("search__suggestions--hidden")});document.addEventListener("keydown",e=>{if(B.classList.contains("search__suggestions--hidden"))return;let s=[...B.querySelectorAll("a")];if(s.length===0)return;let i=s.indexOf(document.activeElement);if(e.key==="ArrowDown"){e.preventDefault();let o=i+1<s.length?i+1:i;s[o].focus()}else e.key==="ArrowUp"&&(e.preventDefault(),nextIndex=i>0?i-1:0,s[nextIndex].focus())});(function(){let e=new se.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/blog/migrating-to-hugo/",title:"Migrating to Hugo",description:"Placeholder for post about moving from Publii to Hugo",content:`Placeholder for post about moving from Publii to Hugo
`}).add({id:1,href:"/projects/creating-nfs-shares/",title:"Creating NFS Shares",description:`Creating an NFS share# If you are trying to share between *nix systems, the Network File Servers (NFS) are really easy to set up. Note: If you are planning on sharing with Windows machines, SMB/Samba is a better option.
It should also be noted that NFS doesn&rsquo;t restrict, by default, to individual users. It limits to IPs and IP ranges&ndash;which makes it ideal for secure networks, but less-than-ideal for non-secure / public networks.`,content:`Creating an NFS share# If you are trying to share between *nix systems, the Network File Servers (NFS) are really easy to set up. Note: If you are planning on sharing with Windows machines, SMB/Samba is a better option.
It should also be noted that NFS doesn&rsquo;t restrict, by default, to individual users. It limits to IPs and IP ranges&ndash;which makes it ideal for secure networks, but less-than-ideal for non-secure / public networks.
It&rsquo;s pretty straight forward (on debian/apt bases distributions):
Installing the NFS server# sudo apt-get update &amp;&amp; sudo apt-get install nfs-kernel-server
Make the directory you would like to share. This directory can go anywhere but I think standard location is in the /mnt/ directory.
sudo mkdir -p /mnt/your-directory-to-share
This (below) changes the permissions to let all of the client machines access to the directory. You can change the permissions as well but for now I left it
sudo chown -R nobody:nogroup /mnt/your-directory-to-share
Give the clients read,write, and execute permissions as well:
sudo chmod -R 777 /mnt/your-directory-to-share
At this point your nfs-server is installed (not active) and your shared folder is setup. Now you need to grant access to the NFS share. To do that you have to edit the &rsquo;exports&rsquo; file&ndash;which is found at /etc/exports.
sudo vim /etc/exports
/mnt/your-directory-to-share &lt;ipaddress of the client&gt;(rw,sync,no_subtree_check)
If you want to add specific IPs you have to create a new line for each of them. However, if you wanted to do an entire subnet/ip range you can write something like this: 192.168.1.0/24 (which would share 192.168.1.1-255)
rw = read/write ; sync = means changes have to be written to disk before they are applied ; no_subtree_check = means what it says. Apparently, subtree checking causes more problems than its worth, so most people recommend using this flag to turn it off.
According the NFS man pages and tutorials I found you are supposed to run the following in this order:
sudo exportfs -a
sudo systemctl restart nfs-kernel-server
This through an error for me. I ran them a second time and it seems to work. I think you have to have the nfs-kernel-server running before you can do sudo exportfs -a. When you run the restart command it actually starts it for the first time, then you can follow the steps properly.
If it was up to me, I think it should be:
sudo systemctl start nfs-kernel-server
sudo exportfs -a
sudo systemctl restart nfs-kernel-server
Connect your client# So now you have the server serving up the shared drive. Now you need to connect to it.
On your laptop/pc/whatever is connecting to the NFS server you need to install the NFS client and mount the drive.
sudo apt-get install nfs-common
Make a directory/mount point for this. Again, this can be anywhere. If you wanted it to be in your home folder it can be, but we&rsquo;ll stick with /mnt/nfsshare
sudo mkdir -p /mnt/nfsshare
Then you mount it:
sudo mount &lt;ip-of-NFS-server&gt;:/mnt/your-directory-to-share /mnt/nfsshare
And thats it. When you navigate to /mnt/nfsshare on your client machine you will see all of the contents of the nfs drive. Which at this point would be empty.
If you want to mount it permanently, just edit your /etc/fstab file by adding a line at the end:
ip-of-NFS-server&gt;:/mnt/your-directory-to-share /mnt/nfsshare nfs defaults 0 0
This article was updated on October 17, 2021
`}).add({id:2,href:"/recipes/enchilada-casserole/",title:"Enchilada Casserole",description:`One of Mom\u2019s favorite recipes from Kris H. &amp; Robin K.
Ingredients# 2 cups Grated Cheddar Cheese
\xBD cup Finely Chopped Green Onion
2 cans Cream of Chicken Soup
1 cup Sour Cream
1 can Chopped Green Chilies*. these come in very small can in Mexican Food section of grocery store. DO NOT GET FIREROASTED The cans are almost identical but the taste is not.
\xBD tsp. Salt
2 cans Chicken, all white meat OR 4 Chicken Breasts, cooked1 and chopped`,content:`One of Mom\u2019s favorite recipes from Kris H. &amp; Robin K.
Ingredients# 2 cups Grated Cheddar Cheese
\xBD cup Finely Chopped Green Onion
2 cans Cream of Chicken Soup
1 cup Sour Cream
1 can Chopped Green Chilies*. these come in very small can in Mexican Food section of grocery store. DO NOT GET FIREROASTED The cans are almost identical but the taste is not.
\xBD tsp. Salt
2 cans Chicken, all white meat OR 4 Chicken Breasts, cooked1 and chopped
12 Corn (not flour) tortillas, hand shredded
Directions# Preheat oven to 350 degrees. Mix in a large sauce pan the chopped cooked chicken breasts, cream of chicken soup, sour cream, and green chilies. Stir until blended over low heat. Remove from heat and add cheddar cheese, green onion, and tortillas. Add salt and pepper to taste. Place all ingredients in a 9\u201D X 13\u201D casserole dish and top lightly with grated cheese. Bake for 20 to 30 minutes at 350 degrees until bubbling. Good served alone or with Tostitos.
cook raw chicken breasts by placing in a sauce pan, just cover with water, and bring to boil. Turn heat to low and simmer for 30 minutes to 1 hour until no pink in center. Remove chicken, cool, and chop into bite sized pieces.&#160;&#x21a9;&#xfe0e;
`}).add({id:3,href:"/recipes/cincinatti-chili/",title:"Cincinatti Chili",description:`Ingredients List# For the chili:
2 pounds ground beef (80:20 is good; 90:10 works as well and will obviously be less fatty) 1 6-ounce can tomato paste 4 cups water 1 (8-ounce) can tomato sauce 1 large onion, minced 6 cloves garlic, minced (pre-minced in the jar is fine) 3 tablespoons chili powder 1 teaspoon cumin 1 teaspoon cinnamon 3/4 teaspoon ground allspice 1/4 teaspoon ground cloves 1/2 teaspoon cayenne 2 teaspoons kosher salt 2 tablespoons Worcestershire sauce TIP: Measure all of your ingredients first.`,content:`Ingredients List# For the chili:
2 pounds ground beef (80:20 is good; 90:10 works as well and will obviously be less fatty) 1 6-ounce can tomato paste 4 cups water 1 (8-ounce) can tomato sauce 1 large onion, minced 6 cloves garlic, minced (pre-minced in the jar is fine) 3 tablespoons chili powder 1 teaspoon cumin 1 teaspoon cinnamon 3/4 teaspoon ground allspice 1/4 teaspoon ground cloves 1/2 teaspoon cayenne 2 teaspoons kosher salt 2 tablespoons Worcestershire sauce TIP: Measure all of your ingredients first. I usually set all of the spices on my left with a small bowl in front of me. As I measure and put each ingredient into the bowl, I move the spice bottle to the right side so I know I&rsquo;ve added it. It&rsquo;s really easy to forget which spices you&rsquo;ve measured out!
Directions# Cook the tomato paste: Heat a large, heavy-bottomed pot or Dutch oven over medium-high heat. Add the tomato paste to the dry pot and cook, constantly scraping the bottom with a wooden spoon or silicone spatula, until the tomato smells rich and toasty and you start to see browned (not burned) patches in the bottom of the pot. This should take 1 to 3 minutes.
Combine the ingredients in a pot: Remove the pot from heat and add the ground beef and water. Mix them together into a sludge. It will not look pretty, but press on. There&rsquo;s a method to this madness. Return to medium-high heat and bring to a simmer, stirring all the while, so the sludge breaks up into a mealy paste. Add all the remaining ingredients.
Simmer gently, uncovered, for 2 to 3 hours: Stir the chili often. You want the volume to reduce a bit. If it starts to lose too much water and is getting too thick, reduce the heat and cover with a lid&ndash;leaving just a bit for some steam to escape. It will be ready in an hour, but the longer you let it simmer the richer the flavor will be.
`}).add({id:4,href:"/blog/turkey-trot-2019/",title:"Turkey Trot 2019",description:`Turkey Trot 2k19# Date: November 28, 2019
The family decided to go to a Turkey Trot before we ate Thanksgiving dinner. I bet my niece $1 that I would run it in under 40 minutes. I got &lt; 33 minutes (unofficially\u2014the times aren&rsquo;t posted yet).
About 900 people signed up for this particular 5k!
The 2nd prize was a huge pie (and a $50 Dick&rsquo;s gift card, but you can&rsquo;t eat that so it&rsquo;s less important).`,content:`Turkey Trot 2k19# Date: November 28, 2019
The family decided to go to a Turkey Trot before we ate Thanksgiving dinner. I bet my niece $1 that I would run it in under 40 minutes. I got &lt; 33 minutes (unofficially\u2014the times aren&rsquo;t posted yet).
About 900 people signed up for this particular 5k!
The 2nd prize was a huge pie (and a $50 Dick&rsquo;s gift card, but you can&rsquo;t eat that so it&rsquo;s less important).
Disclaimer: This post was narrated by my chief editor\u2014 my niece.
This article was updated on August 12, 2020
`}),$.addEventListener("input",function(){let s=this.value,i=e.search(s,5,{enrich:!0}),o=new Map;for(let r of i.flatMap(h=>h.result))o.has(r.href)||o.set(r.doc.href,r.doc);if(B.innerHTML="",B.classList.remove("search__suggestions--hidden"),o.size===0&&s){let r=document.createElement("div");r.innerHTML=`No results for "<strong>${s}</strong>"`,r.classList.add("search__no-results"),B.appendChild(r);return}for(let[r,h]of o){let l=document.createElement("a");l.href=r,l.classList.add("search__suggestion-item"),B.appendChild(l);let f=document.createElement("div");f.textContent=h.title,f.classList.add("search__suggestion-title"),l.appendChild(f);let g=document.createElement("div");if(g.textContent=h.description,g.classList.add("search__suggestion-description"),l.appendChild(g),B.childElementCount===5)break}})})();})();
//! Source: https://github.com/h-enk/doks/blob/master/assets/js/index.js
/*! Source: https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3 */
//! Source: https://discourse.gohugo.io/t/range-length-or-last-element/3803/2
