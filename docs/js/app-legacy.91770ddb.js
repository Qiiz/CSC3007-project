(function(){"use strict";var e={6478:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var o=n(144),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-card",{class:e.radius},[n("v-toolbar",{attrs:{color:"dark",dark:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"white"}}),n("v-tab",{attrs:{to:"/"}},[e._v("Milestone 1")]),n("v-tab",{attrs:{to:"/milestone2"}},[e._v("Milestone 2")]),n("v-tab",{attrs:{to:"/about"}},[e._v("About")])],1)]},proxy:!0}])},[n("v-toolbar-title",[e._v("CSC3007 Project")]),n("v-spacer")],1)],1),n("v-main",[n("router-view")],1),n("v-footer",[e._v(" 2022 ")])],1)},i=[],r={data:function(){return{tab:null,items:["Home","About"],radius:"rounded-0"}}},s=r,c=n(1001),l=n(3453),u=n.n(l),f=n(7524),d=n(3237),h=n(1966),p=n(7877),v=n(9762),m=n(4227),g=n(8484),b=n(1208),y=n(6656),w=n(7921),_=(0,c.Z)(s,a,i,!1,null,null,null),k=_.exports;u()(_,{VApp:f.Z,VCard:d.Z,VFooter:h.Z,VMain:p.Z,VSpacer:v.Z,VTab:m.Z,VTabs:g.Z,VTabsSlider:b.Z,VToolbar:y.Z,VToolbarTitle:w.qW});n(1539),n(8783),n(3948);var x=n(8345),Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-justify"},[n("v-container",{staticStyle:{"max-width":"1280px"}},[n("v-row",[n("v-col",{staticClass:"sm-12"},[n("h1",[e._v("Visualisation Approach 1")]),n("p",[n("a",{attrs:{href:"https://informationisbeautiful.net/visualizations/caffeine-and-calories/",target:"_blank"}},[e._v(" https://informationisbeautiful.net/visualizations/caffeine-and-calories/")])]),n("a",{attrs:{href:"img/2552_Buzz-vs-Bulge-4.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/2552_Buzz-vs-Bulge-4.png",alt:"caffeine-and-calories"}})],1),n("h3",[e._v("Static Infographic")]),n("h2",[e._v(" Domain ")]),n("p",[e._v(" There is a difference in understanding the visualisation between the artist and the user. At a glance, we can observe that the artist assumes that the user is trying to determine which beverages they should consume based on their calories or caffeine level. However, calorie tracking is not just for losing weight. Some users are interested in this dataset to track calories for gaining and maintaining weight as well. Take note that the visualisation is targeted more at users with the intention of tracking calories or caffeine levels to determine the beverage. ")]),n("p",[e._v(" However, apart from the targeted audience, there are another group of users who are trying to determine the calories or caffeine based on their favourite beverage (which is the inverse of what the artist assumed). Note that the data representation is not catered for users with this approach as a filter to the beverage was not provided. With the types of exercise dataset given, there may also be a group of users that would like to determine the equivalent exercise to burn off the calories from the beverages consumed. ")]),n("h2",[e._v(" Data ")]),n("p",[e._v(" Quantitative data for the food/drink items, Ratio scaled. In units of Calories for energy and Milligrams for Caffeine. "),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1KYMUjrCulPtpUHwep9bVvsBvmVsDEbucdyRZ5uHCDxw/",target:"_blank"}},[e._v("Dataset")]),e._v(" received statically in rows. ")]),n("h2",[e._v("Task")]),n("p",[e._v(" Data is mostly presented by scattering single servings of food or beverage on a plot consisting of the X and Y axis, caffeine vs calories. ")]),n("p",[n("b",[e._v("Input:")]),e._v(" Caffeine & Calories level of a single serving (mostly) of an item. ")]),n("p",[n("b",[e._v("Output:")]),e._v(" Suitable food or beverage to consume and the what kind of exercise to work on ")]),n("p",[n("b",[e._v("Why:")]),e._v("Allows users to be more aware and track their caffeine vs calorie consumption, as well as to explore more variety of food and beverage options ")]),n("p",[n("b",[e._v("Actions:")]),n("ul",[n("li",[n("b",[e._v("Consume:")]),e._v(" Present for decision making")]),n("li",[n("b",[e._v("Search:")]),e._v(" Lookup (Found drink, lookup for the caffeine/calories values and suitable exercise) & Browse (Input caffeine and calories, find drink)")]),n("li",[n("b",[e._v("Query:")]),e._v(" Identify, lookup drink for their caffeine/calories and exercise characteristics, ")])])]),n("p",[n("b",[n("u",[e._v("Inconsistency:")])]),e._v(" Some items presented are not consistent with the one serving approach; for example, there is one can of coke and also 1 litre of coke found in the chart, along with an additional gauge to the calorie burn of executing certain forms of exercises. Additionally, there is also the existence of non-beverage items such as the chocolate bar and painkiller pills. ")]),n("h2",[e._v("Idiom")]),n("p",[n("b",[e._v("Encode:")]),e._v(" Separate, items are arranged separately based on the values of their characteristics ")]),n("p",[n("b",[e._v("Manipulate:")]),e._v(" Select and Navigating ")]),n("p",[n("b",[e._v("Facet:")]),e._v(" Partitioning, partition items based on the exercise recommended.")]),n("p",[e._v(" The infographic is presented in a way where it would be easier for the user to locate the caffeinated beverages they can consume based on the exercise they could do to burn off the calories. However, there are also users that would want to find out the caffeine/calories intake based on their favourite beverage or explore the trends in the caffeinated beverages they could hit their calories target. The point origin of the axis makes it hard to fulfil the needs mentioned as they do not start from 0. Anything that is below the horizontal axis seems to be perceived as a “healthier” option. Very poor justifications for why the axis is started off at such random positions. (Encoding issue) ")]),n("h2",[e._v("Prototype")]),n("p",[e._v(" With the above issue, our team has come out with the following prototype to represent the data better. One of the main concerns stated was the lack of user interaction to cater for the different groups of users. Therefore, we have come out with a chart diagram with filtering functionality to assist users better in tracking the beverage based on their specific needs. ")]),n("a",{attrs:{href:"img/v1_prototype1.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v1_prototype1.png",alt:"v1_prototype1.png"}})],1),n("a",{attrs:{href:"img/v1_prototype2.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v1_prototype2.png",alt:"v1_prototype2.png"}})],1),n("a",{attrs:{href:"img/v1_prototype3.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v1_prototype3.png",alt:"v1_prototype3.png"}})],1)])],1),n("v-row",[n("v-divider")],1),n("v-row",[n("v-col",{staticClass:"sm-12"},[n("h1",[e._v("Visualisation Approach 2")]),n("p",[n("a",{attrs:{href:"https://informationisbeautiful.net/visualizations/uk-government-spending-incomes-outcomes/",target:"_blank"}},[e._v(" https://informationisbeautiful.net/visualizations/uk-government-spending-incomes-outcomes/")])]),n("a",{attrs:{href:"img/2552_UK-Government-Spending.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/2552_UK-Government-Spending.png",alt:"2552_UK-Government-Spending.png"}})],1),n("h3",[e._v("Static Infographic")]),n("h2",[e._v(" Domain ")]),n("p",[e._v(" The domain situation was interpreted correctly by the artist by showing the distribution between the income and expenditures of the UK government. ")]),n("h2",[e._v(" Data ")]),n("p",[e._v(" Ratio of UK national financial budget income and spending into Categories ")]),n("p",[e._v(" Static "),n("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1UZK9gBSY68KxGqP3cwY6-9f7CxqP7WnCIlTxuDzcRT4/",target:"_blank"}},[e._v("data")]),e._v(" from rows of data in tables. ")]),n("h2",[e._v("Task")]),n("p",[e._v(" The artists are showing components of a category and also the summation of the monies in categorisation. For example, in the “Wealth & Income Tax” leaf, we will assume that the 221 billion is the summation of all the other smaller leaf nodes with the same shade of brown. ")]),n("p",[n("b",[e._v("Input:")]),e._v(" Category breakdown of income and outgoing in terms of monies ")]),n("p",[n("b",[e._v("Output:")]),e._v(" Visualisation of differences in income and outgoing ")]),n("p",[n("b",[e._v("Why:")]),e._v(" Allow the reader to have an overview of the difference in incomes and outgoing expenses, as well as to determine the financial breakdown of each category. ")]),n("p",[n("b",[e._v("Actions:")]),n("ul",[n("li",[n("b",[e._v("Consume:")]),e._v(" Discover and Enjoy")]),n("li",[n("b",[e._v("Search:")]),e._v(" Explore")]),n("li",[n("b",[e._v("Query:")]),e._v(" Compare")])])]),n("p",[n("b",[n("u",[e._v("Problems:")])]),e._v(" It is not always the case for the summation of smaller leaf nodes, for example, the calculation seems to be the summation of an unknown amount of income tax and the corporation tax. Therefore, the data do not add up and do not make sense. ")]),n("h2",[e._v("Idiom")]),n("p",[n("b",[e._v("Map:")]),e._v(" Color based on the incoming and outgoing, size based on the sum spend/received and curvature based on the breakdown of the spending. ")]),n("p",[n("b",[e._v("Manipulate:")]),e._v(" Navigating ")]),n("p",[n("b",[e._v("Facet:")]),e._v(" Embedding")]),n("p",[e._v(" This is a tree dataset in the hierarchy of budget breakdowns. The data is presented in the format where each branch represents one sector of the breakdown. With that said, it is difficult to visualise the content of directories when there are too many child nodes. It would not be an effective method for visualisation if the information were to scale as it may cause an overloading of information and confuse the reader. ")]),n("p",[e._v(" Not only that, the culmination of values in different branches is not consistent. The representation of values may be difficult for readers to comprehend while dealing with big numbers. It is also difficult for users to understand which values are the summation of the final node. ")]),n("h2",[e._v("Prototype")]),n("p",[e._v(" With the above issue, our team has come out with the following prototype to better represent the data. To better represent the data as a whole, we have decided to utilise the old school method of the sunburst to better help readers understand the information better. Especially when it comes to the comparison of monies, a sunburst could prove to provide better visualisation. Since there is so much more information to visualise, our team has decided to make a sunburst with user interactive ability to filter with the different sectors they are interested in and their data representation. The general overview alone could help provide a comparison of incomes and expenditures as a whole and could easily determine any deficits if any. ")]),n("a",{attrs:{href:"img/v2_prototype2.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v2_prototype1.png",alt:"v2_prototype1.png"}})],1),n("a",{attrs:{href:"img/v2_prototype2.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v2_prototype2.png",alt:"v2_prototype2.png"}})],1)])],1)],1)],1)},S=[],C=n(7906),T=n(6198),j=n(6133),M=n(2751),V=n(796),P=n(6035),z=n(9726),O=(n(5003),n(1299),n(8309),n(1929));function A(e){return I.apply(this,arguments)}function I(){return I=(0,T.Z)((0,C.Z)().mark((function e(t){return(0,C.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){return e()}),t)})));case 1:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}var D=function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"===typeof Reflect?"undefined":(0,z.Z)(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},E=function(e){(0,V.Z)(n,e);var t=(0,P.Z)(n);function n(){return(0,j.Z)(this,n),t.apply(this,arguments)}return(0,M.Z)(n,[{key:"mounted",value:function(){var e=(0,T.Z)((0,C.Z)().mark((function e(){return(0,C.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("mounted ".concat(this.constructor.name)),e.next=3,A(1e3);case 3:console.log("async slept in ".concat(this.constructor.name));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"unmounted",value:function(){console.log("unmounted ".concat(this.constructor.name))}}]),n}(O.w3);E=D([(0,O.wA)({components:{}})],E);var R=E,Y=R,B=n(2102),G=n(9846),U=n(1418),F=n(7047),L=n(2877),W=(0,c.Z)(Y,Z,S,!1,null,null,null),K=W.exports;u()(W,{VCol:B.Z,VContainer:G.Z,VDivider:U.Z,VImg:F.Z,VRow:L.Z});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12","offset-sm":"3",sm:"6"}},[n("div",{staticClass:"text-h4 text-center"},[e._v("Calories/Caffeine Tracking")])]),n("v-col",{attrs:{"offset-sm":"1",sm:"2"}},[n("v-switch",{staticClass:"v-input--reverse v-input--expand",attrs:{inset:"",dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[n("span",[e._v(" Tracking Mode ")])]},proxy:!0}]),model:{value:e.trackingMode,callback:function(t){e.trackingMode=t},expression:"trackingMode"}})],1)],1),n("div",{attrs:{id:"scatter-plot-container"}},[n("svg",[e.d3Loaded?n("g",e._l(e.filteredData,(function(t){return n("g",{key:t.caffeine+" "+t.calories,style:"opacity: "+(e.focusInMind(t)?1:.1)},[n("rect",{style:"fill: grey; opacity: 0.5; stroke: black; stroke-width: 1",attrs:{x:e.scalerX(t.caffeine),y:e.scalerY(t.calories),rx:8,ry:8,width:e.iconSize,height:e.iconSize,transform:"translate("+-e.iconSize/2+",  "+-e.iconSize/2+")"}}),n("image",{attrs:{href:t.icon,x:e.scalerX(t.caffeine),y:e.scalerY(t.calories),width:e.iconSize-e.iconPadding,height:e.iconSize-e.iconPadding,transform:"translate(-"+(e.iconSize-e.iconPadding)/2+" -"+(e.iconSize-e.iconPadding)/2+")"}}),n("text",{key:t.caffeine+" "+t.calories,attrs:{"dominant-baseline":"middle","text-anchor":"middle","font-size":e.iconFontSize+"px",x:e.scalerX(t.caffeine),y:e.scalerY(t.calories-e.iconSize)}},[e._v(" "+e._s(t.name)+" ")])])})),0):e._e()])]),n("v-row",[n("v-col",{attrs:{col:"12",sm:"6"}},[e.trackingMode?n("v-slider",{attrs:{max:"500",min:"100",step:"10","thumb-label":"always",label:"Calories Goal",hint:"Slide to target recommended exercises"},model:{value:e.targetGoal,callback:function(t){e.targetGoal=t},expression:"targetGoal"}}):e._e()],1),n("v-col",{attrs:{col:"12",sm:"6"}},[n("v-autocomplete",{attrs:{chips:"",clearable:"",dense:"",multiple:"","hide-selected":"",rounded:"","small-chips":"",solo:"",items:e.data.map((function(e){return e.name})).sort(),label:"Have a beverage in mind?"},model:{value:e.inMind,callback:function(t){e.inMind=t},expression:"inMind"}})],1)],1)],1)},N=[],X=n(3263),q=n(3796),$=(n(2222),n(7327),n(9826),n(3757)),Q=[{name:"Coffee",icon:"./img/coffee/coffee-cup.png",calories:100,caffeine:80},{name:"Drink",icon:"./img/coffee/coffee-cup.png",calories:200,caffeine:200},{name:"Beer",icon:"./img/coffee/coffee-cup.png",calories:500,caffeine:300}],J=function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"===typeof Reflect?"undefined":(0,z.Z)(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},ee=function(e){(0,V.Z)(n,e);var t=(0,P.Z)(n);function n(){var e;(0,j.Z)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),(0,q.Z)((0,X.Z)(e),"trackingMode",!1),(0,q.Z)((0,X.Z)(e),"targetGoal",100),(0,q.Z)((0,X.Z)(e),"inMind",[]),(0,q.Z)((0,X.Z)(e),"data",Q),(0,q.Z)((0,X.Z)(e),"d3Loaded",!1),(0,q.Z)((0,X.Z)(e),"iconSize",48),(0,q.Z)((0,X.Z)(e),"iconPadding",16),(0,q.Z)((0,X.Z)(e),"iconFontSize",10),(0,q.Z)((0,X.Z)(e),"scalerX",void 0),(0,q.Z)((0,X.Z)(e),"scalerY",void 0),e}return(0,M.Z)(n,[{key:"filteredData",get:function(){var e=this;return this.trackingMode?this.data.filter((function(t){return t.calories<=e.targetGoal})):this.data}},{key:"focusInMind",value:function(e){return 0==this.inMind.length||!!this.inMind.find((function(t){return t===e.name}))}},{key:"mounted",value:function(){var e=(0,T.Z)((0,C.Z)().mark((function e(){var t,n,o,a;return(0,C.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.d3Loaded=!1,t={top:10,right:60,bottom:50,left:60},n=1280-t.left-t.right,o=480-t.top-t.bottom,a=$.Ys("#scatter-plot-container > svg").attr("viewBox",[-t.left,-t.top,n+t.left+t.right,o+t.top+t.bottom]),this.scalerX=$.BYU().domain([0,300]).range([0,n]),a.append("g").attr("transform","translate(0,"+o+")").call($.LLu(this.scalerX)),this.scalerY=$.BYU().domain([0,600]).range([o,0]),a.append("g").call($.y4O(this.scalerY)),a.append("text").attr("class","x label").attr("text-anchor","end").attr("x",n).attr("y",o).attr("dy","2em").text("Caffeine Intake"),a.append("text").attr("class","y label").attr("text-anchor","end").attr("y",0).attr("dy","-2em").attr("transform","rotate(-90)").text("Calories Intake"),this.d3Loaded=!0;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(O.w3);ee=J([(0,O.wA)({components:{}})],ee);var te=ee,ne=te,oe=n(8693),ae=n(7611),ie=n(6251),re=(0,c.Z)(ne,H,N,!1,null,null,null),se=re.exports;u()(re,{VAutocomplete:oe.Z,VCol:B.Z,VContainer:G.Z,VRow:L.Z,VSlider:ae.Z,VSwitch:ie.Z}),o.Z.use(x.Z);var ce=[{path:"/",name:"home",component:K},{path:"/milestone2",name:"Milestone 2",component:se},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,8930))}}],le=new x.Z({routes:ce}),ue=le,fe=n(9132);o.Z.use(fe.Z);var de=new fe.Z({});o.Z.config.productionTip=!1,new o.Z({router:ue,vuetify:de,render:function(e){return e(k)}}).$mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about-legacy.8a02f7e5.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="csc3007-project:";n.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[a];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};n.l(r,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(o);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkcsc3007_project"]=self["webpackChunkcsc3007_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6478)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.91770ddb.js.map