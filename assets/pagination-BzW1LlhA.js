import{j as t,d as c,r as l}from"./index-v3SxYL-Z.js";const W=()=>t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"#262626",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"#262626",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),u="/pets-love-project/assets/symbol-defs-DfqZhNQq.svg",z=c.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,B=c.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;
  margin-right: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;

  svg {
    fill: ${({disabled:i})=>i?"rgba(38, 38, 38, 0.5)":"#262626"};
  }

  &:hover {
    border-color: #f6b83d;
  }
`,E=c.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;

  svg {
    fill: ${({disabled:i})=>i?"rgba(38, 38, 38, 0.5)":"#262626"};
  }

  &:hover {
    border-color: #f6b83d;
  }
`,R=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,m=c.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;
  margin-right: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  background-color: ${({$isActive:i})=>i?"#F6B83D":"inherit"};
  color: ${({$isActive:i})=>i?"#fff":"#262626"};

  display: flex;
  justify-content: center;
  align-items: center;

`,D=c.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;
  margin-right: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;
  svg {
    fill: ${({disabled:i})=>i?"rgba(38, 38, 38, 0.5)":"#262626"};
  }

  &:hover {
    border-color: #f6b83d;
  }
`,I=c.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;
  svg {
    fill: ${({disabled:i})=>i?"rgba(38, 38, 38, 0.5)":"#262626"};
  }

  &:hover {
    border-color: #f6b83d;
  }
`,T=({data:i,itemsPerPage:a=6,renderItems:y})=>{const[s,g]=l.useState(1),[h,P]=l.useState(()=>window.innerWidth>768?3:2),[x,f]=l.useState(1);l.useEffect(()=>{const e=()=>{P(window.innerWidth>768?3:2)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const r=Math.ceil(i.length/a),M=l.useMemo(()=>{const e=(s-1)*a;return i.slice(e,e+a)},[i,s,a]);l.useEffect(()=>{g(1),f(1)},[i]);const p=e=>{g(e),e>x&&f(e)},k=()=>{const e=Math.min(s+1,r);g(e),e>x&&f(e)},C=()=>{g(e=>Math.max(e-1,1))},$=l.useMemo(()=>{const e=[],o=r,L=h===2;if(o<=h){for(let n=1;n<=o;n++)e.push(n);return e}if(L){const w=Math.floor((s-1)/2)*2+1;let d=w+2-1;s===d&&d<o&&(d+=1),d=Math.min(d,o);for(let v=w;v<=d;v++)e.push(v);return d<o&&e.push("…"),e}const S=Math.floor(h/2);let b=Math.max(1,s-S),j=Math.min(b+h-1,o);j===o&&(b=Math.max(o-h+1,1));for(let n=b;n<=j;n++)e.push(n);return j<o&&e.push("…"),e},[r,s,h,x]);return i.length===0?t.jsx("div",{children:"Нічого не знайдено"}):t.jsxs("div",{children:[t.jsx("div",{children:y(M)}),r&&t.jsxs(z,{children:[t.jsx(B,{type:"button",onClick:()=>p(1),disabled:s===1,children:t.jsx("svg",{width:"40",height:"40",children:t.jsx("use",{href:`${u}#icon-sliderDoubleLeft`})})}),t.jsx(E,{type:"button",onClick:C,disabled:s===1,children:t.jsx("svg",{width:"40",height:"40",children:t.jsx("use",{href:`${u}#icon-slider`})})}),t.jsx(R,{children:$.map((e,o)=>typeof e=="number"?t.jsx(m,{type:"button",onClick:()=>typeof e=="number"&&p(e),$isActive:s===e,children:e},typeof e=="number"?`page-${e}`:`dots-${o}`):t.jsx(m,{children:"…"},o))}),t.jsx(D,{type:"button",onClick:k,disabled:s===r,children:t.jsx("svg",{width:"40",height:"40",children:t.jsx("use",{href:`${u}#icon-sliderRight`})})}),t.jsx(I,{type:"button",onClick:()=>p(r),disabled:s===r,children:t.jsx("svg",{width:"40",height:"40",children:t.jsx("use",{href:`${u}#icon-sliderDoubleRight`})})})]})]})};export{W as I,T as P};
