(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),r=(n(13),n(8)),d=n(6),o=n(3),l=n(0),j=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(function(){var e=localStorage.getItem("mytodolist");return e?JSON.parse(e):[]}()),s=Object(o.a)(i,2),j=s[0],u=s[1],b=Object(c.useState)(""),m=Object(o.a)(b,2),f=m[0],O=m[1],h=Object(c.useState)(!1),x=Object(o.a)(h,2),g=x[0],v=x[1],p=function(){if(n)if(n&&g)u(j.map((function(e){return e.id===f?Object(d.a)(Object(d.a)({},e),{},{name:n}):e}))),a(""),O(null),v(!1);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(r.a)(j),[e])),a("")}else alert("plz fill the data")};return Object(c.useEffect)((function(){localStorage.setItem("mytodolist",JSON.stringify(j))}),[j]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main-div",children:Object(l.jsxs)("div",{className:"child-div",children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("img",{src:"../images/todo1.jpeg",alt:"todoLogo"}),Object(l.jsx)("figcaption",{children:"Add Your List Here"})]}),Object(l.jsxs)("div",{className:"addItems",children:[Object(l.jsx)("input",{type:"text",placeholder:"\u270d Add Item...",id:"myInput",className:"form-control",value:n,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){13===e.keyCode&&p()}}),g?Object(l.jsx)("i",{className:"far fa-edit add-btn",onClick:p,id:"myBtn"}):Object(l.jsx)("i",{className:"fa fa-plus add-btn",onClick:p,id:"myBtn"})]}),Object(l.jsx)("div",{className:"showItems",children:j.map((function(e){return Object(l.jsxs)("div",{className:"eachItem",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("div",{className:"todo-btn",children:[Object(l.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=j.find((function(t){return t.id===e}));a(t.name),O(e),v(!0)}(e.id)}}),Object(l.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=j.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(l.jsx)("div",{className:"showItems",children:Object(l.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:Object(l.jsx)("span",{children:" CHECK LIST"})})})]})})})},u=(n(15),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j,{})})}),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.cf30ed11.chunk.js.map