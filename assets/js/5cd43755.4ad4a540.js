"use strict";(self.webpackChunkzeno_docs=self.webpackChunkzeno_docs||[]).push([[517],{5728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(5893),s=t(1151);const o={},r="Instance Views",c={id:"views/views",title:"Instance Views",description:"Instance Views let you specify how Zeno should render your data.",source:"@site/docs/views/views.mdx",sourceDirName:"views",slug:"/views/",permalink:"/docs/views/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Client API",permalink:"/docs/python-client"},next:{title:"Standard Views",permalink:"/docs/views/existing"}},a={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"instance-views",children:"Instance Views"}),"\n",(0,i.jsx)(n.p,{children:"Instance Views let you specify how Zeno should render your data.\nThere are two ways to define instance views:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Standard Views"})," - Use the string identifier for one of the ",(0,i.jsx)(n.a,{href:"/docs/views/existing",children:"Standard Views"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Custom Views"})," - Use the ",(0,i.jsx)(n.a,{href:"/docs/views/spec",children:"View Specification"})," to create your own view."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can either pass in a standard view string or a custom view ",(0,i.jsx)(n.code,{children:"dict"})," object to the view option of the ",(0,i.jsx)(n.code,{children:"create_project"})," function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from zeno-client import ZenoClient\nclient = ZenoClient("/** API KEY **/")\n\n# Standard View\nproject = client.create_project(\n    name="My Project",\n    view="text-classification"\n)\n\n# Custom View\nproject = client.create_project(\n    name="My Project",\n    view={\n        "data": {\n            "type": "image"\n        },\n        "label": {\n            "type": "text"\n        },\n        "output": {\n            "type": "text"\n        }\n    }\n)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);