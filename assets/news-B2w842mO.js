import{d as t,u as c,a as d,r as x,j as e,C as g,s as h,f as m}from"./index-v3SxYL-Z.js";import{I as w,P as u}from"./pagination-BzW1LlhA.js";const f=t.div`
  position: relative;
  width: 335px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 230px;
    height: 48px;
  }
`,b=t.input.attrs({type:"text"})`
  width: 100%;
  height: 42px;
  padding: 0 12px 0 12px;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  transition: border 0.5s ease;
  background-color: inherit;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);

  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
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
    padding: 0 14px 0 14px;
  }
`,j=t.div`
  position: absolute;
  top: 55%;
  right: 0;
  transform: translateY(-45%);
  margin-right: 12px;
`,N=()=>{const o=c(),r=d(s=>s.NewsFilterPets),[a,p]=x.useState(r),n=()=>{p(""),o(h(""))},i=s=>{p(s.target.value)},l=s=>{(s.key==="Escape"||s.key==="Enter")&&o(h(a.trim()))};return e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx(b,{type:"text",name:"search",placeholder:"Search",value:a,onChange:i,onKeyDown:l}),e.jsx(j,{children:a.length>0?e.jsx("button",{type:"reset",onClick:n,"aria-label":"Reset",children:e.jsx(g,{})}):e.jsx("button",{type:"button","aria-hidden":!0,tabIndex:-1,children:e.jsx(w,{})})})]})})},C=t.div`
  width: 375px;
  padding: 60px 20px 80px 20px;
  box-sizing: border-box;
 
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
`,z=t.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,y=t.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  color: rgba(38, 38, 38, 1);

  margin-bottom: 20px;

  @media screen and (min-width: 768px){
  font-size: 54px;
  line-height: 54px;
  }
`;t.div``;const I=t.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px; /* горизонтальный */
    row-gap: 32px; /* вертикальный */
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 35px; /* горизонтальный */
    row-gap: 40px; /* вертикальный */
    margin-bottom: 60px;
  }
`,v=t.li`
position: relative;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: unset;
  }
`,k=t.img`
  width: 335px;
  margin-bottom: 20px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 226px;
    margin-bottom: 28px;
  }
`,P=t.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 14px;
  }
`,S=t.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 28px;
  }
`,E=t.div`
position: absolute;
bottom: 0;

width: 100%;
display: flex;
justify-content: space-between;
`,F=t.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,D=t.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(246, 184, 61, 1);
  transition: color 0.5s ease;

  &:hover {
    color: rgba(179, 120, 4, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,L=()=>{const o=c(),r=d(n=>n.NewsPets.news),a=d(n=>n.NewsFilterPets);x.useEffect(()=>{o(m()).then(n=>{console.log("Thunk result:",n)})},[o]),x.useEffect(()=>{console.log("News updated:",r)},[r]);const p=r.filter(n=>n.title.toLowerCase().includes(a.toLowerCase()));return e.jsx(u,{data:p,itemsPerPage:6,renderItems:n=>e.jsx(I,{children:n.map(i=>e.jsxs(v,{children:[e.jsx(k,{src:i.img,alt:"News Photo"}),e.jsx(P,{children:i.title}),e.jsx(S,{children:i.description}),e.jsxs(E,{children:[e.jsx(F,{children:i.date}),e.jsx(D,{href:i.link,target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})]},i.uid))})})},V=()=>e.jsxs(C,{children:[e.jsxs(z,{children:[e.jsx(y,{children:"News"}),e.jsx(N,{})]}),e.jsx(L,{})]}),K=()=>e.jsx(e.Fragment,{children:e.jsx(V,{})});export{K as default};
