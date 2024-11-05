"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[40],{968:(e,t,n)=>{function i(e,t,n){void 0===n&&(n=0);const i=[];let o=e.parentElement;const r=void 0!==t;let a=0;for(;null!==o;){const s=o.nodeType===Node.ELEMENT_NODE;if(0===a&&1===n&&s&&r){const n=e.closest(t);return n?[n]:[]}if((!r||s&&o.matches(t))&&i.push(o),o=o.parentElement,0!==n&&i.length>=n)break;a++}return i}n.d(t,{M:()=>i})},2512:(e,t,n)=>{n.r(t),n.d(t,{WebsiteBanner:()=>Fe});var i=n(6425),o=n(7936),r=n(9521),a=n(7519),s=n(3114),c=n(7246),l=n(9408);var d=n(3354),u=n(2834);const h=async()=>{const e=[];document.dispatchEvent(new CustomEvent("RCB/PreDecision/Promises",{detail:{promises:e}}));try{const t=await Promise.all(e);for(const e of t)if(e)return e}catch(e){}return!1};var p=n(9589);const g=async e=>{let{supportsCookiesName:t}=e;return!(0,p.s)(t)&&"essentials"},v=async e=>{let{revisionHash:t,getUserDecision:n}=e;const i=n();if(!1===i)return!1;const{revision:o}=i;return t===o&&"consent"};var m=n(6399),f=n(5790),y=n(491);function b(){const{userAgent:e}=navigator;return!!e&&!/chrome-lighthouse/i.test(e)&&!(0,y.W)()&&(0,f.S1)(e)}const w=(e,t,n)=>(void 0===t&&(t=1e4),void 0===n&&(n=!0),async i=>{let{getUserDecision:o}=i;if(b()||!n)return!1;if(o())return"consent";try{const{predecision:n}=await(r=e(),a=t,new Promise(((e,t)=>{r.then(e,t);const n=new Error("Timed out");setTimeout(t,a,n)})));return n}catch(e){return!1}var r,a});var C=n(5973),x=n(7406);const k={path:"/consent/dynamic-predecision",method:x.X.POST,obfuscatePath:"keep-last-part"};function O(e){(0,o.vJ)((()=>{if((0,r.j)().customizeIdsBanner)return;const{restNamespace:t,restRoot:i,restQuery:o,restNonce:p,restPathObfuscateOffset:f,others:{isPreventPreDecision:y,isInvalidateImplicitUserConsent:x,hasDynamicPreDecisions:O,frontend:{isRespectDoNotTrack:D,isAcceptAllForBots:P}}}=(0,a.b)(),{onSave:S,suspense:A}=e;var Y,I,B,N;!async function(e,t){const{gateways:i,args:o,onIsDoNotTrack:r,onShowCookieBanner:a,isInvalidateImplicitUserConsent:s}=t;let h=!0;const p=e instanceof c.U?e.getOptions():e,g={...p,getUserDecision:()=>{const e=(0,l.y)(p.decisionCookieName);if(e){var t;if(e.revision!==p.revisionHash)return!1;if(s&&(null==(t=e.buttonClicked)?void 0:t.startsWith("implicit_")))return!1}return e}};for(const e of i){const t=await e(g,...o);if(!1!==t){h=!1;const e=e=>Promise.all([n.e(261),n.e(452),n.e(671),n.e(4)]).then(n.bind(n,93)).then((t=>{let{apply:n}=t;return n({type:e,...p})}));"all"===t?e("all"):"essentials"===t?e("essentials"):"dnt"===t?r((()=>e("essentials"))):"consent"===t&&e("consent");break}}h&&(a(),document.dispatchEvent(new CustomEvent("RCB/Banner/Show/Interactive")),await(0,u.G)(),document.dispatchEvent(new CustomEvent(d.Z,{detail:{}})))}((0,s.C)(),{gateways:[async()=>(await A.tcf,!1),h,g,v,(B=["login-action-"],"force-cookie-banner",async()=>{const{className:e}=document.body;return!(e&&e.indexOf("force-cookie-banner")>-1)&&B.filter((t=>e.indexOf(t)>-1)).length>0&&"consent"}),(I=!!P&&"all",async e=>{let{getUserDecision:t}=e;return await(0,m.P)(),!(!1!==t()||!I)&&!!b()&&I}),(N=D,void 0===N&&(N=!0),async e=>{let{getUserDecision:t,groups:n}=e;const i=n.find((e=>{let{isEssential:t}=e;return t}));if(!1!==t()||!N)return!1;for(const e of n)if(e!==i)for(const{legalBasis:t}of e.items)if("legitimate-interest"===t)return!1;return!!function(){try{const e=window;if((e.doNotTrack||e.navigator.doNotTrack||e.navigator.msDoNotTrack||"msTrackingProtectionEnabled"in e.external)&&("1"==e.doNotTrack||"yes"==e.navigator.doNotTrack||"1"==e.navigator.doNotTrack||"1"==e.navigator.msDoNotTrack||e.external.msTrackingProtectionEnabled()))return!0}catch(e){}return!1}()&&"dnt"}),w((async()=>{const{clientWidth:e,clientHeight:n}=document.documentElement;return(0,C.h)({location:k,options:{restNamespace:t,restRoot:i,restQuery:o,restNonce:p,restPathObfuscateOffset:f},sendRestNonce:!1,sendReferer:!0,request:{viewPortWidth:e,viewPortHeight:n,referer:window.location.href,tcfStringImplicitEssentials:void 0}})}),1e4,O),(Y=y,async()=>!!Y&&(b()?"all":"consent"))],args:[e],isInvalidateImplicitUserConsent:x,onIsDoNotTrack:()=>{S(!0,"none")},onShowCookieBanner:()=>{e.set({visible:!0})}})}),[])}var D=n(7513),P=n(680),S=n(4094),A=n(1476);function Y(){const{individualPrivacyOpen:e,onSave:t,updateGroupChecked:n,updateCookieChecked:i,groups:r,activeAction:a,onClose:s,set:c}=(0,S.Y)(),l=e?"ind_all":"main_all",d=e?"ind_essential":"main_essential",u=e?"ind_close_icon":"main_close_icon",h=e?"ind_custom":"main_custom",p={buttonClickedAll:l,buttonClickedEssentials:d,buttonClickedCloseIcon:u,buttonClickedCustom:h,acceptAll:(0,o.hb)((async()=>{await(0,m.P)(),c((e=>{let{updateGroupChecked:t}=e;r.forEach((e=>t(e.id,!0)))})),await(0,m.P)(),t(!1,l)}),[l]),acceptEssentials:(0,o.hb)((e=>{void 0===e&&(e=!1),r.forEach((e=>{let{isEssential:t,id:o,items:r}=e;if(t)n(o,!0);else for(const{legalBasis:e,id:t}of r)i(o,t,"legitimate-interest"===e)})),t(!1,!0===e?u:d)}),[d]),acceptIndividual:(0,o.hb)((()=>t(!1,h)),[h]),openIndividualPrivacy:(0,o.hb)((()=>c({individualPrivacyOpen:!0})),[c])};return{...p,closeIcon:(0,o.hb)((()=>{a?s():p.acceptEssentials(!0)}),[a,s,p.acceptEssentials])}}var I=n(6545);const B=()=>{const{headerDesign:{fontColor:e,fontSize:t},texts:{acceptEssentials:n},activeAction:r,pageRequestUuid4:a,i18n:{close:s,closeWithoutSaving:c},buttonClicked:l=""}=(0,S.Y)(),{buttonClickedCloseIcon:d,closeIcon:u}=Y(),h=(0,o.Kr)((()=>window.innerWidth),[]);return(0,i.Y)(I.U,{width:t,color:e,tooltipText:r?"change"===r?c:s:n,tooltipAlways:h<A.X5,framed:l===d,renderInContainer:document.getElementById(a).querySelector("dialog"),onClick:u})};var N=n(5914);const E=[Symbol("extendBannerContentStylesheet"),(e,t)=>{let{boolIf:n,boolSwitch:i,boolOr:o,computed:r,boolNot:a,jsx:s,variable:c}=e,{dimsOverlay:l,dimsHeader:d,dimsFooter:u,dimsRightSidebar:h,boolLargeOrMobile:p,isMobile:g,isBanner:v,design:m,bodyDesign:f,headerDesign:y,layout:b,decision:w,mobile:C,texts:x,activeAction:k,footerDesign:O,individualLayout:D,individualPrivacyOpen:P,footerBorderStyle:S,headerBorderStyle:A}=t;const Y=r([y.logo,y.logoRetina,y.logoFitDim,y.logoRetinaFitDim,y.logoMaxHeight],(e=>{let[t,n,i,o,r]=e;const a=n&&!(null==t?void 0:t.endsWith(".svg"))&&window.devicePixelRatio>1?o:i;return(null==a?void 0:a[0])>0?{width:(0,N.dD)(a[0]),height:(0,N.dD)(a[1])}:{width:"auto",height:(0,N.dD)(r)}})),I=n({when:v,then:{when:[P,a(D.inheritBannerMaxWidth)],then:D.bannerMaxWidth(),or:b.bannerMaxWidth()}}),B=p(y.borderWidth,n),[E]=s("div",{classNames:"header-container",position:"sticky",zIndex:9,top:0,background:n(y.inheritBg,m.bg(),y.bg()),padding:p(y.padding,n),paddingBottom:`calc(${B} + ${p(y.padding,n,2)})`,...A,pseudos:{":has(>div:empty)":{display:"none"},":has(>div:empty)+div":A,":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",bottom:"0px",background:y.borderColor(),height:B},">div":{transition:"width 500ms, max-width 500ms",maxWidth:I,margin:"auto",display:"flex",alignItems:"center",position:"relative",textAlign:n(y.inheritTextAlign,m.textAlign("val"),y.textAlign("val")),justifyContent:n(y.inheritTextAlign,i([[m.textAlign("is-center"),"center"],[m.textAlign("is-right"),"flex-end"]]),i([[y.textAlign("is-center"),"center"],[y.textAlign("is-right"),"flex-end"]])),flexDirection:n({when:[y.logo("is-filled"),x.headline("is-filled")],then:i([[y.logoPosition("is-left"),"row"],[y.logoPosition("is-right"),"row-reverse"]],"column")})},">div>img":{margin:p(y.logoMargin,n),width:Y.width(),height:Y.height()}}}),T=i([[[k("is-filled"),w.showCloseIcon()],"51px"]],"0px"),$=l[1].height(),L=c(`calc(${$} - ${n(v,"0px","20px")} - ${T})`),R=c(`calc(100px + ${h[1].height()} + ${d[1].height()} + ${u[1].height()})`),[F]=s("div",{classNames:"content",position:"relative",overflow:"auto",maxHeight:n({when:g,then:{when:P,then:`calc(${$} - ${T})`,or:`calc(min(${$}, ${C.maxHeight()}) - ${T})`},or:{when:o([P,a(b.maxHeightEnabled)]),then:L(),or:`min(max(${b.maxHeight()}, ${R()}), ${L()})`}}),..."Win32"===navigator.platform?{overflow:CSS.supports("overflow","overlay")?"overlay":"scroll",scrollbarWidth:"thin",scrollbarColor:`${f.teachingsFontColor()} transparent`,pseudos:{"::-webkit-scrollbar":{width:"11px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:f.teachingsFontColor(),borderRadius:b.dialogBorderRadius(),border:`3px solid ${m.bg()}`}}}:{}}),W=p(O.borderWidth,n),[H]=s("div",{classNames:"footer-container",fontWeight:O.fontWeight(),color:O.fontColor(),position:"sticky",bottom:"0px",zIndex:1,padding:p(O.padding,n),paddingTop:`calc(${W} + ${p(O.padding,n,0)})`,background:n(O.inheritBg,m.bg(),O.bg()),fontSize:p(O.fontSize,n),textAlign:n(O.inheritTextAlign,m.textAlign("val"),O.textAlign()),...S,pseudos:{":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",top:"0px",background:O.borderColor(),height:W},">div":{transition:"width 500ms, max-width 500ms",maxWidth:I,margin:"auto",lineHeight:"1.8"},":has(>div:empty)":{display:"none"}}});return{HeaderContainer:E,Content:F,FooterContainer:H}}];var T=n(6546);const $=(0,o.Rf)(((e,t)=>{let{className:n}=e;const o=(0,P.y)(),{a11yIds:r,HeaderContainer:a,hasCloseIcon:s,HeaderTitle:c}=o.extend(...E).extend(...T.h),{headerDesign:{logo:l,logoRetina:d,logoAlt:u},decision:{showCloseIcon:h},texts:{headline:p},activeAction:g,individualPrivacyOpen:v,individualTexts:m,i18n:{headerTitlePrivacyPolicyHistory:f}}=(0,S.Y)(),y=d&&!(null==l?void 0:l.endsWith(".svg"))&&window.devicePixelRatio>1?d:l,b=!!h||!!g,w=v?"history"===g?f:m.headline:p;return(0,i.Y)(a,{ref:t,className:n,children:(0,i.FD)("div",{children:[!!y&&(0,i.Y)("img",{"aria-hidden":!0,alt:u||"",src:y}),!!w&&(0,i.Y)(c,{id:r.headline,className:b?s:void 0,children:w}),b&&(0,i.Y)(B,{})]})})}));var L=n(5750),R=n(1477),F=n(5548),W=n(5453),H=(n(4959),n(1801));const M=e=>{let{group:t}=e;const{name:n}=t,r=(0,S.Y)(),{decision:{groupsFirstView:a},design:{fontSize:s}}=r;return(0,H.C)(t),(0,i.Y)(o.FK,{children:(0,i.FD)("span",{children:[(0,i.Y)("i",{}),(0,i.Y)("span",{children:n})]})})},J=()=>{const{texts:{headline:e}}=(0,S.Y)(),{DottedGroupList:t,screenReaderOnlyClass:n}=(0,P.y)().extend(...W.C),{groups:o,decision:{showGroups:r}}=(0,S.Y)();return r?(0,i.FD)(t,{children:[(0,i.Y)("legend",{className:n,children:e}),o.filter((e=>{let{items:t}=e;return!!t.length})).map((e=>(0,i.Y)(M,{group:e},e.id)))]}):null};var _=n(6812);const U=()=>{const e=(0,S.Y)(),{isConsentRecord:t,activeAction:n,bodyDesign:{acceptEssentialsUseAcceptAll:r,acceptAllOneRowLayout:a},decision:{showGroups:s,groupsFirstView:c,saveButton:l,acceptAll:d,acceptEssentials:u,buttonOrder:h},texts:{acceptAll:p,acceptEssentials:g,acceptIndividual:v},saveButton:{type:m,useAcceptAll:f},individualTexts:{save:y},individualPrivacyOpen:b,didGroupFirstChange:w,productionNotice:C,buttonClicked:x="",fetchLazyLoadedDataForSecondView:k}=e,{a11yIds:{firstButton:O}}=(0,P.y)(),D=r&&d===u,A=f&&d===m,{all:I,essential:B,individual:N,save:E}=(0,o.Kr)((()=>{const e=h.split(","),t=e.reduce(((t,n)=>(t[n]=e.indexOf(n),t)),{}),n=e.reduce(((t,n)=>(t[e.indexOf(n)]=n,t)),{});return a&&(t[n[0]]=1,t[n[1]]=0),t}),[h,a]),T=!1,{buttonClickedAll:$,buttonClickedEssentials:L,buttonClickedCustom:R,acceptAll:F,acceptEssentials:W,acceptIndividual:H,openIndividualPrivacy:M}=Y(),J="change"===n&&!t,U=!b&&T,G=b||T,V=!b,z=(0,o.li)();return(0,i.FD)(o.FK,{children:[U?(0,i.Y)(_.$,{onClick:H,busyOnClick:J,order:I,type:"acceptAll",framed:x===R,id:O,children:y}):(0,i.Y)(_.$,{onClick:F,busyOnClick:J,order:I,type:"acceptAll",framed:x===$,id:O,children:p}),(0,i.Y)(_.$,{onClick:()=>W(),busyOnClick:J,order:B,type:D?"acceptAll":"acceptEssentials",framed:x===L,children:g}),G&&(0,i.Y)(_.$,{onClick:H,busyOnClick:J,order:E,type:A?"acceptAll":"save",framed:x===R,children:y}),V&&(0,i.Y)(_.$,{onClick:M,onMouseEnter:()=>{k&&(z.current=setTimeout(k,500))},onMouseLeave:()=>clearTimeout(z.current),busyOnClick:J,order:N,type:"acceptIndividual",framed:x.startsWith("ind_"),children:v}),C]})},G=[Symbol("extendBannerBodyStylesheet"),(e,t)=>{let{boolIf:n,boolNot:i,boolOr:o,boolSwitch:r,jsx:a}=e,{scaleVertical:s,dimsContent:c,dimsHeader:[,l],dimsFooter:[,d],activeAction:u,boolLargeOrMobile:h,bodyDesign:p,isBanner:g,isDialog:v,isMobile:m,isMobileWidth:f,layout:y,individualLayout:b,individualPrivacyOpen:w,design:C,footerBorderStyle:x}=t;const{fontColor:k}=C,{padding:O}=p,[,{scrollbar:D,scrolledBottom:P}]=c,S=o([g,w]),A="300px",Y=n(g,A,`calc(${y.dialogMaxWidth()} - ${h(O,n,1)} - ${h(O,n,3)} - (${h(C.borderWidth,n)} * 2))`),I=i(f),B=n(v,`${h(C.borderWidth,n)} solid ${C.borderColor()}`),[N]=a("div",{classNames:"body-container",background:C.bg(),lineHeight:1.4,paddingRight:h(p.padding,n,1),paddingLeft:h(p.padding,n,3),borderLeft:B,borderRight:B,pseudos:{":has(+div>div:empty)":x,">div":{transition:"width 500ms, max-width 500ms",margin:"auto",maxWidth:n({when:g,then:{when:[w,i(b.inheritBannerMaxWidth)],then:b.bannerMaxWidth(),or:y.bannerMaxWidth()}})},">div:after":{content:"''",display:"block",clear:"both"}}}),E=n(p.acceptAllOneRowLayout,"0 0 calc(50% - 5px)","1 1 100%"),T=n(p.acceptAllOneRowLayout,"5px"),[$]=a("div",{classNames:"tb-right",position:n(o([i(w),f]),"sticky"),margin:n({when:[I,v,w,i(b.inheritDialogMaxWidth)],then:"0 0 10px 10px"}),background:C.bg(),maxWidth:"100%",width:n(I,Y,"auto"),float:n(I,n({when:S,then:"right"})),paddingTop:n(f,"10px",n({when:S,then:h(O,n,0),or:"10px"})),paddingBottom:n(w,n(f,"5px","10px"),h(O,n,2)),zIndex:1,display:"flex",flexWrap:"wrap",transition:"box-shadow ease-in-out .1s",boxShadow:n({when:[D(),i(P)],then:`0 -15px 15px -15px rgba(${k("r")} ${k("g")} ${k("b")} / 30%)`}),bottom:n(i(w),d.height()),top:n(w,l.height()),pseudos:{">a":{marginBottom:n(m,`calc(10px * ${s()})`,"10px")},">a[data-order='0']":{flex:E,marginRight:T},">a[data-order='1']":{flex:E,marginLeft:T}}}),L=[I,g,i(u["is-history"])],[R]=a("div",{classNames:"tb-left",float:n({when:L,then:"left"}),width:n({when:L,then:`calc(100% - ${A})`}),paddingRight:n({when:[g,I],then:"20px"}),paddingTop:n(w,"10px",h(p.padding,n,0)),paddingBottom:n({when:[I,i(w)],then:{when:o([g,w]),then:h(p.padding,n,2),or:"0px"},or:"10px"}),pseudos:{" img":{maxWidth:"100%",height:"auto"}}}),[F]=a("div",{position:"sticky",bottom:`calc(${d.height(!0,"0px")} - 1px)`,height:"0px",margin:"auto",transition:"box-shadow ease-in-out .1s",boxShadow:n({when:[D(),i(P)],then:`0 15px 15px 15px rgba(${C.fontColor("r")} ${C.fontColor("g")} ${C.fontColor("b")} / 20%)`}),display:r([[w,"block"],[[g,i(f)],"block"]],"none")});return{Container:N,RightSide:$,LeftSide:R,BeforeFooter:F}}];var V=n(5922),z=n(9081),K=n(998);const q=(0,K.g)(Promise.resolve(L.X),"BodyDescription"),j=(0,K.g)(Promise.all([n.e(261),n.e(452),n.e(671),n.e(4)]).then(n.bind(n,3353)).then((e=>{let{BannerGroupList:t}=e;return t}))),Q=(0,K.g)(Promise.all([n.e(261),n.e(452),n.e(671),n.e(4)]).then(n.bind(n,9558)).then((e=>{let{BannerHistorySelect:t}=e;return t}))),X={margin:"20px 0 10px 0"};var Z=n(3963),ee=n(8700);const te=()=>{const{FooterLanguageSwitcherSelect:e}=(0,ee.o)().extend(...T.h),{footerDesign:{languageSwitcher:t},languageSwitcher:n,onLanguageSwitch:r}=(0,S.Y)(),a=(0,o.Kr)((()=>n.find((e=>{let{current:t}=e;return t}))),[n]),s="flags"===t&&!!(null==a?void 0:a.flag);return(0,i.FD)(e,{"data-flag":s,children:[s&&(0,i.Y)("span",{style:{backgroundImage:`url(${a.flag})`}}),(0,i.Y)("select",{value:null==a?void 0:a.locale,"aria-label":null==a?void 0:a.name,onChange:e=>{null==r||r(n.find((t=>{let{locale:n}=t;return n===e.target.value})))},children:n.map((e=>{let{locale:t,name:n}=e;return(0,i.Y)("option",{value:t,children:n},t)}))})]})},ne=(0,o.Rf)(((e,t)=>{const{FooterContainer:n}=(0,P.y)().extend(...E),r=(0,S.Y)(),{isTcf:a,layout:{type:s},footerDesign:{languageSwitcher:c},individualPrivacyOpen:l,onClose:d,i18n:{tcf:u},isConsentRecord:h,languageSwitcher:p,set:g}=r,v=(0,o.hb)((e=>{d(),e.preventDefault()}),[d]),{rows:m,render:f}=(0,Z.D)({onClose:h?v:void 0,putPoweredByLinkInRow:"banner"===s?0:1,row1:[!1],row1End:[(null==p?void 0:p.length)>0&&c&&"disabled"!==c&&(0,i.Y)(te,{},"languageSwitcher")]});return(0,i.Y)(n,{ref:t,children:(0,i.Y)("div",{children:f(m)})})}));var ie=n(7114),oe=n(1685),re=n.n(oe);const ae=(0,K.g)(Promise.resolve($),"BannerHeader"),se=(0,K.g)(Promise.resolve((e=>{let{leftSideContainerRef:t,rightSideContainerRef:n}=e;const{a11yIds:r,Container:a,RightSide:s,LeftSide:c,BeforeFooter:l}=(0,P.y)().extend(...G),d=(0,S.Y)(),{tcf:u,isGcm:h,individualPrivacyOpen:p,activeAction:g,individualTexts:{postamble:v},i18n:{nonStandard:m,nonStandardDesc:f},groups:y,designVersion:b}=d,w=function(e){const{groups:t}=(0,V.b)();let n=t.map((e=>{let{items:t}=e;return[...t]})).flat();return n}(),C=(0,R.bM)({services:w,disableListServicesNotice:b>9&&p}),x=h&&(0,z.h)(w).length>0,k=(0,o.Kr)((()=>!1),[u,x]),O=(0,i.FD)(c,{ref:t,children:[(0,i.Y)(q,{id:r.description,...y.length>0?C:{},children:"history"===g&&(0,i.Y)(Q,{})}),y.length>0&&(0,i.FD)(o.FK,{children:[p?(0,i.FD)(o.FK,{children:[k&&(0,i.Y)(F.Y,{headline:m,style:X,borderless:!0,children:f}),(0,i.Y)(j,{}),[!1,!1].filter(Boolean).sort((()=>b<10?1:-1))]}):(0,i.Y)(J,{}),!!v&&p&&(0,i.Y)(q,{teachings:[v],isPostamble:!0})]})]},"leftSide"),D="history"===g?(0,i.Y)("div",{ref:n}):(0,i.Y)(s,{ref:n,children:(0,i.Y)(U,{})},"rightSide");return(0,i.FD)(a,{children:[(0,i.Y)("div",{children:p?[D,O]:[O,D]}),(0,i.Y)(l,{})]})})),"BannerBody"),ce=(0,K.g)(Promise.resolve(ne),"BannerFooter");var le=n(968),de=n(5151);const ue='[href^="#consent-"]';function he(){window.location.hash.startsWith("#consent-")&&(window.location.hash="")}function pe(e){let{isVisible:t,animationIn:n,animationOut:i,animationInDuration:o,animationOutDuration:r,animationInDelay:a,animationOutDelay:s}=e;return t?{animation:n,duration:o,delay:a}:{animation:i,duration:r,delay:s}}const ge=e=>{let{animateOnMount:t=!0,isVisible:n=!0,animationIn:r="fadeIn",animationOut:a="fadeOut",animationInDelay:s=0,animationOutDelay:c=0,animationInDuration:l=1e3,animationOutDuration:d=1e3,className:u="",style:h={},children:p}=e;const[{animation:g,duration:v,delay:m},f]=(0,o.J0)(t?pe({isVisible:n,animationIn:r,animationOut:a,animationInDelay:s,animationOutDelay:c,animationInDuration:l,animationOutDuration:d}):{animation:"",delay:void 0,duration:0});(0,o.vJ)((()=>{f(pe({isVisible:n,animationIn:r,animationOut:a,animationInDelay:s,animationOutDelay:c,animationInDuration:l,animationOutDuration:d}))}),[n,r,a,s,c,l,d]);const y=`animate__animated animate__${g} ${u}`,b=g?{}:{opacity:n?1:0,transition:`opacity ${m}ms`};return(0,i.Y)("div",{className:y,style:{animationDelay:`${m}ms`,animationDuration:`${v}ms`,pointerEvents:n?"all":"none",...h,...b},children:p})};function ve(e,t){const n=(0,o.li)(0),i=(0,o.li)(0),[r,a]=(0,o.J0)(e),[s,c]=(0,o.J0)(void 0),[l,d]=(0,o.J0)(t),[u,h]=(0,o.J0)(void 0);return(0,o.vJ)((()=>{n.current>0&&("none"===e?a(e):(a("none"),c(e))),n.current++}),[e]),(0,o.vJ)((()=>{i.current>0&&(0===t?d(t):(d(0),h(t),a("none"),c(e))),i.current++}),[t]),(0,o.vJ)((()=>{void 0!==s&&(a(s),c(void 0))}),[s]),(0,o.vJ)((()=>{void 0!==u&&(d(u),h(void 0))}),[u]),[r,l]}var me=n(8639),fe=n(151),ye=n(8664),be=n(72);const we=(0,K.g)(Promise.resolve((()=>{const{Content:e,hideOnMobileClass:t,dimsContent:n,dimsOverlay:r,dimsHeader:a,dimsFooter:s,dimsRightSidebar:c,A11ySkipToLink:l,a11yIds:{firstButton:d}}=(0,P.y)().extend(...ie.R).extend(...E),{decision:{acceptAll:u,acceptEssentials:h,showCloseIcon:p},mobile:g,individualPrivacyOpen:v,bodyDesign:{acceptEssentialsUseAcceptAll:f},activeAction:y,pageRequestUuid4:b,i18n:{skipToConsentChoices:w}}=(0,S.Y)(),C=(0,o.li)(),x=f&&u===h?u:h,k=!g.hideHeader||y||v||"hide"===x&&p?"":t,O=(0,o.li)();O.current=O.current||{};const D=(0,o.hb)((()=>[document.querySelector(`#${b} div[class*="animate__"]`)]),[b]),A=(0,o.hb)(((e,t)=>{let[n,,i]=e;t?n(t,D()):i()}),[D]),Y=(0,o.hb)((e=>A(a,e)),[A]),I=(0,o.hb)((e=>A(s,e)),[A]),B=(0,o.hb)((e=>A(c,e)),[A]);return(0,o.vJ)((()=>{const e=D(),t=[n[0](C.current),r[0](document.querySelector(`#${b}`),e)];return()=>t.forEach((e=>e()))}),[]),(0,o.vJ)((()=>{re().mutate((()=>(0,m.P)().then((()=>C.current.scrollTop=0))))}),[v]),(0,i.FD)(e,{ref:C,children:[(0,i.Y)(l,{href:`#${d}`,children:w}),(0,i.Y)(ae,{ref:Y,className:k}),(0,i.Y)(se,{rightSideContainerRef:B}),(0,i.Y)(ce,{ref:I})]})})),"BannerContent"),Ce=(0,K.g)(Promise.all([n.e(261),n.e(452),n.e(671),n.e(4)]).then(n.bind(n,3362)).then((e=>{let{BannerSticky:t}=e;return t}))),xe=(e,t)=>{const{dataset:n,style:i}=document.body;void 0===n.rcbPreviousOverflow&&(n.rcbPreviousOverflow=i.overflow),i.overflow=e&&t?"hidden":n.rcbPreviousOverflow,document.body.parentElement.style.overflow=i.overflow},ke=(0,K.g)(Promise.resolve((()=>{const e=(0,S.Y)(),{recorder:t,visible:n,activeAction:r,isConsentGiven:a,skipOverlay:s,pageRequestUuid4:c,individualPrivacyOpen:l,fetchLazyLoadedDataForSecondView:d,onClose:u,layout:{overlay:h,animationInDuration:p,animationOutDuration:g},sticky:v}=e,m=(0,o.li)(),f=(0,o.li)(),y=(0,o.li)(!1),[b,w]=function(e){let{animationIn:t,animationInOnlyMobile:n,animationOut:i,animationOutOnlyMobile:r}=e;const a=(0,o.Kr)((()=>window.innerWidth),[])<A.X5;let s=n?a?t:"none":t,c=r?a?i:"none":i;return(0,o.Kr)((()=>{const e=window.navigator.userAgent.toLowerCase();return 4===["firefox","gecko","mobile","android"].map((t=>e.indexOf(t)>-1)).filter(Boolean).length}),[])&&(s="none",c="none"),[s,c]}(e.layout),[C,x]=ve(b,p),[k,O]=ve("none"===w?"fadeOut":w,"none"===w?0:g),[D,P]=(0,ye.F)(["BannerContent","BannerHeader","BannerBody","BannerFooter","BodyDescription"],re().mutate.bind(re()),(()=>m.current.style.removeProperty("display"))),Y=(0,ee.o)(),{a11yIds:{firstButton:I},inner:B,Dialog:N,Overlay:E,individualPrivacyOpen:T,registerWindowResize:$}=Y.extend(...fe.Z);(0,o.Kr)((()=>{T.update(l),l&&(null==d||d())}),[l]),(0,o.vJ)($,[]),(0,o.vJ)((()=>()=>{xe(!1,h)}),[h]),function(){const{openBanner:e,openHistory:t,revokeConsent:n}=(0,S.Y)();(0,o.vJ)((()=>{const i=(i,o,r)=>{if(e)switch(i){case"change":e(r);break;case"history":t(r);break;case"revoke":n(o,r)}},o=t=>{if(!e)return;const n=t.target;(0,le.M)(n,ue).concat((0,de.B)(n,ue)?[n]:[]).forEach((e=>{i(e.getAttribute("href").slice(9),e.getAttribute("data-success-message"),t)})),(0,de.B)(n,".rcb-sc-link")&&i(n.getAttribute("href").slice(1),n.getAttribute("data-success-message"),t)},r=()=>{const{hash:e}=window.location;e.startsWith("#consent-")&&i(e.substring(9),void 0,void 0)};return r(),window.addEventListener("hashchange",r),document.addEventListener("click",o,!0),()=>{window.removeEventListener("hashchange",r),document.removeEventListener("click",o,!0)}}),[e,t,n])}(),(0,o.vJ)((()=>{n&&t&&re().mutate((()=>{t.restart()}))}),[n,t]),(0,o.vJ)((()=>{const e=m.current,t=f.current||document.getElementById(c),i=function(e){r?u():(this.querySelector(`a[href="#${I}"]`).focus(),e.preventDefault())};if(n?(y.current=!0,(null==e?void 0:e.isConnected)&&(e.open&&(null==e.close||e.close.call(e)),re().mutate((()=>{var t;null==(t=e[h?"showModal":"show"])||t.call(e)})),e.addEventListener("cancel",i))):e&&(null==e.close||e.close.call(e)),t){const e=0,i=n?"none"===b?e:p:"none"===w?e:g,o=i>0,r=e=>{o&&(t.style.transition=`background ${i}ms`),t.style.display=e?"block":"none",xe(e,h)};n?re().mutate((()=>{r(!0)})):y.current&&(setTimeout((()=>re().mutate((()=>r(!1)))),i),he())}return()=>{null==e||e.removeEventListener("keyup",i)}}),[n,h,r,u]),(0,o.vJ)((()=>{n&&re().mutate((()=>m.current.focus({preventScroll:!0})))}),[n,l]),(0,o.vJ)((()=>{const e=e=>{let{detail:{triggeredByOtherTab:t}}=e;t&&u()};return document.addEventListener(be.r,e),()=>{document.removeEventListener(be.r,e)}}),[u]);const L=[];if(a&&v.enabled&&L.push((0,i.Y)(Ce,{},"sticky")),n||y.current){const e=(0,i.Y)(N,{className:"wp-exclude-emoji "+(l?"second-layer":""),ref:m,style:{display:"none"},"data-nosnippet":!0,children:(0,i.Y)(D,{value:P,children:(0,i.Y)(ge,{animationIn:C,animationInDuration:x,animationOut:k,animationOutDuration:O,isVisible:n,className:B,children:(0,i.Y)(we,{})})})},"dialog");L.push(s?e:(0,i.Y)(E,{id:c,className:Y.className,ref:f,children:e},"overlay"))}return(0,i.Y)(o.FK,{children:L})})));var Oe=n(2655),De=n(9179),Pe=n(5974);const Se=e=>{e&&(e.preventDefault(),e.stopPropagation())},Ae=(e,t)=>Object.assign(e,{activeAction:t,individualPrivacyOpen:!0,refreshSiteAfterSave:"change"===t&&2e3,visible:!0}),Ye={path:"/revision/second-view",method:x.X.GET,obfuscatePath:"keep-last-part"},Ie={path:"/consent",method:x.X.GET,obfuscatePath:"keep-last-part"};var Be=n(2767),Ne=n(5780),Ee=n(5285),Te=n(7177);const $e=e=>{let{children:t}=e;return(0,i.Y)(o.FK,{children:t})},Le=e=>{let{promise:t,children:n,suspenseProbs:r}=e;const a=(0,o.Kr)((()=>(0,K.g)((t||Promise.resolve()).then((()=>$e)),void 0,r)),[t]);return(0,i.Y)(a,{children:n})},Re=(0,K.g)(Promise.resolve((()=>{const{pageRequestUuid4:e}=(0,S.Y)(),t=(0,me.N)();t.specify(e);const[n,o]=(0,ee.d)(t);return(0,i.Y)(n,{value:o,children:(0,i.Y)(ke,{})})}))),Fe=e=>{let{poweredLink:t}=e;const{frontend:n,customizeValuesBanner:c,pageRequestUuid4:d,iso3166OneAlpha2:u,bannerDesignVersion:h,bannerI18n:p,isPro:g,isLicensed:v,isDevLicense:f,affiliate:y,isCurrentlyInTranslationEditorPreview:b}=(0,r.j)(),{restNamespace:w,restRoot:x,restQuery:k,restNonce:P,restPathObfuscateOffset:A}=(0,a.b)(),{decisionCookieName:Y}=n,I=(0,s.C)(),B=I.getUserDecision(!0),N=!1===B?void 0:B.buttonClicked,E=function(e,t){const n=localStorage.getItem(e);if(n)return JSON.parse(n);const i=Te.A.get(e);return(null==t?void 0:t.startsWith("implicit"))?"implicit_all"===t?Object.values(Ee.um):[]:JSON.parse(i||"[]")}(I.getOption("gcmCookieName"),N),T=(_=n.isTcf,U=n.tcf,G=n.tcfMetadata,I.getOptions(),V=async()=>{},z=[_,U,G,N],(0,o.Kr)((()=>(0,m.P)().then(V)),z)),[$,L]=function(e,t){const i=window.rcbLazyPromise;let o,r;if(i)[r,o]=i;else{let e=!1;r=!1===t?Promise.resolve({}):new Promise((t=>{o=async()=>{e||(e=!0,t(await(0,C.h)({location:Ye,options:{restNamespace:w,restRoot:x,restQuery:k,restNonce:P,restPathObfuscateOffset:A},params:{revisionHash:n.revisionHash},sendRestNonce:!1})))}}))}return[r,o]}(0,n.hasLazyData),R=document.getElementById(d),F=(0,o.Kr)((()=>new Ne.v(R)),[]),W=(0,Oe.u)(),H={onClose:e=>{Object.assign(e,{visible:!1,refreshSiteAfterSave:!1})},openHistory:(e,t)=>{Ae(e,"history"),Se(t)},openBanner:(e,t)=>{Ae(e,"change"),Se(t)},revokeConsent:(e,t,n)=>{let{onPersistConsent:i,onApplyConsent:o,isTcf:r,tcf:a,isGcm:s,groups:c}=e;i({consent:(0,Pe.w)(c,!0),gcmConsent:s?[]:void 0,buttonClicked:"shortcode_revoke",tcfString:void 0}).then((()=>o())).then((()=>{t&&alert(t),he(),setTimeout((()=>window.location.reload()),2e3)})),Se(n)},onSave:(e,t,n)=>{const{refreshSiteAfterSave:i}=e,o=(0,m.P)().then((async()=>{const{onPersistConsent:i,onApplyConsent:o,activeAction:r,consent:a,tcf:s,isTcf:c,isGcm:l,gcmConsent:d,recorder:u}=e;return i({consent:a,gcmConsent:void 0,markAsDoNotTrack:t,buttonClicked:n,tcfString:void 0,recorderJsonString:u?JSON.stringify(u.createReplay()):void 0,uiView:"change"===r?"change":"revoke"!==r?"initial":void 0}).then((()=>o()))}));i?o.then((()=>{he(),setTimeout((()=>window.location.reload()),i||2e3)})):Object.assign(e,{visible:!1})},updateCookieChecked:(e,t,n,i)=>{const{consent:o,isGcm:r,groups:a,updateGcmConsentTypeChecked:s}=e;o[t]||(o[t]=[]);const c=o[t],l=c.indexOf(n);i&&-1===l?c.push(n):!i&&l>-1&&c.splice(l,1),c.length||delete o[t]},updateGroupChecked:(e,t,n)=>{const{groups:i,updateCookieChecked:o}=e;for(const e of i.find((e=>{let{id:n}=e;return n===t})).items)o(t,e.id,n)}},[M,J]=(0,S.d)({...c,...n,blocker:void 0,recorder:F,productionNotice:(0,i.Y)(Be.A,{isPro:g,isLicensed:v,isDevLicense:f,i18n:p}),pageRequestUuid4:d,iso3166OneAlpha2:u,gcmConsent:E,tcf:void 0,tcfFilterBy:"legInt",poweredLink:t,visible:!1,skipOverlay:!0,previewCheckboxActiveState:!1,individualPrivacyOpen:!1,designVersion:h,i18n:p,keepVariablesInTexts:b,affiliate:y,consent:{...!1===B?{}:B.consent,...(0,s.C)().getDefaultDecision(!1===B)},onPersistConsent:D.x,onApplyConsent:()=>(0,s.C)().applyCookies({type:"consent"}),didGroupFirstChange:!1,fetchLazyLoadedDataForSecondView:L,suspense:{tcf:T,lazyLoadedDataForSecondView:$}},{...W,...H,fetchHistory:async()=>{const e=[];try{e.push(...await(0,C.h)({location:Ie,options:{restNamespace:w,restRoot:x,restQuery:k,restNonce:P,restPathObfuscateOffset:A},cookieValueAsParam:[Y],sendRestNonce:!1}))}catch(e){}for(const{createdClientTime:t}of I.getConsentQueue())e.unshift({created:new Date(t).toISOString(),isDoNotTrack:!1,isForwarded:!1,isUnblock:!1,context:void 0,id:new Date(t).getTime(),uuid:void 0});return e},onLanguageSwitch:(e,t)=>{let{url:n}=t;window.location.href=n}},{deps:[T]});var _,U,G,V,z;O(J),function(e,t){(0,o.vJ)((()=>{const n=()=>{const n=(0,l.y)(t);n&&e.set({consent:n.consent,isConsentGiven:!0})};return document.addEventListener(De.T,n),()=>{document.removeEventListener(De.T,n)}}),[])}(J,Y);const K=(e=>{const t=(0,o.li)(!1),n=(0,o.li)(null),i=(0,o.li)(new Promise((e=>{})));return(0,o.vJ)((()=>t.current?()=>{}:(n.current=e,e.then((o=>{n.current!==e||t.current||(t.current=!0,i.current=Promise.resolve(o))})).catch((()=>{})),()=>{n.current=null})),[e]),i.current})(T);return(0,i.Y)(M,{value:J,children:(0,i.Y)(Le,{promise:K,children:(0,i.Y)(Re,{})})})}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.8.4/a1d112647829e13dde82cdc1f1067df4/banner-lite-banner-ui.lite.js.map