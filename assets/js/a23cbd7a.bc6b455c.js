"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9242],{3062:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=o(4848),t=o(8453);o(6025);const a={sidebar_position:5},i="Accumulators",c={id:"documentation-defaults/behaviors/Accumulators",title:"Accumulators",description:"The library includes three accumulators which are commonly useful. Accumulators are implementations of IAccumulator. They aggregate information about neighbors or raycasts inside implementations of neighbor behaviors and raycast behaviors.",source:"@site/docs/5_documentation-defaults/1_behaviors/5_Accumulators.mdx",sourceDirName:"5_documentation-defaults/1_behaviors",slug:"/documentation-defaults/behaviors/Accumulators",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/Accumulators",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"VelocityResult(s)",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/VelocityResult"},next:{title:"Queries",permalink:"/Steering-AI-Documentation/docs/category/queries-1"}},s={},u=[{value:"NoneAccumulator",id:"noneaccumulator",level:2},{value:"SimpleAccumulator",id:"simpleaccumulator",level:2},{value:"MaxAccumulator",id:"maxaccumulator",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"accumulators",children:"Accumulators"})}),"\n",(0,r.jsxs)(n.p,{children:["The library includes three ",(0,r.jsx)(n.em,{children:"accumulators"})," which are commonly useful. ",(0,r.jsx)(n.em,{children:"Accumulators"})," are implementations of ",(0,r.jsx)(n.a,{href:"/docs/documentation-core/behaviors/accumulators",children:(0,r.jsx)(n.code,{children:"IAccumulator"})}),". They aggregate information about neighbors or raycasts inside implementations of ",(0,r.jsx)(n.a,{href:"/docs/documentation-core/behaviors/neighbor-behaviors/#implementing-ineighborbehaviorjobc1-c2-a-r",children:"neighbor behaviors"})," and ",(0,r.jsx)(n.a,{href:"/docs/documentation-core/behaviors/ray-behaviors/ray-behaviors#implementing-iraycastbehaviorjobc-a1-a2-r",children:"raycast behaviors"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"noneaccumulator",children:"NoneAccumulator"}),"\n",(0,r.jsxs)(n.p,{children:["Doesn't do anything. Useful when an accumulator is not needed. Example of this is the ",(0,r.jsx)(n.code,{children:"OnMiss"})," of ",(0,r.jsx)(n.a,{href:"/docs/documentation-defaults/behaviors/ray-behaviors/envrionment-avoidance",children:(0,r.jsx)(n.code,{children:"EnvironmentAvoidanceJob"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="NoneAccumulator.cs"',children:"public struct NoneAccumulator : IAccumulator\r\n{\r\n    public void Init() { }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"simpleaccumulator",children:"SimpleAccumulator"}),"\n",(0,r.jsxs)(n.p,{children:["Accumulates a weighted sum of vectors passed into the ",(0,r.jsx)(n.code,{children:"Add"})," function. Useful for example to find a centroid inside ",(0,r.jsx)(n.a,{href:"/docs/documentation-defaults/behaviors/neighbor-behaviors/cohesion",children:(0,r.jsx)(n.code,{children:"CohesionJob"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="SimpleAccumulator.cs"',children:"public struct SimpleAccumulator : IAccumulator\r\n{\r\n    public float3 SumVector;\r\n    public float SumMagnitude;\r\n\r\n    public void Add(float3 vector, float weight)\r\n    {\r\n        SumVector += vector;\r\n        SumMagnitude += magnitude;\r\n    }\r\n\r\n    public void Init()\r\n    {\r\n        SumVector = new float3();\r\n        SumMagnitude = 0;\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"maxaccumulator",children:"MaxAccumulator"}),"\n",(0,r.jsxs)(n.p,{children:["Finds a vector with a largest ",(0,r.jsx)(n.code,{children:"weight"})," passed into the ",(0,r.jsx)(n.code,{children:"Add"})," function. Could be useful for any behavior which finds direction with some associated maximum score. For example ",(0,r.jsx)(n.a,{href:"/docs/documentation-defaults/behaviors/ray-behaviors/envrionment-avoidance",children:(0,r.jsx)(n.code,{children:"EnvironmentAvoidanceJob"})})," finds a raycast hit with maximum 'dangerousness score' to determine what to avoid."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="MaxAccumulator.cs"',children:"public struct MaxAccumulator : IAccumulator\r\n{\r\n    public float MaxMagnitude;\r\n    public float3 Direction;\r\n    \r\n    public void Add(float3 direction, float weight)\r\n    {\r\n        if (magnitude > MaxMagnitude)\r\n        {\r\n            MaxMagnitude = magnitude;\r\n            Direction = direction;\r\n        }\r\n    }\r\n\r\n    public void Init()\r\n    {\r\n        MaxMagnitude = float.NegativeInfinity;\r\n    }\r\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var r=o(6540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);