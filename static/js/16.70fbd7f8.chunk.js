(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[16],{436:function(e,a,n){"use strict";var t=n(355),l=n(0),r=n.n(l),c=n(354),o=n(356),u=n(455),i=n(186);a.a=function(e){var a=e.icon?r.a.createElement(c.a,null,e.icon):null,n=e.endIcon?r.a.createElement(u.a,null,r.a.createElement(i.a,{size:"small",onClick:e.onClick},e.endIcon)):null;return r.a.createElement(t.a,{dense:!0,button:!0,selected:e.selected,onClick:e.onClick},a,r.a.createElement(o.a,{primary:e.title}),n)}},443:function(e,a,n){"use strict";var t=n(18),l=n(0),r=n.n(l),c=n(423),o=n(129),u=n(356),i=n(355),m=n(354),d=n(445),s=n.n(d),E=n(487);var v=function(e){var a=e.label,n=(e.value,e.variant),t=e.checked,l=e.onClick,c="check"===n?r.a.createElement(E.a,{size:"small",checked:t,icon:r.a.createElement(s.a,{style:{opacity:0}}),checkedIcon:r.a.createElement(s.a,null)}):r.a.createElement(E.a,{checked:t});return r.a.createElement(i.a,{dense:!0,button:!0,onClick:l},r.a.createElement(m.a,null,c),r.a.createElement(u.a,{primary:a}))};a.a=function(e){var a=e.variant,n=e.onLoad,u=e.fromModelToProps,i=e.initialValue,m=void 0===i?"":i,d=e.onChange,s=Object(l.useState)(m),E=Object(t.a)(s,2),f=E[0],k=E[1];return r.a.createElement(c.a,null,r.a.createElement(o.a,{renderLoadMore:null,renderItem:function(e){var n=u(e);return r.a.createElement(v,Object.assign({},n,{variant:a,checked:f===n.value,onClick:function(){k(n.value),d&&d(n)}}))},onLoad:n}))}},484:function(e,a,n){"use strict";var t=n(0),l=n.n(t),r=n(355),c=n(459),o=n(434),u=n(356),i=n(455),m=n(445),d=n.n(m);a.a=function(e){var a=e.fullName,n=e.email,t=e.avatarSrc,m=e.selected,s=void 0!==m&&m,E=e.onClick,v=l.a.createElement(i.a,null,l.a.createElement(d.a,null)),f=l.a.createElement(c.a,null,l.a.createElement(o.a,{src:t})),k=l.a.createElement(u.a,{primary:a,secondary:n}),h=l.a.createElement(l.a.Fragment,null,f,k,s?v:null);return Boolean(E)?l.a.createElement(r.a,{dense:!0,button:!0},h):l.a.createElement(r.a,{dense:!0},h)}},490:function(e,a,n){"use strict";var t=n(0),l=n.n(t),r=n(9),c=(n(16),n(7),"/sign-out");l.a.lazy((function(){return n.e(59).then(n.bind(null,521))}));var o=n(500),u=n.n(o);a.a=function(){return l.a.createElement(r.a,{title:"Sign out",to:c,icon:u.a})}},536:function(e,a,n){"use strict";n.r(a);var t=n(18),l=n(0),r=n.n(l),c=n(423),o=n(355),u=n(459),i=n(356),m=n(425),d=n(502),s=n(9),E=n(115),v=n(466),f=n.n(v);var k=function(){return r.a.createElement(s.a,{title:"Your channel",to:"".concat(E.a,"/user"),icon:f.a})},h=n(119),p=n(497),b=n.n(p);var g=function(){return r.a.createElement(s.a,{title:"Paid memberships",to:h.a,icon:b.a})},C=n(120),y=n(498),O=n.n(y);var B=function(){return r.a.createElement(s.a,{title:"YonTube Studio",to:C.a,icon:O.a})},j=n(436),w=n(499),x=n.n(w),T=n(452),I=n.n(T);var L=function(e){var a=e.onClick;return r.a.createElement(j.a,{title:"Switch account",icon:r.a.createElement(x.a,null),endIcon:r.a.createElement(I.a,null),onClick:a})},S=n(490),N=n(482),D=n.n(N),M=n(95);var P=function(e){var a=e.onClick,n=Object(l.useContext)(M.a),t="dark"===(null===n||void 0===n?void 0:n.theme.palette.type)?"On":"Off";return r.a.createElement(j.a,{title:"Dark theme: ".concat(t),icon:r.a.createElement(D.a,null),endIcon:r.a.createElement(I.a,null),onClick:a})},Y=n(138);var z=function(e){var a,n=e.onClick,t=Object(l.useContext)(Y.a),c=null===t||void 0===t?void 0:null===(a=t.location)||void 0===a?void 0:a.label;return r.a.createElement(j.a,{title:"Location: ".concat(c),endIcon:r.a.createElement(I.a,null),onClick:n})},A=n(154),R=n(121),V=n(483),F=n.n(V);var J=function(){return r.a.createElement(s.a,{title:"Your data in YonTube",to:R.a,icon:F.a})},U=n(155),K=n(156),_=n(149),q=n.n(_);var G=function(){return r.a.createElement(j.a,{title:"Keyboard shortcuts",icon:r.a.createElement(q.a,null),endIcon:r.a.createElement(I.a,null)})},H=n(139);var Q=function(e){var a=e.onClick,n=Object(l.useContext)(H.a),t=(null===n||void 0===n?void 0:n.enabled)?"On":"Off";return r.a.createElement(j.a,{title:"Restricted mode: ".concat(t),endIcon:r.a.createElement(I.a,null),onClick:a})},W=n(467),X=n.n(W),Z=n(137);var $=function(e){var a,n=e.onClick,t=Object(l.useContext)(Z.a),c=null===t||void 0===t?void 0:null===(a=t.language)||void 0===a?void 0:a.label;return r.a.createElement(j.a,{title:"Language: ".concat(c),icon:r.a.createElement(X.a,null),endIcon:r.a.createElement(I.a,null),onClick:n})},ee=n(484),ae=n(130),ne=n(443),te=n(38),le=n.n(te),re=function(){return le.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{label:"USA",code:"en"},{label:"\u0420\u043e\u0441\u0441\u0438\u044f",code:"ru"}]);case 1:case"end":return e.stop()}}))};var ce=function(){var e=Object(l.useContext)(Y.a);return r.a.createElement(ne.a,{variant:"check",initialValue:null===e||void 0===e?void 0:e.location.code,onLoad:re,fromModelToProps:function(e){return{label:e.label,value:e.code}},onChange:function(a){return null===e||void 0===e?void 0:e.switchLocation({label:a.label,code:a.value})}})};var oe=function(e){var a=e.onBack;return r.a.createElement("div",null,r.a.createElement(ae.a,{title:"Choose your location",onBack:a}),r.a.createElement(ce,null))},ue=function(){return le.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{label:"English",code:"en"},{label:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",code:"ru"}]);case 1:case"end":return e.stop()}}))};var ie=function(){var e=Object(l.useContext)(Z.a);return r.a.createElement(ne.a,{variant:"check",initialValue:null===e||void 0===e?void 0:e.language.code,onLoad:ue,fromModelToProps:function(e){return{label:e.label,value:e.code}},onChange:function(a){return null===e||void 0===e?void 0:e.switchLanguage({label:a.label,code:a.value})}})};var me=function(e){var a=e.onBack;return r.a.createElement("div",null,r.a.createElement(ae.a,{title:"Choose your language",onBack:a}),r.a.createElement(ie,null))},de=n(69),se=n(112),Ee=n(89),ve=Object(de.a)((function(e){return Object(se.a)({root:{padding:e.spacing(3)}})}));var fe=function(e){var a=e.paragraphs,n=ve();return r.a.createElement("div",{className:n.root},a.map((function(e,a){return r.a.createElement(Ee.a,{component:"p",gutterBottom:!0,key:a},e)})))},ke=n(60),he=n(354),pe=n(455),be=n(501);var ge=function(e){var a=e.title,n=e.icon,t=Object(ke.a)(e,["title","icon"]),l=n?r.a.createElement(he.a,null,n):null;return r.a.createElement(o.a,{dense:!0,button:!0,component:"label",htmlFor:"dark-mode-switch"},l,r.a.createElement(i.a,{primary:a}),r.a.createElement(pe.a,null,r.a.createElement(be.a,Object.assign({id:"dark-mode-switch"},t))))};var Ce=function(){var e=Object(l.useContext)(H.a);return r.a.createElement(ge,{title:"Restricted mode",icon:r.a.createElement(F.a,null),checked:null===e||void 0===e?void 0:e.enabled,onChange:function(a,n){return null===e||void 0===e?void 0:e.switchEnabled(n)}})};var ye=function(e){var a=e.onBack;return r.a.createElement("div",null,r.a.createElement(ae.a,{title:"Restricted mode",onBack:a}),r.a.createElement(fe,{paragraphs:["This helps hide potentially mature videos. No filter is 100% accurate.","This setting only applies to this browser."]}),r.a.createElement(c.a,null,r.a.createElement(Ce,null)))};var Oe=function(){var e=Object(l.useContext)(M.a),a="dark"===(null===e||void 0===e?void 0:e.theme.palette.type);return r.a.createElement(ge,{title:"Dark Theme",icon:r.a.createElement(D.a,null),checked:a,onChange:function(a,n){null===e||void 0===e||e.switchMode(n?"dark":"light")}})};var Be=function(e){var a=e.onBack;return r.a.createElement("div",null,r.a.createElement(ae.a,{title:"Dark Theme",onBack:a}),r.a.createElement(fe,{paragraphs:["Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!","Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!","Your Dark theme setting will apply to this browser only."]}),r.a.createElement(c.a,null,r.a.createElement(Oe,null)))},je=n(59),we=n(34),xe=n.n(we),Te=function(){return le.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.a.awrap(Array(3).fill(null).map((function(e,a){return{id:a.toString(),avatarUrl:xe.a.image.avatar(),fullName:"".concat(xe.a.name.firstName()," ").concat(xe.a.name.lastName()),email:xe.a.internet.email()}})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},Ie=r.a.lazy((function(){return Promise.all([n.e(8),n.e(22)]).then(n.bind(null,539))}));var Le=function(){return r.a.createElement(l.Suspense,{fallback:r.a.createElement(je.a,null)},r.a.createElement(Ie,{onLoad:Te}))};var Se=function(e){var a=e.onBack;return r.a.createElement("div",null,r.a.createElement(ae.a,{title:"Accounts",onBack:a}),r.a.createElement(Le,null))};a.default=function(){var e=r.a.createElement(c.a,null,r.a.createElement(k,null),r.a.createElement(g,null),r.a.createElement(B,null),r.a.createElement(L,{onClick:function(){return O(E)}}),r.a.createElement(S.a,null)),a=r.a.createElement(c.a,null,r.a.createElement(P,{onClick:function(){return O(v)}}),r.a.createElement($,{onClick:function(){return O(h)}}),r.a.createElement(A.a,null),r.a.createElement(J,null),r.a.createElement(U.a,null),r.a.createElement(K.a,null),r.a.createElement(G,null)),n=r.a.createElement(c.a,null,r.a.createElement(ee.a,{fullName:"Slava Belaev",email:"slav@belaev.pro"}),r.a.createElement(o.a,{dense:!0,color:"secondary",component:d.a,target:"_blank",href:"https://myaccount.google.com"},r.a.createElement(u.a,null),r.a.createElement(i.a,{primary:"Manage your account"}))),l=r.a.createElement(c.a,null,r.a.createElement(z,{onClick:function(){return O(p)}}),r.a.createElement(Q,{onClick:function(){return O(f)}})),s=r.a.createElement("div",null,n,r.a.createElement(m.a,null),e,r.a.createElement(m.a,null),a,r.a.createElement(m.a,null),l),E=r.a.createElement(Se,{onBack:function(){return O(s)}}),v=r.a.createElement(Be,{onBack:function(){return O(s)}}),f=r.a.createElement(ye,{onBack:function(){return O(s)}}),h=r.a.createElement(me,{onBack:function(){return O(s)}}),p=r.a.createElement(oe,{onBack:function(){return O(s)}}),b=r.a.useState(s),C=Object(t.a)(b,2),y=C[0],O=C[1];return y}}}]);
//# sourceMappingURL=16.70fbd7f8.chunk.js.map