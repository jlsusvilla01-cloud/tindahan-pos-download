(()=>{var wm=function(n){let e=[],t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Yb=function(n){let e=[],t=0,s=0;for(;t<n.length;){let i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){let r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){let r=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{let r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){let r=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,h=r>>2,p=(r&3)<<4|c>>4,m=(c&15)<<2|u>>6,E=u&63;l||(E=64,o||(m=64)),s.push(t[h],t[p],t[m],t[E])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yb(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){let r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let u=i<n.length?t[n.charAt(i)]:64;++i;let p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||u==null||p==null)throw new Gl;let m=r<<2|c>>4;if(s.push(m),u!==64){let E=c<<4&240|u>>2;if(s.push(E),p!==64){let R=u<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Gl=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Jb=function(n){let e=wm(n);return bm.encodeByteArray(e,!0)},zl=function(n){return Jb(n).replace(/\./g,"")},Wl=function(n){try{return bm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Xb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Zb=()=>Xb().__FIREBASE_DEFAULTS__,eE=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Wl(n[1]);return e&&JSON.parse(e)},Qo=()=>{try{return Zb()||eE()||tE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Em=n=>{var e,t;return(t=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]};var Kl=()=>{var n;return(n=Qo())===null||n===void 0?void 0:n.config},Ql=n=>{var e;return(e=Qo())===null||e===void 0?void 0:e[`_${n}`]};var Ko=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}};function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Im(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function nE(){var n;let e=(n=Qo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sm(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Am(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rm(){let n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Yl(){return!nE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yo(){try{return typeof indexedDB=="object"}catch{return!1}}function Cm(){return new Promise((n,e)=>{try{let t=!0,s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}var sE="FirebaseError",yt=class n extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=sE,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rn.prototype.create)}},rn=class{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){let s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?iE(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new yt(i,c,s)}};function iE(n,e){return n.replace(rE,(t,s)=>{let i=e[s];return i!=null?String(i):`<${s}?>`})}var rE=/\{\$([^}]+)}/g;function km(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ut(n,e){if(n===e)return!0;let t=Object.keys(n),s=Object.keys(e);for(let i of t){if(!s.includes(i))return!1;let r=n[i],o=e[i];if(_m(r)&&_m(o)){if(!Ut(r,o))return!1}else if(r!==o)return!1}for(let i of s)if(!t.includes(i))return!1;return!0}function _m(n){return n!==null&&typeof n=="object"}function Xs(n){let e=[];for(let[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zs(n){let e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){let[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ei(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Pm(n,e){let t=new Hl(n,e);return t.subscribe.bind(t)}var Hl=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");oE(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=jl),i.error===void 0&&(i.error=jl),i.complete===void 0&&(i.complete=jl);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function oE(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jl(){}var nC=4*60*60*1e3;function we(n){return n&&n._delegate?n._delegate:n}var Ct=class{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var ss="[DEFAULT]";var Jl=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let s=new Ko;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let s=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cE(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(let[t,s]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(let[r,o]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,t){var s;let i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);let o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let s=this.onInitCallbacks.get(t);if(s)for(let i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function aE(n){return n===ss?void 0:n}function cE(n){return n.instantiationMode==="EAGER"}var Jo=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Jl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var lE=[],re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));var uE={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},dE=re.INFO,hE={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},fE=(n,e,...t)=>{if(e<n.logLevel)return;let s=new Date().toISOString(),i=hE[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},An=class{constructor(e){this.name=e,this._logLevel=dE,this._logHandler=fE,this._userLogHandler=null,lE.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}};var pE=(n,e)=>e.some(t=>n instanceof t),Nm,Dm;function mE(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return Dm||(Dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Om=new WeakMap,Zl=new WeakMap,xm=new WeakMap,Xl=new WeakMap,tu=new WeakMap;function yE(n){let e=new Promise((t,s)=>{let i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Bt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Om.set(t,n)}).catch(()=>{}),tu.set(e,n),e}function vE(n){if(Zl.has(n))return;let e=new Promise((t,s)=>{let i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Zl.set(n,e)}var eu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Lm(n){eu=n(eu)}function _E(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let s=n.call(Xo(this),e,...t);return xm.set(s,e.sort?e.sort():[e]),Bt(s)}:gE().includes(n)?function(...e){return n.apply(Xo(this),e),Bt(Om.get(this))}:function(...e){return Bt(n.apply(Xo(this),e))}}function wE(n){return typeof n=="function"?_E(n):(n instanceof IDBTransaction&&vE(n),pE(n,mE())?new Proxy(n,eu):n)}function Bt(n){if(n instanceof IDBRequest)return yE(n);if(Xl.has(n))return Xl.get(n);let e=wE(n);return e!==n&&(Xl.set(n,e),tu.set(e,n)),e}var Xo=n=>tu.get(n);function Vm(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){let o=indexedDB.open(n,e),c=Bt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Bt(o.result),l.oldVersion,l.newVersion,Bt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}var bE=["get","getKey","getAll","getAllKeys","count"],EE=["put","add","delete","clear"],nu=new Map;function Mm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);let t=e.replace(/FromIndex$/,""),s=e!==t,i=EE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||bE.includes(t)))return;let r=async function(o,...c){let l=this.transaction(o,i?"readwrite":"readonly"),u=l.store;return s&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),i&&l.done]))[0]};return nu.set(e,r),r}Lm(n=>({...n,get:(e,t,s)=>Mm(e,t)||n.get(e,t,s),has:(e,t)=>!!Mm(e,t)||n.has(e,t)}));var iu=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(IE(t)){let s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}};function IE(n){let e=n.getComponent();return e?.type==="VERSION"}var ru="@firebase/app",$m="0.10.13";var on=new An("@firebase/app"),TE="@firebase/app-compat",SE="@firebase/analytics-compat",AE="@firebase/analytics",RE="@firebase/app-check-compat",CE="@firebase/app-check",kE="@firebase/auth",PE="@firebase/auth-compat",NE="@firebase/database",DE="@firebase/data-connect",OE="@firebase/database-compat",xE="@firebase/functions",LE="@firebase/functions-compat",ME="@firebase/installations",VE="@firebase/installations-compat",$E="@firebase/messaging",FE="@firebase/messaging-compat",UE="@firebase/performance",BE="@firebase/performance-compat",qE="@firebase/remote-config",jE="@firebase/remote-config-compat",GE="@firebase/storage",HE="@firebase/storage-compat",zE="@firebase/firestore",WE="@firebase/vertexai-preview",KE="@firebase/firestore-compat",QE="firebase",YE="10.14.1";var ou="[DEFAULT]",JE={[ru]:"fire-core",[TE]:"fire-core-compat",[AE]:"fire-analytics",[SE]:"fire-analytics-compat",[CE]:"fire-app-check",[RE]:"fire-app-check-compat",[kE]:"fire-auth",[PE]:"fire-auth-compat",[NE]:"fire-rtdb",[DE]:"fire-data-connect",[OE]:"fire-rtdb-compat",[xE]:"fire-fn",[LE]:"fire-fn-compat",[ME]:"fire-iid",[VE]:"fire-iid-compat",[$E]:"fire-fcm",[FE]:"fire-fcm-compat",[UE]:"fire-perf",[BE]:"fire-perf-compat",[qE]:"fire-rc",[jE]:"fire-rc-compat",[GE]:"fire-gcs",[HE]:"fire-gcs-compat",[zE]:"fire-fst",[KE]:"fire-fst-compat",[WE]:"fire-vertex","fire-js":"fire-js",[QE]:"fire-js-all"};var Zo=new Map,XE=new Map,au=new Map;function Fm(n,e){try{n.container.addComponent(e)}catch(t){on.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qt(n){let e=n.name;if(au.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,n);for(let t of Zo.values())Fm(t,n);for(let t of XE.values())Fm(t,n);return!0}function is(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vt(n){return n.settings!==void 0}var ZE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rn=new rn("app","Firebase",ZE);var cu=class{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}};var Cn=YE;function du(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let s=Object.assign({name:ou,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(t||(t=Kl()),!t)throw Rn.create("no-options");let r=Zo.get(i);if(r){if(Ut(t,r.options)&&Ut(s,r.config))return r;throw Rn.create("duplicate-app",{appName:i})}let o=new Jo(i);for(let l of au.values())o.addComponent(l);let c=new cu(t,s,o);return Zo.set(i,c),c}function fr(n=ou){let e=Zo.get(n);if(!e&&n===ou&&Kl())return du();if(!e)throw Rn.create("no-app",{appName:n});return e}function ft(n,e,t){var s;let i=(s=JE[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);let r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){let c=[`Unable to register library "${i}" with version "${e}":`];r&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(c.join(" "));return}qt(new Ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var eI="firebase-heartbeat-database",tI=1,hr="firebase-heartbeat-store",su=null;function jm(){return su||(su=Vm(eI,tI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rn.create("idb-open",{originalErrorMessage:n.message})})),su}async function nI(n){try{let t=(await jm()).transaction(hr),s=await t.objectStore(hr).get(Gm(n));return await t.done,s}catch(e){if(e instanceof yt)on.warn(e.message);else{let t=Rn.create("idb-get",{originalErrorMessage:e?.message});on.warn(t.message)}}}async function Um(n,e){try{let s=(await jm()).transaction(hr,"readwrite");await s.objectStore(hr).put(e,Gm(n)),await s.done}catch(t){if(t instanceof yt)on.warn(t.message);else{let s=Rn.create("idb-set",{originalErrorMessage:t?.message});on.warn(s.message)}}}function Gm(n){return`${n.name}!${n.options.appId}`}var sI=1024,iI=30*24*60*60*1e3,lu=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new uu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{let c=new Date(o.date).valueOf();return Date.now()-c<=iI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){on.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Bm(),{heartbeatsToSend:s,unsentEntries:i}=rI(this._heartbeatsCache.heartbeats),r=zl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return on.warn(t),""}}};function Bm(){return new Date().toISOString().substring(0,10)}function rI(n,e=sI){let t=[],s=n.slice();for(let i of n){let r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qm(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),qm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}var uu=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?Cm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await nI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Um(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Um(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function qm(n){return zl(JSON.stringify({version:2,heartbeats:n})).length}function oI(n){qt(new Ct("platform-logger",e=>new iu(e),"PRIVATE")),qt(new Ct("heartbeat",e=>new lu(e),"PRIVATE")),ft(ru,$m,n),ft(ru,$m,"esm2017"),ft("fire-js","")}oI("");var aI="firebase",cI="10.14.1";ft(aI,cI,"app");function ea(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function ag(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var cg=ag,lg=new rn("auth","Firebase",ag());var oa=new An("@firebase/auth");function lI(n,...e){oa.logLevel<=re.WARN&&oa.warn(`Auth (${Cn}): ${n}`,...e)}function na(n,...e){oa.logLevel<=re.ERROR&&oa.error(`Auth (${Cn}): ${n}`,...e)}function Lt(n,...e){throw Du(n,...e)}function Gt(n,...e){return Du(n,...e)}function ug(n,e,t){let s=Object.assign(Object.assign({},cg()),{[e]:t});return new rn("auth","Firebase",s).create(e,{appName:n.name})}function cn(n){return ug(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Du(n,...e){if(typeof n!="string"){let t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return lg.create(n,...e)}function Q(n,e,...t){if(!n)throw Du(e,...t)}function jt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw na(e),new Error(e)}function ln(n,e){n||jt(e)}function pu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function uI(){return Hm()==="http:"||Hm()==="https:"}function Hm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function dI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uI()||Sm()||"connection"in navigator)?navigator.onLine:!0}function hI(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var rs=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,ln(t>e,"Short delay should be less than long delay!"),this.isMobile=Im()||Am()}get(){return dI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Ou(n,e){ln(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var aa=class{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var fI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var pI=new rs(3e4,6e4);function De(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ge(n,e,t,s,i={}){return dg(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});let c=Xs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let u=Object.assign({method:e,headers:l},r);return Tm()||(u.referrerPolicy="no-referrer"),aa.fetch()(hg(n,n.config.apiHost,t,c),u)})}async function dg(n,e,t){n._canInitEmulator=!1;let s=Object.assign(Object.assign({},fI),e);try{let i=new mu(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let o=await r.json();if("needConfirmation"in o)throw pr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{let c=r.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw pr(n,"user-disabled",o);let h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ug(n,h,u);Lt(n,h)}}catch(i){if(i instanceof yt)throw i;Lt(n,"network-request-failed",{message:String(i)})}}async function Pn(n,e,t,s,i={}){let r=await Ge(n,e,t,s,i);return"mfaPendingCredential"in r&&Lt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function hg(n,e,t,s){let i=`${e}${t}?${s}`;return n.config.emulator?Ou(n.config,i):`${n.config.apiScheme}://${i}`}function mI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var mu=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"network-request-failed")),pI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function pr(n,e,t){let s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);let i=Gt(n,e,s);return i.customData._tokenResponse=t,i}function zm(n){return n!==void 0&&n.enterprise!==void 0}var gu=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function gI(n,e){return Ge(n,"GET","/v2/recaptchaConfig",De(n,e))}async function yI(n,e){return Ge(n,"POST","/v1/accounts:delete",e)}async function fg(n,e){return Ge(n,"POST","/v1/accounts:lookup",e)}function mr(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pg(n,e=!1){let t=we(n),s=await t.getIdToken(e),i=xu(s);Q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:mr(hu(i.auth_time)),issuedAtTime:mr(hu(i.iat)),expirationTime:mr(hu(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function hu(n){return Number(n)*1e3}function xu(n){let[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{let i=Wl(t);return i?JSON.parse(i):(na("Failed to decode base64 JWT payload"),null)}catch(i){return na("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Wm(n){let e=xu(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ni(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof yt&&vI(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function vI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var yu=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var yr=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ca(n){var e;let t=n.auth,s=await n.getIdToken(),i=await ni(n,fg(t,{idToken:s}));Q(i?.users.length,t,"internal-error");let r=i.users[0];n._notifyReloadListener(r);let o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?gg(r.providerUserInfo):[],c=_I(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!c?.length,h=l?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new yr(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function mg(n){let e=we(n);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _I(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function gg(n){return n.map(e=>{var{providerId:t}=e,s=ea(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}async function wI(n,e){let t=await dg(n,{},async()=>{let s=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=hg(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",aa.fetch()(o,{method:"POST",headers:c,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bI(n,e){return Ge(n,"POST","/v2/accounts:revokeToken",De(n,e))}var gr=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");let t=Wm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:s,refreshToken:i,expiresIn:r}=await wI(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){let{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new n;return s&&(Q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return jt("not implemented")}};function kn(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var si=class n{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=ea(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await ni(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pg(this,e)}reload(){return mg(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ca(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(cn(this.auth));let e=await this.getIdToken();return await ni(this,yI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,c,l,u,h;let p=(s=t.displayName)!==null&&s!==void 0?s:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,E=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(u=t.createdAt)!==null&&u!==void 0?u:void 0,F=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:V,emailVerified:H,isAnonymous:ee,providerData:W,stsTokenManager:w}=t;Q(V&&w,e,"internal-error");let _=gr.fromJSON(this.name,w);Q(typeof V=="string",e,"internal-error"),kn(p,e.name),kn(m,e.name),Q(typeof H=="boolean",e,"internal-error"),Q(typeof ee=="boolean",e,"internal-error"),kn(E,e.name),kn(R,e.name),kn(P,e.name),kn(S,e.name),kn(M,e.name),kn(F,e.name);let b=new n({uid:V,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:ee,photoURL:R,phoneNumber:E,tenantId:P,stsTokenManager:_,createdAt:M,lastLoginAt:F});return W&&Array.isArray(W)&&(b.providerData=W.map(A=>Object.assign({},A))),S&&(b._redirectEventId=S),b}static async _fromIdTokenResponse(e,t,s=!1){let i=new gr;i.updateFromServerResponse(t);let r=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ca(r),r}static async _fromGetAccountInfoResponse(e,t,s){let i=t.users[0];Q(i.localId!==void 0,"internal-error");let r=i.providerUserInfo!==void 0?gg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,c=new gr;c.updateFromIdToken(s);let l=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new yr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(l,u),l}};var Km=new Map;function an(n){ln(n instanceof Function,"Expected a class definition");let e=Km.get(n);return e?(ln(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Km.set(n,e),e)}var la=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};la.type="NONE";var vu=la;function sa(n,e,t){return`firebase:${n}:${e}:${t}`}var ua=class n{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;let{config:i,name:r}=this.auth;this.fullUserKey=sa(this.userKey,i.apiKey,r),this.fullPersistenceKey=sa("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new n(an(vu),e,s);let i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u),r=i[0]||an(vu),o=sa(s,e.config.apiKey,e.name),c=null;for(let u of t)try{let h=await u._get(o);if(h){let p=si._fromJSON(e,h);u!==r&&(c=p),r=u;break}}catch{}let l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new n(r,e,s):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new n(r,e,s))}};function Qm(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Eg(e))return"Blackberry";if(Ig(e))return"Webos";if(vg(e))return"Safari";if((e.includes("chrome/")||_g(e))&&!e.includes("edge/"))return"Chrome";if(bg(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function yg(n=Ce()){return/firefox\//i.test(n)}function vg(n=Ce()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _g(n=Ce()){return/crios\//i.test(n)}function wg(n=Ce()){return/iemobile/i.test(n)}function bg(n=Ce()){return/android/i.test(n)}function Eg(n=Ce()){return/blackberry/i.test(n)}function Ig(n=Ce()){return/webos/i.test(n)}function Lu(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function EI(n=Ce()){var e;return Lu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function II(){return Rm()&&document.documentMode===10}function Tg(n=Ce()){return Lu(n)||bg(n)||Ig(n)||Eg(n)||/windows phone/i.test(n)||wg(n)}function Sg(n,e=[]){let t;switch(n){case"Browser":t=Qm(Ce());break;case"Worker":t=`${Qm(Ce())}-${n}`;break;default:t=n}let s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cn}/${s}`}var _u=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let s=r=>new Promise((o,c)=>{try{let l=e(r);o(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}};async function TI(n,e={}){return Ge(n,"GET","/v2/passwordPolicy",De(n,e))}var SI=6,wu=class{constructor(e){var t,s,i,r;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:SI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}};var bu=class{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new da(this),this.idTokenSubscription=new da(this),this.beforeStateQueue=new _u(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=an(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ua.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await fg(this,{idToken:e}),s=await si._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vt(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}let s=await this.assertedPersistence.getCurrentUser(),i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&l?.user&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(cn(this));let t=e?we(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await TI(this),t=new wu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await bI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&an(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await ua.create(this,[an(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};let r=typeof t=="function"?t:t.next.bind(t),o=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{let l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&lI(`Error while retrieving App Check token: ${t.error}`),t?.token}};function un(n){return we(n)}var da=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pm(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AI(n){ka=n}function Ag(n){return ka.loadJS(n)}function RI(){return ka.recaptchaEnterpriseScript}function CI(){return ka.gapiScript}function Rg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var kI="recaptcha-enterprise",PI="NO_RECAPTCHA",Eu=class{constructor(e){this.type=kI,this.auth=un(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{gI(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let u=new gu(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function i(r,o,c){let l=window.grecaptcha;zm(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(PI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(c=>{if(!t&&zm(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=RI();l.length!==0&&(l+=c),Ag(l).then(()=>{i(c,r,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}};async function Ym(n,e,t,s=!1){let i=new Eu(n),r;try{r=await i.verify(t)}catch{r=await i.verify(t,!0)}let o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ha(n,e,t,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let r=await Ym(n,e,t,t==="getOobCode");return s(n,r)}else return s(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await Ym(n,e,t,t==="getOobCode");return s(n,o)}else return Promise.reject(r)})}function Cg(n,e){let t=is(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),r=t.getOptions();if(Ut(r,e??{}))return i;Lt(i,"already-initialized")}return t.initialize({options:e})}function NI(n,e){let t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(an);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function kg(n,e,t){let s=un(n);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");let i=!!t?.disableWarnings,r=Pg(e),{host:o,port:c}=DI(e),l=c===null?"":`:${c}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||OI()}function Pg(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function DI(n){let e=Pg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){let r=i[1];return{host:r,port:Jm(s.substr(r.length+1))}}else{let[r,o]=s.split(":");return{host:r,port:Jm(o)}}}function Jm(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function OI(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var os=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,t){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}};async function xI(n,e){return Ge(n,"POST","/v1/accounts:signUp",e)}async function LI(n,e){return Pn(n,"POST","/v1/accounts:signInWithPassword",De(n,e))}async function MI(n,e){return Ge(n,"POST","/v1/accounts:sendOobCode",De(n,e))}async function VI(n,e){return MI(n,e)}async function $I(n,e){return Pn(n,"POST","/v1/accounts:signInWithEmailLink",De(n,e))}async function FI(n,e){return Pn(n,"POST","/v1/accounts:signInWithEmailLink",De(n,e))}var vr=class n extends os{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new n(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ha(e,t,"signInWithPassword",LI);case"emailLink":return $I(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ha(e,s,"signUpPassword",xI);case"emailLink":return FI(e,{idToken:t,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function ti(n,e){return Pn(n,"POST","/v1/accounts:signInWithIdp",De(n,e))}var UI="http://localhost",as=class n extends os{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=ea(t,["providerId","signInMethod"]);if(!s||!i)return null;let o=new n(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return ti(e,t)}_linkToIdToken(e,t){let s=this.buildRequest();return s.idToken=t,ti(e,s)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ti(e,t)}buildRequest(){let e={requestUri:UI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xs(t)}return e}};async function BI(n,e){return Ge(n,"POST","/v1/accounts:sendVerificationCode",De(n,e))}async function qI(n,e){return Pn(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,e))}async function jI(n,e){let t=await Pn(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,e));if(t.temporaryProof)throw pr(n,"account-exists-with-different-credential",t);return t}var GI={USER_NOT_FOUND:"user-not-found"};async function HI(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Pn(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,t),GI)}var _r=class n extends os{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return jI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return HI(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:s,phoneNumber:i,temporaryProof:r}=e;return!s&&!t&&!i&&!r?null:new n({verificationId:t,verificationCode:s,phoneNumber:i,temporaryProof:r})}};function zI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WI(n){let e=Zs(ei(n)).link,t=e?Zs(ei(e)).deep_link_id:null,s=Zs(ei(n)).deep_link_id;return(s?Zs(ei(s)).link:null)||s||t||e||n}var fa=class n{constructor(e){var t,s,i,r,o,c;let l=Zs(ei(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,p=zI((i=l.mode)!==null&&i!==void 0?i:null);Q(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=WI(e);try{return new n(t)}catch{return null}}};var cs=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return vr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let s=fa.parseLink(t);return Q(s,"argument-error"),vr._fromEmailAndCode(e,s.code,s.tenantId)}};cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var pa=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var ls=class extends pa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var wr=class n extends ls{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";var br=class n extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return as._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return n.credential(t,s)}catch{return null}}};br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";var Er=class n extends ls{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";var Ir=class n extends ls{constructor(){super("twitter.com")}static credential(e,t){return as._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return n.credential(t,s)}catch{return null}}};Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";async function KI(n,e){return Pn(n,"POST","/v1/accounts:signUp",De(n,e))}var ii=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){let r=await si._fromIdTokenResponse(e,s,i),o=Xm(s);return new n({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);let i=Xm(s);return new n({user:e,providerId:i,_tokenResponse:s,operationType:t})}};function Xm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var Iu=class n extends yt{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new n(e,t,s,i)}};function Ng(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(n,r,e,s):r})}async function QI(n,e,t=!1){let s=await ni(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ii._forOperation(n,"link",s)}async function YI(n,e,t=!1){let{auth:s}=n;if(vt(s.app))return Promise.reject(cn(s));let i="reauthenticate";try{let r=await ni(n,Ng(s,i,e,n),t);Q(r.idToken,s,"internal-error");let o=xu(r.idToken);Q(o,s,"internal-error");let{sub:c}=o;return Q(n.uid===c,s,"user-mismatch"),ii._forOperation(n,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&Lt(s,"user-mismatch"),r}}async function Dg(n,e,t=!1){if(vt(n.app))return Promise.reject(cn(n));let s="signIn",i=await Ng(n,s,e),r=await ii._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Og(n,e){return Dg(un(n),e)}function JI(n,e,t){var s;Q(((s=t.url)===null||s===void 0?void 0:s.length)>0,n,"invalid-continue-uri"),Q(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(Q(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(Q(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function xg(n){let e=un(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mu(n,e,t){let s=un(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&JI(s,i,t),await ha(s,i,"getOobCode",VI)}async function Vu(n,e,t){if(vt(n.app))return Promise.reject(cn(n));let s=un(n),o=await ha(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&xg(n),l}),c=await ii._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(c.user),c}function $u(n,e,t){return vt(n.app)?Promise.reject(cn(n)):Og(we(n),cs.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&xg(n),s})}async function XI(n,e){return Ge(n,"POST","/v1/accounts:update",e)}async function Fu(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;let s=we(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ni(s,XI(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;let c=s.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Lg(n,e,t,s){return we(n).onIdTokenChanged(e,t,s)}function Mg(n,e,t){return we(n).beforeAuthStateChanged(e,t)}function Uu(n,e,t,s){return we(n).onAuthStateChanged(e,t,s)}function ds(n){return we(n).signOut()}function ZI(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:start",De(n,e))}function eT(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",De(n,e))}function tT(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:start",De(n,e))}function nT(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",De(n,e))}var ma="__sak";var ga=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var sT=1e3,iT=10,ya=class extends ga{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}let s=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);II()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iT):i()}notifyListeners(e,t){this.localCache[e]=t;let s=this.listeners[e];if(s)for(let i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};ya.type="LOCAL";var Vg=ya;var va=class extends ga{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};va.type="SESSION";var Bu=va;function rT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var _a=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let s=new n(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});let c=Array.from(o).map(async u=>u(t.origin,r)),l=await rT(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};_a.receivers=[];function qu(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}var Tu=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{let u=qu("",20);i.port1.start();let h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){let m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function Ht(){return window}function oT(n){Ht().location.href=n}function $g(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function aT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cT(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lT(){return $g()?self:null}var Fg="firebaseLocalStorageDb",uT=1,wa="firebaseLocalStorage",Ug="fbase_key",us=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Pa(n,e){return n.transaction([wa],e?"readwrite":"readonly").objectStore(wa)}function dT(){let n=indexedDB.deleteDatabase(Fg);return new us(n).toPromise()}function Su(){let n=indexedDB.open(Fg,uT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let s=n.result;try{s.createObjectStore(wa,{keyPath:Ug})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let s=n.result;s.objectStoreNames.contains(wa)?e(s):(s.close(),await dT(),e(await Su()))})})}async function Zm(n,e,t){let s=Pa(n,!0).put({[Ug]:e,value:t});return new us(s).toPromise()}async function hT(n,e){let t=Pa(n,!1).get(e),s=await new us(t).toPromise();return s===void 0?null:s.value}function eg(n,e){let t=Pa(n,!0).delete(e);return new us(t).toPromise()}var fT=800,pT=3,ba=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Su(),this.db)}async _withRetries(e){let t=0;for(;;)try{let s=await this._openDb();return await e(s)}catch(s){if(t++>pT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_a._getInstance(lT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aT(),!this.activeServiceWorker)return;this.sender=new Tu(this.activeServiceWorker);let s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Su();return await Zm(e,ma,"1"),await eg(e,ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(s=>hT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let r=Pa(i,!1).getAll();return new us(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],s=new Set;if(e.length!==0)for(let{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let s=this.listeners[e];if(s)for(let i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};ba.type="LOCAL";var Bg=ba;function mT(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:start",De(n,e))}function gT(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:finalize",De(n,e))}function yT(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:finalize",De(n,e))}var PC=Rg("rcb"),NC=new rs(3e4,6e4);var vT="recaptcha";async function _T(n,e,t){var s;let i=await t.verify();try{Q(typeof i=="string",n,"argument-error"),Q(t.type===vT,n,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){let o=r.session;if("phoneNumber"in r)return Q(o.type==="enroll",n,"internal-error"),(await ZI(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{Q(o.type==="signin",n,"internal-error");let c=((s=r.multiFactorHint)===null||s===void 0?void 0:s.uid)||r.multiFactorUid;return Q(c,n,"missing-multi-factor-info"),(await mT(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:o}=await BI(n,{phoneNumber:r.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}var Tr=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=un(e)}verifyPhoneNumber(e,t){return _T(this.auth,e,we(t))}static credential(e,t){return _r._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:s}=e;return t&&s?_r._fromTokenResponse(t,s):null}};Tr.PROVIDER_ID="phone";Tr.PHONE_SIGN_IN_METHOD="phone";function wT(n,e){return e?an(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var Sr=class extends os{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ti(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ti(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ti(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function bT(n){return Dg(n.auth,new Sr(n),n.bypassAuthState)}function ET(n){let{auth:e,user:t}=n;return Q(t,e,"internal-error"),YI(t,new Sr(n),n.bypassAuthState)}async function IT(n){let{auth:e,user:t}=n;return Q(t,e,"internal-error"),QI(t,new Sr(n),n.bypassAuthState)}var Ea=class{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}let l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bT;case"linkViaPopup":case"linkViaRedirect":return IT;case"reauthViaPopup":case"reauthViaRedirect":return ET;default:Lt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var TT=new rs(2e3,1e4);var Au=class n extends Ea{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");let e=qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TT.get())};e()}};Au.currentPopupAction=null;var ST="pendingRedirect",ia=new Map,Ru=class extends Ea{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{let s=await AT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function AT(n,e){let t=kT(e),s=CT(n);if(!await s._isAvailable())return!1;let i=await s._get(t)==="true";return await s._remove(t),i}function RT(n,e){ia.set(n._key(),e)}function CT(n){return an(n._redirectPersistence)}function kT(n){return sa(ST,n.config.apiKey,n.name)}async function PT(n,e,t=!1){if(vt(n.app))return Promise.reject(cn(n));let s=un(n),i=wT(s,e),o=await new Ru(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}var NT=10*60*1e3,Cu=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!qg(e)){let i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Gt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NT&&this.cachedEventUids.clear(),this.cachedEventUids.has(tg(e))}saveEventToCache(e){this.cachedEventUids.add(tg(e)),this.lastProcessedEventTime=Date.now()}};function tg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qg({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function DT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qg(n);default:return!1}}async function OT(n,e={}){return Ge(n,"GET","/v1/projects",e)}var xT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LT=/^https?/;async function MT(n){if(n.config.emulator)return;let{authorizedDomains:e}=await OT(n);for(let t of e)try{if(VT(t))return}catch{}Lt(n,"unauthorized-domain")}function VT(n){let e=pu(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!LT.test(t))return!1;if(xT.test(n))return s===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}var $T=new rs(3e4,6e4);function ng(){let n=Ht().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function FT(n){return new Promise((e,t)=>{var s,i,r;function o(){ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ng(),t(Gt(n,"network-request-failed"))},timeout:$T.get()})}if(!((i=(s=Ht().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ht().gapi)===null||r===void 0)&&r.load)o();else{let c=Rg("iframefcb");return Ht()[c]=()=>{gapi.load?o():t(Gt(n,"network-request-failed"))},Ag(`${CI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ra=null,e})}var ra=null;function UT(n){return ra=ra||FT(n),ra}var BT=new rs(5e3,15e3),qT="__/auth/iframe",jT="emulator/auth/iframe",GT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zT(n){let e=n.config;Q(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Ou(e,jT):`https://${n.config.authDomain}/${qT}`,s={apiKey:e.apiKey,appName:n.name,v:Cn},i=HT.get(n.config.apiHost);i&&(s.eid=i);let r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Xs(s).slice(1)}`}async function WT(n){let e=await UT(n),t=Ht().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:zT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});let o=Gt(n,"network-request-failed"),c=Ht().setTimeout(()=>{r(o)},BT.get());function l(){Ht().clearTimeout(c),i(s)}s.ping(l).then(l,()=>{r(o)})}))}var KT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QT=500,YT=600,JT="_blank",XT="http://localhost",Ia=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function ZT(n,e,t,s=QT,i=YT){let r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString(),c="",l=Object.assign(Object.assign({},KT),{width:s.toString(),height:i.toString(),top:r,left:o}),u=Ce().toLowerCase();t&&(c=_g(u)?JT:t),yg(u)&&(e=e||XT,l.scrollbars="yes");let h=Object.entries(l).reduce((m,[E,R])=>`${m}${E}=${R},`,"");if(EI(u)&&c!=="_self")return e0(e||"",c),new Ia(null);let p=window.open(e||"",c,h);Q(p,n,"popup-blocked");try{p.focus()}catch{}return new Ia(p)}function e0(n,e){let t=document.createElement("a");t.href=n,t.target=e;let s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}var t0="__/auth/handler",n0="emulator/auth/handler",s0=encodeURIComponent("fac");async function sg(n,e,t,s,i,r){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Cn,eventId:i};if(e instanceof pa){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",km(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[h,p]of Object.entries(r||{}))o[h]=p}if(e instanceof ls){let h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);let c=o;for(let h of Object.keys(c))c[h]===void 0&&delete c[h];let l=await n._getAppCheckToken(),u=l?`#${s0}=${encodeURIComponent(l)}`:"";return`${i0(n)}?${Xs(c).slice(1)}${u}`}function i0({config:n}){return n.emulator?Ou(n,n0):`https://${n.authDomain}/${t0}`}var fu="webStorageSupport",ku=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bu,this._completeRedirectFn=PT,this._overrideRedirectResult=RT}async _openPopup(e,t,s,i){var r;ln((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");let o=await sg(e,t,s,pu(),i);return ZT(e,o,qu())}async _openRedirect(e,t,s,i){await this._originValidation(e);let r=await sg(e,t,s,pu(),i);return oT(r),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ln(r,"If manager is not set, promise should be"),r)}let s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){let t=await WT(e),s=new Cu(e);return t.register("authEvent",i=>(Q(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fu,{type:fu},i=>{var r;let o=(r=i?.[0])===null||r===void 0?void 0:r[fu];o!==void 0&&t(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=MT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tg()||vg()||Lu()}},jg=ku,Ta=class{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return jt("unexpected MultiFactorSessionType")}}},Pu=class n extends Ta{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,s){return eT(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return gT(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Sa=class{constructor(){}static assertion(e){return Pu._fromCredential(e)}};Sa.FACTOR_ID="phone";var Aa=class{static assertionForEnrollment(e,t){return Ra._fromSecret(e,t)}static assertionForSignIn(e,t){return Ra._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let s=e;Q(typeof((t=s.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await tT(s.user.auth,{idToken:s.credential,totpEnrollmentInfo:{}});return Ca._fromStartTotpMfaEnrollmentResponse(i,s.user.auth)}};Aa.FACTOR_ID="totp";var Ra=class n extends Ta{constructor(e,t,s){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=s}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,s){return Q(typeof this.secret<"u",e,"argument-error"),nT(e,{idToken:t,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){Q(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let s={verificationCode:this.otp};return yT(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}},Ca=class n{constructor(e,t,s,i,r,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=s,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let i=!1;return(ta(e)||ta(t))&&(i=!0),i&&(ta(e)&&(e=((s=this.auth.currentUser)===null||s===void 0?void 0:s.email)||"unknownuser"),ta(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function ta(n){return typeof n>"u"||n?.length===0}var ig="@firebase/auth",rg="1.7.9";var Nu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function r0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o0(n){qt(new Ct("auth",(e,{options:t})=>{let s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});let l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sg(n)},u=new bu(s,i,r,l);return NI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),qt(new Ct("auth-internal",e=>{let t=un(e.getProvider("auth").getImmediate());return(s=>new Nu(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(ig,rg,r0(n)),ft(ig,rg,"esm2017")}var a0=5*60,c0=Ql("authIdTokenMaxAge")||a0,og=null,l0=n=>async e=>{let t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>c0)return;let i=t?.token;og!==i&&(og=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ju(n=fr()){let e=is(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Cg(n,{popupRedirectResolver:jg,persistence:[Bg,Vg,Bu]}),s=Ql("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){let r=new URL(s,location.origin);if(location.origin===r.origin){let o=l0(r.toString());Mg(t,o,()=>o(t.currentUser)),Lg(t,c=>o(c))}}let i=Em("auth");return i&&kg(t,`http://${i}`),t}function u0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}AI({loadJS(n){return new Promise((e,t)=>{let s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{let r=Gt("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",u0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o0("Browser");var Gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hg={};var Nn,Gu;(function(){var n;function e(w,_){function b(){}b.prototype=_.prototype,w.D=_.prototype,w.prototype=new b,w.prototype.constructor=w,w.C=function(A,T,k){for(var I=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)I[Rt-2]=arguments[Rt];return _.prototype[T].apply(A,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,b){b||(b=0);var A=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)A[T]=_.charCodeAt(b++)|_.charCodeAt(b++)<<8|_.charCodeAt(b++)<<16|_.charCodeAt(b++)<<24;else for(T=0;16>T;++T)A[T]=_[b++]|_[b++]<<8|_[b++]<<16|_[b++]<<24;_=w.g[0],b=w.g[1],T=w.g[2];var k=w.g[3],I=_+(k^b&(T^k))+A[0]+3614090360&4294967295;_=b+(I<<7&4294967295|I>>>25),I=k+(T^_&(b^T))+A[1]+3905402710&4294967295,k=_+(I<<12&4294967295|I>>>20),I=T+(b^k&(_^b))+A[2]+606105819&4294967295,T=k+(I<<17&4294967295|I>>>15),I=b+(_^T&(k^_))+A[3]+3250441966&4294967295,b=T+(I<<22&4294967295|I>>>10),I=_+(k^b&(T^k))+A[4]+4118548399&4294967295,_=b+(I<<7&4294967295|I>>>25),I=k+(T^_&(b^T))+A[5]+1200080426&4294967295,k=_+(I<<12&4294967295|I>>>20),I=T+(b^k&(_^b))+A[6]+2821735955&4294967295,T=k+(I<<17&4294967295|I>>>15),I=b+(_^T&(k^_))+A[7]+4249261313&4294967295,b=T+(I<<22&4294967295|I>>>10),I=_+(k^b&(T^k))+A[8]+1770035416&4294967295,_=b+(I<<7&4294967295|I>>>25),I=k+(T^_&(b^T))+A[9]+2336552879&4294967295,k=_+(I<<12&4294967295|I>>>20),I=T+(b^k&(_^b))+A[10]+4294925233&4294967295,T=k+(I<<17&4294967295|I>>>15),I=b+(_^T&(k^_))+A[11]+2304563134&4294967295,b=T+(I<<22&4294967295|I>>>10),I=_+(k^b&(T^k))+A[12]+1804603682&4294967295,_=b+(I<<7&4294967295|I>>>25),I=k+(T^_&(b^T))+A[13]+4254626195&4294967295,k=_+(I<<12&4294967295|I>>>20),I=T+(b^k&(_^b))+A[14]+2792965006&4294967295,T=k+(I<<17&4294967295|I>>>15),I=b+(_^T&(k^_))+A[15]+1236535329&4294967295,b=T+(I<<22&4294967295|I>>>10),I=_+(T^k&(b^T))+A[1]+4129170786&4294967295,_=b+(I<<5&4294967295|I>>>27),I=k+(b^T&(_^b))+A[6]+3225465664&4294967295,k=_+(I<<9&4294967295|I>>>23),I=T+(_^b&(k^_))+A[11]+643717713&4294967295,T=k+(I<<14&4294967295|I>>>18),I=b+(k^_&(T^k))+A[0]+3921069994&4294967295,b=T+(I<<20&4294967295|I>>>12),I=_+(T^k&(b^T))+A[5]+3593408605&4294967295,_=b+(I<<5&4294967295|I>>>27),I=k+(b^T&(_^b))+A[10]+38016083&4294967295,k=_+(I<<9&4294967295|I>>>23),I=T+(_^b&(k^_))+A[15]+3634488961&4294967295,T=k+(I<<14&4294967295|I>>>18),I=b+(k^_&(T^k))+A[4]+3889429448&4294967295,b=T+(I<<20&4294967295|I>>>12),I=_+(T^k&(b^T))+A[9]+568446438&4294967295,_=b+(I<<5&4294967295|I>>>27),I=k+(b^T&(_^b))+A[14]+3275163606&4294967295,k=_+(I<<9&4294967295|I>>>23),I=T+(_^b&(k^_))+A[3]+4107603335&4294967295,T=k+(I<<14&4294967295|I>>>18),I=b+(k^_&(T^k))+A[8]+1163531501&4294967295,b=T+(I<<20&4294967295|I>>>12),I=_+(T^k&(b^T))+A[13]+2850285829&4294967295,_=b+(I<<5&4294967295|I>>>27),I=k+(b^T&(_^b))+A[2]+4243563512&4294967295,k=_+(I<<9&4294967295|I>>>23),I=T+(_^b&(k^_))+A[7]+1735328473&4294967295,T=k+(I<<14&4294967295|I>>>18),I=b+(k^_&(T^k))+A[12]+2368359562&4294967295,b=T+(I<<20&4294967295|I>>>12),I=_+(b^T^k)+A[5]+4294588738&4294967295,_=b+(I<<4&4294967295|I>>>28),I=k+(_^b^T)+A[8]+2272392833&4294967295,k=_+(I<<11&4294967295|I>>>21),I=T+(k^_^b)+A[11]+1839030562&4294967295,T=k+(I<<16&4294967295|I>>>16),I=b+(T^k^_)+A[14]+4259657740&4294967295,b=T+(I<<23&4294967295|I>>>9),I=_+(b^T^k)+A[1]+2763975236&4294967295,_=b+(I<<4&4294967295|I>>>28),I=k+(_^b^T)+A[4]+1272893353&4294967295,k=_+(I<<11&4294967295|I>>>21),I=T+(k^_^b)+A[7]+4139469664&4294967295,T=k+(I<<16&4294967295|I>>>16),I=b+(T^k^_)+A[10]+3200236656&4294967295,b=T+(I<<23&4294967295|I>>>9),I=_+(b^T^k)+A[13]+681279174&4294967295,_=b+(I<<4&4294967295|I>>>28),I=k+(_^b^T)+A[0]+3936430074&4294967295,k=_+(I<<11&4294967295|I>>>21),I=T+(k^_^b)+A[3]+3572445317&4294967295,T=k+(I<<16&4294967295|I>>>16),I=b+(T^k^_)+A[6]+76029189&4294967295,b=T+(I<<23&4294967295|I>>>9),I=_+(b^T^k)+A[9]+3654602809&4294967295,_=b+(I<<4&4294967295|I>>>28),I=k+(_^b^T)+A[12]+3873151461&4294967295,k=_+(I<<11&4294967295|I>>>21),I=T+(k^_^b)+A[15]+530742520&4294967295,T=k+(I<<16&4294967295|I>>>16),I=b+(T^k^_)+A[2]+3299628645&4294967295,b=T+(I<<23&4294967295|I>>>9),I=_+(T^(b|~k))+A[0]+4096336452&4294967295,_=b+(I<<6&4294967295|I>>>26),I=k+(b^(_|~T))+A[7]+1126891415&4294967295,k=_+(I<<10&4294967295|I>>>22),I=T+(_^(k|~b))+A[14]+2878612391&4294967295,T=k+(I<<15&4294967295|I>>>17),I=b+(k^(T|~_))+A[5]+4237533241&4294967295,b=T+(I<<21&4294967295|I>>>11),I=_+(T^(b|~k))+A[12]+1700485571&4294967295,_=b+(I<<6&4294967295|I>>>26),I=k+(b^(_|~T))+A[3]+2399980690&4294967295,k=_+(I<<10&4294967295|I>>>22),I=T+(_^(k|~b))+A[10]+4293915773&4294967295,T=k+(I<<15&4294967295|I>>>17),I=b+(k^(T|~_))+A[1]+2240044497&4294967295,b=T+(I<<21&4294967295|I>>>11),I=_+(T^(b|~k))+A[8]+1873313359&4294967295,_=b+(I<<6&4294967295|I>>>26),I=k+(b^(_|~T))+A[15]+4264355552&4294967295,k=_+(I<<10&4294967295|I>>>22),I=T+(_^(k|~b))+A[6]+2734768916&4294967295,T=k+(I<<15&4294967295|I>>>17),I=b+(k^(T|~_))+A[13]+1309151649&4294967295,b=T+(I<<21&4294967295|I>>>11),I=_+(T^(b|~k))+A[4]+4149444226&4294967295,_=b+(I<<6&4294967295|I>>>26),I=k+(b^(_|~T))+A[11]+3174756917&4294967295,k=_+(I<<10&4294967295|I>>>22),I=T+(_^(k|~b))+A[2]+718787259&4294967295,T=k+(I<<15&4294967295|I>>>17),I=b+(k^(T|~_))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+k&4294967295}s.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var b=_-this.blockSize,A=this.B,T=this.h,k=0;k<_;){if(T==0)for(;k<=b;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<_;)if(A[T++]=w.charCodeAt(k++),T==this.blockSize){i(this,A),T=0;break}}else for(;k<_;)if(A[T++]=w[k++],T==this.blockSize){i(this,A),T=0;break}}this.h=T,this.o+=_},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var b=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=b&255,b/=256;for(this.u(w),w=Array(16),_=b=0;4>_;++_)for(var A=0;32>A;A+=8)w[b++]=this.g[_]>>>A&255;return w};function r(w,_){var b=c;return Object.prototype.hasOwnProperty.call(b,w)?b[w]:b[w]=_(w)}function o(w,_){this.h=_;for(var b=[],A=!0,T=w.length-1;0<=T;T--){var k=w[T]|0;A&&k==_||(b[T]=k,A=!1)}this.g=b}var c={};function l(w){return-128<=w&&128>w?r(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return S(u(-w));for(var _=[],b=1,A=0;w>=b;A++)_[A]=w/b|0,b*=4294967296;return new o(_,0)}function h(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return S(h(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(_,8)),A=p,T=0;T<w.length;T+=8){var k=Math.min(8,w.length-T),I=parseInt(w.substring(T,T+k),_);8>k?(k=u(Math.pow(_,k)),A=A.j(k).add(u(I))):(A=A.j(b),A=A.add(u(I)))}return A}var p=l(0),m=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-S(this).m();for(var w=0,_=1,b=0;b<this.g.length;b++){var A=this.i(b);w+=(0<=A?A:4294967296+A)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+S(this).toString(w);for(var _=u(Math.pow(w,6)),b=this,A="";;){var T=H(b,_).g;b=M(b,T.j(_));var k=((0<b.g.length?b.g[0]:b.h)>>>0).toString(w);if(b=T,R(b))return k+A;for(;6>k.length;)k="0"+k;A=k+A}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=M(this,w),P(w)?-1:R(w)?0:1};function S(w){for(var _=w.g.length,b=[],A=0;A<_;A++)b[A]=~w.g[A];return new o(b,~w.h).add(m)}n.abs=function(){return P(this)?S(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],A=0,T=0;T<=_;T++){var k=A+(this.i(T)&65535)+(w.i(T)&65535),I=(k>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);A=I>>>16,k&=65535,I&=65535,b[T]=I<<16|k}return new o(b,b[b.length-1]&-2147483648?-1:0)};function M(w,_){return w.add(S(_))}n.j=function(w){if(R(this)||R(w))return p;if(P(this))return P(w)?S(this).j(S(w)):S(S(this).j(w));if(P(w))return S(this.j(S(w)));if(0>this.l(E)&&0>w.l(E))return u(this.m()*w.m());for(var _=this.g.length+w.g.length,b=[],A=0;A<2*_;A++)b[A]=0;for(A=0;A<this.g.length;A++)for(var T=0;T<w.g.length;T++){var k=this.i(A)>>>16,I=this.i(A)&65535,Rt=w.i(T)>>>16,Jn=w.i(T)&65535;b[2*A+2*T]+=I*Jn,F(b,2*A+2*T),b[2*A+2*T+1]+=k*Jn,F(b,2*A+2*T+1),b[2*A+2*T+1]+=I*Rt,F(b,2*A+2*T+1),b[2*A+2*T+2]+=k*Rt,F(b,2*A+2*T+2)}for(A=0;A<_;A++)b[A]=b[2*A+1]<<16|b[2*A];for(A=_;A<2*_;A++)b[A]=0;return new o(b,0)};function F(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function V(w,_){this.g=w,this.h=_}function H(w,_){if(R(_))throw Error("division by zero");if(R(w))return new V(p,p);if(P(w))return _=H(S(w),_),new V(S(_.g),S(_.h));if(P(_))return _=H(w,S(_)),new V(S(_.g),_.h);if(30<w.g.length){if(P(w)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var b=m,A=_;0>=A.l(w);)b=ee(b),A=ee(A);var T=W(b,1),k=W(A,1);for(A=W(A,2),b=W(b,2);!R(A);){var I=k.add(A);0>=I.l(w)&&(T=T.add(b),k=I),A=W(A,1),b=W(b,1)}return _=M(w,T.j(_)),new V(T,_)}for(T=p;0<=w.l(_);){for(b=Math.max(1,Math.floor(w.m()/_.m())),A=Math.ceil(Math.log(b)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),k=u(b),I=k.j(_);P(I)||0<I.l(w);)b-=A,k=u(b),I=k.j(_);R(k)&&(k=m),T=T.add(k),w=M(w,I)}return new V(T,w)}n.A=function(w){return H(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],A=0;A<_;A++)b[A]=this.i(A)&w.i(A);return new o(b,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],A=0;A<_;A++)b[A]=this.i(A)|w.i(A);return new o(b,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),b=[],A=0;A<_;A++)b[A]=this.i(A)^w.i(A);return new o(b,this.h^w.h)};function ee(w){for(var _=w.g.length+1,b=[],A=0;A<_;A++)b[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(b,w.h)}function W(w,_){var b=_>>5;_%=32;for(var A=w.g.length-b,T=[],k=0;k<A;k++)T[k]=0<_?w.i(k+b)>>>_|w.i(k+b+1)<<32-_:w.i(k+b);return new o(T,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Gu=Hg.Md5=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Nn=Hg.Integer=o}).apply(typeof Gg<"u"?Gg:typeof self<"u"?self:typeof window<"u"?window:{});var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dn={};var Hu,d0,ri,zu,Ar,Da,Wu,Ku,Qu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Na=="object"&&Na];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function i(a,d){if(d)e:{var f=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function r(a,d){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var D=f++;return{value:d(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return r(this,function(d,f){return f})}});var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(d,C)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function E(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,D){for(var B=Array(arguments.length-2),me=2;me<arguments.length;me++)B[me-2]=arguments[me];return d.prototype[C].apply(g,B)}}function P(a){let d=a.length;if(0<d){let f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function S(a,d){for(let f=1;f<arguments.length;f++){let g=arguments[f];if(l(g)){let C=a.length||0,D=g.length||0;a.length=C+D;for(let B=0;B<D;B++)a[C+B]=g[B]}else a.push(g)}}class M{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function F(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ee=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function W(a,d,f){for(let g in a)d.call(f,a[g],g,a)}function w(a,d){for(let f in a)d.call(void 0,a[f],f,a)}function _(a){let d={};for(let f in a)d[f]=a[f];return d}let b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,d){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let D=0;D<b.length;D++)f=b[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function T(a){var d=1;a=a.split(":");let f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function k(a){c.setTimeout(()=>{throw a},0)}function I(){var a=Qi;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Rt{constructor(){this.h=this.g=null}add(d,f){let g=Jn.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Jn=new M(()=>new vl,a=>a.reset());class vl{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let tn,Xn=!1,Qi=new Rt,U=()=>{let a=c.Promise.resolve(void 0);tn=()=>{a.then(de)}};var de=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){k(f)}var d=Jn;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Xn=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var vb=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{let f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function Yi(a,d){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(ee){e:{try{H(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_b[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Yi.aa.h.call(this)}}R(Yi,je);var _b={2:"touch",3:"pen",4:"mouse"};Yi.prototype.h=function(){Yi.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ji="closure_listenable_"+(1e6*Math.random()|0),wb=0;function bb(a,d,f,g,C){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=C,this.key=++wb,this.da=this.fa=!1}function No(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Do(a){this.src=a,this.g={},this.h=0}Do.prototype.add=function(a,d,f,g,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=wl(a,d,g,C);return-1<B?(d=a[B],f||(d.fa=!1)):(d=new bb(d,this.src,D,!!g,C),d.fa=f,a.push(d)),d};function _l(a,d){var f=d.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=C)&&Array.prototype.splice.call(g,C,1),D&&(No(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function wl(a,d,f,g){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==d&&D.capture==!!f&&D.ha==g)return C}return-1}var bl="closure_lm_"+(1e6*Math.random()|0),El={};function _p(a,d,f,g,C){if(g&&g.once)return bp(a,d,f,g,C);if(Array.isArray(d)){for(var D=0;D<d.length;D++)_p(a,d[D],f,g,C);return null}return f=Al(f),a&&a[Ji]?a.K(d,f,u(g)?!!g.capture:!!g,C):wp(a,d,f,!1,g,C)}function wp(a,d,f,g,C,D){if(!d)throw Error("Invalid event type");var B=u(C)?!!C.capture:!!C,me=Tl(a);if(me||(a[bl]=me=new Do(a)),f=me.add(d,f,g,B,D),f.proxy)return f;if(g=Eb(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)vb||(C=B),C===void 0&&(C=!1),a.addEventListener(d.toString(),g,C);else if(a.attachEvent)a.attachEvent(Ip(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Eb(){function a(f){return d.call(a.src,a.listener,f)}let d=Ib;return a}function bp(a,d,f,g,C){if(Array.isArray(d)){for(var D=0;D<d.length;D++)bp(a,d[D],f,g,C);return null}return f=Al(f),a&&a[Ji]?a.L(d,f,u(g)?!!g.capture:!!g,C):wp(a,d,f,!0,g,C)}function Ep(a,d,f,g,C){if(Array.isArray(d))for(var D=0;D<d.length;D++)Ep(a,d[D],f,g,C);else g=u(g)?!!g.capture:!!g,f=Al(f),a&&a[Ji]?(a=a.i,d=String(d).toString(),d in a.g&&(D=a.g[d],f=wl(D,f,g,C),-1<f&&(No(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[d],a.h--)))):a&&(a=Tl(a))&&(d=a.g[d.toString()],a=-1,d&&(a=wl(d,f,g,C)),(f=-1<a?d[a]:null)&&Il(f))}function Il(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Ji])_l(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(Ip(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=Tl(d))?(_l(f,a),f.h==0&&(f.src=null,d[bl]=null)):No(a)}}}function Ip(a){return a in El?El[a]:El[a]="on"+a}function Ib(a,d){if(a.da)a=!0;else{d=new Yi(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&Il(a),a=f.call(g,d)}return a}function Tl(a){return a=a[bl],a instanceof Do?a:null}var Sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Al(a){return typeof a=="function"?a:(a[Sl]||(a[Sl]=function(d){return a.handleEvent(d)}),a[Sl])}function Ye(){ht.call(this),this.i=new Do(this),this.M=this,this.F=null}R(Ye,ht),Ye.prototype[Ji]=!0,Ye.prototype.removeEventListener=function(a,d,f,g){Ep(this,a,d,f,g)};function st(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new je(d,a);else if(d instanceof je)d.target=d.target||a;else{var C=d;d=new je(g,a),A(d,C)}if(C=!0,f)for(var D=f.length-1;0<=D;D--){var B=d.g=f[D];C=Oo(B,g,!0,d)&&C}if(B=d.g=a,C=Oo(B,g,!0,d)&&C,C=Oo(B,g,!1,d)&&C,f)for(D=0;D<f.length;D++)B=d.g=f[D],C=Oo(B,g,!1,d)&&C}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)No(f[g]);delete a.g[d],a.h--}}this.F=null},Ye.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},Ye.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function Oo(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,D=0;D<d.length;++D){var B=d[D];if(B&&!B.da&&B.capture==f){var me=B.listener,We=B.ha||B.src;B.fa&&_l(a.i,B),C=me.call(We,g)!==!1&&C}}return C&&!g.defaultPrevented}function Tp(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Sp(a){a.g=Tp(()=>{a.g=null,a.i&&(a.i=!1,Sp(a))},a.l);let d=a.h;a.h=null,a.m.apply(null,d)}class Tb extends ht{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Sp(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(a){ht.call(this),this.h=a,this.g={}}R(Xi,ht);var Ap=[];function Rp(a){W(a.g,function(d,f){this.g.hasOwnProperty(f)&&Il(d)},a),a.g={}}Xi.prototype.N=function(){Xi.aa.N.call(this),Rp(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rl=c.JSON.stringify,Sb=c.JSON.parse,Ab=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Cl(){}Cl.prototype.h=null;function Cp(a){return a.h||(a.h=a.i())}function kp(){}var Zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kl(){je.call(this,"d")}R(kl,je);function Pl(){je.call(this,"c")}R(Pl,je);var Zn={},Pp=null;function xo(){return Pp=Pp||new Ye}Zn.La="serverreachability";function Np(a){je.call(this,Zn.La,a)}R(Np,je);function er(a){let d=xo();st(d,new Np(d))}Zn.STAT_EVENT="statevent";function Dp(a,d){je.call(this,Zn.STAT_EVENT,a),this.stat=d}R(Dp,je);function it(a){let d=xo();st(d,new Dp(d,a))}Zn.Ma="timingevent";function Op(a,d){je.call(this,Zn.Ma,a),this.size=d}R(Op,je);function tr(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function nr(){this.g=!0}nr.prototype.xa=function(){this.g=!1};function Rb(a,d,f,g,C,D){a.info(function(){if(a.g)if(D)for(var B="",me=D.split("&"),We=0;We<me.length;We++){var le=me[We].split("=");if(1<le.length){var Je=le[0];le=le[1];var Xe=Je.split("_");B=2<=Xe.length&&Xe[1]=="type"?B+(Je+"="+le+"&"):B+(Je+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+d+`
`+f+`
`+B})}function Cb(a,d,f,g,C,D,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+d+`
`+f+`
`+D+" "+B})}function Ks(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Pb(a,f)+(g?" "+g:"")})}function kb(a,d){a.info(function(){return"TIMEOUT: "+d})}nr.prototype.info=function(){};function Pb(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<C.length;B++)C[B]=""}}}}return Rl(f)}catch{return d}}var Lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nl;function Mo(){}R(Mo,Cl),Mo.prototype.g=function(){return new XMLHttpRequest},Mo.prototype.i=function(){return{}},Nl=new Mo;function In(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new Xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lp}function Lp(){this.i=null,this.g="",this.h=!1}var Mp={},Dl={};function Ol(a,d,f){a.L=1,a.v=Uo(nn(d)),a.m=f,a.P=!0,Vp(a,null)}function Vp(a,d){a.F=Date.now(),Vo(a),a.A=nn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Jp(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Lp,a.g=mm(a.j,f?d:null,!a.m),0<a.O&&(a.M=new Tb(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ap[0]=C.toString()),C=Ap);for(var D=0;D<C.length;D++){var B=_p(f,C[D],g||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),er(),Rb(a.i,a.u,a.A,a.l,a.R,a.m)}In.prototype.ca=function(a){a=a.target;let d=this.M;d&&sn(a)==3?d.j():this.Y(a)},In.prototype.Y=function(a){try{if(a==this.g)e:{let Xe=sn(this.g);var d=this.g.Ba();let Js=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||im(this.g)))){this.J||Xe!=4||d==7||(d==8||0>=Js?er(3):er(2)),xl(this);var f=this.g.Z();this.X=f;t:if($p(this)){var g=im(this.g);a="";var C=g.length,D=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),sr(this);var B="";break t}this.h.i=new c.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(D&&d==C-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,Cb(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var me,We=this.g;if((me=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(me)){var le=me;break t}}le=null}if(f=le)Ks(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ll(this,f);else{this.o=!1,this.s=3,it(12),es(this),sr(this);break e}}if(this.P){f=!0;let xt;for(;!this.J&&this.C<B.length;)if(xt=Nb(this,B),xt==Dl){Xe==4&&(this.s=4,it(14),f=!1),Ks(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Mp){this.s=4,it(15),Ks(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Ks(this.i,this.l,xt,null),Ll(this,xt);if($p(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||B.length!=0||this.h.h||(this.s=1,it(16),f=!1),this.o=this.o&&f,!f)Ks(this.i,this.l,B,"[Invalid Chunked Response]"),es(this),sr(this);else if(0<B.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Bl(Je),Je.M=!0,it(11))}}else Ks(this.i,this.l,B,null),Ll(this,B);Xe==4&&es(this),this.o&&!this.J&&(Xe==4?dm(this.j,this):(this.o=!1,Vo(this)))}else Kb(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),es(this),sr(this)}}}catch{}finally{}};function $p(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Nb(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?Dl:(f=Number(d.substring(f,g)),isNaN(f)?Mp:(g+=1,g+f>d.length?Dl:(d=d.slice(g,g+f),a.C=g+f,d)))}In.prototype.cancel=function(){this.J=!0,es(this)};function Vo(a){a.S=Date.now()+a.I,Fp(a,a.I)}function Fp(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=tr(m(a.ba,a),d)}function xl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}In.prototype.ba=function(){this.B=null;let a=Date.now();0<=a-this.S?(kb(this.i,this.A),this.L!=2&&(er(),it(17)),es(this),this.s=2,sr(this)):Fp(this,this.S-a)};function sr(a){a.j.G==0||a.J||dm(a.j,a)}function es(a){xl(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Rp(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Ll(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Ml(f.h,a))){if(!a.K&&Ml(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ho(f),jo(f);else break e;Ul(f),it(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=tr(m(f.Za,f),6e3));if(1>=qp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ns(f,11)}else if((a.K||f.g==a)&&Ho(f),!F(d))for(C=f.Da.g.parse(d),d=0;d<C.length;d++){let le=C[d];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];let Je=le[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));let Xe=le[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));let Js=le[5];Js!=null&&typeof Js=="number"&&0<Js&&(g=1.5*Js,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;let xt=a.g;if(xt){let Wo=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wo){var D=g.h;D.g||Wo.indexOf("spdy")==-1&&Wo.indexOf("quic")==-1&&Wo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Vl(D,D.h),D.h=null))}if(g.D){let ql=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;ql&&(g.ya=ql,_e(g.I,g.D,ql))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=pm(g,g.J?g.ia:null,g.W),B.K){jp(g.h,B);var me=B,We=g.L;We&&(me.I=We),me.B&&(xl(me),Vo(me)),g.g=B}else lm(g);0<f.i.length&&Go(f)}else le[0]!="stop"&&le[0]!="close"||ns(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?ns(f,7):Fl(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}er(4)}catch{}}var Db=class{constructor(a,d){this.g=a,this.map=d}};function Up(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qp(a){return a.h?1:a.g?a.g.size:0}function Ml(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Vl(a,d){a.g?a.g.add(d):a.h=d}function jp(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Up.prototype.cancel=function(){if(this.i=Gp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let a of this.g.values())a.cancel();this.g.clear()}};function Gp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(let f of a.g.values())d=d.concat(f.D);return d}return P(a.i)}function Ob(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function xb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(let g in a)d[f++]=g;return d}}}function Hp(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=xb(a),g=Ob(a),C=g.length,D=0;D<C;D++)d.call(void 0,g[D],f&&f[D],a)}var zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lb(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var D=a[f].substring(0,g);C=a[f].substring(g+1)}else D=a[f];d(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ts(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ts){this.h=a.h,$o(this,a.j),this.o=a.o,this.g=a.g,Fo(this,a.s),this.l=a.l;var d=a.i,f=new or;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Wp(this,f),this.m=a.m}else a&&(d=String(a).match(zp))?(this.h=!1,$o(this,d[1]||"",!0),this.o=ir(d[2]||""),this.g=ir(d[3]||"",!0),Fo(this,d[4]),this.l=ir(d[5]||"",!0),Wp(this,d[6]||"",!0),this.m=ir(d[7]||"")):(this.h=!1,this.i=new or(null,this.h))}ts.prototype.toString=function(){var a=[],d=this.j;d&&a.push(rr(d,Kp,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(rr(d,Kp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(rr(f,f.charAt(0)=="/"?$b:Vb,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",rr(f,Ub)),a.join("")};function nn(a){return new ts(a)}function $o(a,d,f){a.j=f?ir(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Fo(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Wp(a,d,f){d instanceof or?(a.i=d,Bb(a.i,a.h)):(f||(d=rr(d,Fb)),a.i=new or(d,a.h))}function _e(a,d,f){a.i.set(d,f)}function Uo(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ir(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function rr(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,Mb),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Mb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kp=/[#\/\?@]/g,Vb=/[#\?:]/g,$b=/[#\?]/g,Fb=/[#\?@]/g,Ub=/#/g;function or(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Tn(a){a.g||(a.g=new Map,a.h=0,a.i&&Lb(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=or.prototype,n.add=function(a,d){Tn(this),this.i=null,a=Qs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Qp(a,d){Tn(a),d=Qs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Yp(a,d){return Tn(a),d=Qs(a,d),a.g.has(d)}n.forEach=function(a,d){Tn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(d,C,g,this)},this)},this)},n.na=function(){Tn(this);let a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){let C=a[g];for(let D=0;D<C.length;D++)f.push(d[g])}return f},n.V=function(a){Tn(this);let d=[];if(typeof a=="string")Yp(this,a)&&(d=d.concat(this.g.get(Qs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},n.set=function(a,d){return Tn(this),this.i=null,a=Qs(this,a),Yp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Jp(a,d,f){Qp(a,d),0<f.length&&(a.i=null,a.g.set(Qs(a,d),P(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];let D=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var C=D;B[g]!==""&&(C+="="+encodeURIComponent(String(B[g]))),a.push(C)}}return this.i=a.join("&")};function Qs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Bb(a,d){d&&!a.j&&(Tn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Qp(this,g),Jp(this,C,f))},a)),a.j=d}function qb(a,d){let f=new nr;if(c.Image){let g=new Image;g.onload=E(Sn,f,"TestLoadImage: loaded",!0,d,g),g.onerror=E(Sn,f,"TestLoadImage: error",!1,d,g),g.onabort=E(Sn,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=E(Sn,f,"TestLoadImage: timeout",!1,d,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function jb(a,d){let f=new nr,g=new AbortController,C=setTimeout(()=>{g.abort(),Sn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?Sn(f,"TestPingServer: ok",!0,d):Sn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),Sn(f,"TestPingServer: error",!1,d)})}function Sn(a,d,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Gb(){this.g=new Ab}function Hb(a,d,f){let g=f||"";try{Hp(a,function(C,D){let B=C;u(C)&&(B=Rl(C)),d.push(g+D+"="+encodeURIComponent(B))})}catch(C){throw d.push(g+"type="+encodeURIComponent("_badmap")),C}}function ar(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ar,Cl),ar.prototype.g=function(){return new Bo(this.l,this.j)},ar.prototype.i=function(a){return function(){return a}}({});function Bo(a,d){Ye.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Bo,Ye),n=Bo.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,lr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,lr(this)),this.g&&(this.readyState=3,lr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?cr(this):lr(this),this.readyState==3&&Xp(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,cr(this))},n.Qa=function(a){this.g&&(this.response=a,cr(this))},n.ga=function(){this.g&&cr(this)};function cr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,lr(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function lr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zp(a){let d="";return W(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function $l(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Zp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):_e(a,d,f))}function Ae(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ae,Ye);var zb=/^https?$/i,Wb=["POST","PUT"];n=Ae.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nl.g(),this.v=this.o?Cp(this.o):Cp(Nl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(D){em(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(let D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Wb,d,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[D,B]of f)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){em(this,D)}};function em(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,tm(a),qo(a)}function tm(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),qo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qo(this,!0)),Ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?nm(this):this.bb())},n.bb=function(){nm(this)};function nm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)Tp(a.Ea,0,a);else if(st(a,"readystatechange"),sn(a)==4){a.h=!1;try{let B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=B===0){var C=String(a.D).match(zp)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!zb.test(C?C.toLowerCase():"")}f=g}if(f)st(a,"complete"),st(a,"success");else{a.m=6;try{var D=2<sn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",tm(a)}}finally{qo(a)}}}}function qo(a,d){if(a.g){sm(a);let f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||st(a,"ready");try{f.onreadystatechange=g}catch{}}}function sm(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Sb(d)}};function im(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Kb(a){let d={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var f=T(a[g]);let C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();let D=d[C]||[];d[C]=D,D.push(f)}w(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function rm(a){this.Aa=0,this.i=[],this.j=new nr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ur("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ur("baseRetryDelayMs",5e3,a),this.cb=ur("retryDelaySeedMs",1e4,a),this.Wa=ur("forwardChannelMaxRetries",2,a),this.wa=ur("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Up(a&&a.concurrentRequestLimit),this.Da=new Gb,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rm.prototype,n.la=8,n.G=1,n.connect=function(a,d,f,g){it(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=pm(this,null,this.W),Go(this)};function Fl(a){if(om(a),a.G==3){var d=a.U++,f=nn(a.I);if(_e(f,"SID",a.K),_e(f,"RID",d),_e(f,"TYPE","terminate"),dr(a,f),d=new In(a,a.j,d),d.L=2,d.v=Uo(nn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=mm(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Vo(d)}fm(a)}function jo(a){a.g&&(Bl(a),a.g.cancel(),a.g=null)}function om(a){jo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ho(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Go(a){if(!Bp(a.h)&&!a.s){a.s=!0;var d=a.Ga;tn||U(),Xn||(tn(),Xn=!0),Qi.add(d,a),a.B=0}}function Qb(a,d){return qp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=tr(m(a.Ga,a,d),hm(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;let C=new In(this,this.j,a),D=this.o;if(this.S&&(D?(D=_(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=cm(this,C,d),f=nn(this.I),_e(f,"RID",a),_e(f,"CVER",22),this.D&&_e(f,"X-HTTP-Session-Id",this.D),dr(this,f),D&&(this.O?d="headers="+encodeURIComponent(String(Zp(D)))+"&"+d:this.m&&$l(f,this.m,D)),Vl(this.h,C),this.Ua&&_e(f,"TYPE","init"),this.P?(_e(f,"$req",d),_e(f,"SID","null"),C.T=!0,Ol(C,f,null)):Ol(C,f,d),this.G=2}}else this.G==3&&(a?am(this,a):this.i.length==0||Bp(this.h)||am(this))};function am(a,d){var f;d?f=d.l:f=a.U++;let g=nn(a.I);_e(g,"SID",a.K),_e(g,"RID",f),_e(g,"AID",a.T),dr(a,g),a.m&&a.o&&$l(g,a.m,a.o),f=new In(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=cm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vl(a.h,f),Ol(f,g,d)}function dr(a,d){a.H&&W(a.H,function(f,g){_e(d,g,f)}),a.l&&Hp({},function(f,g){_e(d,g,f)})}function cm(a,d,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){let B=["count="+f];D==-1?0<f?(D=C[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let me=!0;for(let We=0;We<f;We++){let le=C[We].g,Je=C[We].map;if(le-=D,0>le)D=Math.max(0,C[We].g-100),me=!1;else try{Hb(Je,B,"req"+le+"_")}catch{g&&g(Je)}}if(me){g=B.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function lm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;tn||U(),Xn||(tn(),Xn=!0),Qi.add(d,a),a.v=0}}function Ul(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=tr(m(a.Fa,a),hm(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,um(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=tr(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),jo(this),um(this))};function Bl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function um(a){a.g=new In(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=nn(a.qa);_e(d,"RID","rpc"),_e(d,"SID",a.K),_e(d,"AID",a.T),_e(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(d,"TO",a.ja),_e(d,"TYPE","xmlhttp"),dr(a,d),a.m&&a.o&&$l(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Uo(nn(d)),f.m=null,f.P=!0,Vp(f,a)}n.Za=function(){this.C!=null&&(this.C=null,jo(this),Ul(this),it(19))};function Ho(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function dm(a,d){var f=null;if(a.g==d){Ho(a),Bl(a),a.g=null;var g=2}else if(Ml(a.h,d))f=d.D,jp(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var C=a.B;g=xo(),st(g,new Op(g,f)),Go(a)}else lm(a);else if(C=d.s,C==3||C==0&&0<d.X||!(g==1&&Qb(a,d)||g==2&&Ul(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),C){case 1:ns(a,5);break;case 4:ns(a,10);break;case 3:ns(a,6);break;default:ns(a,2)}}}function hm(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function ns(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),g=a.Xa;let C=!g;g=new ts(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$o(g,"https"),Uo(g),C?qb(g.toString(),f):jb(g.toString(),f)}else it(2);a.G=0,a.l&&a.l.sa(d),fm(a),om(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function fm(a){if(a.G=0,a.ka=[],a.l){let d=Gp(a.h);(d.length!=0||a.i.length!=0)&&(S(a.ka,d),S(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function pm(a,d,f){var g=f instanceof ts?nn(f):new ts(f);if(g.g!="")d&&(g.g=d+"."+g.g),Fo(g,g.s);else{var C=c.location;g=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var D=new ts(null);g&&$o(D,g),d&&(D.g=d),C&&Fo(D,C),f&&(D.l=f),g=D}return f=a.D,d=a.ya,f&&d&&_e(g,f,d),_e(g,"VER",a.la),dr(a,g),g}function mm(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ae(new ar({eb:f})):new Ae(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gm(){}n=gm.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zo(){}zo.prototype.g=function(a,d){return new gt(a,d)};function gt(a,d){Ye.call(this),this.g=new rm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!F(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!F(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ys(this)}R(gt,Ye),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Fl(this.g)},gt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Rl(a),a=f);d.i.push(new Db(d.Ya++,a)),d.G==3&&Go(d)},gt.prototype.N=function(){this.g.l=null,delete this.j,Fl(this.g),delete this.g,gt.aa.N.call(this)};function ym(a){kl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(let f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}R(ym,kl);function vm(){Pl.call(this),this.status=1}R(vm,Pl);function Ys(a){this.g=a}R(Ys,gm),Ys.prototype.ua=function(){st(this.g,"a")},Ys.prototype.ta=function(a){st(this.g,new ym(a))},Ys.prototype.sa=function(a){st(this.g,new vm)},Ys.prototype.ra=function(){st(this.g,"b")},zo.prototype.createWebChannel=zo.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Qu=dn.createWebChannelTransport=function(){return new zo},Ku=dn.getStatEventTarget=function(){return xo()},Wu=dn.Event=Zn,Da=dn.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lo.NO_ERROR=0,Lo.TIMEOUT=8,Lo.HTTP_ERROR=6,Ar=dn.ErrorCode=Lo,xp.COMPLETE="complete",zu=dn.EventType=xp,kp.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,ri=dn.WebChannel=kp,d0=dn.FetchXmlHttpFactory=ar,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,Hu=dn.XhrIo=Ae}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});var zg="@firebase/firestore";var Ke=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");var xi="10.14.0";var Es=new An("@firebase/firestore");function ui(){return Es.logLevel}function $(n,...e){if(Es.logLevel<=re.DEBUG){let t=e.map(Kh);Es.debug(`Firestore (${xi}): ${n}`,...t)}}function rt(n,...e){if(Es.logLevel<=re.ERROR){let t=e.map(Kh);Es.error(`Firestore (${xi}): ${n}`,...t)}}function Vr(n,...e){if(Es.logLevel<=re.WARN){let t=e.map(Kh);Es.warn(`Firestore (${xi}): ${n}`,...t)}}function Kh(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function K(n="Unexpected state"){let e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+n;throw rt(e),new Error(e)}function Y(n,e){n||K()}function te(n,e){return n}var L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},q=class extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Pt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var td=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},nd=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ke.UNAUTHENTICATED))}shutdown(){}};var sd=class{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0);let s=this.i,i=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve(),r=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pt,e.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pt)}},0),o()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Y(typeof s.accessToken=="string"),new td(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ke(e)}},id=class{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},rd=class{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new id(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}},od=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},ad=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Y(this.o===void 0);let s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);let o=r.token!==this.R;return this.R=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};let i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){let r=this.A.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string"),this.R=t.token,new od(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function h0(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}var qa=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,s="";for(;s.length<20;){let i=h0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}};function ne(n,e){return n<e?-1:n>e?1:0}function _i(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}function Ky(n){return n+"\0"}var ke=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new n(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var X=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new ke(0,0))}static max(){return new n(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var ja=class n{constructor(e,t,s){t===void 0?t=0:t>e.length&&K(),s===void 0?s=e.length-t:s>e.length-t&&K(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let s=Math.min(e.length,t.length);for(let i=0;i<s;i++){let r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},pe=class n extends ja{construct(e,t,s){return new n(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let s of e){if(s.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},f0=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Ve=class n extends ja{construct(e,t,s){return new n(e,t,s)}static isValidIdentifier(e){return f0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],s="",i=0,r=()=>{if(s.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""},o=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var G=class n{constructor(e){this.path=e}static fromPath(e){return new n(pe.fromString(e))}static fromName(e){return new n(pe.fromString(e).popFirst(5))}static empty(){return new n(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new pe(e.slice()))}};var wi=class{constructor(e,t,s,i){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=i}};function cd(n){return n.fields.find(e=>e.kind===2)}function fs(n){return n.fields.filter(e=>e.kind!==2)}wi.UNKNOWN_ID=-1;var gi=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var $r=class n{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new n(0,Dt.min())}};function p0(n,e){let t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(s===1e9?new ke(t+1,0):new ke(t,s));return new Dt(i,G.empty(),e)}function Qy(n){return new Dt(n.readTime,n.key,-1)}var Dt=class n{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new n(X.min(),G.empty(),-1)}static max(){return new n(X.max(),G.empty(),-1)}};function Qh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}var Yy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Ga=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Os(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==Yy)throw n;$("LocalStore","Unexpectedly lost primary lease")}var N=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,s)=>{t(e)})}static reject(e){return new n((t,s)=>{s(e)})}static waitFor(e){return new n((t,s)=>{let i=0,r=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++r,o&&r===i&&t()},l=>s(l))}),o=!0,r===i&&t()})}static or(e){let t=n.resolve(!1);for(let s of e)t=t.next(i=>i?n.resolve(i):s());return t}static forEach(e,t){let s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new n((s,i)=>{let r=e.length,o=new Array(r),c=0;for(let l=0;l<r;l++){let u=l;t(e[u]).next(h=>{o[u]=h,++c,c===r&&s(o)},h=>i(h))}})}static doWhile(e,t){return new n((s,i)=>{let r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}};var Ha=class n{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Pt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ws(e,t.error)):this.V.resolve()},this.transaction.onerror=s=>{let i=Yh(s.target.error);this.V.reject(new ws(e,i))}}static open(e,t,s,i){try{return new n(t,e.transaction(i,s))}catch(r){throw new ws(t,r)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||($("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new ud(t)}},bi=class n{constructor(e,t,s){this.name=e,this.version=t,this.p=s,n.S(Ce())===12.2&&rt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return $("SimpleDb","Removing database:",e),ps(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Yo())return!1;if(n.v())return!0;let e=Ce(),t=n.S(e),s=0<t&&t<10,i=Jy(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}async M(e){return this.db||($("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{let o=r.target.result;t(o)},i.onblocked=()=>{s(new ws(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{let o=r.target.error;o.name==="VersionError"?s(new q(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new q(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new ws(e,o))},i.onupgradeneeded=r=>{$("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);let o=r.target.result;this.p.O(o,i.transaction,r.oldVersion,this.version).next(()=>{$("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,i){let r=t==="readonly",o=0;for(;;){++o;try{this.db=await this.M(e);let c=Ha.open(this.db,e,r?"readonly":"readwrite",s),l=i(c).next(u=>(c.g(),u)).catch(u=>(c.abort(u),N.reject(u))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){let l=c,u=l.name!=="FirebaseError"&&o<3;if($("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}};function Jy(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var ld=class{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ps(this.B.delete())}},ws=class extends q{constructor(e,t){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function Gn(n){return n.name==="IndexedDbTransactionError"}var ud=class{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?($("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):($("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),ps(s)}add(e){return $("SimpleDb","ADD",this.store.name,e,e),ps(this.store.add(e))}get(e){return ps(this.store.get(e)).next(t=>(t===void 0&&(t=null),$("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return $("SimpleDb","DELETE",this.store.name,e),ps(this.store.delete(e))}count(){return $("SimpleDb","COUNT",this.store.name),ps(this.store.count())}U(e,t){let s=this.options(e,t),i=s.index?this.store.index(s.index):this.store;if(typeof i.getAll=="function"){let r=i.getAll(s.range);return new N((o,c)=>{r.onerror=l=>{c(l.target.error)},r.onsuccess=l=>{o(l.target.result)}})}{let r=this.cursor(s),o=[];return this.W(r,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){let s=this.store.getAll(e,t===null?void 0:t);return new N((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}j(e,t){$("SimpleDb","DELETE ALL",this.store.name);let s=this.options(e,t);s.H=!1;let i=this.cursor(s);return this.W(i,(r,o,c)=>c.delete())}J(e,t){let s;t?s=e:(s={},t=e);let i=this.cursor(s);return this.W(i,t)}Y(e){let t=this.cursor({});return new N((s,i)=>{t.onerror=r=>{let o=Yh(r.target.error);i(o)},t.onsuccess=r=>{let o=r.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():s()}):s()}})}W(e,t){let s=[];return new N((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{let c=o.target.result;if(!c)return void i();let l=new ld(c),u=t(c.primaryKey,c.value,l);if(u instanceof N){let h=u.catch(p=>(l.done(),N.reject(p)));s.push(h)}l.isDone?i():l.K===null?c.continue():c.continue(l.K)}}).next(()=>N.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let s=this.store.index(e.index);return e.H?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function ps(n){return new N((e,t)=>{n.onsuccess=s=>{let i=s.target.result;e(i)},n.onerror=s=>{let i=Yh(s.target.error);t(i)}})}var Wg=!1;function Yh(n){let e=bi.S(Ce());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){let s=new q("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Wg||(Wg=!0,setTimeout(()=>{throw s},0)),s}}return n}var dd=class{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){$("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{$("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Gn(t)?$("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Os(t)}await this.X(6e4)})}},hd=class{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){let s=new Set,i=t,r=!0;return N.doWhile(()=>r===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return $("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,s.add(o)});r=!1})).next(()=>t-i)}ne(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,s).next(r=>{let o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,r)).next(c=>($("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let s=e;return t.changes.forEach((i,r)=>{let o=Qy(r);Qh(o,s)>0&&(s=o)}),new Dt(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}};var pt=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};pt.oe=-1;function Vc(n){return n==null}function Fr(n){return n===0&&1/n==-1/0}function m0(n){return typeof n=="number"&&Number.isInteger(n)&&!Fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function at(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kg(e)),e=g0(n.get(t),e);return Kg(e)}function g0(n,e){let t=e,s=n.length;for(let i=0;i<s;i++){let r=n.charAt(i);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function Kg(n){return n+""}function zt(n){let e=n.length;if(Y(e>=2),e===2)return Y(n.charAt(0)===""&&n.charAt(1)===""),pe.emptyPath();let t=e-2,s=[],i="";for(let r=0;r<e;){let o=n.indexOf("",r);switch((o<0||o>t)&&K(),n.charAt(o+1)){case"":let c=n.substring(r,o),l;i.length===0?l=c:(i+=c,l=i,i=""),s.push(l);break;case"":i+=n.substring(r,o),i+="\0";break;case"":i+=n.substring(r,o+1);break;default:K()}r=o+2}return new pe(s)}var Qg=["userId","batchId"];function Va(n,e){return[n,at(e)]}function Xy(n,e,t){return[n,at(e),t]}var y0={},v0=["prefixPath","collectionGroup","readTime","documentId"],_0=["prefixPath","collectionGroup","documentId"],w0=["collectionGroup","readTime","prefixPath","documentId"],b0=["canonicalId","targetId"],E0=["targetId","path"],I0=["path","targetId"],T0=["collectionId","parent"],S0=["indexId","uid"],A0=["uid","sequenceNumber"],R0=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],C0=["indexId","uid","orderedDocumentKey"],k0=["userId","collectionPath","documentId"],P0=["userId","collectionPath","largestBatchId"],N0=["userId","collectionGroup","largestBatchId"],Zy=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],D0=[...Zy,"documentOverlays"],ev=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tv=ev,Jh=[...tv,"indexConfiguration","indexState","indexEntries"],O0=Jh,x0=[...Jh,"globals"];var Ur=class extends Ga{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}};function Fe(n,e){let t=te(n);return bi.F(t._e,e)}function Yg(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xs(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nv(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var Se=class n{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){let i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){let e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mi(this.root,e,this.comparator,!0)}},mi=class{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Kt=class n{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??n.RED,this.left=i??n.EMPTY,this.right=r??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new n(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this,r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();let e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}};Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,s,i,r){return this}insert(e,t,s){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ge=class n{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){let s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){let i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new za(this.data.getIterator())}getIteratorFrom(e){return new za(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},za=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function oi(n){return n.hasNext()?n.getNext():void 0}var _t=class n{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new n([])}unionWith(e){let t=new ge(Ve.comparator);for(let s of this.fields)t=t.add(s);for(let s of e)t=t.add(s);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(t,s)=>t.isEqual(s))}};var Wa=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var $e=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Wa("Invalid base64 string: "+r):r}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};$e.EMPTY_BYTE_STRING=new $e("");var L0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(n){if(Y(!!n),typeof n=="string"){let e=0,t=L0.exec(n);if(Y(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vn(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}function Xh(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Zh(n){let e=n.mapValue.fields.__previous_value__;return Xh(e)?Zh(e):e}function Br(n){let e=fn(n.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}var fd=class{constructor(e,t,s,i,r,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}},Ei=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Ln={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},$a={nullValue:"NULL_VALUE"};function Is(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xh(n)?4:sv(n)?9007199254740991:$c(n)?10:11:K()}function Qt(n,e){if(n===e)return!0;let t=Is(n);if(t!==Is(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Br(n).isEqual(Br(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;let o=fn(i.timestampValue),c=fn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return Vn(i.bytesValue).isEqual(Vn(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return Ee(i.geoPointValue.latitude)===Ee(r.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ee(i.integerValue)===Ee(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){let o=Ee(i.doubleValue),c=Ee(r.doubleValue);return o===c?Fr(o)===Fr(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return _i(n.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(i,r){let o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(Yg(o)!==Yg(c))return!1;for(let l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Qt(o[l],c[l])))return!1;return!0}(n,e);default:return K()}}function qr(n,e){return(n.values||[]).find(t=>Qt(t,e))!==void 0}function $n(n,e){if(n===e)return 0;let t=Is(n),s=Is(e);if(t!==s)return ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(r,o){let c=Ee(r.integerValue||r.doubleValue),l=Ee(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Jg(n.timestampValue,e.timestampValue);case 4:return Jg(Br(n),Br(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(r,o){let c=Vn(r),l=Vn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){let c=r.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){let h=ne(c[u],l[u]);if(h!==0)return h}return ne(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){let c=ne(Ee(r.latitude),Ee(o.latitude));return c!==0?c:ne(Ee(r.longitude),Ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xg(n.arrayValue,e.arrayValue);case 10:return function(r,o){var c,l,u,h;let p=r.fields||{},m=o.fields||{},E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=ne(((u=E?.values)===null||u===void 0?void 0:u.length)||0,((h=R?.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:Xg(E,R)}(n.mapValue,e.mapValue);case 11:return function(r,o){if(r===Ln.mapValue&&o===Ln.mapValue)return 0;if(r===Ln.mapValue)return 1;if(o===Ln.mapValue)return-1;let c=r.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){let m=ne(l[p],h[p]);if(m!==0)return m;let E=$n(c[l[p]],u[h[p]]);if(E!==0)return E}return ne(l.length,h.length)}(n.mapValue,e.mapValue);default:throw K()}}function Jg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);let t=fn(n),s=fn(e),i=ne(t.seconds,s.seconds);return i!==0?i:ne(t.nanos,s.nanos)}function Xg(n,e){let t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){let r=$n(t[i],s[i]);if(r)return r}return ne(t.length,s.length)}function Ii(n){return pd(n)}function pd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let s=fn(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(let r of t.values||[])i?i=!1:s+=",",s+=pd(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){let s=Object.keys(t.fields||{}).sort(),i="{",r=!0;for(let o of s)r?r=!1:i+=",",i+=`${o}:${pd(t.fields[o])}`;return i+"}"}(n.mapValue):K()}function jr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function md(n){return!!n&&"integerValue"in n}function Gr(n){return!!n&&"arrayValue"in n}function Zg(n){return!!n&&"nullValue"in n}function ey(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fa(n){return!!n&&"mapValue"in n}function $c(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Or(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return xs(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Or(s)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Or(n.arrayValue.values[t]);return e}return Object.assign({},n)}function sv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var iv={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function M0(n){return"nullValue"in n?$a:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?jr(Ei.empty(),G.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?$c(n)?iv:{mapValue:{}}:K()}function V0(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?jr(Ei.empty(),G.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?iv:"mapValue"in n?$c(n)?{mapValue:{}}:Ln:K()}function ty(n,e){let t=$n(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function ny(n,e){let t=$n(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}var ot=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Or(t)}setAll(e){let t=Ve.emptyPath(),s={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,s,i),s={},i=[],t=c.popLast()}o?s[c.lastSegment()]=Or(o):i.push(c.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){let t=this.field(e.popLast());Fa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Fa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){xs(t,(i,r)=>e[i]=r);for(let i of s)delete e[i]}clone(){return new n(Or(this.value))}};function rv(n){let e=[];return xs(n.fields,(t,s)=>{let i=new Ve([t]);if(Fa(s)){let r=rv(s.mapValue).fields;if(r.length===0)e.push(i);else for(let o of r)e.push(i.child(o))}else e.push(i)}),new _t(e)}var Qe=class n{constructor(e,t,s,i,r,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new n(e,0,X.min(),X.min(),X.min(),ot.empty(),0)}static newFoundDocument(e,t,s,i){return new n(e,1,t,X.min(),s,i,0)}static newNoDocument(e,t){return new n(e,2,t,X.min(),X.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,X.min(),X.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Fn=class{constructor(e,t){this.position=e,this.inclusive=t}};function sy(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){let r=e[i],o=n.position[i];if(r.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),t.key):s=$n(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function iy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qt(n.position[t],e.position[t]))return!1;return!0}var Ti=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function $0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Ka=class{},oe=class n extends Ka{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new vd(e,t,s):t==="array-contains"?new bd(e,s):t==="in"?new Qa(e,s):t==="not-in"?new Ed(e,s):t==="array-contains-any"?new Id(e,s):new n(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new _d(e,s):new wd(e,s)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison($n(t,this.value)):t!==null&&Is(this.value)===Is(t)&&this.matchesComparison($n(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},he=class n extends Ka{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Si(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Si(n){return n.op==="and"}function gd(n){return n.op==="or"}function ef(n){return ov(n)&&Si(n)}function ov(n){for(let e of n.filters)if(e instanceof he)return!1;return!0}function yd(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+Ii(n.value);if(ef(n))return n.filters.map(e=>yd(e)).join(",");{let e=n.filters.map(t=>yd(t)).join(",");return`${n.op}(${e})`}}function av(n,e){return n instanceof oe?function(s,i){return i instanceof oe&&s.op===i.op&&s.field.isEqual(i.field)&&Qt(s.value,i.value)}(n,e):n instanceof he?function(s,i){return i instanceof he&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,c)=>r&&av(o,i.filters[c]),!0):!1}(n,e):void K()}function cv(n,e){let t=n.filters.concat(e);return he.create(t,n.op)}function lv(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Ii(t.value)}`}(n):n instanceof he?function(t){return t.op.toString()+" {"+t.getFilters().map(lv).join(" ,")+"}"}(n):"Filter"}var vd=class extends oe{constructor(e,t,s){super(e,t,s),this.key=G.fromName(s.referenceValue)}matches(e){let t=G.comparator(e.key,this.key);return this.matchesComparison(t)}},_d=class extends oe{constructor(e,t){super(e,"in",t),this.keys=uv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},wd=class extends oe{constructor(e,t){super(e,"not-in",t),this.keys=uv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function uv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>G.fromName(s.referenceValue))}var bd=class extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Gr(t)&&qr(t.arrayValue,this.value)}},Qa=class extends oe{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&qr(this.value.arrayValue,t)}},Ed=class extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!qr(this.value.arrayValue,t)}},Id=class extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Gr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>qr(this.value.arrayValue,s))}};var Td=class{constructor(e,t=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.ue=null}};function Sd(n,e=null,t=[],s=[],i=null,r=null,o=null){return new Td(n,e,t,s,i,r,o)}function Ts(n){let e=te(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>yd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Ii(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Ii(s)).join(",")),e.ue=t}return e.ue}function ro(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!av(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!iy(n.startAt,e.startAt)&&iy(n.endAt,e.endAt)}function Ya(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ja(n,e){return n.filters.filter(t=>t instanceof oe&&t.field.isEqual(e))}function ry(n,e,t){let s=$a,i=!0;for(let r of Ja(n,e)){let o=$a,c=!0;switch(r.op){case"<":case"<=":o=M0(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,c=!1;break;case"!=":case"not-in":o=$a}ty({value:s,inclusive:i},{value:o,inclusive:c})<0&&(s=o,i=c)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){let o=t.position[r];ty({value:s,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}function oy(n,e,t){let s=Ln,i=!0;for(let r of Ja(n,e)){let o=Ln,c=!0;switch(r.op){case">=":case">":o=V0(r.value),c=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,c=!1;break;case"!=":case"not-in":o=Ln}ny({value:s,inclusive:i},{value:o,inclusive:c})>0&&(s=o,i=c)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){let o=t.position[r];ny({value:s,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}var Ss=class{constructor(e,t=null,s=[],i=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function F0(n,e,t,s,i,r,o,c){return new Ss(n,e,t,s,i,r,o,c)}function oo(n){return new Ss(n)}function ay(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dv(n){return n.collectionGroup!==null}function xr(n){let e=te(n);if(e.ce===null){e.ce=[];let t=new Set;for(let r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());let s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ge(Ve.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Ti(r,s))}),t.has(Ve.keyField().canonicalString())||e.ce.push(new Ti(Ve.keyField(),s))}return e.ce}function Nt(n){let e=te(n);return e.le||(e.le=U0(e,xr(n))),e.le}function U0(n,e){if(n.limitType==="F")return Sd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let r=i.dir==="desc"?"asc":"desc";return new Ti(i.field,r)});let t=n.endAt?new Fn(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Fn(n.startAt.position,n.startAt.inclusive):null;return Sd(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ad(n,e){let t=n.filters.concat([e]);return new Ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Rd(n,e,t){return new Ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fc(n,e){return ro(Nt(n),Nt(e))&&n.limitType===e.limitType}function hv(n){return`${Ts(Nt(n))}|lt:${n.limitType}`}function di(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>lv(i)).join(", ")}]`),Vc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>Ii(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>Ii(i)).join(",")),`Target(${s})`}(Nt(n))}; limitType=${n.limitType})`}function ao(n,e){return e.isFoundDocument()&&function(s,i){let r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):G.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(let r of xr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(let r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(o,c,l){let u=sy(o,c,l);return o.inclusive?u<=0:u<0}(s.startAt,xr(s),i)||s.endAt&&!function(o,c,l){let u=sy(o,c,l);return o.inclusive?u>=0:u>0}(s.endAt,xr(s),i))}(n,e)}function B0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fv(n){return(e,t)=>{let s=!1;for(let i of xr(n)){let r=q0(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function q0(n,e,t){let s=n.field.isKeyField()?G.comparator(e.key,t.key):function(r,o,c){let l=o.data.field(r),u=c.data.field(r);return l!==null&&u!==null?$n(l,u):K()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}var Yt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(let[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){let s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(t,s)=>{for(let[i,r]of s)e(i,r)})}isEmpty(){return nv(this.inner)}size(){return this.innerSize}};var j0=new Se(G.comparator);function wt(){return j0}var pv=new Se(G.comparator);function Nr(...n){let e=pv;for(let t of n)e=e.insert(t.key,t);return e}function mv(n){let e=pv;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Wt(){return Lr()}function gv(){return Lr()}function Lr(){return new Yt(n=>n.toString(),(n,e)=>n.isEqual(e))}var G0=new Se(G.comparator),H0=new ge(G.comparator);function se(...n){let e=H0;for(let t of n)e=e.add(t);return e}var z0=new ge(ne);function W0(){return z0}function tf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(e)?"-0":e}}function yv(n){return{integerValue:""+n}}function vv(n,e){return m0(e)?yv(e):tf(n,e)}var Ai=class{constructor(){this._=void 0}};function K0(n,e,t){return n instanceof As?function(i,r){let o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Xh(r)&&(r=Zh(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof pn?wv(n,e):n instanceof mn?bv(n,e):function(i,r){let o=_v(i,r),c=cy(o)+cy(i.Pe);return md(o)&&md(i.Pe)?yv(c):tf(i.serializer,c)}(n,e)}function Q0(n,e,t){return n instanceof pn?wv(n,e):n instanceof mn?bv(n,e):t}function _v(n,e){return n instanceof Un?function(s){return md(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}var As=class extends Ai{},pn=class extends Ai{constructor(e){super(),this.elements=e}};function wv(n,e){let t=Ev(e);for(let s of n.elements)t.some(i=>Qt(i,s))||t.push(s);return{arrayValue:{values:t}}}var mn=class extends Ai{constructor(e){super(),this.elements=e}};function bv(n,e){let t=Ev(e);for(let s of n.elements)t=t.filter(i=>!Qt(i,s));return{arrayValue:{values:t}}}var Un=class extends Ai{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function cy(n){return Ee(n.integerValue||n.doubleValue)}function Ev(n){return Gr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Ri=class{constructor(e,t){this.field=e,this.transform=t}};function Y0(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof pn&&i instanceof pn||s instanceof mn&&i instanceof mn?_i(s.elements,i.elements,Qt):s instanceof Un&&i instanceof Un?Qt(s.Pe,i.Pe):s instanceof As&&i instanceof As}(n.transform,e.transform)}var Cd=class{constructor(e,t){this.version=e,this.transformResults=t}},et=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Ua(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Ci=class{};function Iv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Rs(n.key,et.none()):new Bn(n.key,n.data,et.none());{let t=n.data,s=ot.empty(),i=new ge(Ve.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Mt(n.key,s,new _t(i.toArray()),et.none())}}function J0(n,e,t){n instanceof Bn?function(i,r,o){let c=i.value.clone(),l=uy(i.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Mt?function(i,r,o){if(!Ua(i.precondition,r))return void r.convertToUnknownDocument(o.version);let c=uy(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Tv(i)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Mr(n,e,t,s){return n instanceof Bn?function(r,o,c,l){if(!Ua(r.precondition,o))return c;let u=r.value.clone(),h=dy(r.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Mt?function(r,o,c,l){if(!Ua(r.precondition,o))return c;let u=dy(r.fieldTransforms,l,o),h=o.data;return h.setAll(Tv(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(n,e,t,s):function(r,o,c){return Ua(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function X0(n,e){let t=null;for(let s of n.fieldTransforms){let i=e.data.field(s.field),r=_v(s.transform,i||null);r!=null&&(t===null&&(t=ot.empty()),t.set(s.field,r))}return t||null}function ly(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&_i(s,i,(r,o)=>Y0(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Bn=class extends Ci{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Mt=class extends Ci{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}};function Tv(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let s=n.data.field(t);e.set(t,s)}}),e}function uy(n,e,t){let s=new Map;Y(n.length===t.length);for(let i=0;i<t.length;i++){let r=n[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,Q0(o,c,t[i]))}return s}function dy(n,e,t){let s=new Map;for(let i of n){let r=i.transform,o=t.data.field(i.field);s.set(i.field,K0(r,o,e))}return s}var Rs=class extends Ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Xa=class extends Ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Hr=class{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){let s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let r=this.mutations[i];r.key.isEqual(e.key)&&J0(r,e,s[i])}}applyToLocalView(e,t){for(let s of this.baseMutations)s.key.isEqual(e.key)&&(t=Mr(s,e,t,this.localWriteTime));for(let s of this.mutations)s.key.isEqual(e.key)&&(t=Mr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let s=gv();return this.mutations.forEach(i=>{let r=e.get(i.key),o=r.overlayedDocument,c=this.applyToLocalView(o,r.mutatedFields);c=t.has(i.key)?null:c;let l=Iv(o,c);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(t,s)=>ly(t,s))&&_i(this.baseMutations,e.baseMutations,(t,s)=>ly(t,s))}},kd=class n{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){Y(e.mutations.length===s.length);let i=function(){return G0}(),r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new n(e,t,s,i)}};var zr=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Pd=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Oe,ae;function Z0(n){switch(n){default:return K();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Sv(n){if(n===void 0)return rt("GRPC error has no .code"),L.UNKNOWN;switch(n){case Oe.OK:return L.OK;case Oe.CANCELLED:return L.CANCELLED;case Oe.UNKNOWN:return L.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return L.INTERNAL;case Oe.UNAVAILABLE:return L.UNAVAILABLE;case Oe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Oe.NOT_FOUND:return L.NOT_FOUND;case Oe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Oe.ABORTED:return L.ABORTED;case Oe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Oe.DATA_LOSS:return L.DATA_LOSS;default:return K()}}(ae=Oe||(Oe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";var hy=null;function eS(){return new TextEncoder}var tS=new Nn([4294967295,4294967295],0);function fy(n){let e=eS().encode(n),t=new Gu;return t.update(e),new Uint8Array(t.digest())}function py(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Nn([t,s],0),new Nn([i,r],0)]}var Nd=class n{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new vs(`Invalid padding: ${t}`);if(s<0)throw new vs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new vs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Nn.fromNumber(this.Ie)}Ee(e,t,s){let i=e.add(t.multiply(Nn.fromNumber(s)));return i.compare(tS)===1&&(i=new Nn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=fy(e),[s,i]=py(t);for(let r=0;r<this.hashCount;r++){let o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(e,t,s){let i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new n(r,i,t);return s.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;let t=fy(e),[s,i]=py(t);for(let r=0;r<this.hashCount;r++){let o=this.Ee(s,i,r);this.Ae(o)}}Ae(e){let t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}},vs=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Za=class n{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){let i=new Map;return i.set(e,Wr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new n(X.min(),i,new Se(ne),wt(),se())}},Wr=class n{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new n(s,t,se(),se(),se())}};var yi=class{constructor(e,t,s,i){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=i}},ec=class{constructor(e,t){this.targetId=e,this.me=t}},tc=class{constructor(e,t,s=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}},nc=class{constructor(){this.fe=0,this.ge=gy(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),t=se(),s=se();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:K()}}),new Wr(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=gy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Dd=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=wt(),this.qe=my(),this.Qe=new Se(ne)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,s=e.me.count,i=this.Je(t);if(i){let r=i.target;if(Ya(r))if(s===0){let o=new G(r.path);this.Ue(t,o,Qe.newNoDocument(o,X.min()))}else Y(s===1);else{let o=this.Ye(t);if(o!==s){let c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);let u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}hy?.et(function(h,p,m,E,R){var P,S,M,F,V,H;let ee={localCacheCount:h,existenceFilterCount:p.count,databaseId:m.database,projectId:m.projectId},W=p.unchangedNames;return W&&(ee.bloomFilter={applied:R===0,hashCount:(P=W?.hashCount)!==null&&P!==void 0?P:0,bitmapLength:(F=(M=(S=W?.bits)===null||S===void 0?void 0:S.bitmap)===null||M===void 0?void 0:M.length)!==null&&F!==void 0?F:0,padding:(H=(V=W?.bits)===null||V===void 0?void 0:V.padding)!==null&&H!==void 0?H:0,mightContain:w=>{var _;return(_=E?.mightContain(w))!==null&&_!==void 0&&_}}),ee}(o,e.me,this.Le.tt(),c,l))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t,o,c;try{o=Vn(s).toUint8Array()}catch(l){if(l instanceof Wa)return Vr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nd(o,i,r)}catch(l){return Vr(l instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){let s=this.Le.getRemoteKeysForTarget(t),i=0;return s.forEach(r=>{let o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,r,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((r,o)=>{let c=this.Je(o);if(c){if(r.current&&Ya(c.target)){let l=new G(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Qe.newNoDocument(l,e))}r.be&&(t.set(o,r.ve()),r.Ce())}});let s=se();this.qe.forEach((r,o)=>{let c=!0;o.forEachWhile(l=>{let u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));let i=new Za(e,t,this.Qe,this.ke,s);return this.ke=wt(),this.qe=my(),this.Qe=new Se(ne),i}$e(e,t){if(!this.ze(e))return;let s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new nc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ge(ne),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new nc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function my(){return new Se(G.comparator)}function gy(){return new Se(G.comparator)}var nS={asc:"ASCENDING",desc:"DESCENDING"},sS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iS={and:"AND",or:"OR"},Od=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function xd(n,e){return n.useProto3Json||Vc(e)?e:{value:e}}function ki(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Av(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rS(n,e){return ki(n,e.toTimestamp())}function ct(n){return Y(!!n),X.fromTimestamp(function(t){let s=fn(t);return new ke(s.seconds,s.nanos)}(n))}function nf(n,e){return Ld(n,e).canonicalString()}function Ld(n,e){let t=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Rv(n){let e=pe.fromString(n);return Y(Mv(e)),e}function sc(n,e){return nf(n.databaseId,e.path)}function bs(n,e){let t=Rv(e);if(t.get(1)!==n.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(Pv(t))}function Cv(n,e){return nf(n.databaseId,e)}function kv(n){let e=Rv(n);return e.length===4?pe.emptyPath():Pv(e)}function Md(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pv(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function yy(n,e,t){return{name:sc(n,e),fields:t.value.mapValue.fields}}function oS(n,e,t){let s=bs(n,e.name),i=ct(e.updateTime),r=e.createTime?ct(e.createTime):X.min(),o=new ot({mapValue:{fields:e.fields}}),c=Qe.newFoundDocument(s,i,r,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function aS(n,e){let t;if("targetChange"in e){e.targetChange;let s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(Y(h===void 0||typeof h=="string"),$e.fromBase64String(h||"")):(Y(h===void 0||h instanceof Buffer||h instanceof Uint8Array),$e.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){let h=u.code===void 0?L.UNKNOWN:Sv(u.code);return new q(h,u.message||"")}(o);t=new tc(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;let s=e.documentChange;s.document,s.document.name,s.document.updateTime;let i=bs(n,s.document.name),r=ct(s.document.updateTime),o=s.document.createTime?ct(s.document.createTime):X.min(),c=new ot({mapValue:{fields:s.document.fields}}),l=Qe.newFoundDocument(i,r,o,c),u=s.targetIds||[],h=s.removedTargetIds||[];t=new yi(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;let s=e.documentDelete;s.document;let i=bs(n,s.document),r=s.readTime?ct(s.readTime):X.min(),o=Qe.newNoDocument(i,r),c=s.removedTargetIds||[];t=new yi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;let s=e.documentRemove;s.document;let i=bs(n,s.document),r=s.removedTargetIds||[];t=new yi([],r,i,null)}else{if(!("filter"in e))return K();{e.filter;let s=e.filter;s.targetId;let{count:i=0,unchangedNames:r}=s,o=new Pd(i,r),c=s.targetId;t=new ec(c,o)}}return t}function ic(n,e){let t;if(e instanceof Bn)t={update:yy(n,e.key,e.value)};else if(e instanceof Rs)t={delete:sc(n,e.key)};else if(e instanceof Mt)t={update:yy(n,e.key,e.data),updateMask:fS(e.fieldMask)};else{if(!(e instanceof Xa))return K();t={verify:sc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,o){let c=o.transform;if(c instanceof As)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof mn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Un)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw K()}(0,s))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:rS(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(n,e.precondition)),t}function Vd(n,e){let t=e.currentDocument?function(r){return r.updateTime!==void 0?et.updateTime(ct(r.updateTime)):r.exists!==void 0?et.exists(r.exists):et.none()}(e.currentDocument):et.none(),s=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let l=null;if("setToServerValue"in c)Y(c.setToServerValue==="REQUEST_TIME"),l=new As;else if("appendMissingElements"in c){let h=c.appendMissingElements.values||[];l=new pn(h)}else if("removeAllFromArray"in c){let h=c.removeAllFromArray.values||[];l=new mn(h)}else"increment"in c?l=new Un(o,c.increment):K();let u=Ve.fromServerFormat(c.fieldPath);return new Ri(u,l)}(n,i)):[];if(e.update){e.update.name;let i=bs(n,e.update.name),r=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){let o=function(l){let u=l.fieldPaths||[];return new _t(u.map(h=>Ve.fromServerFormat(h)))}(e.updateMask);return new Mt(i,r,o,t,s)}return new Bn(i,r,t,s)}if(e.delete){let i=bs(n,e.delete);return new Rs(i,t)}if(e.verify){let i=bs(n,e.verify);return new Xa(i,t)}return K()}function cS(n,e){return n&&n.length>0?(Y(e!==void 0),n.map(t=>function(i,r){let o=i.updateTime?ct(i.updateTime):ct(r);return o.isEqual(X.min())&&(o=ct(r)),new Cd(o,i.transformResults||[])}(t,e))):[]}function Nv(n,e){return{documents:[Cv(n,e.path)]}}function Dv(n,e){let t={structuredQuery:{}},s=e.path,i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Cv(n,i);let r=function(u){if(u.length!==0)return Lv(he.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);let o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:hi(m.field),direction:uS(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);let c=xd(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:i}}function Ov(n){let e=kv(n.parent),t=n.structuredQuery,s=t.from?t.from.length:0,i=null;if(s>0){Y(s===1);let h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];t.where&&(r=function(p){let m=xv(p);return m instanceof he&&ef(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(R){return new Ti(fi(R.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Vc(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(p){let m=!!p.before,E=p.values||[];return new Fn(E,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){let m=!p.before,E=p.values||[];return new Fn(E,m)}(t.endAt)),F0(e,i,o,r,c,"F",l,u)}function lS(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xv(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let s=fi(t.unaryFilter.field);return oe.create(s,"==",{doubleValue:NaN});case"IS_NULL":let i=fi(t.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=fi(t.unaryFilter.field);return oe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=fi(t.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return oe.create(fi(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return he.create(t.compositeFilter.filters.map(s=>xv(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function uS(n){return nS[n]}function dS(n){return sS[n]}function hS(n){return iS[n]}function hi(n){return{fieldPath:n.canonicalString()}}function fi(n){return Ve.fromServerFormat(n.fieldPath)}function Lv(n){return n instanceof oe?function(t){if(t.op==="=="){if(ey(t.value))return{unaryFilter:{field:hi(t.field),op:"IS_NAN"}};if(Zg(t.value))return{unaryFilter:{field:hi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ey(t.value))return{unaryFilter:{field:hi(t.field),op:"IS_NOT_NAN"}};if(Zg(t.value))return{unaryFilter:{field:hi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hi(t.field),op:dS(t.op),value:t.value}}}(n):n instanceof he?function(t){let s=t.getFilters().map(i=>Lv(i));return s.length===1?s[0]:{compositeFilter:{op:hS(t.op),filters:s}}}(n):K()}function fS(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Mv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Pi=class n{constructor(e,t,s,i,r=X.min(),o=X.min(),c=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var rc=class{constructor(e){this.ct=e}};function pS(n,e){let t;if(e.document)t=oS(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let s=G.fromSegments(e.noDocument.path),i=ks(e.noDocument.readTime);t=Qe.newNoDocument(s,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{let s=G.fromSegments(e.unknownDocument.path),i=ks(e.unknownDocument.version);t=Qe.newUnknownDocument(s,i)}}return e.readTime&&t.setReadTime(function(i){let r=new ke(i[0],i[1]);return X.fromTimestamp(r)}(e.readTime)),t}function vy(n,e){let t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:oc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,o){return{name:sc(r,o.key),fields:o.data.value.mapValue.fields,updateTime:ki(r,o.version.toTimestamp()),createTime:ki(r,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:Cs(e.version)};else{if(!e.isUnknownDocument())return K();s.unknownDocument={path:t.path.toArray(),version:Cs(e.version)}}return s}function oc(n){let e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Cs(n){let e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ks(n){let e=new ke(n.seconds,n.nanoseconds);return X.fromTimestamp(e)}function ms(n,e){let t=(e.baseMutations||[]).map(r=>Vd(n.ct,r));for(let r=0;r<e.mutations.length-1;++r){let o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){let c=e.mutations[r+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}let s=e.mutations.map(r=>Vd(n.ct,r)),i=ke.fromMillis(e.localWriteTimeMs);return new Hr(e.batchId,i,t,s)}function Dr(n){let e=ks(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ks(n.lastLimboFreeSnapshotVersion):X.min(),s;return s=function(r){return r.documents!==void 0}(n.query)?function(r){return Y(r.documents.length===1),Nt(oo(kv(r.documents[0])))}(n.query):function(r){return Nt(Ov(r))}(n.query),new Pi(s,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,$e.fromBase64String(n.resumeToken))}function Vv(n,e){let t=Cs(e.snapshotVersion),s=Cs(e.lastLimboFreeSnapshotVersion),i;i=Ya(e.target)?Nv(n.ct,e.target):Dv(n.ct,e.target)._t;let r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ts(e.target),readTime:t,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:i}}function $v(n){let e=Ov({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rd(e,e.limit,"L"):e}function Yu(n,e){return new zr(e.largestBatchId,Vd(n.ct,e.overlayMutation))}function _y(n,e){let t=e.path.lastSegment();return[n,at(e.path.popLast()),t]}function wy(n,e,t,s){return{indexId:n,uid:e,sequenceNumber:t,readTime:Cs(s.readTime),documentKey:at(s.documentKey.path),largestBatchId:s.largestBatchId}}var $d=class{getBundleMetadata(e,t){return by(e).get(t).next(s=>{if(s)return function(r){return{id:r.bundleId,createTime:ks(r.createTime),version:r.version}}(s)})}saveBundleMetadata(e,t){return by(e).put(function(i){return{bundleId:i.id,createTime:Cs(ct(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ey(e).get(t).next(s=>{if(s)return function(r){return{name:r.name,query:$v(r.bundledQuery),readTime:ks(r.readTime)}}(s)})}saveNamedQuery(e,t){return Ey(e).put(function(i){return{name:i.name,readTime:Cs(ct(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function by(n){return Fe(n,"bundles")}function Ey(n){return Fe(n,"namedQueries")}var ac=class n{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){let s=t.uid||"";return new n(e,s)}getOverlay(e,t){return Rr(e).get(_y(this.userId,t)).next(s=>s?Yu(this.serializer,s):null)}getOverlays(e,t){let s=Wt();return N.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){let i=[];return s.forEach((r,o)=>{let c=new zr(t,o);i.push(this.ht(e,c))}),N.waitFor(i)}removeOverlaysForBatchId(e,t,s){let i=new Set;t.forEach(o=>i.add(at(o.getCollectionPath())));let r=[];return i.forEach(o=>{let c=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);r.push(Rr(e).j("collectionPathOverlayIndex",c))}),N.waitFor(r)}getOverlaysForCollection(e,t,s){let i=Wt(),r=at(t),o=IDBKeyRange.bound([this.userId,r,s],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Rr(e).U("collectionPathOverlayIndex",o).next(c=>{for(let l of c){let u=Yu(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,s,i){let r=Wt(),o,c=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Rr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,u,h)=>{let p=Yu(this.serializer,u);r.size()<i||p.largestBatchId===o?(r.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>r)}ht(e,t){return Rr(e).put(function(i,r,o){let[c,l,u]=_y(r,o.mutation.key);return{userId:r,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ic(i.ct,o.mutation)}}(this.serializer,this.userId,t))}};function Rr(n){return Fe(n,"documentOverlays")}var Fd=class{Pt(e){return Fe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{let s=t?.value;return s?$e.fromUint8Array(s):$e.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}};var hn=class{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ee(e.integerValue));else if("doubleValue"in e){let s=Ee(e.doubleValue);isNaN(s)?this.dt(t,13):(this.dt(t,15),Fr(s)?t.At(0):t.At(s))}else if("timestampValue"in e){let s=e.timestampValue;this.dt(t,20),typeof s=="string"&&(s=fn(s)),t.Rt(`${s.seconds||""}`),t.At(s.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Vn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let s=e.geoPointValue;this.dt(t,45),t.At(s.latitude||0),t.At(s.longitude||0)}else"mapValue"in e?sv(e)?this.dt(t,Number.MAX_SAFE_INTEGER):$c(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):K()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let s=e.fields||{};this.dt(t,55);for(let i of Object.keys(s))this.Vt(i,t),this.Tt(s[i],t)}wt(e,t){var s,i;let r=e.fields||{};this.dt(t,53);let o="value",c=((i=(s=r[o].arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(Ee(c)),this.Vt(o,t),this.Tt(r[o],t)}bt(e,t){let s=e.values||[];this.dt(t,50);for(let i of s)this.Tt(i,t)}yt(e,t){this.dt(t,37),G.fromName(e).path.forEach(s=>{this.dt(t,60),this.Dt(s,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}};hn.vt=new hn;function mS(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Iy(n){let e=64-function(s){let i=0;for(let r=0;r<8;++r){let o=mS(255&s[r]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}var Ud=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){let t=e[Symbol.iterator](),s=t.next();for(;!s.done;)this.Ft(s.value),s=t.next();this.Mt()}xt(e){let t=e[Symbol.iterator](),s=t.next();for(;!s.done;)this.Ot(s.value),s=t.next();this.Nt()}Lt(e){for(let t of e){let s=t.charCodeAt(0);if(s<128)this.Ft(s);else if(s<2048)this.Ft(960|s>>>6),this.Ft(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s);else{let i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(let t of e){let s=t.charCodeAt(0);if(s<128)this.Ot(s);else if(s<2048)this.Ot(960|s>>>6),this.Ot(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s);else{let i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){let t=this.qt(e),s=Iy(t);this.Qt(1+s),this.buffer[this.position++]=255&s;for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){let t=this.qt(e),s=Iy(t);this.Qt(1+s),this.buffer[this.position++]=~(255&s);for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){let t=function(r){let o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,r,!1),new Uint8Array(o.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let i=1;i<t.length;++i)t[i]^=s?255:0;return t}Ft(e){let t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){let t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){let t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);let i=new Uint8Array(s);i.set(this.buffer),this.buffer=i}},Bd=class{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}},qd=class{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}},gs=class{constructor(){this.jt=new Ud,this.Ht=new Bd(this.jt),this.Jt=new qd(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}};var ys=class n{constructor(e,t,s,i){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=i}Zt(){let e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new n(this.indexId,this.documentKey,this.arrayValue,s)}};function Dn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Ty(n.arrayValue,e.arrayValue),t!==0?t:(t=Ty(n.directionalValue,e.directionalValue),t!==0?t:G.comparator(n.documentKey,e.documentKey)))}function Ty(n,e){for(let t=0;t<n.length&&t<e.length;++t){let s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}var cc=class{constructor(e){this.Xt=new ge((t,s)=>Ve.comparator(t.field,s.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(let t of e.filters){let s=t;s.isInequality()?this.Xt=this.Xt.add(s):this.tn.push(s)}}get nn(){return this.Xt.size>1}rn(e){if(Y(e.collectionGroup===this.collectionId),this.nn)return!1;let t=cd(e);if(t!==void 0&&!this.sn(t))return!1;let s=fs(e),i=new Set,r=0,o=0;for(;r<s.length&&this.sn(s[r]);++r)i=i.add(s[r].fieldPath.canonicalString());if(r===s.length)return!0;if(this.Xt.size>0){let c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){let l=s[r];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++r}for(;r<s.length;++r){let c=s[r];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ge(Ve.comparator),t=[];for(let s of this.tn)if(!s.field.isKeyField())if(s.op==="array-contains"||s.op==="array-contains-any")t.push(new gi(s.field,2));else{if(e.has(s.field))continue;e=e.add(s.field),t.push(new gi(s.field,0))}for(let s of this.en)s.field.isKeyField()||e.has(s.field)||(e=e.add(s.field),t.push(new gi(s.field,s.dir==="asc"?0:1)));return new wi(wi.UNKNOWN_ID,this.collectionId,t,$r.empty())}sn(e){for(let t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function Fv(n){var e,t;if(Y(n instanceof oe||n instanceof he),n instanceof oe){if(n instanceof Qa){let i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(r=>oe.create(n.field,"==",r)))||[];return he.create(i,"or")}return n}let s=n.filters.map(i=>Fv(i));return he.create(s,n.op)}function gS(n){if(n.getFilters().length===0)return[];let e=Hd(Fv(n));return Y(Uv(e)),jd(e)||Gd(e)?[e]:e.getFilters()}function jd(n){return n instanceof oe}function Gd(n){return n instanceof he&&ef(n)}function Uv(n){return jd(n)||Gd(n)||function(t){if(t instanceof he&&gd(t)){for(let s of t.getFilters())if(!jd(s)&&!Gd(s))return!1;return!0}return!1}(n)}function Hd(n){if(Y(n instanceof oe||n instanceof he),n instanceof oe)return n;if(n.filters.length===1)return Hd(n.filters[0]);let e=n.filters.map(s=>Hd(s)),t=he.create(e,n.op);return t=lc(t),Uv(t)?t:(Y(t instanceof he),Y(Si(t)),Y(t.filters.length>1),t.filters.reduce((s,i)=>sf(s,i)))}function sf(n,e){let t;return Y(n instanceof oe||n instanceof he),Y(e instanceof oe||e instanceof he),t=n instanceof oe?e instanceof oe?function(i,r){return he.create([i,r],"and")}(n,e):Sy(n,e):e instanceof oe?Sy(e,n):function(i,r){if(Y(i.filters.length>0&&r.filters.length>0),Si(i)&&Si(r))return cv(i,r.getFilters());let o=gd(i)?i:r,c=gd(i)?r:i,l=o.filters.map(u=>sf(u,c));return he.create(l,"or")}(n,e),lc(t)}function Sy(n,e){if(Si(e))return cv(e,n.getFilters());{let t=e.filters.map(s=>sf(n,s));return he.create(t,"or")}}function lc(n){if(Y(n instanceof oe||n instanceof he),n instanceof oe)return n;let e=n.getFilters();if(e.length===1)return lc(e[0]);if(ov(n))return n;let t=e.map(i=>lc(i)),s=[];return t.forEach(i=>{i instanceof oe?s.push(i):i instanceof he&&(i.op===n.op?s.push(...i.filters):s.push(i))}),s.length===1?s[0]:he.create(s,n.op)}var zd=class{constructor(){this.un=new Kr}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Dt.min())}updateCollectionGroup(e,t,s){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}},Kr=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new ge(pe.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){let t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ge(pe.comparator)).toArray()}};var Oa=new Uint8Array(0),Wd=class{constructor(e,t){this.databaseId=t,this.cn=new Kr,this.ln=new Yt(s=>Ts(s),(s,i)=>ro(s,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){let s=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});let r={collectionId:s,parent:at(i)};return Ay(e).put(r)}return N.resolve()}getCollectionParents(e,t){let s=[],i=IDBKeyRange.bound([t,""],[Ky(t),""],!1,!0);return Ay(e).U(i).next(r=>{for(let o of r){if(o.collectionId!==t)break;s.push(zt(o.parent))}return s})}addFieldIndex(e,t){let s=Cr(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;let r=s.add(i);if(t.indexState){let o=ci(e);return r.next(c=>{o.put(wy(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){let s=Cr(e),i=ci(e),r=ai(e);return s.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=Cr(e),s=ai(e),i=ci(e);return t.j().next(()=>s.j()).next(()=>i.j())}createTargetIndexes(e,t){return N.forEach(this.hn(t),s=>this.getIndexType(e,s).next(i=>{if(i===0||i===1){let r=new cc(s).an();if(r!=null)return this.addFieldIndex(e,r)}}))}getDocumentsMatchingTarget(e,t){let s=ai(e),i=!0,r=new Map;return N.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{i&&(i=!!c),r.set(o,c)})).next(()=>{if(i){let o=se(),c=[];return N.forEach(r,(l,u)=>{$("IndexedDbIndexManager",`Using index ${function(V){return`id=${V.indexId}|cg=${V.collectionGroup}|f=${V.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(l)} to execute ${Ts(t)}`);let h=function(V,H){let ee=cd(H);if(ee===void 0)return null;for(let W of Ja(V,ee.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(u,l),p=function(V,H){let ee=new Map;for(let W of fs(H))for(let w of Ja(V,W.fieldPath))switch(w.op){case"==":case"in":ee.set(W.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return ee.set(W.fieldPath.canonicalString(),w.value),Array.from(ee.values())}return null}(u,l),m=function(V,H){let ee=[],W=!0;for(let w of fs(H)){let _=w.kind===0?ry(V,w.fieldPath,V.startAt):oy(V,w.fieldPath,V.startAt);ee.push(_.value),W&&(W=_.inclusive)}return new Fn(ee,W)}(u,l),E=function(V,H){let ee=[],W=!0;for(let w of fs(H)){let _=w.kind===0?oy(V,w.fieldPath,V.endAt):ry(V,w.fieldPath,V.endAt);ee.push(_.value),W&&(W=_.inclusive)}return new Fn(ee,W)}(u,l),R=this.In(l,u,m),P=this.In(l,u,E),S=this.Tn(l,u,p),M=this.En(l.indexId,h,R,m.inclusive,P,E.inclusive,S);return N.forEach(M,F=>s.G(F,t.limit).next(V=>{V.forEach(H=>{let ee=G.fromSegments(H.documentKey);o.has(ee)||(o=o.add(ee),c.push(ee))})}))}).next(()=>c)}return N.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=gS(he.create(e.filters,"and")).map(s=>Sd(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,s,i,r,o,c){let l=(t!=null?t.length:1)*Math.max(s.length,r.length),u=l/(t!=null?t.length:1),h=[];for(let p=0;p<l;++p){let m=t?this.dn(t[p/u]):Oa,E=this.An(e,m,s[p%u],i),R=this.Rn(e,m,r[p%u],o),P=c.map(S=>this.An(e,m,S,!0));h.push(...this.createRange(E,R,P))}return h}An(e,t,s,i){let r=new ys(e,G.empty(),t,s);return i?r:r.Zt()}Rn(e,t,s,i){let r=new ys(e,G.empty(),t,s);return i?r.Zt():r}Pn(e,t){let s=new cc(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(r=>{let o=null;for(let c of r)s.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let s=2,i=this.hn(t);return N.forEach(i,r=>this.Pn(e,r).next(o=>{o?s!==0&&o.fields.length<function(l){let u=new ge(Ve.comparator),h=!1;for(let p of l.filters)for(let m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:u=u.add(m.field));for(let p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(h?1:0)}(r)&&(s=1):s=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&s===2?1:s)}Vn(e,t){let s=new gs;for(let i of fs(e)){let r=t.data.field(i.fieldPath);if(r==null)return null;let o=s.Yt(i.kind);hn.vt.It(r,o)}return s.zt()}dn(e){let t=new gs;return hn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){let s=new gs;return hn.vt.It(jr(this.databaseId,t),s.Yt(function(r){let o=fs(r);return o.length===0?0:o[o.length-1].kind}(e))),s.zt()}Tn(e,t,s){if(s===null)return[];let i=[];i.push(new gs);let r=0;for(let o of fs(e)){let c=s[r++];for(let l of i)if(this.fn(t,o.fieldPath)&&Gr(c))i=this.gn(i,o,c);else{let u=l.Yt(o.kind);hn.vt.It(c,u)}}return this.pn(i)}In(e,t,s){return this.Tn(e,t,s.position)}pn(e){let t=[];for(let s=0;s<e.length;++s)t[s]=e[s].zt();return t}gn(e,t,s){let i=[...e],r=[];for(let o of s.arrayValue.values||[])for(let c of i){let l=new gs;l.seed(c.zt()),hn.vt.It(o,l.Yt(t.kind)),r.push(l)}return r}fn(e,t){return!!e.filters.find(s=>s instanceof oe&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){let s=Cr(e),i=ci(e);return(t?s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.U()).next(r=>{let o=[];return N.forEach(r,c=>i.get([c.indexId,this.uid]).next(l=>{o.push(function(h,p){let m=p?new $r(p.sequenceNumber,new Dt(ks(p.readTime),new G(zt(p.documentKey)),p.largestBatchId)):$r.empty(),E=h.fields.map(([R,P])=>new gi(Ve.fromServerFormat(R),P));return new wi(h.indexId,h.collectionGroup,E,m)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,i)=>{let r=s.indexState.sequenceNumber-i.indexState.sequenceNumber;return r!==0?r:ne(s.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){let i=Cr(e),r=ci(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>N.forEach(c,l=>r.put(wy(l.indexId,this.uid,o,s)))))}updateIndexEntries(e,t){let s=new Map;return N.forEach(t,(i,r)=>{let o=s.get(i.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(s.set(i.collectionGroup,c),N.forEach(c,l=>this.wn(e,i,l).next(u=>{let h=this.Sn(r,l);return u.isEqual(h)?N.resolve():this.bn(e,r,l,u,h)}))))})}Dn(e,t,s,i){return ai(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(s,t.key),documentKey:t.key.path.toArray()})}vn(e,t,s,i){return ai(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(s,t.key),t.key.path.toArray()])}wn(e,t,s){let i=ai(e),r=new ge(Dn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.mn(s,t)])},(o,c)=>{r=r.add(new ys(s.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>r)}Sn(e,t){let s=new ge(Dn),i=this.Vn(t,e);if(i==null)return s;let r=cd(t);if(r!=null){let o=e.data.field(r.fieldPath);if(Gr(o))for(let c of o.arrayValue.values||[])s=s.add(new ys(t.indexId,e.key,this.dn(c),i))}else s=s.add(new ys(t.indexId,e.key,Oa,i));return s}bn(e,t,s,i,r){$("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let o=[];return function(l,u,h,p,m){let E=l.getIterator(),R=u.getIterator(),P=oi(E),S=oi(R);for(;P||S;){let M=!1,F=!1;if(P&&S){let V=h(P,S);V<0?F=!0:V>0&&(M=!0)}else P!=null?F=!0:M=!0;M?(p(S),S=oi(R)):F?(m(P),P=oi(E)):(P=oi(E),S=oi(R))}}(i,r,Dn,c=>{o.push(this.Dn(e,t,s,c))},c=>{o.push(this.vn(e,t,s,c))}),N.waitFor(o)}yn(e){let t=1;return ci(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,i,r)=>{r.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,c)=>Dn(o,c)).filter((o,c,l)=>!c||Dn(o,l[c-1])!==0);let i=[];i.push(e);for(let o of s){let c=Dn(o,e),l=Dn(o,t);if(c===0)i[0]=e.Zt();else if(c>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(t);let r=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];let c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Oa,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Oa,[]];r.push(IDBKeyRange.bound(c,l))}return r}Cn(e,t){return Dn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ry)}getMinOffset(e,t){return N.mapArray(this.hn(t),s=>this.Pn(e,s).next(i=>i||K())).next(Ry)}};function Ay(n){return Fe(n,"collectionParents")}function ai(n){return Fe(n,"indexEntries")}function Cr(n){return Fe(n,"indexConfiguration")}function ci(n){return Fe(n,"indexState")}function Ry(n){Y(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){let i=n[s].indexState.offset;Qh(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Dt(e.readTime,e.documentKey,t)}var Cy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kt=class n{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};function Bv(n,e,t){let s=n.store("mutations"),i=n.store("documentMutations"),r=[],o=IDBKeyRange.only(t.batchId),c=0,l=s.J({range:o},(h,p,m)=>(c++,m.delete()));r.push(l.next(()=>{Y(c===1)}));let u=[];for(let h of t.mutations){let p=Xy(e,h.key.path,t.batchId);r.push(i.delete(p)),u.push(h.key)}return N.waitFor(r).next(()=>u)}function uc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw K();e=n.noDocument}return JSON.stringify(e).length}kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(41943040,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);var dc=class n{constructor(e,t,s,i){this.userId=e,this.serializer=t,this.indexManager=s,this.referenceDelegate=i,this.Fn={}}static lt(e,t,s,i){Y(e.uid!=="");let r=e.isAuthenticated()?e.uid:"";return new n(r,t,s,i)}checkEmpty(e){let t=!0,s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return On(e).J({index:"userMutationsIndex",range:s},(i,r,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,i){let r=pi(e),o=On(e);return o.add({}).next(c=>{Y(typeof c=="number");let l=new Hr(c,t,s,i),u=function(E,R,P){let S=P.baseMutations.map(F=>ic(E.ct,F)),M=P.mutations.map(F=>ic(E.ct,F));return{userId:R,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:S,mutations:M}}(this.serializer,this.userId,l),h=[],p=new ge((m,E)=>ne(m.canonicalString(),E.canonicalString()));for(let m of i){let E=Xy(this.userId,m.key.path,c);p=p.add(m.key.path.popLast()),h.push(o.put(u)),h.push(r.put(E,y0))}return p.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),N.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return On(e).get(t).next(s=>s?(Y(s.userId===this.userId),ms(this.serializer,s)):null)}Mn(e,t){return this.Fn[t]?N.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){let i=s.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let s=t+1,i=IDBKeyRange.lowerBound([this.userId,s]),r=null;return On(e).J({index:"userMutationsIndex",range:i},(o,c,l)=>{c.userId===this.userId&&(Y(c.batchId>=s),r=ms(this.serializer,c)),l.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),s=-1;return On(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,r,o)=>{s=r.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return On(e).U("userMutationsIndex",t).next(s=>s.map(i=>ms(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let s=Va(this.userId,t.path),i=IDBKeyRange.lowerBound(s),r=[];return pi(e).J({range:i},(o,c,l)=>{let[u,h,p]=o,m=zt(h);if(u===this.userId&&t.path.isEqual(m))return On(e).get(p).next(E=>{if(!E)throw K();Y(E.userId===this.userId),r.push(ms(this.serializer,E))});l.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(ne),i=[];return t.forEach(r=>{let o=Va(this.userId,r.path),c=IDBKeyRange.lowerBound(o),l=pi(e).J({range:c},(u,h,p)=>{let[m,E,R]=u,P=zt(E);m===this.userId&&r.path.isEqual(P)?s=s.add(R):p.done()});i.push(l)}),N.waitFor(i).next(()=>this.xn(e,s))}getAllMutationBatchesAffectingQuery(e,t){let s=t.path,i=s.length+1,r=Va(this.userId,s),o=IDBKeyRange.lowerBound(r),c=new ge(ne);return pi(e).J({range:o},(l,u,h)=>{let[p,m,E]=l,R=zt(m);p===this.userId&&s.isPrefixOf(R)?R.length===i&&(c=c.add(E)):h.done()}).next(()=>this.xn(e,c))}xn(e,t){let s=[],i=[];return t.forEach(r=>{i.push(On(e).get(r).next(o=>{if(o===null)throw K();Y(o.userId===this.userId),s.push(ms(this.serializer,o))}))}),N.waitFor(i).next(()=>s)}removeMutationBatch(e,t){return Bv(e._e,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),N.forEach(s,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return N.resolve();let s=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return pi(e).J({range:s},(r,o,c)=>{if(r[0]===this.userId){let l=zt(r[1]);i.push(l)}else c.done()}).next(()=>{Y(i.length===0)})})}containsKey(e,t){return qv(e,this.userId,t)}Nn(e){return jv(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}};function qv(n,e,t){let s=Va(e,t.path),i=s[1],r=IDBKeyRange.lowerBound(s),o=!1;return pi(n).J({range:r,H:!0},(c,l,u)=>{let[h,p,m]=c;h===e&&p===i&&(o=!0),u.done()}).next(()=>o)}function On(n){return Fe(n,"mutations")}function pi(n){return Fe(n,"documentMutations")}function jv(n){return Fe(n,"mutationQueues")}var Ni=class n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new n(0)}static kn(){return new n(-1)}};var Kd=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{let s=new Ni(t.highestTargetId);return t.highestTargetId=s.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>X.fromTimestamp(new ke(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,s&&(i.lastRemoteSnapshotVersion=s.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(s=>(s.targetCount+=1,this.$n(t,s),this.Qn(e,s))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>li(e).delete(t.targetId)).next(()=>this.qn(e)).next(s=>(Y(s.targetCount>0),s.targetCount-=1,this.Qn(e,s)))}removeTargets(e,t,s){let i=0,r=[];return li(e).J((o,c)=>{let l=Dr(c);l.sequenceNumber<=t&&s.get(l.targetId)===null&&(i++,r.push(this.removeTargetData(e,l)))}).next(()=>N.waitFor(r)).next(()=>i)}forEachTarget(e,t){return li(e).J((s,i)=>{let r=Dr(i);t(r)})}qn(e){return ky(e).get("targetGlobalKey").next(t=>(Y(t!==null),t))}Qn(e,t){return ky(e).put("targetGlobalKey",t)}Kn(e,t){return li(e).put(Vv(this.serializer,t))}$n(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){let s=Ts(t),i=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]),r=null;return li(e).J({range:i,index:"queryTargetsIndex"},(o,c,l)=>{let u=Dr(c);ro(t,u.target)&&(r=u,l.done())}).next(()=>r)}addMatchingKeys(e,t,s){let i=[],r=xn(e);return t.forEach(o=>{let c=at(o.path);i.push(r.put({targetId:s,path:c})),i.push(this.referenceDelegate.addReference(e,s,o))}),N.waitFor(i)}removeMatchingKeys(e,t,s){let i=xn(e);return N.forEach(t,r=>{let o=at(r.path);return N.waitFor([i.delete([s,o]),this.referenceDelegate.removeReference(e,s,r)])})}removeMatchingKeysForTargetId(e,t){let s=xn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(i)}getMatchingKeysForTargetId(e,t){let s=IDBKeyRange.bound([t],[t+1],!1,!0),i=xn(e),r=se();return i.J({range:s,H:!0},(o,c,l)=>{let u=zt(o[1]),h=new G(u);r=r.add(h)}).next(()=>r)}containsKey(e,t){let s=at(t.path),i=IDBKeyRange.bound([s],[Ky(s)],!1,!0),r=0;return xn(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],l,u)=>{o!==0&&(r++,u.done())}).next(()=>r>0)}ot(e,t){return li(e).get(t).next(s=>s?Dr(s):null)}};function li(n){return Fe(n,"targets")}function ky(n){return Fe(n,"targetGlobal")}function xn(n){return Fe(n,"targetDocuments")}function Py([n,e],[t,s]){let i=ne(n,t);return i===0?ne(e,s):i}var Qd=class{constructor(e){this.Un=e,this.buffer=new ge(Py),this.Wn=0}Gn(){return++this.Wn}zn(e){let t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{let s=this.buffer.last();Py(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}},Yd=class{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){$("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gn(t)?$("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Os(t)}await this.Hn(3e5)})}},Jd=class{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return N.resolve(pt.oe);let s=new Qd(t);return this.Jn.forEachTarget(e,i=>s.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>s.zn(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Jn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Cy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cy):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let s,i,r,o,c,l,u,h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(s=p,c=Date.now(),this.removeTargets(e,s,t))).next(p=>(r=p,l=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(u=Date.now(),ui()<=re.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:p})))}};function yS(n,e){return new Jd(n,e)}var Xd=class{constructor(e,t){this.db=e,this.garbageCollector=yS(this,t)}Yn(e){let t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}er(e){let t=0;return this.Zn(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(s,i)=>t(i))}addReference(e,t,s){return xa(e,s)}removeReference(e,t,s){return xa(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return xa(e,t)}nr(e,t){return function(i,r){let o=!1;return jv(i).Y(c=>qv(i,c,r).next(l=>(l&&(o=!0),N.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){let s=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],r=0;return this.tr(e,(o,c)=>{if(c<=t){let l=this.nr(e,o).next(u=>{if(!u)return r++,s.getEntry(e,o).next(()=>(s.removeEntry(o,X.min()),xn(e).delete(function(p){return[0,at(p.path)]}(o))))});i.push(l)}}).next(()=>N.waitFor(i)).next(()=>s.apply(e)).next(()=>r)}removeTarget(e,t){let s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return xa(e,t)}tr(e,t){let s=xn(e),i,r=pt.oe;return s.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:u})=>{o===0?(r!==pt.oe&&t(new G(zt(i)),r),r=u,i=l):r=pt.oe}).next(()=>{r!==pt.oe&&t(new G(zt(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function xa(n,e){return xn(n).put(function(s,i){return{targetId:0,path:at(s.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}var hc=class{constructor(){this.changes=new Yt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let s=this.changes.get(t);return s!==void 0?N.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Zd=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return hs(e).put(s)}removeEntry(e,t,s){return hs(e).delete(function(r,o){let c=r.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],oc(o),c[c.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.rr(e,s)))}getEntry(e,t){let s=Qe.newInvalidDocument(t);return hs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(kr(t))},(i,r)=>{s=this.ir(t,r)}).next(()=>s)}sr(e,t){let s={size:0,document:Qe.newInvalidDocument(t)};return hs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(kr(t))},(i,r)=>{s={document:this.ir(t,r),size:uc(r)}}).next(()=>s)}getEntries(e,t){let s=wt();return this._r(e,t,(i,r)=>{let o=this.ir(i,r);s=s.insert(i,o)}).next(()=>s)}ar(e,t){let s=wt(),i=new Se(G.comparator);return this._r(e,t,(r,o)=>{let c=this.ir(r,o);s=s.insert(r,c),i=i.insert(r,uc(o))}).next(()=>({documents:s,ur:i}))}_r(e,t,s){if(t.isEmpty())return N.resolve();let i=new ge(Oy);t.forEach(l=>i=i.add(l));let r=IDBKeyRange.bound(kr(i.first()),kr(i.last())),o=i.getIterator(),c=o.getNext();return hs(e).J({index:"documentKeyIndex",range:r},(l,u,h)=>{let p=G.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&Oy(c,p)<0;)s(c,null),c=o.getNext();c&&c.isEqual(p)&&(s(c,u),c=o.hasNext()?o.getNext():null),c?h.$(kr(c)):h.done()}).next(()=>{for(;c;)s(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,s,i,r){let o=t.path,c=[o.popLast().toArray(),o.lastSegment(),oc(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hs(e).U(IDBKeyRange.bound(c,l,!0)).next(u=>{r?.incrementDocumentReadCount(u.length);let h=wt();for(let p of u){let m=this.ir(G.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(ao(t,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,t,s,i){let r=wt(),o=Dy(t,s),c=Dy(t,Dt.max());return hs(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,u,h)=>{let p=this.ir(G.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);r=r.insert(p.key,p),r.size===i&&h.done()}).next(()=>r)}newChangeBuffer(e){return new eh(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ny(e).get("remoteDocumentGlobalKey").next(t=>(Y(!!t),t))}rr(e,t){return Ny(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){let s=pS(this.serializer,t);if(!(s.isNoDocument()&&s.version.isEqual(X.min())))return s}return Qe.newInvalidDocument(e)}};function Gv(n){return new Zd(n)}var eh=class extends hc{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Yt(s=>s.toString(),(s,i)=>s.isEqual(i))}applyChanges(e){let t=[],s=0,i=new ge((r,o)=>ne(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{let c=this.lr.get(r);if(t.push(this.cr.removeEntry(e,r,c.readTime)),o.isValidDocument()){let l=vy(this.cr.serializer,o);i=i.add(r.path.popLast());let u=uc(l);s+=u-c.size,t.push(this.cr.addEntry(e,r,l))}else if(s-=c.size,this.trackRemovals){let l=vy(this.cr.serializer,o.convertToNoDocument(X.min()));t.push(this.cr.addEntry(e,r,l))}}),i.forEach(r=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.cr.updateMetadata(e,s)),N.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(s=>(this.lr.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:s,ur:i})=>(i.forEach((r,o)=>{this.lr.set(r,{size:o,readTime:s.get(r).readTime})}),s))}};function Ny(n){return Fe(n,"remoteDocumentGlobal")}function hs(n){return Fe(n,"remoteDocumentsV14")}function kr(n){let e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Dy(n,e){let t=e.documentKey.path.toArray();return[n,oc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Oy(n,e){let t=n.path.toArray(),s=e.path.toArray(),i=0;for(let r=0;r<t.length-2&&r<s.length-2;++r)if(i=ne(t[r],s[r]),i)return i;return i=ne(t.length,s.length),i||(i=ne(t[t.length-2],s[s.length-2]),i||ne(t[t.length-1],s[s.length-1]))}var th=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var fc=class{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Mr(s.mutation,i,_t.empty(),ke.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,t,s=se()){let i=Wt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Nr();return r.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){let s=Wt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,se()))}populateOverlays(e,t,s){let i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,s,i){let r=wt(),o=Lr(),c=function(){return Lr()}();return t.forEach((l,u)=>{let h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Mt)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Mr(h.mutation,u,h.mutation.getFieldMask(),ke.now())):o.set(u.key,_t.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var p;return c.set(u,new th(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){let s=Lr(),i=new Se((o,c)=>o-c),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(let c of o)c.keys().forEach(l=>{let u=t.get(l);if(u===null)return;let h=s.get(l)||_t.empty();h=c.applyToLocalView(u,h),s.set(l,h);let p=(i.get(c.batchId)||se()).add(l);i=i.insert(c.batchId,p)})}).next(()=>{let o=[],c=i.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),u=l.key,h=l.value,p=gv();h.forEach(m=>{if(!r.has(m)){let E=Iv(t.get(m),s.get(m));E!==null&&p.set(m,E),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return N.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{let o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):N.resolve(Wt()),c=-1,l=r;return o.next(u=>N.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),r.get(h)?N.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,se())).next(h=>({batchId:c,changes:mv(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(s=>{let i=Nr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){let r=t.collectionGroup,o=Nr();return this.indexManager.getCollectionParents(e,r).next(c=>N.forEach(c,l=>{let u=function(p,m){return new Ss(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(o=>{r.forEach((l,u)=>{let h=u.getKey();o.get(h)===null&&(o=o.insert(h,Qe.newInvalidDocument(h)))});let c=Nr();return o.forEach((l,u)=>{let h=r.get(l);h!==void 0&&Mr(h.mutation,u,_t.empty(),ke.now()),ao(t,u)&&(c=c.insert(l,u))}),c})}};var nh=class{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ct(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:$v(i.bundledQuery),readTime:ct(i.readTime)}}(t)),N.resolve()}};var sh=class{constructor(){this.overlays=new Se(G.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){let s=Wt();return N.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.ht(e,t,r)}),N.resolve()}removeOverlaysForBatchId(e,t,s){let i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),N.resolve()}getOverlaysForCollection(e,t,s){let i=Wt(),r=t.length+1,o=new G(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){let l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Se((u,h)=>u-h),o=this.overlays.getIterator();for(;o.hasNext();){let u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Wt(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}let c=Wt(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=i)););return N.resolve(c)}ht(e,t,s){let i=this.overlays.get(s.key);if(i!==null){let o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new zr(t,s));let r=this.Ir.get(t);r===void 0&&(r=se(),this.Ir.set(t,r)),this.Ir.set(t,r.add(s.key))}};var ih=class{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}};var Qr=class{constructor(){this.Tr=new ge(xe.Er),this.dr=new ge(xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let s=new xe(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new xe(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){let t=new G(new pe([])),s=new xe(t,e),i=new xe(t,e+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new G(new pe([])),s=new xe(t,e),i=new xe(t,e+1),r=se();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){let t=new xe(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}},xe=class{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return G.comparator(e.key,t.key)||ne(e.wr,t.wr)}static Ar(e,t){return ne(e.wr,t.wr)||G.comparator(e.key,t.key)}};var rh=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ge(xe.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){let r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new Hr(r,t,s,i);this.mutationQueue.push(o);for(let c of i)this.br=this.br.add(new xe(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let s=t+1,i=this.vr(s),r=i<0?0:i;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let s=new xe(t,0),i=new xe(t,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{let c=this.Dr(o.wr);r.push(c)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(ne);return t.forEach(i=>{let r=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],c=>{s=s.add(c.wr)})}),N.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){let s=t.path,i=s.length+1,r=s;G.isDocumentKey(r)||(r=r.child(""));let o=new xe(new G(r),0),c=new ge(ne);return this.br.forEachWhile(l=>{let u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(c=c.add(l.wr)),!0)},o),N.resolve(this.Cr(c))}Cr(e){let t=[];return e.forEach(s=>{let i=this.Dr(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Y(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return N.forEach(t.mutations,i=>{let r=new xe(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){let s=new xe(t,0),i=this.br.firstAfterOrEqual(s);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var oh=class{constructor(e){this.Mr=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let s=this.docs.get(t);return N.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(t))}getEntries(e,t){let s=wt();return t.forEach(i=>{let r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Qe.newInvalidDocument(i))}),N.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=wt(),o=t.path,c=new G(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Qh(Qy(h),s)<=0||(i.has(h.key)||ao(t,h))&&(r=r.insert(h.key,h.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,t,s,i){K()}Or(e,t){return N.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new ah(this)}getSize(e){return N.resolve(this.size)}},ah=class extends hc{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(s)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}};var ch=class{constructor(e){this.persistence=e,this.Nr=new Yt(t=>Ts(t),ro),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qr,this.targetCount=0,this.kr=Ni.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new Ni(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,s){let i=0,r=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(r).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){let s=this.Nr.get(t)||null;return N.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),N.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);let i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){let s=this.Br.yr(t);return N.resolve(s)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}};var pc=class{constructor(e,t){this.qr={},this.overlays={},this.Qr=new pt(0),this.Kr=!1,this.Kr=!0,this.$r=new ih,this.referenceDelegate=e(this),this.Ur=new ch(this),this.indexManager=new zd,this.remoteDocumentCache=function(i){return new oh(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new rc(t),this.Gr=new nh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new rh(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){$("MemoryPersistence","Starting transaction:",e);let i=new lh(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(e,t){return N.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}},lh=class extends Ga{constructor(e){super(),this.currentSequenceNumber=e}},mc=class n{constructor(e){this.persistence=e,this.Jr=new Qr,this.Yr=null}static Zr(e){return new n(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),N.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));let s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,s=>{let i=G.fromPath(s);return this.ei(e,i).next(r=>{r||t.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}};var uh=class{constructor(e){this.serializer=e}O(e,t,s,i){let r=new Ha("createOrUpgrade",t);s<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Qg,{unique:!0}),l.createObjectStore("documentMutations")}(e),xy(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return s<3&&i>=3&&(s!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),xy(e)),o=o.next(()=>function(l){let u=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",h)}(r))),s<4&&i>=4&&(s!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Qg,{unique:!0});let p=u.store("mutations"),m=h.map(E=>p.put(E));return N.waitFor(m)})}(e,r))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&i>=5&&(o=o.next(()=>this.ni(r))),s<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(r)))),s<7&&i>=7&&(o=o.next(()=>this.ii(r))),s<8&&i>=8&&(o=o.next(()=>this.si(e,r))),s<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&i>=10&&(o=o.next(()=>this.oi(r))),s<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&i>=12&&(o=o.next(()=>{(function(l){let u=l.createObjectStore("documentOverlays",{keyPath:k0});u.createIndex("collectionPathOverlayIndex",P0,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",N0,{unique:!1})})(e)})),s<13&&i>=13&&(o=o.next(()=>function(l){let u=l.createObjectStore("remoteDocumentsV14",{keyPath:v0});u.createIndex("documentKeyIndex",_0),u.createIndex("collectionGroupIndex",w0)}(e)).next(()=>this._i(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&i>=14&&(o=o.next(()=>this.ai(e,r))),s<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:S0}).createIndex("sequenceNumberIndex",A0,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:R0}).createIndex("documentKeyIndex",C0,{unique:!1})}(e))),s<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),s<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((s,i)=>{t+=uc(i)}).next(()=>{let s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}ni(e){let t=e.store("mutationQueues"),s=e.store("mutations");return t.U().next(i=>N.forEach(i,r=>{let o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return s.U("userMutationsIndex",o).next(c=>N.forEach(c,l=>{Y(l.userId===r.userId);let u=ms(this.serializer,l);return Bv(e,r.userId,u).next(()=>{})}))}))}ii(e){let t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{let r=[];return s.J((o,c)=>{let l=new pe(o),u=function(p){return[0,at(p)]}(l);r.push(t.get(u).next(h=>h?N.resolve():(p=>t.put({targetId:0,path:at(p),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>N.waitFor(r))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:T0});let s=t.store("collectionParents"),i=new Kr,r=o=>{if(i.add(o)){let c=o.lastSegment(),l=o.popLast();return s.put({collectionId:c,parent:at(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{let l=new pe(o);return r(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],u)=>{let h=zt(c);return r(h.popLast())}))}oi(e){let t=e.store("targets");return t.J((s,i)=>{let r=Dr(i),o=Vv(this.serializer,r);return t.put(o)})}_i(e,t){let s=t.store("remoteDocuments"),i=[];return s.J((r,o)=>{let c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new G(pe.fromString(p.document.name).popFirst(5)):p.noDocument?G.fromSegments(p.noDocument.path):p.unknownDocument?G.fromSegments(p.unknownDocument.path):K()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(u))}).next(()=>N.waitFor(i))}ai(e,t){let s=t.store("mutations"),i=Gv(this.serializer),r=new pc(mc.Zr,this.serializer.ct);return s.U().next(o=>{let c=new Map;return o.forEach(l=>{var u;let h=(u=c.get(l.userId))!==null&&u!==void 0?u:se();ms(this.serializer,l).keys().forEach(p=>h=h.add(p)),c.set(l.userId,h)}),N.forEach(c,(l,u)=>{let h=new Ke(u),p=ac.lt(this.serializer,h),m=r.getIndexManager(h),E=dc.lt(h,this.serializer,m,r.referenceDelegate);return new fc(i,E,p,m).recalculateAndSaveOverlaysForDocumentKeys(new Ur(t,pt.oe),l).next()})})}};function xy(n){n.createObjectStore("targetDocuments",{keyPath:E0}).createIndex("documentTargetsIndex",I0,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",b0,{unique:!0}),n.createObjectStore("targetGlobal")}var Ju="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",dh=class n{constructor(e,t,s,i,r,o,c,l,u,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.ui=r,this.window=o,this.document=c,this.ci=u,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!n.D())throw new q(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Xd(this,i),this.Ai=t+"main",this.serializer=new rc(l),this.Ri=new bi(this.Ai,this.hi,new uh(this.serializer)),this.$r=new Fd,this.Ur=new Kd(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Gv(this.serializer),this.Gr=new $d,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&rt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new q(L.FAILED_PRECONDITION,Ju);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new pt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>La(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Gn(e))return $("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Pr(e).get("owner").next(t=>N.resolve(this.vi(t)))}Ci(e){return La(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let s=Fe(t,"clientMetadata");return s.U().next(i=>{let r=this.xi(i,18e5),o=i.filter(c=>r.indexOf(c)===-1);return N.forEach(o,c=>s.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(let t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?N.resolve(!0):Pr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new q(L.FAILED_PRECONDITION,Ju);return!1}}return!(!this.networkEnabled||!this.inForeground)||La(e).U().next(s=>this.xi(s,5e3).find(i=>{if(this.clientId!==i.clientId){let r=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(r||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&$("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new Ur(e,pt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(s=>this.Mi(s.updateTimeMs,t)&&!this.Ni(s.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>La(e).U().next(t=>this.xi(t,18e5).map(s=>s.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return dc.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Wd(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ac.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,s){$("IndexedDbPersistence","Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",r=function(l){return l===17?x0:l===16?O0:l===15?Jh:l===14?tv:l===13?ev:l===12?D0:l===11?Zy:void K()}(this.hi),o;return this.Ri.runTransaction(e,i,r,c=>(o=new Ur(c,this.Qr?this.Qr.next():pt.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw rt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new q(L.FAILED_PRECONDITION,Yy);return s(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>s(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Pr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new q(L.FAILED_PRECONDITION,Ju)})}Di(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Pr(e).put("owner",t)}static D(){return bi.D()}bi(e){let t=Pr(e);return t.get("owner").next(s=>this.vi(s)?($("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):N.resolve())}Mi(e,t){let s=Date.now();return!(e<s-t)&&(!(e>s)||(rt(`Detected an update time that is in the future: ${e} > ${s}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();let t=/(?:Version|Mobile)\/1[456]/;Yl()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{let s=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return $("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return rt("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){rt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function Pr(n){return Fe(n,"owner")}function La(n){return Fe(n,"clientMetadata")}function vS(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var hh=class n{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=i}static Wi(e,t){let s=se(),i=se();for(let r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new n(e,t.fromCache,s,i)}};var fh=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var gc=class{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Yl()?8:Jy(Ce())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,i){let r={result:null};return this.Yi(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(e,t,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;let o=new fh;return this.Xi(e,t,o).next(c=>{if(r.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>r.result)}es(e,t,s,i){return s.documentReadCount<this.ji?(ui()<=re.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",di(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(ui()<=re.DEBUG&&$("QueryEngine","Query:",di(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(ui()<=re.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",di(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(t))):N.resolve())}Yi(e,t){if(ay(t))return N.resolve(null);let s=Nt(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Rd(t,null,"F"),s=Nt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{let o=se(...r);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,s).next(l=>{let u=this.ts(t,c);return this.ns(t,u,o,l.readTime)?this.Yi(e,Rd(t,null,"F")):this.rs(e,u,t,l)}))})))}Zi(e,t,s,i){return ay(t)||i.isEqual(X.min())?N.resolve(null):this.Ji.getDocuments(e,s).next(r=>{let o=this.ts(t,r);return this.ns(t,o,s,i)?N.resolve(null):(ui()<=re.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),di(t)),this.rs(e,o,t,p0(i,-1)).next(c=>c))})}ts(e,t){let s=new ge(fv(e));return t.forEach((i,r)=>{ao(e,r)&&(s=s.add(r))}),s}ns(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;let r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(e,t,s){return ui()<=re.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",di(t)),this.Ji.getDocumentsMatchingQuery(e,t,Dt.min(),s)}rs(e,t,s,i){return this.Ji.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}};var ph=class{constructor(e,t,s,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new Se(ne),this._s=new Yt(r=>Ts(r),ro),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fc(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}};function Hv(n,e,t,s){return new ph(n,e,t,s)}async function zv(n,e){let t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{let o=[],c=[],l=se();for(let u of i){o.push(u.batchId);for(let h of u.mutations)l=l.add(h.key)}for(let u of r){c.push(u.batchId);for(let h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(s,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function _S(n,e){let t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{let i=e.batch.keys(),r=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){let p=u.batch,m=p.keys(),E=N.resolve();return m.forEach(R=>{E=E.next(()=>h.getEntry(l,R)).next(P=>{let S=u.docVersions.get(R);Y(S!==null),P.version.compareTo(S)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let l=se();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Wv(n){let e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function wS(n,e){let t=te(n),s=e.snapshotVersion,i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{let o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;let c=[];e.targetChanges.forEach((h,p)=>{let m=i.get(p);if(!m)return;c.push(t.Ur.removeMatchingKeys(r,h.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(r,h.addedDocuments,p)));let E=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken($e.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,s)),i=i.insert(p,E),function(P,S,M){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,E,h)&&c.push(t.Ur.updateTargetData(r,E))});let l=wt(),u=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,h))}),c.push(bS(r,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!s.isEqual(X.min())){let h=t.Ur.getLastRemoteSnapshotVersion(r).next(p=>t.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));c.push(h)}return N.waitFor(c).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(t.os=i,r))}function bS(n,e,t){let s=se(),i=se();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=wt();return t.forEach((c,l)=>{let u=r.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):$("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function ES(n,e){let t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function IS(n,e){let t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Ur.getTargetData(s,e).next(r=>r?(i=r,N.resolve(i)):t.Ur.allocateTargetId(s).next(o=>(i=new Pi(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{let i=t.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s})}async function mh(n,e,t){let s=te(n),i=s.os.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gn(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(i.target)}function Ly(n,e,t){let s=te(n),i=X.min(),r=se();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){let p=te(l),m=p._s.get(h);return m!==void 0?N.resolve(p.os.get(m)):p.Ur.getTargetData(u,h)}(s,o,Nt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{r=l})}).next(()=>s.ss.getDocumentsMatchingQuery(o,e,t?i:X.min(),t?r:se())).next(c=>(TS(s,B0(e),c),{documents:c,Ts:r})))}function TS(n,e,t){let s=n.us.get(e)||X.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(e,s)}var yc=class{constructor(){this.activeTargetIds=W0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var vc=class{constructor(){this.so=new yc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new yc,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var gh=class{_o(e){}shutdown(){}};var _c=class{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Ma=null;function Xu(){return Ma===null?Ma=function(){return 268435456+Math.round(2147483648*Math.random())}():Ma++,"0x"+Ma.toString(16)}var SS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var yh=class{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}};var Ze="WebChannelConnection",vh=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let s=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(t,s,i,r,o){let c=Xu(),l=this.xo(t,s.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);let u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,r,o),this.No(t,l,u,i).then(h=>($("RestConnection",`Received RPC '${t}' ${c}: `,h),h),h=>{throw Vr("RestConnection",`RPC '${t}' ${c} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(t,s,i,r,o,c){return this.Mo(t,s,i,r,o)}Oo(t,s,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>t[o]=r),i&&i.headers.forEach((r,o)=>t[o]=r)}xo(t,s){let i=SS[t];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,i){let r=Xu();return new Promise((o,c)=>{let l=new Hu;l.setWithCredentials(!0),l.listenOnce(zu.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ar.NO_ERROR:let h=l.getResponseJson();$(Ze,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case Ar.TIMEOUT:$(Ze,`RPC '${e}' ${r} timed out`),c(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:let p=l.getStatus();if($(Ze,`RPC '${e}' ${r} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);let E=m?.error;if(E&&E.status&&E.message){let R=function(S){let M=S.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(M)>=0?M:L.UNKNOWN}(E.status);c(new q(R,E.message))}else c(new q(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new q(L.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$(Ze,`RPC '${e}' ${r} completed.`)}});let u=JSON.stringify(i);$(Ze,`RPC '${e}' ${r} sending request:`,i),l.send(t,"POST",u,s,15)})}Bo(e,t,s){let i=Xu(),r=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qu(),c=Ku(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;let h=r.join("");$(Ze,`Creating RPC '${e}' stream ${i}: ${h}`,l);let p=o.createWebChannel(h,l),m=!1,E=!1,R=new yh({Io:S=>{E?$(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(m||($(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),$(Ze,`RPC '${e}' stream ${i} sending:`,S),p.send(S))},To:()=>p.close()}),P=(S,M,F)=>{S.listen(M,V=>{try{F(V)}catch(H){setTimeout(()=>{throw H},0)}})};return P(p,ri.EventType.OPEN,()=>{E||($(Ze,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),P(p,ri.EventType.CLOSE,()=>{E||(E=!0,$(Ze,`RPC '${e}' stream ${i} transport closed`),R.So())}),P(p,ri.EventType.ERROR,S=>{E||(E=!0,Vr(Ze,`RPC '${e}' stream ${i} transport errored:`,S),R.So(new q(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,ri.EventType.MESSAGE,S=>{var M;if(!E){let F=S.data[0];Y(!!F);let V=F,H=V.error||((M=V[0])===null||M===void 0?void 0:M.error);if(H){$(Ze,`RPC '${e}' stream ${i} received error:`,H);let ee=H.status,W=function(b){let A=Oe[b];if(A!==void 0)return Sv(A)}(ee),w=H.message;W===void 0&&(W=L.INTERNAL,w="Unknown error status: "+ee+" with message "+H.message),E=!0,R.So(new q(W,w)),p.close()}else $(Ze,`RPC '${e}' stream ${i} received:`,F),R.bo(F)}}),P(c,Wu.STAT_EVENT,S=>{S.stat===Da.PROXY?$(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Da.NOPROXY&&$(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}};function AS(){return typeof window<"u"?window:null}function Ba(){return typeof document<"u"?document:null}function Uc(n){return new Od(n,!0)}var wc=class{constructor(e,t,s=1e3,i=1.5,r=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}};var bc=class{constructor(e,t,s,i,r,o,c,l){this.ui=e,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new wc(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(rt(t.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===t&&this.P_(s,i)},s=>{e(()=>{let i=new q(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(e,t){let s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},_h=class extends bc{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=aS(this.serializer,e),s=function(r){if(!("targetChange"in r))return X.min();let o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?ct(o.readTime):X.min()}(e);return this.listener.d_(t,s)}A_(e){let t={};t.database=Md(this.serializer),t.addTarget=function(r,o){let c,l=o.target;if(c=Ya(l)?{documents:Nv(r,l)}:{query:Dv(r,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Av(r,o.resumeToken);let u=xd(r,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){c.readTime=ki(r,o.snapshotVersion.toTimestamp());let u=xd(r,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);let s=lS(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){let t={};t.database=Md(this.serializer),t.removeTarget=e,this.a_(t)}},wh=class extends bc{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();let t=cS(e.writeResults,e.commitTime),s=ct(e.commitTime);return this.listener.g_(s,t)}p_(){let e={};e.database=Md(this.serializer),this.a_(e)}m_(e){let t={streamToken:this.lastStreamToken,writes:e.map(s=>ic(this.serializer,s))};this.a_(t)}};var bh=class extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(e,Ld(t,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(L.UNKNOWN,r.toString())})}Lo(e,t,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Ld(t,s),i,o,c,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}},Eh=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(rt(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}};var Ih=class{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{Ls(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){let u=te(l);u.L_.add(4),await Li(u),u.q_.set("Unknown"),u.L_.delete(4),await co(u)}(this))})}),this.q_=new Eh(s,i)}};async function co(n){if(Ls(n))for(let e of n.B_)await e(!0)}async function Li(n){for(let e of n.B_)await e(!1)}function Kv(n,e){let t=te(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),cf(t)?af(t):Mi(t).r_()&&of(t,e))}function rf(n,e){let t=te(n),s=Mi(t);t.N_.delete(e),s.r_()&&Qv(t,e),t.N_.size===0&&(s.r_()?s.o_():Ls(t)&&t.q_.set("Unknown"))}function of(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mi(n).A_(e)}function Qv(n,e){n.Q_.xe(e),Mi(n).R_(e)}function af(n){n.Q_=new Dd({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Mi(n).start(),n.q_.v_()}function cf(n){return Ls(n)&&!Mi(n).n_()&&n.N_.size>0}function Ls(n){return te(n).L_.size===0}function Yv(n){n.Q_=void 0}async function RS(n){n.q_.set("Online")}async function CS(n){n.N_.forEach((e,t)=>{of(n,e)})}async function kS(n,e){Yv(n),cf(n)?(n.q_.M_(e),af(n)):n.q_.set("Unknown")}async function PS(n,e,t){if(n.q_.set("Online"),e instanceof tc&&e.state===2&&e.cause)try{await async function(i,r){let o=r.cause;for(let c of r.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ec(n,s)}else if(e instanceof yi?n.Q_.Ke(e):e instanceof ec?n.Q_.He(e):n.Q_.We(e),!t.isEqual(X.min()))try{let s=await Wv(n.localStore);t.compareTo(s)>=0&&await function(r,o){let c=r.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){let h=r.N_.get(u);h&&r.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{let h=r.N_.get(l);if(!h)return;r.N_.set(l,h.withResumeToken($e.EMPTY_BYTE_STRING,h.snapshotVersion)),Qv(r,l);let p=new Pi(h.target,l,u,h.sequenceNumber);of(r,p)}),r.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Ec(n,s)}}async function Ec(n,e,t){if(!Gn(e))throw e;n.L_.add(1),await Li(n),n.q_.set("Offline"),t||(t=()=>Wv(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await co(n)})}function Jv(n,e){return e().catch(t=>Ec(n,t,e))}async function lo(n){let e=te(n),t=qn(e),s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;NS(e);)try{let i=await ES(e.localStore,s);if(i===null){e.O_.length===0&&t.o_();break}s=i.batchId,DS(e,i)}catch(i){await Ec(e,i)}Xv(e)&&Zv(e)}function NS(n){return Ls(n)&&n.O_.length<10}function DS(n,e){n.O_.push(e);let t=qn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Xv(n){return Ls(n)&&!qn(n).n_()&&n.O_.length>0}function Zv(n){qn(n).start()}async function OS(n){qn(n).p_()}async function xS(n){let e=qn(n);for(let t of n.O_)e.m_(t.mutations)}async function LS(n,e,t){let s=n.O_.shift(),i=kd.from(s,e,t);await Jv(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await lo(n)}async function MS(n,e){e&&qn(n).V_&&await async function(s,i){if(function(o){return Z0(o)&&o!==L.ABORTED}(i.code)){let r=s.O_.shift();qn(s).s_(),await Jv(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await lo(s)}}(n,e),Xv(n)&&Zv(n)}async function My(n,e){let t=te(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");let s=Ls(t);t.L_.add(3),await Li(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await co(t)}async function VS(n,e){let t=te(n);e?(t.L_.delete(2),await co(t)):e||(t.L_.add(2),await Li(t),t.q_.set("Unknown"))}function Mi(n){return n.K_||(n.K_=function(t,s,i){let r=te(t);return r.w_(),new _h(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:RS.bind(null,n),Ro:CS.bind(null,n),mo:kS.bind(null,n),d_:PS.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),cf(n)?af(n):n.q_.set("Unknown")):(await n.K_.stop(),Yv(n))})),n.K_}function qn(n){return n.U_||(n.U_=function(t,s,i){let r=te(t);return r.w_(),new wh(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:OS.bind(null,n),mo:MS.bind(null,n),f_:xS.bind(null,n),g_:LS.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await lo(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}var Th=class n{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){let o=Date.now()+s,c=new n(e,t,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function lf(n,e){if(rt("AsyncQueue",`${e}: ${n}`),Gn(n))return new q(L.UNAVAILABLE,`${e}: ${n}`);throw n}var Ic=class n{constructor(e){this.comparator=e?(t,s)=>e(t,s)||G.comparator(t.key,s.key):(t,s)=>G.comparator(t.key,s.key),this.keyedMap=Nr(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let s=new n;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}};var Tc=class{constructor(){this.W_=new Se(G.comparator)}track(e){let t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,s)=>{e.push(s)}),e}},Di=class n{constructor(e,t,s,i,r,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){let o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new n(e,t,Ic.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}};var Sh=class{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}},Ah=class{constructor(){this.queries=Vy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){let i=te(t),r=i.queries;i.queries=Vy(),r.forEach((o,c)=>{for(let l of c.j_)l.onError(s)})})(this,new q(L.ABORTED,"Firestore shutting down"))}};function Vy(){return new Yt(n=>hv(n),Fc)}async function uf(n,e){let t=te(n),s=3,i=e.query,r=t.queries.get(i);r?!r.H_()&&e.J_()&&(s=2):(r=new Sh,s=e.J_()?0:1);try{switch(s){case 0:r.z_=await t.onListen(i,!0);break;case 1:r.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){let c=lf(o,`Initialization of query '${di(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.j_.push(e),e.Z_(t.onlineState),r.z_&&e.X_(r.z_)&&hf(t)}async function df(n,e){let t=te(n),s=e.query,i=3,r=t.queries.get(s);if(r){let o=r.j_.indexOf(e);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=e.J_()?0:1:!r.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $S(n,e){let t=te(n),s=!1;for(let i of e){let r=i.query,o=t.queries.get(r);if(o){for(let c of o.j_)c.X_(i)&&(s=!0);o.z_=i}}s&&hf(t)}function FS(n,e,t){let s=te(n),i=s.queries.get(e);if(i)for(let r of i.j_)r.onError(t);s.queries.delete(e)}function hf(n){n.Y_.forEach(e=>{e.next()})}var Rh,$y;($y=Rh||(Rh={})).ea="default",$y.Cache="cache";var Yr=class{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){let s=[];for(let i of e.docChanges)i.type!==3&&s.push(i);e=new Di(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;let s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Rh.Cache}};var Sc=class{constructor(e){this.key=e}},Ac=class{constructor(e){this.key=e}},Ch=class{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=fv(e),this.Ra=new Ic(this.Aa)}get Va(){return this.Ta}ma(e,t){let s=t?t.fa:new Tc,i=t?t.Ra:this.Ra,r=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{let m=i.get(h),E=ao(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations),S=!1;m&&E?m.data.isEqual(E.data)?R!==P&&(s.track({type:3,doc:E}),S=!0):this.ga(m,E)||(s.track({type:2,doc:E}),S=!0,(l&&this.Aa(E,l)>0||u&&this.Aa(E,u)<0)&&(c=!0)):!m&&E?(s.track({type:0,doc:E}),S=!0):m&&!E&&(s.track({type:1,doc:m}),S=!0,(l||u)&&(c=!0)),S&&(E?(o=o.add(E),r=P?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:c,mutatedKeys:r}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){let r=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let o=e.fa.G_();o.sort((h,p)=>function(E,R){let P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return P(E)-P(R)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(s),i=i!=null&&i;let c=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Di(this.query,e.Ra,r,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Tc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=se(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});let t=[];return e.forEach(s=>{this.da.has(s)||t.push(new Ac(s))}),this.da.forEach(s=>{e.has(s)||t.push(new Sc(s))}),t}ba(e){this.Ta=e.Ts,this.da=se();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Di.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}},kh=class{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}},Ph=class{constructor(e){this.key=e,this.va=!1}},Nh=class{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yt(c=>hv(c),Fc),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(G.comparator),this.Na=new Map,this.La=new Qr,this.Ba={},this.ka=new Map,this.qa=Ni.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}};async function US(n,e,t=!0){let s=r_(n),i,r=s.Fa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await e_(s,e,t,!0),i}async function BS(n,e){let t=r_(n);await e_(t,e,!0,!1)}async function e_(n,e,t,s){let i=await IS(n.localStore,Nt(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t),c;return s&&(c=await qS(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Kv(n.remoteStore,i),c}async function qS(n,e,t,s,i){n.Ka=(p,m,E)=>async function(P,S,M,F){let V=S.view.ma(M);V.ns&&(V=await Ly(P.localStore,S.query,!1).then(({documents:w})=>S.view.ma(w,V)));let H=F&&F.targetChanges.get(S.targetId),ee=F&&F.targetMismatches.get(S.targetId)!=null,W=S.view.applyChanges(V,P.isPrimaryClient,H,ee);return Uy(P,S.targetId,W.wa),W.snapshot}(n,p,m,E);let r=await Ly(n.localStore,e,!0),o=new Ch(e,r.Ts),c=o.ma(r.documents),l=Wr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(c,n.isPrimaryClient,l);Uy(n,t,u.wa);let h=new kh(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),u.snapshot}async function jS(n,e,t){let s=te(n),i=s.Fa.get(e),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!Fc(o,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await mh(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&rf(s.remoteStore,i.targetId),Dh(s,i.targetId)}).catch(Os)):(Dh(s,i.targetId),await mh(s.localStore,i.targetId,!0))}async function GS(n,e){let t=te(n),s=t.Fa.get(e),i=t.Ma.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),rf(t.remoteStore,s.targetId))}async function HS(n,e,t){let s=o_(n);try{let i=await function(o,c){let l=te(o),u=ke.now(),h=c.reduce((E,R)=>E.add(R.key),se()),p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let R=wt(),P=se();return l.cs.getEntries(E,h).next(S=>{R=S,R.forEach((M,F)=>{F.isValidDocument()||(P=P.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,R)).next(S=>{p=S;let M=[];for(let F of c){let V=X0(F,p.get(F.key).overlayedDocument);V!=null&&M.push(new Mt(F.key,V,rv(V.value.mapValue),et.exists(!0)))}return l.mutationQueue.addMutationBatch(E,u,M,c)}).next(S=>{m=S;let M=S.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(E,S.batchId,M)})}).then(()=>({batchId:m.batchId,changes:mv(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Se(ne)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(s,i.batchId,t),await uo(s,i.changes),await lo(s.remoteStore)}catch(i){let r=lf(i,"Failed to persist write");t.reject(r)}}async function t_(n,e){let t=te(n);try{let s=await wS(t.localStore,e);e.targetChanges.forEach((i,r)=>{let o=t.Na.get(r);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Y(o.va):i.removedDocuments.size>0&&(Y(o.va),o.va=!1))}),await uo(t,s,e)}catch(s){await Os(s)}}function Fy(n,e,t){let s=te(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){let i=[];s.Fa.forEach((r,o)=>{let c=o.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){let l=te(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(let m of p.j_)m.Z_(c)&&(u=!0)}),u&&hf(l)}(s.eventManager,e),i.length&&s.Ca.d_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zS(n,e,t){let s=te(n);s.sharedClientState.updateQueryState(e,"rejected",t);let i=s.Na.get(e),r=i&&i.key;if(r){let o=new Se(G.comparator);o=o.insert(r,Qe.newNoDocument(r,X.min()));let c=se().add(r),l=new Za(X.min(),new Map,new Se(ne),o,c);await t_(s,l),s.Oa=s.Oa.remove(r),s.Na.delete(e),ff(s)}else await mh(s.localStore,e,!1).then(()=>Dh(s,e,t)).catch(Os)}async function WS(n,e){let t=te(n),s=e.batch.batchId;try{let i=await _S(t.localStore,e);s_(t,s,null),n_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await uo(t,i)}catch(i){await Os(i)}}async function KS(n,e,t){let s=te(n);try{let i=await function(o,c){let l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Y(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(s.localStore,e);s_(s,e,t),n_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await uo(s,i)}catch(i){await Os(i)}}function n_(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function s_(n,e,t){let s=te(n),i=s.Ba[s.currentUser.toKey()];if(i){let r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Ba[s.currentUser.toKey()]=i}}function Dh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let s of n.Ma.get(e))n.Fa.delete(s),t&&n.Ca.$a(s,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(s=>{n.La.containsKey(s)||i_(n,s)})}function i_(n,e){n.xa.delete(e.path.canonicalString());let t=n.Oa.get(e);t!==null&&(rf(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ff(n))}function Uy(n,e,t){for(let s of t)s instanceof Sc?(n.La.addReference(s.key,e),QS(n,s)):s instanceof Ac?($("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,e),n.La.containsKey(s.key)||i_(n,s.key)):K()}function QS(n,e){let t=e.key,s=t.path.canonicalString();n.Oa.get(t)||n.xa.has(s)||($("SyncEngine","New document in limbo: "+t),n.xa.add(s),ff(n))}function ff(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){let e=n.xa.values().next().value;n.xa.delete(e);let t=new G(pe.fromString(e)),s=n.qa.next();n.Na.set(s,new Ph(t)),n.Oa=n.Oa.insert(t,s),Kv(n.remoteStore,new Pi(Nt(oo(t.path)),s,"TargetPurposeLimboResolution",pt.oe))}}async function uo(n,e,t){let s=te(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((c,l)=>{o.push(s.Ka(l,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){let p=u?!u.fromCache:(h=t?.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){i.push(u);let p=hh.Wi(l.targetId,u);r.push(p)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(l,u){let h=te(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(u,m=>N.forEach(m.$i,E=>h.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>N.forEach(m.Ui,E=>h.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!Gn(p))throw p;$("LocalStore","Failed to update sequence numbers: "+p)}for(let p of u){let m=p.targetId;if(!p.fromCache){let E=h.os.get(m),R=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(R);h.os=h.os.insert(m,P)}}}(s.localStore,r))}async function YS(n,e){let t=te(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());let s=await zv(t.localStore,e);t.currentUser=e,function(r,o){r.ka.forEach(c=>{c.forEach(l=>{l.reject(new q(L.CANCELLED,o))})}),r.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await uo(t,s.hs)}}function JS(n,e){let t=te(n),s=t.Na.get(e);if(s&&s.va)return se().add(s.key);{let i=se(),r=t.Ma.get(e);if(!r)return i;for(let o of r){let c=t.Fa.get(o);i=i.unionWith(c.view.Va)}return i}}function r_(n){let e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=t_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zS.bind(null,e),e.Ca.d_=$S.bind(null,e.eventManager),e.Ca.$a=FS.bind(null,e.eventManager),e}function o_(n){let e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KS.bind(null,e),e}var Ps=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Hv(this.persistence,new gc,e.initialUser,this.serializer)}Ga(e){return new pc(mc.Zr,this.serializer)}Wa(e){return new vc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Ps.provider={build:()=>new Ps};var Oh=class extends Ps{constructor(e,t,s){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await o_(this.Ja.syncEngine),await lo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Hv(this.persistence,new gc,e.initialUser,this.serializer)}ja(e,t){let s=this.persistence.referenceDelegate.garbageCollector;return new Yd(s,e.asyncQueue,t)}Ha(e,t){let s=new hd(t,this.persistence);return new dd(e.asyncQueue,s)}Ga(e){let t=vS(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new dh(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,AS(),Ba(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new vc}};var Oi=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=YS.bind(null,this.syncEngine),await VS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ah}()}createDatastore(e){let t=Uc(e.databaseInfo.databaseId),s=function(r){return new vh(r)}(e.databaseInfo);return function(r,o,c,l){return new bh(r,o,c,l)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,o,c){return new Ih(s,i,r,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Fy(this.syncEngine,t,0),function(){return _c.D()?new _c:new gh}())}createSyncEngine(e,t){return function(i,r,o,c,l,u,h){let p=new Nh(i,r,o,c,l,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let r=te(i);$("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await Li(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Oi.provider={build:()=>new Oi};var Jr=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var xh=class{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=qa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let s=lf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}};async function Zu(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await zv(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function By(n,e){n.asyncQueue.verifyOperationInProgress();let t=await a_(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>My(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>My(e.remoteStore,i)),n._onlineComponents=e}async function a_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zu(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Vr("Error using user provided cache. Falling back to memory cache: "+t),await Zu(n,new Ps)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Zu(n,new Ps);return n._offlineComponents}async function pf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await By(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await By(n,new Oi))),n._onlineComponents}function c_(n){return a_(n).then(e=>e.persistence)}function l_(n){return pf(n).then(e=>e.remoteStore)}function XS(n){return pf(n).then(e=>e.syncEngine)}async function Rc(n){let e=await pf(n),t=e.eventManager;return t.onListen=US.bind(null,e.syncEngine),t.onUnlisten=jS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=BS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=GS.bind(null,e.syncEngine),t}function ZS(n){return n.asyncQueue.enqueue(async()=>{let e=await c_(n),t=await l_(n);return e.setNetworkEnabled(!0),function(i){let r=te(i);return r.L_.delete(0),co(r)}(t)})}function eA(n){return n.asyncQueue.enqueue(async()=>{let e=await c_(n),t=await l_(n);return e.setNetworkEnabled(!1),async function(i){let r=te(i);r.L_.add(0),await Li(r),r.q_.set("Offline")}(t)})}function tA(n,e,t={}){let s=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,c,l,u){let h=new Jr({next:m=>{h.Za(),o.enqueueAndForget(()=>df(r,p));let E=m.docs.has(c);!E&&m.fromCache?u.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&l&&l.source==="server"?u.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Yr(oo(c.path),h,{includeMetadataChanges:!0,_a:!0});return uf(r,p)}(await Rc(n),n.asyncQueue,e,t,s)),s.promise}function nA(n,e,t={}){let s=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,c,l,u){let h=new Jr({next:m=>{h.Za(),o.enqueueAndForget(()=>df(r,p)),m.fromCache&&l.source==="server"?u.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Yr(c,h,{includeMetadataChanges:!0,_a:!0});return uf(r,p)}(await Rc(n),n.asyncQueue,e,t,s)),s.promise}function u_(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var qy=new Map;function d_(n,e,t){if(!t)throw new q(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sA(n,e,t,s){if(e===!0&&s===!0)throw new q(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jy(n){if(!G.isDocumentKey(n))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gy(n){if(G.isDocumentKey(n))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function lt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Bc(n);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var Cc=class{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Xr=class{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cc(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new nd;switch(s.type){case"firstParty":return new rd(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let s=qy.get(t);s&&($("ComponentProvider","Removing Datastore"),qy.delete(t),s.terminate())}(this),Promise.resolve()}};var Ns=class n{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},tt=class n{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},Mn=class n extends Ns{constructor(e,t,s){super(e,t,oo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new G(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Vi(n,e,...t){if(n=we(n),d_("collection","path",e),n instanceof Xr){let s=pe.fromString(e,...t);return Gy(s),new Mn(n,null,s)}{if(!(n instanceof tt||n instanceof Mn))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=n._path.child(pe.fromString(e,...t));return Gy(s),new Mn(n.firestore,null,s)}}function ut(n,e,...t){if(n=we(n),arguments.length===1&&(e=qa.newId()),d_("doc","path",e),n instanceof Xr){let s=pe.fromString(e,...t);return jy(s),new tt(n,null,new G(s))}{if(!(n instanceof tt||n instanceof Mn))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=n._path.child(pe.fromString(e,...t));return jy(s),new tt(n.firestore,n instanceof Mn?n.converter:null,new G(s))}}var kc=class{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wc(this,"async_queue_retry"),this.Vu=()=>{let s=Ba();s&&$("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;let t=Ba();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;let t=Ba();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});let t=new Pt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gn(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){let t=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;let i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(s);throw rt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);let i=Th.createAndSchedule(this,e,t,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(let t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(let t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){let t=this.Tu.indexOf(e);this.Tu.splice(t,1)}};function Hy(n){return function(t,s){if(typeof t!="object"||t===null)return!1;let i=t;for(let r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(n,["next","error","complete"])}var bt=class extends Xr{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new kc,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new kc(e),this._firestoreClient=void 0,await e}}};function h_(n,e,t){t||(t="(default)");let s=is(n,"firestore");if(s.isInitialized(t)){let i=s.getImmediate({identifier:t}),r=s.getOptions(t);if(Ut(r,e))return i;throw new q(L.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new q(L.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return s.initialize({options:e,instanceIdentifier:t})}function Ms(n){if(n._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iA(n),n._firestoreClient}function iA(n){var e,t,s;let i=n._freezeSettings(),r=function(c,l,u,h){return new fd(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,u_(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new xh(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}function f_(n){return ZS(Ms(n=lt(n,bt)))}function p_(n){return eA(Ms(n=lt(n,bt)))}var Zr=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n($e.fromBase64String(e))}catch(t){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Ds=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var jn=class{constructor(e){this._methodName=e}};var eo=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}};var to=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}};var rA=/^__.*__$/,Lh=class{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bn(e,this.data,t,this.fieldTransforms)}},Pc=class{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function m_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}var Nc=class n{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;let s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:s,xu:!1});return i.Ou(e),i}Nu(e){var t;let s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(m_(this.Cu)&&rA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}},Mh=class{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Uc(e)}Qu(e,t,s,i=!1){return new Nc({Cu:e,methodName:t,qu:s,path:Ve.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function qc(n){let e=n._freezeSettings(),t=Uc(n._databaseId);return new Mh(n._databaseId,!!e.ignoreUndefinedProperties,t)}function g_(n,e,t,s,i,r={}){let o=n.Qu(r.merge||r.mergeFields?2:0,e,t,i);mf("Data must be an object, but it was:",o,s);let c=w_(s,o),l,u;if(r.merge)l=new _t(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){let h=[];for(let p of r.mergeFields){let m=Uh(e,p,t);if(!o.contains(m))throw new q(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);E_(h,m)||h.push(m)}l=new _t(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new Lh(new ot(c),l,u)}var no=class n extends jn{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function y_(n,e,t){return new Nc({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}var Vh=class n extends jn{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){let t=y_(this,e,!0),s=this.Ku.map(r=>Vs(r,t)),i=new pn(s);return new Ri(e.path,i)}isEqual(e){return e instanceof n&&Ut(this.Ku,e.Ku)}},$h=class n extends jn{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){let t=y_(this,e,!0),s=this.Ku.map(r=>Vs(r,t)),i=new mn(s);return new Ri(e.path,i)}isEqual(e){return e instanceof n&&Ut(this.Ku,e.Ku)}},Fh=class n extends jn{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){let t=new Un(e.serializer,vv(e.serializer,this.$u));return new Ri(e.path,t)}isEqual(e){return e instanceof n&&this.$u===e.$u}};function v_(n,e,t,s){let i=n.Qu(1,e,t);mf("Data must be an object, but it was:",i,s);let r=[],o=ot.empty();xs(s,(l,u)=>{let h=gf(e,l,t);u=we(u);let p=i.Nu(h);if(u instanceof no)r.push(h);else{let m=Vs(u,p);m!=null&&(r.push(h),o.set(h,m))}});let c=new _t(r);return new Pc(o,c,i.fieldTransforms)}function __(n,e,t,s,i,r){let o=n.Qu(1,e,t),c=[Uh(e,s,t)],l=[i];if(r.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)c.push(Uh(e,r[m])),l.push(r[m+1]);let u=[],h=ot.empty();for(let m=c.length-1;m>=0;--m)if(!E_(u,c[m])){let E=c[m],R=l[m];R=we(R);let P=o.Nu(E);if(R instanceof no)u.push(E);else{let S=Vs(R,P);S!=null&&(u.push(E),h.set(E,S))}}let p=new _t(u);return new Pc(h,p,o.fieldTransforms)}function oA(n,e,t,s=!1){return Vs(t,n.Qu(s?4:3,e))}function Vs(n,e){if(b_(n=we(n)))return mf("Unsupported field value:",e,n),w_(n,e);if(n instanceof jn)return function(s,i){if(!m_(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);let r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,i){let r=[],o=0;for(let c of s){let l=Vs(c,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(n,e)}return function(s,i){if((s=we(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return vv(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){let r=ke.fromDate(s);return{timestampValue:ki(i.serializer,r)}}if(s instanceof ke){let r=new ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ki(i.serializer,r)}}if(s instanceof eo)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Zr)return{bytesValue:Av(i.serializer,s._byteString)};if(s instanceof tt){let r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:nf(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof to)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return tf(c.serializer,l)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${Bc(s)}`)}(n,e)}function w_(n,e){let t={};return nv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(n,(s,i)=>{let r=Vs(i,e.Mu(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function b_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ke||n instanceof eo||n instanceof Zr||n instanceof tt||n instanceof jn||n instanceof to)}function mf(n,e,t){if(!b_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let s=Bc(t);throw s==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+s)}}function Uh(n,e,t){if((e=we(e))instanceof Ds)return e._internalPath;if(typeof e=="string")return gf(n,e);throw Dc("Field path arguments must be of type string or ",n,!1,void 0,t)}var aA=new RegExp("[~\\*/\\[\\]]");function gf(n,e,t){if(e.search(aA)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ds(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Dc(n,e,t,s,i){let r=s&&!s.isEmpty(),o=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new q(L.INVALID_ARGUMENT,c+n+l)}function E_(n,e){return n.some(t=>t.isEqual(e))}var Oc=class{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Bh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(yf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Bh=class extends Oc{data(){return super.data()}};function yf(n,e){return typeof e=="string"?gf(n,e):e instanceof Ds?e._internalPath:e._delegate._internalPath}function I_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var so=class{},qh=class extends so{};function gn(n,e,...t){let s=[];e instanceof so&&s.push(e),s=s.concat(t),function(r){let o=r.filter(l=>l instanceof jh).length,c=r.filter(l=>l instanceof xc).length;if(o>1||o>0&&c>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(let i of s)n=i._apply(n);return n}var xc=class n extends qh{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new n(e,t,s)}_apply(e){let t=this._parse(e);return T_(e._query,t),new Ns(e.firestore,e.converter,Ad(e._query,t))}_parse(e){let t=qc(e.firestore);return function(r,o,c,l,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Wy(p,h);let E=[];for(let R of p)E.push(zy(l,r,R));m={arrayValue:{values:E}}}else m=zy(l,r,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Wy(p,h),m=oA(c,o,p,h==="in"||h==="not-in");return oe.create(u,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function Ot(n,e,t){let s=e,i=yf("where",n);return xc._create(i,s,t)}var jh=class n extends so{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:he.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,r){let o=i,c=r.getFlattenedFilters();for(let l of c)T_(o,l),o=Ad(o,l)}(e._query,t),new Ns(e.firestore,e.converter,Ad(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};function zy(n,e,t){if(typeof(t=we(t))=="string"){if(t==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dv(e)&&t.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let s=e.path.child(pe.fromString(t));if(!G.isDocumentKey(s))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jr(n,new G(s))}if(t instanceof tt)return jr(n,t._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bc(t)}.`)}function Wy(n,e){if(!Array.isArray(n)||n.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function T_(n,e){let t=function(i,r){for(let o of i)for(let c of o.getFlattenedFilters())if(r.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}var Gh=class{convertValue(e,t="none"){switch(Is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let s={};return xs(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertVectorValue(e){var t,s,i;let r=(i=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Ee(o.doubleValue));return new to(r)}convertGeoPoint(e){return new eo(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":let s=Zh(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Br(e));default:return null}}convertTimestamp(e){let t=fn(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){let s=pe.fromString(e);Y(Mv(s));let i=new Ei(s.get(1),s.get(3)),r=new G(s.popFirst(5));return i.isEqual(t)||rt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}};function S_(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}var _s=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Lc=class extends Oc{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let s=this._document.data.field(yf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}},vi=class extends Lc{data(e={}){return super.data(e)}},Mc=class{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new _s(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new vi(this._firestore,this._userDataWriter,s.key,s,new _s(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{let l=new vi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new _s(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>r||c.type!==3).map(c=>{let l=new vi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new _s(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:cA(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function cA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function A_(n){n=lt(n,tt);let e=lt(n.firestore,bt);return tA(Ms(e),n._key).then(t=>R_(e,n,t))}var io=class extends Gh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,t)}};function ho(n){n=lt(n,Ns);let e=lt(n.firestore,bt),t=Ms(e),s=new io(e);return I_(n._query),nA(t,n._query).then(i=>new Mc(e,s,n,i))}function dt(n,e,t){n=lt(n,tt);let s=lt(n.firestore,bt),i=S_(n.converter,e,t);return Gc(s,[g_(qc(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,et.none())])}function Jt(n,e,t,...s){n=lt(n,tt);let i=lt(n.firestore,bt),r=qc(i),o;return o=typeof(e=we(e))=="string"||e instanceof Ds?__(r,"updateDoc",n._key,e,t,s):v_(r,"updateDoc",n._key,e),Gc(i,[o.toMutation(n._key,et.exists(!0))])}function $i(n){return Gc(lt(n.firestore,bt),[new Rs(n._key,et.none())])}function jc(n,...e){var t,s,i;n=we(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Hy(e[o])||(r=e[o],o++);let c={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Hy(e[o])){let p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,u,h;if(n instanceof tt)u=lt(n.firestore,bt),h=oo(n._key.path),l={next:p=>{e[o]&&e[o](R_(u,n,p))},error:e[o+1],complete:e[o+2]};else{let p=lt(n,Ns);u=lt(p.firestore,bt),h=p._query;let m=new io(u);l={next:E=>{e[o]&&e[o](new Mc(u,m,p,E))},error:e[o+1],complete:e[o+2]},I_(n._query)}return function(m,E,R,P){let S=new Jr(P),M=new Yr(E,S,R);return m.asyncQueue.enqueueAndForget(async()=>uf(await Rc(m),M)),()=>{S.Za(),m.asyncQueue.enqueueAndForget(async()=>df(await Rc(m),M))}}(Ms(u),h,c,l)}function Gc(n,e){return function(s,i){let r=new Pt;return s.asyncQueue.enqueueAndForget(async()=>HS(await XS(s),i,r)),r.promise}(Ms(n),e)}function R_(n,e,t){let s=t.docs.get(e._key),i=new io(n);return new Lc(n,i,e._key,s,new _s(t.hasPendingWrites,t.fromCache),e.converter)}var Hh=class{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=vf(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function C_(n){return new Hh(n)}var zh=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Oi.provider,this._offlineComponentProvider={build:t=>new Oh(t,e?.cacheSizeBytes,this.forceOwnership)}}};function vf(n){return new zh(n?.forceOwnership)}var Wh=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=qc(e)}set(e,t,s){this._verifyNotCommitted();let i=ed(e,this._firestore),r=S_(i.converter,t,s),o=g_(this._dataReader,"WriteBatch.set",i._key,r,i.converter!==null,s);return this._mutations.push(o.toMutation(i._key,et.none())),this}update(e,t,s,...i){this._verifyNotCommitted();let r=ed(e,this._firestore),o;return o=typeof(t=we(t))=="string"||t instanceof Ds?__(this._dataReader,"WriteBatch.update",r._key,t,s,i):v_(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,et.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=ed(e,this._firestore);return this._mutations=this._mutations.concat(new Rs(t._key,et.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ed(n,e){if((n=we(n)).firestore!==e)throw new q(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function fo(){return new no("deleteField")}function Et(...n){return new Vh("arrayUnion",n)}function k_(...n){return new $h("arrayRemove",n)}function Hn(n){return new Fh("increment",n)}function $s(n){return Ms(n=lt(n,bt)),new Wh(n,e=>Gc(n,e))}(function(e,t=!0){(function(i){xi=i})(Cn),qt(new Ct("firestore",(s,{instanceIdentifier:i,options:r})=>{let o=s.getProvider("app").getImmediate(),c=new bt(new sd(s.getProvider("auth-internal")),new ad(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:t},r),c._setSettings(r),c},"PUBLIC").setMultipleInstances(!0)),ft(zg,"4.7.3",e),ft(zg,"4.7.3","esm2017")})();function zn(n){return P_(void 0,n)}function P_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:let t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(let t in e)!e.hasOwnProperty(t)||!lA(t)||(n[t]=P_(n[t],e[t]));return n}function lA(n){return n!=="__proto__"}function N_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var uA="FirebaseError",po=class n extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=uA,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_f.prototype.create)}},_f=class{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){let s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?dA(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new po(i,c,s)}};function dA(n,e){try{let t=0,s="";for(;t<n.length;){let i=n.indexOf("{$",t);if(i===-1){s+=n.substring(t);break}let r=n.indexOf("}",i+2);if(r===-1){s+=n.substring(t);break}let o=n.substring(i+2,r),c=e[o];s+=n.substring(t,i)+(c!=null?String(c):`<${o}?>`),t=r+1}return s}catch{return n}}var rP=4*60*60*1e3;function D_(n){return n&&n._delegate?n._delegate:n}var Hc=class{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var fA=[],be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));var pA={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},mA=be.INFO,gA={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},yA=(n,e,...t)=>{if(e<n.logLevel)return;let s=new Date().toISOString(),i=gA[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},zc=class{constructor(e){this.name=e,this._logLevel=mA,this._logHandler=yA,this._userLogHandler=null,fA.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}};var O_="@firebase/ai",Tf="3.0.0";var Fi="AI",vA="global",_A="firebasevertexai.googleapis.com",Kc="v1beta",x_=Tf,wA="gl-js",bA="hybrid",EA=180*1e3,IA="gemini-3.5-flash-lite";var Z=class n extends po{constructor(e,t,s){let i=Fi,r=`${i}/${e}`,o=`${i}: ${t} (${r})`;super(e,o),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,n),Object.setPrototypeOf(this,n.prototype),this.toString=()=>o}};var L_=["user","model","function","system"];var B_={HARM_SEVERITY_NEGLIGIBLE:"HARM_SEVERITY_NEGLIGIBLE",HARM_SEVERITY_LOW:"HARM_SEVERITY_LOW",HARM_SEVERITY_MEDIUM:"HARM_SEVERITY_MEDIUM",HARM_SEVERITY_HIGH:"HARM_SEVERITY_HIGH",HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"};var nt={STOP:"STOP",MAX_TOKENS:"MAX_TOKENS",SAFETY:"SAFETY",RECITATION:"RECITATION",OTHER:"OTHER",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"};var Vt={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},Wn={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};var J={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};var Bs={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};var vn={AGENT_PLATFORM:"AGENT_PLATFORM",GOOGLE_AI:"GOOGLE_AI"};var Qc=class{constructor(e){this.backendType=e}},Us=class extends Qc{constructor(){super(vn.GOOGLE_AI)}_getModelPath(e,t){return`/${Kc}/projects/${e}/${t}`}_getTemplatePath(e,t){return`/${Kc}/projects/${e}/templates/${t}`}},Yc=class extends Qc{constructor(e){super(vn.AGENT_PLATFORM),this.location=vA,e&&(this.location=e)}_getModelPath(e,t){return`/${Kc}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${Kc}/projects/${e}/locations/${this.location}/templates/${t}`}};function TA(n){if(n instanceof Us)return`${Fi}/googleai`;if(n instanceof Yc)return`${Fi}/agentplatform/${n.location}`;throw new Z(J.ERROR,`Invalid backend: ${JSON.stringify(n.backendType)}`)}function SA(n){let e=n.split("/");if(e[0]!==Fi)throw new Z(J.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"agentplatform":let s=e[2];if(!s)throw new Z(J.ERROR,`Invalid instance identifier, unknown location '${n}'`);return new Yc(s);case"googleai":return new Us;default:throw new Z(J.ERROR,`Invalid instance identifier string: '${n}'`)}}var Ue=new zc("@firebase/ai"),yn;(function(n){n.UNAVAILABLE="unavailable",n.DOWNLOADABLE="downloadable",n.DOWNLOADING="downloading",n.AVAILABLE="available"})(yn||(yn={}));var q_={type:"text",languages:["en"]},wf=[q_,{type:"image"}],bf=[q_],Jc=class n{constructor(e,t,s){this.languageModelProvider=e,this.mode=t,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:wf,expectedOutputs:bf}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=wf),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=bf)):this.onDeviceParams.createOptions={expectedInputs:wf,expectedOutputs:bf})}async isAvailable(e){if(!this.mode)return Ue.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===Vt.ONLY_IN_CLOUD)return Ue.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;let t=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);if(this.mode===Vt.ONLY_ON_DEVICE){if(t===yn.UNAVAILABLE)throw new Z(J.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(t===yn.DOWNLOADABLE||t===yn.DOWNLOADING){Ue.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(s){throw new Z(J.ERROR,s.message)}return!0}return!0}return t!==yn.AVAILABLE?(Ue.debug(`On-device inference unavailable because availability is "${t}".`),!1):n.isOnDeviceRequest(e)?!0:(Ue.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){let t=await this.createSession(),s=await Promise.all(e.contents.map(n.toLanguageModelMessage)),i=await t.prompt(s,this.onDeviceParams.promptOptions);return n.toResponse(i)}async generateContentStream(e){let t=await this.createSession(),s=await Promise.all(e.contents.map(n.toLanguageModelMessage)),i=t.promptStreaming(s,this.onDeviceParams.promptOptions);return n.toStreamResponse(i)}async countTokens(e){throw new Z(J.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return Ue.debug("Empty prompt rejected for on-device inference."),!1;for(let t of e.contents){if(t.parts.some(s=>"functionResponse"in s))return Ue.debug("Content with a function response part rejected for on-device inference."),!1;for(let s of t.parts)if("inlineData"in s&&s.inlineData&&n.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return Ue.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){let t=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);return(t===yn.DOWNLOADABLE||t===yn.DOWNLOADING)&&this.download(e),t}download(e){if(this.downloadPromise)return;let t={...this.onDeviceParams.createOptions};t&&!t.monitor&&e&&(t.monitor=s=>{s.addEventListener("downloadprogress",i=>{e(i.loaded)})}),this.downloadPromise=this.languageModelProvider?.create(t).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){let t=await Promise.all(e.parts.map(n.toLanguageModelMessageContent));return{role:n.toLanguageModelMessageRole(e.role),content:t}}static async toLanguageModelMessageContent(e){if("text"in e&&typeof e.text=="string")return{type:"text",value:e.text};if("inlineData"in e&&e.inlineData){let s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new Z(J.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new Z(J.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");let e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){let t=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,i){let r=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});i.enqueue(t.encode(`data: ${r}

`))}}))}}};Jc.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function AA(n,e,t){let i=(e||N_()).LanguageModel;if(i&&n)return new Jc(i,n,t)}var Sf=class{constructor(e,t,s,i,r){this.app=e,this.backend=t,this.chromeAdapterFactory=r;let o=i?.getImmediate({optional:!0}),c=s?.getImmediate({optional:!0});this.auth=c||null,this.appCheck=o||null}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}};function RA(n,{instanceIdentifier:e}){if(!e)throw new Z(J.ERROR,"AIService instance identifier is undefined.");let t=SA(e),s=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new Sf(s,t,i,r,AA)}function CA(n){if(n.app?.options?.apiKey)if(n.app?.options?.projectId){if(!n.app?.options?.appId)throw new Z(J.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new Z(J.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new Z(J.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');let e={apiKey:n.app.options.apiKey,project:n.app.options.projectId,appId:n.app.options.appId,automaticDataCollectionEnabled:n.app.automaticDataCollectionEnabled,backend:n.backend};if(vt(n.app)&&n.app.settings.appCheckToken){let t=n.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:t})}else n.appCheck&&(n.options?.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>n.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>n.appCheck.getToken());return n.auth&&(e.getAuthToken=()=>n.auth.getToken()),e}var Af=class n{constructor(e,t){this._apiSettings=CA(e),this.model=n.normalizeModelName(t,this._apiSettings.backend.backendType)}static normalizeModelName(e,t){return t===vn.GOOGLE_AI?n.normalizeGoogleAIModelName(e):n.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let t;return e.includes("/")?e.startsWith("models/")?t=`publishers/google/${e}`:t=e:t=`publishers/google/models/${e}`,t}};var kA="Timeout has expired.",Ef="AbortError",Rf=class{constructor(e){this.params=e}toString(){let e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){return this.params.singleRequestOptions?.baseUrl??`https://${_A}`}get queryParams(){let e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}};function PA(n){let e=[];return e.push(`${wA}/${x_}`),e.push(`fire/${x_}`),(n.params.apiSettings.inferenceMode===Vt.PREFER_ON_DEVICE||n.params.apiSettings.inferenceMode===Vt.PREFER_IN_CLOUD)&&e.push(bA),e.join(" ")}async function NA(n){let e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",PA(n)),e.append("x-goog-api-key",n.params.apiSettings.apiKey),n.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",n.params.apiSettings.appId),n.params.apiSettings.getAppCheckToken){let t=await n.params.apiSettings.getAppCheckToken();t&&(e.append("X-Firebase-AppCheck",t.token),t.error&&Ue.warn(`Unable to obtain a valid App Check token: ${t.error.message}`))}if(n.params.apiSettings.getAuthToken){let t=await n.params.apiSettings.getAuthToken();t&&e.append("Authorization",`Firebase ${t.accessToken}`)}return e}async function Vf(n,e){let t=new Rf(n),s,i=n.singleRequestOptions?.signal,r=n.singleRequestOptions?.timeout!=null&&n.singleRequestOptions.timeout>=0?n.singleRequestOptions.timeout:EA,o=new AbortController,c=setTimeout(()=>{o.abort(new DOMException(kA,Ef)),Ue.debug(`Aborting request to ${t} due to timeout (${r}ms)`)},r),l=AbortSignal.any(i?[i,o.signal]:[o.signal]);if(i&&i.aborted)throw clearTimeout(c),new DOMException(i.reason??"Aborted externally before fetch",Ef);try{let u={method:"POST",headers:await NA(t),signal:l,body:e};if(s=await fetch(t.toString(),u),!s.ok){let h="",p;try{let m=await s.json();h=m.error.message,m.error.details&&(h+=` ${JSON.stringify(m.error.details)}`,p=m.error.details)}catch{}throw s.status===403&&p&&p.some(m=>m.reason==="SERVICE_DISABLED")&&p.some(m=>m.links?.[0]?.description.includes("Google developers console API activation"))?new Z(J.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${t.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:p}):new Z(J.FETCH_ERROR,`Error fetching from ${t}: [${s.status} ${s.statusText}] ${h}`,{status:s.status,statusText:s.statusText,errorDetails:p})}}catch(u){let h=u;throw u.code!==J.FETCH_ERROR&&u.code!==J.API_NOT_ENABLED&&u instanceof Error&&u.name!==Ef&&(h=new Z(J.ERROR,`Error fetching from ${t.toString()}: ${u.message}`),h.stack=u.stack),h}finally{clearTimeout(c)}return s}function Wc(n){if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&Ue.warn(`This response had ${n.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),G_(n.candidates[0]))throw new Z(J.RESPONSE_ERROR,`Response error: ${Fs(n)}. Response body stored in error.response`,{response:n});return!0}else return!1}function Xt(n){return"type"in n&&n.type?n:n.text!==void 0?{...n,type:"text"}:n.inlineData!==void 0?{...n,type:"inlineData"}:n.functionCall!==void 0?{...n,type:"functionCall"}:n.functionResponse!==void 0?{...n,type:"functionResponse"}:n.fileData!==void 0?{...n,type:"fileData"}:n.executableCode!==void 0?{...n,type:"executableCode"}:n.codeExecutionResult!==void 0?{...n,type:"codeExecutionResult"}:n}function Xc(n,e=Wn.IN_CLOUD){if(n.candidates&&!n.candidates[0].hasOwnProperty("index")&&(n.candidates[0].index=0),n.candidates)for(let s of n.candidates)s.content?.parts&&(s.content.parts=s.content.parts.map(Xt));let t=DA(n);return t.inferenceSource=e,t}function DA(n){return n.text=()=>{if(Wc(n))return M_(n,e=>!("thought"in e&&e.thought));if(n.promptFeedback)throw new Z(J.RESPONSE_ERROR,`Text not available. ${Fs(n)}`,{response:n});return""},n.thoughtSummary=()=>{if(Wc(n)){let e=M_(n,t=>!!("thought"in t&&t.thought));return e===""?void 0:e}else if(n.promptFeedback)throw new Z(J.RESPONSE_ERROR,`Thought summary not available. ${Fs(n)}`,{response:n})},n.inlineDataParts=()=>{if(Wc(n))return OA(n);if(n.promptFeedback)throw new Z(J.RESPONSE_ERROR,`Data not available. ${Fs(n)}`,{response:n})},n.functionCalls=()=>{if(Wc(n))return j_(n);if(n.promptFeedback)throw new Z(J.RESPONSE_ERROR,`Function call not available. ${Fs(n)}`,{response:n})},n}function M_(n,e){let t=[];if(n.candidates?.[0].content?.parts)for(let s of n.candidates?.[0].content?.parts){let i=Xt(s);i.type==="text"&&e(i)&&t.push(i.text)}return t.length>0?t.join(""):""}function j_(n){if(!n)return;let e=[];if(n.candidates?.[0].content?.parts)for(let t of n.candidates?.[0].content?.parts){let s=Xt(t);s.type==="functionCall"&&e.push(s.functionCall)}if(e.length>0)return e}function OA(n){let e=[];if(n.candidates?.[0].content?.parts)for(let t of n.candidates?.[0].content?.parts){let s=Xt(t);s.type==="inlineData"&&e.push(s)}if(e.length>0)return e}var xA=[nt.RECITATION,nt.SAFETY,nt.BLOCKLIST,nt.PROHIBITED_CONTENT,nt.SPII,nt.MALFORMED_FUNCTION_CALL,nt.IMAGE_SAFETY,nt.IMAGE_PROHIBITED_CONTENT,nt.IMAGE_OTHER,nt.NO_IMAGE,nt.IMAGE_RECITATION,nt.LANGUAGE,nt.UNEXPECTED_TOOL_CALL,nt.TOO_MANY_TOOL_CALLS,nt.MISSING_THOUGHT_SIGNATURE,nt.MALFORMED_RESPONSE];function G_(n){return!!n.finishReason&&xA.some(e=>e===n.finishReason)}function Fs(n){let e="";if((!n.candidates||n.candidates.length===0)&&n.promptFeedback)e+="Response was blocked",n.promptFeedback?.blockReason&&(e+=` due to ${n.promptFeedback.blockReason}`),n.promptFeedback?.blockReasonMessage&&(e+=`: ${n.promptFeedback.blockReasonMessage}`);else if(n.candidates?.[0]){let t=n.candidates[0];G_(t)&&(e+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(e+=`: ${t.finishMessage}`))}return e}function $f(n){if(n!=null){if(typeof n=="string")return{role:"system",parts:[{type:"text",text:n}]};if(n.type==="text"||"text"in n&&typeof n.text=="string")return{role:"system",parts:[zn(Xt(n))]};if(n.parts){let e=n.parts.map(t=>zn(Xt(t)));return n.role?{...n,parts:e}:{role:"system",parts:e}}}}function mo(n){let e=[];if(typeof n=="string")e=[{type:"text",text:n}];else for(let t of n)typeof t=="string"?e.push({type:"text",text:t}):e.push(zn(Xt(t)));return LA(e)}function LA(n){let e={role:"user",parts:[]},t=!1,s=!1;for(let i of n)i.type==="functionResponse"||"functionResponse"in i?s=!0:t=!0,e.parts.push(i);if(t&&s)throw new Z(J.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!t&&!s)throw new Z(J.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function If(n){let e;if(n.contents){let t=n;e={...t,contents:t.contents.map(s=>({...s,parts:s.parts?s.parts.map(Xt):[]}))}}else e={contents:[mo(n)]};return n.systemInstruction&&(e.systemInstruction=$f(n.systemInstruction)),e}function MA(n){return n.parts&&Array.isArray(n.parts)?{...n,parts:n.parts.map(Ff)}:n}function Ff(n){let e;if("type"in n){let{type:t,...s}=n;e=s}else e=n;return e.functionResponse&&(e={...e,functionResponse:MA(e.functionResponse)}),e}function Uf(n){return n.parts?{...n,parts:n.parts.map(Ff)}:n}function H_(n){return n==null||typeof n=="string"?n:"parts"in n&&Array.isArray(n.parts)?Uf(n):Ff(n)}function z_(n){let e={...n};return e.contents&&(e.contents=e.contents.map(Uf)),e.systemInstruction&&(e.systemInstruction=H_(e.systemInstruction)),e}function VA(n){let e={...n};return e.contents&&(e.contents=e.contents.map(Uf)),e.systemInstruction&&(e.systemInstruction=H_(e.systemInstruction)),e}function W_(n){if(n.safetySettings?.forEach(e=>{if(e.method)throw new Z(J.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),n.generationConfig?.topK){let e=Math.round(n.generationConfig.topK);e!==n.generationConfig.topK&&(Ue.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),n.generationConfig.topK=e)}return n}function Bf(n){return{candidates:n.candidates?FA(n.candidates):void 0,prompt:n.promptFeedback?UA(n.promptFeedback):void 0,usageMetadata:n.usageMetadata}}function $A(n,e){return{generateContentRequest:{model:e,...n}}}function FA(n){let e=[],t;return e&&n.forEach(s=>{let i;if(s.citationMetadata&&(i={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(t=s.safetyRatings.map(o=>({...o,severity:o.severity??B_.HARM_SEVERITY_UNSUPPORTED,probabilityScore:o.probabilityScore??0,severityScore:o.severityScore??0}))),s.content?.parts?.some(o=>"videoMetadata"in o&&o.videoMetadata))throw new Z(J.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");let r={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:t,citationMetadata:i,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(r)}),e}function UA(n){let e=[];return n.safetyRatings.forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??B_.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:n.blockReason,safetyRatings:e,blockReasonMessage:n.blockReasonMessage}}var V_=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function BA(n,e,t){let s=n.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),i=HA(s),[r,o]=i.tee(),{response:c,firstValue:l}=await qA(o,e,t);return{stream:GA(r,e,t),response:c,firstValue:l}}async function qA(n,e,t){let[s,i]=n.tee(),r=s.getReader(),{value:o}=await r.read();return{firstValue:o,response:jA(i,e,t)}}async function jA(n,e,t){let s=[],i=n.getReader();for(;;){let{done:r,value:o}=await i.read();if(r){let c=zA(s);return e.backend.backendType===vn.GOOGLE_AI&&(c=Bf(c)),Xc(c,t)}s.push(o)}}async function*GA(n,e,t){let s=n.getReader();for(;;){let{value:i,done:r}=await s.read();if(r)break;let o;e.backend.backendType===vn.GOOGLE_AI?o=Xc(Bf(i),t):o=Xc(i,t);let c=o.candidates?.[0];!c?.content?.parts&&!c?.finishReason&&!c?.citationMetadata&&!c?.urlContextMetadata||(yield o)}}function HA(n){let e=n.getReader();return new ReadableStream({start(s){let i="";return r();function r(){return e.read().then(({value:o,done:c})=>{if(c){if(i.trim()){s.error(new Z(J.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}i+=o;let l=i.match(V_),u;for(;l;){try{u=JSON.parse(l[1])}catch{s.error(new Z(J.PARSE_FAILED,`Error parsing JSON response: "${l[1]}`));return}s.enqueue(u),i=i.substring(l[0].length),l=i.match(V_)}return r()})}}})}function zA(n){let t={promptFeedback:n[n.length-1]?.promptFeedback};for(let s of n)if(s.candidates)for(let i of s.candidates){let r=i.index||0;t.candidates||(t.candidates=[]),t.candidates[r]||(t.candidates[r]={index:i.index}),t.candidates[r].citationMetadata=i.citationMetadata,t.candidates[r].finishReason=i.finishReason,t.candidates[r].finishMessage=i.finishMessage,t.candidates[r].safetyRatings=i.safetyRatings,t.candidates[r].groundingMetadata=i.groundingMetadata;let o=i.urlContextMetadata;if(typeof o=="object"&&o!==null&&Object.keys(o).length>0&&(t.candidates[r].urlContextMetadata=o),i.content){if(!i.content.parts)continue;t.candidates[r].content||(t.candidates[r].content={role:i.content.role||"user",parts:[]});for(let c of i.content.parts){if("text"in c&&c.text==="")continue;if(Object.keys(c).length===0)throw new Z(J.INVALID_CONTENT,"Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");let l=Xt({...c});Object.keys(l).length>0&&t.candidates[r].content.parts.push(l)}}}return t}var WA=[J.FETCH_ERROR,J.ERROR,J.API_NOT_ENABLED];async function K_(n,e,t,s){if(!e)return{response:await s(),inferenceSource:Wn.IN_CLOUD};switch(e.mode){case Vt.ONLY_ON_DEVICE:if(await e.isAvailable(n))return{response:await t(),inferenceSource:Wn.ON_DEVICE};throw new Z(J.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case Vt.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:Wn.IN_CLOUD};case Vt.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:Wn.IN_CLOUD}}catch(i){if(i instanceof Z&&WA.includes(i.code)&&await e.isAvailable(n))return{response:await t(),inferenceSource:Wn.ON_DEVICE};throw i}case Vt.PREFER_ON_DEVICE:return await e.isAvailable(n)?{response:await t(),inferenceSource:Wn.ON_DEVICE}:{response:await s(),inferenceSource:Wn.IN_CLOUD};default:throw new Z(J.ERROR,`Unexpected infererence mode: ${e.mode}`)}}async function KA(n,e,t,s){return t=z_(t),n.backend.backendType===vn.GOOGLE_AI&&(t=W_(t)),Vf({task:"streamGenerateContent",model:e,apiSettings:n,stream:!0,singleRequestOptions:s},JSON.stringify(t))}async function Q_(n,e,t,s,i){let r=await K_(t,s,()=>s.generateContentStream(t),()=>KA(n,e,t,i));return BA(r.response,n,r.inferenceSource)}async function QA(n,e,t,s){return t=z_(t),n.backend.backendType===vn.GOOGLE_AI&&(t=W_(t)),Vf({model:e,task:"generateContent",apiSettings:n,stream:!1,singleRequestOptions:s},JSON.stringify(t))}async function Y_(n,e,t,s,i){let r=await K_(t,s,()=>s.generateContent(t),()=>QA(n,e,t,i)),o=await YA(r.response,n);return{response:Xc(o,r.inferenceSource)}}async function YA(n,e){let t=await n.json();return e.backend.backendType===vn.GOOGLE_AI?Bf(t):t}var $_="SILENT_ERROR",F_=10,Cf=class{constructor(e,t,s){this.params=t,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,zn(this._history).map(e=>({...e,parts:e.parts?e.parts.map(Xt):[]}))}async _sendMessage(e,t){let s={};await this._sendPromise;let i=[];return this._sendPromise=this._sendPromise.then(async()=>{let r,o=0,c=this.requestOptions?.maxSequentialFunctionCalls??F_;do{let l;if(r){o++;let p=await this._callFunctionsAsNeeded(r);l=mo(p)}else l=mo(e);let u=this._formatRequest(l,[...i]);i.push(l);let h=await this._callGenerateContent(u,t);if(h)if(s=h,r=this._getCallableFunctionCalls(h.response),h.response.candidates&&h.response.candidates.length>0){let p={parts:h.response.candidates?.[0].content.parts||[],role:h.response.candidates?.[0].content.role||"model"};i.push(zn(p))}else{let p=Fs(h.response);p&&Ue.warn(`sendMessage() was unsuccessful. ${p}. Inspect response object for details.`)}else r=void 0}while(r&&o<c);r&&o>=c&&Ue.warn(`Automatic function calling exceeded the limit of ${c} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(i),s}async _sendMessageStream(e,t){await this._sendPromise;let s=[],r=(async()=>{let o,c=0,l=this.requestOptions?.maxSequentialFunctionCalls??F_,u;do{let h;if(o){c++;let m=await this._callFunctionsAsNeeded(o);h=mo(m)}else h=mo(e);let p=this._formatRequest(h,[...s]);if(s.push(h),u=await this._callGenerateContentStream(p,t),o=this._getCallableFunctionCalls(u.firstValue),o&&u.firstValue&&u.firstValue.candidates&&u.firstValue.candidates.length>0){let m={...u.firstValue.candidates[0].content};m.role||(m.role="model"),s.push(m)}}while(o&&c<l);return o&&c>=l&&Ue.warn(`Automatic function calling exceeded the limit of ${l} function calls. Returning last model response.`),{stream:u.stream,response:u.response}})();return this._sendPromise=this._sendPromise.then(async()=>r).catch(o=>{throw new Error($_)}).then(o=>o.response).then(o=>{if(o.candidates&&o.candidates.length>0){this._history=this._history.concat(s);let c={...o.candidates[0].content};c.role||(c.role="model"),this._history.push(zn(c))}else{let c=Fs(o);c&&Ue.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(o=>{o.message!==$_&&o.name!=="AbortError"&&Ue.error(o)}),r}_getCallableFunctionCalls(e){let t=this.params?.tools?.find(i=>i.functionDeclarations);if(!t?.functionDeclarations)return;let s=j_(e);if(s){for(let i of s)if(!t.functionDeclarations?.some(o=>o.name===i.name&&typeof o.functionReference=="function"))return;return s}}async _callFunctionsAsNeeded(e){let t=[],s=[],i=this.params?.tools?.find(r=>r.functionDeclarations);if(i&&i.functionDeclarations){for(let o of e){let c=i.functionDeclarations.find(l=>l.name===o.name);if(c?.functionReference){let l=Promise.resolve(c.functionReference(o.args)).catch(u=>{let h=new Z(J.ERROR,`Error in user-defined function "${c.name}": ${u.message}`);throw h.stack=u.stack,h});t.push({name:o.name,id:o.id,results:l}),s.push(l)}}await Promise.all(s);let r=[];for(let{name:o,id:c,results:l}of t){let u={name:o,response:await l};c&&(u.id=c),r.push({type:"functionResponse",functionResponse:u})}return r}else throw new Z(J.REQUEST_ERROR,'No function declarations were provided in "tools".')}};var JA=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],XA={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},U_={user:["model"],function:["model"],model:["user","function"],system:[]};function ZA(n){let e=null;for(let t of n){let{role:s,parts:i}=t;if(!e&&s!=="user")throw new Z(J.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!L_.includes(s))throw new Z(J.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(L_)}`);if(!Array.isArray(i))throw new Z(J.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(i.length===0)throw new Z(J.INVALID_CONTENT,"Each Content should have at least one part");let r={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let c of i){if(c.type)r[c.type]+=1;else for(let l of["text","inlineData","functionCall","functionResponse","fileData","executableCode","codeExecutionResult"])l in c&&(r[l]+=1);"thought"in c&&c.thought&&(r.thought+=1),"thoughtSignature"in c&&c.thoughtSignature&&(r.thoughtSignature+=1)}let o=XA[s];for(let c of JA)if(!o.includes(c)&&r[c]>0)throw new Z(J.INVALID_CONTENT,`Content with role '${s}' can't contain '${c}' part`);if(e&&!U_[s].includes(e.role))throw new Z(J.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(U_)}`);e=t}}var kf=class extends Cf{constructor(e,t,s,i,r){super(e,i,r),this.model=t,this.chromeAdapter=s,this.params=i,this.requestOptions=r,i?.history&&(ZA(i.history),this._history=zn(i.history)),this.params?.systemInstruction!=null&&(this.params={...this.params,systemInstruction:$f(this.params.systemInstruction)})}_formatRequest(e,t){return{safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,...t,e]}}_callGenerateContent(e,t){return Y_(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}_callGenerateContentStream(e,t){return Q_(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}async sendMessage(e,t){return this._sendMessage(e,t)}async sendMessageStream(e,t){return this._sendMessageStream(e,t)}};async function eR(n,e,t,s){t=VA(t);let i="";if(n.backend.backendType===vn.GOOGLE_AI){let o=$A(t,e);i=JSON.stringify(o)}else i=JSON.stringify(t);return(await Vf({model:e,task:"countTokens",apiSettings:n,stream:!1,singleRequestOptions:s},i)).json()}async function tR(n,e,t,s,i){if(s?.mode===Vt.ONLY_ON_DEVICE)throw new Z(J.UNSUPPORTED,"countTokens() is not supported for on-device models.");return eR(n,e,t,i)}var Pf=class extends Af{constructor(e,t,s,i){super(e,t.model),this.chromeAdapter=i,this.generationConfig=t.generationConfig||{},nR(this.generationConfig),this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=$f(t.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===Vt.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===yn.UNAVAILABLE){let s=new Z(J.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===Vt.ONLY_ON_DEVICE)throw s;Ue.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,t){let s=If(e);return Y_(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...t})}async generateContentStream(e,t){let s=If(e),{stream:i,response:r}=await Q_(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...t});return{stream:i,response:r}}startChat(e){return new kf(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,t){let s=If(e);return tR(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...t})}};function nR(n){if(n.thinkingConfig?.thinkingBudget!=null&&n.thinkingConfig?.thinkingLevel)throw new Z(J.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(n.responseSchema!=null&&n.responseJsonSchema!=null)throw new Z(J.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((n.responseSchema!=null||n.responseJsonSchema!=null)&&n.responseMimeType!=="application/json"&&n.responseMimeType!=="text/x.enum")throw new Z(J.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}var Be=class{constructor(e){if(!e.type&&!e.anyOf)throw new Z(J.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(let t in e)this[t]=e[t];this.type=e.type,this.format=e.hasOwnProperty("format")?e.format:void 0,this.nullable=e.hasOwnProperty("nullable")?!!e.nullable:!1}toJSON(){let e={type:this.type};for(let t in this)this.hasOwnProperty(t)&&this[t]!==void 0&&(t!=="required"||this.type===Bs.OBJECT)&&(e[t]=this[t]);return e}static array(e){return new xf(e,e.items)}static object(e){return new Lf(e,e.properties,e.optionalProperties)}static string(e){return new Zc(e)}static enumString(e){return new Zc(e,e.enum)}static integer(e){return new Nf(e)}static number(e){return new Df(e)}static boolean(e){return new Of(e)}static anyOf(e){return new Mf(e)}},Nf=class extends Be{constructor(e){super({type:Bs.INTEGER,...e})}},Df=class extends Be{constructor(e){super({type:Bs.NUMBER,...e})}},Of=class extends Be{constructor(e){super({type:Bs.BOOLEAN,...e})}},Zc=class extends Be{constructor(e,t){super({type:Bs.STRING,...e}),this.enum=t}toJSON(){let e=super.toJSON();return this.enum&&(e.enum=this.enum),e}},xf=class extends Be{constructor(e,t){super({type:Bs.ARRAY,...e}),this.items=t}toJSON(){let e=super.toJSON();return e.items=this.items.toJSON(),e}},Lf=class extends Be{constructor(e,t,s=[]){super({type:Bs.OBJECT,...e}),this.properties=t,this.optionalProperties=s}toJSON(){let e=super.toJSON();e.properties={...this.properties};let t=[];if(this.optionalProperties){for(let s of this.optionalProperties)if(!this.properties.hasOwnProperty(s))throw new Z(J.INVALID_SCHEMA,`Property "${s}" specified in "optionalProperties" does not exist.`)}for(let s in this.properties)this.properties.hasOwnProperty(s)&&(e.properties[s]=this.properties[s].toJSON(),this.optionalProperties.includes(s)||t.push(s));return t.length>0&&(e.required=t),delete e.optionalProperties,e}},Mf=class extends Be{constructor(e){if(e.anyOf.length===0)throw new Z(J.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){let e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(t=>t.toJSON())),e}};var sR="audio-processor",pP=`
  class AudioProcessor extends AudioWorkletProcessor {
    constructor(options) {
      super();
      this.targetSampleRate = options.processorOptions.targetSampleRate;
      // 'sampleRate' is a global variable available inside the AudioWorkletGlobalScope,
      // representing the native sample rate of the AudioContext.
      this.inputSampleRate = sampleRate;
    }

    /**
     * This method is called by the browser's audio engine for each block of audio data.
     * Input is a single input, with a single channel (input[0][0]).
     */
    process(inputs) {
      const input = inputs[0];
      if (input && input.length > 0 && input[0].length > 0) {
        const pcmData = input[0]; // Float32Array of raw audio samples.
        
        // Simple linear interpolation for resampling.
        const resampled = new Float32Array(Math.round(pcmData.length * this.targetSampleRate / this.inputSampleRate));
        const ratio = pcmData.length / resampled.length;
        for (let i = 0; i < resampled.length; i++) {
          resampled[i] = pcmData[Math.floor(i * ratio)];
        }

        // Convert Float32 (-1, 1) samples to Int16 (-32768, 32767)
        const resampledInt16 = new Int16Array(resampled.length);
        for (let i = 0; i < resampled.length; i++) {
          const sample = Math.max(-1, Math.min(1, resampled[i]));
          if (sample < 0) {
            resampledInt16[i] = sample * 32768;
          } else {
            resampledInt16[i] = sample * 32767;
          }
        }
        
        this.port.postMessage(resampledInt16);
      }
      // Return true to keep the processor alive and processing the next audio block.
      return true;
    }
  }

  // Register the processor with a name that can be used to instantiate it from the main thread.
  registerProcessor('${sR}', AudioProcessor);
`;function J_(n=fr(),e){n=D_(n);let t=is(n,Fi),s=e?.backend??new Us,i={useLimitedUseAppCheckTokens:e?.useLimitedUseAppCheckTokens??!1},r=TA(s),o=t.getImmediate({identifier:r});return o.options=i,o}var iR=["mode","onDeviceParams","inCloudParams"];function X_(n,e,t){let s=e,i;if(s.mode){for(let c of Object.keys(e))iR.includes(c)||Ue.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${c}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);i=s.inCloudParams||{model:IA}}else i=e;if(!i.model)throw new Z(J.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");let r=n.chromeAdapterFactory?.(s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),o=new Pf(n,i,t,r);return o._apiSettings.inferenceMode=s.mode,o}function rR(){qt(new Hc(Fi,RA,"PUBLIC").setMultipleInstances(!0)),ft(O_,Tf),ft(O_,Tf,"esm2020")}rR();var go={apiKey:"AIzaSyCeaPsR7JKZ9b9ZuIStcNYWQV2BPZjiT-I",authDomain:"tindahan-pos-2a850.firebaseapp.com",projectId:"tindahan-pos-2a850",storageBucket:"tindahan-pos-2a850.firebasestorage.app",messagingSenderId:"558515779246",appId:"1:558515779246:web:acc20eee6456c289395f3f"};var qf=[["Lucky Me! Pancit Canton Original","Noodles","pc",18,15.5,36,10],["Lucky Me! Beef Mami","Noodles","pc",13,11,30,10],["Payless Xtra Big Pancit Shanghai","Noodles","pc",20,17,20,6],["Nescaf\xE9 Original 3in1 (sachet)","Coffee","pc",9,7.6,60,15],["Kopiko Brown Coffee (sachet)","Coffee","pc",10,8.5,60,15],["Great Taste White (sachet)","Coffee","pc",10,8.5,40,10],["Bear Brand Powdered Milk 33g","Milk","pc",15,13,30,8],["Alaska Evaporada 370ml","Milk","pc",38,34,12,4],["555 Sardines 155g","Canned goods","pc",25,22,24,6],["Ligo Sardines 155g","Canned goods","pc",27,24,18,6],["Argentina Corned Beef 150g","Canned goods","pc",42,37,12,4],["Coke 1.5L","Drinks","pc",75,66,12,4],["Coke Mismo 290ml","Drinks","pc",20,17,24,6],["Royal Tru-Orange 1.5L","Drinks","pc",70,62,8,3],["Ice water (bag)","Drinks","pc",5,2,50,10],["Yelo (ice, small bag)","Drinks","pc",10,5,30,8],["Piattos Cheese 40g","Snacks","pc",20,17,20,6],["Nova Country Cheddar 40g","Snacks","pc",20,17,20,6],["SkyFlakes Crackers 25g","Snacks","pc",8,6.5,40,10],["Pandesal","Bread","pc",5,3.5,60,10],["Bread (loaf)","Bread","pc",10,8,20,5],["Itlog (egg)","Fresh","pc",9,7.5,60,12],["Chicken (per kilo)","Fresh","kg",200,180,10,2],["Bigas Regular (per kilo)","Rice & sugar","kg",48,43,50,10],["Brown sugar (per kilo)","Rice & sugar","kg",80,72,10,2],["Datu Puti Soy Sauce 200ml","Condiments","pc",15,13,15,4],["Datu Puti Vinegar 200ml","Condiments","pc",14,12,15,4],["Magic Sarap 8g","Condiments","pc",5,4,50,12],["Cooking oil (small pack)","Condiments","pc",25,21,15,4],["Surf Sun Fresh (sachet)","Household","pc",8,6.8,40,10],["Tide Bar","Household","pc",22,19,15,4],["Joy Dishwashing (sachet)","Household","pc",8,6.5,30,8],["Safeguard Soap 60g","Personal care","pc",30,26,12,4],["Palmolive Shampoo (sachet)","Personal care","pc",7,5.8,48,12],["Colgate Toothpaste (sachet)","Personal care","pc",10,8.5,24,6]].map(([n,e,t,s,i,r,o])=>({name:n,cat:e,unit:t,price:s,cost:i,stock:r,reorder:o,barcode:"",starter:!0}));var j=n=>Math.round((+n||0)*100)/100,Le=n=>Math.round((+n||0)*1e3)/1e3,nl=n=>n.cost?j((n.price||0)-n.cost):null;function Gf(n,e,t){if(n=j(n),e=j(e),t=j(t),!n||!e||n===e)return null;let s=j(e-n);return{diff:s,up:s>0,oldProfit:j(t-n),newProfit:j(t-e),keepPrice:j(t+s)}}function yo(n,e,{ts:t,via:s,supplier:i="",by:r="",byName:o=""}){let c=j(n.cost),l=j(e.cost),u=j(n.price),h=j(e.price);return c===l&&u===h&&!(s==="restock"&&i)?null:{id:t.toString(36)+Math.random().toString(36).slice(2,6),ts:t,via:s,oldCost:c,cost:l,oldPrice:u,price:h,supplier:i,by:r,byName:o}}function sw(n,e){let t=[];return n.forEach(s=>(s.costLog||[]).forEach(i=>{i.ts>=e&&i.via!=="new"&&(i.oldCost!==i.cost||i.oldPrice!==i.price)&&t.push({...i,pid:s._id,name:s.name,unit:s.unit})})),t.sort((s,i)=>i.ts-s.ts)}var iw=n=>[...new Set(n.flatMap(e=>[e.supplier,...(e.costLog||[]).map(t=>t.supplier)]).filter(Boolean))].sort((e,t)=>e.localeCompare(t)),oR=n=>n.cost&&n.price?(n.price-n.cost)/n.price*100:null,Hf={rev:"Highest sales",profit:"Highest profit",qty:"Most sold",profitEach:"Highest profit each",lowprofit:"Lowest profit (losses first)",lowqty:"Least sold",stock:"Lowest stock left",name:"Name A\u2013Z"};function rw(n,e,t=()=>null){let s=n.slice();if(e==="name")return s.sort((c,l)=>c.name.localeCompare(l.name));let i={rev:[c=>c.rev,-1],profit:[c=>c.profit,-1],qty:[c=>c.qty,-1],profitEach:[c=>c.profitEach,-1],lowprofit:[c=>c.profit,1],lowqty:[c=>c.qty,1],stock:[c=>c.pid?t(c.pid):null,1]},[r,o]=i[e]||i.rev;return s.sort((c,l)=>{let u=r(c)??null,h=r(l)??null;return u===null||h===null?u===h?l.rev-c.rev:u===null?1:-1:(u-h)*o||l.rev-c.rev})}var el={category:{by:n=>(n.cat||"Other").toLowerCase(),dir:"asc"},name:{by:n=>(n.name||"").toLowerCase(),dir:"asc"},profit:{by:n=>nl(n),dir:"desc"},margin:{by:oR,dir:"desc"},price:{by:n=>+n.price||0,dir:"desc"},cost:{by:n=>n.cost?+n.cost:null,dir:"desc"},stock:{by:n=>+(n.stock??0),dir:"asc"},value:{by:n=>n.cost?Math.max(0,+(n.stock??0))*n.cost:null,dir:"desc"}},ow=[["category:asc","Category"],["name:asc","Name, A to Z"],["name:desc","Name, Z to A"],["profit:desc","Highest profit"],["profit:asc","Lowest profit"],["margin:desc","Highest margin"],["margin:asc","Lowest margin"],["price:desc","Highest price"],["price:asc","Lowest price"],["cost:desc","Highest cost"],["cost:asc","Lowest cost"],["stock:asc","Lowest stock"],["stock:desc","Highest stock"],["value:desc","Highest stock value"],["value:asc","Lowest stock value"]];function aw(n,e="category",t){let s=el[e]||el.category,i=(t||s.dir)==="desc"?-1:1,r=o=>(o.name||"").toLowerCase();return n.slice().sort((o,c)=>{let l=s.by(o),u=s.by(c);if(l===null||u===null){if(l!==u)return l===null?1:-1}else{if(l<u)return-i;if(l>u)return i}return r(o)<r(c)?-1:r(o)>r(c)?1:0})}var cw=[["all","All items"],["low","Low stock"],["out","Out of stock"],["loss","Selling at a loss"],["nocost","No cost entered"]];function lw(n,e){let t=+(n.stock??0);return e==="low"?t<=(n.reorder??5):e==="out"?t<=0:e==="loss"?!!n.cost&&n.cost>(n.price||0):e==="nocost"?!n.cost:!0}var tl=n=>{let e=j(n);return(e<0?"-\u20B1":"\u20B1")+Math.abs(e).toLocaleString("en-PH",{minimumFractionDigits:2,maximumFractionDigits:2})},uw=n=>{let e=Math.round(+n||0);return(e<0?"-\u20B1":"\u20B1")+Math.abs(e).toLocaleString("en-PH")};function zf(n){let e=new Map;return n.forEach(t=>t.items.forEach(s=>{let i=s.pid||"c:"+s.name,r=e.get(i)||{pid:s.pid||null,name:s.name,unit:s.unit,qty:0,rev:0,cost:0};r.qty+=s.qty,r.rev+=s.qty*s.price,r.cost+=s.qty*(s.cost||0),e.set(i,r)})),[...e.values()].map(t=>({...t,profit:t.cost?j(t.rev-t.cost):null,profitEach:t.cost&&t.qty?j((t.rev-t.cost)/t.qty):null})).sort((t,s)=>s.rev-t.rev)}var Wf={qty:"Best selling",rev:"Top sales",profit:"Highest profit"},Kf=n=>n in Wf?n:"qty";function dw(n,e="qty",t=10){let s=Kf(e),i=r=>r[s]??-1/0;return n.slice().sort((r,o)=>i(o)-i(r)||o.rev-r.rev).slice(0,t)}var hw=n=>String(n??"").replace(/\s+/g," ").trim().slice(0,40);function vo(n,e,{lowToo:t=!1}={}){let s=new Map;return e.filter(i=>!i.void).forEach(i=>i.items.forEach(r=>{r.pid&&s.set(r.pid,(s.get(r.pid)||0)+r.qty)})),n.filter(i=>{let r=i.stock??0;return r<=0||t&&r<=(i.reorder??5)}).map(i=>{let r=Le(i.stock??0),o=Le(s.get(i._id)||0),c=i.reorder??5,l=Math.max(1,Math.ceil(Math.max(o,c*2)-Math.max(r,0)));return{id:i._id,name:i.name,unit:i.unit||"pc",stock:r,week:o,reorder:c,buy:l,cost:j(l*(i.cost||0)),hasCost:!!i.cost,supplier:(i.supplier||"").trim(),out:r<=0}}).sort((i,r)=>r.out-i.out||r.week-i.week||i.name.localeCompare(r.name))}function fw(n,e){let t=new Map;n.forEach(r=>{let o=r.supplier||"No supplier saved";t.has(o)||t.set(o,[]),t.get(o).push(r)});let s=[e,""];[...t.keys()].sort((r,o)=>(r==="No supplier saved")-(o==="No supplier saved")||r.localeCompare(o)).forEach(r=>{s.push(r+":"),t.get(r).forEach(o=>s.push(`- ${o.name} x ${o.buy}${o.unit==="kg"?" kg":""}${o.hasCost?" (about "+tl(o.cost)+")":""}`)),s.push("")});let i=j(n.reduce((r,o)=>r+o.cost,0));return s.push(`${n.length} item${n.length===1?"":"s"} \xB7 about ${tl(i)}`),s.join(`
`)}function pw({today:n=[],lastWeek:e=[],past7:t=[],expenses:s=[],products:i=[]}){let r=V=>V.filter(H=>!H.void),o=(V,H)=>V.reduce((ee,W)=>ee+H(W),0),c=r(n),l=r(e),u=r(t),h=j(o(c,V=>V.total)),p=j(h-o(c,Kn)),m=j(o(s.filter(V=>V.cat!=="Stock purchase"),V=>V.amount||0)),E=0,R=0;c.forEach(V=>V.items.forEach(H=>{E+=H.unit==="kg"?1:H.qty,H.cost||(R+=H.qty*H.price)}));let P=0,S=0;i.forEach(V=>{let H=Math.max(0,V.stock??0);P+=H*(V.cost||0),S+=H*(V.price||0)});let M=j(o(l,V=>V.total)),F=c.length;return{sales:h,profit:p,n:F,opex:m,net:j(p-m),per100:h?j(p/h*100):null,ratio:h&&p>0?Math.round(h/p*10)/10:null,profitPerSale:F?j(p/F):null,items:Le(E),itemsPerSale:F?Math.round(E/F*10)/10:null,lastWeek:M,vsLastWeek:M?Math.round((h-M)/M*100):null,dayAvgSales:j(o(u,V=>V.total)/7),dayAvgProfit:j(o(u,V=>V.total-Kn(V))/7),noCost:j(R),noCostShare:h?Math.round(R/h*100):0,stockCost:j(P),stockRetail:j(S)}}var sl=(n,e)=>{let t=j(n-e);return{diff:t,status:Math.abs(t)<.005?"match":t>0?"over":"short"}};function mw(n){let e=n;if(typeof n=="string"){let i=n.replace(/^\s*```(?:json)?|```\s*$/g,"");try{e=JSON.parse(i)}catch{return{supplier:"",date:"",lines:[]}}}let t=i=>{let r=typeof i=="number"?i:parseFloat(String(i??"").replace(/[₱,\s]/g,""));return isFinite(r)?r:NaN},s=(Array.isArray(e&&e.lines)?e.lines:[]).map(i=>{let r=String(i&&i.name||"").replace(/\s+/g," ").trim(),o=t(i&&i.qty)>0?t(i.qty):1,c=t(i&&i.unitPrice),l=t(i&&i.lineTotal);return!(c>0)&&l>0&&(c=l/o),{name:r,qty:Le(o),unitPrice:j(c),lineTotal:l>0?j(l):j(c*o)}}).filter(i=>i.name&&i.unitPrice>0);return{supplier:String(e&&e.supplier||"").trim().slice(0,60),date:String(e&&e.date||"").trim().slice(0,20),lines:s}}var Z_=n=>String(n||"").toUpperCase().replace(/[^A-Z0-9.]+/g," ").replace(/\s+/g," ").trim(),ew=n=>{let e=n.replace(/\s/g,""),t=new Map;for(let s=0;s<e.length-1;s++){let i=e.slice(s,s+2);t.set(i,(t.get(i)||0)+1)}return t};function aR(n,e){let t=Z_(n),s=Z_(e);if(!t||!s)return 0;if(t===s)return 1;let i=ew(t),r=ew(s),o=0,c=0,l=0;i.forEach(E=>{c+=E}),r.forEach(E=>{l+=E}),i.forEach((E,R)=>{o+=Math.min(E,r.get(R)||0)});let u=c+l?2*o/(c+l):0,h=t.split(" "),p=new Set(s.split(" ")),m=h.filter(E=>p.has(E)).length/Math.max(h.length,p.size);return Math.round((u*.7+m*.3)*1e3)/1e3}function gw(n,e,t=.45){let s=null,i=0;return e.forEach(r=>{let o=aR(n,r.name);o>i&&(i=o,s=r)}),i>=t?{product:s,score:i}:{product:null,score:i}}function yw(n,e,t=1){let s=t>0?t:1,i=j(n.unitPrice/s);if(!e)return{status:"nomatch",newCost:i,addQty:Le(n.qty*s)};let r=j(e.cost||0),o=j(e.price||0),c=j(i-r);return{status:r?Math.abs(c)<.005?"same":c>0?"up":"down":"nocost",newCost:i,oldCost:r,diff:c,pct:r?Math.round(c/r*100):null,price:o,newProfit:j(o-i),oldProfit:r?j(o-r):null,keepPrice:r?j(o+c):null,loss:i>o,addQty:Le(n.qty*s)}}var vw=n=>!!n&&n.status!=="nomatch"&&n.status!=="same"&&!n.loss&&!(n.pct!==null&&n.pct!==void 0&&Math.abs(n.pct)>50),_w=n=>!!n&&n.status!=="nomatch"&&(n.loss||n.pct!==null&&n.pct!==void 0&&Math.abs(n.pct)>50),Qf=(n,e)=>{let t=[];for(let s=0;s<n.length;s+=e)t.push(n.slice(s,s+e));return t},ww=n=>[["Item","Barcode","Category","Unit","Stock","Cost","Price"],...n.slice().sort((e,t)=>(e.name||"").localeCompare(t.name||"")).map(e=>[e.name||"",e.barcode||"",e.cat||"Other",e.unit==="kg"?"kg":"pc",Le(e.stock??0),e.cost||0,e.price||0])],il=n=>"\uFEFF"+n.map(e=>e.map(t=>`"${String(t??"").replace(/"/g,'""')}"`).join(",")).join(`\r
`),bw=n=>n.stockReset?Le(n.stockReset.before+((n.stock??0)-n.stockReset.to)):null,Kn=n=>n.items.reduce((e,t)=>e+(t.cost||0)*t.qty,0);function Ew(n,e){let t=n.findIndex(i=>i.pid&&i.pid===e.pid&&i.unit!=="kg");if(t<0)return n.push({...e,qty:e.qty||1}),n.length-1;let[s]=n.splice(t,1);return s.qty+=1,n.push(s),n.length-1}var Iw=n=>n.map((e,t)=>t).reverse(),_o=n=>Object.entries(n||{}).map(([e,t])=>({id:e,...t})).sort((e,t)=>(e.name||"").localeCompare(t.name||"")),rl=(n,e=Date.now())=>{if(!n)return"";let t=Math.max(0,Math.floor((e-n)/6e4)),s=Math.floor(t/60);return t<1?"just started":s?`${s}h ${String(t%60).padStart(2,"0")}m`:`${t}m`},wo=(n,e)=>{let[t,s,i]=String(n).split("-").map(Number),[r,o]=String(e||"").split(":").map(Number);return[t,s,i,r,o].some(c=>isNaN(c))?NaN:new Date(t,s-1,i,r,o).getTime()},Ui=n=>{let e=new Date(n);return String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")};function ol(n,e,t=Date.now()){let s=i=>Math.floor(i/6e4);if(isNaN(n))return"Choose the time in.";if(s(n)>s(t))return"Time in can't be later than now.";if(e!=null){if(isNaN(e))return"Choose the time out.";if(s(e)>s(t))return"Time out can't be later than now.";if(s(e)<s(n))return"Time out must be after time in."}return""}var Yf=n=>n<1?"0m":Math.floor(n/60)?`${Math.floor(n/60)}h ${String(n%60).padStart(2,"0")}m`:`${n}m`,Bi=n=>Object.entries(n||{}).map(([e,t])=>({id:e,...t})).filter(e=>e&&e.in).sort((e,t)=>e.in-t.in),al=(n,e=Date.now())=>Math.max(0,Math.floor(((n.out??e)-n.in)/6e4));function Tw(n,e=Date.now()){let t=new Map;return Bi(n).forEach(s=>{let i=s.crewId||s.name,r=t.get(i)||{name:s.name,mins:0,open:!1};r.mins+=al(s,e),r.open=r.open||s.out==null,t.set(i,r)}),[...t.values()].sort((s,i)=>i.mins-s.mins)}var Sw=(n,e,t)=>{let s=Jf(n,e);return s&&(!t||s.id!==t.id)?s:null},Jf=(n,e)=>e&&e.id&&n&&n[e.id]?{id:e.id,...n[e.id],since:e.since}:null,Xf=n=>/^\d{4}$/.test(String(n||""));async function Zf(n,e){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(`tindahan:${n}:${e}`));return[...new Uint8Array(t)].map(s=>s.toString(16).padStart(2,"0")).join("")}var Aw=n=>String(n||"").trim().split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")||"?";function Rw(n,e){let t=j(n.reduce((i,r)=>i+r.qty*r.price,0)),s=Math.min(t,Math.max(0,+e||0));return{sub:t,disc:s,total:j(t-s),count:n.reduce((i,r)=>i+(r.unit==="kg"?1:r.qty),0)}}function Cw(n,e){let t=n===""?e:j(parseFloat(n));return isNaN(t)||t<e-.004?null:{tendered:t,change:j(t-e)}}var cl=n=>String(n??"").replace(/\D/g,"").slice(-4),ep=n=>{let e=String(n??"").replace(/\D/g,"");return e.length===0||e.length>=4},tw=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],jf=n=>{let[e,t,s]=n.split("-").map(Number);return Date.UTC(e,t-1,s)},cR=n=>new Date(jf(n)+864e5).toISOString().slice(0,10),kw=(n,e)=>n.reduce((t,s)=>s.day&&s.day<t?s.day:t,e);function nw(n,e){let[t,s,i]=n.split("-").map(Number);if(e==="week")return new Date(Date.UTC(t,s-1,i-7)).toISOString().slice(0,10);let r=e==="year"||s===1?t-1:t,o=e==="year"?s:s===1?12:s-1,c=new Date(Date.UTC(t,s,0)).getUTCDate(),l=new Date(Date.UTC(r,o,0)).getUTCDate();return`${r}-${String(o).padStart(2,"0")}-${String(i===c?l:Math.min(i,l)).padStart(2,"0")}`}var Pw=(n,e,t)=>[nw(n,t),nw(e,t)],tp=n=>{let e=n.filter(t=>!t.void);return{sales:j(e.reduce((t,s)=>t+s.total,0)),profit:j(e.reduce((t,s)=>t+s.total-Kn(s),0)),n:e.length}},Nw=(n,e)=>e?Math.round((n-e)/Math.abs(e)*100):null,lR=n=>(n%12||12)+(n<12?"am":"pm");function Dw(n,e,t,s=i=>new Date(i.ts).getHours()){let i=n.filter(h=>!h.void&&h.day>=e&&h.day<=t),r,o=[],c,l;if(e===t){r="hour",c=s,l=lR;let h=6,p=21;i.forEach(m=>{let E=s(m);h=Math.min(h,E),p=Math.max(p,E)});for(let m=h;m<=p;m++)o.push(m)}else if((jf(t)-jf(e))/864e5<62){r="day",c=h=>h.day,l=h=>tw[+h.slice(5,7)-1]+" "+ +h.slice(8);for(let h=e;h<=t;h=cR(h))o.push(h)}else{r="month",c=P=>P.day.slice(0,7);let h=e.slice(0,4)!==t.slice(0,4);l=P=>tw[+P.slice(5,7)-1]+(h?" '"+P.slice(2,4):"");let[p,m]=e.split("-").map(Number),[E,R]=t.split("-").map(Number);for(;p<E||p===E&&m<=R;)o.push(p+"-"+String(m).padStart(2,"0")),++m>12&&(m=1,p++)}let u=new Map(o.map(h=>[h,{key:h,label:l(h),sales:0,profit:0,n:0}]));return i.forEach(h=>{let p=u.get(c(h));p&&(p.sales+=h.total,p.profit+=h.total-Kn(h),p.n++)}),{unit:r,points:[...u.values()].map(h=>({...h,sales:j(h.sales),profit:j(h.profit)}))}}var np=n=>{let e=new Set(n&&n.gcashVoid||[]);return(n&&n.gcash||[]).map(t=>({...t,void:e.has(t.id)})).sort((t,s)=>s.ts-t.ts)},ll=n=>j((n.kind==="in"?n.amount:-n.amount)+(n.fee||0));function bo(n){let e={ins:0,outs:0,inCount:0,outCount:0,fees:0,cash:0,wallet:0};return np(n).filter(t=>!t.void).forEach(t=>{t.kind==="in"?(e.ins+=t.amount,e.inCount++,e.wallet-=t.amount):(e.outs+=t.amount,e.outCount++,e.wallet+=t.amount),e.fees+=t.fee||0,e.cash+=ll(t)}),["ins","outs","fees","cash","wallet"].forEach(t=>{e[t]=j(e[t])}),e}var Ow=({cashIn:n=0,cashSales:e=0,utangPaidCash:t=0,drops:s=0,drawerExpenses:i=0,gcash:r=0})=>n+e+t-s-i+r;function xw(n,e){let t=n.reduce((o,c)=>o+c.subtotal,0),s=n.reduce((o,c)=>o+(c.discount||0),0),i=n.reduce((o,c)=>o+Kn(c),0),r=e.filter(o=>o.cat!=="Stock purchase").reduce((o,c)=>o+c.amount,0);return{gross:t,disc:s,net:t-s,cost:i,opex:r}}var v=(n,e=document)=>e.querySelector(n),ve=(n,e=document)=>[...e.querySelectorAll(n)],O=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),x=tl,fl=uw,Lw=n=>String(n).padStart(2,"0"),ie=(n=new Date)=>{let e=new Date(n);return e.getFullYear()+"-"+Lw(e.getMonth()+1)+"-"+Lw(e.getDate())},_n=(n,e)=>{let[t,s,i]=n.split("-").map(Number);return ie(new Date(t,s-1,i+e))},qe=n=>{let[e,t,s]=n.split("-").map(Number);return new Date(e,t-1,s).toLocaleDateString("en-PH",{weekday:"short",month:"short",day:"numeric"})},ze=n=>new Date(n).toLocaleTimeString("en-PH",{hour:"numeric",minute:"2-digit"}),He=(n,e)=>e==="kg"?Le(n).toLocaleString("en-PH",{maximumFractionDigits:3})+" kg":(Math.round(n*100)/100).toLocaleString("en-PH"),ce={get(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},Io=(n,e)=>Promise.race([n,new Promise((t,s)=>setTimeout(()=>s({code:"timeout"}),e))]),uR={home:'<path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"/>',cart:'<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.2a1 1 0 0 0 1 .8h9.8a1 1 0 0 0 1-.8L21 7H6"/>',box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',wallet:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',book:'<path d="M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17H7a2 2 0 0 1-2-2z"/><path d="M9 7h6M9 11h6M9 15h3"/>',sliders:'<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',refresh:'<path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v5h-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',phone:'<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>'},Re=(n,e=20)=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${uR[n]}</svg>`,dR=v(".brandmark svg")?v(".brandmark svg").outerHTML:"",Mw=[["dashboard","Dashboard","home"],["sell","Sell","cart"],["gcash","GCash","phone"],["inventory","Inventory","box"],["reports","Sales Report","chart"],["expenses","Expenses","wallet"],["utang","Utang","book"],["setup","Store Setup","sliders"]],St=!window.pos,Hw=["close","bestby","buylist","viewsale","range","exportcsv","invsort","costchanges","dutylog","cloudrefresh","signout"];if(St){document.body.classList.add("viewonly");let n=document.createElement("style");n.textContent=`body.viewonly [data-act]${Hw.map(e=>`:not([data-act="${e}"])`).join("")}{display:none!important}`,document.head.append(n)}var hR=["Stock purchase","Kuryente (electricity)","Tubig (water)","Rent","Load / Internet","Transport / Delivery","Supplies","Salary","Other"],zw=go&&go.apiKey&&!/PASTE/.test(go.apiKey),ul=null,Tt=null,Me=null;zw&&(ul=du(go),Tt=ju(ul),Me=h_(ul,{localCache:C_({tabManager:vf()})}));var ye=(...n)=>ut(Me,"stores",y.sid,...n),mt=n=>Vi(Me,"stores",y.sid,n),y={u:null,sid:null,store:{},stores:[],role:null,products:new Map,sales:new Map,customers:new Map,expenses:new Map,shifts:new Map,got:{},serverSeen:!1,unsubs:[],cart:ce.get("pos.cart",[]),discount:0,cat:"All",q:"",view:null,report:{range:"today",from:ie(),to:ie()},inv:{q:"",cat:"All",show:"all",sort:ce.get("pos.invSort","category"),dir:ce.get("pos.invDir","asc")},custQ:"",termName:ce.get("pos.termName","Counter 1"),printer:ce.get("pos.printer",""),paper:ce.get("pos.paper",58),autoPrint:ce.get("pos.autoPrint",!1)},Ne=()=>y.role==="owner",wn=()=>ce.set("pos.cart",y.cart),Gi=()=>_n(ie(),-7);function en(n){let e=n&&n.code;return e==="permission-denied"?"You don't have permission to do that in this store.":e==="unavailable"||e==="timeout"?"Couldn't reach the cloud. Check the internet and try again.":e==="resource-exhausted"?"The cloud project has hit its daily free limit. The owner of the app needs to upgrade the Firebase plan.":e==="auth/invalid-credential"||e==="auth/wrong-password"||e==="auth/user-not-found"?"Wrong email or password.":e==="auth/email-already-in-use"?"That email already has an account. Log in instead.":e==="auth/weak-password"?"Use a password with at least 6 characters.":e==="auth/invalid-email"?"That email address doesn't look right.":e==="auth/network-request-failed"?"No internet connection. Connect and try again.":e==="auth/too-many-requests"?"Too many tries. Wait a few minutes and try again.":"Something went wrong: "+(n&&n.message||e||"unknown error")}var fe=n=>(n.catch(e=>z(en(e),"bad")),n);function Ki(n){let e=new Map(y.sales);return n&&n.forEach(t=>{e.has(t._id)||e.set(t._id,t)}),[...e.values()].sort((t,s)=>t.ts-s.ts)}var Hi=n=>n.filter(e=>!e.void),To=n=>j(n.balance||0),Ww=()=>[...y.products.values()].filter(n=>(n.stock??0)<=(n.reorder??5)).sort((n,e)=>(n.stock??0)-(e.stock??0)),ap=()=>[...new Set([...y.products.values()].map(n=>n.cat||"Other"))].sort(),So=()=>y.u&&(y.u.displayName||y.u.email)||"Cashier",gl=()=>"pos.onDuty."+y.sid,En=()=>y.sid?Jf(y.store.crew,ce.get(gl(),null)):null,Wi=()=>"pos.assist."+y.sid,js=()=>y.sid?Sw(y.store.crew,ce.get(Wi(),null),En()):null,dl=n=>`<b class="dur" data-since="${n}">${rl(n)}</b>`,At=()=>(En()||{}).name||So();function Kw(n){let e=y.shifts.get(n)||{},t=Hi(Ki().filter(i=>i.day===n&&i.pay==="gcash")).reduce((i,r)=>i+r.total,0),s=0;return y.customers.forEach(i=>(i.entries||[]).forEach(r=>{r.type==="payment"&&r.day===n&&r.method==="gcash"&&(s+=r.amount)})),j(bo(e).wallet+t+s)}function Qw(n){let e=y.shifts.get(n)||{};return e.gcashStart==null?null:j(e.gcashStart+Kw(n))}var ip=n=>n.status==="match"?"Matches":n.status==="over"?`${x(n.diff)} more than expected`:`${x(-n.diff)} less than expected`,Yw=()=>v("#auth");function bn(n){v("#app").hidden=!0,v("#bottomnav").hidden=!0,Te();let e=Yw();e.hidden=!1,e.innerHTML=`<div class="auth-card"><div class="brandmark">${dR}<div><b>Tindahan</b><small>Cloud POS</small></div></div>${n}</div>`;let t=v("input",e);t&&t.focus()}var Qn=(n,e)=>{let t=v("#a-msg");t&&(t.className=e?"okmsg":"err",t.textContent=n,t.hidden=!n)};function Yn(n,e,t){n.disabled=e,t&&(n.textContent=t)}function fR(){bn(`<h1>Almost ready</h1><p class="sub" style="margin:0">This copy of Tindahan POS isn't connected to a cloud project yet. Paste your Firebase settings into <b>src/firebase-config.js</b> and build again (README, step 2).</p>`)}function Jw(n){bn(`<h1>Log in to your store</h1>
    <div id="a-msg" hidden></div>
    <form id="f-login"><div class="field"><label for="l-email">Email</label><input class="input" id="l-email" type="email" autocomplete="username" required></div>
    <div class="field"><label for="l-pass">Password</label><input class="input" id="l-pass" type="password" autocomplete="current-password" required></div>
    <button class="btn primary" type="submit" id="l-btn">Log in</button></form>
    <div class="alt"><button class="linkbtn" id="l-forgot">Forgot password?</button></div>
    <div class="alt">New to Tindahan POS? <button class="linkbtn" id="l-new">Create an account</button></div>`),n&&Qn(n,!0),v("#f-login").onsubmit=async e=>{e.preventDefault();let t=v("#l-btn");Yn(t,!0,"Logging in\u2026");try{await $u(Tt,v("#l-email").value.trim(),v("#l-pass").value)}catch(s){Yn(t,!1,"Log in"),Qn(en(s))}},v("#l-forgot").onclick=async()=>{let e=v("#l-email").value.trim();if(!e){Qn("Type your email above first, then tap Forgot password.");return}try{await Mu(Tt,e),Qn("We sent a password reset link to "+e+".",!0)}catch(t){Qn(en(t))}},v("#l-new").onclick=pR}function pR(){bn(`<h1>Create your account</h1>
    <div id="a-msg" hidden></div>
    <form id="f-sign"><div class="field"><label for="s-name">Your name</label><input class="input" id="s-name" required autocomplete="name"></div>
    <div class="field"><label for="s-email">Email</label><input class="input" id="s-email" type="email" required autocomplete="username"></div>
    <div class="field"><label for="s-pass">Password (6 or more characters)</label><input class="input" id="s-pass" type="password" minlength="6" required autocomplete="new-password"></div>
    <button class="btn primary" type="submit" id="s-btn">Create account</button></form>
    <div class="alt">Already have an account? <button class="linkbtn" id="s-back">Log in</button></div>
    <div class="alt">Joining as a cashier? Use the same email the store owner invited.</div>`),v("#f-sign").onsubmit=async n=>{n.preventDefault();let e=v("#s-btn");Yn(e,!0,"Creating\u2026"),y.signingUp=!0;try{let t=await Vu(Tt,v("#s-email").value.trim(),v("#s-pass").value);await Fu(t.user,{displayName:v("#s-name").value.trim()}),y.signingUp=!1,y.u=Tt.currentUser,Gs()}catch(t){y.signingUp=!1,Yn(e,!1,"Create account"),Qn(en(t)),Tt.currentUser&&(y.u=Tt.currentUser,Gs())}},v("#s-back").onclick=()=>Jw()}function Xw(n){bn(`<h1>No store yet</h1><p class="sub" style="margin:0">${O(n)}</p><div class="alt"><button class="linkbtn" id="pn-out">Sign out</button></div>`),v("#pn-out").onclick=()=>ds(Tt)}function mR(n){bn(`<h1>${O(n)}</h1><p class="sub" style="margin:0">One moment\u2026</p>`)}function cp(n){if(St)return Xw("Set up your store in the Tindahan POS app on the store computer first. Then sign in here with the same account to watch your sales.");bn(`<h1>${n?"Set up your store":"Add another store"}</h1>
    <p class="sub" style="margin:0">You can change these later in Store Setup.</p>
    <div id="a-msg" hidden></div>
    <form id="f-store"><div class="field"><label for="c-name">Store name</label><input class="input" id="c-name" required placeholder="e.g. Susvilla Store"></div>
    <div class="field"><label for="c-loc">Location</label><input class="input" id="c-loc" placeholder="e.g. Jaro, Iloilo City"></div>
    <label class="check"><input type="checkbox" id="c-starter" checked> Start with 35 common sari-sari items (edit prices later)</label>
    <button class="btn primary" type="submit" id="c-btn">Create store</button></form>
    <div class="alt">${y.stores.length?'<button class="linkbtn" id="c-cancel">Back to my store</button> \xB7 ':""}<button class="linkbtn" id="c-out">Sign out</button></div>`),v("#c-out").onclick=()=>ds(Tt);let e=v("#c-cancel");e&&(e.onclick=()=>Ro(y.stores[0].id)),v("#f-store").onsubmit=async t=>{t.preventDefault();let s=v("#c-btn");Yn(s,!0,"Creating\u2026");let i=y.u.uid,r=ut(Vi(Me,"stores"));try{if(await Io(dt(r,{name:v("#c-name").value.trim(),location:v("#c-loc").value.trim(),footer:"Salamat po! Balik po kayo.",ownerUid:i,memberUids:[i],roles:{[i]:"owner"},staff:{[i]:{name:At(),email:y.u.email}},created:Date.now()}),2e4),v("#c-starter").checked){let o=$s(Me);qf.forEach(c=>o.set(ut(Vi(Me,"stores",r.id,"products")),{...c,updated:Date.now()})),await Io(o.commit(),2e4)}y.stores.push({id:r.id}),Ro(r.id)}catch(o){Yn(s,!1,"Create store"),Qn(en(o))}}}function gR(n){if(St)return Xw("Accept your store invite in the Tindahan POS app on a computer first. Then sign in here with the same account.");bn(`<h1>You're invited</h1>
    <p style="margin:0">${O(n.invitedByName||"The store owner")} invited you to join <b>${O(n.storeName||"their store")}</b> as ${n.role==="owner"?"a co-owner":"a cashier"}.</p>
    <div id="a-msg" hidden></div>
    <button class="btn primary" id="i-join">Join ${O(n.storeName||"store")}</button>
    <div class="alt"><button class="linkbtn" id="i-own">Set up my own store instead</button> \xB7 <button class="linkbtn" id="i-out">Sign out</button></div>`),v("#i-out").onclick=()=>ds(Tt),v("#i-own").onclick=()=>cp(!y.stores.length),v("#i-join").onclick=async()=>{let e=v("#i-join");Yn(e,!0,"Joining\u2026");let t=y.u.uid,s=y.u.email.toLowerCase();try{await Io(Jt(ut(Me,"stores",n.storeId),{memberUids:Et(t),["roles."+t]:n.role,["staff."+t]:{name:So(),email:y.u.email}}),2e4),await $i(ut(Me,"invites",s)).catch(()=>{}),y.stores.push({id:n.storeId}),Ro(n.storeId)}catch(i){Yn(e,!1,"Try again"),Qn(en(i))}}}async function Gs(){Ao(),mR("Opening your store");let n=y.u.uid,e=(y.u.email||"").toLowerCase(),t;try{t=await ho(gn(Vi(Me,"stores"),Ot("memberUids","array-contains",n)))}catch(r){return bn(`<h1>Can't open your store</h1><div class="err">${O(en(r))}</div><button class="btn primary" id="r-retry">Try again</button><div class="alt"><button class="linkbtn" id="r-out">Sign out</button></div>`),v("#r-retry").onclick=Gs,v("#r-out").onclick=()=>ds(Tt)}if(y.stores=t.docs.map(r=>({id:r.id,...r.data()})),!y.stores.length&&t.metadata.fromCache){bn('<h1>No internet</h1><p class="sub" style="margin:0">Connect to the internet the first time you log in on this computer. After that, the app keeps working offline.</p><button class="btn primary" id="r-retry">Try again</button>'),v("#r-retry").onclick=Gs;return}let s=null;try{let r=await Io(A_(ut(Me,"invites",e)),8e3);r.exists()&&(s=r.data())}catch{}if(s&&!y.stores.some(r=>r.id===s.storeId))return gR(s);if(!y.stores.length)return cp(!0);let i=ce.get("pos.store",null);Ro((y.stores.find(r=>r.id===i)||y.stores[0]).id)}function Ao(){zi&&(zi(),zi=null),y.unsubs.forEach(n=>{try{n()}catch{}}),y.unsubs=[],y.products=new Map,y.sales=new Map,y.customers=new Map,y.expenses=new Map,y.shifts=new Map,y.got={},y.serverSeen=!1,y.store={},y.role=null,y.view=null,$t=null}function Ro(n){Ao(),y.sid=n,ce.set("pos.store",n),Yw().hidden=!0,v("#app").hidden=!1,v("#bottomnav").hidden=!1,yR(),lp(),eb(),Ws(),Zw()}function yR(){let n=Gi(),e=ie().slice(0,8)+"01",t=e<n?e:n,s=o=>{!o.fromCache&&!y.serverSeen&&(y.serverSeen=!0,Co())},i=o=>{o&&o.code==="permission-denied"?(z("You no longer have access to this store.","bad"),Gs()):Co()},r=(o,c)=>y.unsubs.push(jc(o,{includeMetadataChanges:!0},l=>{y[c]=new Map(l.docs.map(u=>[u.id,{...u.data(),_id:u.id,_pending:u.metadata.hasPendingWrites}])),y.got[c]=!0,s(l.metadata),zs()},i));y.unsubs.push(jc(ye(),o=>{if(!o.exists())return;if(y.store=o.data(),y.role=(y.store.roles||{})[y.u.uid]||null,!y.role){z("You no longer have access to this store.","bad"),Gs();return}let c=y.stores.findIndex(l=>l.id===y.sid);c>=0&&(y.stores[c]={id:y.sid,...y.store}),s(o.metadata),vR(),lp(),zs()},i)),r(mt("products"),"products"),r(gn(mt("sales"),Ot("day",">=",n)),"sales"),r(mt("customers"),"customers"),r(gn(mt("expenses"),Ot("day",">=",t)),"expenses"),r(gn(mt("shifts"),Ot("day",">=",n)),"shifts")}function lp(){let n=St?Mw.filter(s=>s[0]!=="sell"):Mw;v("#nav").innerHTML=n.map(([s,i,r])=>`<a href="#${s}" data-nav="${s}" aria-current="${y.view===s?"page":"false"}">${Re(r)}<span>${i}</span></a>`).join(""),v("#bottomnav").innerHTML=n.map(([s,i,r])=>`<a href="#${s}" data-nav="${s}" aria-current="${y.view===s?"page":"false"}">${Re(r)}<span>${i.replace("Sales Report","Reports").replace("Store Setup","Setup").replace("Dashboard","Home").replace("Inventory","Stock")}</span></a>`).join("");let e=y.stores.length>1?`<select class="store-switch" id="store-switch" aria-label="Switch store">${y.stores.map(s=>`<option value="${s.id}" ${s.id===y.sid?"selected":""}>${O(s.name||"Store")}</option>`).join("")}</select>`:"";v("#side-foot").innerHTML=`${e}<span class="role">${y.role==="owner"?"Owner":"Cashier"} \xB7 ${O(y.termName)}</span><span>F2 search \xB7 F9 checkout</span><div class="side-upd" id="side-upd"></div><button class="linkbtn" data-act="signout">Sign out</button>`;try{ml()}catch{}let t=v("#store-switch");t&&(t.onchange=()=>Ro(t.value))}function vR(){v("#store-name").textContent=y.store.name||"My Store",v("#store-loc").textContent=y.store.location||"",document.title=(y.store.name?y.store.name+" \u2013 ":"")+"Tindahan POS",Ws()}function Ws(){let n=v("#who");if(!n)return;if(St){let s=Bi((y.shifts.get(ie())||{}).dutyLog).filter(i=>!i.out);n.innerHTML=s.length?`<span class="duty-chip" style="cursor:default">On duty: <b>${s.map(i=>O(i.name)).join(" + ")}</b></span>`:`<span>${O(So())}</span>`;return}let e=En();if(!_o(y.store.crew).length){n.innerHTML=`<span>${O(So())}</span>`;return}n.innerHTML=`<button type="button" class="duty-chip" data-act="switchduty" title="Switch who's on duty">${Hs(e,30)}<span>${e?"On duty: <b>"+O(e.name)+"</b>"+(js()?" + "+O(js().name):"")+` <small class="muted dur" data-since="${e.since}">${rl(e.since)}</small>`:"<b>Who's on duty?</b>"}</span></button>`}function Hs(n,e){return n&&n.photo?`<img class="avatar" src="${O(n.photo)}" alt="" style="width:${e}px;height:${e}px">`:`<span class="avatar ph" style="width:${e}px;height:${e}px;font-size:${Math.round(e*.38)}px">${O(Aw(n&&n.name))}</span>`}function Zw(){ve(".dur[data-since]").forEach(t=>{t.textContent=rl(+t.dataset.since)});let n=new Date,e=v("#clock");e&&(e.innerHTML=`${O(n.toLocaleTimeString("en-PH",{hour:"numeric",minute:"2-digit"}))}<br>${O(n.toLocaleDateString("en-PH",{month:"short",day:"numeric",year:"numeric"}))}`)}var qi=()=>[...y.sales.values()].filter(n=>n._pending).length;function Co(){let n=v("#sync");if(!n)return;St&&!v("#vo-pill")&&n.insertAdjacentHTML("beforebegin",'<span class="pill vo" id="vo-pill">View only</span>'),v("#refresh-btn")||n.insertAdjacentHTML("beforebegin",`<button type="button" class="btn sm refresh-btn" id="refresh-btn" data-act="cloudrefresh" title="Get the latest from the cloud">${Re("refresh",16)}<span class="rtxt">Refresh</span></button>`);let e=qi(),t="pill",s="Connecting\u2026";navigator.onLine?e?(t+=" wait",s=`Uploading ${e} sale${e>1?"s":""}\u2026`):y.serverSeen&&(t+=" ok",s="Synced to cloud"):(t+=" bad",s=e?`Offline \xB7 ${e} sale${e>1?"s":""} saved here`:"Offline \xB7 sales are saved here"),n.className=t,n.innerHTML=`<i></i><span class="ptxt">${O(s)}</span>`,n.title=s}window.addEventListener("online",Co);window.addEventListener("offline",Co);var Vw=0;function zs(){cancelAnimationFrame(Vw),Vw=requestAnimationFrame(()=>{let n=ue[y.view];n&&n.update&&y.sid&&n.update(),Co(),St&&y.sid&&Ws()})}function eb(){if(!y.sid)return;let n=location.hash.slice(1);if((!ue[n]||St&&n==="sell")&&(n="dashboard"),ve("[data-nav]").forEach(t=>t.setAttribute("aria-current",t.dataset.nav===n?"page":"false")),n===y.view)return;y.view=n;let e=v("#view");e.className="view"+(n==="sell"?" fill":""),e.scrollTop=0,e.innerHTML=ue[n].mount(),ue[n].update&&ue[n].update(),ue[n].after&&ue[n].after()}window.addEventListener("hashchange",eb);function Ie(n,e,{wide:t}={}){let s=v("#modal-root");s.innerHTML=`<div class="scrim" data-scrim><div class="modal${t?" wide":""}" role="dialog" aria-modal="true" aria-label="${O(n)}"><div class="modal-h"><h2>${O(n)}</h2><button class="x" data-act="close" aria-label="Close">${Re("x")}</button></div><div class="modal-b">${e}</div></div></div>`;let i=v(".modal",s),r=v("[autofocus]",i)||v("input,select,button.btn",i);return r&&setTimeout(()=>r.focus(),30),i}function Te(){y.stopCam&&(y.stopCam(),y.stopCam=null),v("#modal-root").innerHTML="",y.view==="sell"&&setTimeout(()=>v("#pos-q")&&v("#pos-q").focus(),30)}var rp=()=>!!v("#modal-root .scrim");function z(n,e){let t=document.createElement("div");t.className="toast"+(e==="bad"?" bad":""),t.textContent=n,v("#toasts").append(t),setTimeout(()=>t.remove(),e==="bad"?5200:2600)}function It(n,e,t,s,i=!0){let r=Ie(n,`<p style="margin:0">${O(e)}</p><div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn ${i?"solid-danger":"primary"}" id="cf-ok">${O(t)}</button></div>`);v("#cf-ok",r).onclick=()=>{Te(),s()}}var Zt=()=>Ne()?!0:(z("Only the store owner can do that.","bad"),!1);function pl(n){if(n<=0)return 100;let e=Math.pow(10,Math.floor(Math.log10(n)));for(let t of[1,1.5,2,2.5,3,4,5,6,8,10])if(t*e>=n)return t*e;return 10*e}var yl=n=>n>=1e3?"\u20B1"+(n/1e3).toLocaleString("en-PH",{maximumFractionDigits:1})+"k":"\u20B1"+Math.round(n);function _R(n){let e=Array(24).fill(0);n.forEach(S=>e[new Date(S.ts).getHours()]+=S.total);let t=6,s=22;e.forEach((S,M)=>{S>0&&(t=Math.min(t,M),s=Math.max(s,M))});let i=[];for(let S=t;S<=s;S++)i.push(S);let r=pl(Math.max(...i.map(S=>e[S]),1)),o=560,c=190,l=46,u=26,h=10,p=6,m=c-u-h,E=(o-l-p)/i.length,R=new Date().getHours(),P="";return[0,.5,1].forEach(S=>{let M=h+m-m*S;P+=`<line x1="${l}" x2="${o-p}" y1="${M}" y2="${M}" style="stroke:var(--line)" stroke-dasharray="${S?"3 4":""}"/><text x="${l-8}" y="${M+4}" text-anchor="end">${yl(r*S)}</text>`}),i.forEach((S,M)=>{let F=e[S],V=F?Math.max(2,m*F/r):0,H=l+M*E+E*.16,ee=E*.68;V&&(P+=`<rect x="${H}" y="${h+m-V}" width="${ee}" height="${V}" rx="3" style="fill:${S===R?"var(--sun)":"var(--brand)"}"><title>${S}:00 \u2013 ${x(F)}</title></rect>`),(i.length<=12||M%2===0)&&(P+=`<text x="${H+ee/2}" y="${c-8}" text-anchor="middle">${S%12||12}${S<12?"a":"p"}</text>`)}),`<svg class="chart" viewBox="0 0 ${o} ${c}" role="img" aria-label="Sales by hour today">${P}</svg>`}function wR(n,e){let t=(i,r,o,c="")=>`<div class="${c}"><div class="l">${i}</div><div class="v">${r}</div><div class="s">${o}</div></div>`,s=n.vsLastWeek==null?"\u2014":(n.vsLastWeek>=0?"+":"\u2212")+Math.abs(n.vsLastWeek)+"%";return`<div class="card mcard"><div class="card-h">More numbers <span class="muted" style="font-weight:500;font-size:12.5px">today</span></div><div class="mgrid">
    ${t("Profit per \u20B1100 sold",n.per100==null?"\u2014":x(n.per100),n.ratio?`Sales to profit ${n.ratio} : 1`:"No profit yet today")}
    ${t("Net profit today",x(n.net),n.opex?`After ${x(n.opex)} in expenses`:"No expenses today",n.net<0?"bad":"")}
    ${t("Profit per sale",n.profitPerSale==null?"\u2014":x(n.profitPerSale),`From ${n.n.toLocaleString("en-PH")} sale${n.n===1?"":"s"}`)}
    ${t("Items sold",n.items.toLocaleString("en-PH"),n.itemsPerSale==null?"No sales yet":`${n.itemsPerSale} per sale`)}
    ${t(`vs last ${O(e)}`,s,n.lastWeek?`${x(n.lastWeek)} by this time`:"No sales by this time",n.vsLastWeek==null?"":n.vsLastWeek>=0?"good":"bad")}
    ${t("Daily average",x(n.dayAvgSales),`${x(n.dayAvgProfit)} profit a day, past 7 days`)}
    ${t("Stock worth",x(n.stockCost),`At cost \xB7 ${x(n.stockRetail)} at selling price`)}
    ${t("Sales with no cost",x(n.noCost),n.noCost?`${n.noCostShare}% of sales, counted as all profit`:"Every item sold has a cost",n.noCost?"warn":"")}
  </div></div>`}function bR(n){let e=n.points,t=e.length,s=n.unit,i=(T="")=>`<div class="card-h"><span>Sales &amp; profit <span class="muted" style="font-weight:500">by ${s}</span></span>${T}</div>`;if(!e.some(T=>T.n))return`<div class="card schart-card">${i()}<div class="empty">No sales to chart for these dates.</div></div>`;let r=pl(Math.max(1,...e.map(T=>T.sales))),o=Math.min(0,...e.map(T=>T.profit)),c=o<0?-pl(-o):0,l=1e3,u=250,h=52,p=8,m=12,E=28,R=u-m-E,P=(l-h-p)/t,S=T=>m+R*(r-T)/(r-c),M=S(0),F="",V="",H="";(c<0?[c,0,r/2,r]:[0,r/2,r]).forEach(T=>{H+=`<line x1="${h}" x2="${l-p}" y1="${S(T)}" y2="${S(T)}" style="stroke:var(--line)"${T?' stroke-dasharray="3 4"':""}/><text x="${h-8}" y="${S(T)+4}" text-anchor="end">${T<0?"\u2212":""}${yl(Math.abs(T))}</text>`});let ee=Math.ceil(t/12),W=Math.max(3,Math.min(34,P*.72)),w=Math.max(2,W*.5);e.forEach((T,k)=>{let I=h+k*P+P/2;F+=`<rect class="hit" data-i="${k}" x="${h+k*P}" y="${m}" width="${P}" height="${R}"/>`,T.sales>0&&(V+=`<rect class="bar" x="${I-W/2}" y="${S(T.sales)}" width="${W}" height="${Math.max(1,M-S(T.sales))}" rx="3" style="fill:var(--brand);fill-opacity:.32"/>`),T.profit>0&&(V+=`<rect class="bar" x="${I-w/2}" y="${S(T.profit)}" width="${w}" height="${Math.max(1,M-S(T.profit))}" rx="2" style="fill:var(--brand)"/>`),T.profit<0&&(V+=`<rect class="bar" x="${I-w/2}" y="${M}" width="${w}" height="${Math.max(1,S(T.profit)-M)}" rx="2" style="fill:var(--bad)"/>`),k%ee===0&&(H+=`<text x="${I}" y="${u-9}" text-anchor="middle">${O(T.label)}</text>`)});let _=e.reduce((T,k)=>k.sales>T.sales?k:T),b=s==="day"?qe(_.key):_.label,A=`<div class="chart-key"><span><i style="background:var(--brand);opacity:.32"></i>Sales</span><span><i style="background:var(--brand)"></i>Profit</span>${o<0?'<span><i style="background:var(--bad)"></i>Loss</span>':""}</div>`;return`<div class="card schart-card">${i(A)}<div class="chart-note muted">${s==="hour"?"Busiest hour":"Best "+s}: <b>${O(b)}</b> \xB7 ${x(_.sales)} sales, ${x(_.profit)} profit</div>
    <div class="schart"><svg class="chart" viewBox="0 0 ${l} ${u}" role="img" aria-label="Sales and profit by ${s}">${F}${H}${V}</svg><div class="chart-tip" hidden></div></div></div>`}function ER(n,e){let t=v(".schart",n);if(!t)return;let s=v("svg",t),i=v(".chart-tip",t),r=()=>{i.hidden=!0,ve(".hit.on",s).forEach(c=>c.classList.remove("on"))},o=c=>{let l=c.target.closest&&c.target.closest(".hit");if(!l)return r();let u=e.points[+l.dataset.i];ve(".hit.on",s).forEach(E=>E!==l&&E.classList.remove("on")),l.classList.add("on");let h=e.unit==="day"?qe(u.key):e.unit==="hour"?`${u.label} \u2013 ${hourLabel((u.key+1)%24)}`:u.label;i.innerHTML=`<b>${O(h)}</b><div><span>Sales</span><b>${x(u.sales)}</b></div><div><span>Profit</span><b${u.profit<0?' style="color:var(--bad)"':""}>${x(u.profit)}</b></div><div class="muted"><span>${u.n} sale${u.n===1?"":"s"}</span></div>`,i.hidden=!1;let p=t.getBoundingClientRect(),m=c.clientX-p.left+14;m+i.offsetWidth>p.width&&(m=c.clientX-p.left-i.offsetWidth-14),i.style.left=Math.max(0,m)+"px",i.style.top=Math.max(0,c.clientY-p.top-i.offsetHeight-10)+"px"};s.addEventListener("pointermove",o),s.addEventListener("pointerdown",o),s.addEventListener("pointerleave",r)}function IR(n){let e=n.reduce((o,c)=>o+c.v,0),t=52,s=2*Math.PI*t,i=0,r="";return r+=`<circle cx="70" cy="70" r="${t}" fill="none" style="stroke:var(--surface-2)" stroke-width="18"/>`,e>0&&n.forEach(o=>{if(!o.v)return;let c=s*o.v/e;r+=`<circle cx="70" cy="70" r="${t}" fill="none" style="stroke:${o.c}" stroke-width="18" stroke-dasharray="${c} ${s-c}" stroke-dashoffset="${-i}" transform="rotate(-90 70 70)"/>`,i+=c}),r+=`<text x="70" y="66" text-anchor="middle" style="fill:var(--muted);font-size:11px;font-family:var(--f-body)">Total</text><text x="70" y="86" text-anchor="middle" style="fill:var(--ink);font-size:17px;font-weight:700;font-family:var(--f-display)">${yl(e)}</text>`,`<svg viewBox="0 0 140 140" role="img" aria-label="Payment mix">${r}</svg>`}var tb=(n,e,t)=>`<div class="donut-wrap">${IR([{v:n,c:"var(--c-cash)"},{v:e,c:"var(--c-gcash)"},{v:t,c:"var(--c-utang)"}])}<div class="legend"><div><i style="background:var(--c-cash)"></i>Cash<b>${x(n)}</b></div><div><i style="background:var(--c-gcash)"></i>GCash<b>${x(e)}</b></div><div><i style="background:var(--c-utang)"></i>Utang<b>${x(t)}</b></div></div></div>`,TR=(n,e=5)=>zf(Hi(n)).slice(0,e),nb=n=>n.void?'<span class="tag void">Voided</span>':`<span class="tag ${n.pay}">${n.pay==="gcash"?"GCash":n.pay==="utang"?"Utang":"Cash"}</span>`,ue={};ue.dashboard={mount:()=>`<div class="page-head"><div><h1>Today's business</h1><p class="sub" id="d-date"></p></div><div class="row"><button class="btn" data-act="cashin">Set cash in</button><button class="btn" data-act="cashdrop">Cash drop</button><a class="btn" href="#gcash">${Re("phone",18)} GCash</a><a class="btn sun" href="#sell">${Re("cart",18)} Start selling</a></div></div><div id="d-body"></div>`,update(){let n=ie(),e=_n(n,-1);v("#d-date").textContent=new Date().toLocaleDateString("en-PH",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let t=Ki(),s=Hi(t.filter(U=>U.day===n)),i=Hi(t.filter(U=>U.day===e)),r=s.reduce((U,de)=>U+de.total,0),o=i.reduce((U,de)=>U+de.total,0),c=s.reduce((U,de)=>U+Kn(de),0),l=r-c,u=U=>s.filter(de=>de.pay===U).reduce((de,ht)=>de+ht.total,0),h=u("cash"),p=u("gcash"),m=u("utang"),E=y.shifts.get(n)||{},R=E.cashIn||0,P=(E.drops||[]).reduce((U,de)=>U+de.amount,0),S=0,M=0;y.customers.forEach(U=>{M+=Math.max(0,To(U)),(U.entries||[]).forEach(de=>{de.type==="payment"&&de.day===n&&de.method!=="gcash"&&(S+=de.amount)})});let F=[...y.expenses.values()].filter(U=>U.day===n&&U.drawer).reduce((U,de)=>U+de.amount,0),V=bo(E),H=Ow({cashIn:R,cashSales:h,utangPaidCash:S,drops:P,drawerExpenses:F,gcash:V.cash}),ee=o?(r-o)/o*100:null,W=Ww(),w=t.filter(U=>U.day>=_n(n,-6)),_=vo([...y.products.values()],w),b=Kf(y.bestBy),A=dw(zf(s),b,10),T=Math.max(1,...A.map(U=>U[b]||0)),k=[];for(let U=6;U>=0;U--){let de=_n(n,-U);k.push({k:de,v:Hi(t.filter(ht=>ht.day===de)).reduce((ht,je)=>ht+je.total,0)})}let I=pl(Math.max(...k.map(U=>U.v),1)),Rt=t.filter(U=>U.day===n).slice(-6).reverse(),Jn=!y.got.sales,vl=Date.now(),tn=_n(n,-7),Xn=pw({today:s,lastWeek:t.filter(U=>U.day===tn&&U.ts<=vl-7*864e5),past7:t.filter(U=>U.day>=tn&&U.day<n),expenses:[...y.expenses.values()].filter(U=>U.day===n),products:[...y.products.values()]}),Qi=new Date(tn+"T00:00").toLocaleDateString("en-PH",{weekday:"long"});v("#d-body").innerHTML=`${DR()}
    <div class="kpis">
      <div class="card kpi hero"><div class="eyebrow">Total sales</div><div class="v">${x(r)}</div><div class="d">${ee==null?"No sales yesterday to compare":`<span class="${ee>=0?"up":"down"}">${ee>=0?"\u25B2":"\u25BC"} ${Math.abs(ee).toFixed(0)}%</span> vs yesterday (${fl(o)})`}</div></div>
      <div class="card kpi"><div class="eyebrow">Transactions</div><div class="v">${s.length}</div><div class="d">Average basket ${s.length?x(r/s.length):"\u2014"}</div></div>
      <div class="card kpi"><div class="eyebrow">Gross profit</div><div class="v">${x(l)}</div><div class="d">${r?(l/r*100).toFixed(1)+"% margin":"Based on item costs"}</div></div>
      <div class="card kpi"><div class="eyebrow">Cash in drawer</div><div class="v">${x(H)}</div><div class="d">Expected if counted now${V.inCount+V.outCount?", with GCash services":""}</div></div>
    </div>
    <div class="strip">
      <div class="card mini"><div><div class="eyebrow">Cash in</div><div class="v">${x(R)}</div></div><button class="btn sm" data-act="cashin">Set</button></div>
      <div class="card mini"><div><div class="eyebrow">Cash drop</div><div class="v">${x(P)}</div></div><button class="btn sm" data-act="cashdrop">Add</button></div>
      <a class="card mini" href="#utang" style="text-decoration:none;color:inherit"><div><div class="eyebrow">Utang outstanding</div><div class="v">${x(M)}</div></div><span class="tag utang">${[...y.customers.values()].filter(U=>To(U)>.004).length} people</span></a>
      <a class="card mini" href="#inventory" style="text-decoration:none;color:inherit"><div><div class="eyebrow">Low stock</div><div class="v">${W.length} items</div></div><span class="tag ${W.length?"low":"ok"}">${W.length?"Restock":"All good"}</span></a>
    </div>
    ${wR(Xn,Qi)}
    <div class="dgrid">
      <div class="stack">
        <div class="card"><div class="card-h">Today's top 10 best sellers <div class="seg" role="group">${Object.entries(Wf).map(([U,de])=>`<button type="button" data-act="bestby" data-by="${U}" aria-pressed="${U===b}">${de}</button>`).join("")}</div></div><div class="card-b">
          ${A.length?`<div class="hbars">${A.map((U,de)=>`<div class="hbar"><span class="rk">${de+1}</span><span class="nm">${O(U.name)}</span><span class="amt">${b==="qty"?`<b>${He(U.qty,U.unit)} sold</b> \xB7 ${x(U.rev)}`:b==="profit"?`${He(U.qty,U.unit)} sold \xB7 <b${U.profit<0?' style="color:var(--bad)"':""}>${U.profit===null?"no cost":x(U.profit)+" profit"}</b>`:`${He(U.qty,U.unit)} sold \xB7 <b>${x(U.rev)}</b>`}</span><span></span><div class="track"><div class="fill" style="width:${Math.max(3,Math.max(0,U[b]||0)/T*100)}%"></div></div></div>`).join("")}</div>`:`<div class="empty"><b>${Jn?"Loading today's sales\u2026":"No sales yet today"}</b>Your top items appear here after the first sale.</div>`}
        </div></div>
        <div class="card"><div class="card-h">Sales by hour <span class="muted" style="font-weight:500;font-size:12.5px">current hour in yellow</span></div><div class="card-b">${_R(s)}</div></div>
        <div class="card"><div class="card-h">Recent transactions <a class="btn sm" href="#reports">All sales</a></div><div class="card-b" style="padding-top:4px">
          ${Rt.length?`<div class="list">${Rt.map(U=>`<div class="li"><div class="grow"><div class="t">${O(U.items.map(de=>de.name).join(", "))}</div><div class="s">${ze(U.ts)} \xB7 ${O(U.byName||"")}${U.custName?" \xB7 for "+O(U.custName):""}${U._pending?" \xB7 waiting to upload":""}</div></div>${nb(U)}<b class="num" style="min-width:84px;text-align:right">${x(U.total)}</b><button class="btn sm" data-act="viewsale" data-id="${U._id}">View</button></div>`).join("")}</div>`:'<div class="empty">Sales you ring up today will show here.</div>'}
        </div></div>
      </div>
      <div class="stack">
        <div class="card"><div class="card-h">How customers paid</div><div class="card-b">${tb(h,p,m)}</div></div>
        <div class="card"><div class="card-h">Last 7 days</div><div class="card-b"><div class="week">${k.map(U=>`<div class="col ${U.k===n?"today":""}" title="${O(qe(U.k))}: ${x(U.v)}"><small class="num">${U.v?yl(U.v):""}</small><div class="bar" style="height:${U.v/I*88}%"></div><small>${new Date(U.k+"T00:00").toLocaleDateString("en-PH",{weekday:"short"})}</small></div>`).join("")}</div></div></div>
        <div class="card"><div class="card-h"><span>Out of stock <span class="muted" style="font-weight:500;font-size:12.5px">top 10, most sold first</span></span><button class="btn sm" data-act="buylist">${Re("cart",16)} Shopping list</button></div><div class="card-b" style="padding-top:4px">
          ${_.length?`<div class="list">${_.slice(0,10).map(U=>`<div class="li"><div class="grow"><div class="t">${O(U.name)}</div><div class="s">${U.week?He(U.week,U.unit)+" sold this week":"No sales this week"} \xB7 buy ${He(U.buy,U.unit)}</div></div><span class="tag low">${He(U.stock,U.unit)} left</span><button class="btn sm" data-act="restock" data-id="${U.id}">Restock</button></div>`).join("")}</div>${_.length>10?`<div class="muted" style="font-size:12.5px;margin-top:8px">${_.length-10} more out of stock</div>`:""}`:`<div class="empty">${y.products.size?`Nothing is out of stock.${W.length?` ${W.length} item${W.length===1?" is":"s are"} running low.`:""}`:"Add products in Inventory to track stock."}</div>`}
        </div></div>
      </div>
    </div>`}};var up=()=>Rw(y.cart,y.discount);ue.sell={mount:()=>`<div class="sell">
    <section class="catalog">
      <div class="scan"><div class="search">${Re("search")}<input class="input" id="pos-q" placeholder="Search item or scan barcode / QR (F2)" autocomplete="off" value="${O(y.q)}"></div><button class="btn" data-act="custom">${Re("plus",18)}<span>Custom item</span></button><a class="btn" href="#gcash">${Re("phone",18)}<span>GCash</span></a></div>
      <div class="chips" id="pos-cats"></div>
      <div class="tiles" id="pos-grid"></div>
    </section>
    <aside class="cart" id="cart" aria-label="Current sale">
      <div class="cart-h"><h2>Current sale</h2><div class="row"><button class="btn sm ghost danger" data-act="clearcart">Clear</button><button class="x cart-close" data-act="closecart" aria-label="Close cart">${Re("x")}</button></div></div>
      <div class="lines" id="cart-lines"></div>
      <div class="cart-f">
        <div class="tot"><span class="muted">Subtotal</span><b id="c-sub">\u20B10.00</b></div>
        <div class="tot"><label class="muted" for="pos-disc">Discount (\u20B1)</label><input class="input num" id="pos-disc" inputmode="decimal" placeholder="0" value="${y.discount||""}"></div>
        <div class="tot big"><span>Total</span><span id="c-total">\u20B10.00</span></div>
        <button class="btn sun checkout" id="btn-checkout" data-act="checkout">Checkout (F9)</button>
      </div>
    </aside>
    <button class="btn sun cartbar" data-act="opencart"><span id="cb-count">0 items</span><span id="cb-total">\u20B10.00 \u2192</span></button>
  </div>`,after(){let n=v("#pos-q");n.addEventListener("input",()=>{y.q=n.value,hl()}),n.addEventListener("keydown",e=>{if(e.key!=="Enter")return;e.preventDefault();let t=n.value.trim();if(!t)return;let s=dp(t)||rb()[0];n.value="",y.q="",hl(),s?hp(s._id):ib(t)}),v("#pos-disc").addEventListener("input",e=>{y.discount=parseFloat(e.target.value)||0,Ft()}),n.focus()},update(){ob(),hl(),Ft()}};var dp=n=>{let e=String(n).trim();return e?[...y.products.values()].find(t=>t.barcode&&String(t.barcode).trim()===e):null};function sb(n){let e=dp(n);y.view==="sell"?e?hp(e._id):ib(n):y.view==="inventory"&&(e?Ne()?ko(e._id):db(e._id):Ne()?ko(null,n):z("No item has the code "+n+".","bad"))}function ib(n){if(!Ne()){z("No item has the code "+n+". Ask the owner to add it.","bad");return}It("Code not found",`Nothing in your inventory has the code ${n}. Add it as a new product now?`,"Add product",()=>ko(null,n),!1)}function rb(){let n=y.q.trim().toLowerCase();return[...y.products.values()].filter(e=>(y.cat==="All"||(e.cat||"Other")===y.cat)&&(!n||(e.name||"").toLowerCase().includes(n)||String(e.barcode||"").includes(n)||(e.cat||"").toLowerCase().includes(n))).sort((e,t)=>(e.name||"").localeCompare(t.name||""))}function ob(){let n=v("#pos-cats");n&&(n.innerHTML=["All",...ap()].map(e=>`<button class="chip" data-act="cat" data-cat="${O(e)}" aria-pressed="${y.cat===e}">${O(e)}</button>`).join(""))}function hl(){let n=v("#pos-grid");if(!n)return;let e=rb();if(!y.products.size){n.innerHTML=`<div class="empty" style="grid-column:1/-1"><b>${y.got.products?"No products yet":"Loading products\u2026"}</b>Add your items in <a href="#inventory">Inventory</a>, or use Custom item to sell anything at any price.</div>`;return}n.innerHTML=e.map(t=>{let s=t.stock??0,i=s<=(t.reorder??5);return`<button class="tile ${s<=0?"out":""}" data-act="add" data-id="${t._id}"><span class="t-name">${O(t.name)}</span><span class="t-foot"><b>${x(t.price)}${t.unit==="kg"?"<small>/kg</small>":""}</b><span class="t-stock ${i?"low":""}">${s<=0?"Out":He(s,t.unit)+" left"}</span></span></button>`}).join("")+`<button class="tile custom" data-act="custom">${Re("plus")}<span>Custom item<br><small>any name, any price</small></span></button>`+(e.length?"":`<div class="empty" style="grid-column:1/-1">No items match \u201C${O(y.q)}\u201D.</div>`)}function Ft(){let n=v("#cart-lines");if(!n)return;let e=up(),t=y.justAdded;y.justAdded=null,n.innerHTML=y.cart.length?Iw(y.cart).map(s=>[y.cart[s],s]).map(([s,i])=>`<div class="line${i===t?" new":""}"><div><div class="ln">${O(s.name)}</div><div class="lp num">${x(s.price)}${s.unit==="kg"?" / kg":" each"}</div></div><div class="lt">${x(s.qty*s.price)}</div>
    <div></div><div class="lc">${s.unit==="kg"?`<button class="btn sm" data-act="editweight" data-i="${i}">${He(s.qty,"kg")}</button>`:`<span class="step"><button data-act="dec" data-i="${i}" aria-label="Less">\u2212</button><button class="q" data-act="setqty" data-i="${i}">${s.qty}</button><button data-act="inc" data-i="${i}" aria-label="More">+</button></span>`}<button class="x" data-act="rmline" data-i="${i}" aria-label="Remove ${O(s.name)}">${Re("x",18)}</button></div></div>`).join(""):'<div class="empty"><b>Cart is empty</b>Tap an item or scan a barcode to start a sale.</div>',t!=null&&(n.scrollTop=0),v("#c-sub").textContent=x(e.sub),v("#c-total").textContent=x(e.total),v("#btn-checkout").disabled=!y.cart.length,v("#cb-count").textContent=`${e.count} item${e.count===1?"":"s"}`,v("#cb-total").textContent=x(e.total)+" \u2192"}function hp(n){let e=y.products.get(n);if(e){if(e.unit==="kg")return ab(e);y.justAdded=Ew(y.cart,{pid:n,name:e.name,unit:"pc",qty:1,price:+e.price||0,cost:+e.cost||0}),wn(),Ft()}}function ab(n,e){let t=e!=null?y.cart[e]:null,s=t?t.price:+n.price,i=Ie(t?"Change weight":n.name,`
    <p class="muted" style="margin:0">${x(s)} per kilo. Enter the weight, or how much the customer wants to spend.</p>
    <div class="grid2"><div class="field"><label for="w-kg">Kilos</label><input class="input bigin" id="w-kg" inputmode="decimal" autofocus value="${t?Le(t.qty):""}" placeholder="0.5"></div>
    <div class="field"><label for="w-amt">or Amount (\u20B1)</label><input class="input bigin" id="w-amt" inputmode="decimal" value="${t?j(t.qty*s):""}" placeholder="50"></div></div>
    <div class="row">${[.25,.5,1,2].map(l=>`<button class="btn sm" data-kg="${l}">${l} kg</button>`).join("")}</div>
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="w-ok">${t?"Update":"Add to sale"}</button></div>`),r=v("#w-kg",i),o=v("#w-amt",i);r.oninput=()=>{o.value=r.value?j(parseFloat(r.value)*s):""},o.oninput=()=>{r.value=o.value?Le(parseFloat(o.value)/s):""},ve("[data-kg]",i).forEach(l=>l.onclick=()=>{r.value=l.dataset.kg,r.oninput()});let c=()=>{let l=Le(parseFloat(r.value));if(!(l>0)){r.focus();return}t?t.qty=l:(y.cart.push({pid:n._id,name:n.name,unit:"kg",qty:l,price:s,cost:+n.cost||0}),y.justAdded=y.cart.length-1),wn(),Te(),Ft()};v("#w-ok",i).onclick=c,[r,o].forEach(l=>l.onkeydown=u=>{u.key==="Enter"&&c()})}function SR(){let n=Ie("Custom item",`<p class="muted" style="margin:0">For things not in your list: e-load, gulay by the bundle, a special price.</p>
    <div class="field"><label for="cu-n">Item name</label><input class="input" id="cu-n" placeholder="e.g. Vegetables, E-load \u20B150"></div>
    <div class="grid2"><div class="field"><label for="cu-p">Price (\u20B1)</label><input class="input bigin" id="cu-p" inputmode="decimal" autofocus placeholder="0.00"></div><div class="field"><label for="cu-q">Quantity</label><input class="input bigin" id="cu-q" inputmode="numeric" value="1"></div></div>
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="cu-ok">Add to sale</button></div>`),e=()=>{let t=j(parseFloat(v("#cu-p",n).value)),s=Math.max(1,parseInt(v("#cu-q",n).value)||1);if(!(t>0)){v("#cu-p",n).focus();return}y.cart.push({pid:null,name:v("#cu-n",n).value.trim()||"Misc item",unit:"pc",qty:s,price:t,cost:0}),y.justAdded=y.cart.length-1,wn(),Te(),Ft()};v("#cu-ok",n).onclick=e,ve("input",n).forEach(t=>t.onkeydown=s=>{s.key==="Enter"&&e()})}function AR(n){let e=y.cart[n],t=Ie(e.name,`<div class="field"><label for="q-v">Quantity</label><input class="input bigin" id="q-v" inputmode="numeric" autofocus value="${e.qty}"></div><div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="q-ok">Update</button></div>`),s=()=>{let i=parseInt(v("#q-v",t).value);i>0?e.qty=i:y.cart.splice(n,1),wn(),Te(),Ft()};v("#q-ok",t).onclick=s,v("#q-v",t).onkeydown=i=>{i.key==="Enter"&&s()},setTimeout(()=>v("#q-v",t).select(),40)}function cb(){let n=up();if(!y.cart.length)return;let e="cash",t=null,s=[...new Set([Math.ceil(n.total),...[20,50,100,200,500,1e3].filter(m=>m>=n.total),Math.ceil(n.total/100)*100,Math.ceil(n.total/500)*500,Math.ceil(n.total/1e3)*1e3])].filter(m=>m>=n.total).sort((m,E)=>m-E).slice(0,8),i=Ie("Checkout",`
    <div class="due"><span class="muted">Amount due</span><b>${x(n.total)}</b></div>
    <div class="paytabs" role="group" aria-label="Payment"><button data-pay="cash" aria-pressed="true">Cash</button><button data-pay="gcash" aria-pressed="false">GCash</button><button data-pay="utang" aria-pressed="false">Utang</button></div>
    <div id="p-cash" class="modal-b" style="padding:0">
      <div class="field"><label for="p-tend">Cash received</label><input class="input bigin" id="p-tend" inputmode="decimal" autofocus placeholder="${j(n.total)}"></div>
      <div class="bills">${s.map((m,E)=>`<button data-bill="${m}">${E===0&&m===Math.ceil(n.total)?"Exact":fl(m)}</button>`).join("")}</div>
      <div class="change" id="p-change"><span>Change (sukli)</span><b>\u20B10.00</b></div>
    </div>
    <div id="p-gcash" hidden><div class="field"><label for="p-ref">GCash ref no. \u2014 last 4 digits (optional)</label><input class="input" id="p-ref" inputmode="numeric" autocomplete="off" placeholder="e.g. 6213"></div></div>
    <div id="p-utang" hidden class="modal-b" style="padding:0">
      <div class="field"><label for="p-cq">Customer</label><input class="input" id="p-cq" placeholder="Search name or type a new one" autocomplete="off"></div>
      <div class="picklist" id="p-clist"></div>
    </div>
    <div class="field" id="p-namef"><label for="p-name">Customer name (optional)</label><input class="input" id="p-name" autocomplete="off" maxlength="40" placeholder="First name, e.g. Maria"></div>
    <div class="modal-f"><button class="btn" data-act="close">Back</button><button class="btn sun checkout" id="p-ok" style="flex:1">Complete sale</button></div>`),r=v("#p-tend",i),o=v("#p-change",i),c=()=>{let m=parseFloat(r.value),E=isNaN(m)?0:j(m-n.total);o.className="change"+(E<0?" short":""),o.innerHTML=E<0?`<span>Short by</span><b>${x(-E)}</b>`:`<span>Change (sukli)</span><b>${x(E)}</b>`};r.oninput=c,yb(v("#p-ref",i)),ve("[data-bill]",i).forEach(m=>m.onclick=()=>{r.value=m.dataset.bill,c(),v("#p-ok",i).focus()}),ve("[data-pay]",i).forEach(m=>m.onclick=()=>{e=m.dataset.pay,ve("[data-pay]",i).forEach(R=>R.setAttribute("aria-pressed",R===m)),["cash","gcash","utang"].forEach(R=>v("#p-"+R,i).hidden=R!==e),v("#p-namef",i).hidden=e==="utang";let E={cash:r,gcash:v("#p-ref",i),utang:v("#p-cq",i)}[e];setTimeout(()=>E.focus(),20)});let l=v("#p-cq",i),u=v("#p-clist",i),h=()=>{let m=l.value.trim().toLowerCase(),E=[...y.customers.values()].filter(P=>!m||P.name.toLowerCase().includes(m)).sort((P,S)=>P.name.localeCompare(S.name)).slice(0,30);u.innerHTML=E.map(P=>`<button class="pick" data-cid="${P._id}" aria-pressed="${t===P._id}"><span><b>${O(P.name)}</b>${P.phone?`<br><small class="muted">${O(P.phone)}</small>`:""}</span><span class="num">${x(To(P))} owed</span></button>`).join("")+(m&&!E.some(P=>P.name.toLowerCase()===m)?`<button class="pick" data-new="1"><span>${Re("plus",16)} Add new customer \u201C${O(l.value.trim())}\u201D</span></button>`:"")+(!m&&!E.length?'<div class="muted">No customers yet. Type a name to add one.</div>':""),ve("[data-cid]",u).forEach(P=>P.onclick=()=>{t=P.dataset.cid,h()});let R=v("[data-new]",u);R&&(R.onclick=()=>{let P=l.value.trim(),S=ut(mt("customers"));fe(dt(S,{name:P,phone:"",balance:0,entries:[],created:Date.now()})),y.customers.set(S.id,{_id:S.id,name:P,balance:0,entries:[]}),t=S.id,l.value="",h()})};l.oninput=h,h();let p=()=>{let m=null,E=0,R="";if(e==="cash"){let P=Cw(r.value,n.total);if(!P){r.focus();return}m=P.tendered,E=P.change}if(e==="gcash"){let P=v("#p-ref",i);if(!ep(P.value)){P.focus(),z("Type the last 4 digits of the GCash reference, or leave it blank.","bad");return}R=cl(P.value)}if(e==="utang"&&!t){l.focus(),z("Choose who is taking this on utang.","bad");return}RR({pay:e,tendered:m,change:E,ref:R,cust:t,custName:e==="utang"?"":hw(v("#p-name",i).value)})};v("#p-ok",i).onclick=p,r.onkeydown=m=>{m.key==="Enter"&&p()},v("#p-name",i).onkeydown=m=>{m.key==="Enter"&&p()}}function RR(n){let e=up(),t=Date.now(),s=ut(mt("sales")),i={ts:t,day:ie(t),items:y.cart.map(u=>({pid:u.pid,name:u.name,unit:u.unit,qty:u.qty,price:u.price,cost:u.cost})),subtotal:e.sub,discount:e.disc,total:e.total,pay:n.pay,tendered:n.tendered,change:n.change,ref:n.ref||"",cust:n.cust||null,custName:n.custName||"",by:y.u.uid,byName:At(),crewId:(En()||{}).id||null,assistId:(js()||{}).id||null,assistName:(js()||{}).name||"",termName:y.termName,void:!1},r=$s(Me);r.set(s,i);let o={};i.items.forEach(u=>{u.pid&&(o[u.pid]=(o[u.pid]||0)+u.qty)});for(let u in o)y.products.has(u)&&r.update(ye("products",u),{stock:Hn(-Le(o[u]))});i.pay==="utang"&&i.cust&&r.update(ye("customers",i.cust),{balance:Hn(i.total),entries:Et({id:s.id+"c",ts:t,day:i.day,type:"credit",amount:i.total,saleId:s.id,note:i.items.map(u=>u.name).slice(0,3).join(", "),by:y.u.uid})}),fe(r.commit()),y.cart=[],y.discount=0,wn();let c=v("#pos-disc");c&&(c.value=""),v("#cart")&&v("#cart").classList.remove("open"),Ft();let l={...i,_id:s.id};ub(l,!0),y.autoPrint&&fp(l)}function lb(n){let e=n.cust?y.customers.get(n.cust):null,t=y.store;return`<div class="c"><b class="big">${O(t.name||"My Store")}</b>${t.location?"<br>"+O(t.location):""}<br>${O(new Date(n.ts).toLocaleString("en-PH",{dateStyle:"medium",timeStyle:"short"}))}<br>${O(n.termName||"")}${n.byName?" \xB7 "+O(n.byName):""}</div><hr>
    ${n.items.map(s=>`<div class="it">${O(s.name)}</div><div class="rr"><span>&nbsp; ${He(s.qty,s.unit)} \xD7 ${x(s.price)}</span><span>${x(s.qty*s.price)}</span></div>`).join("")}<hr>
    ${n.discount?`<div class="rr"><span>Discount</span><span>\u2212${x(n.discount)}</span></div>`:""}
    <div class="rr b big"><span>TOTAL</span><span>${x(n.total)}</span></div>
    ${n.pay==="cash"?`<div class="rr"><span>Cash</span><span>${x(n.tendered)}</span></div><div class="rr"><span>Change</span><span>${x(n.change)}</span></div>`:`<div class="rr"><span>Paid via</span><span>${n.pay==="gcash"?"GCash"+(n.ref?" \xB7 "+O(n.ref):""):"Utang \xB7 "+O(e?e.name:"customer")}</span></div>`}
    ${n.custName?`<div class="rr"><span>Customer</span><span>${O(n.custName)}</span></div>`:""}
    ${n.void?'<hr><div class="c b">*** VOIDED ***</div>':""}
    <hr><div class="c">${O(t.footer||"Salamat po! Balik po kayo.")}</div>`}function CR(n,e){return`<!doctype html><html><head><meta charset="utf-8"><style>
    @page{size:${e}mm auto;margin:0}
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:#fff;color:#000}
    body{width:${e===80?72:48}mm;padding:1mm 0 4mm;font:${e===80?12:11}px/1.35 Consolas,"Courier New",monospace}
    .c{text-align:center}.rr{display:flex;justify-content:space-between;gap:6px}.b{font-weight:700}.big{font-size:1.2em}
    .it{word-break:break-word}hr{border:0;border-top:1px dashed #000;margin:4px 0}
  </style></head><body>${lb(n)}</body></html>`}async function fp(n){if(!window.pos||!window.pos.printReceipt){z("Printing works in the installed Tindahan POS app.","bad");return}let e=y.paper===80?80:58,t=await window.pos.printReceipt({html:CR(n,e),widthMm:e,deviceName:y.printer||""});t&&!t.ok&&t.reason&&!/cancel/i.test(t.reason)&&z("Printing failed: "+t.reason+". Check the printer in Store Setup.","bad")}function kR(n){let t=(i,r)=>(i=String(i),r=String(r),i.slice(0,32-r.length-1).padEnd(32-r.length)+r),s=[y.store.name||"My Store",y.store.location||"",new Date(n.ts).toLocaleString("en-PH"),"-".repeat(32)];return n.items.forEach(i=>{s.push(i.name.slice(0,32)),s.push(t(`  ${He(i.qty,i.unit)} x ${x(i.price)}`,x(i.qty*i.price)))}),s.push("-".repeat(32)),n.discount&&s.push(t("Discount","-"+x(n.discount))),s.push(t("TOTAL",x(n.total))),n.pay==="cash"?(s.push(t("Cash",x(n.tendered))),s.push(t("Change",x(n.change)))):s.push(t("Paid via",n.pay==="gcash"?"GCash":"Utang")),n.custName&&s.push(t("Customer",n.custName)),n.void&&s.push("*** VOIDED ***"),s.push("",y.store.footer||"Salamat po! Balik po kayo."),s.join(`
`)}function ub(n,e){let t=Ie(e?"Sale complete":"Sale details",`
    ${e&&n.pay==="cash"?`<div class="change"><span>Give change (sukli)</span><b>${x(n.change)}</b></div>`:""}
    <div class="receipt">${lb(n)}</div>
    ${n._pending?`<div class="muted" style="font-size:12.5px">Waiting to upload. It's saved on this computer.</div>`:""}
    <div class="modal-f">
      ${!e&&!n.void&&Ne()&&!St?'<button class="btn danger" id="r-void">Void sale</button>':""}
      <button class="btn" id="r-copy">Copy text</button>
      ${St?"":'<button class="btn" id="r-print">Print receipt</button>'}
      <button class="btn ${e?"sun":"primary"}" data-act="close">${e?"New sale":"Done"}</button></div>`);v("#r-copy",t).onclick=async()=>{try{await navigator.clipboard.writeText(kR(n)),z("Receipt copied")}catch{z("Couldn't copy.","bad")}};let s=v("#r-print",t);s&&(s.onclick=()=>fp(n));let i=v("#r-void",t);i&&(i.onclick=()=>It("Void this sale?",`This removes ${x(n.total)} from sales, returns the items to stock${n.pay==="utang"?", and takes it off the customer's utang":""}.`,"Void sale",()=>PR(n)))}function PR(n){if(!Zt())return;let e=$s(Me),t=Date.now();e.update(ye("sales",n._id),{void:!0,voidTs:t,voidBy:y.u.uid});let s={};n.items.forEach(i=>{i.pid&&(s[i.pid]=(s[i.pid]||0)+i.qty)});for(let i in s)y.products.has(i)&&e.update(ye("products",i),{stock:Hn(Le(s[i]))});n.pay==="utang"&&n.cust&&y.customers.has(n.cust)&&e.update(ye("customers",n.cust),{balance:Hn(-n.total),entries:Et({id:n._id+"v",ts:t,day:ie(),type:"void",amount:n.total,saleId:n._id,note:"Voided sale",by:y.u.uid})}),fe(e.commit()),z("Sale voided"),$t=null,zs()}ue.inventory={mount:()=>`<div class="page-head"><div><h1>Inventory</h1><p class="sub">Prices, costs and stock for everything you sell. Scan a code here to look an item up.</p></div><div class="row"><button class="btn" data-act="buylist">${Re("cart",18)} Shopping list</button><button class="btn" data-act="receipt">${Re("search",18)} Check a receipt</button><button class="btn" data-act="costchanges">Cost changes</button>${Ne()?`<button class="btn" data-act="resetstock">Reset stock</button><button class="btn primary" data-act="newprod">${Re("plus",18)} Add product</button>`:""}</div></div>
    <div id="inv-sum"></div>
    <div class="toolbar"><input class="input" id="inv-q" placeholder="Search name or barcode" value="${O(y.inv.q)}"><select class="input" id="inv-cat" style="max-width:200px" aria-label="Category"></select>
      <select class="input" id="inv-show" style="max-width:190px" aria-label="Show">${cw.map(([n,e])=>`<option value="${n}" ${n===y.inv.show?"selected":""}>${e}</option>`).join("")}</select>
      <label class="check" style="font-weight:500">Sort by <select class="input" id="inv-sort" style="width:auto"></select></label>
      <span class="muted" id="inv-count" style="font-size:13px;margin-left:auto"></span></div>
    <div class="card"><div class="tbl-wrap" id="inv-tbl"></div></div>`,after(){v("#inv-q").oninput=n=>{y.inv.q=n.target.value,ue.inventory.update()},v("#inv-q").onkeydown=n=>{if(n.key!=="Enter")return;let e=n.target.value.trim();e&&(dp(e)||!ue.inventory.count)&&(n.target.value="",y.inv.q="",ue.inventory.update(),sb(e))},v("#inv-cat").onchange=n=>{y.inv.cat=n.target.value,ue.inventory.update()},v("#inv-show").onchange=n=>{y.inv.show=n.target.value,ue.inventory.update()},v("#inv-sort").onchange=n=>{let[e,t]=n.target.value.split(":");fb(e,t)}},update(){let n=[...y.products.values()],e=n.reduce((u,h)=>u+Math.max(0,h.stock||0)*(h.cost||0),0),t=n.reduce((u,h)=>u+Math.max(0,h.stock||0)*(h.price||0),0),s=n.some(u=>u.starter);v("#inv-sum").innerHTML=`<div class="sumrow"><div class="card"><div class="eyebrow">Products</div><div class="v">${n.length}</div></div><div class="card"><div class="eyebrow">Stock at cost</div><div class="v">${fl(e)}</div></div><div class="card"><div class="eyebrow">Stock at selling price</div><div class="v">${fl(t)}</div></div><div class="card"><div class="eyebrow">Low or out</div><div class="v" style="color:var(--bad)">${Ww().length}</div></div></div>
      ${s?`<div class="note" style="margin-bottom:12px">Items marked <span class="tag">starter</span> came with the app, with sample prices and stock. Edit each one to match your store, or delete the ones you don't sell.</div>`:""}`;let i=v("#inv-cat");i.innerHTML=["All",...ap()].map(u=>`<option ${u===y.inv.cat?"selected":""}>${O(u)}</option>`).join("");let r=y.inv.q.trim().toLowerCase(),o=aw(n.filter(u=>(y.inv.cat==="All"||(u.cat||"Other")===y.inv.cat)&&lw(u,y.inv.show)&&(!r||(u.name||"").toLowerCase().includes(r)||String(u.barcode||"").includes(r))),y.inv.sort,y.inv.dir);ue.inventory.count=o.length,ue.inventory.list=o;let c=y.inv.sort+":"+y.inv.dir;v("#inv-sort").innerHTML=ow.map(([u,h])=>`<option value="${u}" ${u===c?"selected":""}>${h}</option>`).join(""),v("#inv-count").textContent=n.length?o.length===n.length?`${n.length} items`:`Showing ${o.length} of ${n.length} items`:"";let l=(u,h,p)=>`<th class="${p?"r ":""}sortable" aria-sort="${y.inv.sort===u?y.inv.dir==="asc"?"ascending":"descending":"none"}"><button type="button" data-act="invsort" data-k="${u}">${h}${y.inv.sort===u?y.inv.dir==="asc"?" \u25B2":" \u25BC":""}</button></th>`;v("#inv-tbl").innerHTML=n.length?`<table class="tbl"><thead><tr>${l("name","Item")}${l("category","Category")}<th>Barcode / QR</th>${l("price","Price",1)}${l("cost","Cost",1)}${l("margin","Margin",1)}${l("profit","Profit",1)}${l("stock","Stock",1)}<th></th></tr></thead><tbody>
      ${o.map(u=>{let h=u.stock??0,p=h<=(u.reorder??5),m=u.price?(u.price-(u.cost||0))/u.price*100:0,E=nl(u);return`<tr><td><b>${O(u.name)}</b> ${u.starter?'<span class="tag">starter</span>':""}</td><td>${O(u.cat||"Other")}</td><td class="muted">${O(u.barcode||"\u2014")}</td><td class="r">${x(u.price)}${u.unit==="kg"?"/kg":""}</td><td class="r muted">${u.cost?x(u.cost):"\u2014"}</td><td class="r">${u.cost?m.toFixed(0)+"%":"\u2014"}</td><td class="r"${E<0?' style="color:var(--bad)"':""}>${E===null?"\u2014":(E<0?"-":"")+x(Math.abs(E))+(u.unit==="kg"?"/kg":"")}</td><td class="r"><span class="tag ${p?"low":"ok"}">${He(h,u.unit)}</span></td><td class="r" style="white-space:nowrap"><button class="btn sm" data-act="restock" data-id="${u._id}">Restock</button>${Ne()?` <button class="btn sm" data-act="editprod" data-id="${u._id}">Edit</button>`:""}</td></tr>`}).join("")}
      ${o.length?"":'<tr><td colspan="9" class="empty">No items match these filters.</td></tr>'}</tbody></table>`:`<div class="empty"><b>${y.got.products?"No products yet":"Loading\u2026"}</b>${Ne()?'Add your first product, or start from common sari-sari items.<div class="row" style="justify-content:center;margin-top:12px"><button class="btn primary" data-act="newprod">Add product</button><button class="btn" data-act="starter">Add 35 common items</button></div>':"The store owner adds products."}</div>`}};function ko(n,e){if(!Zt())return;let t=n?y.products.get(n):{unit:"pc",reorder:5,stock:0,barcode:e||""},s=Ie(n?"Edit product":"Add product",`
    <div class="field"><label for="f-name">Item name</label><input class="input" id="f-name" autofocus value="${O(t.name||"")}" placeholder="e.g. Lucky Me! Pancit Canton Original"></div>
    <div class="grid2"><div class="field"><label for="f-cat">Category</label><input class="input" id="f-cat" list="f-cats" value="${O(t.cat||"")}" placeholder="Noodles, Drinks, Snacks\u2026"><datalist id="f-cats">${ap().map(c=>`<option value="${O(c)}">`).join("")}</datalist></div>
    <div class="field"><label for="f-bar">Barcode / QR code</label><input class="input" id="f-bar" value="${O(t.barcode||"")}" placeholder="Click here, then scan"></div></div>
    <div class="field"><span class="lbl">Sold by</span><div class="seg" role="group"><button type="button" data-unit="pc" aria-pressed="${t.unit!=="kg"}">Piece / pack</button><button type="button" data-unit="kg" aria-pressed="${t.unit==="kg"}">Kilo (timbang)</button></div></div>
    <div class="grid2"><div class="field"><label for="f-price">Selling price (\u20B1)</label><input class="input" id="f-price" inputmode="decimal" value="${t.price??""}"></div><div class="field"><label for="f-cost">Your cost (\u20B1)</label><input class="input" id="f-cost" inputmode="decimal" value="${t.cost??""}" placeholder="for profit tracking"></div></div>
    <div id="f-warn"></div>
    ${n?mb(t):""}
    <div class="grid2"><div class="field"><label for="f-stock">Stock on hand</label><input class="input" id="f-stock" inputmode="decimal" value="${t.stock??0}"></div><div class="field"><label for="f-re">Warn me when stock is at</label><input class="input" id="f-re" inputmode="decimal" value="${t.reorder??5}"></div></div>
    <div class="modal-f">${n?'<button class="btn danger" id="f-del" style="margin-right:auto">Delete</button>':""}<button class="btn" data-act="close">Cancel</button><button class="btn primary" id="f-ok">${n?"Save changes":"Add product"}</button></div>`),i=t.unit||"pc";ve("[data-unit]",s).forEach(c=>c.onclick=()=>{i=c.dataset.unit,ve("[data-unit]",s).forEach(l=>l.setAttribute("aria-pressed",l===c))}),v("#f-bar",s).onkeydown=c=>{c.key==="Enter"&&(c.preventDefault(),v("#f-price",s).focus())};let r=()=>{let c=v("#f-warn",s);if(!n){c.innerHTML="";return}let l=parseFloat(v("#f-cost",s).value),u=parseFloat(v("#f-price",s).value);c.innerHTML=pb(Gf(t.cost,l,isNaN(u)?t.price:u),t,!0);let h=v("[data-keep]",c);h&&(h.onclick=()=>{v("#f-price",s).value=h.dataset.keep,r()})};v("#f-cost",s).oninput=r,v("#f-price",s).oninput=r,v("#f-ok",s).onclick=()=>{let c=v("#f-name",s).value.trim(),l=j(parseFloat(v("#f-price",s).value));if(!c)return v("#f-name",s).focus();if(isNaN(l)||l<0)return v("#f-price",s).focus();let u=v("#f-bar",s).value.trim(),h=u&&[...y.products.values()].find(P=>P._id!==n&&String(P.barcode||"").trim()===u);if(h)return z(`That code already belongs to ${h.name}.`,"bad"),v("#f-bar",s).focus();let p={name:c,cat:v("#f-cat",s).value.trim()||"Other",barcode:u,unit:i,price:l,cost:j(parseFloat(v("#f-cost",s).value)||0),stock:Le(parseFloat(v("#f-stock",s).value)||0),reorder:Le(parseFloat(v("#f-re",s).value)||0),starter:!1,updated:Date.now()},m=Date.now(),E={by:y.u.uid,byName:At()},R=n?yo({cost:t.cost,price:t.price},p,{ts:m,via:"edit",...E}):yo({cost:0,price:0},p,{ts:m,via:"new",...E});R&&(p.costLog=Et(R)),fe(n?dt(ye("products",n),p,{merge:!0}):dt(ut(mt("products")),p)),Te(),z(n?"Saved":"Product added")};let o=v("#f-del",s);o&&(o.onclick=()=>It("Delete "+t.name+"?","It will disappear from the Sell screen. Past sales keep their records.","Delete",()=>{fe($i(ye("products",n))),z("Deleted")}))}function db(n){let e=y.products.get(n);if(!e)return;let t=Ie("Restock "+e.name,`<p class="muted" style="margin:0">Now ${He(e.stock??0,e.unit)} on hand \xB7 selling at ${x(e.price)}.</p>
    <div class="grid2"><div class="field"><label for="rs-q">Quantity received</label><input class="input bigin" id="rs-q" inputmode="decimal" autofocus placeholder="0"></div><div class="field"><label for="rs-c">New cost each (\u20B1, optional)</label><input class="input bigin" id="rs-c" inputmode="decimal" placeholder="${e.cost||""}"></div></div>
    <div class="field"><label for="rs-s">Supplier (optional)</label><input class="input" id="rs-s" list="rs-sl" autocomplete="off" value="${O(e.supplier||"")}" placeholder="Where you bought it"><datalist id="rs-sl">${iw([...y.products.values()]).map(o=>`<option value="${O(o)}">`).join("")}</datalist></div>
    <div id="rs-warn"></div>
    ${mb(e)}
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="rs-ok">Add to stock</button></div>`),s=null,i=()=>{let o=v("#rs-warn",t),c=Gf(e.cost,parseFloat(v("#rs-c",t).value),e.price);s=null,o.innerHTML=pb(c,e,Ne());let l=v("[data-keep]",o);l&&(l.onclick=()=>{s=+l.dataset.keep,l.closest(".note").insertAdjacentHTML("beforeend",`<div style="margin-top:6px"><b>Selling price will change to ${x(s)}.</b></div>`),l.remove()})};v("#rs-c",t).oninput=i;let r=()=>{let o=parseFloat(v("#rs-q",t).value);if(!(o>0))return v("#rs-q",t).focus();let c=parseFloat(v("#rs-c",t).value),l=Date.now(),u=v("#rs-s",t).value.trim(),h={stock:Hn(Le(o)),updated:l};c>0&&(h.cost=j(c)),u&&(h.supplier=u),s!==null&&Ne()&&(h.price=s);let p=yo({cost:e.cost,price:e.price},{cost:c>0?j(c):e.cost,price:h.price??e.price},{ts:l,via:"restock",supplier:u,by:y.u.uid,byName:At()});p&&(h.costLog=Et(p)),fe(Jt(ye("products",n),h)),Te(),z(`Added ${He(o,e.unit)} to ${e.name}`)};v("#rs-ok",t).onclick=r,ve("input",t).forEach(o=>o.onkeydown=c=>{c.key==="Enter"&&r()})}function NR(){if(!Zt())return;let n=[...y.products.values()],e=ue.inventory.list||n,t=Math.max(0,...n.map(l=>l.stockReset&&l.stockReset.ts||0)),s=e.length!==n.length,i=Ie("Reset stock for a recount",`
    <p style="margin:0">Set stock to one number, then count each item and enter the real amount with <b>Edit</b> or <b>Restock</b>.</p>
    <div class="field"><label for="rz-n">New stock for each item</label><input class="input bigin" id="rz-n" inputmode="decimal" value="1" style="max-width:160px"></div>
    ${s?`<div class="field"><span class="lbl">Which items</span><div class="seg" role="group"><button type="button" data-scope="all" aria-pressed="true">All ${n.length.toLocaleString("en-PH")} items</button><button type="button" data-scope="shown" aria-pressed="false">Only the ${e.length.toLocaleString("en-PH")} shown</button></div></div>`:""}
    <div class="note">1. Save a backup of today's stock first.<br>2. Every item also remembers its old stock, so you can undo the last reset here.<br>3. Items at or below their reorder level show as Low stock until recounted.</div>
    <div class="row"><button class="btn" id="rz-bk">Save backup (Excel)</button><span class="muted" id="rz-bkd" style="font-size:13px"></span></div>
    ${t?`<div class="row"><button class="btn" id="rz-undo">Undo last reset (${O(qe(ie(t)))}, ${ze(t)})</button></div>`:""}
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn solid-danger" id="rz-ok" disabled>Reset stock</button></div>`),r="all",o=()=>r==="all"?n:e;ve("[data-scope]",i).forEach(l=>l.onclick=()=>{r=l.dataset.scope,ve("[data-scope]",i).forEach(u=>u.setAttribute("aria-pressed",u===l))}),v("#rz-bk",i).onclick=()=>{vp(`stock_backup_${ie()}.csv`,il(ww(n))),v("#rz-bkd",i).textContent="Backup saved. You can reset now.",v("#rz-ok",i).disabled=!1},v("#rz-ok",i).onclick=()=>{let l=Le(parseFloat(v("#rz-n",i).value));if(isNaN(l)||l<0)return v("#rz-n",i).focus();let u=o();It(`Set stock to ${l} for ${u.length.toLocaleString("en-PH")} items?`,"Their current stock is replaced. You can undo this from Reset stock until the next reset.","Reset stock",()=>{let h=Date.now();Qf(u,400).forEach(p=>{let m=$s(Me);p.forEach(E=>m.update(ye("products",E._id),{stock:l,stockReset:{before:Le(E.stock??0),to:l,ts:h},updated:h})),fe(m.commit())}),z(`Stock set to ${l} for ${u.length.toLocaleString("en-PH")} items. Recount and update each one.`)})};let c=v("#rz-undo",i);c&&(c.onclick=()=>{let l=n.filter(u=>u.stockReset&&u.stockReset.ts===t);It(`Undo the reset for ${l.length.toLocaleString("en-PH")} items?`,"Each item goes back to its stock before the reset, minus anything sold since and plus anything restocked since. Recounts entered after the reset are replaced.","Undo reset",()=>{let u=Date.now();Qf(l,400).forEach(h=>{let p=$s(Me);h.forEach(m=>p.update(ye("products",m._id),{stock:bw(m),stockReset:fo(),updated:u})),fe(p.commit())}),z(`Stock restored for ${l.length.toLocaleString("en-PH")} items.`)})})}function DR(){if(St)return xR();let n=_o(y.store.crew),e=En();if(!n.length)return Ne()?'<div class="card duty-card"><div class="avatar ph" style="width:64px;height:64px;font-size:22px">?</div><div class="grow"><div class="eyebrow">On duty</div><div class="muted" style="margin-top:4px">Add your staff with a photo in Store Setup, so everyone can see who is ringing up sales.</div></div><a class="btn" href="#setup">Add staff</a></div>':"";let t=js(),s=`<div class="duty-slot">${Hs(e,64)}<div class="grow"><div class="eyebrow">Head staff \xB7 ${O(y.termName)} \xB7 <button class="linkbtn" data-act="dutylog">Time log</button></div>
    <div class="duty-name">${e?O(e.name):"No one chosen"}</div><div class="muted" style="font-size:13px">${e?`On duty ${dl(e.since)} \xB7 time in <button class="linkbtn tin" data-act="dutytime" data-role="head" title="Change time in">${ze(e.since)} \u270E</button> \xB7 sales are recorded under this name`:"Choose who is selling, so sales show the right name."}</div></div>
    <div class="row" style="gap:6px"><button class="btn ${e?"":"sun"}" data-act="switchduty">${e?"Switch staff":"Choose who's on duty"}</button>${e?'<button class="btn ghost" data-act="dutyout" data-role="head">Time out</button>':""}</div></div>`,i=!e&&!t||n.length<2?"":`<div class="duty-slot asst">${t?Hs(t,48):'<div class="avatar ph" style="width:48px;height:48px;font-size:18px">+</div>'}<div class="grow"><div class="eyebrow">Assistant</div>
    <div class="duty-name sm">${t?O(t.name):"None"}</div><div class="muted" style="font-size:13px">${t?`On duty ${dl(t.since)} \xB7 time in <button class="linkbtn tin" data-act="dutytime" data-role="assist" title="Change time in">${ze(t.since)} \u270E</button>`:"Add a second person helping at the store."}</div></div>
    <div class="row" style="gap:6px"><button class="btn" data-act="switchassist">${t?"Switch":"Add assistant"}</button>${t?'<button class="btn ghost" data-act="dutyout" data-role="assist">Time out</button>':""}</div></div>`,r=new Set([ce.get(gl(),null),ce.get(Wi(),null)].filter(Boolean).map(l=>l.entry)),o=Bi((y.shifts.get(ie())||{}).dutyLog).filter(l=>!l.out&&!r.has(l.id)&&l.term!==y.termName),c=o.length?`<div class="duty-others">Also on duty now: ${o.map(l=>`<b>${O(l.name)}</b> <span class="muted">(${l.role==="assist"?"assistant":"head"}${l.term?", "+O(l.term):""}, ${dl(l.in)})</span>`).join(" \xB7 ")}</div>`:"";return`<div class="card duty-card${e?"":" none"}${i?" two":""}${c?" others":""}">${s}${i}${c}</div>`}var OR=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);function Po(n,e,t){fe(dt(ye("shifts",n),{day:n,dutyLog:{[e]:t}},{merge:!0}))}function pp(n,e,t){let s=OR();return Po(ie(new Date(t)),s,{crewId:n.id,name:n.name,role:e,in:t,out:null,term:y.termName||"",by:y.u.uid}),s}function $w(n,e){n&&n.entry&&Po(ie(new Date(n.since)),n.entry,{out:e})}var mp=n=>n==="assist"?Wi():gl(),gp=n=>n==="assist"?js():En();function xR(){let n=y.store.crew||{},e=Bi((y.shifts.get(ie())||{}).dutyLog).filter(s=>!s.out),t=s=>`<div class="duty-slot${s.role==="assist"?" asst":""}">${Hs({...n[s.crewId]||{},name:s.name},s.role==="assist"?48:64)}<div class="grow"><div class="eyebrow">${s.role==="assist"?"Assistant":"Head staff"}${s.term?" \xB7 "+O(s.term):""}</div>
    <div class="duty-name${s.role==="assist"?" sm":""}">${O(s.name)}</div><div class="muted" style="font-size:13px">On duty ${dl(s.in)} \xB7 time in ${ze(s.in)}</div></div></div>`;return`<div class="card duty-card${e.length>1?" two":""}">${e.length?e.map(t).join(""):'<div class="duty-slot"><div class="avatar ph" style="width:64px;height:64px;font-size:22px">?</div><div class="grow"><div class="eyebrow">On duty</div><div class="muted" style="margin-top:4px">No one has timed in today.</div></div></div>'}
    <div class="row" style="padding:0 18px 14px;${e.length>1?"grid-column:1/-1":""}"><button class="btn sm" data-act="dutylog">Time log</button></div></div>`}function Fw(n,e="head"){let t=mp(e),s=ce.get(t,null),i=Date.now();if(s&&s.id===n.id&&gp(e))return Te(),z(`${n.name} is already on duty`);if($w(s,i),e!=="assist"){let r=ce.get(Wi(),null);r&&r.id===n.id&&($w(r,i),ce.set(Wi(),null))}ce.set(t,{id:n.id,since:i,entry:pp(n,e,i)}),Te(),Ws(),zs(),z(e==="assist"?`${n.name} is now the assistant`:`${n.name} is now the head staff on duty`)}function yp(n,e,t){let s=v(e,n);return s.textContent=t,s.hidden=!t,!!t}function LR(n){let e=mp(n),t=ce.get(e,null),s=gp(n);if(!s||!t)return;let i=ie(new Date(t.since)),r=Ie(`Time out: ${s.name}`,`<p class="muted" style="margin:0">Time in ${ze(t.since)}. Change the time out if they left earlier.</p>
    <div class="field"><label for="to-t">Time out</label><input class="input bigin" type="time" id="to-t" value="${Ui(Date.now())}" style="max-width:200px"></div>
    <div class="err" id="to-e" hidden></div>
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="to-ok">Time out</button></div>`);v("#to-ok",r).onclick=()=>{let o=Date.now(),c=v("#to-t",r).value,l=c===Ui(o)?o:wo(i,c);if(yp(r,"#to-e",ol(t.since,l,o)))return;let u=t.entry||pp(s,n,t.since);Po(i,u,{out:l,...l===o?{}:{edited:!0,editedBy:At()}}),ce.set(e,null),Te(),Ws(),zs(),z(`${s.name} timed out at ${ze(l)}`)}}function hb(n){let e=mp(n),t=ce.get(e,null),s=gp(n);if(!s||!t)return;let i=ie(new Date(t.since)),r=Ie(`Time in: ${s.name}`,`<p class="muted" style="margin:0">Use this if they started earlier or later than when they were chosen. The change shows as "edited" in the time log.</p>
    <div class="field"><label for="ti-t">Time in</label><input class="input bigin" type="time" id="ti-t" value="${Ui(t.since)}" style="max-width:200px"></div>
    <div class="err" id="ti-e" hidden></div>
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="ti-ok">Save</button></div>`);v("#ti-ok",r).onclick=()=>{let o=wo(i,v("#ti-t",r).value);if(yp(r,"#ti-e",ol(o,null)))return;let c=t.entry;c?Po(i,c,{in:o,edited:!0,editedBy:At()}):c=pp(s,n,o),ce.set(e,{...t,since:o,entry:c}),Te(),Ws(),zs(),z(`${s.name}'s time in is now ${ze(o)}`)}}function MR(){let n=ie(),e=(y.shifts.get(n)||{}).dutyLog||{},t=Bi(e),s=Tw(e),i=new Map([["head",ce.get(gl(),null)],["assist",ce.get(Wi(),null)]].filter(([,c])=>c&&c.entry).map(([c,l])=>[l.entry,c])),r=Ie("Time log \xB7 today",t.length?`<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Staff</th><th>Role</th><th>Time in</th><th>Time out</th><th class="r">Hours</th><th></th></tr></thead><tbody>${t.map(c=>`<tr><td><b>${O(c.name)}</b>${c.edited?' <span class="tag">edited</span>':""}<br><small class="muted">${O(c.term||"")}</small></td><td class="muted">${c.role==="assist"?"Assistant":"Head staff"}</td><td>${ze(c.in)}</td><td>${c.out?ze(c.out):'<span class="tag ok">on duty</span>'}</td><td class="r num">${Yf(al(c))}</td><td class="r">${!St&&(c.out||i.has(c.id))?`<button class="btn sm" data-edit="${c.id}">Edit</button>`:""}</td></tr>`).join("")}</tbody></table></div>
    <div class="card-h" style="padding:14px 0 6px">Total today</div><div class="list">${s.map(c=>`<div class="li"><div class="grow t">${O(c.name)}</div><b class="num">${Yf(c.mins)}</b>${c.open?'<span class="muted" style="font-size:12px">so far</span>':""}</div>`).join("")}</div>
    <div class="modal-f"><button class="btn" id="tl-csv">Download (Excel)</button><button class="btn primary" data-act="close">Done</button></div>`:`<div class="empty"><b>No time in yet today</b>Choosing who's on duty starts their time in.</div><div class="modal-f"><button class="btn primary" data-act="close">Done</button></div>`,{wide:!0});ve("[data-edit]",r).forEach(c=>c.onclick=()=>{let l=t.find(u=>u.id===c.dataset.edit);l.out?VR(n,l):hb(i.get(l.id))});let o=v("#tl-csv",r);o&&(o.onclick=()=>vp(`time_log_${n}.csv`,il([["Date","Staff","Role","Time in","Time out","Minutes","Edited","Counter"],...t.map(c=>[n,c.name,c.role==="assist"?"Assistant":"Head staff",ze(c.in),c.out?ze(c.out):"on duty",al(c),c.edited?"yes":"",c.term||""])])))}function VR(n,e){let t=Ie(`Edit time: ${e.name}`,`<div class="grid2"><div class="field"><label for="ee-in">Time in</label><input class="input" type="time" id="ee-in" value="${Ui(e.in)}"></div>
    <div class="field"><label for="ee-out">Time out</label><input class="input" type="time" id="ee-out" value="${Ui(e.out)}"></div></div>
    <p class="muted" style="margin:0;font-size:13px">The change shows as "edited" in the time log.</p><div class="err" id="ee-e" hidden></div>
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="ee-ok">Save</button></div>`);v("#ee-ok",t).onclick=()=>{let s=wo(n,v("#ee-in",t).value),i=wo(n,v("#ee-out",t).value);yp(t,"#ee-e",ol(s,i))||(Po(n,e.id,{in:s,out:i,edited:!0,editedBy:At()}),Te(),z("Time log updated"))}}function Uw(n="head"){let e=En(),t=_o(y.store.crew).filter(c=>n!=="assist"||!e||c.id!==e.id),s=n==="assist"?js():e;if(!t.length){Ne()?location.hash="#setup":z("Ask the owner to add staff in Store Setup.","bad");return}let i=Ie(n==="assist"?"Who's the assistant?":"Who's the head staff on duty?",`
    <div class="crew-grid">${t.map(c=>`<button type="button" class="crew-pick" data-cid="${c.id}" aria-pressed="${s&&s.id===c.id}">${Hs(c,72)}<b>${O(c.name)}</b>${c.pin?'<small class="muted">PIN</small>':""}</button>`).join("")}</div>
    <div id="dp-pin" hidden><div class="field"><label for="dp-p" id="dp-l">PIN</label><input class="input bigin" id="dp-p" type="password" inputmode="numeric" maxlength="4" autocomplete="off" style="max-width:160px;letter-spacing:.4em"></div></div>
    <p class="muted" style="margin:0;font-size:13px">Not on the list? The owner adds staff in Store Setup.</p>`),r=null,o=async()=>{let c=v("#dp-p",i).value;Xf(c)&&(await Zf(y.sid,c)===r.pin?Fw(r,n):(v("#dp-p",i).value="",z("Wrong PIN. Try again.","bad")))};ve("[data-cid]",i).forEach(c=>c.onclick=()=>{if(r=t.find(l=>l.id===c.dataset.cid),ve("[data-cid]",i).forEach(l=>l.setAttribute("aria-pressed",l===c)),!r.pin)return Fw(r,n);v("#dp-pin",i).hidden=!1,v("#dp-l",i).textContent=`${r.name}'s PIN`,v("#dp-p",i).value="",v("#dp-p",i).focus()}),v("#dp-p",i).oninput=o}function $R(){let n=v("#st-crew");if(!n)return;let e=_o(y.store.crew),t=En();n.innerHTML=`${e.length?`<div class="list">${e.map(s=>`<div class="li">${Hs(s,40)}<div class="grow"><div class="t">${O(s.name)}${t&&t.id===s.id?' <span class="tag ok">on duty here</span>':""}</div><div class="s">${s.pin?"Has a PIN":"No PIN, switches with one tap"}</div></div>${Ne()?`<button class="btn sm" data-act="editcrew" data-id="${s.id}">Edit</button>`:""}</div>`).join("")}</div>`:'<p class="muted" style="margin:0">No staff yet. Add each person who sells, with a photo, so the screen always shows who is on duty.</p>'}
    <div class="row" style="margin-top:12px">${Ne()?'<button class="btn primary" data-act="addcrew">Add staff</button>':""}${e.length?`<button class="btn" data-act="switchduty">Switch who's on duty</button>`:""}</div>`}function Bw(n){let e=document.createElement("canvas");e.width=e.height=160;let t=n.videoWidth||n.naturalWidth||n.width,s=n.videoHeight||n.naturalHeight||n.height,i=Math.min(t,s);return e.getContext("2d").drawImage(n,(t-i)/2,(s-i)/2,i,i,0,0,160,160),e.toDataURL("image/jpeg",.8)}function qw(n){if(!Zt())return;let e=n?{id:n,...y.store.crew[n]}:{name:"",photo:"",pin:""},t=e.photo||"",s=Ie(n?"Edit staff":"Add staff",`
    <div class="crew-photo"><div id="cr-pv"></div><video id="cr-vid" autoplay playsinline muted hidden></video>
      <div class="row"><button type="button" class="btn" id="cr-cam">Take photo</button><button type="button" class="btn" id="cr-snap" hidden>Capture</button><label class="btn" style="cursor:pointer">Choose photo<input type="file" id="cr-file" accept="image/*" hidden></label><button type="button" class="btn ghost" id="cr-rm">Remove photo</button></div></div>
    <div class="field"><label for="cr-n">Name</label><input class="input" id="cr-n" value="${O(e.name)}" placeholder="e.g. Ana" autocomplete="off"></div>
    <div class="field"><label for="cr-p">${e.pin?"New PIN (leave blank to keep, or type 0000 to remove)":"PIN (optional, 4 digits)"}</label><input class="input" id="cr-p" type="password" inputmode="numeric" maxlength="4" autocomplete="off" style="max-width:160px;letter-spacing:.4em"></div>
    <div class="modal-f">${n?'<button class="btn danger" id="cr-del" style="margin-right:auto">Remove</button>':""}<button class="btn" data-act="close">Cancel</button><button class="btn primary" id="cr-ok">${n?"Save":"Add staff"}</button></div>`),i=()=>{v("#cr-pv",s).innerHTML=Hs({name:v("#cr-n",s).value||e.name,photo:t},96)};i(),v("#cr-n",s).oninput=i;let r=v("#cr-vid",s);v("#cr-cam",s).onclick=async()=>{try{let c=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480}});y.stopCam=()=>c.getTracks().forEach(l=>l.stop()),r.srcObject=c,r.hidden=!1,v("#cr-pv",s).hidden=!0,v("#cr-snap",s).hidden=!1,v("#cr-cam",s).hidden=!0}catch{z("Couldn't open the camera. Choose a photo instead.","bad")}},v("#cr-snap",s).onclick=()=>{t=Bw(r),y.stopCam&&(y.stopCam(),y.stopCam=null),r.hidden=!0,v("#cr-pv",s).hidden=!1,v("#cr-snap",s).hidden=!0,v("#cr-cam",s).hidden=!1,i()},v("#cr-file",s).onchange=c=>{let l=c.target.files[0];if(!l)return;let u=new Image;u.onload=()=>{t=Bw(u),URL.revokeObjectURL(u.src),i()},u.src=URL.createObjectURL(l)},v("#cr-rm",s).onclick=()=>{t="",i()},v("#cr-ok",s).onclick=async()=>{let c=v("#cr-n",s).value.trim();if(!c)return v("#cr-n",s).focus();let l=v("#cr-p",s).value;if(l&&!Xf(l))return z("A PIN is exactly 4 digits.","bad"),v("#cr-p",s).focus();let u=l==="0000"&&e.pin?"":l?await Zf(y.sid,l):e.pin||"",h=n||Date.now().toString(36)+Math.random().toString(36).slice(2,6);fe(Jt(ye(),{["crew."+h]:{name:c,photo:t,pin:u}})),Te(),z(n?"Saved":`${c} added`)};let o=v("#cr-del",s);o&&(o.onclick=()=>It(`Remove ${e.name}?`,"They won't appear in the on-duty list. Their past sales keep their name.","Remove",()=>{fe(Jt(ye(),{["crew."+n]:fo()})),z("Removed")}))}function fb(n,e){y.inv.sort=n,y.inv.dir=e,ce.set("pos.invSort",n),ce.set("pos.invDir",e),ue.inventory.update()}function pb(n,e,t){if(!n)return"";let s=e.unit==="kg"?" per kilo":" per item",i=n.up?`Cost up ${x(n.diff)} (${x(e.cost)} \u2192 ${x(e.cost+n.diff)}).`:`Cost down ${x(-n.diff)}.`,r=n.newProfit<0,o=r?`You'd lose ${x(-n.newProfit)}${s} at the current price.`:`Profit${s} ${n.up?"drops":"rises"} from ${x(n.oldProfit)} to ${x(n.newProfit)}.`,c=n.up&&t?`<div style="margin-top:6px">To keep ${x(n.oldProfit)} profit, sell at <b>${x(n.keepPrice)}</b>. <button type="button" class="btn sm" data-keep="${n.keepPrice}">Use ${x(n.keepPrice)}</button></div>`:"";return`<div class="note ${r?"loss":n.up?"up":""}" style="margin-top:4px"><b>${i}</b> ${o}${c}</div>`}function mb(n){let e=(n.costLog||[]).slice().sort((t,s)=>s.ts-t.ts).slice(0,5);return e.length?`<div class="field"><span class="lbl">Cost history</span><div class="list">${e.map(t=>`<div class="li"><div class="grow"><div class="t">${t.via==="new"?"Added":t.oldCost!==t.cost?`Cost ${x(t.oldCost)} \u2192 ${x(t.cost)}`:t.oldPrice!==t.price?"Price changed":"Restocked"}${t.oldPrice!==t.price&&t.via!=="new"?` \xB7 price ${x(t.oldPrice)} \u2192 ${x(t.price)}`:""}</div><div class="s">${O(qe(ie(t.ts)))}${t.via==="receipt"?" \xB7 from a receipt":""}${t.supplier?" \xB7 "+O(t.supplier):""}${t.byName?" \xB7 "+O(t.byName):""}</div></div></div>`).join("")}</div></div>`:""}function gb(n=30){let e=sw([...y.products.values()],Date.now()-n*864e5),t=Ie("Cost changes",`
    <div class="seg" role="group">${[7,30,90].map(s=>`<button type="button" data-days="${s}" aria-pressed="${s===n}">Last ${s} days</button>`).join("")}</div>
    ${e.length?`<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Date</th><th>Item</th><th class="r">Cost</th><th class="r">Price</th><th class="r">Profit now</th><th>Supplier</th></tr></thead><tbody>${e.map(s=>{let i=y.products.get(s.pid)||{},r=nl(i),o=s.cost>s.oldCost,c=s.unit==="kg"?"/kg":"";return`<tr><td style="white-space:nowrap">${O(qe(ie(s.ts)))}</td><td><b>${O(s.name)}</b></td><td class="r" style="white-space:nowrap${s.cost!==s.oldCost?o?";color:var(--bad)":";color:var(--good)":""}">${s.cost!==s.oldCost?`${x(s.oldCost)} \u2192 ${x(s.cost)}`:x(s.cost)}</td><td class="r" style="white-space:nowrap">${s.price!==s.oldPrice?`${x(s.oldPrice)} \u2192 ${x(s.price)}`:x(s.price)}</td><td class="r"${r<0?' style="color:var(--bad)"':""}>${r===null?"\u2014":(r<0?"-":"")+x(Math.abs(r))+c}</td><td>${O(s.supplier||"\u2014")}</td></tr>`}).join("")}</tbody></table></div>`:`<div class="empty"><b>No cost changes in the last ${n} days</b>Changes are recorded from this version on, when you restock with a new cost or edit an item.</div>`}
    <div class="modal-f"><button class="btn primary" data-act="close">Done</button></div>`,{wide:!0});ve("[data-days]",t).forEach(s=>s.onclick=()=>gb(+s.dataset.days))}var ji=0,$t=null,FR="2000-01-01";function UR(){let n=ie(),e=y.report;if(e.range==="today")return[n,n];if(e.range==="yesterday"){let t=_n(n,-1);return[t,t]}return e.range==="7d"?[_n(n,-6),n]:e.range==="month"?[n.slice(0,8)+"01",n]:e.range==="all"?[FR,n]:[e.from<=e.to?e.from:e.to,e.from<=e.to?e.to:e.from]}ue.reports={mount:()=>`<div class="page-head"><div><h1>Sales report</h1><p class="sub" id="rp-sub"></p></div><div class="row"><button class="btn" data-act="exportcsv">Export to Excel (CSV)</button></div></div>
    <div class="toolbar"><div class="seg" role="group" aria-label="Date range">${[["today","Today"],["yesterday","Yesterday"],["7d","Last 7 days"],["month","This month"],["all","All time"],["custom","Custom"]].map(([n,e])=>`<button data-act="range" data-r="${n}" aria-pressed="${y.report.range===n}">${e}</button>`).join("")}</div>
    <span id="rp-custom" class="row" ${y.report.range==="custom"?"":"hidden"}><input type="date" class="input" id="rp-from" value="${y.report.from}" style="width:auto"><span class="muted">to</span><input type="date" class="input" id="rp-to" value="${y.report.to}" style="width:auto"></span></div>
    <div id="rp-body"></div>`,after(){let n=()=>{y.report.from=v("#rp-from").value||ie(),y.report.to=v("#rp-to").value||ie(),$t=null,ue.reports.update()};v("#rp-from").onchange=n,v("#rp-to").onchange=n},async update(){let[n,e]=UR(),t=++ji;v("#rp-sub").textContent=n===e?qe(n):`${qe(n)} \u2013 ${qe(e)}`;let s=ie().slice(0,8)+"01",i=s<Gi()?s:Gi(),r=null,o=null;if(n<Gi()){if(!$t||$t.key!==n+e){v("#rp-body").innerHTML='<div class="empty"><b>Loading older sales\u2026</b></div>';try{let[w,_]=await Promise.all([ho(gn(mt("sales"),Ot("day",">=",n),Ot("day","<=",e))),n<i?ho(gn(mt("expenses"),Ot("day",">=",n),Ot("day","<=",e))):Promise.resolve({docs:[]})]);if(t!==ji)return;$t={key:n+e,sales:w.docs.map(b=>({...b.data(),_id:b.id})),exp:_.docs.map(b=>({...b.data(),_id:b.id}))}}catch(w){t===ji&&(v("#rp-body").innerHTML=`<div class="empty"><b>Couldn't load those dates</b>${O(en(w))}</div>`);return}}r=$t.sales,o=$t.exp}if(t!==ji)return;let c=Ki(r).filter(w=>w.day>=n&&w.day<=e),l=Hi(c),u=new Map(y.expenses);(o||[]).forEach(w=>u.set(w._id,w));let h=[...u.values()].filter(w=>w.day>=n&&w.day<=e),{disc:p,net:m,cost:E,opex:R}=xw(l,h),P=w=>l.filter(_=>_.pay===w).reduce((_,b)=>_+b.total,0),S=Hf[ce.get("pos.itemSort","rev")]?ce.get("pos.itemSort","rev"):"rev",M=rw(TR(c,999),S,w=>{let _=y.products.get(w);return _?_.stock??0:null}),F={};l.forEach(w=>{let _=F[w.day]||(F[w.day]={n:0,v:0,c:0});_.n++,_.v+=w.total,_.c+=Kn(w)});let V=Object.keys(F).sort().reverse();y.lastReport={from:n,to:e,sales:c};let H=y.report.range==="all"?kw(c,e):n;y.report.range==="all"&&(v("#rp-sub").textContent=`All time \xB7 since ${qe(H)}`);let ee=Dw(c,H,e);v("#rp-body").innerHTML=`
      <div class="sumrow">
        <div class="card"><div class="eyebrow">Net sales</div><div class="v">${x(m)}</div><div class="muted" style="font-size:12.5px">${p?x(p)+" in discounts":"No discounts"}</div></div>
        <div class="card"><div class="eyebrow">Gross profit</div><div class="v">${x(m-E)}</div><div class="muted" style="font-size:12.5px">${m?((m-E)/m*100).toFixed(1)+"% margin":"\u2014"}</div></div>
        <div class="card"><div class="eyebrow">Transactions</div><div class="v">${l.length}</div><div class="muted" style="font-size:12.5px">Avg ${l.length?x(m/l.length):"\u2014"}${c.length-l.length?` \xB7 ${c.length-l.length} voided`:""}</div></div>
        <div class="card"><div class="eyebrow">Net after expenses</div><div class="v">${x(m-E-R)}</div><div class="muted" style="font-size:12.5px">${x(R)} operating expenses</div></div>
      </div>
      ${y.report.range==="all"?"":'<div class="card cmp-card" id="rp-cmp"><div class="card-h">Compared with the past</div><div class="card-b muted">Loading past sales\u2026</div></div>'}
      ${bR(ee)}
      <div class="dgrid">
        <div class="stack">
          <div class="card"><div class="card-h">Item sales${M.length?`<label class="isort"><span>Sort by</span><select class="input" id="is-sort">${Object.entries(Hf).map(([w,_])=>`<option value="${w}"${w===S?" selected":""}>${_}</option>`).join("")}</select></label>`:""}</div><div class="tbl-wrap">${M.length?`<table class="tbl"><thead><tr><th>Item</th><th class="r">Qty</th><th class="r">Sales</th><th class="r">Profit</th><th class="r">Profit each</th><th class="r">Remaining</th></tr></thead><tbody>${M.map(w=>{let _=w.pid?y.products.get(w.pid):null,b=_?_.stock??0:null,A=w.profit!==null&&w.profit<0,T=A?' style="color:var(--bad)"':"";return`<tr><td>${O(w.name)}</td><td class="r">${He(w.qty,w.unit)}</td><td class="r">${x(w.rev)}</td><td class="r"${T}>${w.profit===null?'<span class="muted">no cost</span>':x(w.profit)}</td><td class="r"${T}>${w.profitEach===null?'<span class="muted">\u2014</span>':x(w.profitEach)+(w.unit==="kg"?"/kg":"")}</td><td class="r">${b===null?'<span class="muted">\u2014</span>':`<span class="tag ${b<=(_.reorder??5)?"low":"ok"}">${He(b,_.unit)}</span>`}</td></tr>`}).join("")}</tbody></table>`:'<div class="empty">No sales in this period.</div>'}</div></div>
          <div class="card"><div class="card-h">Transactions</div><div class="tbl-wrap">${c.length?`<table class="tbl"><thead><tr><th>Time</th><th>Items</th><th>Paid</th><th>Cashier</th><th class="r">Total</th><th></th></tr></thead><tbody>${c.slice().reverse().slice(0,300).map(w=>`<tr class="${w.void?"voided":""}"><td style="white-space:nowrap">${n===e?"":O(qe(w.day))+" \xB7 "}${ze(w.ts)}</td><td style="max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${O(w.items.map(_=>_.name).join(", "))}${w.custName?`<br><small class="muted">for ${O(w.custName)}</small>`:""}</td><td>${nb(w)}</td><td class="muted">${O(w.byName||w.termName||"\u2014")}${w.assistName?`<br><small>+ ${O(w.assistName)}</small>`:""}</td><td class="r"><b>${x(w.total)}</b></td><td class="r"><button class="btn sm" data-act="viewsale" data-id="${w._id}">View</button></td></tr>`).join("")}</tbody></table>${c.length>300?`<div class="empty">Showing the latest 300. Export to see all ${c.length}.</div>`:""}`:'<div class="empty">No transactions in this period.</div>'}</div></div>
        </div>
        <div class="stack">
          <div class="card"><div class="card-h">Payments</div><div class="card-b">${tb(P("cash"),P("gcash"),P("utang"))}</div></div>
          <div class="card"><div class="card-h">By day</div><div class="tbl-wrap">${V.length?`<table class="tbl"><thead><tr><th>Day</th><th class="r">Txns</th><th class="r">Sales</th><th class="r">Profit</th></tr></thead><tbody>${V.map(w=>`<tr><td>${O(qe(w))}</td><td class="r">${F[w].n}</td><td class="r">${x(F[w].v)}</td><td class="r">${x(F[w].v-F[w].c)}</td></tr>`).join("")}</tbody></table>`:'<div class="empty">\u2014</div>'}</div></div>
          <div class="card"><div class="card-h">Expenses <a class="btn sm" href="#expenses">Manage</a></div><div class="card-b" style="padding-top:4px">${h.length?`<div class="list">${Object.entries(h.reduce((w,_)=>(w[_.cat]=(w[_.cat]||0)+_.amount,w),{})).sort((w,_)=>_[1]-w[1]).map(([w,_])=>`<div class="li"><div class="grow t">${O(w)}</div><b class="num">${x(_)}</b></div>`).join("")}</div>`:'<div class="empty">No expenses recorded.</div>'}</div></div>
        </div>
      </div>`,ER(v("#rp-body"),ee);let W=v("#is-sort");W&&(W.onchange=()=>{ce.set("pos.itemSort",W.value),ue.reports.update()}),y.report.range!=="all"&&qR(n,e,t,tp(l))}};var Eo=new Map;function BR(n,e){if(n>=Gi())return Promise.resolve(Ki().filter(s=>s.day>=n&&s.day<=e));let t=n+"|"+e;return Eo.has(t)||Eo.set(t,ho(gn(mt("sales"),Ot("day",">=",n),Ot("day","<=",e))).then(s=>s.docs.map(i=>i.data())).catch(s=>{throw Eo.delete(t),s})),Eo.get(t)}async function qR(n,e,t,s){let i=ie(),r=new Date,o=r.getHours()*60+r.getMinutes(),c=[["week","1 week ago"],["month","1 month ago"],["year","1 year ago"]],l;try{l=await Promise.all(c.map(async([m,E])=>{let[R,P]=Pw(n,e,m),S=await BR(R,P);return e===i&&(S=S.filter(M=>M.day<P||(F=>F.getHours()*60+F.getMinutes()<=o)(new Date(M.ts)))),{label:E,f:R,t:P,...tp(S)}}))}catch(m){t===ji&&v("#rp-cmp")&&(v("#rp-cmp").innerHTML=`<div class="card-h">Compared with the past</div><div class="card-b muted">Couldn't load past sales: ${O(en(m))}</div>`);return}let u=v("#rp-cmp");if(t!==ji||!u)return;let h=(m,E)=>{let R=Nw(m,E);return R==null?"":`<span class="${R>=0?"up":"down"}">${R>=0?"\u25B2":"\u25BC"} ${Math.abs(R)}%</span>`},p=(m,E)=>m===E?qe(m)+(m.slice(0,4)!==i.slice(0,4)?", "+m.slice(0,4):""):`${qe(m)} \u2013 ${qe(E)}${E.slice(0,4)!==i.slice(0,4)?", "+E.slice(0,4):""}`;u.innerHTML=`<div class="card-h">Compared with the past <span class="muted" style="font-weight:500;font-size:12.5px">${e===i?"up to this time of day":"same dates"}</span></div><div class="cmp-grid">${l.map(m=>`<div>
    <div class="l">${m.label} \xB7 ${O(p(m.f,m.t))}</div>
    ${m.n?`<div class="v">${x(m.sales)} ${h(s.sales,m.sales)}</div><div class="s">Profit ${x(m.profit)} ${h(s.profit,m.profit)} \xB7 ${m.n.toLocaleString("en-PH")} sale${m.n===1?"":"s"}</div>`:'<div class="v muted">No sales</div><div class="s">Nothing to compare with</div>'}</div>`).join("")}</div>
    <div class="cmp-now muted">Now: <b>${x(s.sales)}</b> sales, <b>${x(s.profit)}</b> profit. \u25B2 means you're ahead of then.</div>`}function jR(){let n=y.lastReport;if(!n)return;let e=r=>`"${String(r??"").replace(/"/g,'""')}"`,t=[["Date","Time","Sale ID","Item","Qty","Unit","Price","Line total","Line cost","Discount (sale)","Sale total","Payment","Status","Cashier","Counter","Customer","Assistant"]];n.sales.forEach(r=>r.items.forEach((o,c)=>t.push([r.day,ze(r.ts),r._id,o.name,o.qty,o.unit,o.price,j(o.qty*o.price),j(o.qty*(o.cost||0)),c?"":r.discount||0,c?"":r.total,r.pay,r.void?"voided":"ok",r.byName||"",r.termName||"",r.custName||"",r.assistName||""])));let s=new Blob(["\uFEFF"+t.map(r=>r.map(e).join(",")).join(`\r
`)],{type:"text/csv"}),i=document.createElement("a");i.href=URL.createObjectURL(s),i.download=`sales_${n.from}_to_${n.to}.csv`,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(i.href),5e3)}function GR(){let n=ie(),e=Ki().filter(o=>o.day>=_n(n,-6)),t=[...y.products.values()],s=!1,i=Ie("Shopping list",'<div id="bl-body"></div>',{wide:!0}),r=()=>{let o=vo(t,e,{lowToo:s}),c=vo(t,e).length,l=vo(t,e,{lowToo:!0}).length,u=o.reduce((R,P)=>R+P.cost,0),h=o.filter(R=>!R.hasCost).length;v("#bl-body",i).innerHTML=`<div class="seg" role="group"><button type="button" data-low="0" aria-pressed="${!s}">Out of stock (${c.toLocaleString("en-PH")})</button><button type="button" data-low="1" aria-pressed="${s}">Out of stock + running low (${l.toLocaleString("en-PH")})</button></div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">Buy amount covers a week of sales or twice the reorder level, whichever is more. Most-sold items are first.</p>
      ${o.length?`<div class="tot" style="margin-top:10px"><span class="muted">${o.length.toLocaleString("en-PH")} item${o.length===1?"":"s"} to buy${h?` \xB7 ${h} without a cost`:""}</span><b style="font-size:20px">about ${x(u)}</b></div>
      <div class="tbl-wrap" style="max-height:46vh;overflow:auto;margin-top:10px"><table class="tbl"><thead><tr><th>Item</th><th class="r">Left</th><th class="r">Sold this week</th><th class="r">Buy</th><th class="r">Est. cost</th><th>Supplier</th></tr></thead><tbody>${o.slice(0,500).map(R=>`<tr><td>${O(R.name)}</td><td class="r">${He(R.stock,R.unit)}</td><td class="r">${R.week?He(R.week,R.unit):'<span class="muted">0</span>'}</td><td class="r"><b>${He(R.buy,R.unit)}</b></td><td class="r">${R.hasCost?x(R.cost):'<span class="muted">no cost</span>'}</td><td class="muted">${O(R.supplier||"\u2014")}</td></tr>`).join("")}</tbody></table></div>${o.length>500?`<div class="muted" style="font-size:12.5px;margin-top:6px">Showing 500. Download to see all ${o.length.toLocaleString("en-PH")}.</div>`:""}`:`<div class="empty"><b>Nothing to buy</b>${s?"Every item is above its reorder level.":"Nothing is out of stock."}</div>`}
      <div class="modal-f"><button class="btn" data-act="close">Close</button>${o.length?'<button class="btn" id="bl-csv">Download (Excel)</button><button class="btn primary" id="bl-copy">Copy list</button>':""}</div>`,ve("[data-low]",i).forEach(R=>R.onclick=()=>{s=R.dataset.low==="1",r()});let p=`Shopping list \u2013 ${y.store.name||"My Store"} \u2013 ${qe(n)}`,m=v("#bl-copy",i);m&&(m.onclick=async()=>{try{await navigator.clipboard.writeText(fw(o,p)),z("Copied. Paste it in Messenger, Viber or Notes.")}catch{z("Couldn't copy. Use Download instead.","bad")}});let E=v("#bl-csv",i);E&&(E.onclick=()=>vp(`shopping_list_${n}.csv`,il([["Item","Left","Sold this week","Buy","Unit","Est. cost","Supplier"],...o.map(R=>[R.name,R.stock,R.week,R.buy,R.unit,R.hasCost?R.cost:"",R.supplier])])))};r()}var HR=["gemini-3.6-flash","gemini-3.5-flash-lite"],zR=`You read photos of supplier receipts for a small sari-sari store in the Philippines.
List every item that was bought. For each line give:
- name: the item name exactly as printed (keep sizes like 1.5L, 150G)
- qty: how many were bought, as printed (1 if not shown)
- unitPrice: the price for one of what was bought, in pesos (if only the line total is printed, leave it 0)
- lineTotal: the line total in pesos (0 if not printed)
Also give supplier (the store or seller name at the top) and date (as printed).
Leave out subtotal, total, VAT, discounts, cash, change and any line that is not an item. Never invent lines.`,WR=()=>Be.object({properties:{supplier:Be.string(),date:Be.string(),lines:Be.array({items:Be.object({properties:{name:Be.string(),qty:Be.number(),unitPrice:Be.number(),lineTotal:Be.number()}})})}}),sp=null;async function KR(n){sp||(sp=J_(ul,{backend:new Us}));let e=null;for(let t of HR)try{let s=X_(sp,{model:t,generationConfig:{responseMimeType:"application/json",responseSchema:WR(),temperature:0}}),i=await Io(s.generateContent([zR,{inlineData:{mimeType:"image/jpeg",data:n}}]),6e4);return mw(i.response.text())}catch(s){if(e=s,!/not.?found|404|unsupported|not available/i.test(String(s&&(s.message||s.code))))break}throw e}function QR(n){let e=String(n&&(n.message||n.code)||n||"");return/api.?not.?enabled|has not been used|SERVICE_DISABLED|firebasevertexai|PERMISSION_DENIED|403/i.test(e)?"AI reading isn't turned on for this store yet. In the Firebase console, open AI Logic, click Get started and choose the Gemini Developer API. Then try again.":/quota|429|RESOURCE_EXHAUSTED/i.test(e)?"The free AI limit for today is used up. Try again later, or tomorrow.":/timeout|network|Failed to fetch/i.test(e)||!navigator.onLine?"Couldn't reach the AI. Check the internet and try again.":"Couldn't read the receipt: "+e.slice(0,200)}function YR(n){return new Promise((e,t)=>{let s=URL.createObjectURL(n),i=new Image;i.onload=()=>{let r=Math.min(1,1600/Math.max(i.width,i.height)),o=document.createElement("canvas");o.width=Math.round(i.width*r),o.height=Math.round(i.height*r),o.getContext("2d").drawImage(i,0,0,o.width,o.height),URL.revokeObjectURL(s);let c=o.toDataURL("image/jpeg",.85);e({dataUrl:c,base64:c.split(",")[1]})},i.onerror=()=>{URL.revokeObjectURL(s),t(new Error("That file isn't a photo the app can open."))},i.src=s})}function JR(){let n=[...y.products.values()],e=new Map(n.map(l=>[l.name.toUpperCase(),l])),t=Ie("Check a receipt",'<div id="rc-body"></div>',{wide:!0});t.classList.add("xwide");let s=v("#rc-body",t),i=()=>{s.innerHTML=`<div class="drop" id="rc-drop" tabindex="0"><b>Drag a receipt photo here</b><span class="muted">or paste it (Ctrl+V), or</span>
      <label class="btn primary">${Re("plus",18)} Choose photo<input type="file" accept="image/*" id="rc-file" hidden></label></div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">The photo is read by Google's Gemini AI. Nothing changes in your Inventory until you tick lines and click Update.</p>
      <div class="modal-f"><button class="btn" data-act="close">Cancel</button></div>`;let l=v("#rc-drop",t),u=h=>{h&&/^image\//.test(h.type)?r(h):h&&z("Choose a photo (JPG or PNG).","bad")};v("#rc-file",t).onchange=h=>u(h.target.files[0]),l.ondragover=h=>{h.preventDefault(),l.classList.add("on")},l.ondragleave=()=>l.classList.remove("on"),l.ondrop=h=>{h.preventDefault(),l.classList.remove("on"),u(h.dataTransfer.files[0])},t.onpaste=h=>{let p=[...(h.clipboardData||{}).items||[]].map(m=>m.getAsFile&&m.getAsFile()).find(Boolean);u(p)}},r=async l=>{let u;try{u=await YR(l)}catch(h){z(h.message,"bad");return}s.innerHTML=`<div class="rc-reading"><img src="${u.dataUrl}" alt="Receipt"><div><b>Reading the receipt\u2026</b><div class="muted">This takes a few seconds.</div></div></div>`;try{let h=await KR(u.base64);if(!h.lines.length){s.innerHTML='<div class="empty"><b>No items found on that photo</b>Try a clearer, straight photo of the whole receipt.</div><div class="modal-f"><button class="btn" id="rc-again">Try another photo</button><button class="btn" data-act="close">Close</button></div>',v("#rc-again",t).onclick=i;return}o(h,u)}catch(h){s.innerHTML=`<div class="note loss">${O(QR(h))}</div><div class="modal-f"><button class="btn" id="rc-again">Try another photo</button><button class="btn" data-act="close">Close</button></div>`,v("#rc-again",t).onclick=i}},o=(l,u)=>{let h=l.lines.map(m=>{let E=gw(m.name,n);return{line:m,p:E.product,per:1}}),p=()=>{h.forEach(S=>{S.c=yw(S.line,S.p,S.per),S.on===void 0&&(S.on=vw(S.c))});let m=h.filter(S=>S.c.status==="up").length,E=h.filter(S=>S.c.status==="down").length,R=h.filter(S=>!S.p).length,P=S=>{let M=S.c;return S.p?M.status==="nocost"?'<span class="muted">No cost saved yet</span>':M.status==="same"?'<span class="muted">Same</span>':`<b class="${M.status==="up"?"bad":"good"}">${M.status==="up"?"\u25B2":"\u25BC"} ${x(Math.abs(M.diff))}</b> <span class="muted">(${M.pct>0?"+":""}${M.pct}%)</span>`:'<span class="muted">Pick the item</span>'};s.innerHTML=`<div class="rc-top"><img src="${u.dataUrl}" alt="Receipt" class="rc-thumb"><div class="grow">
          <div class="grid2"><div class="field"><label for="rc-sup">Supplier</label><input class="input" id="rc-sup" value="${O(l.supplier)}" placeholder="Where you bought it"></div>
          <div class="field"><label>Receipt date</label><div style="padding:9px 0">${O(l.date||"\u2014")}</div></div></div>
          <div class="muted" style="font-size:13px">${h.length} line${h.length===1?"":"s"} read \xB7 <b class="bad">${m} cost${m===1?"":"s"} up</b> \xB7 <b class="good">${E} down</b>${R?` \xB7 ${R} not matched`:""}</div></div></div>
        <datalist id="rc-items">${n.map(S=>`<option value="${O(S.name)}">`).join("")}</datalist>
        <div class="tbl-wrap" style="max-height:48vh;overflow:auto;margin-top:10px"><table class="tbl rc-tbl"><thead><tr><th></th><th>On the receipt</th><th>Your item</th><th class="r" title="How many of your items are in one receipt unit, e.g. 12 for a dozen">Pcs per</th><th class="r">New cost each</th><th class="r">Now</th><th>Change</th><th class="r">Profit each</th></tr></thead><tbody>
        ${h.map((S,M)=>{let F=S.c;return`<tr class="${S.p?"":"nomatch"}">
          <td><input type="checkbox" data-on="${M}" ${S.on?"checked":""} ${S.p?"":"disabled"} aria-label="Apply this line"></td>
          <td><b>${O(S.line.name)}</b><br><small class="muted">${S.line.qty} \xD7 ${x(S.line.unitPrice)}</small></td>
          <td><input class="input" list="rc-items" data-item="${M}" value="${O(S.p?S.p.name:"")}" placeholder="Type to find the item" style="min-width:180px"></td>
          <td class="r"><input class="input" data-per="${M}" inputmode="decimal" value="${S.per}" style="width:64px;text-align:right"></td>
          <td class="r"><b>${x(F.newCost)}</b></td>
          <td class="r">${S.p?F.oldCost?x(F.oldCost):"\u2014":""}</td>
          <td>${P(S)}</td>
          <td class="r">${S.p?`<span${F.loss?' class="bad"':""}>${x(F.newProfit)}</span>${_w(F)?`<br><small class="bad">${F.loss?"Costs more than it sells for.":"Big change."} Is this price for a pack? Set Pcs per.</small>`:F.keepPrice&&F.status==="up"?`<br><small class="muted">keep profit: sell at ${x(F.keepPrice)}</small>`:""}`:""}</td></tr>`}).join("")}
        </tbody></table></div>
        <label class="row" style="gap:8px;margin-top:10px;font-size:14px"><input type="checkbox" id="rc-stock"> Also add these quantities to stock (like Restock)</label>
        <div class="modal-f"><button class="btn" id="rc-again">Another photo</button><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="rc-ok">Update ${h.filter(S=>S.on&&S.p).length} item${h.filter(S=>S.on&&S.p).length===1?"":"s"}</button></div>`,ve("[data-on]",t).forEach(S=>S.onchange=()=>{h[+S.dataset.on].on=S.checked,v("#rc-ok",t).textContent=`Update ${h.filter(M=>M.on&&M.p).length} item(s)`}),ve("[data-item]",t).forEach(S=>S.onchange=()=>{let M=h[+S.dataset.item],F=e.get(S.value.trim().toUpperCase())||null;M.p=F,M.on=void 0,p()}),ve("[data-per]",t).forEach(S=>S.onchange=()=>{let M=parseFloat(S.value),F=h[+S.dataset.per];F.per=M>0?M:1,F.on=void 0,p()}),v("#rc-again",t).onclick=i,v("#rc-ok",t).onclick=()=>c(h.filter(S=>S.on&&S.p),v("#rc-sup",t).value.trim(),v("#rc-stock",t).checked)};p()},c=(l,u,h)=>{if(!l.length)return z("Tick at least one line to update.","bad");let p=Date.now(),m={by:y.u.uid,byName:At()},E=new Set;l.forEach(R=>{let P=R.p;if(E.has(P._id))return;E.add(P._id);let S={cost:R.c.newCost,updated:p};u&&(S.supplier=u),h&&(S.stock=Hn(R.c.addQty));let M=yo({cost:P.cost,price:P.price},{cost:R.c.newCost,price:P.price},{ts:p,via:"receipt",supplier:u,...m});M&&(S.costLog=Et(M)),fe(Jt(ye("products",P._id),S))}),Te(),z(`Updated ${E.size} item${E.size===1?"":"s"} from the receipt${h?" and added the stock":""}`)};i()}async function XR(n){if(!navigator.onLine)return z("You are offline. The app catches up by itself when the internet is back.","bad");n&&(n.disabled=!0,n.classList.add("spin"));try{await p_(Me),await f_(Me),$t=null,Eo.clear(),z("Up to date with the cloud")}catch(e){z(en(e),"bad")}finally{n&&(n.disabled=!1,n.classList.remove("spin")),Ws(),zs()}}function vp(n,e,t="text/csv"){let s=document.createElement("a");s.href=URL.createObjectURL(new Blob([e],{type:t})),s.download=n,document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(s.href),5e3)}ue.expenses={mount:()=>`<div class="page-head"><div><h1>Expenses</h1><p class="sub">Bills and spending, so the report shows what you really keep.</p></div></div>
    <div class="dgrid">
      <div class="stack"><div class="card"><div class="card-h">This month <span class="muted" id="ex-month" style="font-weight:500"></span></div><div class="tbl-wrap" id="ex-list"></div></div></div>
      <div class="stack"><div class="card"><div class="card-h">Add expense</div><div class="card-b" style="display:grid;gap:12px">
        <div class="grid2"><div class="field"><label for="ex-day">Date</label><input type="date" class="input" id="ex-day" value="${ie()}"></div><div class="field"><label for="ex-amt">Amount (\u20B1)</label><input class="input" id="ex-amt" inputmode="decimal" placeholder="0.00"></div></div>
        <div class="field"><label for="ex-cat">Category</label><select class="input" id="ex-cat">${hR.map(n=>`<option>${O(n)}</option>`).join("")}</select></div>
        <div class="field"><label for="ex-desc">Details</label><input class="input" id="ex-desc" placeholder="e.g. Coke delivery, electricity bill"></div>
        <label class="check"><input type="checkbox" id="ex-drawer" checked> Paid from the cash drawer</label>
        <button class="btn primary" data-act="addexp">Save expense</button>
        <div class="note">Stock purchases are listed here but left out of \u201CNet after expenses\u201D, because item costs already count them.</div>
      </div></div>
      <div class="card"><div class="card-h">By category</div><div class="card-b" id="ex-cats" style="padding-top:4px"></div></div></div>
    </div>`,update(){let n=ie().slice(0,8)+"01";v("#ex-month").textContent=new Date().toLocaleDateString("en-PH",{month:"long",year:"numeric"});let e=[...y.expenses.values()].filter(r=>r.day>=n).sort((r,o)=>o.day.localeCompare(r.day)||o.ts-r.ts),t=e.reduce((r,o)=>r+o.amount,0);v("#ex-list").innerHTML=e.length?`<table class="tbl"><thead><tr><th>Date</th><th>Category</th><th>Details</th><th class="r">Amount</th><th></th></tr></thead><tbody>${e.map(r=>`<tr><td style="white-space:nowrap">${O(qe(r.day))}</td><td>${O(r.cat)}${r.drawer?' <span class="tag cash">drawer</span>':""}</td><td class="muted">${O(r.desc||"")}</td><td class="r"><b>${x(r.amount)}</b></td><td class="r">${Ne()?`<button class="btn sm danger" data-act="delexp" data-id="${r._id}">Delete</button>`:""}</td></tr>`).join("")}<tr><td colspan="3"><b>Total</b></td><td class="r"><b>${x(t)}</b></td><td></td></tr></tbody></table>`:'<div class="empty"><b>No expenses this month</b>Record bills and purchases on the right.</div>';let s=Object.entries(e.reduce((r,o)=>(r[o.cat]=(r[o.cat]||0)+o.amount,r),{})).sort((r,o)=>o[1]-r[1]),i=s[0]?s[0][1]:1;v("#ex-cats").innerHTML=s.length?`<div class="hbars" style="padding-top:10px">${s.map(([r,o])=>`<div class="hbar" style="grid-template-columns:minmax(0,1fr) auto"><span class="nm">${O(r)}</span><span class="amt"><b>${x(o)}</b></span><div class="track" style="grid-column:1/3"><div class="fill" style="width:${o/i*100}%;background:var(--c-gcash)"></div></div></div>`).join("")}</div>`:'<div class="empty">\u2014</div>'}};ue.utang={mount:()=>`<div class="page-head"><div><h1>Utang listahan</h1><p class="sub">Who owes what, and every payment received.</p></div><div class="row"><button class="btn primary" data-act="newcust">${Re("plus",18)} Add customer</button></div></div>
    <div id="ut-sum"></div><div class="toolbar"><input class="input" id="ut-q" placeholder="Search customer" value="${O(y.custQ)}"></div><div id="ut-list"></div>`,after(){v("#ut-q").oninput=n=>{y.custQ=n.target.value,ue.utang.update()}},update(){let n=[...y.customers.values()].map(u=>({...u,bal:To(u)})),e=n.reduce((u,h)=>u+Math.max(0,h.bal),0),t=n.filter(u=>u.bal>.004),s=ie(),i=s.slice(0,8)+"01",r=0,o=0;n.forEach(u=>(u.entries||[]).forEach(h=>{h.type==="payment"&&(h.day===s&&(r+=h.amount),h.day>=i&&(o+=h.amount))})),v("#ut-sum").innerHTML=`<div class="sumrow"><div class="card"><div class="eyebrow">Total outstanding</div><div class="v" style="color:var(--warn)">${x(e)}</div></div><div class="card"><div class="eyebrow">Customers owing</div><div class="v">${t.length}</div></div><div class="card"><div class="eyebrow">Paid today</div><div class="v">${x(r)}</div></div><div class="card"><div class="eyebrow">Paid this month</div><div class="v">${x(o)}</div></div></div>`;let c=y.custQ.trim().toLowerCase(),l=n.filter(u=>!c||u.name.toLowerCase().includes(c)).sort((u,h)=>h.bal-u.bal||u.name.localeCompare(h.name));v("#ut-list").innerHTML=n.length?`<div class="custs">${l.map(u=>{let h=(u.entries||[]).slice(-1)[0];return`<button class="card cust" data-act="opencust" data-id="${u._id}"><span class="row" style="justify-content:space-between"><b>${O(u.name)}</b>${u.bal>.004?'<span class="tag utang">owes</span>':'<span class="tag ok">paid up</span>'}</span><span class="bal ${u.bal>.004?"":"zero"}">${x(u.bal)}</span><span class="muted" style="font-size:12.5px">${h?"Last activity "+O(qe(h.day)):"No activity yet"}${u.phone?" \xB7 "+O(u.phone):""}</span></button>`}).join("")}</div>`:`<div class="card"><div class="empty"><b>${y.got.customers?"No customers yet":"Loading\u2026"}</b>Add a customer here, or choose Utang at checkout.</div></div>`}};function op(n){let e=n?y.customers.get(n):null;if(!e){let l=Ie("Add customer",'<div class="field"><label for="cn-n">Name</label><input class="input" id="cn-n" autofocus placeholder="e.g. Aling Nena"></div><div class="field"><label for="cn-p">Phone (optional)</label><input class="input" id="cn-p" inputmode="tel"></div><div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="cn-ok">Add customer</button></div>');v("#cn-ok",l).onclick=()=>{let u=v("#cn-n",l).value.trim();if(!u)return v("#cn-n",l).focus();fe(dt(ut(mt("customers")),{name:u,phone:v("#cn-p",l).value.trim(),balance:0,entries:[],created:Date.now()})),Te(),z("Customer added")};return}let t=To(e),s=(e.entries||[]).slice().sort((l,u)=>u.ts-l.ts),i=Ie(e.name,`
    <div class="due"><span class="muted">Balance owed</span><b style="color:${t>.004?"var(--warn)":"var(--good)"}">${x(t)}</b></div>
    <div class="card" style="box-shadow:none"><div class="card-b" style="display:grid;gap:10px">
      <div class="grid3"><div class="field"><label for="cp-a">Amount (\u20B1)</label><input class="input" id="cp-a" inputmode="decimal" autofocus placeholder="${t>0?j(t):"0.00"}"></div>
      <div class="field"><label for="cp-m">Paid with</label><select class="input" id="cp-m"><option value="cash">Cash</option><option value="gcash">GCash</option></select></div>
      <div class="field"><label for="cp-n">Note</label><input class="input" id="cp-n" placeholder="optional"></div></div>
      <div class="row"><button class="btn primary" id="cp-pay">Record payment</button><button class="btn" id="cp-add">Add utang (manual)</button>${t>0?'<button class="btn ghost" id="cp-full">Paid in full</button>':""}</div>
    </div></div>
    <div><div class="eyebrow" style="margin-bottom:6px">History</div><div class="tbl-wrap">${s.length?`<table class="tbl"><tbody>${s.map(l=>`<tr><td style="white-space:nowrap">${O(qe(l.day))}<br><small class="muted">${ze(l.ts)}</small></td><td>${l.type==="credit"?'<span class="tag utang">Utang</span>':l.type==="payment"?`<span class="tag ok">Paid${l.method==="gcash"?" \xB7 GCash":""}</span>`:'<span class="tag void">Voided</span>'}<div class="muted" style="font-size:12.5px">${O(l.note||"")}</div></td><td class="r"><b>${l.type==="credit"?"+":"\u2212"}${x(l.amount)}</b></td></tr>`).join("")}</tbody></table>`:'<div class="empty">No entries yet.</div>'}</div></div>
    <div class="grid2"><div class="field"><label for="ce-n">Name</label><input class="input" id="ce-n" value="${O(e.name)}"></div><div class="field"><label for="ce-p">Phone</label><input class="input" id="ce-p" value="${O(e.phone||"")}"></div></div>
    <div class="modal-f">${Math.abs(t)<.005&&Ne()?'<button class="btn danger" id="ce-del" style="margin-right:auto">Remove customer</button>':""}<button class="btn" id="ce-save">Save details</button><button class="btn primary" data-act="close">Done</button></div>`,{wide:!0}),r=(l,u)=>{if(!(u>0))return v("#cp-a",i).focus();let h=Date.now(),p={id:h.toString(36)+Math.random().toString(36).slice(2,6),ts:h,day:ie(),type:l,amount:j(u),method:l==="payment"?v("#cp-m",i).value:null,note:v("#cp-n",i).value.trim(),by:y.u.uid};fe(Jt(ye("customers",n),{balance:Hn(l==="credit"?p.amount:-p.amount),entries:Et(p)})),z(l==="payment"?"Payment recorded":"Utang added"),Te(),setTimeout(()=>op(n),250)};v("#cp-pay",i).onclick=()=>r("payment",parseFloat(v("#cp-a",i).value)),v("#cp-add",i).onclick=()=>r("credit",parseFloat(v("#cp-a",i).value));let o=v("#cp-full",i);o&&(o.onclick=()=>r("payment",t)),v("#ce-save",i).onclick=()=>{let l=v("#ce-n",i).value.trim();l&&(fe(Jt(ye("customers",n),{name:l,phone:v("#ce-p",i).value.trim()})),z("Saved"))};let c=v("#ce-del",i);c&&(c.onclick=()=>It("Remove "+e.name+"?","Their history will be deleted. Past sales stay in the report.","Remove",()=>{fe($i(ye("customers",n))),z("Removed")}))}var zi=null;ue.setup={mount:()=>`<div class="page-head"><div><h1>Store setup</h1><p class="sub">Store details, staff, this computer's printer, and your account.</p></div></div>
    <div class="dgrid"><div class="stack">
      ${Ne()?`<div class="card"><div class="card-h">Store details</div><div class="card-b" style="display:grid;gap:12px">
        <div class="field"><label for="st-n">Store name</label><input class="input" id="st-n"></div>
        <div class="field"><label for="st-l">Location</label><input class="input" id="st-l"></div>
        <div class="field"><label for="st-f">Receipt message</label><input class="input" id="st-f" placeholder="Salamat po! Balik po kayo."></div>
        <div><button class="btn primary" data-act="savestore">Save store details</button></div></div></div>
      <div class="card"><div class="card-h">Staff on duty <span class="muted" style="font-weight:500;font-size:12.5px">photos for switching, no login needed</span></div><div class="card-b" id="st-crew"></div></div>
      <div class="card"><div class="card-h">Staff accounts</div><div class="card-b" style="display:grid;gap:12px">
        <div id="st-staff"></div>
        <div class="grid3" style="grid-template-columns:2fr 1fr auto;align-items:end"><div class="field"><label for="st-iem">Invite by email</label><input class="input" id="st-iem" type="email" placeholder="cashier@gmail.com"></div><div class="field"><label for="st-irole">Role</label><select class="input" id="st-irole"><option value="cashier">Cashier</option><option value="owner">Co-owner</option></select></div><button class="btn primary" data-act="invite">Invite</button></div>
        <div id="st-inv"></div>
        <p class="muted" style="margin:0;font-size:13px">The person installs Tindahan POS, creates an account with that same email, and taps Join. Cashiers can sell, restock, record utang and expenses. Only owners can change prices, delete items, void sales and manage staff.</p></div></div>`:""}
      <div class="card"><div class="card-h">This computer</div><div class="card-b" style="display:grid;gap:12px">
        <div class="field"><label for="st-t">Counter name</label><input class="input" id="st-t" value="${O(y.termName)}"></div>
        <div><button class="btn" data-act="saveterm">Save counter name</button></div></div></div>
    </div><div class="stack">
      <div class="card"><div class="card-h">Receipt printer</div><div class="card-b" style="display:grid;gap:12px">
        <div class="field"><label for="st-pr">Printer</label><select class="input" id="st-pr"><option value="">Ask every time (Windows print window)</option></select></div>
        <div class="field"><span class="lbl">Paper width</span><div class="seg" role="group"><button data-act="paper" data-w="58" aria-pressed="${y.paper!==80}">58 mm</button><button data-act="paper" data-w="80" aria-pressed="${y.paper===80}">80 mm</button></div></div>
        <label class="check"><input type="checkbox" id="st-auto" ${y.autoPrint?"checked":""}> Print a receipt after every sale</label>
        <div class="row"><button class="btn" data-act="testprint">Print test receipt</button></div>
        <p class="muted" style="margin:0;font-size:13px">Pick your thermal printer to print with one tap, no print window. To open the cash drawer on each receipt, turn on \u201Copen drawer\u201D in the printer's Windows driver settings.</p></div></div>
      <div class="card"><div class="card-h">App updates</div><div class="card-b" id="st-upd"></div></div>
      <div class="card"><div class="card-h">Account & sync</div><div class="card-b" id="st-acct"></div></div>
    </div></div>`,async after(){Ne()&&(v("#st-n").value=y.store.name||"",v("#st-l").value=y.store.location||"",v("#st-f").value=y.store.footer||"",zi&&zi(),zi=jc(gn(Vi(Me,"invites"),Ot("storeId","==",y.sid)),e=>{let t=v("#st-inv");t&&(t.innerHTML=e.empty?"":`<div class="eyebrow" style="margin-bottom:4px">Waiting to join</div><div class="list">${e.docs.map(s=>`<div class="li"><div class="grow"><div class="t">${O(s.id)}</div><div class="s">${s.data().role==="owner"?"Co-owner":"Cashier"}</div></div><button class="btn sm danger" data-act="uninvite" data-id="${O(s.id)}">Cancel</button></div>`).join("")}</div>`)},()=>{})),ml(),v("#st-auto").onchange=e=>{y.autoPrint=e.target.checked,ce.set("pos.autoPrint",y.autoPrint)};let n=v("#st-pr");if(n.onchange=()=>{y.printer=n.value,ce.set("pos.printer",y.printer),z(y.printer?"Receipts will print to "+y.printer:"Printing will show the print window")},window.pos&&window.pos.printers)try{let e=await window.pos.printers();n.innerHTML='<option value="">Ask every time (Windows print window)</option>'+e.map(t=>`<option value="${O(t.name)}" ${t.name===y.printer?"selected":""}>${O(t.displayName)}${t.isDefault?" (default)":""}</option>`).join("")}catch{}},update(){$R();let n=v("#st-staff");if(n){let s=y.store.staff||{},i=y.store.roles||{};n.innerHTML=`<div class="list">${Object.keys(i).map(r=>`<div class="li"><div class="grow"><div class="t">${O(s[r]&&s[r].name||"Staff")}${r===y.u.uid?" (you)":""}</div><div class="s">${O(s[r]&&s[r].email||"")}</div></div><span class="tag ${i[r]==="owner"?"cash":""}">${i[r]==="owner"?r===y.store.ownerUid?"Owner":"Co-owner":"Cashier"}</span>${r!==y.store.ownerUid&&r!==y.u.uid?`<button class="btn sm danger" data-act="rmstaff" data-id="${r}">Remove</button>`:""}</div>`).join("")}</div>`}let e=v("#st-acct");if(!e)return;e.innerHTML=`<div class="list">
      <div class="li"><div class="grow t">Signed in as</div><span>${O(So())} \xB7 ${O(y.u.email)}</span></div>
      <div class="li"><div class="grow t">Your role</div><span>${Ne()?"Owner":"Cashier"}</span></div>
      <div class="li"><div class="grow t">Status</div><span id="st-syncc"></span></div>
      <div class="li"><div class="grow t">Sales waiting to upload</div><b class="num">${qi()}</b></div></div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">With no internet, keep selling: sales are saved on this computer and upload by themselves when the connection is back.</p>
      <div class="row" style="margin-top:10px">${Ne()?'<button class="btn" data-act="newstore">Add another store</button>':""}<button class="btn danger" data-act="signout">Sign out</button></div>`;let t=v("#st-syncc");t&&(t.innerHTML=v("#sync").outerHTML.replace('id="sync"',""))}};ue.gcash={mount:()=>(y.gcDay=null,`<div class="page-head"><div><h1>GCash</h1><p class="sub">Cash in and cash out for customers. Fees are counted here, not as sales.</p></div><div class="row"><button class="btn primary" data-act="gcashin">${Re("plus",18)} Cash in</button><button class="btn sun" data-act="gcashout">${Re("plus",18)} Cash out</button></div></div>
    <div class="field" style="max-width:220px;margin-bottom:14px"><label for="gc-day">Date</label><input class="input" type="date" id="gc-day" value="${ie()}" min="${Gi()}" max="${ie()}"></div>
    <div id="gc-body"></div>`),after(){v("#gc-day").addEventListener("change",n=>{y.gcDay=n.target.value||null,ue.gcash.update()})},update(){let n=ie(),e=y.gcDay||n,t=y.shifts.get(e)||{},s=bo(t),i=np(t),r=Qw(e),o=(t.gcashChecks||[]).map(u=>({...u,...sl(u.actual,u.expected)})).sort((u,h)=>h.ts-u.ts),c=o[0],l=0;for(let u=0;u<7;u++)l+=bo(y.shifts.get(_n(n,-u))).fees;v("#gc-body").innerHTML=`<div class="kpis">
      <div class="card kpi hero"><div class="eyebrow">Fees earned</div><div class="v">${x(s.fees)}</div><div class="d">${x(l)} in the last 7 days</div></div>
      <div class="card kpi"><div class="eyebrow">Cash in</div><div class="v">${x(s.ins)}</div><div class="d">${s.inCount} done</div></div>
      <div class="card kpi"><div class="eyebrow">Cash out</div><div class="v">${x(s.outs)}</div><div class="d">${s.outCount} done</div></div>
      <div class="card kpi"><div class="eyebrow">Expected GCash balance</div><div class="v">${r==null?"\u2014":x(r)}</div><div class="d">${c?`<div class="balchk ${c.status}">Checked ${ze(c.ts)}: ${ip(c)}</div>`:""}${e===n?`<div class="row" style="gap:6px;margin-top:6px"><button class="btn sm primary" data-act="gcashbal">Current balance</button><button class="btn sm" data-act="gcashstart">${r==null?"Set start":"Change start"}</button></div>`:r==null?"No starting balance set":"Includes GCash sales"}</div></div>
    </div>
    <div class="card"><div class="card-h">Transactions <span class="muted" style="font-weight:500;font-size:12.5px">${s.cash<0?"\u2212":"+"}${x(Math.abs(s.cash))} to the cash drawer</span></div><div class="card-b" style="padding-top:4px">
      ${i.length?`<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Time</th><th>Type</th><th>Amount</th><th>Fee</th><th>Drawer</th><th>Reference</th><th>Customer</th><th>By</th><th></th></tr></thead><tbody>${i.map(u=>`<tr${u.void?' style="opacity:.55"':""}><td>${ze(u.ts)}</td><td>${u.void?'<span class="tag void">Voided</span>':`<span class="tag gcash">${u.kind==="in"?"Cash in":"Cash out"}</span>`}</td><td class="num">${x(u.amount)}</td><td class="num">${x(u.fee||0)}</td><td class="num">${u.void?"\u2014":(ll(u)<0?"\u2212":"+")+x(Math.abs(ll(u)))}</td><td>${O(u.ref||"")}</td><td>${O(u.note||"")}</td><td>${O(u.byName||"")}</td><td>${Ne()&&!u.void?`<button class="btn sm ghost danger" data-act="gcashvoid" data-id="${O(u.id)}" data-day="${O(e)}">Void</button>`:""}</td></tr>`).join("")}</tbody></table></div>`:`<div class="empty"><b>No GCash transactions${e===n?" yet today":" on this day"}</b></div>`}
    </div></div>`}};function yb(n){n&&n.addEventListener("input",()=>{let e=cl(n.value);e!==n.value&&(n.value=e)})}function jw(n){let e=n==="in",t=Ie(e?"GCash cash in":"GCash cash out",`<p class="muted" style="margin:0">${e?"The customer gives you cash and you send GCash to them.":"The customer sends GCash to you and you give them cash."}</p>
    <div class="field"><label for="gc-a">${e?"Amount you send by GCash (\u20B1)":"Amount you receive by GCash (\u20B1)"}</label><input class="input bigin" id="gc-a" inputmode="decimal" autofocus></div>
    <div class="field"><label for="gc-f">Service fee, kept in cash (\u20B1)</label><input class="input" id="gc-f" inputmode="decimal" placeholder="0"></div>
    <div class="tot"><span class="muted">${e?"Collect from customer":"Give to customer"}</span><b id="gc-due" style="font-size:20px">\u20B10.00</b></div>
    <div class="field"><label for="gc-r">GCash ref no. \u2014 last 4 digits (optional)</label><input class="input" id="gc-r" inputmode="numeric" autocomplete="off" placeholder="e.g. 6213"></div>
    <div class="field"><label for="gc-n">Customer name or number (optional)</label><input class="input" id="gc-n" autocomplete="off"></div>
    <div class="err" id="gc-e" hidden></div>
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="gc-ok">Save</button></div>`),s=()=>j(parseFloat(v("#gc-a",t).value)),i=()=>j(parseFloat(v("#gc-f",t).value)),r=()=>{v("#gc-due",t).textContent=x(e?s()+i():s()-i())},o=(l,u)=>{let h=v("#gc-e",t);h.textContent=l,h.hidden=!1,u.focus()},c=()=>{let l=s(),u=i();if(!(l>0))return o("Type the GCash amount.",v("#gc-a",t));if(u<0||u>l)return o("The fee must be between \u20B10 and the amount.",v("#gc-f",t));if(!ep(v("#gc-r",t).value))return o("Type the last 4 digits of the GCash reference, or leave it blank.",v("#gc-r",t));let h=ie(),p=Date.now(),m={id:p.toString(36)+Math.random().toString(36).slice(2,8),ts:p,kind:n,amount:l,fee:u,ref:cl(v("#gc-r",t).value),note:v("#gc-n",t).value.trim(),by:y.u.uid,byName:At(),termName:y.termName||""};fe(dt(ye("shifts",h),{day:h,gcash:Et(m)},{merge:!0})),Te(),z(e?"Cash in saved":"Cash out saved")};yb(v("#gc-r",t)),v("#gc-a",t).oninput=r,v("#gc-f",t).oninput=r,v("#gc-ok",t).onclick=c,ve("input",t).forEach(l=>{l.onkeydown=u=>{u.key==="Enter"&&c()}})}function ZR(){let n=ie(),e=Qw(n),t=Kw(n),s=Ie("Current GCash balance",`<p class="muted" style="margin:0">Open the store's GCash app and type the balance it shows right now.</p>
    <div class="field"><label for="gb-a">GCash app balance (\u20B1)</label><input class="input bigin" id="gb-a" inputmode="decimal" autofocus></div>
    <div class="tot"><span class="muted">Expected by the POS</span><b style="font-size:18px">${e==null?"\u2014":x(e)}</b></div>
    <div class="note" id="gb-r" hidden></div>
    ${e==null?`<p class="muted" style="margin:0;font-size:13px">No starting balance is set for today. Saving will set it for you, worked out from this balance and today's GCash transactions.</p>`:""}
    <div class="err" id="gb-e" hidden></div>
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="gb-ok">Save</button></div>`),i=v("#gb-a",s),r=v("#gb-r",s),o=v("#gb-e",s);i.oninput=()=>{let l=parseFloat(i.value);if(o.hidden=!0,e==null||isNaN(l)){r.hidden=!0;return}let u=sl(l,e);r.hidden=!1,r.className="note "+(u.status==="match"?"up":"loss"),r.textContent=ip(u)};let c=()=>{let l=parseFloat(i.value),u=j(l);if(isNaN(l)||l<0)return o.textContent="Type the balance shown in the GCash app.",o.hidden=!1,i.focus();let h=Date.now(),p=h.toString(36)+Math.random().toString(36).slice(2,6);if(e==null){let E=j(u-t);if(E<0)return o.textContent=`That's ${x(-E)} less than today's GCash transactions add up to. Check the amount, or set the starting balance yourself.`,o.hidden=!1,i.focus();fe(dt(ye("shifts",n),{day:n,gcashStart:E,gcashChecks:Et({id:p,ts:h,actual:u,expected:u,by:y.u.uid,byName:At()})},{merge:!0})),Te(),z(`Saved. Today's starting balance is ${x(E)}.`);return}let m=sl(u,e);fe(dt(ye("shifts",n),{day:n,gcashChecks:Et({id:p,ts:h,actual:u,expected:e,by:y.u.uid,byName:At()})},{merge:!0})),Te(),z(m.status==="match"?"Matches the expected balance":"Saved: "+ip(m),m.status==="match"?"":"bad")};v("#gb-ok",s).onclick=c,i.onkeydown=l=>{l.key==="Enter"&&c()}}function eC(){let n=ie(),e=y.shifts.get(n)||{},t=Ie("GCash starting balance",`<p class="muted" style="margin:0">The balance in the store's GCash app at the start of today.</p>
    <div class="field"><label for="gs-a">Amount (\u20B1)</label><input class="input bigin" id="gs-a" inputmode="decimal" autofocus value="${e.gcashStart!=null?e.gcashStart:""}"></div>
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="gs-ok">Save</button></div>`),s=()=>{let i=parseFloat(v("#gs-a",t).value),r=j(i);if(isNaN(i)||i<0)return v("#gs-a",t).focus();fe(dt(ye("shifts",n),{day:n,gcashStart:r},{merge:!0})),Te(),z("Saved")};v("#gs-ok",t).onclick=s,v("#gs-a",t).onkeydown=i=>{i.key==="Enter"&&s()}}function Gw(n){let e=ie(),t=y.shifts.get(e)||{},s=Ie(n==="in"?"Cash in (panukli)":"Cash drop",`<p class="muted" style="margin:0">${n==="in"?"Starting cash in the drawer for today, for giving change.":"Cash taken out of the drawer for safekeeping or deposit."}</p>
    <div class="field"><label for="sh-a">Amount (\u20B1)</label><input class="input bigin" id="sh-a" inputmode="decimal" autofocus value="${n==="in"&&t.cashIn?t.cashIn:""}"></div>
    ${n==="drop"?`<div class="field"><label for="sh-n">Note</label><input class="input" id="sh-n" placeholder="e.g. Given to owner"></div>${(t.drops||[]).length?`<div class="list">${t.drops.map(r=>`<div class="li"><div class="grow"><div class="t">${x(r.amount)}</div><div class="s">${ze(r.ts)} ${O(r.note||"")}</div></div></div>`).join("")}</div>`:""}`:""}
    <div class="modal-f"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="sh-ok">Save</button></div>`),i=()=>{let r=j(parseFloat(v("#sh-a",s).value));if(isNaN(r)||r<0)return v("#sh-a",s).focus();let o=n==="in"?{day:e,cashIn:r}:{day:e,drops:Et({ts:Date.now(),amount:r,note:v("#sh-n",s).value.trim(),by:y.u.uid})};fe(dt(ye("shifts",e),o,{merge:!0})),Te(),z("Saved")};v("#sh-ok",s).onclick=i,v("#sh-a",s).onkeydown=r=>{r.key==="Enter"&&i()}}try{y.bestBy=localStorage.getItem("pos.bestBy")||"qty"}catch{y.bestBy="qty"}var tC={buylist:()=>GR(),cloudrefresh:n=>XR(n),receipt:()=>JR(),bestby:n=>{y.bestBy=n.dataset.by;try{localStorage.setItem("pos.bestBy",y.bestBy)}catch{}ue.dashboard.update()},close:()=>Te(),add:n=>hp(n.dataset.id),cat:n=>{y.cat=n.dataset.cat,ob(),hl()},custom:()=>SR(),inc:n=>{y.cart[+n.dataset.i].qty++,wn(),Ft()},dec:n=>{let e=y.cart[+n.dataset.i];e.qty--,e.qty<=0&&y.cart.splice(+n.dataset.i,1),wn(),Ft()},setqty:n=>AR(+n.dataset.i),editweight:n=>{let e=y.cart[+n.dataset.i];ab(y.products.get(e.pid)||{_id:e.pid,name:e.name,price:e.price},+n.dataset.i)},rmline:n=>{y.cart.splice(+n.dataset.i,1),wn(),Ft()},clearcart:()=>{y.cart.length&&It("Clear this sale?","All items in the cart will be removed.","Clear",()=>{y.cart=[],y.discount=0,wn();let n=v("#pos-disc");n&&(n.value=""),Ft()})},checkout:()=>cb(),opencart:()=>v("#cart").classList.add("open"),closecart:()=>v("#cart").classList.remove("open"),viewsale:n=>{let e=Ki($t&&$t.sales).find(t=>t._id===n.dataset.id);e&&ub(e,!1)},newprod:()=>ko(null),switchduty:()=>Uw(),switchassist:()=>{if(!En())return z("Choose the head staff first.","bad");Uw("assist")},dutyout:n=>LR(n.dataset.role),dutytime:n=>hb(n.dataset.role),dutylog:()=>MR(),addcrew:()=>qw(null),editcrew:n=>qw(n.dataset.id),resetstock:()=>NR(),invsort:n=>{let e=n.dataset.k;fb(e,y.inv.sort===e?y.inv.dir==="asc"?"desc":"asc":el[e].dir)},costchanges:()=>gb(30),editprod:n=>ko(n.dataset.id),restock:n=>db(n.dataset.id),starter:()=>{if(!Zt())return;let n=$s(Me);qf.forEach(e=>n.set(ut(mt("products")),{...e,updated:Date.now()})),fe(n.commit()),z("Added 35 common items. Edit their prices to match your store.")},range:n=>{y.report.range=n.dataset.r,ve("[data-act=range]").forEach(e=>e.setAttribute("aria-pressed",e===n)),v("#rp-custom").hidden=y.report.range!=="custom",ue.reports.update()},exportcsv:()=>jR(),addexp:()=>{let n=j(parseFloat(v("#ex-amt").value));if(!(n>0))return v("#ex-amt").focus();fe(dt(ut(mt("expenses")),{day:v("#ex-day").value||ie(),ts:Date.now(),cat:v("#ex-cat").value,desc:v("#ex-desc").value.trim(),amount:n,drawer:v("#ex-drawer").checked,by:y.u.uid})),v("#ex-amt").value="",v("#ex-desc").value="",z("Expense saved")},delexp:n=>{Zt()&&It("Delete this expense?","It will be removed from your reports.","Delete",()=>{fe($i(ye("expenses",n.dataset.id))),z("Deleted")})},newcust:()=>op(null),opencust:n=>op(n.dataset.id),cashin:()=>Gw("in"),cashdrop:()=>Gw("drop"),gcashin:()=>jw("in"),gcashout:()=>jw("out"),gcashstart:()=>eC(),gcashbal:()=>ZR(),gcashvoid:n=>{if(!Zt())return;let{id:e,day:t}=n.dataset;It("Void this GCash transaction?","It stays on the list but is taken out of the totals and the cash drawer. Reverse the transfer in the GCash app yourself if it really happened.","Void",()=>{fe(dt(ye("shifts",t),{day:t,gcashVoid:Et(e)},{merge:!0})),z("Voided")})},savestore:()=>{Zt()&&(fe(Jt(ye(),{name:v("#st-n").value.trim()||"My Store",location:v("#st-l").value.trim(),footer:v("#st-f").value.trim()})),z("Store details saved"))},saveterm:()=>{y.termName=v("#st-t").value.trim()||"Counter 1",ce.set("pos.termName",y.termName),lp(),z("Counter name saved")},paper:n=>{y.paper=+n.dataset.w,ce.set("pos.paper",y.paper),ve("[data-act=paper]").forEach(e=>e.setAttribute("aria-pressed",e===n)),z(`Receipts set to ${y.paper} mm paper`)},testprint:()=>fp({ts:Date.now(),day:ie(),items:[{name:"Test item",unit:"pc",qty:2,price:18},{name:"Bigas (per kilo)",unit:"kg",qty:1.5,price:48}],subtotal:108,discount:0,total:108,pay:"cash",tendered:200,change:92,termName:y.termName,byName:At()}),invite:()=>{if(!Zt())return;let n=v("#st-iem").value.trim().toLowerCase();if(!/^[^@\s/]+@[^@\s/]+\.[^@\s/]+$/.test(n))return z("Type a valid email address.","bad"),v("#st-iem").focus();fe(dt(ut(Me,"invites",n),{storeId:y.sid,storeName:y.store.name||"My Store",role:v("#st-irole").value,invitedBy:y.u.uid,invitedByName:At(),ts:Date.now()})),v("#st-iem").value="",z("Invite saved. Tell them to sign up with "+n+".")},uninvite:n=>{fe($i(ut(Me,"invites",n.dataset.id)))},rmstaff:n=>{if(!Zt())return;let e=n.dataset.id,t=((y.store.staff||{})[e]||{}).name||"this person";It("Remove "+t+"?","They will no longer be able to open this store. Their past sales stay in the reports.","Remove",()=>{fe(Jt(ye(),{memberUids:k_(e),["roles."+e]:fo(),["staff."+e]:fo()})),z("Removed")})},newstore:()=>{Ao(),cp(!1)},updcheck:()=>{window.pos&&window.pos.update&&window.pos.update.check()},updinstall:()=>{if(y.cart.length)return z("Finish or clear the current sale first.","bad");if(qi())return z(`Wait until ${qi()} sale(s) finish uploading, then update.`,"bad");It("Restart to update?","Tindahan POS will close, install the new version, and open again. It takes about a minute.","Restart now",()=>window.pos.update.install(),!1)},signout:()=>It("Sign out?",qi()?`${qi()} sale(s) haven't uploaded yet. Connect to the internet first, or they may be lost.`:"You'll need your email and password to log back in.","Sign out",()=>{Ao(),y.sid=null,ds(Tt)})};document.addEventListener("click",n=>{if(n.target.matches&&n.target.matches("[data-scrim]")){Te();return}let e=n.target.closest&&n.target.closest("[data-act]");if(!e)return;if(St&&!Hw.includes(e.dataset.act)){n.preventDefault(),z("This is the view-only phone version. Make changes on the store's Tindahan POS app.","bad");return}let t=tC[e.dataset.act];t&&(n.preventDefault(),t(e,n))});var qs={buf:"",last:0};document.addEventListener("keydown",n=>{if(!y.sid||rp()||!["sell","inventory"].includes(y.view))return;let e=n.target;if(e&&e.matches&&e.matches("input,textarea,select"))return;let t=performance.now();if(t-qs.last>90&&(qs.buf=""),qs.last=t,n.key==="Enter"||n.key==="Tab"){qs.buf.length>=3&&(n.preventDefault(),sb(qs.buf)),qs.buf="";return}n.key.length===1&&!n.ctrlKey&&!n.metaKey&&!n.altKey&&(qs.buf+=n.key)},!0);document.addEventListener("keydown",n=>{if(n.key==="Escape"&&rp()){Te();return}y.view!=="sell"||rp()||(n.key==="F2"&&(n.preventDefault(),v("#pos-q").focus(),v("#pos-q").select()),n.key==="F9"&&(n.preventDefault(),cb()))});var Pe={state:"idle",current:""};function ml(){let n=Pe.state==="ready",e=v("#updbar");e&&(e.hidden=!n,e.innerHTML=n?`<span>Version ${O(Pe.version)} is ready</span><button class="btn sm primary" data-act="updinstall">Restart to update</button>`:"");let t=v("#side-upd");if(t){let o=window.pos&&window.pos.update&&Pe.state!=="unsupported",c=Pe.state==="checking"||Pe.state==="downloading",l={checking:"Checking\u2026",downloading:`Downloading ${Pe.percent||0}%`,latest:"Up to date",error:"Couldn't check. Try again."}[Pe.state]||"";t.innerHTML=`<span>Version <b>${O(Pe.current||"\u2014")}</b></span>${o&&l?`<span class="upd-note${Pe.state==="latest"?" ok":""}">${l}</span>`:""}${o?n?`<button class="btn sm sun" data-act="updinstall">Restart to update to ${O(Pe.version)}</button>`:`<button class="btn sm side-btn" data-act="updcheck" ${c?"disabled":""}>${Re("refresh",16)} Check for updates</button>`:""}`}let s=v("#st-upd");if(!s)return;if(!window.pos||!window.pos.update||Pe.state==="unsupported"){s.innerHTML='<p class="muted" style="margin:0">Updates work in the installed Tindahan POS app.</p>';return}let i={checking:"Checking for updates\u2026",downloading:`Downloading version ${O(Pe.version)}\u2026 ${Pe.percent||0}%`,ready:`Version ${O(Pe.version)} is ready to install.`,latest:"You have the latest version.",error:"Couldn't check for updates. Check the internet and try again."}[Pe.state]||"",r=Pe.state==="checking"||Pe.state==="downloading";s.innerHTML=`<div class="list"><div class="li"><div class="grow t">Version</div><b class="num">${O(Pe.current)}</b></div></div>
    ${i?`<p class="muted" style="margin:10px 0 0;font-size:13px">${i}</p>`:""}
    <div class="row" style="margin-top:10px">${n?'<button class="btn primary" data-act="updinstall">Restart to update</button>':`<button class="btn" data-act="updcheck" ${r?"disabled":""}>Check for updates</button>`}</div>`}window.pos&&window.pos.update&&(window.pos.update.onState(n=>{Object.assign(Pe,{version:"",percent:0},n),ml()}),Promise.all([window.pos.version(),window.pos.update.state()]).then(([n,e])=>{Pe.current=n,Object.assign(Pe,e),ml()}).catch(()=>{}));setInterval(Zw,15e3);zw?Uu(Tt,n=>{if(!n){Ao(),y.u=null,y.sid=null,y.stores=[],Jw();return}y.signingUp||y.u&&y.u.uid===n.uid&&y.sid||(y.u=n,Gs())}):fR();})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/postinstall.mjs:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/ai/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
