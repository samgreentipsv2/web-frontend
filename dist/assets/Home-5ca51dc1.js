import{j as e,L as u,d as f,r as n,a as c,T as g,P as k,b,c as y,e as h,f as r,g as v,u as N,h as x,i as j,k as T,A as S,l as _,F as C}from"./index-91015c5d.js";const E="/assets/herbtn-d6155a3f.svg",R="/assets/heroimg-b1fb6c0e.svg",O="newScene",D=0,F=20,I=20,w={g:"@lottiefiles/toolkit-js 0.25.8"},B=[{ty:4,nm:"circle-2",sr:1,st:0,op:23,ip:0,hd:!1,ln:"circle-2",ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0]},s:{a:1,k:[{o:{x:.42,y:0},i:{x:1,y:1},s:[30,30,100],t:8},{s:[100,100,100],t:23}]},sk:{a:0,k:0},p:{a:0,k:[10,10]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.381,y:.415},s:[0],t:8},{o:{x:.226,y:.372},i:{x:.659,y:1},s:[90],t:12},{s:[0],t:23}]}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,nm:"Object",it:[{ty:"el",bm:0,hd:!1,nm:"",d:1,p:{a:0,k:[0,0]},s:{a:0,k:[18,18]}},{ty:"fl",bm:0,hd:!1,nm:"Fill 1",c:{a:0,k:[.0118,.3529,.0157]},r:1,o:{a:0,k:100}},{ty:"tr",a:{a:0,k:[0,0]},s:{a:0,k:[100,100]},sk:{a:0,k:0},p:{a:0,k:[0,0]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:0,k:100}}]}],ind:1},{ty:4,nm:"circle",sr:1,st:0,op:23,ip:0,hd:!1,ln:"circle",ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0]},s:{a:1,k:[{o:{x:.42,y:0},i:{x:1,y:1},s:[30,30,100],t:0},{s:[100,100,100],t:15}]},sk:{a:0,k:0},p:{a:0,k:[10,10]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.381,y:.415},s:[0],t:0},{o:{x:.226,y:.372},i:{x:.659,y:1},s:[90],t:4},{s:[0],t:15}]}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,nm:"Object",it:[{ty:"el",bm:0,hd:!1,nm:"",d:1,p:{a:0,k:[0,0]},s:{a:0,k:[18,18]}},{ty:"fl",bm:0,hd:!1,nm:"Fill 1",c:{a:0,k:[.0118,.3529,.0157]},r:1,o:{a:0,k:100}},{ty:"tr",a:{a:0,k:[0,0]},s:{a:0,k:[100,100]},sk:{a:0,k:0},p:{a:0,k:[0,0]},r:{a:0,k:0},sa:{a:0,k:0},o:{a:0,k:100}}]}],ind:2}],H="5.0.0",M=10,P=23,$=0,z=[],A={nm:O,ddd:D,h:F,w:I,meta:w,layers:B,v:H,fr:M,op:P,ip:$,assets:z},L=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"hersctn",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"herotxt",children:[e.jsx("h1",{className:"herotxt1",children:"THE WORLD'S"}),e.jsx("h1",{className:"herotxt2",children:"MOST OUTSTANDING"}),e.jsx("h1",{className:"herotxt1",children:"TIPSTER"}),e.jsxs("span",{className:"blnkspn",children:[e.jsx("p",{children:"Over 200+ Tips"})," ",e.jsx(u,{className:"blinkcls",animationData:A})]})]}),e.jsxs("span",{className:"herbtnspn",children:[e.jsxs("a",{href:"/vip",children:[" ",e.jsxs("button",{className:"herbtn",children:[e.jsx("span",{children:e.jsx("img",{src:E})})," JOIN VIP"]})]}),e.jsxs("a",{target:"_blank",href:"https://t.me/+Oni7J8ZYh3g1MzFk",children:[" ",e.jsxs("button",{className:"herbtn2",children:[e.jsx("span",{children:e.jsx(f,{sx:{height:"18px",marginBottom:"-4.6px"}})}),"Telegram Channel"]})]})]})]}),e.jsx("div",{children:e.jsx("img",{className:"regimg",src:R})})]})}),V=a=>{const[t,i]=n.useState();return n.useEffect(()=>{c.get("http://127.0.0.1:8000/api/botd",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then(s=>{console.log(s.data.betoftheday),i(s.data.betoftheday)})},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"betofday",children:[e.jsx("span",{children:e.jsx("h5",{className:"home-sub",children:" BET OF THE DAY"})}),e.jsx(g,{component:k,children:e.jsxs(b,{sx:{minWidth:300},size:"small","aria-label":"a dense table",children:[e.jsx(y,{children:e.jsxs(h,{children:[e.jsx(r,{children:"Date"}),e.jsx(r,{align:"right",children:"Game"}),e.jsx(r,{align:"right",children:"Prediction"}),e.jsx(r,{align:"right",children:"Odd"})]})}),e.jsx(v,{children:t==null?void 0:t.map(s=>e.jsxs(h,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(r,{component:"th",scope:"row",children:e.jsx("p",{children:new Date(s.time).toDateString()})}),e.jsx(r,{align:"right",children:s.match}),e.jsx(r,{align:"right",children:s.category__category_name}),e.jsx(r,{align:"right",children:s.odd})]},s.id))})]})})]})})},q=a=>(N(),e.jsx(e.Fragment,{children:e.jsx("a",{href:"/free-predictions",children:e.jsxs("div",{className:"tipcatbox",children:[e.jsx("span",{children:e.jsx("strong",{children:e.jsx("p",{children:"FREE!"})})}),e.jsx("h2",{children:a.name})]})})})),G=a=>{const[t,i]=n.useState([]);return n.useEffect(()=>{c.get("http://127.0.0.1:8000/api/freecat",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then(s=>{i(s.data.categories),console.log(s.data.categories)})},[]),e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx("h5",{className:"home-sub",children:" CATEGORIES"})}),e.jsx("span",{className:"freebox",children:t==null?void 0:t.map(s=>e.jsx(q,{name:s.category_name},s.id))})]})},U=a=>e.jsx("div",{className:"newsbanner",children:e.jsx("a",{href:"mailto:admin@samgreentips.com",children:e.jsx("button",{className:"btn1",children:e.jsx("h3",{children:"Place Your Adverts Here"})})})});var d={},Y=j;Object.defineProperty(d,"__esModule",{value:!0});var p=d.default=void 0,J=Y(x()),W=e,Z=(0,J.default)((0,W.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");p=d.default=Z;var o={},K=j;Object.defineProperty(o,"__esModule",{value:!0});var m=o.default=void 0,Q=K(x()),X=e,ee=(0,Q.default)((0,X.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");m=o.default=ee;const se=a=>e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:e.jsx("p",{children:new Date(a.day).toDateString()})}),e.jsx("span",{children:a.status?e.jsx(m,{sx:{color:"green",fontSize:"50px"}}):e.jsx(p,{sx:{color:"red",fontSize:"50px"}})})]}),ae=a=>{const[t,i]=n.useState(),{scrollRef:s}=T();return n.useEffect(()=>{c.get("http://127.0.0.1:8000/api/results",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then(l=>{console.log(l.data.results),i(l.data.results)})},[]),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("span",{children:e.jsx("h5",{className:"home-sub",children:"RECENT VIP RESULTS"})}),e.jsx("span",{children:e.jsx("ul",{className:"recvip",ref:s,style:{display:"flex",overflow:"scroll",scrollSnapType:"x mandatory"},children:t?t.map(l=>e.jsx("li",{children:e.jsx(se,{id:0,day:l.day,status:l.status})},l.id)):e.jsx("h1",{children:"Match Unavailable"})})})]})})},ne=()=>{n.useEffect(()=>{S.init({duration:800})},[]);const a=n.useRef(null);return n.useEffect(()=>{console.log(a.current)},[]),e.jsx("div",{"data-aos":"fade-up",children:e.jsxs(_.Scrollbar,{className:"custom-class",onScroll:console.log,alwaysShowTracks:!0,children:[e.jsx(L,{}),e.jsx(C,{}),e.jsx(V,{}),e.jsx(ae,{}),e.jsx(G,{}),e.jsx(U,{})]})})};export{ne as default};
