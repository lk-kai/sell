(function(t){function s(s){for(var a,o,r=s[0],c=s[1],l=s[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(s);while(f.length)f.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(a=!1)}a&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},i={app:0},n=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var u=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0660":function(t,s,e){},"0af7":function(t,s,e){},1:function(t,s){},1149:function(t,s,e){},"18f4":function(t,s,e){"use strict";var a=e("ca65"),i=e.n(a);i.a},2369:function(t,s,e){"use strict";var a=e("0660"),i=e.n(a);i.a},"29d9":function(t,s,e){"use strict";var a=e("c4b9"),i=e.n(a);i.a},"2d4e":function(t,s,e){},"2e0b":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cube-scroll",{ref:"scroll",staticClass:"ratings",attrs:{options:t.scrollOptions}},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),e("div",{staticClass:"title"},[t._v("综合评分")]),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),e("div",{staticClass:"right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),e("start",{staticClass:"start",attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商家评分")]),e("start",{staticClass:"start",attrs:{size:36,score:t.seller.foodScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),e("split"),e("ratingselect",{attrs:{ratings:t.ratings,selectType:t.selectType,desc:t.desc,onlyContent:t.onlyContent},on:{ratingType:t.ratingType,tog:t.tog}}),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.needrating,(function(s,a){return e("li",{key:a,staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar,alt:""}})]),e("div",{staticClass:"contont"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),e("div",{staticClass:"start-wrapper"},[e("start",{staticClass:"start",attrs:{size:24,score:s.score}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._l(s.recommend,(function(s,a){return e("span",{key:a,staticClass:"item"},[t._v(t._s(s))])}))],2),e("div",{staticClass:"time"},[t._v(t._s(t._f("formDate")(s.rateTime)))])])])})),0)])],1)])},i=[],n=(e("4160"),e("159b"),e("365c")),o=e("6a44"),r=e("dda2"),c=e("36f4"),l=e("c1df"),u=e.n(l),d=2,f={props:{seller:{type:Object,deafult:function(){return{}}}},components:{start:o["a"],split:r["a"],ratingselect:c["a"]},data:function(){return{ratings:[],scrollOptions:{click:!1,directionLockThreshold:0},selectType:d,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},created:function(){this._getRatings()},computed:{needrating:function(){var t=this,s=[];return this.ratings.forEach((function(e){t.onlyContent&&!e.text||t.selectType!==d&&t.selectType!==e.rateType||s.push(e)})),s}},methods:{_getRatings:function(){var t=this;Object(n["b"])().then((function(s){t.ratings=s}))},tog:function(){var t=this;this.onlyContent=!this.onlyContent,this.$nextTick((function(){t.$refs.scroll.refresh()}))},ratingType:function(t){var s=this;this.selectType=t,this.$nextTick((function(){s.$refs.scroll.refresh()}))}},filters:{formDate:function(t){return u()(t).format("YYYY:MM:DD HH:mm:ss")}}},p=f,h=(e("fdd1"),e("2877")),v=Object(h["a"])(p,a,i,!1,null,"094f5010",null);s["default"]=v.exports},"32fb":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"support-ico",class:t.iconCls})},i=[],n=(e("99af"),e("a9e3"),{name:"support-ico",props:{size:{type:Number},type:{type:Number}},computed:{iconCls:function(){var t=["decrease","discount","special","invoice","guarantee"];return"icon-".concat(this.size," ").concat(t[this.type])}}}),o=n,r=(e("55d4"),e("2877")),c=Object(r["a"])(o,a,i,!1,null,"342aa259",null);s["a"]=c.exports},"365c":function(t,s,e){"use strict";var a=e("0e9a"),i=0,n={development:"/",production:""},o=n["production"];function r(t){return function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["a"].get(o+t,{params:s}).then((function(t){var s=t.data,e=s.code,a=s.data;if(e===i)return a})).catch((function(t){}))}}e.d(s,"c",(function(){return c})),e.d(s,"a",(function(){return l})),e.d(s,"b",(function(){return u}));var c=r("api/seller"),l=r("api/goods"),u=r("api/ratings")},"36f4":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){return t.select(2)}}},[t._v(" "+t._s(t.desc.all)+" "),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){return t.select(0)}}},[t._v(" "+t._s(t.desc.positive)+" "),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){return t.select(1)}}},[t._v(" "+t._s(t.desc.negative)+" "),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggle}},[e("i",{staticClass:"icon-check_circle"}),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},i=[],n=(e("4de4"),e("a9e3"),0),o=1,r=2,c={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:r},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"吐槽"}}}},computed:{positives:function(){return this.ratings.filter((function(t){return t.rateType===n}))},negatives:function(){return this.ratings.filter((function(t){return t.rateType===o}))}},methods:{select:function(t){this.$emit("ratingType",t)},toggle:function(){this.$emit("tog")}}},l=c,u=(e("7161"),e("2877")),d=Object(u["a"])(l,a,i,!1,null,"adfe92b6",null);s["a"]=d.exports},"3f27":function(t,s,e){"use strict";var a=e("48f8"),i=e.n(a);i.a},"3f9a":function(t,s,e){"use strict";var a=e("5329"),i=e.n(a);i.a},"48f8":function(t,s,e){},5329:function(t,s,e){},"55d4":function(t,s,e){"use strict";var a=e("7c16"),i=e.n(a);i.a},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=e("cadd"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),e("div",{staticClass:"tab-wrapper"},[e("tab",{attrs:{seller:t.seller}})],1)],1)},o=[],r=e("365c"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper",on:{click:t.showDetail}},[t.seller&&t.seller.avatar?e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,height:"64",width:"64"}})]):t._e(),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达")]),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t.seller.supports?e("div",{staticClass:"support-count"},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:"",height:"100%",width:"100%"}})]),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"start-wrapper"},[e("star",{attrs:{score:2.7,size:48}})],1),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("优惠信息")]),e("div",{staticClass:"line"})]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("supporticon",{staticClass:"icon",attrs:{size:2,type:s.type}}),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)})),0):t._e(),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("商家公告")]),e("div",{staticClass:"line"})]),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),e("div",{staticClass:"detail-close",on:{click:t.closeDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},l=[],u=e("6a44"),d=e("32fb"),f={props:{seller:{type:Object}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{star:u["a"],supporticon:d["a"]},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},closeDetail:function(){this.detailShow=!1}}},p=f,h=(e("dd07"),e("2877")),v=Object(h["a"])(p,c,l,!1,null,"404f29bf",null),C=v.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tab"},[e("cube-tab-bar",{ref:"tabBar",attrs:{data:t.tabs,showSlider:!0},model:{value:t.selectedLabel,callback:function(s){t.selectedLabel=s},expression:"selectedLabel"}}),e("div",{staticClass:"slide-wrapper"},[e("cube-slide",{ref:"slide",attrs:{"auto-play":!1,"initial-index":t.index,loop:!1,options:t.slideOptions,"show-dots":!1},on:{change:t.onChange,scroll:t.onScroll}},[e("cube-slide-item",[e("goods",{attrs:{seller:t.seller}})],1),e("cube-slide-item",[e("ratings",{attrs:{seller:t.seller}})],1),e("cube-slide-item",[e("seller",{attrs:{seller:t.seller}})],1)],1)],1)],1)},_=[],g=(e("c740"),e("58b2")),b=e("2e0b"),y=e("fe09"),w={props:{seller:{type:Object,default:function(){return{}}}},data:function(){return{index:0,tabs:[{label:"商品"},{label:"评价"},{label:"商家"}],slideOptions:{listenScroll:!0,probeType:3,directionLockThreshold:0}}},mounted:function(){this.onChange(this.index)},methods:{onScroll:function(t){var s=this.$refs.tabBar.$el.clientWidth,e=this.$refs.slide.slide.scrollerWidth,a=-t.x/e*s;this.$refs.tabBar.setSliderTransform(a)},onChange:function(t){this.index=t}},computed:{selectedLabel:{get:function(){return this.tabs[this.index].label},set:function(t){this.index=this.tabs.findIndex((function(s){return s.label===t}))}}},components:{goods:g["default"],ratings:b["default"],seller:y["default"]}},k=w,x=(e("29d9"),Object(h["a"])(k,m,_,!1,null,"64538bfa",null)),T=x.exports,$={data:function(){return{seller:{}}},created:function(){var t=this;Object(r["c"])().then((function(s){t.seller=s}))},components:{"v-header":C,tab:T}},O=$,S=(e("5c5d"),Object(h["a"])(O,n,o,!1,null,"df403dd8",null)),j=S.exports,P=(e("d3b7"),e("8c4f"));a["a"].use(P["a"]);var E=[{path:"/",name:"goods",component:function(){return Promise.resolve().then(e.bind(null,"58b2"))}},{path:"/goods",name:"goods",component:function(){return Promise.resolve().then(e.bind(null,"58b2"))}},{path:"/ratings",name:"ratings",component:function(){return Promise.resolve().then(e.bind(null,"2e0b"))}},{path:"/seller",name:"seller",component:function(){return Promise.resolve().then(e.bind(null,"fe09"))}}],N=new P["a"]({mode:"history",linkActiveClass:"is-active",base:"",routes:E}),L=N,F=e("2f62");a["a"].use(F["a"]);var D=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=e("28dd"),B=e("caf9"),A=(e("f867"),e("df9a")),M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"},on:{"after-leave":t.afterleave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.foodFlag,expression:"foodFlag"}],ref:"food",staticClass:"food"},[e("cube-scroll",{ref:"scroll"},[e("div",{staticClass:"foot-content"},[e("div",{staticClass:"img-header"},[e("img",{attrs:{src:t.food.image}}),e("i",{staticClass:"icon-arrow_lift",on:{click:t.hide}})]),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating))])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("¥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v(t._s(t.food.oldPrice))]),e("div",{staticClass:"control-wrapper"},[e("cartcontrol",{attrs:{food:t.food},on:{cartAdd:t.add}})],1),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.food.count||!t.food.count,expression:"food.count===0 || !food.count"}],staticClass:"join-car",on:{click:function(s){return s.stopPropagation(),t.addFirst(s)}}},[t._v("加入购物车")])])],1)]),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),e("split"),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),e("ratingselect",{attrs:{ratings:t.food.ratings,selectType:t.selectType,desc:t.desc,onlyContent:t.onlyContent},on:{ratingType:t.ratingType,tog:t.tog}}),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.needrating,(function(s,a){return e("li",{key:a,staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar,alt:""}})]),e("div",{staticClass:"time"},[t._v(t._s(t._f("formDate")(s.rateTime)))]),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}},[t._v(t._s(s.text))])])])})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])],1)])},Y=[],H=(e("4160"),e("159b"),e("b710")),R=e("dda2"),G=e("36f4"),J=e("c1df"),U=e.n(J),W=2,I={name:"food",data:function(){return{foodFlag:!1,selectType:W,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},props:{food:{type:Object,default:function(){return{}}}},computed:{needrating:function(){var t=this,s=[];return this.food.ratings.forEach((function(e){t.onlyContent&&!e.text||t.selectType!==W&&t.selectType!==e.rateType||s.push(e)})),s}},filters:{formDate:function(t){return U()(t).format("YYYY:MM:DD HH:mm:ss")}},components:{cartcontrol:H["a"],split:R["a"],ratingselect:G["a"]},created:function(){var t=this;this.$on("show",(function(){t.$nextTick((function(){t.$refs.scroll.refresh()}))}))},methods:{tog:function(){var t=this;this.onlyContent=!this.onlyContent,this.$nextTick((function(){t.$refs.scroll.refresh()}))},ratingType:function(t){var s=this;this.selectType=t,this.$nextTick((function(){s.$refs.scroll.refresh()}))},show:function(){var t=this;this.foodFlag=!0,this.selectType=W,this.onlyContent=!0,this.$nextTick((function(){t.$refs["scroll"].refresh()}))},hide:function(){this.foodFlag=!1},addFirst:function(t){this.$set(this.food,"count",1),this.$emit("add",t.target)},afterleave:function(){this.$emit("leave")},add:function(t){this.$emit("add",t)}}},X=I,q=(e("ecef"),Object(h["a"])(X,M,Y,!1,null,"770c6fa0",null)),K=q.exports,Q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade",appear:""}},[e("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible "}],attrs:{"mask-closable":!0,position:"bottom",type:"shop-cart-list","z-index":90},on:{"mask-click":t.maskClick}},[e("transition",{attrs:{name:"move",appear:""},on:{"after-leave":t.afterLeave}},[t.visible?e("div",[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),e("cube-scroll",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,(function(s,a){return e("li",{key:a,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:s},on:{cartAdd:t.onAdd}})],1)])})),0)])],1):t._e()])],1)],1)},V=[],Z={name:"shop-cart-list",props:{selectFoods:{type:Array,default:function(){return[]}}},data:function(){return{visible:!1}},created:function(){var t=this;this.$on("showprop",(function(){t.$nextTick((function(){t.$refs.listContent.refresh()}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1,this.$emit("hide")},onAdd:function(t){this.$emit("add",t)},afterLeave:function(){this.$emit("leave")},maskClick:function(){this.hide()},empty:function(){var t=this;this.dialogComp=this.$createDialog({type:"confirm",content:"清空购物车？",$events:{confirm:function(){t.selectFoods.forEach((function(t){t.count=0})),t.hide()}}}).show()}},components:{CartControl:H["a"]}},tt=Z,st=(e("3f27"),Object(h["a"])(tt,Q,V,!1,null,"2fec94fc",null)),et=st.exports,at=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"shop-cart-sticky"},[e("ShopCart",{ref:"shopCart",attrs:{seller:t.seller,goods:t.goods,sticky:!0,fold:t.fold}})],1)},it=[],nt=e("f21c"),ot={name:"shop-cart-sticky",data:function(){return{visible:!1}},props:{seller:{type:Object,default:function(){return{}}},goods:{type:Array,default:function(){return[]}},fold:{type:Boolean,default:!0},list:{type:Object,default:function(){return{}}},sticky:{type:Boolean,default:!1}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1,this.$emit("hideprop")},drop:function(t){this.$refs.shopCart.drop(t)}},components:{ShopCart:nt["a"]}},rt=ot,ct=(e("ab0e"),Object(h["a"])(rt,at,it,!1,null,"8c8f61e6",null)),lt=ct.exports;Object(A["a"])(a["a"],K),Object(A["a"])(a["a"],et),Object(A["a"])(a["a"],lt),a["a"].config.productionTip=!1,a["a"].use(B["a"]),a["a"].use(z["a"]),a["a"].use(i["a"]),new a["a"]({router:L,store:D,render:function(t){return t(j)}}).$mount("#app")},"58b2":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{staticClass:"scroll-nav-wrapper"},[t.goods&&t.goods.length?e("cube-scroll-nav",{attrs:{data:t.goods,options:t.scrollOptions,side:!0},scopedSlots:t._u([{key:"bar",fn:function(s){return[e("cube-scroll-nav-bar",{attrs:{current:s.current,labels:s.labels,txts:t.txtBar,direction:"vertical"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"text"},[s.txt.type>=1?e("supportico",{attrs:{size:3,type:s.txt.type}}):t._e(),e("span",[t._v(t._s(s.txt.name))]),s.txt.count?e("span",{staticClass:"num"},[t._v(t._s(s.txt.count))]):t._e()],1)]}}],null,!0)})]}}],null,!1,1202621857)},t._l(t.goods,(function(s){return e("cube-scroll-nav-panel",{key:s.name,attrs:{label:s.name,title:s.name}},[e("ul",t._l(s.foods,(function(s){return e("li",{key:s.name,staticClass:"food-item",on:{click:function(e){return t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.icon,expression:"food.icon"}],attrs:{height:"57",width:"57"}})]),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),e("div",{staticClass:"cart-control-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{cartAdd:t.cartAdd}})],1)])])})),0)])})),1):t._e()],1),e("div",{staticClass:"shop-cart-wrapper"},[e("shopcar",{ref:"shopcar",attrs:{seller:t.seller,goods:t.goods}})],1)])},i=[],n=(e("4160"),e("b0c0"),e("159b"),e("365c")),o=e("f21c"),r=e("b710"),c=e("32fb"),l={props:{seller:{type:Object,default:function(){return{}}}},data:function(){return{goods:[],scrollOptions:{click:!1,directionLockThreshold:0},selectedFood:{}}},computed:{txtBar:function(){var t=[];return this.goods.forEach((function(s){var e=s.type,a=s.name,i=s.foods,n=0;i.forEach((function(t){n+=t.count||0})),t.push({name:a,type:e,count:n})})),t}},components:{shopcar:o["a"],cartcontrol:r["a"],supportico:c["a"]},created:function(){this._Getgoods()},methods:{_Getgoods:function(){var t=this;Object(n["a"])().then((function(s){t.goods=s}))},selectFood:function(t){var s=this;this.selectedFood=t,this.foodComp=this.$createFood({$props:{food:"selectedFood"},$events:{leave:function(){s._hideShopCartList()},add:function(t){console.log(t),s.shopCartStickyComp.drop(t)}}}),this.foodComp.show(),this._showShopCarSticky()},_showShopCarSticky:function(){this.shopCartStickyComp=this.shopCartStickyComp||this.$createShopCartSticky({$props:{seller:"seller",goods:"goods",fold:!0}}),this.shopCartStickyComp.show()},_hideShopCartList:function(){this.shopCartStickyComp.hide()},cartAdd:function(t){this.$refs["shopcar"].drop(t)}}},u=l,d=(e("d598"),e("2877")),f=Object(d["a"])(u,a,i,!1,null,"13662a66",null);s["default"]=f.exports},"5c5d":function(t,s,e){"use strict";var a=e("8e1c"),i=e.n(a);i.a},"5d9c":function(t,s,e){var a={"./zh-cn":"5c3a","./zh-cn.js":"5c3a"};function i(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="5d9c"},"6a44":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.items,(function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})})),0)},i=[],n=(e("a9e3"),5),o="on",r="half",c="off",l={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},items:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!==0,a=Math.floor(s),i=0;i<a;i++)t.push(o);e&&t.push(r);while(t.length<n)t.push(c);return t}},data:function(){return{}}},u=l,d=(e("3f9a"),e("2877")),f=Object(d["a"])(u,a,i,!1,null,"792fa255",null);s["a"]=f.exports},7161:function(t,s,e){"use strict";var a=e("ebba"),i=e.n(a);i.a},"7c16":function(t,s,e){},8916:function(t,s,e){"use strict";var a=e("0af7"),i=e.n(a);i.a},"8e1c":function(t,s,e){},ab0e:function(t,s,e){"use strict";var a=e("1149"),i=e.n(a);i.a},af0a:function(t,s,e){"use strict";var a=e("e5d9"),i=e.n(a);i.a},b5d3:function(t,s,e){},b710:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count&&t.food.count>0,expression:"food.count&&food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),t.del(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),e("div",{staticClass:"cart-add",on:{click:function(s){return s.stopPropagation(),t.add(s)}}},[e("span",{staticClass:"icon-add_circle"})])],1)},i=[],n={props:{food:{type:Object}},methods:{add:function(t){this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit("cartAdd",t.target)},del:function(){this.food.count--}}},o=n,r=(e("18f4"),e("2877")),c=Object(r["a"])(o,a,i,!1,null,"7d45a5c3",null);s["a"]=c.exports},be97:function(t,s,e){},c4b9:function(t,s,e){},ca65:function(t,s,e){},d20c:function(t,s,e){},d598:function(t,s,e){"use strict";var a=e("2d4e"),i=e.n(a);i.a},dd07:function(t,s,e){"use strict";var a=e("b5d3"),i=e.n(a);i.a},dda2:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"split"})},i=[],n={},o=n,r=(e("2369"),e("2877")),c=Object(r["a"])(o,a,i,!1,null,"c680bf40",null);s["a"]=c.exports},e5d9:function(t,s,e){},ebba:function(t,s,e){},ecef:function(t,s,e){"use strict";var a=e("d20c"),i=e.n(a);i.a},f21c:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content",on:{click:t.showList}},[e("div",{staticClass:"left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{hightlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{hightlight:t.totalCount>0}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),e("div",{staticClass:"price",class:{hightlight:t.totalPrice>0}},[t._v("¥"+t._s(t.totalPrice)+"元")]),e("div",{staticClass:"desc"},[t._v("另需配送费¥"+t._s(t.seller.deliveryPrice)+"元")])]),e("div",{staticClass:"right"},[e("div",{staticClass:"pay",class:t.payClass,on:{click:function(s){return s.stopPropagation(),t.pay(s)}}},[t._v(t._s(t.payDesc))])])]),e("div",{staticClass:"ball-container"},t._l(t.balls,(function(s,a){return e("div",{key:a},[e("transition",{on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),0)])},i=[],n=(e("4160"),e("159b"),10);function o(){for(var t=[],s=0;s<n;s++)t.push({show:!1});return t}var r={props:{seller:{type:Object,default:function(){return{}}},goods:{type:Array,default:function(){return[]}},fold:{type:Boolean,default:!0},sticky:{type:Boolean,default:!1}},data:function(){return{balls:o(),default:this.fold}},computed:{selectFoods:function(){var t=[];return this.goods.forEach((function(s){s.foods.forEach((function(s){s.count&&s.count>0&&t.push(s)}))})),t},totalPrice:function(){var t=0;return this.selectFoods.forEach((function(s){t+=s.price*s.count})),t},totalCount:function(){var t=0;return this.selectFoods.forEach((function(s){t+=s.count})),t},payDesc:function(){if(0===this.totalPrice)return"¥".concat(this.seller.minPrice,"元起送");if(this.totalPrice<this.seller.minPrice){var t=this.seller.minPrice-this.totalPrice;return"还差¥".concat(t,"元起送")}return"去结算"},payClass:function(){return this.totalPrice<this.seller.minPrice?"not-enough":"enough"}},created:function(){this.dropBalls=[]},methods:{pay:function(){!this.totalPrice||this.totalPrice<this.seller.minPrice||(this.dialogComp=this.$createDialog({title:"支付",content:"支付".concat(this.totalPrice,"元")}).show())},showList:function(){if(this.default){if(this.totalCount<=0)return;this.default=!1,this._showcarList(),this._showcarSticty()}else this.default=!0,this._hidecarList()},_showcarList:function(){var t=this;this.showCartList=this.$createShopCartList({$props:{selectFoods:"selectFoods"},$events:{hide:function(){t.default=!0},leave:function(){t._hidecarSticty()},add:function(s){t.shopcarstictyComp.drop(s)}}}),this.showCartList.show()},_hidecarList:function(){var t=this.sticky?this.$parent.list:this.showCartList;t.hide()&&t.hide()},_showcarSticty:function(){this.shopcarstictyComp=this.shopcarstictyComp||this.$createShopCartSticky({$props:{seller:"seller",goods:"goods",fold:"default",list:this.showCartList}}),this.shopcarstictyComp.show()},_hidecarSticty:function(){this.shopcarstictyComp.hide()},drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeDrop:function(t){var s=this.dropBalls[this.dropBalls.length-1],e=s.el.getBoundingClientRect(),a=e.left-32,i=-(window.innerHeight-e.top-22);t.style.display="",t.style.transform=t.style.webkitTransform="translate3d(0,".concat(i,"px,0)");var n=t.getElementsByClassName("inner-hook")[0];n.style.transform=n.style.webkitTransform="translate3d(".concat(a,"px,0,0)")},dropping:function(t,s){this._reflow=document.body.offsetHeight,t.style.transform=t.style.webkitTransform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.transform=e.style.webkitTransform="translate3d(0,0,0)",t.addEventListener("transitionend",s)},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}},watch:{fold:function(t){this.default=t},totalCount:function(t){this.default||t||this._hidecarList()}}},c=r,l=(e("af0a"),e("2877")),u=Object(l["a"])(c,a,i,!1,null,"b91e278c",null);s["a"]=u.exports},f867:function(t,s,e){},fdd1:function(t,s,e){"use strict";var a=e("be97"),i=e.n(a);i.a},fe09:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"seller"},[e("cube-scroll",{attrs:{options:t.sellerScrollOptions}},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"over-view"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"desc"},[e("start",{staticClass:"start",attrs:{size:36,score:t.seller.score}}),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元 ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元 ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟 ")])])]),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),e("split"),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),e("div",{staticClass:"content-wrapper"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("supporticon",{staticClass:"icon",attrs:{size:4,type:s.type}}),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)})),0):t._e()]),e("split"),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),e("cube-scroll",{ref:"scroll",staticClass:"pic-wrapper",attrs:{options:t.picScrollOptions}},[e("ul",{staticClass:"pic-list"},t._l(t.seller.pics,(function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"pic"}],attrs:{alt:"",width:"120",height:"90"}})])})),0)])],1),e("split"),e("div",{staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商家信息")]),e("ul",t._l(t.seller.infos,(function(s,a){return e("li",{key:a,staticClass:"info-item"},[t._v(t._s(s))])})),0)])],1)])],1)},i=[],n=e("6a44"),o=e("dda2"),r=e("32fb"),c={props:{seller:{type:Object,deafult:function(){return{}}}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},components:{start:n["a"],split:o["a"],supporticon:r["a"]},data:function(){return{favorite:!1,sellerScrollOptions:{directionLockThreshold:0,click:!1},picScrollOptions:{scrollX:!0,stopPropagation:!0,directionLockThreshold:0}}},methods:{toggleFavorite:function(){this.favorite=!this.favorite}}},l=c,u=(e("8916"),e("2877")),d=Object(u["a"])(l,a,i,!1,null,null,null);s["default"]=d.exports}});
//# sourceMappingURL=app.e1066629.js.map