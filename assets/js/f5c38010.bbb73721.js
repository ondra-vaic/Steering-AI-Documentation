"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[409],{6986:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(4848),t=i(8453);i(6025);const r={sidebar_position:2},s="Align Up",l={id:"documentation-defaults/behaviors/simple-behaviors/align-up",title:"Align Up",description:"This behavior tries to prevent entites from flying up or down at too steep angles which may look unnatural.",source:"@site/docs/5_documentation-defaults/1_behaviors/1_simple-behaviors/2_align-up.mdx",sourceDirName:"5_documentation-defaults/1_behaviors/1_simple-behaviors",slug:"/documentation-defaults/behaviors/simple-behaviors/align-up",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/simple-behaviors/align-up",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Debug Simple",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/simple-behaviors/debug-simple"},next:{title:"Follow Path",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/simple-behaviors/follow-path"}},c={},d=[{value:"AlignUpJob",id:"alignupjob",level:3},{value:"AlignUpComponent",id:"alignupcomponent",level:3}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"align-up",children:"Align Up"})}),"\n",(0,o.jsx)(n.p,{children:"This behavior tries to prevent entites from flying up or down at too steep angles which may look unnatural."}),"\n",(0,o.jsx)(n.h3,{id:"alignupjob",children:"AlignUpJob"}),"\n",(0,o.jsxs)(n.p,{children:["The behavior affects only the direction, not speed. The ",(0,o.jsx)(n.code,{children:"DesiredDirection"})," is the current direction of the entity projected on world's up. The ",(0,o.jsx)(n.code,{children:"DirectionDesire"})," for this behavior increases with the angle difference between the world's up ",(0,o.jsx)(n.code,{children:"float3(0, 1, 0)"})," and the entity's current direction."]}),"\n",(0,o.jsx)(n.p,{children:"This behavior outputs the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DesiredDirection"})," - The current direction projected on ",(0,o.jsx)(n.code,{children:"float3(0, 1, 0)"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DirectionDesire"})," - From ",(0,o.jsx)(n.code,{children:"0"})," to ",(0,o.jsx)(n.code,{children:"DirectionStrength"})," as angle between entity's up and ",(0,o.jsx)(n.code,{children:"float3(0, 1, 0)"})," goes from ",(0,o.jsx)(n.code,{children:"0"})," to ",(0,o.jsx)(n.code,{children:"90"})," degrees."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DesiredSpeed"})," - ",(0,o.jsx)(n.code,{children:"0"})," ",(0,o.jsx)(n.em,{children:"(constant)"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SpeedDesire"})," - ",(0,o.jsx)(n.code,{children:"0"})," ",(0,o.jsx)(n.em,{children:"(constant)"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Priority"})," -  ",(0,o.jsx)(n.code,{children:"Priority"})," ",(0,o.jsx)(n.em,{children:"(constant)"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"alignupcomponent",children:"AlignUpComponent"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"AlignUpComponent"})," contains only ",(0,o.jsx)(n.code,{children:"BaseData"}),". The main interesting properties to adjust on the component are:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"BaseData"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DirectionStrength"})," - Multiplier for ",(0,o.jsx)(n.code,{children:"DirectionDesire"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Priority"})," - Priority."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"These two will likely be the most important properties for most behaviors."})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(6540);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);