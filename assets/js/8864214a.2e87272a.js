"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6907],{8686:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>a});var s=i(4848),o=i(8453);i(6025);const r={sidebar_position:4},c="VelocityResult(s)",n={id:"documentation-defaults/behaviors/VelocityResult",title:"VelocityResult(s)",description:"All behaviors in the defaults library return a plain struct VelocityResult per entity. The results for each entity in a behavior are contained by VelocityResults, a wrapper object for NativeArray. The VelocityResults structure is 'compatible' with CombineVelocitiesJobWrapper, a combiner which receives an array of VelocityResults, one for each behavior.",source:"@site/docs/5_documentation-defaults/1_behaviors/4_VelocityResult.mdx",sourceDirName:"5_documentation-defaults/1_behaviors",slug:"/documentation-defaults/behaviors/VelocityResult",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/VelocityResult",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Avoid Vertical Walls",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/ray-behaviors/avoid-vertical-walls"},next:{title:"Accumulators",permalink:"/Steering-AI-Documentation/docs/documentation-defaults/behaviors/Accumulators"}},l={},a=[{value:"VelocityResult",id:"velocityresult",level:2},{value:"VelocityResults",id:"velocityresults-1",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"velocityresults",children:"VelocityResult(s)"})}),"\n",(0,s.jsxs)(t.p,{children:["All behaviors in the defaults library return a plain struct ",(0,s.jsx)(t.code,{children:"VelocityResult"})," per entity. The results for each entity in a behavior are contained by ",(0,s.jsx)(t.code,{children:"VelocityResults"}),", a wrapper object for ",(0,s.jsx)(t.a,{href:"https://docs.unity3d.com/ScriptReference/Unity.Collections.NativeArray_1.html",children:(0,s.jsx)(t.code,{children:"NativeArray<VelocityResult>"})}),". The ",(0,s.jsx)(t.code,{children:"VelocityResults"})," structure is 'compatible' with ",(0,s.jsx)(t.a,{href:"/docs/documentation-defaults/Combiner",children:(0,s.jsx)(t.code,{children:"CombineVelocitiesJobWrapper"})}),", a ",(0,s.jsx)(t.a,{href:"/docs/documentation-core/combiner",children:"combiner"})," which receives an array of ",(0,s.jsx)(t.code,{children:"VelocityResults"}),", one for each behavior."]}),"\n",(0,s.jsx)(t.h2,{id:"velocityresult",children:"VelocityResult"}),"\n",(0,s.jsxs)(t.p,{children:["Each behavior returns one ",(0,s.jsx)(t.code,{children:"VelocityResult"})," per entity. It says how desirable it is to travel at a certain velocity. It contains the following properties:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"float3 Direction"})," - Which direction to travel in."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"float Speed"})," - What speed to travel at."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"float DirectionDesire"})," - How much (0, 1) do we want to travel in ",(0,s.jsx)(t.code,{children:"Direction"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"float SpeedDesire"})," - How much (0, 1) do we want to travel at ",(0,s.jsx)(t.code,{children:"Speed"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"byte Priority"})," - What is the priority (0, 255) of this behavior."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"velocityresults-1",children:"VelocityResults"}),"\n",(0,s.jsxs)(t.p,{children:["Each behavior fills ",(0,s.jsx)(t.code,{children:"VelocityResults"})," with one ",(0,s.jsx)(t.code,{children:"VelocityResult"})," per entity. The struct is just a wrapper for a ",(0,s.jsx)(t.code,{children:"NativeArray"}),", which it provides readonly access to. It can be allocated with a the constructor, and disposed of after a job is finished with ",(0,s.jsx)(t.code,{children:"Dispose"}),". The ",(0,s.jsx)(t.code,{children:"VelocityResults"})," struct implements ",(0,s.jsx)(t.code,{children:"IBehaviorResults<VelocityResult>"}),", so that it can be used internally by the framework."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",metastring:'title="VelocityResults.cs"',children:"public struct VelocityResults : IBehaviorResults<VelocityResult>\r\n{\r\n    public NativeArray<VelocityResult> Results { get ... ; };\r\n    \r\n    public VelocityResults(int entityCount) { ... }  \r\n\r\n    public void Dispose(JobHandle dependency) { ... }\r\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>n});var s=i(6540);const o={},r=s.createContext(o);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);