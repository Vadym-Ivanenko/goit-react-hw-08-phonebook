"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[450],{2450:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,o,s,l,c,d,u,x,h,p,f,g=t(2791),b=t(9439),m=t(168),Z=t(5867),w=Z.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),v=Z.ZP.label(a||(a=(0,m.Z)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1;\n  color: rgba(255, 255, 255, 1);\n"]))),j=Z.ZP.input(i||(i=(0,m.Z)(["\n  margin-bottom: 10px;\n  border-radius: 3px;\n  height: 22px;\n  padding: 0 10px;\n  border: none;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 0.8;\n"]))),z=Z.ZP.button(o||(o=(0,m.Z)(["\n  width: 150px;\n  height: 30px;\n  margin: 0 auto 30px auto;\n  cursor: pointer;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 0.8;\n  color: rgba(255, 255, 255, 1);\n\n  background-color: #0151012e;\n  border: 2px solid rgba(255, 255, 255, 1);\n  border-radius: 5px;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    box-shadow: -2px -1px 24px 1px rgba(255, 255, 255, 1);\n  }\n"]))),y=t(9434),C=t(6916),P=function(n){return n.contacts.contacts.items},k=function(n){return n.contacts.filters},A=(0,C.P1)([P,k],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),_=t(5984),F=t(3634),I=t(184),L=function(){var n=(0,g.useState)(""),e=(0,b.Z)(n,2),t=e[0],r=e[1],a=(0,g.useState)(""),i=(0,b.Z)(a,2),o=i[0],s=i[1],l=(0,y.I0)(),c=(0,y.v9)(P),d=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a);break;default:return}},u=function(n){c.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(t," is already in contacts")):l((0,F.uK)(n))};return(0,I.jsxs)(w,{onSubmit:function(n){n.preventDefault();var e={id:(0,_.x0)(),name:t,number:o};u(e),r(""),s("")},children:[(0,I.jsx)(v,{for:"user_name",children:"Name"}),(0,I.jsx)(j,{id:"user_name",type:"text",name:"name",value:t,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,I.jsx)(v,{for:"user_tel",children:"Number"}),(0,I.jsx)(j,{id:"user_tel",type:"tel",name:"number",value:o,onChange:d,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,I.jsx)(z,{type:"submit",children:"Add Contact"})]})},N=t(1538),S=Z.ZP.form(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),q=Z.ZP.label(l||(l=(0,m.Z)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1;\n  color: rgba(255, 255, 255, 1);\n"]))),B=Z.ZP.input(c||(c=(0,m.Z)(["\n  margin-bottom: 10px;\n  border-radius: 3px;\n  height: 22px;\n  padding: 0 10px;\n  border: none;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 0.8;\n"]))),D=function(){var n=(0,y.I0)(),e=(0,y.v9)(k);return(0,I.jsxs)(S,{children:[(0,I.jsx)(q,{for:"filter",children:"Find contacts by name"}),(0,I.jsx)(B,{id:"filter",type:"text",name:"filter",value:e,onChange:function(e){return n((0,N.xO)(e.currentTarget.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},J=Z.ZP.ul(d||(d=(0,m.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),K=Z.ZP.li(u||(u=(0,m.Z)(["\n  width: 100%;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 0.8;\n"]))),M=Z.ZP.button(x||(x=(0,m.Z)(["\n  text-align: center;\n  width: 70px;\n  height: 20px;\n\n  cursor: pointer;\n\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 0.8;\n  color: rgba(255, 255, 255, 1);\n\n  background-color: #0151012e;\n  border: 2px solid rgba(255, 255, 255, 1);\n  border-radius: 5px;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    box-shadow: -2px -1px 24px 1px rgba(255, 255, 255, 1);\n  }\n"]))),$=function(){var n=(0,y.I0)(),e=(0,y.v9)(A);return(0,I.jsx)(J,{children:e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,I.jsxs)(K,{children:[r," : ",a,(0,I.jsx)(M,{type:"button",onClick:function(){return n((0,F.GK)(t))},children:"Delete"})]},t)}))})},E=Z.ZP.div(h||(h=(0,m.Z)(["\n  background-color: #014101a8;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  margin: 10vw auto 0 auto;\n  width: 300px;\n  height: 100%;\n\n  border-radius: 10px;\n  box-shadow: 5px 11px 18px -10px rgba(97, 165, 255, 0.88);\n"]))),G=Z.ZP.h1(p||(p=(0,m.Z)(["\n  margin: 0 0 15px 0;\n  text-align: center;\n  font-size: 26px;\n  font-weight: 600;\n  line-height: 1;\n  color: #ffbaba;\n"]))),O=Z.ZP.h2(f||(f=(0,m.Z)(["\n  margin: 0 0 15px 0;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 1;\n  color: #ffbaba;\n"]))),T=function(){var n=(0,y.I0)(),e=(0,y.v9)(P);return(0,g.useEffect)((function(){n((0,F.yF)())}),[n]),(0,I.jsxs)(E,{children:[(0,I.jsx)(G,{children:"Phonebook"}),(0,I.jsx)(L,{}),(0,I.jsx)(O,{children:"Contacts"}),e.length>0&&(0,I.jsx)(D,{}),e.length>0&&(0,I.jsx)($,{})]})}}}]);
//# sourceMappingURL=450.315baeed.chunk.js.map