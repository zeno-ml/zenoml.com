"use strict";(self.webpackChunkzeno_docs=self.webpackChunkzeno_docs||[]).push([[157],{5644:(M,i,N)=>{N.r(i),N.d(i,{assets:()=>t,contentTitle:()=>s,default:()=>D,frontMatter:()=>e,metadata:()=>j,toc:()=>T});var I=N(5893),a=N(1151);const e={},s="Ragas",j={id:"integrations/ragas",title:"Ragas",description:"Open with Zeno",source:"@site/docs/integrations/ragas.mdx",sourceDirName:"integrations",slug:"/integrations/ragas",permalink:"/docs/integrations/ragas",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EleutherAI",permalink:"/docs/integrations/eleuther"},next:{title:"Tutorials",permalink:"/docs/tutorials/"}},t={},T=[];function g(M){const i={a:"a",h1:"h1",img:"img",p:"p",...(0,a.a)(),...M.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.h1,{id:"ragas",children:"Ragas"}),"\n",(0,I.jsx)(i.p,{children:(0,I.jsx)(i.a,{href:"https://hub.zenoml.com/project/b35c83b8-0b22-4b9c-aedb-80964011d7a7/Ragas%20FICA%20eval",children:(0,I.jsx)(i.img,{src:"https://img.shields.io/badge/%20-Open_with_Zeno-612593.svg?labelColor=white&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyIDE1Ljc4NDJMMTYuNDg2MiAxNS43ODQyTDE2LjQ4NjIgMC4yNzA0MDFMMjQuMzAyIDguMDg2MTdMMzIgMTUuNzg0MloiIGZpbGw9IiM2MTI1OTMiLz4KPHBhdGggZD0iTTE1Ljc5MTcgMTUuODMxMUw4LjAzNDc5IDguMDc0MjJMMTUuNzkxNyAwLjMxNzMyOEwxNS43OTE3IDE1LjgzMTFaIiBmaWxsPSIjNjEyNTkzIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cGF0aCBkPSJNMTQuODY1NSAxNS44MzExTDcuNTk0ODUgMTUuODMxMUw3LjU5NDg1IDguNTYwNDJMMTQuODY1NSAxNS44MzExWiIgZmlsbD0iIzYxMjU5MyIgZmlsbC1vcGFjaXR5PSIwLjYiLz4KPHBhdGggZD0iTTYuMTEyOSAxNS44MzExTDMuMjQxNyAxNS44MzExTDMuMjQxNyAxMi44NjcyTDYuMTEyOSAxNS44MzExWiIgZmlsbD0iIzZBMUI5QSIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPHBhdGggZD0iTTIuNzMyMjggMTUuODMxTDEuNTE1NSAxNC42MTQzTDIuNzQyNzEgMTMuMzg3TDIuNzMyMjggMTUuODMxWiIgZmlsbD0iIzZBMUI5QSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPHBhdGggZD0iTTIuMDM3NiAxNS43ODQyTDEuMTU3NzEgMTUuNzg0MkwxLjE1NzcxIDE0Ljk1MDZMMi4wMzc2IDE1Ljc4NDJaIiBmaWxsPSIjNkExQjlBIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNMC44MzM1NjggMTUuNzg0MUwwLjUwOTM5OSAxNS40NkwwLjgzMzU2NyAxNS4xMzU4TDAuODMzNTY4IDE1Ljc4NDFaIiBmaWxsPSIjNjEyNTkzIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMC4xMDYxODcgMTUuNzk0NEwwLjMwMTAyNSAxNS41OTk2TDAuNDk1ODYzIDE1Ljc5NDRIMC4xMDYxODdaIiBmaWxsPSIjNjEyNTkzIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNNi45NTIxMyAxNS44MjQ4TDMuNjQwOTkgMTIuNTEzN0w2Ljk2OTYzIDkuMTg1MDNMNi45NTIxMyAxNS44MjQ4WiIgZmlsbD0iIzYxMjU5MyIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTAuMjk0MjM1IDE2LjQ3OTVMMTUuODA4IDE2LjQ3OTVMMTUuODA4IDMxLjk5MzNMNy45OTIyMyAyNC4xNzc1TDAuMjk0MjM1IDE2LjQ3OTVaIiBmaWxsPSIjNjEyNTkzIi8+CjxwYXRoIGQ9Ik0xNi40OTU2IDE3LjI0MzZMMjMuODUwNyAyNC41ODVMMTYuNDk1NiAzMS45NEwxNi40OTU2IDE3LjI0MzZaIiBmaWxsPSIjNjEyNTkzIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cGF0aCBkPSJNMTYuNTMyNiAxNi40Nzk1TDI0LjQ1MTUgMTYuNDc5NUwyNC40NTE1IDI0LjAyOEwxNi41MzI2IDE2LjQ3OTVaIiBmaWxsPSIjNjEyNTkzIiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8cGF0aCBkPSJNMjYuMTgxMyAxNi40MzI2TDI5LjA1MjUgMTYuNDMyNkwyOS4wNTI1IDE5LjM5NjRMMjYuMTgxMyAxNi40MzI2WiIgZmlsbD0iIzZBMUI5QSIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPHBhdGggZD0iTTI5LjU2MTkgMTYuNDMyNkwzMC43Nzg3IDE3LjY0OTRMMjkuNTUxNSAxOC44NzY2TDI5LjU2MTkgMTYuNDMyNloiIGZpbGw9IiM2QTFCOUEiIGZpbGwtb3BhY2l0eT0iMC4zIi8+CjxwYXRoIGQ9Ik0zMC4yNTY2IDE2LjQ3OTVMMzEuMTM2NSAxNi40Nzk1TDMxLjEzNjUgMTcuMzEzMUwzMC4yNTY2IDE2LjQ3OTVaIiBmaWxsPSIjNkExQjlBIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNMzEuNDYwNiAxNi40Nzk1TDMxLjc4NDggMTYuODAzN0wzMS40NjA2IDE3LjEyNzlMMzEuNDYwNiAxNi40Nzk1WiIgZmlsbD0iIzYxMjU5MyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTMyLjE4OCAxNi40NjkyTDMxLjk5MzIgMTYuNjY0MUwzMS43OTgzIDE2LjQ2OTJIMzIuMTg4WiIgZmlsbD0iIzYxMjU5MyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTI1LjM0MjEgMTYuNDM4OUwyOC42NTMyIDE5Ljc1TDI1LjMyNDYgMjMuMDc4NkwyNS4zNDIxIDE2LjQzODlaIiBmaWxsPSIjNjEyNTkzIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K",alt:"Open with Zeno"})})}),"\n",(0,I.jsx)(i.p,{children:"Zeno can be used to easily visualize and explore the results of Ragas evaluations.\nYou can see how Ragas results can be visualized in the Zeno project linked at the top of this page."}),"\n",(0,I.jsxs)(i.p,{children:["To learn more about how to use Zeno in combination with Ragas, head over to the ",(0,I.jsx)(i.a,{href:"https://docs.ragas.io/en/latest/howtos/integrations/zeno.html",children:"documentation in the Ragas repository"}),"."]})]})}function D(M={}){const{wrapper:i}={...(0,a.a)(),...M.components};return i?(0,I.jsx)(i,{...M,children:(0,I.jsx)(g,{...M})}):g(M)}},1151:(M,i,N)=>{N.d(i,{Z:()=>j,a:()=>s});var I=N(7294);const a={},e=I.createContext(a);function s(M){const i=I.useContext(e);return I.useMemo((function(){return"function"==typeof M?M(i):{...i,...M}}),[i,M])}function j(M){let i;return i=M.disableParentContext?"function"==typeof M.components?M.components(a):M.components||a:s(M.components),I.createElement(e.Provider,{value:i},M.children)}}}]);