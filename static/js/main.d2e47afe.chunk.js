(this["webpackJsonpdesign-challenge-generator"]=this["webpackJsonpdesign-challenge-generator"]||[]).push([[0],{66:function(e,t,a){e.exports=a(82)},71:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},73:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=(a(71),a(41)),i=a(55),s=a(25),m=(a(72),a(73),["robot","clock","book","laptop","calendar","elevator","escalator","area","business","suitcase","company","home","job","program","app","web app","mobile app","room","course","airplane","bathroom","sport","camp","coin","drawer","eraser","ruler","flag","fork","furniture","handbag","monitor","passport","restaurant","toy","tower","toothpaste","vehicle","pair of glasses","vending machine","water bottle"]),d=["computer science students","students","teachers","the old","families","children","blind people","people with disabilities","dancers"],p=a(49),u=a(38),g=a(31),f=a(121),h=a(126),b=a(127),E=a(124);function v(){var e=Object(p.a)(["\n    height: 6vh;\n    background-color: #fffefb;\n    display: flex;\n    justify-content: flex-end;\n    color: #202020;\n    align-items: center;\n    padding: 5px 3rem 0 3rem;\n    font-weight: 700;\n    z-index: 10;\n    text-decoration: none;\n    top: auto;\n    bottom: 0;\n"]);return v=function(){return e},e}var y=Object(f.a)({root:{width:500},appBar:{top:"auto",bottom:0,boxShadow:"0 -10px 40px rgba(0,0,0,0.05)"}}),x=u.a.div(v()),w={backgroundColor:"#efeeee",boxShadow:"none",borderTop:"3px solid #3f50b5"};function S(){var e=y(),t=o.a.useState(0),a=Object(s.a)(t,2);a[0],a[1];return o.a.createElement(E.a,{position:"fixed",className:e.appBar},o.a.createElement(x,null,o.a.createElement(h.a,null,o.a.createElement(g.b,{exact:!0,to:"/",style:{padding:"20px 0"},activeStyle:w},o.a.createElement(b.a,{label:"Creativ \ud83d\udc69\u200d\ud83c\udfa8"})),o.a.createElement(g.b,{exact:!0,to:"/notes",style:{padding:"20px 0"},activeStyle:w},o.a.createElement(b.a,{label:"Notes \ud83d\udcdd"})))))}var j=a(21),O=a(132),k=a(133),C=a(54),M=a.n(C),N=a(128),B=a(131),z=a(129),I=a(130),J=Object(f.a)({root:{minWidth:275,width:"30%",margin:20,float:"left"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function W(e){var t=J(),a=(t.bullet,e.title),n=(e.index,e.note);return o.a.createElement(N.a,{className:t.root},o.a.createElement(z.a,null,o.a.createElement(I.a,{className:t.title,color:"textSecondary",gutterBottom:!0},a),o.a.createElement(I.a,{variant:"h5",component:"h2"},a),o.a.createElement(I.a,{className:t.pos,color:"textSecondary"},"adjective"),o.a.createElement(I.a,{variant:"body2",component:"p"},n)),o.a.createElement(B.a,null,o.a.createElement(O.a,{size:"small"},"Learn More")))}function F(e){var t=JSON.parse(window.localStorage.getItem("notes"));return o.a.createElement(h.a,{style:{padding:"2rem"}},o.a.createElement("h1",{style:{marginLeft:20}},"Notes"),t.map((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(W,{index:t,key:e.id,title:e.title,note:e.note}))})))}var T=Object(f.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"},"& > *":{margin:e.spacing(1)}},container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,marginBottom:e.spacing(1),height:"100%",backgroundColor:"#fafafa"},divider:{margin:e.spacing(2,0)}}})),A={fontSize:"3rem",fontWeight:"700"},D={justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",backgroundColor:"#efeeee",padding:"2rem 2rem",borderLeft:"5px solid #3f50b5",borderRadius:"5px"};var L=function(){var e=Object(n.useState)(JSON.parse(window.localStorage.getItem("notes"))||[]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=(T(),function(){E(m[Math.floor(Math.random()*m.length)].toUpperCase()),w(d[Math.floor(Math.random()*d.length)])}),p=function(e){e.preventDefault();var t={id:M()(),title:"Design a ".concat(b," for ").concat(x),note:B};r([].concat(Object(i.a)(a),[t])),console.log(a),z(""),l()};Object(n.useEffect)((function(){window.localStorage.setItem("notes",JSON.stringify(a))}));var u=Object(n.useState)(m[Math.floor(Math.random()*m.length)].toUpperCase()),f=Object(s.a)(u,2),b=f[0],E=f[1],v=Object(n.useState)(d[Math.floor(Math.random()*d.length)]),y=Object(s.a)(v,2),x=y[0],w=y[1],C=o.a.useState(""),N=Object(s.a)(C,2),B=N[0],z=N[1],I=function(e){z(e.target.value)};return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{exact:!0,path:"/notes",render:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,{notes:a}))}}),o.a.createElement(j.a,{exact:!0,path:"/",render:function(){return o.a.createElement(h.a,{style:{padding:"2rem"}},o.a.createElement("div",{style:D},o.a.createElement("p",{style:{color:"#666",fontSize:"2rem",lineHeight:"3rem"}},"Design a ",o.a.createElement("span",{style:Object(c.a)({},A,{color:"#ab003c"})}," ",b," "),"for",o.a.createElement("span",{style:Object(c.a)({},A,{color:"#2c387e"})}," ",x," ")),o.a.createElement("div",null,o.a.createElement(O.a,{variant:"contained",color:"primary",onClick:l,style:{top:"auto",marginBottom:0}},"Get another one"))),o.a.createElement("div",{style:D},o.a.createElement(k.a,{id:"filled-multiline-static",label:"Notes here...",multiline:!0,rows:15,fullWidth:!0,onChange:I,value:B,autoFocus:!0}),o.a.createElement("div",{style:{marginTop:20,textAlign:"left"}},o.a.createElement(O.a,{variant:"contained",color:"primary",onClick:p},"Save"))))}})),o.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.d2e47afe.chunk.js.map