const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["index-CuNhcCTd.js","strapi-CVepdBkN.js","strapi-DU8PNWtk.css","index-BWTkIleH.js","index-ZaibqjYy.css"])))=>i.map(i=>d[i]);
import{r as d,bV as p,j as W,_ as N}from"./strapi-CVepdBkN.js";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function U(){const t={resolve:null,promise:null};return t.promise=new Promise(e=>{t.resolve=e}),t}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function z(t,{timeOutAfter:e=500,retryAfter:n=100}={}){return new Promise((r,o)=>{const a=Date.now();let s=null;const i=setTimeout(()=>{o(s??new Error("Timeout"))},e),c=async()=>{try{const u=await t();clearTimeout(i),r(u)}catch(u){s=u,Date.now()-a>e?o(u):setTimeout(c,n)}};c()})}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const g=new Map;function S(t,{attributes:e}={}){if(g.has(t))return g.get(t);const n=document.querySelector(`script[src="${t}"]`);n&&(console.warn(`Script with "${t}" src is already present in DOM!`),n.remove());const r=new Promise((o,a)=>{const s=document.createElement("script");s.onerror=a,s.onload=()=>{o()};for(const[c,u]of Object.entries(e||{}))s.setAttribute(c,u);s.setAttribute("data-injected-by","ckeditor-integration"),s.type="text/javascript",s.async=!0,s.src=t,document.head.appendChild(s);const i=new MutationObserver(c=>{c.flatMap(h=>Array.from(h.removedNodes)).includes(s)&&(g.delete(t),i.disconnect())});i.observe(document.head,{childList:!0,subtree:!0})});return g.set(t,r),r}async function I(t,e){await Promise.all(t.map(n=>S(n,e)))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const y=new Map;function F({href:t,placementInHead:e="start",attributes:n={}}){if(y.has(t))return y.get(t);const r=document.querySelector(`link[href="${t}"][rel="stylesheet"]`);r&&(console.warn(`Stylesheet with "${t}" href is already present in DOM!`),r.remove());const o=s=>{const i=Array.from(document.head.querySelectorAll('link[data-injected-by="ckeditor-integration"]'));switch(e){case"start":i.length?i.slice(-1)[0].after(s):document.head.insertBefore(s,document.head.firstChild);break;case"end":document.head.appendChild(s);break}},a=new Promise((s,i)=>{const c=document.createElement("link");for(const[h,m]of Object.entries(n||{}))c.setAttribute(h,m);c.setAttribute("data-injected-by","ckeditor-integration"),c.rel="stylesheet",c.href=t,c.onerror=i,c.onload=()=>{s()},o(c);const u=new MutationObserver(h=>{h.flatMap(B=>Array.from(B.removedNodes)).includes(c)&&(y.delete(t),u.disconnect())});u.observe(document.head,{childList:!0,subtree:!0})});return y.set(t,a),a}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function q(){return typeof window>"u"}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function H(t){let e=null;return(...n)=>(e||(e={current:t(...n)}),e.current)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function G(t,{attributes:e}={}){if(document.head.querySelector(`link[href="${t}"][rel="preload"]`))return;const n=document.createElement("link");for(const[r,o]of Object.entries(e||{}))n.setAttribute(r,o);n.setAttribute("data-injected-by","ckeditor-integration"),n.rel="preload",n.as=J(t),n.href=t,document.head.insertBefore(n,document.head.firstChild)}function J(t){switch(!0){case/\.css$/.test(t):return"style";case/\.js$/.test(t):return"script";default:return"fetch"}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Y(t,e){if(t===e)return!0;if(!t||!e)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const l=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2));function P(){const[t,e,n,r]=crypto.getRandomValues(new Uint32Array(4));return"e"+l[t>>0&255]+l[t>>8&255]+l[t>>16&255]+l[t>>24&255]+l[e>>0&255]+l[e>>8&255]+l[e>>16&255]+l[e>>24&255]+l[n>>0&255]+l[n>>8&255]+l[n>>16&255]+l[n>>24&255]+l[r>>0&255]+l[r>>8&255]+l[r>>16&255]+l[r>>24&255]}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function _(t){return Array.from(new Set(t))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */async function E(t,e){const n=()=>t.map(r=>window[r]).filter(Boolean)[0];return z(()=>{const r=n();if(!r)throw new Error(`Window entry "${t.join(",")}" not found.`);return r},e)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function X(t,e){const n=Object.entries(t).filter(([r,o])=>e(o,r));return Object.fromEntries(n)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Q(t){return X(t,e=>e!=null)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function K(t,e){const n=Object.entries(t).map(([r,o])=>[r,e(o,r)]);return Object.fromEntries(n)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function w(t,e){return e.filter(n=>!t.includes(n))}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Z(t,e){const n=t.extraPlugins||[];return{...t,extraPlugins:[...n,...e.filter(r=>!n.includes(r))]}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function k(t){return!!t&&/^\d+\.\d+\.\d+/.test(t)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function C(t){return t?["nightly","alpha","internal","nightly-","staging"].some(e=>t.includes(e)):!1}function ee(t){return k(t)||C(t)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function x(t){if(!k(t))throw new Error(`Invalid semantic version: ${t||"<blank>"}.`);const[e,n,r]=t.split(".");return{major:Number.parseInt(e,10),minor:Number.parseInt(n,10),patch:Number.parseInt(r,10)}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function j(t){if(C(t))return 3;const{major:e}=x(t);switch(!0){case e>=44:return 3;case e>=38:return 2;default:return 1}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function D(){const{CKEDITOR_VERSION:t,CKEDITOR:e}=window;return ee(t)?{source:e?"cdn":"npm",version:t}:null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function te(){const t=D();return t?j(t.version):null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function O(t,e){switch(e||=te()||void 0,e){case 1:case 2:return t===void 0;case 3:return t==="GPL";default:return!1}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ne(t,e){return function(r){O(r.config.get("licenseKey"))||r.on("collectUsageData",(o,{setUsageData:a})=>{a(`integration.${t}`,e)})}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const re="https://cdn.ckeditor.com";function T(t,e,n){return`${re}/${t}/${n}/${e}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const oe="https://cdn.ckbox.io";function se(t,e,n){return`${oe}/${t}/${n}/${e}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const ie="https://ckeditor.com/docs/ckeditor5";function ae(t,e="latest"){return`${ie}/${e}/${t}`}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ce({version:t,translations:e,createCustomCdnUrl:n=T}){const r={scripts:[n("ckeditor5","ckeditor5.umd.js",t),...w(["en"],e||[]).map(o=>n("ckeditor5",`translations/${o}.umd.js`,t))],stylesheets:[n("ckeditor5","ckeditor5.css",t)]};return{preload:[...r.stylesheets,...r.scripts],scripts:[async o=>I(r.scripts,o)],stylesheets:r.stylesheets,checkPluginLoaded:async()=>E(["CKEDITOR"]),beforeInject:()=>{const o=D();switch(o?.source){case"npm":throw new Error("CKEditor 5 is already loaded from npm. Check the migration guide for more details: "+ae("updating/migration-to-cdn/vanilla-js.html"));case"cdn":if(o.version!==t)throw new Error(`CKEditor 5 is already loaded from CDN in version ${o.version}. Remove the old <script> and <link> tags loading CKEditor 5 to allow loading the ${t} version.`);break}}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function ue({version:t,translations:e,createCustomCdnUrl:n=T}){const r={scripts:[n("ckeditor5-premium-features","ckeditor5-premium-features.umd.js",t),...w(["en"],e||[]).map(o=>n("ckeditor5-premium-features",`translations/${o}.umd.js`,t))],stylesheets:[n("ckeditor5-premium-features","ckeditor5-premium-features.css",t)]};return{preload:[...r.stylesheets,...r.scripts],scripts:[async o=>I(r.scripts,o)],stylesheets:r.stylesheets,checkPluginLoaded:async()=>E(["CKEDITOR_PREMIUM_FEATURES"])}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */async function le(t){let{htmlAttributes:e={},scripts:n=[],stylesheets:r=[],preload:o,beforeInject:a,checkPluginLoaded:s}=v(t);a?.(),o||(o=_([...r.filter(i=>typeof i=="string"),...n.filter(i=>typeof i=="string")]));for(const i of o)G(i,{attributes:e});await Promise.all(_(r).map(i=>F({href:i,attributes:e,placementInHead:"start"})));for(const i of _(n)){const c={attributes:e};typeof i=="string"?await S(i,c):await i(c)}return s?.()}function v(t){return Array.isArray(t)?{scripts:t.filter(e=>typeof e=="function"||e.endsWith(".js")),stylesheets:t.filter(e=>e.endsWith(".css"))}:typeof t=="function"?{checkPluginLoaded:t}:t}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function L(t){const e=K(Q(t),v);return{...Object.values(e).reduce((a,s)=>(a.scripts.push(...s.scripts??[]),a.stylesheets.push(...s.stylesheets??[]),a.preload.push(...s.preload??[]),a),{preload:[],scripts:[],stylesheets:[]}),beforeInject:()=>{for(const a of Object.values(e))a.beforeInject?.()},checkPluginLoaded:async()=>{const a=Object.create(null);for(const[s,i]of Object.entries(e))a[s]=await i?.checkPluginLoaded?.();return a}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function de(){const t=window.CKBox?.version;return k(t)?{source:"cdn",version:t}:null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function fe({version:t,theme:e="lark",translations:n,createCustomCdnUrl:r=se}){return{scripts:[r("ckbox","ckbox.js",t),...w(["en"],n||[]).map(o=>r("ckbox",`translations/${o}.js`,t))],...e&&{stylesheets:[r("ckbox",`styles/themes/${e}.css`,t)]},checkPluginLoaded:async()=>E(["CKBox"]),beforeInject:()=>{const o=de();if(o&&o.version!==t)throw new Error(`CKBox is already loaded from CDN in version ${o.version}. Remove the old <script> and <link> tags loading CKBox to allow loading the ${t} version.`)}}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function he(t){if(C(t))return!0;const{major:e}=x(t);switch(j(t)){case 3:return!0;default:return e===43}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function pe(t){const e=K(t,(n,r)=>{if(!n)return;const o=v(n);return{checkPluginLoaded:async()=>E([r]),...o}});return L(e)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function me(t){const{version:e,translations:n,plugins:r,premium:o,ckbox:a,createCustomCdnUrl:s,injectedHtmlElementsAttributes:i={crossorigin:"anonymous"}}=t;ge(e);const c=L({CKEditor:ce({version:e,translations:n,createCustomCdnUrl:s}),...o&&{CKEditorPremiumFeatures:ue({version:e,translations:n,createCustomCdnUrl:s})},...a&&{CKBox:fe(a)},loadedPlugins:pe(r??{})});return le({...c,htmlAttributes:i})}function ge(t){if(C(t)&&console.warn("You are using a testing version of CKEditor 5. Please remember that it is not suitable for production environments."),!he(t))throw new Error(`The CKEditor 5 CDN can't be used with the given editor version: ${t}. Please make sure you are using at least the CKEditor 5 version 44.`)}var ye=Object.defineProperty,Ee=(t,e,n)=>e in t?ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e,n)=>Ee(t,typeof e!="symbol"?e+"":e,n);/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const A=class M{constructor(e,n){f(this,"_lifecycle"),f(this,"_element"),f(this,"_releaseLock",null),f(this,"_value",null),f(this,"_afterMountCallbacks",[]),f(this,"_state",{destroyedBeforeInitialization:!1,mountingInProgress:null}),f(this,"release",H(()=>{const{_releaseLock:r,_state:o,_element:a,_lifecycle:s}=this;o.mountingInProgress?o.mountingInProgress.then(()=>s.unmount({element:a,mountResult:this.value})).catch(i=>{console.error("Semaphore unmounting error:",i)}).then(r.resolve).then(()=>{this._value=null}):(o.destroyedBeforeInitialization=!0,r.resolve())})),this._element=e,this._lifecycle=n,this._lock()}get value(){return this._value}unsafeSetValue(e){this._value=e,this._afterMountCallbacks.forEach(n=>n(e)),this._afterMountCallbacks=[]}runAfterMount(e){const{_value:n,_afterMountCallbacks:r}=this;n?e(n):r.push(e)}_lock(){const{_semaphores:e}=M,{_state:n,_element:r,_lifecycle:o}=this,a=e.get(r)||Promise.resolve(null),s=U();this._releaseLock=s;const i=a.then(()=>n.destroyedBeforeInitialization?Promise.resolve(void 0):(n.mountingInProgress=o.mount().then(c=>(c&&this.unsafeSetValue(c),c)),n.mountingInProgress)).then(async c=>{c&&o.afterMount&&await o.afterMount({element:r,mountResult:c})}).then(()=>s.promise).catch(c=>{console.error("Semaphore mounting error:",c)}).then(()=>{e.get(r)===i&&e.delete(r)});e.set(r,i)}};f(A,"_semaphores",new Map);let Ce=A;/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const _e="$__CKEditorReactContextMetadata";function be(t,e){return{...e,[_e]:t}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const we=t=>{const e=d.useRef();return e.current=t,d.useCallback((...n)=>e.current(...n),[])};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const ke=p.createContext(null),ve=t=>!!t&&typeof t=="object"&&"status"in t&&["initializing","initialized","error"].includes(t.status),V=t=>e=>ve(e)&&e.status===t,R=V("initializing"),Re=t=>V("initialized")(t)&&t.watchdog.state==="ready";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Se=ne("react",{version:"9.5.0",frameworkVersion:p.version});/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Ie(t){return O(t.licenseKey)?t:Z(t,[Se])}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const b="Lock from React integration (@ckeditor/ckeditor5-react)";class Pe extends p.Component{constructor(e){super(e),f(this,"domContainer",p.createRef()),f(this,"editorSemaphore",null),this._checkVersion()}_checkVersion(){const{CKEDITOR_VERSION:e}=window;if(!e)return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');const[n]=e.split(".").map(Number);n>=42||e.startsWith("0.0.0")||console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.")}get _semaphoreValue(){const{editorSemaphore:e}=this;return e?e.value:null}get watchdog(){const{_semaphoreValue:e}=this;return e?e.watchdog:null}get editor(){const{_semaphoreValue:e}=this;return e?e.instance:null}shouldComponentUpdate(e){const{props:n,editorSemaphore:r}=this;return e.id!==n.id||e.disableWatchdog!==n.disableWatchdog?!0:(r&&(r.runAfterMount(({instance:o})=>{this._shouldUpdateEditorData(n,e,o)&&o.data.set(e.data)}),"disabled"in e&&r.runAfterMount(({instance:o})=>{e.disabled?o.enableReadOnlyMode(b):o.disableReadOnlyMode(b)})),!1)}componentDidMount(){R(this.context)||this._initLifeCycleSemaphore()}componentDidUpdate(){R(this.context)||this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new Ce(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:e})=>{const{onReady:n}=this.props;n&&this.domContainer.current!==null&&n(e.instance)},unmount:async({element:e,mountResult:n})=>{const{onAfterDestroy:r}=this.props;try{await this._destroyEditor(n),e.innerHTML=""}finally{r&&r(n.instance)}}})}render(){return p.createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const e=Re(this.context)?new Ke(this.context.watchdog):new this.props.editor.EditorWatchdog(this.props.editor,this.props.watchdogConfig),n={current:0};return e.setCreator(async(r,o)=>{var a;const{editorSemaphore:s}=this,{onAfterDestroy:i}=this.props;n.current>0&&i&&((a=s?.value)!=null&&a.instance)&&i(s.value.instance);const c=await this._createEditor(r,o);return s&&n.current>0&&(s.unsafeSetValue({instance:c,watchdog:e}),setTimeout(()=>{this.props.onReady&&this.props.onReady(e.editor)})),n.current++,c}),e.on("error",(r,{error:o,causesRestart:a})=>{(this.props.onError||console.error)(o,{phase:"runtime",willEditorRestart:a})}),await e.create(this.domContainer.current,this._getConfig()).catch(r=>{(this.props.onError||console.error)(r,{phase:"initialization",willEditorRestart:!1})}),{watchdog:e,instance:e.editor}}_createEditor(e,n){const{contextItemMetadata:r}=this.props;return r&&(n=be(r,n)),this.props.editor.create(e,Ie(n)).then(o=>{if("disabled"in this.props){/* istanbul ignore else -- @preserve */this.props.disabled&&o.enableReadOnlyMode(b)}const a=o.model.document,s=o.editing.view.document;return a.on("change:data",i=>{/* istanbul ignore else -- @preserve */this.props.onChange&&this.props.onChange(i,o)}),s.on("focus",i=>{/* istanbul ignore else -- @preserve */this.props.onFocus&&this.props.onFocus(i,o)}),s.on("blur",i=>{/* istanbul ignore else -- @preserve */this.props.onBlur&&this.props.onBlur(i,o)}),o})}async _destroyEditor(e){const{watchdog:n,instance:r}=e;return new Promise((o,a)=>{/* istanbul ignore next -- @preserve */setTimeout(async()=>{try{if(n)return await n.destroy(),o();if(r)return await r.destroy(),o();o()}catch(s){console.error(s),a(s)}})})}_shouldUpdateEditorData(e,n,r){return!(e.data===n.data||r.data.get()===n.data)}_getConfig(){const e=this.props.config||{};return this.props.data&&e.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...e,initialData:e.initialData||this.props.data||""}}}f(Pe,"contextType",ke);class Ke{constructor(e){f(this,"_contextWatchdog"),f(this,"_id"),f(this,"_creator"),this._contextWatchdog=e,this._id=P()}setCreator(e){this._creator=e}create(e,n){return this._contextWatchdog.add({sourceElementOrData:e,config:n,creator:this._creator,id:this._id,type:"editor"})}on(e,n){this._contextWatchdog.on("itemError",(r,{itemId:o,error:a})=>{o===this._id&&n(null,{error:a,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function $(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const xe=(t,e)=>{const[n,r]=d.useState(null);Y(n,e)||(t(),r([...e]))},je=d.memo(d.forwardRef(({id:t,semaphore:e,rootName:n},r)=>{const o=d.useRef(null);return d.useEffect(()=>{let a,s;return e.runAfterMount(({instance:i})=>{if(!o.current)return;s=i;const{ui:c,model:u}=s,h=u.document.getRoot(n);h&&s.ui.getEditableElement(n)&&s.detachEditable(h),a=c.view.createEditable(n,o.current),c.addEditable(a),i.editing.view.forceRender()}),()=>{if(s&&s.state!=="destroyed"&&o.current){const i=s.model.document.getRoot(n);/* istanbul ignore else -- @preserve */i&&s.detachEditable(i)}}},[e.revision]),p.createElement("div",{key:e.revision,id:t,ref:$(r,o)})}));je.displayName="EditorEditable";const De=d.forwardRef(({editor:t},e)=>{const n=d.useRef(null);return d.useEffect(()=>{const r=n.current;if(!t||!r)return;const o=t.ui.view.toolbar.element;return r.appendChild(o),()=>{r.contains(o)&&r.removeChild(o)}},[t&&t.id]),p.createElement("div",{ref:$(n,e)})});De.displayName="EditorToolbarWrapper";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Oe=()=>{const t=d.useRef(!1);return d.useEffect(()=>(t.current=!1,()=>{t.current=!0}),[]),t};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Te=t=>{const[e,n]=d.useState({status:"idle"}),r=Oe(),o=d.useRef(null);return[we(async(...s)=>{if(r.current||q())return null;const i=P();o.current=i;try{e.status!=="loading"&&n({status:"loading"});const c=await t(...s);return!r.current&&o.current===i&&n({status:"success",data:c}),c}catch(c){console.error(c),!r.current&&o.current===i&&n({status:"error",error:c})}return null}),e]};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const Le=(t,e)=>{const[n,r]=Te(t);return xe(n,e),r.status==="idle"?{status:"loading"}:r};/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function Ae(t){const e=JSON.stringify(t),n=Le(async()=>me(t),[e]);return n.status==="success"?{...n.data,status:"success"}:n}const Me=({attribute:t,name:e,disabled:n=!1,labelAction:r=null,required:o=!1,description:a=null,error:s=null,intlLabel:i})=>{d.useEffect(()=>()=>{const u=document.querySelectorAll('[data-injected-by="ckeditor-integration"]');document.querySelectorAll(".ck-editor__editable_inline ").length||u.forEach(m=>m.remove()),window.CKEDITOR_VERSION=null},[]);const c=Ae({version:"44.0.0",plugins:{CKEditorInput:async()=>(await N(async()=>{const{CKEditorInput:u}=await import("./index-CuNhcCTd.js");return{CKEditorInput:u}},__vite__mapDeps([0,1,2,3,4]))).CKEditorInput}});return c.status!=="success"?null:W.jsx(c.loadedPlugins.CKEditorInput,{attribute:t,name:e,disabled:n,labelAction:r,required:o,description:a,error:s,intlLabel:i})},Ve=d.memo(Me),Be=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Pe as C,ne as c,Be as i};
