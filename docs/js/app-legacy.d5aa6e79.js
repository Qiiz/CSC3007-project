(function(){"use strict";var e={3974:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var o=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-card",{class:e.radius},[n("v-toolbar",{attrs:{color:"dark",dark:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"white"}}),n("v-tab",{attrs:{to:"/"}},[e._v("Milestone 1")]),n("v-tab",{attrs:{to:"/about"}},[e._v("About")])],1)]},proxy:!0}])},[n("v-toolbar-title",[e._v("CSC3007 Project")]),n("v-spacer")],1)],1),n("v-main",[n("router-view")],1),n("v-footer",[e._v(" 2022 ")])],1)},a=[],i={data:function(){return{tab:null,items:["Home","About"],radius:"rounded-0"}}},s=i,c=n(1001),u=n(3453),l=n.n(u),h=n(7524),f=n(26),d=n(1966),p=n(7877),v=n(9762),m=n(4227),g=n(81),b=n(1208),w=n(6656),y=n(7921),_=(0,c.Z)(s,r,a,!1,null,null,null),k=_.exports;l()(_,{VApp:h.Z,VCard:f.Z,VFooter:d.Z,VMain:p.Z,VSpacer:v.Z,VTab:m.Z,VTabs:g.Z,VTabsSlider:b.Z,VToolbar:w.Z,VToolbarTitle:y.qW});n(1539),n(8783),n(3948);var x=n(8345),Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-justify"},[n("v-container",{staticStyle:{"max-width":"1280px"}},[n("v-row",[n("v-col",{staticClass:"sm-12"},[n("h1",[e._v("Visualisation Approach 1")]),n("p",[n("a",{attrs:{href:"https://informationisbeautiful.net/visualizations/caffeine-and-calories/",target:"_blank"}},[e._v(" https://informationisbeautiful.net/visualizations/caffeine-and-calories/")])]),n("a",{attrs:{href:"img/2552_Buzz-vs-Bulge-4.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/2552_Buzz-vs-Bulge-4.png",alt:"caffeine-and-calories"}})],1),n("p",[n("b",[e._v("Domain:")]),e._v(" There is a difference in understanding the visualisation between the artist and the user. At a glance, we can observe that the artist assumes that the user is trying to determine which beverages they should consume based on their calories or caffeine level. However, calorie tracking is not just for losing weight. Some users are interested in this dataset to track calories for gaining and maintaining weight as well. Take note that the visualisation is targeted more at users with the intention of tracking calories or caffeine levels to determine the beverage. ")]),n("p",[e._v(" However, apart from the targeted audience, there are another group of users who are trying to determine the calories or caffeine based on their favourite beverage (which is the inverse of what the artist assumed). Note that the data representation is not catered for users with this approach as a filter to the beverage was not provided. With the types of exercise dataset given, there may also be a group of users that would like to determine the equivalent exercise to burn off the calories from the beverages consumed. ")]),n("p",[n("b",[e._v("Data/Task:")]),e._v(" Data is mostly presented by scattering single servings of food or beverage on a plot consisting of the X and Y axis, caffeine vs calories. ")]),n("p",[n("u",[e._v("Inconsistency:")]),e._v(" Some items presented are not consistent with the one serving approach; for example, there is one can of coke and also 1 litre of coke found in the chart, along with an additional gauge to the calorie burn of executing certain forms of exercises. Additionally, there is also the existence of non-beverage items such as the chocolate bar and painkiller pills. ")]),n("p",{staticStyle:{display:"none"}},[n("u",[e._v("Data Representation:")]),e._v(" This infographic is generally designed to query the suitable food or beverage "),n("b",[e._v("(output)")]),e._v(" to consume to be in range with the calories vs caffeine intake "),n("b",[e._v("(input)")]),e._v(" the user is looking for. This allows users to be more aware and track their caffeine vs calorie consumption, as well as to explore more variety of food and beverage options "),n("b",[e._v("(why)")]),e._v(". ")]),n("p",[n("b",[e._v("Idiom:")]),e._v(" The infographic is presented in a way where it would be easier for the user to locate the caffeinated beverages they can consume based on the exercise they could do to burn off the calories. However, there are also users that would want to find out the caffeine/calories intake based on their favourite beverage or explore the trends in the caffeinated beverages they could hit their calories target. The point origin of the axis makes it hard to fulfil the needs mentioned as they do not start from 0. Anything that is below the horizontal axis seems to be perceived as a “healthier” option. Very poor justifications for why the axis is started off at such random positions. ")]),n("p",[n("b",[e._v("Prototype:")]),e._v(" With the above issue, our team has come out with the following prototype to represent the data better. One of the main concerns stated was the lack of user interaction to cater for the different groups of users. Therefore, we have come out with a chart diagram with filtering functionality to assist users better in tracking the beverage based on their specific needs. ")]),n("a",{attrs:{href:"img/v1_prototype1.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v1_prototype1.png",alt:"v1_prototype1.png"}})],1),n("a",{attrs:{href:"img/v1_prototype2.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v1_prototype2.png",alt:"v1_prototype2.png"}})],1),n("a",{attrs:{href:"img/v1_prototype3.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v1_prototype3.png",alt:"v1_prototype3.png"}})],1)])],1),n("v-row",[n("v-divider")],1),n("v-row",[n("v-col",{staticClass:"sm-12"},[n("h1",[e._v("Visualisation Approach 2")]),n("p",[n("a",{attrs:{href:"https://informationisbeautiful.net/visualizations/uk-government-spending-incomes-outcomes/",target:"_blank"}},[e._v(" https://informationisbeautiful.net/visualizations/uk-government-spending-incomes-outcomes/")])]),n("a",{attrs:{href:"img/2552_UK-Government-Spending.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/2552_UK-Government-Spending.png",alt:"2552_UK-Government-Spending.png"}})],1),n("p",[n("b",[e._v("Domain:")]),e._v(" The domain situation was interpreted correctly by the artist by showing the distribution between the income and expenditures of the UK government. ")]),n("p",[n("b",[e._v("Data/Task:")]),e._v(" The artists are showing components of a category and also the summation of the monies in categorisation. For example, in the “Wealth & Income Tax” leaf, we will assume that the 221 billion is the summation of all the other smaller leaf nodes with the same shade of brown. However, it is not the case, and the calculation seems to be the summation of an unknown amount of income tax and the corporation tax. Therefore, the data do not add up and do not make sense. ")]),n("p",[n("b",[e._v("Idiom:")]),e._v(" This is a tree dataset in the hierarchy of budget breakdowns. The data is presented in the format where each branch represents one sector of the breakdown. With that said, it is difficult to visualise the content of directories when there are too many child nodes. It would not be an effective method for visualisation if the information were to scale as it may cause an overloading of information and confuse the reader. ")]),n("p",[e._v(" Not only that, the culmination of values in different branches is not consistent. The representation of values may be difficult for readers to comprehend while dealing with big numbers. It is also difficult for users to understand which values are the summation of the final node. ")]),n("p",[n("b",[e._v("Prototype:")]),e._v(" With the above issue, our team has come out with the following prototype to better represent the data. To better represent the data as a whole, we have decided to utilise the old school method of the pie chart to better help readers understand the information better. Especially when it comes to the comparison of monies, a pie chart could prove to provide better visualisation. Since there is so much more information to visualise, our team has decided to make an explosive pie chart with user interactive ability to filter with the different sectors they are interested in and their data representation. The general overview alone could help provide a comparison of incomes and expenditures as a whole and could easily determine any deficits if any. ")]),n("a",{attrs:{href:"img/v2_prototype2.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v2_prototype2.png",alt:"v2_prototype1.png"}})],1),n("a",{attrs:{href:"img/v2_prototype2.png",target:"_blank"}},[n("v-img",{attrs:{"max-width":"1024",src:"img/v2_prototype2.png",alt:"v2_prototype2.png"}})],1)])],1)],1)],1)},T=[],j=n(7906),O=n(6198),V=n(6133),S=n(2751),C=n(796),A=n(6035),P=n(9726),z=(n(5003),n(1299),n(8309),n(1929));function E(e){return D.apply(this,arguments)}function D(){return D=(0,O.Z)((0,j.Z)().mark((function e(t){return(0,j.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){return e()}),t)})));case 1:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}var I=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"===typeof Reflect?"undefined":(0,P.Z)(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},R=function(e){(0,C.Z)(n,e);var t=(0,A.Z)(n);function n(){return(0,V.Z)(this,n),t.apply(this,arguments)}return(0,S.Z)(n,[{key:"mounted",value:function(){var e=(0,O.Z)((0,j.Z)().mark((function e(){return(0,j.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("mounted ".concat(this.constructor.name)),e.next=3,E(1e3);case 3:console.log("async slept in ".concat(this.constructor.name));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"unmounted",value:function(){console.log("unmounted ".concat(this.constructor.name))}}]),n}(z.w3);R=I([(0,z.wA)({components:{}})],R);var W=R,B=W,H=n(2102),M=n(9846),N=n(1418),q=n(7047),F=n(2877),K=(0,c.Z)(B,Z,T,!1,null,null,null),U=K.exports;l()(K,{VCol:H.Z,VContainer:M.Z,VDivider:N.Z,VImg:q.Z,VRow:F.Z}),o.Z.use(x.Z);var G=[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,6842))}}],$=new x.Z({routes:G}),L=$,X=n(5613);o.Z.use(X.Z);var Y=new X.Z({});o.Z.config.productionTip=!1,new o.Z({router:L,vuetify:Y,render:function(e){return e(k)}}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about-legacy.897e81c8.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="csc3007-project:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var h=u[l];if(h.getAttribute("src")==o||h.getAttribute("data-webpack")==t+a){s=h;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkcsc3007_project"]=self["webpackChunkcsc3007_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3974)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.d5aa6e79.js.map