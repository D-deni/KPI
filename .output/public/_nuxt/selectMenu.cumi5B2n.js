import{l as ht,m as yt,y as qe}from"./entry.8VLqy_2K.js";import{aq as bt,k as Xe,F as Oe,a as ke,G as wt,w as xt}from"./swiper-vue.VD2cd0Tn.js";function Ot(e,t){const r={...e};for(const a of t)delete r[a];return r}function kt(e,t,r){typeof t=="string"&&(t=t.split(".").map(n=>{const o=Number(n);return isNaN(o)?n:o}));let a=e;for(const n of t){if(a==null)return r;a=a[n]}return a!==void 0?a:r}const Dr=(e,t,r,a,n=!1)=>{const o=bt(),c=ht(),i=Xe(()=>{var g;const l=Oe(t),f=Oe(r),u=Oe(a);return yt((l==null?void 0:l.strategy)||((g=c.ui)==null?void 0:g.strategy),u?{wrapper:u}:{},l||{},n?kt(c.ui,e,{}):{},f||{})}),s=Xe(()=>Ot(o,["class"]));return{ui:i,attrs:s}};function T(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=T(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=T(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ce(e){if(typeof ShadowRoot>"u")return!1;var t=T(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var G=Math.max,me=Math.min,Q=Math.round;function Ae(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function et(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function Z(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),n=1,o=1;t&&M(e)&&(n=e.offsetWidth>0&&Q(a.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Q(a.height)/e.offsetHeight||1);var c=K(e)?T(e):window,i=c.visualViewport,s=!et()&&r,l=(a.left+(s&&i?i.offsetLeft:0))/n,f=(a.top+(s&&i?i.offsetTop:0))/o,u=a.width/n,g=a.height/o;return{width:u,height:g,top:f,right:l+u,bottom:f+g,left:l,x:l,y:f}}function Pe(e){var t=T(e),r=t.pageXOffset,a=t.pageYOffset;return{scrollLeft:r,scrollTop:a}}function At(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Et(e){return e===T(e)||!M(e)?Pe(e):At(e)}function N(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function De(e){return Z(z(e)).left+Pe(e).scrollLeft}function V(e){return T(e).getComputedStyle(e)}function je(e){var t=V(e),r=t.overflow,a=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+a)}function Ct(e){var t=e.getBoundingClientRect(),r=Q(t.width)/e.offsetWidth||1,a=Q(t.height)/e.offsetHeight||1;return r!==1||a!==1}function Pt(e,t,r){r===void 0&&(r=!1);var a=M(t),n=M(t)&&Ct(t),o=z(t),c=Z(e,n,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(a||!a&&!r)&&((N(t)!=="body"||je(o))&&(i=Et(t)),M(t)?(s=Z(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=De(o))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function $e(e){var t=Z(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function he(e){return N(e)==="html"?e:e.assignedSlot||e.parentNode||(Ce(e)?e.host:null)||z(e)}function tt(e){return["html","body","#document"].indexOf(N(e))>=0?e.ownerDocument.body:M(e)&&je(e)?e:tt(he(e))}function ne(e,t){var r;t===void 0&&(t=[]);var a=tt(e),n=a===((r=e.ownerDocument)==null?void 0:r.body),o=T(a),c=n?[o].concat(o.visualViewport||[],je(a)?a:[]):a,i=t.concat(c);return n?i:i.concat(ne(he(c)))}function Dt(e){return["table","td","th"].indexOf(N(e))>=0}function Ye(e){return!M(e)||V(e).position==="fixed"?null:e.offsetParent}function jt(e){var t=/firefox/i.test(Ae()),r=/Trident/i.test(Ae());if(r&&M(e)){var a=V(e);if(a.position==="fixed")return null}var n=he(e);for(Ce(n)&&(n=n.host);M(n)&&["html","body"].indexOf(N(n))<0;){var o=V(n);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return n;n=n.parentNode}return null}function se(e){for(var t=T(e),r=Ye(e);r&&Dt(r)&&V(r).position==="static";)r=Ye(r);return r&&(N(r)==="html"||N(r)==="body"&&V(r).position==="static")?t:r||jt(e)||t}var $="top",W="bottom",R="right",B="left",Be="auto",fe=[$,W,R,B],_="start",ie="end",$t="clippingParents",rt="viewport",ae="popper",Bt="reference",Ue=fe.reduce(function(e,t){return e.concat([t+"-"+_,t+"-"+ie])},[]),at=[].concat(fe,[Be]).reduce(function(e,t){return e.concat([t,t+"-"+_,t+"-"+ie])},[]),Tt="beforeRead",Mt="read",Lt="afterRead",St="beforeMain",Wt="main",Rt="afterMain",Ht="beforeWrite",Nt="write",Vt="afterWrite",Ft=[Tt,Mt,Lt,St,Wt,Rt,Ht,Nt,Vt];function zt(e){var t=new Map,r=new Set,a=[];e.forEach(function(o){t.set(o.name,o)});function n(o){r.add(o.name);var c=[].concat(o.requires||[],o.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&n(s)}}),a.push(o)}return e.forEach(function(o){r.has(o.name)||n(o)}),a}function It(e){var t=zt(e);return Ft.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}function qt(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Xt(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}function Yt(e,t){var r=T(e),a=z(e),n=r.visualViewport,o=a.clientWidth,c=a.clientHeight,i=0,s=0;if(n){o=n.width,c=n.height;var l=et();(l||!l&&t==="fixed")&&(i=n.offsetLeft,s=n.offsetTop)}return{width:o,height:c,x:i+De(e),y:s}}function Ut(e){var t,r=z(e),a=Pe(e),n=(t=e.ownerDocument)==null?void 0:t.body,o=G(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=G(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),i=-a.scrollLeft+De(e),s=-a.scrollTop;return V(n||r).direction==="rtl"&&(i+=G(r.clientWidth,n?n.clientWidth:0)-o),{width:o,height:c,x:i,y:s}}function nt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ce(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function Ee(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Gt(e,t){var r=Z(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ge(e,t,r){return t===rt?Ee(Yt(e,r)):K(t)?Gt(t,r):Ee(Ut(z(e)))}function Kt(e){var t=ne(he(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,a=r&&M(e)?se(e):e;return K(a)?t.filter(function(n){return K(n)&&nt(n,a)&&N(n)!=="body"}):[]}function Jt(e,t,r,a){var n=t==="clippingParents"?Kt(e):[].concat(t),o=[].concat(n,[r]),c=o[0],i=o.reduce(function(s,l){var f=Ge(e,l,a);return s.top=G(f.top,s.top),s.right=me(f.right,s.right),s.bottom=me(f.bottom,s.bottom),s.left=G(f.left,s.left),s},Ge(e,c,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function H(e){return e.split("-")[0]}function ee(e){return e.split("-")[1]}function Te(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ot(e){var t=e.reference,r=e.element,a=e.placement,n=a?H(a):null,o=a?ee(a):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(n){case $:s={x:c,y:t.y-r.height};break;case W:s={x:c,y:t.y+t.height};break;case R:s={x:t.x+t.width,y:i};break;case B:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var l=n?Te(n):null;if(l!=null){var f=l==="y"?"height":"width";switch(o){case _:s[l]=s[l]-(t[f]/2-r[f]/2);break;case ie:s[l]=s[l]+(t[f]/2-r[f]/2);break}}return s}function it(){return{top:0,right:0,bottom:0,left:0}}function st(e){return Object.assign({},it(),e)}function ft(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}function Me(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=a===void 0?e.placement:a,o=r.strategy,c=o===void 0?e.strategy:o,i=r.boundary,s=i===void 0?$t:i,l=r.rootBoundary,f=l===void 0?rt:l,u=r.elementContext,g=u===void 0?ae:u,p=r.altBoundary,h=p===void 0?!1:p,m=r.padding,v=m===void 0?0:m,y=st(typeof v!="number"?v:ft(v,fe)),x=g===ae?Bt:ae,k=e.rects.popper,d=e.elements[h?x:g],b=Jt(K(d)?d:d.contextElement||z(e.elements.popper),s,f,c),w=Z(e.elements.reference),O=ot({reference:w,element:k,strategy:"absolute",placement:n}),C=Ee(Object.assign({},k,O)),E=g===ae?C:w,A={top:b.top-E.top+y.top,bottom:E.bottom-b.bottom+y.bottom,left:b.left-E.left+y.left,right:E.right-b.right+y.right},P=e.modifiersData.offset;if(g===ae&&P){var L=P[n];Object.keys(A).forEach(function(D){var I=[R,W].indexOf(D)>=0?1:-1,q=[$,W].indexOf(D)>=0?"y":"x";A[D]+=L[q]*I})}return A}var Ke={placement:"bottom",modifiers:[],strategy:"absolute"};function Je(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function Qt(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,a=r===void 0?[]:r,n=t.defaultOptions,o=n===void 0?Ke:n;return function(i,s,l){l===void 0&&(l=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ke,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},u=[],g=!1,p={state:f,setOptions:function(y){var x=typeof y=="function"?y(f.options):y;m(),f.options=Object.assign({},o,f.options,x),f.scrollParents={reference:K(i)?ne(i):i.contextElement?ne(i.contextElement):[],popper:ne(s)};var k=It(Xt([].concat(a,f.options.modifiers)));return f.orderedModifiers=k.filter(function(d){return d.enabled}),h(),p.update()},forceUpdate:function(){if(!g){var y=f.elements,x=y.reference,k=y.popper;if(Je(x,k)){f.rects={reference:Pt(x,se(k),f.options.strategy==="fixed"),popper:$e(k)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var d=0;d<f.orderedModifiers.length;d++){if(f.reset===!0){f.reset=!1,d=-1;continue}var b=f.orderedModifiers[d],w=b.fn,O=b.options,C=O===void 0?{}:O,E=b.name;typeof w=="function"&&(f=w({state:f,options:C,name:E,instance:p})||f)}}}},update:qt(function(){return new Promise(function(v){p.forceUpdate(),v(f)})}),destroy:function(){m(),g=!0}};if(!Je(i,s))return p;p.setOptions(l).then(function(v){!g&&l.onFirstUpdate&&l.onFirstUpdate(v)});function h(){f.orderedModifiers.forEach(function(v){var y=v.name,x=v.options,k=x===void 0?{}:x,d=v.effect;if(typeof d=="function"){var b=d({state:f,name:y,instance:p,options:k}),w=function(){};u.push(b||w)}})}function m(){u.forEach(function(v){return v()}),u=[]}return p}}var ve={passive:!0};function Zt(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,o=n===void 0?!0:n,c=a.resize,i=c===void 0?!0:c,s=T(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&l.forEach(function(f){f.addEventListener("scroll",r.update,ve)}),i&&s.addEventListener("resize",r.update,ve),function(){o&&l.forEach(function(f){f.removeEventListener("scroll",r.update,ve)}),i&&s.removeEventListener("resize",r.update,ve)}}const ct={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Zt,data:{}};function _t(e){var t=e.state,r=e.name;t.modifiersData[r]=ot({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const er={name:"popperOffsets",enabled:!0,phase:"read",fn:_t,data:{}};var tr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function rr(e,t){var r=e.x,a=e.y,n=t.devicePixelRatio||1;return{x:Q(r*n)/n||0,y:Q(a*n)/n||0}}function Qe(e){var t,r=e.popper,a=e.popperRect,n=e.placement,o=e.variation,c=e.offsets,i=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,u=e.isFixed,g=c.x,p=g===void 0?0:g,h=c.y,m=h===void 0?0:h,v=typeof f=="function"?f({x:p,y:m}):{x:p,y:m};p=v.x,m=v.y;var y=c.hasOwnProperty("x"),x=c.hasOwnProperty("y"),k=B,d=$,b=window;if(l){var w=se(r),O="clientHeight",C="clientWidth";if(w===T(r)&&(w=z(r),V(w).position!=="static"&&i==="absolute"&&(O="scrollHeight",C="scrollWidth")),w=w,n===$||(n===B||n===R)&&o===ie){d=W;var E=u&&w===b&&b.visualViewport?b.visualViewport.height:w[O];m-=E-a.height,m*=s?1:-1}if(n===B||(n===$||n===W)&&o===ie){k=R;var A=u&&w===b&&b.visualViewport?b.visualViewport.width:w[C];p-=A-a.width,p*=s?1:-1}}var P=Object.assign({position:i},l&&tr),L=f===!0?rr({x:p,y:m},T(r)):{x:p,y:m};if(p=L.x,m=L.y,s){var D;return Object.assign({},P,(D={},D[d]=x?"0":"",D[k]=y?"0":"",D.transform=(b.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",D))}return Object.assign({},P,(t={},t[d]=x?m+"px":"",t[k]=y?p+"px":"",t.transform="",t))}function ar(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=a===void 0?!0:a,o=r.adaptive,c=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,l={placement:H(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Qe(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qe(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const lt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ar,data:{}};function nr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},o=t.elements[r];!M(o)||!N(o)||(Object.assign(o.style,a),Object.keys(n).forEach(function(c){var i=n[c];i===!1?o.removeAttribute(c):o.setAttribute(c,i===!0?"":i)}))})}function or(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],o=t.attributes[a]||{},c=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]),i=c.reduce(function(s,l){return s[l]="",s},{});!M(n)||!N(n)||(Object.assign(n.style,i),Object.keys(o).forEach(function(s){n.removeAttribute(s)}))})}}const ir={name:"applyStyles",enabled:!0,phase:"write",fn:nr,effect:or,requires:["computeStyles"]};var sr=[ct,er,lt,ir],fr={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,function(t){return fr[t]})}var cr={start:"end",end:"start"};function Ze(e){return e.replace(/start|end/g,function(t){return cr[t]})}function lr(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=r.boundary,o=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,l=s===void 0?at:s,f=ee(a),u=f?i?Ue:Ue.filter(function(h){return ee(h)===f}):fe,g=u.filter(function(h){return l.indexOf(h)>=0});g.length===0&&(g=u);var p=g.reduce(function(h,m){return h[m]=Me(e,{placement:m,boundary:n,rootBoundary:o,padding:c})[H(m)],h},{});return Object.keys(p).sort(function(h,m){return p[h]-p[m]})}function pr(e){if(H(e)===Be)return[];var t=ge(e);return[Ze(e),t,Ze(t)]}function ur(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,o=n===void 0?!0:n,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,l=r.padding,f=r.boundary,u=r.rootBoundary,g=r.altBoundary,p=r.flipVariations,h=p===void 0?!0:p,m=r.allowedAutoPlacements,v=t.options.placement,y=H(v),x=y===v,k=s||(x||!h?[ge(v)]:pr(v)),d=[v].concat(k).reduce(function(J,F){return J.concat(H(F)===Be?lr(t,{placement:F,boundary:f,rootBoundary:u,padding:l,flipVariations:h,allowedAutoPlacements:m}):F)},[]),b=t.rects.reference,w=t.rects.popper,O=new Map,C=!0,E=d[0],A=0;A<d.length;A++){var P=d[A],L=H(P),D=ee(P)===_,I=[$,W].indexOf(L)>=0,q=I?"width":"height",j=Me(t,{placement:P,boundary:f,rootBoundary:u,altBoundary:g,padding:l}),S=I?D?R:B:D?W:$;b[q]>w[q]&&(S=ge(S));var ce=ge(S),X=[];if(o&&X.push(j[L]<=0),i&&X.push(j[S]<=0,j[ce]<=0),X.every(function(J){return J})){E=P,C=!1;break}O.set(P,X)}if(C)for(var le=h?3:1,ye=function(F){var re=d.find(function(ue){var Y=O.get(ue);if(Y)return Y.slice(0,F).every(function(be){return be})});if(re)return E=re,"break"},te=le;te>0;te--){var pe=ye(te);if(pe==="break")break}t.placement!==E&&(t.modifiersData[a]._skip=!0,t.placement=E,t.reset=!0)}}const dr={name:"flip",enabled:!0,phase:"main",fn:ur,requiresIfExists:["offset"],data:{_skip:!1}};function vr(e,t,r){var a=H(e),n=[B,$].indexOf(a)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=o[0],i=o[1];return c=c||0,i=(i||0)*n,[B,R].indexOf(a)>=0?{x:i,y:c}:{x:c,y:i}}function gr(e){var t=e.state,r=e.options,a=e.name,n=r.offset,o=n===void 0?[0,0]:n,c=at.reduce(function(f,u){return f[u]=vr(u,t.rects,o),f},{}),i=c[t.placement],s=i.x,l=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[a]=c}const mr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:gr};function hr(e){return e==="x"?"y":"x"}function oe(e,t,r){return G(e,me(t,r))}function yr(e,t,r){var a=oe(e,t,r);return a>r?r:a}function br(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,o=n===void 0?!0:n,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,l=r.rootBoundary,f=r.altBoundary,u=r.padding,g=r.tether,p=g===void 0?!0:g,h=r.tetherOffset,m=h===void 0?0:h,v=Me(t,{boundary:s,rootBoundary:l,padding:u,altBoundary:f}),y=H(t.placement),x=ee(t.placement),k=!x,d=Te(y),b=hr(d),w=t.modifiersData.popperOffsets,O=t.rects.reference,C=t.rects.popper,E=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,A=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(w){if(o){var D,I=d==="y"?$:B,q=d==="y"?W:R,j=d==="y"?"height":"width",S=w[d],ce=S+v[I],X=S-v[q],le=p?-C[j]/2:0,ye=x===_?O[j]:C[j],te=x===_?-C[j]:-O[j],pe=t.elements.arrow,J=p&&pe?$e(pe):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:it(),re=F[I],ue=F[q],Y=oe(0,O[j],J[j]),be=k?O[j]/2-le-Y-re-A.mainAxis:ye-Y-re-A.mainAxis,pt=k?-O[j]/2+le+Y+ue+A.mainAxis:te+Y+ue+A.mainAxis,we=t.elements.arrow&&se(t.elements.arrow),ut=we?d==="y"?we.clientTop||0:we.clientLeft||0:0,Se=(D=P==null?void 0:P[d])!=null?D:0,dt=S+be-Se-ut,vt=S+pt-Se,We=oe(p?me(ce,dt):ce,S,p?G(X,vt):X);w[d]=We,L[d]=We-S}if(i){var Re,gt=d==="x"?$:B,mt=d==="x"?W:R,U=w[b],de=b==="y"?"height":"width",He=U+v[gt],Ne=U-v[mt],xe=[$,B].indexOf(y)!==-1,Ve=(Re=P==null?void 0:P[b])!=null?Re:0,Fe=xe?He:U-O[de]-C[de]-Ve+A.altAxis,ze=xe?U+O[de]+C[de]-Ve-A.altAxis:Ne,Ie=p&&xe?yr(Fe,U,ze):oe(p?Fe:He,U,p?ze:Ne);w[b]=Ie,L[b]=Ie-U}t.modifiersData[a]=L}}const wr={name:"preventOverflow",enabled:!0,phase:"main",fn:br,requiresIfExists:["offset"]};var xr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,st(typeof t!="number"?t:ft(t,fe))};function Or(e){var t,r=e.state,a=e.name,n=e.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,i=H(r.placement),s=Te(i),l=[B,R].indexOf(i)>=0,f=l?"height":"width";if(!(!o||!c)){var u=xr(n.padding,r),g=$e(o),p=s==="y"?$:B,h=s==="y"?W:R,m=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],v=c[s]-r.rects.reference[s],y=se(o),x=y?s==="y"?y.clientHeight||0:y.clientWidth||0:0,k=m/2-v/2,d=u[p],b=x-g[f]-u[h],w=x/2-g[f]/2+k,O=oe(d,w,b),C=s;r.modifiersData[a]=(t={},t[C]=O,t.centerOffset=O-w,t)}}function kr(e){var t=e.state,r=e.options,a=r.element,n=a===void 0?"[data-popper-arrow]":a;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||nt(t.elements.popper,n)&&(t.elements.arrow=n))}const Ar={name:"arrow",enabled:!0,phase:"main",fn:Or,effect:kr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Er=Qt({defaultModifiers:[...sr,mr,dr,wr,lt,ct,Ar]});function jr({locked:e=!1,overflowPadding:t=8,offsetDistance:r=8,offsetSkid:a=0,gpuAcceleration:n=!0,adaptive:o=!0,scroll:c=!0,resize:i=!0,arrow:s=!1,placement:l,strategy:f},u){const g=ke(null),p=ke(null),h=ke(null);return wt(()=>{xt(m=>{if(!p.value||!g.value&&!(u!=null&&u.value))return;const v=qe(p),y=(u==null?void 0:u.value)||qe(g);if(!(v instanceof HTMLElement)||!y)return;const x={modifiers:[{name:"flip",enabled:!e},{name:"preventOverflow",options:{padding:t}},{name:"offset",options:{offset:[a,r]}},{name:"computeStyles",options:{adaptive:o,gpuAcceleration:n}},{name:"eventListeners",options:{scroll:c,resize:i}},{name:"arrow",enabled:s}]};l&&(x.placement=l),f&&(x.strategy=f),h.value=Er(y,v,x),m(h.value.destroy)})}),[g,p,h]}const Le={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"};({...Le});const _e={container:"z-20 group",trigger:"inline-flex w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-2 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-2 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-4 w-4",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-4 w-4 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"3xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...Le,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},$r={..._e,select:"inline-flex items-center text-left cursor-default",input:"block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",required:"absolute inset-0 w-px opacity-0 cursor-default",label:"block truncate",option:{..._e.option,create:"block truncate"},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",clearSearchOnClose:!1,showCreateOptionWhen:"empty"},arrow:{...Le,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};export{jr as a,Le as b,kt as g,$r as s,Dr as u};
