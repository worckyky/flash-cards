(this["webpackJsonpflash-cards"]=this["webpackJsonpflash-cards"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},14:function(e,n,t){},27:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),r=t.n(a),s=t(19),o=t.n(s),j=(t(27),t(7)),i=t(2),u=function(){return Object(c.jsx)("div",{children:"Login"})},l=function(){return Object(c.jsxs)("div",{children:["LoginContainer",Object(c.jsx)(u,{})]})},b=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(l,{})})},d=function(){return Object(c.jsx)("div",{children:"Page 404 not found"})},O=function(){return Object(c.jsx)("div",{children:"RegistrationPage"})},h=function(){return Object(c.jsx)("div",{children:"Profile"})},x=function(){return Object(c.jsx)("div",{children:"Password Recovery"})},p=function(){return Object(c.jsx)("div",{children:"New Password Entry"})},f=t(4),v=t(3),g=t(8),m=t.n(g),C=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,r=e.onEnter,s=e.error,o=(e.className,e.spanClassName),j=e.placeholder,i=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","placeholder"]),u=("".concat(m.a.error," ").concat(o||""),"".concat(s?m.a.formFieldError:m.a.formField));return Object(c.jsxs)("div",{className:m.a.formGroup,children:[Object(c.jsx)("input",Object(f.a)({id:"lineInput",placeholder:"Name",type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&r&&r()},className:u},i)),Object(c.jsx)("label",{className:m.a.formLabel,htmlFor:"lineInput",children:j})]})},N=t(14),y=t.n(N),k=function(e){var n=e.red,t=e.className,a=Object(v.a)(e,["red","className"]),r="".concat(t," ").concat(n?y.a.red:y.a.btn);return Object(c.jsx)("button",Object(f.a)({className:r},a))},P=t(10),w=t.n(P),F=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),s=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(w.a.checkbox," ").concat(a||"");return Object(c.jsxs)("label",{className:o,children:[Object(c.jsx)("input",Object(f.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)}},s)),Object(c.jsx)("span",{className:w.a.check}),r&&Object(c.jsx)("span",{className:w.a.spanClassName,children:r})]})},E=t(21),T=t(11),L=t.n(T),B=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,r=e.spanProps,s=Object(v.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(a.useState)(!1),j=Object(E.a)(o,2),i=j[0],u=j[1],l=r||{},b=l.children,d=l.onDoubleClick,O=l.className,h=Object(v.a)(l,["children","onDoubleClick","className"]),x="".concat(L.a.EditableSpan," ").concat(O);return Object(c.jsx)("div",{className:L.a.spanContainer,children:i?Object(c.jsx)(C,Object(f.a)({autoFocus:!0,onBlur:function(e){u(!1),n&&n(e)},onEnter:function(){u(!1),t&&t()}},s)):Object(c.jsxs)("div",{className:L.a.spanWrapper,children:[Object(c.jsx)("span",Object(f.a)(Object(f.a)({onDoubleClick:function(e){u(!0),d&&d(e)},className:x},h),{},{children:b||s.value})),Object(c.jsx)("sup",{children:s.affires})]})})},D=function(e){var n=e.options,t=e.onChange,a=e.onChangeOption,r=e.value,s=Object(v.a)(e,["options","onChange","onChangeOption","value"]),o=n?n.map((function(e,n){return Object(c.jsx)("option",{value:e,selected:e===r,children:e},n)})):[];return Object(c.jsx)("div",{children:Object(c.jsx)("select",Object(f.a)(Object(f.a)({onChange:function(e){var n=e.currentTarget.value;t&&t(e),a&&a(n)}},s),{},{children:o}))})},I=function(e){e.type;var n=e.name,t=e.options,a=e.value,r=e.onChange,s=e.onChangeOption,o=(Object(v.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var n=e.currentTarget.value;r&&r(e),s&&s(n)}),j=t?t.map((function(e,t){return Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",onChange:o,name:n,value:e,checked:a===e}),Object(c.jsx)("span",{children:e})]},n+"-"+t)})):[];return Object(c.jsx)(c.Fragment,{children:j})},S=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{}),Object(c.jsx)(k,{children:"test button"}),Object(c.jsx)(F,{}),Object(c.jsx)(B,{value:"editable span test"}),Object(c.jsx)(D,{options:["1","2","3"]}),Object(c.jsx)(I,{options:["a","b","c"],value:"b"})]})},K="/login",R="/registration",J="/profile",M="/password-recovery",G="/new-password-entry",H="/component-test-rack",W=function(){return Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{path:K,exact:!0,render:function(){return Object(c.jsx)(b,{})}}),Object(c.jsx)(i.a,{path:R,exact:!0,render:function(){return Object(c.jsx)(O,{})}}),Object(c.jsx)(i.a,{path:J,exact:!0,render:function(){return Object(c.jsx)(h,{})}}),Object(c.jsx)(i.a,{path:M,exact:!0,render:function(){return Object(c.jsx)(x,{})}}),Object(c.jsx)(i.a,{path:G,exact:!0,render:function(){return Object(c.jsx)(p,{})}}),Object(c.jsx)(i.a,{path:H,exact:!0,render:function(){return Object(c.jsx)(S,{})}}),Object(c.jsx)(i.a,{path:"/*",render:function(){return Object(c.jsx)(d,{})}})]})},q=function(){return Object(c.jsxs)("div",{children:["Header",Object(c.jsx)(j.b,{to:K,children:"Login"}),Object(c.jsx)(j.b,{to:R,children:"Registration"}),Object(c.jsx)(j.b,{to:J,children:"Profile"}),Object(c.jsx)(j.b,{to:M,children:"Password recovery"}),Object(c.jsx)(j.b,{to:G,children:"New password entry"}),Object(c.jsx)(j.b,{to:H,children:"Component test rack"})]})},z=function(){return Object(c.jsxs)("div",{children:["Main",Object(c.jsx)(q,{}),Object(c.jsx)(W,{})]})},A=function(){return Object(c.jsx)(j.a,{children:Object(c.jsx)("div",{children:Object(c.jsx)(z,{})})})},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),Q()},8:function(e,n,t){}},[[33,1,2]]]);
//# sourceMappingURL=main.5546c277.chunk.js.map