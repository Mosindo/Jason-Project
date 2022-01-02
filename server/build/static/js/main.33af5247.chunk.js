(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),s=n.n(r),i=n(14),o=n(43),j=n(4),l=n(37),d=n(9),m=n(192),b=n(183),u=n(185),f=n(190),O=n(186),h=n(189),p=n(191),x=n(193),g=n(91),v=n.n(g),w=n(92),C=n.n(w),y=n(180),k=n(2),S=Object(O.a)((function(e){return{Paper:{width:"auto",display:"flex",padding:"1em",justifyContent:"space-between",margin:"1em"},nameInput:{alignItems:"flex-start"}}})),A=function(e){var t=S();return Object(k.jsx)(h.a,{container:!0,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gutterbottom:!0,children:Object.entries(e.explorerList).map((function(n){var a=Object(d.a)(n,2),c=a[0],r=a[1];return Object(k.jsx)(h.a,{item:!0,md:4,wrap:"wrap",spacing:10,children:Object(k.jsxs)(p.a,{className:t.Paper,elevation:3,children:[Object(k.jsxs)(m.a,{children:[r.lastname," ",r.firstname]},c),Object(k.jsxs)(y.a,{children:[Object(k.jsx)(o.b,{to:"/update/".concat(r._id),children:Object(k.jsx)(x.a,{variant:"contained",color:"primary",size:"small",children:Object(k.jsx)(v.a,{fontSize:""})})}),Object(k.jsx)(x.a,{variant:"contained",onClick:function(){e.deleteExplorerFromTheList(r._id)},color:"error",size:"small",children:Object(k.jsx)(C.a,{fontSize:"small"})})]})]})})}))})},z=function(){return Object(k.jsx)("header",{children:Object(k.jsxs)("h1",{children:[Object(k.jsx)("img",{src:"https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png",alt:"Wild Code School logo"}),"Les Argonautes"]})})},D=function(){return Object(k.jsx)("footer",{className:"footer",children:Object(k.jsx)("p",{children:"R\xe9alis\xe9 par Jason en Anthest\xe9rion de l'an 515 avant JC"})})},I=n(33),N=n.n(I),E=n(93);n.n(E).a.config();var L=Object(O.a)({error:{color:"red"}}),P=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),s=Object(d.a)(r,2),i=s[0],o=s[1],O=Object(a.useState)({firstname:"",lastname:""}),h=Object(d.a)(O,2),p=h[0],x=h[1],g=L();Object(a.useEffect)((function(){N.a.get("https://jason-argo-app.herokuapp.com/api").then((function(e){c(e.data)}))}),[n]);var v=function(e){e.preventDefault(),x(Object(l.a)(Object(l.a)({},p),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(k.jsxs)("div",{children:[Object(k.jsx)(z,{}),Object(k.jsx)(m.a,{variant:"h4",children:"Ajouter un(e) Argonaute "}),Object(k.jsxs)("form",{class:"new-member-form",children:[Object(k.jsx)("label",{for:"name",children:"Nom de l'Argonaute"}),Object(k.jsx)(m.a,{hidden:i,className:g.error,children:"Dernier ajout refus\xe9, Argonaute d\xe9j\xe0 pr\xe9sent dans la liste"}),Object(k.jsxs)(b.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(k.jsx)(u.a,{id:"firstname",label:"Pr\xe9nom",variant:"outlined",name:"firstname",onChange:v,margin:"dense",value:p.firstname}),Object(k.jsx)(u.a,{id:"lastname",label:"Nom",variant:"outlined",name:"lastname",onChange:v,margin:"dense",value:p.lastname}),Object(k.jsx)(f.a,{variant:"contained",onClick:function(){return o(!0),N.a.post("https://jason-argo-app.herokuapp.com/api",{firstname:p.firstname,lastname:p.lastname}).catch((function(e){if(409===e.response.status)return o(!1)})),void x({firstname:"",lastname:""})},size:"large",margin:"dense",children:"Ajouter"})]})]}),Object(k.jsx)(A,{explorerList:n,handleChange:v,deleteExplorerFromTheList:function(e){N.a.delete("/".concat("https://jason-argo-app.herokuapp.com/api","/").concat(e)).then((function(){alert("Post deleted!")})).catch((function(e){console.log(e)}))}}),Object(k.jsx)(D,{})]})},F=function(){return Object(k.jsx)("div",{children:"404"})},J=function(){var e=Object(a.useState)({firstname:"",lastname:""}),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(d.a)(r,2),o=s[0],O=s[1],h=Object(i.g)("").id,p=Object(i.f)();Object(a.useEffect)((function(){N.a.get("".concat("https://jason-argo-app.herokuapp.com/api","/").concat(h)).then((function(e){O(e.data)}))}),[h]);var x=function(e){c(Object(l.a)(Object(l.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(z,{}),Object(k.jsxs)(b.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",m:20,children:[Object(k.jsx)(m.a,{children:"Modifier les information concernant ce bon Argonaute : ".concat(o.firstname,"\n                    ").concat(o.lastname)}),Object(k.jsx)(u.a,{type:"text",name:"firstname",placeholder:"Pr\xe9nom",onChange:x,margin:"dense"}),Object(k.jsx)(u.a,{type:"text",name:"lastname",placeholder:"Nom",onChange:x,margin:"dense"}),Object(k.jsxs)(b.a,{display:"flex",flexDirection:"row",children:[Object(k.jsx)(b.a,{m:2,children:Object(k.jsx)(f.a,{variant:"contained",onClick:function(){return p("/")},color:"warning",size:"small",children:"Retour"})}),Object(k.jsx)(b.a,{m:2,children:Object(k.jsx)(f.a,{variant:"contained",onClick:function(){return function(e){N.a.patch("".concat("https://jason-argo-app.herokuapp.com/api","/").concat(e),{_id:e,firstname:n.firstname,lastname:n.lastname}),p("/")}(h)},color:"primary",size:"small",children:"Modifier"})})]})]})]})};n(134);function _(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{path:"/",element:Object(k.jsx)(P,{})}),Object(k.jsx)(i.a,{path:"/update/:id",element:Object(k.jsx)(J,{})}),Object(k.jsx)(i.a,{path:"*",element:Object(k.jsx)(F,{})})]})})}var M=function(){return Object(k.jsx)(o.a,{children:Object(k.jsx)(_,{})})};s.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(M,{})}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.33af5247.chunk.js.map