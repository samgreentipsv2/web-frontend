import{j as e,L as f,d as u,r as n,a as c,T as g,P as k,b,c as v,e as h,f as r,g as y,u as T,h as x,i as p,k as N,A as S,F as _}from"./index-8add5afe.js";const C="/assets/herbtn-d6155a3f.svg",E="/assets/heroimg-b1fb6c0e.svg",R="newScene",O=0,D=20,F=20,I={g:"@lottiefiles/toolkit-js 0.25.8"},M=[{ty:4,nm:"circle-2",sr:1,st:0,op:23,ip:0,hd:!1,ln:"circle-2",ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0]},s:{a:1,k:[{o:{x:.42,y:0},i:{x:1,y:1},s:[30,30,100],t:8},{s:[100,100,100],t:23}]},sk:{a:0,k:0},p:{a:0,k:[10,10]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.381,y:.415},s:[0],t:8},{o:{x:.226,y:.372},i:{x:.659,y:1},s:[90],t:12},{s:[0],t:23}]}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,nm:"Object",it:[{ty:"el",bm:0,hd:!1,nm:"",d:1,p:{a:0,k:[0,0]},s:{a:0,k:[18,18]}},{ty:"fl",bm:0,hd:!1,nm:"Fill 1",c:{a:0,k:[.0118,.3529,.0157]},r:1,o:{a:0,k:100}},{ty:"tr",a:{a:0,k:[0,0]},s:{a:0,k:[100,100]},sk:{a:0,k:0},p:{a:0,k:[0,0]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:0,k:100}}]}],ind:1},{ty:4,nm:"circle",sr:1,st:0,op:23,ip:0,hd:!1,ln:"circle",ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0]},s:{a:1,k:[{o:{x:.42,y:0},i:{x:1,y:1},s:[30,30,100],t:0},{s:[100,100,100],t:15}]},sk:{a:0,k:0},p:{a:0,k:[10,10]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.381,y:.415},s:[0],t:0},{o:{x:.226,y:.372},i:{x:.659,y:1},s:[90],t:4},{s:[0],t:15}]}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,nm:"Object",it:[{ty:"el",bm:0,hd:!1,nm:"",d:1,p:{a:0,k:[0,0]},s:{a:0,k:[18,18]}},{ty:"fl",bm:0,hd:!1,nm:"Fill 1",c:{a:0,k:[.0118,.3529,.0157]},r:1,o:{a:0,k:100}},{ty:"tr",a:{a:0,k:[0,0]},s:{a:0,k:[100,100]},sk:{a:0,k:0},p:{a:0,k:[0,0]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:0,k:100}}]}],ind:2}],B="5.0.0",P=10,$=23,z=0,H=[],w={nm:R,ddd:O,h:D,w:F,meta:I,layers:M,v:B,fr:P,op:$,ip:z,assets:H},L=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"hersctn",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"herotxt",children:[e.jsx("h1",{className:"herotxt1",children:"THE WORLD'S"}),e.jsx("h1",{className:"herotxt2",children:"MOST OUTSTANDING"}),e.jsx("h1",{className:"herotxt1",children:"TIPSTER"}),e.jsxs("span",{className:"blnkspn",children:[e.jsx("p",{children:"Over 200+ Tips"})," ",e.jsx(f,{className:"blinkcls",animationData:w})]})]}),e.jsxs("span",{className:"herbtnspn",children:[e.jsxs("a",{href:"/vip",children:[" ",e.jsxs("button",{className:"herbtn",children:[e.jsx("span",{children:e.jsx("img",{src:C})})," JOIN VIP"]})]}),e.jsxs("a",{target:"_blank",href:"https://t.me/+Oni7J8ZYh3g1MzFk",children:[" ",e.jsxs("button",{className:"herbtn2",children:[e.jsx("span",{children:e.jsx(u,{sx:{height:"18px",marginBottom:"-4.6px"}})}),"Telegram Channel"]})]})]})]}),e.jsx("div",{children:e.jsx("img",{className:"regimg",src:E})})]})}),V=t=>{const[a,i]=n.useState();return n.useEffect(()=>{c.get("https://server.samgreentips.com/api/botd",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then(s=>{console.log(s.data.betoftheday),i(s.data.betoftheday)})},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"betofday",children:[e.jsx("span",{children:e.jsx("h5",{className:"home-sub",children:" BET OF THE DAY"})}),e.jsx(g,{component:k,children:e.jsxs(b,{sx:{minWidth:300},size:"small","aria-label":"a dense table",children:[e.jsx(v,{children:e.jsxs(h,{children:[e.jsx(r,{children:"Date"}),e.jsx(r,{align:"left",children:"Match"}),e.jsx(r,{align:"left",children:"Prediction"}),e.jsx(r,{align:"left",children:"Odd"})]})}),e.jsx(y,{children:a==null?void 0:a.map(s=>e.jsxs(h,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:e.jsx("p",{children:new Date(s.time).toDateString()})}),e.jsx(r,{align:"left",children:s.match}),e.jsx(r,{align:"left",children:s.category__category_name}),e.jsx(r,{align:"left",children:s.odd})]},s.id))})]})})]})})},A=t=>(T(),e.jsx(e.Fragment,{children:e.jsx("a",{href:"/free-predictions",children:e.jsxs("div",{className:"tipcatbox",children:[e.jsx("span",{children:e.jsx("strong",{children:e.jsx("p",{children:"FREE!"})})}),e.jsx("h2",{children:t.name})]})})})),q=t=>{const[a,i]=n.useState([]);return n.useEffect(()=>{c.get("https://server.samgreentips.com/api/freecat",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then(s=>{i(s.data.categories)})},[]),e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx("h5",{className:"home-sub",children:" CATEGORIES"})}),e.jsx("span",{className:"freebox",children:a==null?void 0:a.map(s=>e.jsx(A,{name:s.category_name},s.id))})]})};var d={},J=p;Object.defineProperty(d,"__esModule",{value:!0});var j=d.default=void 0,U=J(x()),G=e,W=(0,U.default)((0,G.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");j=d.default=W;var o={},Y=p;Object.defineProperty(o,"__esModule",{value:!0});var m=o.default=void 0,Z=Y(x()),K=e,Q=(0,Z.default)((0,K.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");m=o.default=Q;const X=t=>e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:e.jsx("p",{children:new Date(t.day).toDateString().slice(3,10)})}),e.jsx("span",{children:t.status?e.jsx(m,{sx:{color:"green",fontSize:"30px"}}):e.jsx(j,{sx:{color:"red",fontSize:"30px"}})})]}),ee=t=>{const[a,i]=n.useState(),{scrollRef:s}=N();return n.useEffect(()=>{c.get("https://server.samgreentips.com/api/results",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then(l=>{console.log(l.data.results),i(l.data.results)})},[]),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("span",{children:e.jsx("h5",{className:"home-sub",children:"RECENT VIP RESULTS"})}),e.jsx("span",{children:e.jsx("ul",{className:"recvip",ref:s,style:{display:"flex",overflow:"scroll",scrollSnapType:"x mandatory"},children:a?a.map(l=>e.jsx("li",{children:e.jsx(X,{id:0,day:l.day,status:l.status})},l.id)):e.jsx("h1",{children:"Match Unavailable"})})})]}),e.jsx("span",{className:"iframe",children:e.jsx("a",{href:"/vip",children:e.jsx("button",{className:"btn1",children:"Join VIP"})})})]})},ae=()=>{n.useEffect(()=>{S.init({duration:800})},[]);const t=n.useRef(null);return n.useEffect(()=>{console.log(t.current)},[]),e.jsxs("div",{"data-aos":"fade-up",children:[e.jsx(L,{}),e.jsx(_,{}),e.jsx(V,{}),e.jsx(ee,{}),e.jsx(q,{})]})};export{ae as default};
