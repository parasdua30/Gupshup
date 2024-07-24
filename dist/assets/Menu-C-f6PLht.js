import{aO as K,aP as Z,r as m,aQ as ee,aR as te,G as A,j as k,E as d,H as b,z as Y,aS as re,aT as ne,aU as oe,aA as U,y as ae,B as H,ax as se,D as j,F as ie,J as ce}from"./index-BE4sCsEh.js";import{u as le,h as X,q as de,j as pe,t as ue,v as F,M as fe,P as he,c as me}from"./Modal-D0MrQml3.js";import{c as xe}from"./Typography-BCMIRyZ8.js";const ge=["className","component"];function ve(t={}){const{themeId:e,defaultTheme:o,defaultClassName:r="MuiBox-root",generateClassName:a}=t,x=K("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(Z);return m.forwardRef(function(p,s){const i=ee(o),v=te(p),{className:h,component:w="div"}=v,B=A(v,ge);return k.jsx(x,d({as:w,ref:s,className:b(h,a?a(r):r),theme:e&&i[e]||i},B))})}const Ee=Y("MuiBox",["root"]),ke=re(),Ie=ve({themeId:ne,defaultTheme:ke,defaultClassName:Ee.root,generateClassName:oe.generate}),Pe=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ye(t,e,o){const r=e.getBoundingClientRect(),a=o&&o.getBoundingClientRect(),x=X(e);let f;if(e.fakeTransform)f=e.fakeTransform;else{const s=x.getComputedStyle(e);f=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let c=0,p=0;if(f&&f!=="none"&&typeof f=="string"){const s=f.split("(")[1].split(")")[0].split(",");c=parseInt(s[4],10),p=parseInt(s[5],10)}return t==="left"?a?`translateX(${a.right+c-r.left}px)`:`translateX(${x.innerWidth+c-r.left}px)`:t==="right"?a?`translateX(-${r.right-a.left-c}px)`:`translateX(-${r.left+r.width-c}px)`:t==="up"?a?`translateY(${a.bottom+p-r.top}px)`:`translateY(${x.innerHeight+p-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-p}px)`:`translateY(-${r.top+r.height-p}px)`}function we(t){return typeof t=="function"?t():t}function z(t,e,o){const r=we(o),a=ye(t,e,r);a&&(e.style.webkitTransform=a,e.style.transform=a)}const De=m.forwardRef(function(e,o){const r=U(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},x={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:f,appear:c=!0,children:p,container:s,direction:i="down",easing:v=a,in:h,onEnter:w,onEntered:B,onEntering:D,onExit:C,onExited:$,onExiting:I,style:T,timeout:E=x,TransitionComponent:L=de}=e,R=A(e,Pe),u=m.useRef(null),S=le(p.ref,u,o),P=n=>l=>{n&&(l===void 0?n(u.current):n(u.current,l))},y=P((n,l)=>{z(i,n,s),ue(n),w&&w(n,l)}),g=P((n,l)=>{const V=F({timeout:E,style:T,easing:v},{mode:"enter"});n.style.webkitTransition=r.transitions.create("-webkit-transform",d({},V)),n.style.transition=r.transitions.create("transform",d({},V)),n.style.webkitTransform="none",n.style.transform="none",D&&D(n,l)}),M=P(B),N=P(I),G=P(n=>{const l=F({timeout:E,style:T,easing:v},{mode:"exit"});n.style.webkitTransition=r.transitions.create("-webkit-transform",l),n.style.transition=r.transitions.create("transform",l),z(i,n,s),C&&C(n)}),J=P(n=>{n.style.webkitTransition="",n.style.transition="",$&&$(n)}),Q=n=>{f&&f(u.current,n)},_=m.useCallback(()=>{u.current&&z(i,u.current,s)},[i,s]);return m.useEffect(()=>{if(h||i==="down"||i==="right")return;const n=pe(()=>{u.current&&z(i,u.current,s)}),l=X(u.current);return l.addEventListener("resize",n),()=>{n.clear(),l.removeEventListener("resize",n)}},[i,h,s]),m.useEffect(()=>{h||_()},[h,_]),k.jsx(L,d({nodeRef:u,onEnter:y,onEntered:M,onEntering:g,onExit:G,onExited:J,onExiting:N,addEndListener:Q,appear:c,in:h,timeout:E},R,{children:(n,l)=>m.cloneElement(p,d({ref:S,style:d({visibility:n==="exited"&&!h?"hidden":void 0},T,p.props.style)},l))}))});function Te(t){return ae("MuiDrawer",t)}Y("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Re=["BackdropProps"],Be=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],O=(t,e)=>{const{ownerState:o}=t;return[e.root,(o.variant==="permanent"||o.variant==="persistent")&&e.docked,e.modal]},Ce=t=>{const{classes:e,anchor:o,variant:r}=t,a={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${j(o)}`,r!=="temporary"&&`paperAnchorDocked${j(o)}`]};return ce(a,Te,e)},be=H(fe,{name:"MuiDrawer",slot:"Root",overridesResolver:O})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),W=H("div",{shouldForwardProp:se,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:O})({flex:"0 0 auto"}),$e=H(he,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`paperAnchor${j(o.anchor)}`],o.variant!=="temporary"&&e[`paperAnchorDocked${j(o.anchor)}`]]}})(({theme:t,ownerState:e})=>d({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),q={left:"right",right:"left",top:"down",bottom:"up"};function Me(t){return["left","right"].indexOf(t)!==-1}function Ne({direction:t},e){return t==="rtl"&&Me(e)?q[e]:e}const Le=m.forwardRef(function(e,o){const r=ie({props:e,name:"MuiDrawer"}),a=U(),x=me(),f={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:p,children:s,className:i,elevation:v=16,hideBackdrop:h=!1,ModalProps:{BackdropProps:w}={},onClose:B,open:D=!1,PaperProps:C={},SlideProps:$,TransitionComponent:I=De,transitionDuration:T=f,variant:E="temporary"}=r,L=A(r.ModalProps,Re),R=A(r,Be),u=m.useRef(!1);m.useEffect(()=>{u.current=!0},[]);const S=Ne({direction:x?"rtl":"ltr"},c),y=d({},r,{anchor:c,elevation:v,open:D,variant:E},R),g=Ce(y),M=k.jsx($e,d({elevation:E==="temporary"?v:0,square:!0},C,{className:b(g.paper,C.className),ownerState:y,children:s}));if(E==="permanent")return k.jsx(W,d({className:b(g.root,g.docked,i),ownerState:y,ref:o},R,{children:M}));const N=k.jsx(I,d({in:D,direction:q[S],timeout:T,appear:u.current},$,{children:M}));return E==="persistent"?k.jsx(W,d({className:b(g.root,g.docked,i),ownerState:y,ref:o},R,{children:N})):k.jsx(be,d({BackdropProps:d({},p,w,{transitionDuration:T}),className:b(g.root,g.modal,i),open:D,ownerState:y,onClose:B,hideBackdrop:h,ref:o},R,L,{children:N}))}),Se=xe(k.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");export{Ie as B,Le as D,Se as M};
