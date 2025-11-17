import{d as a,u as R,a as W,r as g,j as n,C as J,b as Y,S as ae,F as ce,L as de,c as he,i as pe,e as $,g as q,h as G,o as ue,k as fe,l as ge,m as xe,O as me}from"./index-u2F3QM71.js";import{I as ee,P as ve}from"./pagination-fblk8IDK.js";const be=a.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 260px;
    height: 48px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`,we=a.input.attrs({type:"text"})`
  width: 100%;
  height: 42px;
  padding: 0 12px 0 12px;
  border-radius: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(38, 38, 38, 1);

  &::placeholder {
    color: rgba(38, 38, 38, 1);
    font-size: 14px;
  }

  &:focus {
    border: 1px solid rgba(246, 184, 61, 1);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
    height: 48px;

    font-size: 16px;
    line-height: 20px;
    padding: 14px;

    &::placeholder {
      font-size: 16px;
      line-height: 20px;
    }
  }
`,ye=a.div`
  position: absolute;
  top: 55%;
  right: 0;
  transform: translateY(-45%);
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    right: 14px;
    margin-right: 0;
  }
`,Se=()=>{const t=R(),i=W(s=>s.noticesFilter),[r,e]=g.useState(i),o=()=>{e(""),t(Y(""))},l=s=>{e(s.target.value)},c=s=>{(s.key==="Escape"||s.key==="Enter")&&t(Y(r.trim()))};return n.jsx(n.Fragment,{children:n.jsxs(be,{children:[n.jsx(we,{type:"text",name:"search",placeholder:"Search",value:r,onChange:l,onKeyDown:c}),n.jsx(ye,{children:r.length>0?n.jsx("button",{type:"reset","aria-label":"reset",onClick:o,children:n.jsx(J,{})}):n.jsx("button",{type:"button","aria-hidden":!0,tabIndex:-1,children:n.jsx(ee,{})})})]})})},V=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M4.5 6.75L9 11.25L13.5 6.75",stroke:"#262626",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Ee=a.div`
  width: 100%;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    margin-left: 8px;
  }
`,ke=a.div`
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding: 12px;

  @media screen and (min-width: 768px) {
    height: 48px;
    padding: 14px;
  }
`,Ce=a.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: rgba(38, 38, 38, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,Oe=a.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: inherit;
  transition: transform 0.5s ease;

  svg {
    transform: rotate(${t=>t.$showMenu?"180deg":"0deg"});
    transition: transform 0.5s ease;
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 14px;
  }
`,je=a.div`
  position: relative;
  z-index: 9999;
`,ze=a.ul`
  position: absolute;
  top: calc(100% + 20px); /* сразу под селектором */
  left: 50%;
  transform: translateX(-50%); /* центрируем по горизонтали */
  width: 100%;
  height: auto;
  border-radius: 15px;
  padding: 12px;

  background-color: rgba(255, 255, 255, 1);

  li {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 0.6);
    transition: color 0.5s ease;
    cursor: pointer;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  li:hover,
  li:focus,
  li:active {
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    li {
      font-size: 16px;
      line-height: 20px;
    }
  }
`,Le=({selectedCategory:t,setSelectedCategory:i})=>{const[r,e]=g.useState(!1),o=["Show All","Sell","Free","Lost","Found"],l=()=>{e(s=>!s)},c=s=>{i(s),e(!1)};return n.jsx(n.Fragment,{children:n.jsx(Ee,{children:n.jsxs(ke,{children:[n.jsx(Ce,{children:t||"Category"}),n.jsx(Oe,{type:"button",onClick:l,$showMenu:r,children:n.jsx(V,{})}),r&&n.jsx(je,{children:n.jsx(ze,{children:o.map(s=>n.jsx("li",{onClick:()=>c(s),children:s},s))})})]})})})},We=a.ul`
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    row-gap: 40px;
  }
`,Ne=a.li`
position: relative;
  width: 335px;
  min-height: 500px;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  box-sizing: border-box;

  &:last-child {
    matgin-bottom: 0;
  }

  background-color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`,Ae=a.div`
margin-bottom: 24px;

img{
display: block;
width: 100%;
height: 180px;
border-radius: 16px;
}
`,Me=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: rgba(43, 43, 42, 1);
  }
`,Te=a.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: rgba(43, 43, 42, 1);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }


`,Fe=a.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(43, 43, 42, 1);
    margin-left: 2px;
  }
`,Pe=a.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;

  max-width: 280px;

  span {
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: rgba(38, 38, 38, 0.5);
    margin-bottom: 7px;
  }
  h3 {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(38, 38, 38, 1);
  }
`,De=a.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: rgba(43, 43, 42, 1);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 42px;
  }
