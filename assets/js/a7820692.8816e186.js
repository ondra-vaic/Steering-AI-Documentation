"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3382],{3641:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var r=i(4848),d=i(8453);i(6025);const s={sidebar_position:7},o="Wandering",t={id:"documentation-defaults/behaviors/simple-behaviors/wandering",title:"Wandering",description:"Makes the entity wander around the world smoothly changing the desired direction and speed.",source:"@site/docs/5_documentation-defaults/1_behaviors/1_simple-behaviors/7_wandering.mdx",sourceDirName:"5_documentation-defaults/1_behaviors/1_simple-behaviors",slug:"/documentation-defaults/behaviors/simple-behaviors/wandering",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/simple-behaviors/wandering",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Keep Height",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/simple-behaviors/KeepHeight"},next:{title:"Neighbor Behaviors",permalink:"/Steering-AI-Documentation/docs/category/neighbor-behaviors-1"}},c={},a=[{value:"WanderingJob",id:"wanderingjob",level:2},{value:"WanderingComponent",id:"wanderingcomponent",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"wandering",children:"Wandering"})}),"\n",(0,r.jsx)(n.p,{children:"Makes the entity wander around the world smoothly changing the desired direction and speed."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Using either ",(0,r.jsx)(n.a,{href:"/docs/documentation-defaults/behaviors/simple-behaviors/go-foward",children:(0,r.jsx)(n.code,{children:"GoForwardJobWrapper"})})," or ",(0,r.jsx)(n.code,{children:"WanderingJobWrapper"})," is almost always a good idea. They both always return a non-zero direction, speed, and desires. This ensures that an entity always 'has something to do'."]})}),"\n",(0,r.jsx)(n.h2,{id:"wanderingjob",children:"WanderingJob"}),"\n",(0,r.jsx)(n.p,{children:"This behavior outputs the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DesiredDirection"})," - Random direction smoothly changing over time."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DirectionDesire"})," - ",(0,r.jsx)(n.code,{children:"DirectionStrength"})," ",(0,r.jsx)(n.em,{children:"(constant)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DesiredSpeed"})," - Random speed smoothly changing over time between ",(0,r.jsx)(n.code,{children:"MinSpeed"})," and ",(0,r.jsx)(n.code,{children:"MaxSpeed"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SpeedDesire"})," - ",(0,r.jsx)(n.code,{children:"SpeedStrength"})," ",(0,r.jsx)(n.em,{children:"(constant)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Priority"})," -  ",(0,r.jsx)(n.code,{children:"Priority"})," ",(0,r.jsx)(n.em,{children:"(constant)"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"wanderingcomponent",children:"WanderingComponent"}),"\n",(0,r.jsxs)(n.p,{children:["The main interesting properties to adjust on ",(0,r.jsx)(n.code,{children:"WanderingComponent"})," are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MaxUpDownAngle"})," - Maximum possible angle between the returned desired direction and ",(0,r.jsx)(n.em,{children:"XZ"})," plane."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"XFrequency"})," - Frequency of desired direction change in the ",(0,r.jsx)(n.em,{children:"XZ"})," plane."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"YFrequency"})," - Frequency of desired direction change in it's ",(0,r.jsx)(n.code,{children:"y"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SpeedFrequency"})," - Frequency of the speed changing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MinSpeed"})," - Minimum desired speed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MaxSpeed"})," - Maximum desired speed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BaseData"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DirectionStrength"})," - Determines ",(0,r.jsx)(n.code,{children:"DirectionDesire"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SpeedStrength"})," - Determines ",(0,r.jsx)(n.code,{children:"SpeedDesire"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Priority"})," - Priority."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var r=i(6540);const d={},s=r.createContext(d);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);