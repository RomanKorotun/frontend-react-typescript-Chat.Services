"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[621],{1581:(e,s,a)=>{a.d(s,{A:()=>t});a(5043);const t=a.p+"static/media/sprite.4566ba6ad98ce5b34a2f7ec86d354c2c.svg"},1621:(e,s,a)=>{a.r(s),a.d(s,{default:()=>Oe});var t=a(5043),l=a(5749);const i="header_header__snQmP",n="header_useContainer__59eXp",r="header_btnLogout__-f1Ol",c="userMenu_userCard__azAGY",d="userMenu_img__QDdDL";var h=a(1226),m=a(579);const o=()=>{const{avatar:e,username:s}=(0,h.A)();return(0,m.jsxs)("div",{className:c,children:[e&&(0,m.jsx)("img",{src:e,alt:"avatar",className:d}),(0,m.jsx)("div",{children:s})]})};var _=a(3003),g=a(7580);const N=()=>{const e=(0,_.wA)();return(0,m.jsx)("header",{className:i,children:(0,m.jsxs)("div",{className:n,children:[(0,m.jsx)(o,{}),(0,m.jsx)("button",{className:r,onClick:()=>e((0,g.ri)()),children:"Logout"})]})})},x="chatsList_chatListCard__cOi0Y",u="chatsList_headerList__8XQvf",j="chatsList_btnAddChat__byVZO",C="chatsList_filterCard__ziK83",p="chatsList_inputFilter__w+yMx",v="chatsList_chatListTitle__b5p4V",f="chatsList_listItem__K1Kz3",b="chatsList_listItemActive__haX-8",A="chatsList_nameDateCard__WZ8CP",w="chatsList_namesCard__pXwsk",L="chatsList_img__AGf9X",S="chatsList_firstName__lg+om",P="chatsList_lastName__WH9ck",k="chatsList_message__JO6F-",D="chatsList_date__PF41z";var $=a(2963),E=a.n($);const y="modalAddChat_modalAddChat__kq62v",T="modalAddChat_inputCustom__Cf5Ir",M="modalAddChat_btnSubmit__x4uzJ",O="modalAddChat_label__vOrC1",F="modalAddChat_errMsg__GRwX4",I="modalAddChat_btnClose__TlnyW",q="modalAddChat_iconClose__HgOMl";var K=a(3892),R=a(1581),z=a(899);const V=z.Ik().shape({firstName:z.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:z.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required")});E().setAppElement("#root");const X=e=>{let{isOpen:s,onToggle:a}=e;const t=(0,_.wA)();return(0,m.jsx)(E(),{isOpen:s,onRequestClose:a,contentLabel:"Example Modal",className:y,children:(0,m.jsx)(K.l1,{initialValues:{firstName:"",lastName:""},validationSchema:V,onSubmit:(e,s)=>{t((0,g.S3)(e)),a()},children:(0,m.jsxs)(K.lV,{children:[(0,m.jsxs)("label",{className:O,children:[(0,m.jsx)(K.D0,{name:"firstName",placeholder:"firstName",className:T}),(0,m.jsx)(K.Kw,{component:"div",name:"firstName",className:F})]}),(0,m.jsxs)("label",{className:O,children:[(0,m.jsx)(K.D0,{name:"lastName",placeholder:"lastName",className:T}),(0,m.jsx)(K.Kw,{component:"div",name:"lastName",className:F})]}),(0,m.jsx)("button",{type:"submit",className:M,children:"Add chat"}),(0,m.jsx)("button",{className:I,onClick:a,children:(0,m.jsx)("svg",{className:q,width:20,height:20,children:(0,m.jsx)("use",{href:`${R.A}#close-icon`})})})]})})})},Y=()=>{const[e,s]=(0,t.useState)(""),[a,l]=(0,t.useState)(!1),{chats:i}=(0,h.A)(),n=(0,_.wA)(),r=()=>{l((e=>!e))},c=i.filter((s=>s.firstName.toLowerCase().includes(e.toLowerCase())||s.lastName.toLowerCase().includes(e.toLowerCase())));return(0,m.jsx)(m.Fragment,{children:i.length>0&&(0,m.jsxs)("div",{className:x,children:[(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("div",{className:v,children:"Chats"}),(0,m.jsx)("button",{className:j,onClick:r,children:"Add new chat"})]}),(0,m.jsx)("div",{className:C,children:(0,m.jsx)("input",{className:p,value:e,onChange:e=>s(e.target.value),placeholder:"Search or start new chat"})}),(0,m.jsx)("ul",{children:c.map((e=>{var s,a,t;const l=null===(s=e.messages[e.messages.length-1])||void 0===s?void 0:s.message,i=l&&l.split("").length>50,r=e.messages[e.messages.length-1];let c=null,d=null,h=null;if(null!==r&&void 0!==r&&r.date){const e=new Date(r.date);c=e.getDate(),d=e.toLocaleString("en-US",{month:"short"}),h=e.getFullYear()}return(0,m.jsxs)("li",{className:`${!0===e.isActive?b:f}`,onClick:()=>{n((0,g.SE)(e._id))},children:[(0,m.jsx)("img",{src:e.avatar,alt:"avatar",className:L}),(0,m.jsxs)("div",{className:A,children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:w,children:[(0,m.jsx)("span",{className:S,children:e.firstName}),(0,m.jsx)("span",{className:P,children:e.lastName})]}),e.messages.length>0&&i&&(0,m.jsxs)("p",{className:k,children:[null===(a=e.messages[e.messages.length-1])||void 0===a||null===(t=a.message)||void 0===t?void 0:t.slice(0,49),"\xa0..."]}),e.messages.length>0&&!i&&(0,m.jsx)("p",{className:k,children:e.messages[e.messages.length-1].message})]}),c&&d&&h&&(0,m.jsx)("div",{className:D,children:`${d} ${c}, ${h}`})]})]},e._id)})).reverse()}),(0,m.jsx)(X,{isOpen:a,onToggle:r})]})})},G="chatPage_containerChatPage__e82ec",J="chatPage_left__F+FhY",W="rightChatPage_right__nxKH4",B="rightChatPage_headerChat__9aEDl",Q="rightChatPage_nameChat__WZ11-",Z="rightChatPage_updateChat__sJ6Wi",H="rightChatPage_btnHeaderChat__u+Ind",U="rightChatPage_deleteIcon__SORqB",ee="rightChatPage_editIcon__1Jc6v",se="rightChatPage_img__DrtyC",ae="rightChatPage_firstName__0w7a4",te="rightChatPage_listMessage__zQnaV",le="rightChatPage_messageCardLeft__g-olZ",ie="rightChatPage_messageCardRight__zoM6r",ne="rightChatPage_messageDateWrapper__n60pG",re="rightChatPage_messageLeft__F39we",ce="rightChatPage_messageRight__GkBF6",de="rightChatPage_dateLeft__Ddzj7",he="rightChatPage_dateRight__Ay6GQ",me="rightChatPage_formWrapper__XnUcv",oe="rightChatPage_form__rk31S",_e="rightChatPage_input__eZeix",ge="rightChatPage_btn__4q1A7",Ne="rightChatPage_icon__EXkf2",xe="modalDeleteChat_modalDeleteChat__M6pNN",ue="modalDeleteChat_title__GiCaj",je="modalDeleteChat_btnCard__FfFLg",Ce="modalDeleteChat_btn__j37cI",pe="modalDeleteChat_btnClose__XDJcX",ve="modalDeleteChat_iconClose__lw1Ad";E().setAppElement("#root");const fe=e=>{let{id:s,isOpen:a,onToggle:t}=e;const l=(0,_.wA)();return(0,m.jsxs)(E(),{isOpen:a,onRequestClose:t,contentLabel:"Example Modal",className:xe,style:{overlay:{zIndex:1e3},content:{zIndex:1e3}},children:[(0,m.jsx)("div",{className:ue,children:"Are you sure you want to delete this chat?"}),(0,m.jsxs)("div",{className:je,children:[(0,m.jsx)("button",{className:Ce,onClick:()=>{l((0,g._e)(s)),t()},children:"Yes"}),(0,m.jsx)("button",{className:Ce,onClick:t,children:"No"}),(0,m.jsx)("button",{className:pe,children:(0,m.jsx)("svg",{width:20,height:20,className:ve,children:(0,m.jsx)("use",{href:`${R.A}#close-icon`})})})]})]})},be="modalEditChat_modalEditChat__lbIB4",Ae="modalEditChat_inputCustom__3+J4k",we="modalEditChat_btnSubmit__pJ6IB",Le="modalEditChat_label__SwxTE",Se="modalEditChat_errMsg__uBdKB",Pe="modalEditChat_btnClose__QZb5+",ke="modalEditChat_iconClose__m3iOM",De=/^(?!\s*$).+/,$e=z.Ik().shape({firstName:z.Yj().matches(De,"A space-only string!").min(2,"Too Short!").max(50,"Too Long!"),lastName:z.Yj().matches(De,"A space-only string!").min(2,"Too Short!").max(50,"Too Long!")});E().setAppElement("#root");const Ee=e=>{let{id:s,isOpen:a,onToggle:t,chat:l}=e;const i=(0,_.wA)();return(0,m.jsx)(E(),{isOpen:a,onRequestClose:t,contentLabel:"Example Modal",className:be,children:(0,m.jsx)(K.l1,{initialValues:{firstName:l.firstName||"",lastName:l.lastName||""},validationSchema:$e,onSubmit:(e,a)=>{""!==e.firstName&&""===e.lastName&&i((0,g.vK)({id:s,firstName:e.firstName})),""===e.firstName&&""!==e.lastName&&i((0,g.vK)({id:s,lastName:e.lastName})),""!==e.firstName&&""!==e.lastName&&i((0,g.vK)({id:s,firstName:e.firstName,lastName:e.lastName})),t()},children:(0,m.jsxs)(K.lV,{children:[(0,m.jsxs)("label",{className:Le,children:[(0,m.jsx)(K.D0,{name:"firstName",placeholder:"firstName",className:Ae}),(0,m.jsx)(K.Kw,{component:"div",name:"firstName",className:Se})]}),(0,m.jsxs)("label",{className:Le,children:[(0,m.jsx)(K.D0,{name:"lastName",placeholder:"lastName",className:Ae}),(0,m.jsx)(K.Kw,{component:"div",name:"lastName",className:Se})]}),(0,m.jsx)("button",{type:"submit",className:we,children:"Edit chat"}),(0,m.jsx)("button",{className:Pe,onClick:t,children:(0,m.jsx)("svg",{className:ke,width:20,height:20,children:(0,m.jsx)("use",{href:`${R.A}#close-icon`})})})]})})})},ye=()=>{const[e,s]=(0,t.useState)(!1),[a,l]=(0,t.useState)(!1),i=()=>{s((e=>!e))},n=()=>{l((e=>!e))},r=(0,_.wA)(),{chats:c}=(0,h.A)(),d=c.find((e=>!0===e.isActive));return(0,m.jsx)(m.Fragment,{children:d&&(0,m.jsxs)("div",{className:W,children:[(0,m.jsxs)("div",{className:B,children:[(0,m.jsxs)("div",{className:Q,children:[(0,m.jsx)("img",{src:d.avatar,alt:"avatar",className:se}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:ae,children:d.firstName}),(0,m.jsx)("span",{children:d.lastName})]})]}),(0,m.jsxs)("div",{className:Z,children:[(0,m.jsx)("button",{className:H,onClick:i,children:(0,m.jsx)("svg",{width:20,height:20,className:ee,children:(0,m.jsx)("use",{href:`${R.A}#edit-icon`})})}),(0,m.jsx)("button",{className:H,onClick:n,children:(0,m.jsx)("svg",{width:20,height:20,className:U,children:(0,m.jsx)("use",{href:`${R.A}#delete-icon`})})})]})]}),(0,m.jsx)("ul",{className:te,children:d.messages.map((e=>{let s;null!==e&&void 0!==e&&e.date&&(s=new Date(e.date));let a=null,t=null,l=null,i=null,n=null,r=null;s&&(a=s.getDate(),t=s.getMonth()+1,l=s.getFullYear(),i=s.getHours(),n=s.getMinutes(),r=s.getSeconds());const c=String(a).padStart(2,"0"),d=String(t).padStart(2,"0"),h=String(i).padStart(2,"0"),o=String(n).padStart(2,"0"),_=String(r).padStart(2,"0");return(0,m.jsxs)("li",{className:null!==e&&void 0!==e&&e.owner?le:ie,children:[(null===e||void 0===e?void 0:e.owner)&&(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:ne,children:[(0,m.jsx)("p",{className:re,children:e.message}),(0,m.jsx)("p",{className:de,children:`${c}/${d}/${l} ${h}:${o}:${_} AM`})]})}),!(null!==e&&void 0!==e&&e.owner)&&(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:ne,children:[(0,m.jsx)("p",{className:ce,children:e.message}),(0,m.jsx)("p",{className:he,children:`${c}/${d}/${l} ${h}:${o}:${_} AM`})]})})]},e._id)}))}),(0,m.jsx)(K.l1,{initialValues:{message:""},onSubmit:(e,s)=>{r((0,g.tj)({message:e.message,id:d._id})),s.resetForm()},children:(0,m.jsx)("div",{className:me,children:(0,m.jsxs)(K.lV,{className:oe,children:[(0,m.jsx)(K.D0,{name:"message",placeholder:"Type your message",className:_e}),(0,m.jsx)("button",{className:ge,children:(0,m.jsx)("svg",{width:25,height:25,className:Ne,children:(0,m.jsx)("use",{href:`${R.A}#arrow-icon`})})})]})})}),(0,m.jsx)(Ee,{isOpen:e,onToggle:i,id:d._id,chat:{firstName:d.firstName,lastName:d.lastName}}),(0,m.jsx)(fe,{isOpen:a,onToggle:n,id:d._id})]})})};var Te=a(8614);const Me=(0,l.Ay)("https://test-task-backend-reenbit.onrender.com"),Oe=()=>{const e=(0,_.wA)(),{chats:s}=(0,h.A)();return(0,t.useEffect)((()=>(Me.on("quoteResponse",(s=>{e((0,Te.V)(s))})),()=>{Me.off("quoteResponse")})),[e]),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:G,children:[(0,m.jsxs)("div",{className:J,children:[(0,m.jsx)(N,{}),(null===s||void 0===s?void 0:s.length)>0&&(0,m.jsx)(Y,{})]}),s.length>0&&(0,m.jsx)(ye,{})]})})}}}]);
//# sourceMappingURL=621.12e43a1f.chunk.js.map