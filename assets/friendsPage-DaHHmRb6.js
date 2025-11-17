import{d as n,u as s,a as p,r as o,n as d,j as i}from"./index-v3SxYL-Z.js";const x=n.ul`
  @media screen and (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 28px;
  }
`,a=n.li`
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 335px;
  height: 184px;
  opacity: 1;
  border-radius: 15px;
  padding: 12px 12px 0 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 196px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`,h=n.p`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 8px;
  border-radius: 30px;
  color: rgba(246, 184, 61, 1);
  background-color: rgba(255, 244, 223, 1);

  @media screen and (min-width: 768px) {
    width: 100px;
    font-size: 14px;
    line-height: 18px;
  }
`,c=n.div`
position: absolute;
top: 60%;
left: 20px;
transform: translateY(-60%);
  display: flex;
  align-items: center;
`,g=n.div``,l=n.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 20px;
  }
`,m=n.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
  }
`,f=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 10px;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }
`,b=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 10px;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }
`,w=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }
`,u=()=>{const r=s(),t=p(e=>e.ourFriendsCollection.ourfriends);return o.useEffect(()=>{r(d()).then(e=>{console.log("Thunk result:",e)})},[r]),o.useEffect(()=>{console.log("Fetch Friends",t)},[t]),i.jsx(i.Fragment,{children:i.jsx(x,{children:t&&t.map(e=>i.jsxs(a,{children:[i.jsx(h,{children:e.workTime}),i.jsxs(c,{children:[i.jsx(l,{src:e.img,alt:""}),i.jsxs(g,{children:[i.jsx(m,{children:e.name}),i.jsxs(b,{children:["Email: ",i.jsx("span",{children:e.email})]}),i.jsxs(f,{children:["Address: ",i.jsx("span",{children:e.address})]}),i.jsxs(w,{children:["Phone:",i.jsx("span",{children:e.phone})]})]})]})]},e.uid))})})},j=n.div`
  background-color: rgba(249, 249, 249, 1);
`,F=n.div`
  width: 375px;
  padding: 40px 20px 80px 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 70px 30px 80px 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 90px 64px 80px 64px;
  }
`,z=n.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 44px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`,C=()=>i.jsx(j,{children:i.jsxs(F,{children:[i.jsx(z,{children:"Our Friends"}),i.jsx(u,{})]})}),E=()=>i.jsx(i.Fragment,{children:i.jsx(C,{})});export{E as default};
