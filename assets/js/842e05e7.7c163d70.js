"use strict";(self.webpackChunkzeno_docs=self.webpackChunkzeno_docs||[]).push([[954],{36:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const i={},l="Using Zeno",r={unversionedId:"using-zeno",id:"using-zeno",title:"Using Zeno",description:"To highlight the main features and uses of Zeno, we walk through an example of using Zeno to explore a dataset of customer service emails, which you can explore in our chatbot report.",source:"@site/docs/using-zeno.mdx",sourceDirName:".",slug:"/using-zeno",permalink:"/docs/using-zeno",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Client API",permalink:"/docs/python-client"},next:{title:"Instance views",permalink:"/docs/views/"}},s={},u=[{value:"Data and Model Output Exploration",id:"data-and-model-output-exploration",level:2},{value:"Chart Building",id:"chart-building",level:2},{value:"Qualitative Comparison",id:"qualitative-comparison",level:2}],p={toc:u},h="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-zeno"},"Using Zeno"),(0,n.kt)("p",null,"To highlight the main features and uses of Zeno, we walk through an example of using Zeno to explore a dataset of customer service emails, which you can explore in our ",(0,n.kt)("a",{parentName:"p",href:"https://zeno-ml-chatbot-report.hf.space/"},"chatbot report"),"."),(0,n.kt)("p",null,"You can explore the code that created this Zeno report in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zeno-ml/zeno-build/tree/main/examples/chatbot"},"Zeno Build repository"),"."),(0,n.kt)("h2",{id:"data-and-model-output-exploration"},"Data and Model Output Exploration"),(0,n.kt)("p",null,"When you first open Zeno you will see your data instances on the right hand side and metadata distributions on the left hand side."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/blob/main/docs/images/zeno-walkthrough-initial-page.png?raw=true",alt:"Zeno Screenshot"})),(0,n.kt)("p",null,"The metadata distributions on the left show summary visualizations of columns in your dataset:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/raw/main/docs/images/zeno-walkthrough-feature-display.png",alt:"Metadata view"})),(0,n.kt)("p",null,"If you want to filter down your data to only include examples that have a particular value for a feature:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Textual Features:"),' Type in a value in the text box and click "set". You can also use regexes or adjust case-sensitivity by pressing the buttons.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Numerical Features:")," Dragging the slider to select a range of values."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Categorical Features:")," Clicking on a specific value in the bar chart (not displayed above).")),(0,n.kt)("p",null,'For instance, if we want to find all examples that have a length of 100 or fewer characters that contain the string "sorry", you can filter the "label and "label_length" features, and see that the displayed examples on the right are updated.'),(0,n.kt)("p",null,"Once you've found a subset of the data that you're interested in, you can save it for future analysis and monitoring by clicking the \"Create a new Slice\" button:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/raw/main/docs/images/zeno-walkthrough-create-slice.png",alt:"Slice Creation"})),(0,n.kt)("p",null,"You can also arrange slices into folders for easier browsing."),(0,n.kt)("p",null,"This slicing is very powerful functionality if you get creative with the features and patterns that you use! If you want to try to add new features, you can implement them and add them to the config.py file in the examples that you're using, some examples below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zeno-ml/zeno-build/blob/6ab05c7083ef556aa12a626c0771814c74f030aa/examples/chatbot/config.py#L187-L201"},"Features for Chatbots")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zeno-ml/zeno-build/blob/6ab05c7083ef556aa12a626c0771814c74f030aa/examples/analysis_gpt_mt/config.py#L117-L134"},"Features for Translation"))),(0,n.kt)("h2",{id:"chart-building"},"Chart Building"),(0,n.kt)("p",null,'Once you have some models to compare and some slices to compare them on, you can start building interactive charts to summarize model performance. To do this, click on the "Charts" button on the left of the page:'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/raw/main/docs/images/zeno-walkthrough-reports-button.png",alt:"Chart tab"})),(0,n.kt)("p",null,"This will take you to a page that shows all of your created charts:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/raw/main/docs/images/zeno-walkthrough-reports-page.png",alt:"Charts"})),(0,n.kt)("p",null,"You can create new charts by interactively selecting slices, metrics, and models. For example, you can create a chart comparing model performance across instances with short, medium, or long ground truth labels:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/raw/main/docs/images/zeno-walkthrough-report-slices.png",alt:"Chart example"})),(0,n.kt)("h2",{id:"qualitative-comparison"},"Qualitative Comparison"),(0,n.kt)("p",null,"One final handy feature of Zeno is the ability to compare the outputs of two models on the same examples. You can do this by clicking on the qualitative comparison button:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/raw/main/docs/images/zeno-walkthrough-qualitative-button.png",alt:"Qualitative comparison"})),(0,n.kt)("p",null,"On the page, you can then select the two models you want to compare side-by-side, and select the metric you'd like to compare them by. Here we choose ",(0,n.kt)("inlineCode",{parentName:"p"},"gpt-3.5-turbo")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"vicuna")," and compare them according to the ",(0,n.kt)("inlineCode",{parentName:"p"},"bert_score")," metric."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/raw/main/docs/images/zeno-walkthrough-qualitative-standard.png",alt:"Comparison"})),(0,n.kt)("p",null,'You can also sort the outputs by the difference between the scores between the two systems by clicking on the header of the "difference" column. This allows you to find examples where one of the two systems produces much better outputs than the other, such as the one below where one model suddenly went off track and produced an incomprehensible output.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/zeno-ml/zeno-build/raw/main/docs/images/zeno-walkthrough-qualitative-sorted.png",alt:"Example find"})))}c.isMDXComponent=!0}}]);