import{j as s,L as r,d as c,r as n,a as d,T as h,P as o,b as x,c as m,e as i,f as a,g as j,A as k,F as p}from"./index-417f5e4b.js";const b="/assets/herbtn-d6155a3f.svg",g="/assets/heroimg-b1fb6c0e.svg",f="newScene",y=0,T=20,N=20,u={g:"@lottiefiles/toolkit-js 0.25.8"},v=[{ty:4,nm:"circle-2",sr:1,st:0,op:23,ip:0,hd:!1,ln:"circle-2",ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0]},s:{a:1,k:[{o:{x:.42,y:0},i:{x:1,y:1},s:[30,30,100],t:8},{s:[100,100,100],t:23}]},sk:{a:0,k:0},p:{a:0,k:[10,10]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.381,y:.415},s:[0],t:8},{o:{x:.226,y:.372},i:{x:.659,y:1},s:[90],t:12},{s:[0],t:23}]}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,nm:"Object",it:[{ty:"el",bm:0,hd:!1,nm:"",d:1,p:{a:0,k:[0,0]},s:{a:0,k:[18,18]}},{ty:"fl",bm:0,hd:!1,nm:"Fill 1",c:{a:0,k:[.0118,.3529,.0157]},r:1,o:{a:0,k:100}},{ty:"tr",a:{a:0,k:[0,0]},s:{a:0,k:[100,100]},sk:{a:0,k:0},p:{a:0,k:[0,0]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:0,k:100}}]}],ind:1},{ty:4,nm:"circle",sr:1,st:0,op:23,ip:0,hd:!1,ln:"circle",ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0]},s:{a:1,k:[{o:{x:.42,y:0},i:{x:1,y:1},s:[30,30,100],t:0},{s:[100,100,100],t:15}]},sk:{a:0,k:0},p:{a:0,k:[10,10]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.381,y:.415},s:[0],t:0},{o:{x:.226,y:.372},i:{x:.659,y:1},s:[90],t:4},{s:[0],t:15}]}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,nm:"Object",it:[{ty:"el",bm:0,hd:!1,nm:"",d:1,p:{a:0,k:[0,0]},s:{a:0,k:[18,18]}},{ty:"fl",bm:0,hd:!1,nm:"Fill 1",c:{a:0,k:[.0118,.3529,.0157]},r:1,o:{a:0,k:100}},{ty:"tr",a:{a:0,k:[0,0]},s:{a:0,k:[100,100]},sk:{a:0,k:0},p:{a:0,k:[0,0]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:0,k:100}}]}],ind:2}],E="5.0.0",O=10,F=23,I=0,B=[],P={nm:f,ddd:y,h:T,w:N,meta:u,layers:v,v:E,fr:O,op:F,ip:I,assets:B},C=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"hersctn",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"herotxt",children:[s.jsx("h1",{className:"herotxt1",children:"WIN BIG!!"}),s.jsx("h1",{className:"herotxt2",children:"WITH OUR EXPERT"}),s.jsx("h1",{className:"herotxt1",children:"BETTING TIPS."}),s.jsxs("span",{className:"blnkspn",children:[s.jsx("p",{children:"200+ Tips"})," ",s.jsx(r,{className:"blinkcls",animationData:P})]})]}),s.jsxs("span",{className:"herbtnspn",children:[s.jsxs("a",{href:"/vip",children:[" ",s.jsxs("button",{className:"herbtn",children:[s.jsx("span",{children:s.jsx("img",{src:b})})," JOIN VIP"]})]}),s.jsxs("a",{target:"_blank",href:"https://t.me/+Oni7J8ZYh3g1MzFk",children:[" ",s.jsxs("button",{className:"herbtn2",children:[s.jsx("span",{children:s.jsx(c,{sx:{height:"18px",marginBottom:"-4.6px"}})}),"Telegram Channel"]})]})]})]}),s.jsx("div",{children:s.jsx("img",{className:"regimg",src:g})})]})}),H=_=>{const[t,l]=n.useState();return n.useEffect(()=>{d.get("http://16.16.166.53/api/botd",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then(e=>{l(e.data.betoftheday)})},[]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"betofday",children:[s.jsx("span",{children:s.jsx("h5",{className:"home-sub",children:" BET OF THE DAY"})}),s.jsx(h,{component:o,children:s.jsxs(x,{sx:{minWidth:300},size:"small","aria-label":"a dense table",children:[s.jsx(m,{children:s.jsxs(i,{children:[s.jsx(a,{children:"Date"}),s.jsx(a,{align:"right",children:"Game"}),s.jsx(a,{align:"right",children:"Prediction"}),s.jsx(a,{align:"right",children:"Odd"})]})}),s.jsx(j,{children:t==null?void 0:t.map(e=>s.jsxs(i,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(a,{component:"th",scope:"row",children:s.jsx("p",{children:e.time})}),s.jsx(a,{align:"right",children:e.match}),s.jsx(a,{align:"right",children:e.category__category_name}),s.jsx(a,{align:"right",children:e.odd})]},e.id))})]})})]})})},R=()=>(n.useEffect(()=>{k.init({duration:800})},[]),s.jsxs("div",{"data-aos":"fade-up",children:[s.jsx(C,{}),s.jsx(p,{}),s.jsx(H,{})]}));export{R as default};