`,$e=a.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  svg{
  width: 14px;
  height: 14px;
  }
`,Re=a.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);
`,Be=a.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    bottom: 32px;
  }
`,_e=({filteredPets:t})=>n.jsx(n.Fragment,{children:n.jsx(We,{children:t.length>0?t.map(i=>n.jsxs(Ne,{children:[n.jsx(Ae,{children:n.jsx("img",{src:i.image,alt:"photo of pet"})}),n.jsxs(Me,{children:[n.jsx(Te,{children:i.title}),n.jsxs(Fe,{children:[n.jsx(ae,{}),n.jsx("p",{children:i.rating})]})]}),n.jsxs(Pe,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"Name"}),n.jsx("h3",{children:i.name})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Birthday"}),n.jsx("h3",{children:i.birthday})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Sex"}),n.jsx("h3",{children:i.sex})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Species"}),n.jsx("h3",{children:i.species})]}),n.jsxs("div",{children:[n.jsx("span",{children:"Category"}),n.jsx("h3",{children:i.category})]})]}),n.jsx(De,{children:i.desc}),n.jsxs($e,{children:[n.jsx(ce,{}),n.jsx(Re,{children:i.price})]}),n.jsx(Be,{children:n.jsx(de,{pet:i})})]},i.uid)):n.jsx("h2",{children:"Нічого не знайдено"})})}),Ie=a.div`
  width: 375px;
  padding: 60px 20px 80px 20px;
  box-sizing: border-box;
  background-color: rgba(249, 249, 249, 1);

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 44px 32px 80px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 80px 64px 80px 64px;
    
  }
`,Ve=a.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;

  color: rgba(38, 38, 38, 1);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    line-height: 54px;
  }
`,He=a.div`
  position: relative;
  border-radius: 30px;
  background-color: rgba(255, 244, 223, 1);
  padding: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px;
  }
`,Xe=a.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    margin-bottom: 20px;
  }
`,Ye=a.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    width: 370px;
    position: absolute;
    top: 40px;
    right: 32px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    position: inherit;
    margin-left: 8px;
  }
`,qe=a.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 16px;
      margin-bottom: 0;
  }
`,Ge=a.div`
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    width: 100%;
    background-color: #2626261a;
    border: 1px solid #2626261a;
  }
`,Ue=a.div`
 width: 100%;
margin: right: 8px;
`,Ke=a.div`
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding: 12px;

  @media screen and (min-width: 768px) {
  padding: 14px;
    height: 48px;
  }
`,Qe=a.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: rgba(38, 38, 38, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,Ze=a.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: inherit;
  transition: transform 0.5s ease;

  svg {
    transform: rotate(
      ${t=>t.$showMenuGender?"180deg":"0deg"}
    );
    transition: transform 0.5s ease;
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 14px;
  }

`,Je=a.div`
  position: relative;
  z-index: 9999;
`,et=a.ul`
  position: absolute;
  top: calc(100% + 20px); /* сразу под селектором */
  left: 50%;
  transform: translateX(-50%); /* центрируем по горизонтали */
  width: 100%;
  height: auto;
  border-radius: 15px;
  padding: 12px;

  background-color: rgba(255, 255, 255, 1);

  li {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 0.6);
    transition: color 0.5s ease;
    cursor: pointer;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  li:hover,
  li:focus,
  li:active {
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    li {
      font-size: 16px;
      line-height: 20px;
    }
  }
`,tt=({selectedGender:t,setSelectedGender:i})=>{const[r,e]=g.useState(!1),o=()=>{e(s=>!s)},l=["Show All","Unknown","Female","Male","Multiple"],c=s=>{i(s),e(!1)};return n.jsx(n.Fragment,{children:n.jsx(Ue,{children:n.jsxs(Ke,{children:[n.jsx(Qe,{children:t||"By gender"}),n.jsx(Ze,{type:"button",onClick:o,$showMenuGender:r,children:n.jsx(V,{})}),r&&n.jsx(Je,{children:n.jsx(et,{children:l&&l.map(s=>n.jsx("li",{onClick:()=>c(s),children:s},s))})})]})})})};var _=function(){return he.Date.now()},it=/\s/;function rt(t){for(var i=t.length;i--&&it.test(t.charAt(i)););return i}var nt=/^\s+/;function ot(t){return t&&t.slice(0,rt(t)+1).replace(nt,"")}var U=NaN,st=/^[-+]0x[0-9a-f]+$/i,lt=/^0b[01]+$/i,at=/^0o[0-7]+$/i,ct=parseInt;function K(t){if(typeof t=="number")return t;if(pe(t))return U;if($(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=$(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=ot(t);var r=lt.test(t);return r||at.test(t)?ct(t.slice(2),r?2:8):st.test(t)?U:+t}var dt="Expected a function",ht=Math.max,pt=Math.min;function D(t,i,r){var e,o,l,c,s,f,u=0,m=!1,h=!1,d=!0;if(typeof t!="function")throw new TypeError(dt);i=K(i)||0,$(r)&&(m=!!r.leading,h="maxWait"in r,l=h?ht(K(r.maxWait)||0,i):l,d="trailing"in r?!!r.trailing:d);function p(x){var C=e,O=o;return e=o=void 0,u=x,c=t.apply(O,C),c}function E(x){return u=x,s=setTimeout(y,i),m?p(x):c}function w(x){var C=x-f,O=x-u,X=i-C;return h?pt(X,l-O):X}function k(x){var C=x-f,O=x-u;return f===void 0||C>=i||C<0||h&&O>=l}function y(){var x=_();if(k(x))return v(x);s=setTimeout(y,w(x))}function v(x){return s=void 0,d&&e?p(x):(e=o=void 0,c)}function F(){s!==void 0&&clearTimeout(s),u=0,e=f=o=s=void 0}function B(){return s===void 0?c:v(_())}function M(){var x=_(),C=k(x);if(e=arguments,o=this,f=x,C){if(s===void 0)return E(f);if(h)return clearTimeout(s),s=setTimeout(y,i),p(f)}return s===void 0&&(s=setTimeout(y,i)),c}return M.cancel=F,M.flush=B,M}var ut="Expected a function";function ft(t,i,r){var e=!0,o=!0;if(typeof t!="function")throw new TypeError(ut);return $(r)&&(e="leading"in r?!!r.leading:e,o="trailing"in r?!!r.trailing:o),D(t,i,{leading:e,maxWait:i,trailing:o})}var A=function(){return A=Object.assign||function(i){for(var r,e=1,o=arguments.length;e<o;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=r[l])}return i},A.apply(this,arguments)};function te(t){return!t||!t.ownerDocument||!t.ownerDocument.defaultView?window:t.ownerDocument.defaultView}function ie(t){return!t||!t.ownerDocument?document:t.ownerDocument}var re=function(t){var i={},r=Array.prototype.reduce.call(t,function(e,o){var l=o.name.match(/data-simplebar-(.+)/);if(l){var c=l[1].replace(/\W+(.)/g,function(s,f){return f.toUpperCase()});switch(o.value){case"true":e[c]=!0;break;case"false":e[c]=!1;break;case void 0:e[c]=!0;break;default:e[c]=o.value}}return e},i);return r};function ne(t,i){var r;t&&(r=t.classList).add.apply(r,i.split(" "))}function oe(t,i){t&&i.split(" ").forEach(function(r){t.classList.remove(r)})}function se(t){return".".concat(t.split(" ").join("."))}var H=!!(typeof window<"u"&&window.document&&window.document.createElement),gt=Object.freeze({__proto__:null,addClasses:ne,canUseDOM:H,classNamesToQuery:se,getElementDocument:ie,getElementWindow:te,getOptions:re,removeClasses:oe}),N=null,Q=null;H&&window.addEventListener("resize",function(){Q!==window.devicePixelRatio&&(Q=window.devicePixelRatio,N=null)});function Z(){if(N===null){if(typeof document>"u")return N=0,N;var t=document.body,i=document.createElement("div");i.classList.add("simplebar-hide-scrollbar"),t.appendChild(i);var r=i.getBoundingClientRect().right;t.removeChild(i),N=r}return N}var j=te,I=ie,xt=re,z=ne,L=oe,b=se,T=function(){function t(i,r){r===void 0&&(r={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var o=j(e.el);e.scrollXTicking||(o.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(o.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,z(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){L(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(z(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){L(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(o){e.mouseX=o.clientX,e.mouseY=o.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(o){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var l,c;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(l=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(c=e.isWithinBounds(e.axis.y.track.rect)),(l||c)&&(o.stopPropagation(),o.type==="pointerdown"&&o.pointerType!=="touch"&&(l&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(o,"x"):e.onTrackClick(o,"x")),c&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(o,"y"):e.onTrackClick(o,"y"))))}},this.drag=function(o){var l,c,s,f,u,m,h,d,p,E,w;if(!(!e.draggedAxis||!e.contentWrapperEl)){var k,y=e.axis[e.draggedAxis].track,v=(c=(l=y.rect)===null||l===void 0?void 0:l[e.axis[e.draggedAxis].sizeAttr])!==null&&c!==void 0?c:0,F=e.axis[e.draggedAxis].scrollbar,B=(f=(s=e.contentWrapperEl)===null||s===void 0?void 0:s[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&f!==void 0?f:0,M=parseInt((m=(u=e.elStyles)===null||u===void 0?void 0:u[e.axis[e.draggedAxis].sizeAttr])!==null&&m!==void 0?m:"0px",10);o.preventDefault(),o.stopPropagation(),e.draggedAxis==="y"?k=o.pageY:k=o.pageX;var x=k-((d=(h=y.rect)===null||h===void 0?void 0:h[e.axis[e.draggedAxis].offsetAttr])!==null&&d!==void 0?d:0)-e.axis[e.draggedAxis].dragOffset;x=e.draggedAxis==="x"&&e.isRtl?((E=(p=y.rect)===null||p===void 0?void 0:p[e.axis[e.draggedAxis].sizeAttr])!==null&&E!==void 0?E:0)-F.size-x:x;var C=x/(v-F.size),O=C*(B-M);e.draggedAxis==="x"&&e.isRtl&&(O=!((w=t.getRtlHelpers())===null||w===void 0)&&w.isScrollingToNegative?-O:O),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=O}},this.onEndDrag=function(o){e.isDragging=!1;var l=I(e.el),c=j(e.el);o.preventDefault(),o.stopPropagation(),L(e.el,e.classNames.dragging),e.onStopScrolling(),l.removeEventListener("mousemove",e.drag,!0),l.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=c.setTimeout(function(){l.removeEventListener("click",e.preventClick,!0),l.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(o){o.preventDefault(),o.stopPropagation()},this.el=i,this.options=A(A({},t.defaultOptions),r),this.classNames=A(A({},t.defaultOptions.classNames),r.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=ft(this._onMouseMove,64),this.onWindowResize=D(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=D(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=D(this._onMouseEntered,this.stopScrollDelay),this.init()}return t.getRtlHelpers=function(){if(t.rtlHelpers)return t.rtlHelpers;var i=document.createElement("div");i.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var r=i.firstElementChild,e=r==null?void 0:r.firstElementChild;if(!e)return null;document.body.appendChild(r),r.scrollLeft=0;var o=t.getOffset(r),l=t.getOffset(e);r.scrollLeft=-999;var c=t.getOffset(e);return document.body.removeChild(r),t.rtlHelpers={isScrollOriginAtZero:o.left!==l.left,isScrollingToNegative:l.left!==c.left},t.rtlHelpers},t.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:Z()}catch{return Z()}},t.getOffset=function(i){var r=i.getBoundingClientRect(),e=I(i),o=j(i);return{top:r.top+(o.pageYOffset||e.documentElement.scrollTop),left:r.left+(o.pageXOffset||e.documentElement.scrollLeft)}},t.prototype.init=function(){H&&(this.initDOM(),this.rtlHelpers=t.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.prototype.initDOM=function(){var i,r;this.wrapperEl=this.el.querySelector(b(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(b(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(b(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(b(this.classNames.offset)),this.maskEl=this.el.querySelector(b(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,b(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(b(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(b(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(b(this.classNames.track)).concat(b(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(b(this.classNames.track)).concat(b(this.classNames.vertical))),this.axis.x.scrollbar.el=((i=this.axis.x.track.el)===null||i===void 0?void 0:i.querySelector(b(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((r=this.axis.y.track.el)===null||r===void 0?void 0:r.querySelector(b(this.classNames.scrollbar)))||null,this.options.autoHide||(z(this.axis.x.scrollbar.el,this.classNames.visible),z(this.axis.y.scrollbar.el,this.classNames.visible))},t.prototype.initListeners=function(){var i=this,r,e=j(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(r=this.contentWrapperEl)===null||r===void 0||r.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var o=!1,l=e.ResizeObserver||ResizeObserver;this.resizeObserver=new l(function(){o&&e.requestAnimationFrame(function(){i.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){o=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){i.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},t.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var i=j(this.el);this.elStyles=i.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var r=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,o=this.heightAutoObserverEl.offsetWidth<=1||r>0,l=this.contentWrapperEl.offsetWidth,c=this.elStyles.overflowX,s=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var f=this.contentEl.scrollHeight,u=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=o?"".concat(r||u,"px"):"auto",this.placeholderEl.style.height="".concat(f,"px");var m=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=r!==0&&u>r,this.axis.y.isOverflowing=f>m,this.axis.x.isOverflowing=c==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=s==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,d=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&u>l-d,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&f>m-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},t.prototype.getScrollbarSize=function(i){var r,e;if(i===void 0&&(i="y"),!this.axis[i].isOverflowing||!this.contentEl)return 0;var o=this.contentEl[this.axis[i].scrollSizeAttr],l=(e=(r=this.axis[i].track.el)===null||r===void 0?void 0:r[this.axis[i].offsetSizeAttr])!==null&&e!==void 0?e:0,c=l/o,s;return s=Math.max(~~(c*l),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s},t.prototype.positionScrollbar=function(i){var r,e,o;i===void 0&&(i="y");var l=this.axis[i].scrollbar;if(!(!this.axis[i].isOverflowing||!this.contentWrapperEl||!l.el||!this.elStyles)){var c=this.contentWrapperEl[this.axis[i].scrollSizeAttr],s=((r=this.axis[i].track.el)===null||r===void 0?void 0:r[this.axis[i].offsetSizeAttr])||0,f=parseInt(this.elStyles[this.axis[i].sizeAttr],10),u=this.contentWrapperEl[this.axis[i].scrollOffsetAttr];u=i==="x"&&this.isRtl&&(!((e=t.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-u:u,i==="x"&&this.isRtl&&(u=!((o=t.getRtlHelpers())===null||o===void 0)&&o.isScrollingToNegative?u:-u);var m=u/(c-f),h=~~((s-l.size)*m);h=i==="x"&&this.isRtl?-h+(s-l.size):h,l.el.style.transform=i==="x"?"translate3d(".concat(h,"px, 0, 0)"):"translate3d(0, ".concat(h,"px, 0)")}},t.prototype.toggleTrackVisibility=function(i){i===void 0&&(i="y");var r=this.axis[i].track.el,e=this.axis[i].scrollbar.el;!r||!e||!this.contentWrapperEl||(this.axis[i].isOverflowing||this.axis[i].forceVisible?(r.style.visibility="visible",this.contentWrapperEl.style[this.axis[i].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(i))):(r.style.visibility="hidden",this.contentWrapperEl.style[this.axis[i].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(i))),this.axis[i].isOverflowing?e.style.display="block":e.style.display="none")},t.prototype.showScrollbar=function(i){i===void 0&&(i="y"),this.axis[i].isOverflowing&&!this.axis[i].scrollbar.isVisible&&(z(this.axis[i].scrollbar.el,this.classNames.visible),this.axis[i].scrollbar.isVisible=!0)},t.prototype.hideScrollbar=function(i){i===void 0&&(i="y"),!this.isDragging&&this.axis[i].isOverflowing&&this.axis[i].scrollbar.isVisible&&(L(this.axis[i].scrollbar.el,this.classNames.visible),this.axis[i].scrollbar.isVisible=!1)},t.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},t.prototype.onMouseMoveForAxis=function(i){i===void 0&&(i="y");var r=this.axis[i];!r.track.el||!r.scrollbar.el||(r.track.rect=r.track.el.getBoundingClientRect(),r.scrollbar.rect=r.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(r.track.rect)?(this.showScrollbar(i),z(r.track.el,this.classNames.hover),this.isWithinBounds(r.scrollbar.rect)?z(r.scrollbar.el,this.classNames.hover):L(r.scrollbar.el,this.classNames.hover)):(L(r.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(i)))},t.prototype.onMouseLeaveForAxis=function(i){i===void 0&&(i="y"),L(this.axis[i].track.el,this.classNames.hover),L(this.axis[i].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(i)},t.prototype.onDragStart=function(i,r){var e;r===void 0&&(r="y"),this.isDragging=!0;var o=I(this.el),l=j(this.el),c=this.axis[r].scrollbar,s=r==="y"?i.pageY:i.pageX;this.axis[r].dragOffset=s-(((e=c.rect)===null||e===void 0?void 0:e[this.axis[r].offsetAttr])||0),this.draggedAxis=r,z(this.el,this.classNames.dragging),o.addEventListener("mousemove",this.drag,!0),o.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(o.addEventListener("click",this.preventClick,!0),o.addEventListener("dblclick",this.preventClick,!0)):(l.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.prototype.onTrackClick=function(i,r){var e=this,o,l,c,s;r===void 0&&(r="y");var f=this.axis[r];if(!(!this.options.clickOnTrack||!f.scrollbar.el||!this.contentWrapperEl)){i.preventDefault();var u=j(this.el);this.axis[r].scrollbar.rect=f.scrollbar.el.getBoundingClientRect();var m=this.axis[r].scrollbar,h=(l=(o=m.rect)===null||o===void 0?void 0:o[this.axis[r].offsetAttr])!==null&&l!==void 0?l:0,d=parseInt((s=(c=this.elStyles)===null||c===void 0?void 0:c[this.axis[r].sizeAttr])!==null&&s!==void 0?s:"0px",10),p=this.contentWrapperEl[this.axis[r].scrollOffsetAttr],E=r==="y"?this.mouseY-h:this.mouseX-h,w=E<0?-1:1,k=w===-1?p-d:p+d,y=40,v=function(){e.contentWrapperEl&&(w===-1?p>k&&(p-=y,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=p,u.requestAnimationFrame(v)):p<k&&(p+=y,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=p,u.requestAnimationFrame(v)))};v()}},t.prototype.getContentElement=function(){return this.contentEl},t.prototype.getScrollElement=function(){return this.contentWrapperEl},t.prototype.removeListeners=function(){var i=j(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),i.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},t.prototype.unMount=function(){this.removeListeners()},t.prototype.isWithinBounds=function(i){return this.mouseX>=i.left&&this.mouseX<=i.left+i.width&&this.mouseY>=i.top&&this.mouseY<=i.top+i.height},t.prototype.findChild=function(i,r){var e=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector;return Array.prototype.filter.call(i.children,function(o){return e.call(o,r)})[0]},t.rtlHelpers=null,t.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},t.getOptions=xt,t.helpers=gt,t}(),S=function(){return S=Object.assign||function(i){for(var r,e=1,o=arguments.length;e<o;e++){r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=r[l])}return i},S.apply(this,arguments)};function mt(t,i){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)i.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]]);return r}var le=g.forwardRef(function(t,i){var r=t.children,e=t.scrollableNodeProps,o=e===void 0?{}:e,l=mt(t,["children","scrollableNodeProps"]),c=g.useRef(),s=g.useRef(),f=g.useRef(),u={},m={};Object.keys(l).forEach(function(p){Object.prototype.hasOwnProperty.call(T.defaultOptions,p)?u[p]=l[p]:m[p]=l[p]});var h=S(S({},T.defaultOptions.classNames),u.classNames),d=S(S({},o),{className:"".concat(h.contentWrapper).concat(o.className?" ".concat(o.className):""),tabIndex:u.tabIndex||T.defaultOptions.tabIndex,role:"region","aria-label":u.ariaLabel||T.defaultOptions.ariaLabel});return g.useEffect(function(){var p;return s.current=d.ref?d.ref.current:s.current,c.current&&(p=new T(c.current,S(S(S({},u),s.current&&{scrollableNode:s.current}),f.current&&{contentNode:f.current})),typeof i=="function"?i(p):i&&(i.current=p)),function(){p==null||p.unMount(),p=null,typeof i=="function"&&i(null)}},[]),g.createElement("div",S({"data-simplebar":"init",ref:c},m),g.createElement("div",{className:h.wrapper},g.createElement("div",{className:h.heightAutoObserverWrapperEl},g.createElement("div",{className:h.heightAutoObserverEl})),g.createElement("div",{className:h.mask},g.createElement("div",{className:h.offset},typeof r=="function"?r({scrollableNodeRef:s,scrollableNodeProps:S(S({},d),{ref:s}),contentNodeRef:f,contentNodeProps:{className:h.contentEl,ref:f}}):g.createElement("div",S({},d),g.createElement("div",{className:h.contentEl},r)))),g.createElement("div",{className:h.placeholder})),g.createElement("div",{className:"".concat(h.track," ").concat(h.horizontal)},g.createElement("div",{className:h.scrollbar})),g.createElement("div",{className:"".concat(h.track," ").concat(h.vertical)},g.createElement("div",{className:h.scrollbar})))});le.displayName="SimpleBar";const vt=a.div`
  width: 100%;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    width: 190px;
    margin-bottom: 0;
    margin-right: 16px;
  }
`,bt=a.div`
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding: 12px;

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
  }
`,wt=a.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: rgba(38, 38, 38, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,yt=a.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: inherit;

  transition: transform 0.5s ease;
  svg {
    transform: rotate(${t=>t.$showMenuType?"180deg":"0deg"});
    transition: transform 0.5s ease;
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 14px;
  }
`,St=a.div`
  position: relative;
  padding-right: 12px;
  z-index: 9999;
`,Et=a(le)`
  max-height: 150px;
  border-radius: 13px;

  /* серый скролл */
  .simplebar-scrollbar:before {
    background-color: #26262614; /* серый цвет */
    border-radius: 13px; /* радиус ползунка */
    opacity: 1 !important;
  }

`,kt=a.ul`
  position: absolute;
  top: calc(100% + 20px); /* сразу под селектором */
  left: 50%;
  transform: translateX(-50%); /* центрируем по горизонтали */
  width: 100%;
  max-height: 290px;

  border-radius: 15px;
  padding: 12px;
  background-color: #fff;

  li {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 0.6);
    transition: color 0.5s ease;
    cursor: pointer;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  li:hover,
  li:focus,
  li:active {
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    li {
      font-size: 16px;
      line-height: 20px;
    }
  }
`,Ct=({selectedTypeOfPets:t,setSelectedTypeOfPets:i})=>{const[r,e]=g.useState(!1),o=["Show All","Dog","Cat","Monkey","Bird","Snake","Turtle","Lizard"],l=()=>{e(s=>!s)},c=s=>{i(s),e(!1)};return n.jsx(n.Fragment,{children:n.jsx(vt,{children:n.jsxs(bt,{children:[n.jsx(wt,{children:t||"By Type"}),n.jsx(yt,{type:"button",onClick:l,$showMenuType:r,children:n.jsx(V,{})}),r&&n.jsx(St,{children:n.jsx(kt,{children:n.jsx(Et,{children:o.map(s=>n.jsx("li",{onClick:()=>c(s),children:s},s))})})})]})})})},Ot=a.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 230px;
    height: 48px;
    margin-bottom: 0;
  }
`,jt=a.input.attrs({type:"text"})`
  width: 100%;
  height: 42px;
  padding: 0 12px 0 12px;
  border-radius: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(38, 38, 38, 1);

  &::placeholder {
    color: rgba(38, 38, 38, 1);
    font-size: 14px;
  }

  &:focus {
    border: 1px solid rgba(246, 184, 61, 1);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 230px;
    height: 48px;

    font-size: 16px;
    line-height: 20px;
    padding: 14px;

    &::placeholder {
      font-size: 16px;
      line-height: 20px;
    }
  }
`,zt=a.div`
  position: absolute;
  top: 55%;
  right: 0;
  transform: translateY(-45%);
  margin-right: 12px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    right: 14px;
    margin-right: 0;
  }
`,Lt=()=>{const t=R(),i=W(s=>s.noticesPetsFilterLocation)??"",[r,e]=g.useState(i);g.useEffect(()=>{e(i)},[i]);const o=()=>{e(""),t(q(""))},l=s=>{e(s.target.value)},c=s=>{(s.key==="Escape"||s.key==="Enter")&&t(q(r.trim()))};return n.jsxs(Ot,{children:[n.jsx(jt,{type:"text",name:"location",placeholder:"Location",value:r,onChange:l,onKeyDown:c}),n.jsx(zt,{children:r.length>0?n.jsx("button",{type:"reset","aria-label":"reset",onClick:o,children:n.jsx(J,{})}):n.jsx("button",{type:"button","aria-hidden":!0,tabIndex:-1,children:n.jsx(ee,{})})})]})},Wt=a.div`
display: flex;
flex-wrap: wrap;
  margin-top: 20px;
  box-sizing: border-box;
`,Nt=a.button`
  position: relative;
  width: ${({$active:t})=>t?"100px":"75px"};
  height: 42px;
  border-radius: 30px;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  background-color: ${({$active:t})=>t?"#F6B83D":"#fff"};
  color: ${({$active:t})=>t?"#FFF":"#262626"};
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.3s ease;

  &:hover {
    background-color: ${({$active:t})=>t?"#F6B83D":"#f0f0f0"};
    color: ${({$active:t})=>t?"#FFF":"#262626"};
  }

  @media screen and (min-width: 768px) {
    width: ${({$active:t})=>t?"110px":"85px"};
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`,At=a.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: ${({$active:t})=>t?"block":"none"};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`,Mt=a.button`
  position: relative;
  width: ${({$active:t})=>t?"110px":"90px"};
  height: 42px;
  border-radius: 30px;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  background-color: ${({$active:t})=>t?"#F6B83D":"#fff"};
  color: ${({$active:t})=>t?"#FFF":"#262626"};
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.3s ease;

  &:hover {
    background-color: ${({$active:t})=>t?"#F6B83D":"#f0f0f0"};
    color: ${({$active:t})=>t?"#FFF":"#262626"};
  }

  @media screen and (min-width: 768px) {
    width: ${({$active:t})=>t?"125px":"100px"};
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`,Tt=a.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: ${({$active:t})=>t?"block":"none"};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`,Ft=a.button`
  position: relative;
  width: ${({$active:t})=>t?"90px":"66px"};
  height: 42px;
  border-radius: 30px;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  background-color: ${({$active:t})=>t?"#F6B83D":"#fff"};
  color: ${({$active:t})=>t?"#FFF":"#262626"};
  cursor: pointer;
  transition:
    background-color 0.5s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({$active:t})=>t?"#F6B83D":"#f0f0f0"};
    color: ${({$active:t})=>t?"#FFF":"#262626"};
  }

  @media screen and (min-width: 768px) {
    width: ${({$active:t})=>t?"100px":"76px"};
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`,Pt=a.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: ${({$active:t})=>t?"block":"none"};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`,Dt=a.button`
  position: relative;
  width: ${({$active:t})=>t?"110px":"88px"};
  height: 42px;
  border-radius: 30px;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  background-color: ${({$active:t})=>t?"#F6B83D":"#fff"};
  color: ${({$active:t})=>t?"#FFF":"#262626"};
  cursor: pointer;
  transition:
    background-color 0.5s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({$active:t})=>t?"#F6B83D":"#f0f0f0"};
    color: ${({$active:t})=>t?"#FFF":"#262626"};
  }

  @media screen and (min-width: 768px) {
    width: ${({$active:t})=>t?"125px":"100px"};
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`,$t=a.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: ${({$active:t})=>t?"block":"none"};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`,P=()=>n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M13.5 4.5L4.5 13.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M4.5 4.5L13.5 13.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Rt=()=>{const t=R(),i=W(o=>o.sortPets.value),r=o=>{t(G(o))},e=o=>{o.stopPropagation(),t(G(""))};return n.jsxs(Wt,{children:[n.jsxs(Nt,{type:"button",$active:i==="popular",onClick:()=>r("popular"),children:["Popular",n.jsx(At,{onClick:e,$active:i==="popular",children:n.jsx(P,{})})]}),n.jsxs(Mt,{type:"button",$active:i==="unpopular",onClick:()=>r("unpopular"),children:["Unpopular",n.jsx(Tt,{onClick:e,$active:i==="unpopular",children:n.jsx(P,{})})]}),n.jsxs(Ft,{type:"button",$active:i==="cheap",onClick:()=>r("cheap"),children:["Cheap",n.jsx(Pt,{$active:i==="cheap",onClick:e,children:n.jsx(P,{})})]}),n.jsxs(Dt,{type:"button",$active:i==="expensive",onClick:()=>r("expensive"),children:["Expensive",n.jsx($t,{$active:i==="expensive",onClick:e,children:n.jsx(P,{})})]})]})},Bt=()=>{const t=R(),[i,r]=g.useState(""),[e,o]=g.useState(""),[l,c]=g.useState("");g.useEffect(()=>{const d=ue(fe(ge,"listofdifferentpets"),p=>{const E=p.docs.map(w=>({uid:w.id,...w.data()}));t(xe(E))});return()=>d()},[t]);const s=W(d=>d.noticesPets.pets),f=W(d=>d.noticesFilter),u=W(d=>d.noticesPetsFilterLocation),m=W(d=>d.sortPets.value),h=g.useMemo(()=>s.filter(d=>{const p=(d.title||"").toLowerCase().includes(f.toLowerCase()),E=!i||i.toLowerCase()==="show all"||(d.category||"").toLowerCase()===i.toLowerCase(),w=!e||e.toLowerCase()==="show all"||(d.sex||"").toLowerCase()===e.toLowerCase(),k=!l||l.toLowerCase()==="show all"||(d.species||"").toLowerCase()===l.toLowerCase(),y=(d.city||"").toLowerCase().includes(u.toLowerCase());let v=!0;return m==="expensive"?v=d.price!==void 0&&d.price>=250:m==="cheap"?v=d.price!==void 0&&d.price<250:m==="popular"?v=d.rating!==void 0&&d.rating>=1:m==="unpopular"&&(v=d.rating!==void 0&&d.rating<1),p&&E&&w&&k&&y&&v}),[s,f,i,e,l,u,m]);return n.jsxs(Ie,{children:[n.jsx(Ve,{children:"Find your favorite pet"}),n.jsxs(He,{children:[n.jsxs(Xe,{children:[n.jsx(Se,{}),n.jsxs(Ye,{children:[n.jsx(Le,{selectedCategory:i,setSelectedCategory:r}),n.jsx(tt,{selectedGender:e,setSelectedGender:o})]}),n.jsxs(qe,{children:[n.jsx(Ct,{selectedTypeOfPets:l,setSelectedTypeOfPets:c}),n.jsx(Lt,{})]})]}),n.jsx(Ge,{}),n.jsx(Rt,{})]}),n.jsx(ve,{data:h,itemsPerPage:6,renderItems:d=>n.jsx(_e,{filteredPets:d})})]})},Vt=()=>n.jsxs(n.Fragment,{children:[n.jsx(Bt,{}),n.jsx(me,{})]});export{Vt as default};
