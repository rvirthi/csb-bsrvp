(this["webpackJsonpfirst-react-calc"]=this["webpackJsonpfirst-react-calc"]||[]).push([[0],{11:function(n,e,t){},24:function(n,e,t){},25:function(n,e,t){},26:function(n,e,t){},27:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t.n(r),u=t(4),a=t.n(u),s=t(1),i=t(6),m=(t(11),t(0)),o=function(n){var e=n.children;return Object(m.jsx)("div",{className:"wrapper",children:e})},l=t(5),j=(t(24),function(n){var e=n.value;return Object(m.jsx)(l.Textfit,{className:"screen",mode:"single",max:70,children:e})}),b=(t(25),function(n){var e=n.children;return Object(m.jsx)("div",{className:"buttonBox",children:e})}),f=(t(26),function(n){var e=n.className,t=n.value,r=n.onClick;return Object(m.jsx)("button",{className:e,onClick:r,children:t})}),O=[["C","+-","%","/"],[7,8,9,"X"],[4,5,6,"-"],[1,2,3,"+"],[0,".","="]],d=function(n){return String(n).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,"$1 ")},g=function(n){return n.toString().replace(/\s/g,"")},v=function(){var n=Object(r.useState)({sign:"",num:0,res:0}),e=Object(i.a)(n,2),t=e[0],c=e[1],u=function(n){n.preventDefault();var e=n.target.innerHTML;g(t.num).length<16&&c(Object(s.a)(Object(s.a)({},t),{},{num:0===t.num&&"0"===e?"0":g(t.num)%1===0?d(Number(g(t.num+e))):d(t.num+e),res:t.sign?t.res:0}))},a=function(n){n.preventDefault();var e=n.target.innerHTML;c(Object(s.a)(Object(s.a)({},t),{},{num:t.num.toString().includes(".")?t.num:t.num+e}))},l=function(n){n.preventDefault();var e=n.target.innerHTML;c(Object(s.a)(Object(s.a)({},t),{},{sign:e,res:!t.res&&t.num?t.num:t.res,num:0}))},v=function(){if(t.sign&&t.num){c(Object(s.a)(Object(s.a)({},t),{},{res:"0"===t.num&&"/"===t.sign?"Can't divide with 0":d((n=Number(g(t.res)),e=Number(g(t.num)),r=t.sign,"+"===r?n+e:"-"===r?n-e:"X"===r?n*e:n/e)),sign:"",num:0}))}var n,e,r},p=function(){c(Object(s.a)(Object(s.a)({},t),{},{num:t.num?d(-1*g(t.num)):0,res:t.res?d(-1*g(t.res)):0,sign:""}))},h=function(){var n=t.num?parseFloat(g(t.num)):0,e=t.res?parseFloat(g(t.res)):0;c(Object(s.a)(Object(s.a)({},t),{},{num:n/=Math.pow(100,1),res:e/=Math.pow(100,1),sign:""}))},x=function(){c(Object(s.a)(Object(s.a)({},t),{},{sign:"",num:0,res:0}))};return Object(m.jsxs)(o,{children:[Object(m.jsx)(j,{value:t.num?t.num:t.res}),Object(m.jsx)(b,{children:O.flat().map((function(n,e){return Object(m.jsx)(f,{className:"="===n?"equals":"",value:n,onClick:"C"===n?x:"+-"===n?p:"%"===n?h:"="===n?v:"/"===n||"X"===n||"-"===n||"+"===n?l:"."===n?a:u},e)}))})]})};t(27);a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.97d68e31.chunk.js.map