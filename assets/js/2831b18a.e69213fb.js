"use strict";(self.webpackChunkzeno_docs=self.webpackChunkzeno_docs||[]).push([[640],{9342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=n(5893),s=n(1151),r=n(9286);const l={},d="View Elements",a={id:"views/spec/other",title:"View Elements",description:"A View Element defines how to interpret and display data in your Zeno Project.",source:"@site/docs/views/spec/other.mdx",sourceDirName:"views/spec",slug:"/views/spec/other",permalink:"/docs/views/spec/other",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"View Specification",permalink:"/docs/views/spec/"}},h={},o=[{value:"Text",id:"text",level:2},{value:"Properties",id:"properties",level:4},{value:"Image",id:"image",level:2},{value:"Audio",id:"audio",level:2},{value:"Code",id:"code",level:2},{value:"Markdown",id:"markdown",level:2},{value:"3D",id:"3d",level:2},{value:"Message",id:"message",level:2},{value:"Properties",id:"properties-1",level:4},{value:"List",id:"list",level:2},{value:"Properties",id:"properties-2",level:4},{value:"VStack",id:"vstack",level:2},{value:"Properties",id:"properties-3",level:4},{value:"Separated Values",id:"separated-values",level:2},{value:"Properties",id:"properties-4",level:4}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"view-elements",children:"View Elements"}),"\n",(0,i.jsx)(t.p,{children:"A View Element defines how to interpret and display data in your Zeno Project.\nThe following view elements can be used in your Zeno Projects."}),"\n",(0,i.jsx)(t.h2,{id:"text",children:"Text"}),"\n",(0,i.jsxs)(t.p,{children:["A plaintext view to display raw text data. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJ0ZXh0LWNsYXNzaWZpY2F0aW9uIn0=",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "text",\n  "label": string\n}\n'}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"label"}),(0,i.jsx)(t.td,{children:"Optional[String]"}),(0,i.jsx)(t.td,{children:"Label to be added in front of the text data."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"image",children:"Image"}),"\n",(0,i.jsxs)(t.p,{children:["A view to display image data. Expects a URL to fetch the image from as its data input. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJpbWFnZS1jbGFzc2lmaWNhdGlvbiJ9",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "image",\n  "maxWidth": "small" | "medium" | "large" | "full" \n}\n'}),"\n",(0,i.jsx)(t.h2,{id:"audio",children:"Audio"}),"\n",(0,i.jsxs)(t.p,{children:["A view to display audio data. Expects a URL to fetch the audio data from as its input. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJhdWRpby10cmFuc2NyaXB0aW9uIn0=",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "audio"\n}\n'}),"\n",(0,i.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,i.jsxs)(t.p,{children:["A code-display with syntax highlighting. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJjb2RlLWdlbmVyYXRpb24ifQ==",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "code"\n}\n'}),"\n",(0,i.jsx)(t.h2,{id:"markdown",children:"Markdown"}),"\n",(0,i.jsxs)(t.p,{children:["Markdown visualization for a more flexible text display. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJjaGF0Ym90LW1hcmtkb3duIn0=",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "markdown"\n}\n'}),"\n",(0,i.jsx)(t.h2,{id:"3d",children:"3D"}),"\n",(0,i.jsxs)(t.p,{children:["3D model rendering. Expects a URL to a ",(0,i.jsx)(t.a,{href:"https://github.com/KhronosGroup/glTF/tree/main/specification/2.0",children:"glTF/GLB"})," model. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiIzRC1vYmplY3QtY2xhc3NpZmljYXRpb24ifQ==",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "3D"\n}\n'}),"\n",(0,i.jsx)(t.h2,{id:"message",children:"Message"}),"\n",(0,i.jsxs)(t.p,{children:["Visualization of data in message bubbles akin to a chat view. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJjaGF0Ym90In0=",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "message"\n  "plain": boolean,\n  "content": ViewElement | string,\n  "ownMessage": boolean,\n  "highlight": boolean\n}\n'}),"\n",(0,i.jsx)(t.h4,{id:"properties-1",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"content"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"/docs/views/spec/other",children:"ViewElement"})," | String"]}),(0,i.jsxs)(t.td,{children:["Element to use to render the message content. If ",(0,i.jsx)(t.code,{children:"plain == true"}),", this is interpreted as a String and displayed as plain text instead of a OpenAI-style message object."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"plain"}),(0,i.jsx)(t.td,{children:"Optional[boolean]"}),(0,i.jsx)(t.td,{children:"How to render the content."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ownMessage"}),(0,i.jsx)(t.td,{children:"Optional[boolean]"}),(0,i.jsxs)(t.td,{children:["Whether this message should be displayed as incoming or outgoing. Can also be specified in the data if ",(0,i.jsx)(t.code,{children:"plain == false"}),". True for outgoing."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"highlight"}),(0,i.jsx)(t.td,{children:"Optional[boolean]"}),(0,i.jsx)(t.td,{children:"Whether this message should be highlighted."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"list",children:"List"}),"\n",(0,i.jsxs)(t.p,{children:["A list of ViewElements. Can be used to render multiple view elements at once. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJjaGF0Ym90In0=",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "list"\n  "elements": ViewElement,\n  "horizontal": boolean,\n  "collapsible": "top" | "bottom",\n  "border": boolean,\n  "pad": boolean\n}\n'}),"\n",(0,i.jsx)(t.h4,{id:"properties-2",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"elements"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/views/spec/other",children:"ViewElement"})}),(0,i.jsx)(t.td,{children:"Element used to render all the elements of the list."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"horizontal"}),(0,i.jsx)(t.td,{children:"Optional[boolean]"}),(0,i.jsx)(t.td,{children:"If specified, renders list horizontally."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"collapsible"}),(0,i.jsx)(t.td,{children:"Optional[String]"}),(0,i.jsxs)(t.td,{children:["If specified, only renders four elements of the list per default but adds a ",(0,i.jsx)(t.em,{children:"show more"})," button to expand. Can specify either ",(0,i.jsx)(t.code,{children:'"top"'})," or ",(0,i.jsx)(t.code,{children:'"bottom"'}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"border"}),(0,i.jsx)(t.td,{children:"Optional[boolean]"}),(0,i.jsx)(t.td,{children:"Whether to add a border around each list element."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pad"}),(0,i.jsx)(t.td,{children:"Optional[boolean]"}),(0,i.jsx)(t.td,{children:"Whether to add padding to each list element."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"vstack",children:"VStack"}),"\n",(0,i.jsxs)(t.p,{children:["A vertical stack of keyed elements. Can be used to combine different element types. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJyYWcifQ==",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "vstack"\n  "keys": Record<string, ViewElement>\n}\n'}),"\n",(0,i.jsx)(t.h4,{id:"properties-3",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"keys"}),(0,i.jsxs)(t.td,{children:["Record<string:",(0,i.jsx)(t.a,{href:"/docs/views/spec/other",children:"ViewElement"}),">"]}),(0,i.jsx)(t.td,{children:"List of objects mapping from a String key to a ViewElement used to render the content of the data behind the key."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"separated-values",children:"Separated Values"}),"\n",(0,i.jsxs)(t.p,{children:["Splitting the data into columns using a specified separator. See in ",(0,i.jsx)(t.a,{href:"https://hub.zenoml.com/playground?params=eyJzYW1wbGUiOiJzcGFjZS1zZXBhcmF0ZWQtdmFsdWVzIn0=",children:"this example"}),"."]}),"\n",(0,i.jsx)(r.Z,{language:"json",title:"Separated Values",children:'{\n  "type": "separatedValues",\n  "separator": string,\n  "header": string,\n  "highlight": boolean\n}\n'}),"\n",(0,i.jsx)(t.h4,{id:"properties-4",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"separator"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Character or sequence to separate the data with."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:"Optional[String]"}),(0,i.jsx)(t.td,{children:"The heading of the row of data. Ignored if not specified."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"highlight"}),(0,i.jsx)(t.td,{children:"Optional[boolean]"}),(0,i.jsxs)(t.td,{children:["Whether or not to highlight the data that is being separated. Can be used to create an alternating pattern of rows in a table. ",(0,i.jsx)(t.strong,{children:"Default: false"})]})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var i=n(7294);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);