(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{392:function(e,a,t){"use strict";t.r(a);var n=t(32),r=t(0),c=t.n(r),l=t(34),i=t.n(l),o=t(69),u=t(112),s=Object(o.a)((function(e){return Object(u.a)({root:{backgroundColor:e.palette.grey[800],borderRadius:e.shape.borderRadius}})}));var m=function(e){var a=e.width,t=e.height,n=s();return c.a.createElement("div",{className:n.root,style:{width:a,height:t}})},d=t(353),f=t(89),E=t(507),v=t.n(E),p=t(506),h=t.n(p),b=t(357),g=t(425),k=t(501),y=t(18),j=t(60),O=t(428),C=Object(o.a)((function(e){return Object(u.a)({collapse:{marginBottom:e.spacing(1)}})}));var x=function(e){var a=e.initialText,t=e.additionalText,n=Object(j.a)(e,["initialText","additionalText"]),r=C(),l=c.a.useState(!1),i=Object(y.a)(l,2),o=i[0],u=i[1],s=function(e){return c.a.createElement(f.a,{variant:"body1"},e)},m=c.a.createElement(O.a,{in:o,className:r.collapse},s(t||"")),d=c.a.createElement(b.a,{variant:"text",size:"small",onClick:function(){return u(!o)}},o?"Show less":"Show more");return c.a.createElement("div",n,s(a),t?m:null,t?d:null)},N=t(460),S=t(463),M=t(472),w=t(440),A=t(444),T=t(41),L=t(423),I=t(450),P=t(467),z=t.n(P),B=t(9);var R=function(){return c.a.createElement(B.a,{title:"Add translations",to:"/video/translations",icon:z.a})};var U=function(){return c.a.createElement(L.a,null,c.a.createElement(I.a,null),c.a.createElement(R,null))},F=t(449),D=t(462),W=Object(o.a)((function(e){return Object(u.a)({root:{display:"flex",justifyContent:"center"},title:{marginTop:e.spacing(2),lineHeight:1.25},main:{flex:1,padding:e.spacing(3,2),maxWidth:992},aside:{flex:1,maxWidth:425,padding:e.spacing(2)},toolbar:{},toolbarViews:{marginRight:e.spacing(2)},toolbarCreatedAt:{},toolbarAside:{marginLeft:"auto"},autoplayToolbar:{minHeight:"initial",marginBottom:e.spacing(2)},collapseText:Object(n.a)({marginBottom:e.spacing(2)},e.breakpoints.up("lg"),{paddingLeft:e.spacing(7)})})}));a.default=function(){var e=W(),a=c.a.createElement(d.a,{disableGutters:!0,className:e.toolbar},c.a.createElement(f.a,{className:e.toolbarViews},Math.round(9999999*Math.random()).toLocaleString()," views"),c.a.createElement(f.a,{className:e.toolbarCreatedAt},i.a.date.past().toLocaleDateString()),c.a.createElement("aside",{className:e.toolbarAside},c.a.createElement(S.a,{initialLikes:Math.round(999999*Math.random()),initialDislikes:Math.round(99999*Math.random())}),c.a.createElement(b.a,{variant:"text",startIcon:c.a.createElement(h.a,null)},"Share"),c.a.createElement(F.a,null),c.a.createElement(T.a,{renderContent:function(){return c.a.createElement(U,null)}},c.a.createElement(v.a,null)))),t=c.a.createElement("main",{className:e.main},c.a.createElement(m,{height:538}),c.a.createElement(f.a,{variant:"h6",className:e.title},i.a.lorem.sentence(20)),a,c.a.createElement(g.a,null),c.a.createElement(M.a,{disableGutters:!0}),c.a.createElement(x,{className:e.collapseText,initialText:i.a.lorem.sentences(5),additionalText:i.a.lorem.sentences(20)}),c.a.createElement(g.a,null),c.a.createElement(N.a,{onLoad:D.a})),n=c.a.createElement("aside",{className:e.aside},function(){var a=(+new Date).toString(16);return c.a.createElement(d.a,{className:e.autoplayToolbar,disableGutters:!0},c.a.createElement(f.a,null,"Up next"),c.a.createElement("aside",{className:e.toolbarAside},c.a.createElement(f.a,{variant:"button",component:"label",htmlFor:a},"Autoplay"),c.a.createElement(k.a,{inputProps:{id:a},defaultChecked:!0})))}(),c.a.createElement(A.a,{onLoad:w.b}));return c.a.createElement("div",{className:e.root},t,n)}},436:function(e,a,t){"use strict";var n=t(355),r=t(0),c=t.n(r),l=t(354),i=t(356),o=t(455),u=t(186);a.a=function(e){var a=e.icon?c.a.createElement(l.a,null,e.icon):null,t=e.endIcon?c.a.createElement(o.a,null,c.a.createElement(u.a,{size:"small",onClick:e.onClick},e.endIcon)):null;return c.a.createElement(n.a,{dense:!0,button:!0,selected:e.selected,onClick:e.onClick},a,c.a.createElement(i.a,{primary:e.title}),t)}},439:function(e,a,t){"use strict";var n=t(18),r=t(0),c=t.n(r),l=t(112),i=t(346),o=t(186),u=t(447),s=t.n(u),m=t(130),d=t(476),f=t(477),E=t(69),v=Object(E.a)((function(e){return Object(l.a)({content:{padding:0},actions:{borderTop:"1px solid ".concat(e.palette.divider)}})}));a.a=function(e){var a=e.title,t=e.maxWidth,l=e.renderTrigger,u=e.content,E=e.renderActions,p=v(),h=Object(r.useState)(!1),b=Object(n.a)(h,2),g=b[0],k=b[1],y=function(){return k(!g)},j=c.a.createElement(o.a,{edge:"end",onClick:y},c.a.createElement(s.a,null)),O=a?c.a.createElement(m.a,{title:a,endAction:j}):null,C=c.a.createElement(d.a,{className:p.content},u),x=E?c.a.createElement(f.a,{className:p.actions},E((function(){return k(!1)}))):null,N=c.a.createElement(i.a,{open:g,onClose:y,maxWidth:t},O,C,x),S=l(y);return c.a.createElement(c.a.Fragment,null,S,N)}},440:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return o}));var n=t(38),r=t.n(n),c=t(34),l=t.n(c),i=function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array(12).fill(null).map((function(e,a){return{id:"".concat(a),title:l.a.lorem.sentence().replace(".",""),duration:Math.round(36e6*Math.random()),videoUrl:"/watch?v=".concat(a),previewUrl:"https://invalid_url",channelAvatarUrl:l.a.image.avatar(),channelName:l.a.company.companyName(),channelUrl:"/channel/".concat(a),views:Math.round(999999999*Math.random()),verified:Math.random()>.5,createdAt:l.a.date.past()}})));case 1:case"end":return e.stop()}}))},o=function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array(12).fill(null).map((function(e,a){return{id:"".concat(a),title:l.a.lorem.sentence().replace(".",""),duration:Math.round(36e6*Math.random()),videoUrl:"/watch?v=".concat(a),previewUrl:"https://invalid_url",channelName:l.a.company.companyName(),channelUrl:"/channel/".concat(a),isNew:a%2===0,isRecommended:a%2===1,views:Math.round(999999999*Math.random()),verified:Math.random()>.5,createdAt:l.a.date.past()}})));case 1:case"end":return e.stop()}}))}},442:function(e,a,t){"use strict";function n(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e>=1e9?"".concat((e/1e9).toFixed(a),"B"):e>=1e6?"".concat((e/1e6).toFixed(a),"M"):e>=1e3?"".concat((e/1e3).toFixed(a),"K"):e}t.d(a,"a",(function(){return n}))},443:function(e,a,t){"use strict";var n=t(18),r=t(0),c=t.n(r),l=t(423),i=t(129),o=t(356),u=t(355),s=t(354),m=t(445),d=t.n(m),f=t(487);var E=function(e){var a=e.label,t=(e.value,e.variant),n=e.checked,r=e.onClick,l="check"===t?c.a.createElement(f.a,{size:"small",checked:n,icon:c.a.createElement(d.a,{style:{opacity:0}}),checkedIcon:c.a.createElement(d.a,null)}):c.a.createElement(f.a,{checked:n});return c.a.createElement(u.a,{dense:!0,button:!0,onClick:r},c.a.createElement(s.a,null,l),c.a.createElement(o.a,{primary:a}))};a.a=function(e){var a=e.variant,t=e.onLoad,o=e.itemToProps,u=e.initialValue,s=void 0===u?"":u,m=e.onChange,d=Object(r.useState)(s),f=Object(n.a)(d,2),v=f[0],p=f[1];return c.a.createElement(l.a,null,c.a.createElement(i.a,{renderLoadMore:null,renderItem:function(e){var t=o(e);return c.a.createElement(E,Object.assign({},t,{variant:a,checked:v===t.value,onClick:function(){p(t.value),m&&m(t)}}))},onLoad:t}))}},444:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(59),l=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,448))}));a.a=function(e){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(c.a,null)},r.a.createElement(l,e))}},449:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(451),l=t.n(c),i=t(357),o=t(457),u=t.n(o),s=t(18),m=t(60),d=t(354),f=t(488),E=t(356),v=t(455),p=t(355);var h=function(e){var a=e.primary,t=e.secondary,c=e.secondaryAction,l=e.onChange,i=Object(m.a)(e,["primary","secondary","secondaryAction","onChange"]),o=Object(n.useState)(Boolean(i.checked)),u=Object(s.a)(o,2),h=u[0],b=u[1],g=function(){return l?l(h):b(!h)},k=c?r.a.createElement(v.a,null,c):null;return r.a.createElement(p.a,{dense:!0,button:!0,onClick:g},r.a.createElement(d.a,null,r.a.createElement(f.a,Object.assign({},i,{checked:h,onChange:g,edge:"start",disableRipple:!0}))),r.a.createElement(E.a,{primary:a,secondary:t}),k)},b=t(456),g=t.n(b),k=t(423),y=t(129);var j=function(e){var a=e.onLoad,t=e.itemToProps;return r.a.createElement(k.a,{disablePadding:!0},r.a.createElement(y.a,{onLoad:a,renderItem:function(e){var a=t(e);return r.a.createElement(h,{key:a.value,primary:a.label,secondaryAction:r.a.createElement(g.a,{color:"action"})})}}))},O=t(135);var C=function(){return r.a.createElement(j,{onLoad:O.a,itemToProps:function(e){return{label:e.title,value:e.id}}})},x=t(439);a.a=function(e){var a=e.renderTrigger||function(e){return r.a.createElement(i.a,{variant:"text",startIcon:r.a.createElement(l.a,null),onClick:e},"Save")};return r.a.createElement(x.a,{title:"Save to...",maxWidth:"xs",content:r.a.createElement(C,null),renderTrigger:a,renderActions:function(){return r.a.createElement(i.a,{startIcon:r.a.createElement(u.a,null)},"Create new playlist")}})}},450:function(e,a,t){"use strict";var n=t(38),r=t.n(n),c=t(0),l=t.n(c),i=t(436),o=t(133),u=t.n(o),s=t(439),m=t(443).a,d=t(357);a.a=function(){var e=l.a.createElement(m,{onLoad:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["Sexual content","Violent or repulsive content","Hateful or abusive content","Harmful or dangerous acts","Spam or misleading"]);case 1:case"end":return e.stop()}}))},itemToProps:function(e){return{label:e,value:e}}});return l.a.createElement(s.a,{title:"Report",content:e,renderTrigger:function(e){return l.a.createElement(i.a,{title:"Report",icon:l.a.createElement(u.a,null),onClick:e})},renderActions:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{onClick:e},"Cancel"),l.a.createElement(d.a,{color:"secondary",onClick:e},"Report"))}})}},460:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(59),l=r.a.lazy((function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,489))}));a.a=function(e){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(c.a,null)},r.a.createElement(l,e))}},461:function(e,a,t){"use strict";var n=t(18),r=t(0),c=t.n(r),l=t(357);a.a=function(e){var a=c.a.useState(!1),t=Object(n.a)(a,2),r=t[0],i=t[1];return c.a.createElement(l.a,Object.assign({variant:"contained",disableElevation:!0},e,{color:r?"default":e.color||"primary",onClick:function(){return i(!r)}}),r?"Subscribed":"Subscribe")}},462:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(38),r=t.n(n),c=t(34),l=t.n(c),i=function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Array(12).fill(null).map((function(e,a){return{id:a.toString(),avatarUrl:l.a.image.avatar(),userName:"".concat(l.a.name.firstName()," ").concat(l.a.name.lastName()),verified:Math.random()>.5,text:l.a.lorem.text(),createdAt:l.a.date.recent(),likes:Math.round(9999*Math.random()),dislikes:Math.round(9999*Math.random()),liked:a%4===0,disliked:!(a%4===0),edited:a%3===0}})));case 1:case"end":return e.stop()}}))}},463:function(e,a,t){"use strict";var n=t(18),r=t(0),c=t.n(r),l=t(60),i=t(186),o=t(112),u=t(89),s=t(69),m=t(442),d=Object(s.a)((function(e){return Object(o.a)({root:{display:"inline-flex",alignItems:"center",verticalAlign:"middle"},typography:{cursor:"pointer",userSelect:"none",paddingRight:e.spacing(1),paddingLeft:e.spacing(.5)}})}));var f=function(e){var a=e.value,t=void 0===a?0:a,n=e.checked,r=void 0!==n&&n,o=e.icon,s=e.onClick,f=Object(l.a)(e,["value","checked","icon","onClick"]),E=d(),v=r?"secondary":void 0,p=(+new Date).toString(16),h=c.a.createElement(u.a,{className:E.typography,variant:"small"===f.size?"body2":"button",color:v,component:"label",htmlFor:p},Object(m.a)(t));return c.a.createElement("div",{className:E.root},c.a.createElement(i.a,Object.assign({},f,{id:p,onClick:s,color:v}),o||t),o?h:null)},E=t(136),v=t.n(E);var p=function(e){return c.a.createElement(f,Object.assign({},e,{icon:c.a.createElement(v.a,{fontSize:"small"===e.size?"small":"default"})}))},h=t(468),b=t.n(h);var g=function(e){return c.a.createElement(f,Object.assign({},e,{icon:c.a.createElement(b.a,{fontSize:"small"===e.size?"small":"default"})}))};a.a=function(e){var a=e.initialLikes,t=void 0===a?0:a,r=e.initialDislikes,l=void 0===r?0:r,i=e.initialChecked,o=void 0===i?"none":i,u=e.LikeButtonProps,s=e.DislikeButtonProps,m=c.a.useState({likes:t,dislikes:l,checked:o}),d=Object(n.a)(m,2),f=d[0],E=f.likes,v=f.dislikes,h=f.checked,b=d[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";return function(){return b({likes:t+("like"===e?1:0),dislikes:l+("dislike"===e?1:0),checked:e})}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,Object.assign({},u,{value:E,checked:"like"===h,onClick:k("like")})),c.a.createElement(g,Object.assign({},s,{value:v,checked:"dislike"===h,onClick:k("dislike")})))}},472:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(34),l=t.n(c),i=t(353),o=t(355),u=t(459),s=t(433),m=t(356),d=t(69),f=t(112),E=t(24),v=t(89),p=t(442),h=t(461),b=t(18),g=t(134),k=t.n(g),y=t(470),j=t.n(y),O=t(469),C=t.n(O),x=t(41),N=t(436),S=t(423);var M=function(e){var a=Object(n.useState)(1),t=Object(b.a)(a,2),c=t[0],l=t[1],i=[{title:"All",icon:r.a.createElement(C.a,null)},{title:"Personalized",icon:r.a.createElement(k.a,null)},{title:"None",icon:r.a.createElement(j.a,null)}];return r.a.createElement(x.a,Object.assign({},e,{renderContent:function(e){return r.a.createElement(S.a,null,i.map(function(e){return function(a,t){return r.a.createElement(N.a,{title:a.title,icon:a.icon,selected:t===c,onClick:function(){l(t),e()}})}}(e)))}}),i[c].icon)},w=Object(d.a)((function(e){return Object(f.a)({listItem:{width:"auto"},listItemPrimary:{textDecoration:"none"},aside:{marginLeft:"auto"},notificationsButton:{marginLeft:e.spacing(1)}})}));a.a=function(e){var a=w();return r.a.createElement(i.a,e,r.a.createElement(o.a,{className:a.listItem,disableGutters:!0},r.a.createElement(u.a,null,r.a.createElement(s.a,{src:l.a.image.avatar(),component:E.b,to:"/channel/1"})),r.a.createElement(m.a,{primary:r.a.createElement(v.a,{className:a.listItemPrimary,component:E.b,to:"/channel/1",color:"inherit"},l.a.company.companyName()),secondary:"".concat(Object(p.a)(Math.round(9999999*Math.random()),0)," subscribers")})),r.a.createElement("aside",{className:a.aside},r.a.createElement(h.a,null),r.a.createElement(M,{className:a.notificationsButton})))}}}]);
//# sourceMappingURL=7.32770c9c.chunk.js.map