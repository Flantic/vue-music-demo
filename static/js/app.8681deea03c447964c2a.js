webpackJsonp([4],[,function(t,e,n){t.exports=n.p+"static/img/item1.ab4015a.jpg"},function(t,e,n){var s=n(0)(n(37),n(107),null,null);t.exports=s.exports},,,,,,,,function(t,e,n){"use strict";var s=n(4),i=n.n(s),a=n(9),r=n(46),o=n(44),c=(n.n(o),n(45)),l=(n.n(c),n(47));i.a.use(a.b),e.a=new a.b.Store({state:l.a,mutations:r,actions:o,getters:c,strict:!1})},,,,,,,,,function(t,e,n){n(77);var s=n(0)(n(28),n(103),null,null);t.exports=s.exports},function(t,e,n){"use strict";var s=n(4),i=n.n(s),a=n(118),r=n(42),o=n(43),c=n(41),l=n(39),u=n(40);console.log(r.a),i.a.use(a.a),e.a=new a.a({routes:[r.a,o.a,c.a,l.a,u.a,{path:"/",redirect:"/home"},{path:"*",redirect:"/"}]})},,function(t,e,n){n(85);var s=n(0)(null,n(114),null,null);t.exports=s.exports},function(t,e){!function(t,e){function n(){var e=a.getBoundingClientRect().width;e/c>540&&(e=540*c);var n=e/10;a.style.fontSize=n+"px",u.rem=t.rem=n}var s,i=t.document,a=i.documentElement,r=i.querySelector('meta[name="viewport"]'),o=i.querySelector('meta[name="flexible"]'),c=0,l=0,u=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(l=parseFloat(d[1]),c=parseInt(1/l))}else if(o){var p=o.getAttribute("content");if(p){var m=p.match(/initial\-dpr=([\d\.]+)/),v=p.match(/maximum\-dpr=([\d\.]+)/);m&&(c=parseFloat(m[1]),l=parseFloat((1/c).toFixed(2))),v&&(c=parseFloat(v[1]),l=parseFloat((1/c).toFixed(2)))}}if(!c&&!l){var f=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),h=t.devicePixelRatio;c=f?h>=3&&(!c||c>=3)?3:h>=2&&(!c||c>=2)?2:1:1,l=1/c}if(a.setAttribute("data-dpr",c),!r)if(r=i.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var _=i.createElement("div");_.appendChild(r),i.write(_.innerHTML)}t.addEventListener("resize",function(){clearTimeout(s),s=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(s),s=setTimeout(n,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*c+"px":i.addEventListener("DOMContentLoaded",function(t){i.body.style.fontSize=12*c+"px"},!1),n(),u.dpr=t.dpr=c,u.refreshRem=n,u.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},u.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(t,e,n){n(83);var s=n(0)(n(33),n(111),null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=n(18),n(76)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Account",components:{},data:function(){return{msg:"我是Account模块"}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"controller",mounted:function(){this.$refs.musicPlayer.volume=.5},data:function(){return{}},methods:{play:function(){this.$refs.musicPlayer.play()},stop:function(){this.$refs.musicPlayer.pause()},playPrev:function(){},playNext:function(){},reduceVolume:function(){0!=this.$refs.musicPlayer.volume.toFixed(1)&&(this.$refs.musicPlayer.volume-=.1)},addVolume:function(){1!=this.$refs.musicPlayer.volume.toFixed(1)&&(this.$refs.musicPlayer.volume+=.1)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Friend",components:{},data:function(){return{msg:"我是Friend模块"}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer",data:function(){return{footerdata:[{link:"/",icon:"icon-yun-music",text:"发现音乐"},{link:"/Mymusic",icon:"icon-note",text:"我的音乐"},{link:"/Friend",icon:"icon-account",text:"朋友"},{link:"/Account",icon:"icon-account",text:"账号"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(24),i=(n.n(s),n(17)),a=n.n(i),r=n(10);e.default={name:"header",mounted:function(){console.log(this.$store),this.initNavPosition()},components:{},data:function(){return{search_state:!1,nav_style:[],active_nav:0,label_text:"搜索音乐、歌词、电台",search_text:""}},methods:{initNavPosition:function(){var t=this,e=document.querySelectorAll(".nav-menu>li span");e.forEach(function(e,n){var s=getComputedStyle(e,null).getPropertyValue("width"),i=e.offsetLeft;t.nav_style.push({width:parseInt(s)+"px",left:parseInt(i)+"px"})})},navSwitch:function(t){var e=a()(t.currentTarget);console.log(e),r.a.commit("changeHomePage",{num:e.index()}),this.active_nav=e.index()},clearText:function(){if(""==this.search_text)return void(this.label_text="搜索音乐、歌词、电台");this.label_text=""},headerSwith:function(){this.search_state=!this.search_state,this.search_text="",this.label_text="搜索音乐、歌词、电台"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(11),i=n.n(s),a=n(17),r=(n.n(a),n(98)),o=n.n(r),c=n(96),l=n.n(c),u=n(3),d=(n.n(u),n(9));e.default={name:"home",mounted:function(){this.initPageStatus()},data:function(){var t=this;return{scrollPage:{},pageShowFlag:{recommend:!1,songlist:!1,radio:!1,ranking:!1},swiperOption:{onSlideChangeStart:function(){var e=t.$refs.mySwiper.swiper.activeIndex;t.$store.commit("changeHomePage",{num:e})}}}},components:{HomeHeader:o.a,swiper:u.swiper,swiperSlide:u.swiperSlide,Loading:l.a},watch:{HomePageNumber:function(){this.initPageStatus(),this.$refs.mySwiper.swiper.slideTo(this.HomePageNumber,500,!1)}},methods:{initPageStatus:function(){switch(this.HomePageNumber){case 1:this.pageShowFlag.songlist=!0;break;case 2:this.pageShowFlag.radio=!0;break;case 3:this.pageShowFlag.ranking=!0;break;default:this.pageShowFlag.recommend=!0}}},computed:i()({},n.i(d.a)(["HomePageNumber"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3);n.n(s),n(9);e.default={data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},components:{swiper:s.swiper,swiperSlide:s.swiperSlide}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header",mounted:function(){},components:{},data:function(){return{menu_status:!1}},methods:{},watch:{menu_status:function(t){console.log(t),document.getElementsByTagName("body")[0].style.overflow=t?"hidden":""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(100),i=n.n(s);e.default={name:"home",data:function(){return{sheet_list_status:!1}},components:{MusicHeader:i.a},methods:{sheet_status:function(t){t.target.parentNode.classList.toggle("is-show")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(97),i=n.n(s);e.default={name:"main",components:{AppFooter:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(11),i=n.n(s),a=n(4),r=n.n(a),o=n(22),c=n.n(o),l=n(10),u=n(20),d=n(23),p=(n.n(d),n(21)),m=n.n(p),v=n(3),f=n.n(v);r.a.use(f.a),m.a.attach(document.body);new r.a({});new r.a(i()({store:l.a,router:u.a},c.a)).$mount("#app")},function(t,e,n){"use strict";var s=n(2),i=n.n(s),a=n(94),r=n.n(a),o={path:"/Account",components:{main:i.a},children:[{path:"/",component:r.a}]};e.a=o},function(t,e,n){"use strict";var s=n(19),i=n.n(s),a={path:"/Controller",components:{control:i.a}};e.a=a},function(t,e,n){"use strict";var s=n(2),i=n.n(s),a=n(95),r=n.n(a),o={path:"/Friend",components:{main:i.a},children:[{path:"/",component:r.a}]};e.a=o},function(t,e,n){"use strict";var s=n(2),i=n.n(s),a=n(99),r=n.n(a),o=n(19),c=n.n(o),l={path:"/",components:{main:i.a,control:c.a},children:[{path:"/",component:r.a,children:[{path:"/",components:{home_recommend:function(t){return n.e(0).then(function(){var e=[n(125)];t.apply(null,e)}.bind(this)).catch(n.oe)},home_songlist:function(t){return n.e(1).then(function(){var e=[n(126)];t.apply(null,e)}.bind(this)).catch(n.oe)},home_radio:function(t){return n.e(3).then(function(){var e=[n(123)];t.apply(null,e)}.bind(this)).catch(n.oe)},home_ranking:function(t){return n.e(2).then(function(){var e=[n(124)];t.apply(null,e)}.bind(this)).catch(n.oe)}}}]}]};e.a=l},function(t,e,n){"use strict";var s=n(2),i=n.n(s),a=n(101),r=n.n(a),o=n(102),c=(n.n(o),{path:"/Mymusic",components:{main:i.a},children:[{path:"/",component:r.a}]});e.a=c},function(t,e){},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"changeHomePage",function(){return s}),n.d(e,"changePlayerStatus",function(){return i});var s=function(t,e){t.HomePageNumber=e.num},i=function(t){t.PlayerStatus=!t.PlayerStatus}},function(t,e,n){"use strict";var s={HomePageNumber:0,PlayerStatus:!1};e.a=s},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"static/img/slider1_02.b4cfe57.jpg"},function(t,e,n){t.exports=n.p+"static/img/slider2_02.2e9f2ba.jpg"},function(t,e,n){t.exports=n.p+"static/img/slider3_02.faeed47.jpg"},function(t,e,n){var s=n(0)(n(25),n(105),null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(26),n(113),null,null);t.exports=s.exports},function(t,e,n){n(88);var s=n(0)(n(27),n(117),null,null);t.exports=s.exports},function(t,e,n){n(78);var s=n(0)(n(29),n(104),null,null);t.exports=s.exports},function(t,e,n){n(86);var s=n(0)(null,n(115),"data-v-9a011ca2",null);t.exports=s.exports},function(t,e,n){n(82);var s=n(0)(n(30),n(110),null,null);t.exports=s.exports},function(t,e,n){n(87);var s=n(0)(n(31),n(116),null,null);t.exports=s.exports},function(t,e,n){n(84);var s=n(0)(n(32),n(112),"data-v-6e010d21",null);t.exports=s.exports},function(t,e,n){n(79);var s=n(0)(n(34),n(106),null,null);t.exports=s.exports},function(t,e,n){n(80);var s=n(0)(n(35),n(108),null,null);t.exports=s.exports},function(t,e,n){n(81);var s=n(0)(n(36),n(109),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-control",class:{show:this.$store.state.PlayerStatus}},[n("header",{staticClass:"control-header"},[n("div",{staticClass:"header-group"},[n("a",{staticClass:"header-back",on:{click:function(e){t.$store.commit("changePlayerStatus")}}},[n("i",{staticClass:"icon icon-back"})]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"control-main"},[n("div",{staticClass:"main-lyric"}),t._v(" "),n("div",{staticClass:"main-cover"},[n("audio",{ref:"musicPlayer",attrs:{src:"http://omwpjgs5a.bkt.clouddn.com/music/mianju.mp3",autoplay:"autoplay"}},[t._v("\n                您的浏览器不支持 audio 标签。\n            ")]),t._v(" "),n("button",{on:{click:t.play}},[t._v("播放")]),n("br"),t._v(" "),n("button",{on:{click:t.stop}},[t._v("暂停")]),n("br"),t._v(" "),n("button",{on:{click:t.reduceVolume}},[t._v("减小音量")]),n("br"),t._v(" "),n("button",{on:{click:t.addVolume}},[t._v("放大音量")]),n("br"),t._v(" "),n("div",{staticClass:"cover-control"})])]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"controller-bg"})])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-info"},[n("div",{staticClass:"song-name"},[t._v("七里香")]),t._v(" "),n("div",{staticClass:"author-name"},[t._v("周悦")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-share"},[n("i",{staticClass:"icon icon-share"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controller"},[n("div",{staticClass:"control-progress-bar"}),t._v(" "),n("footer",{staticClass:"control-switch-bar"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n    "+t._s(t.msg)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"my-music-header"},[n("div",{staticClass:"header-group"},[n("span",{staticClass:"header-more",on:{click:function(e){t.menu_status=!t.menu_status}}},[t._v("更多")]),t._v("我的音乐 \r\n        "),t._m(0)]),t._v(" "),n("ul",{class:["more-menu",{"is-show":t.menu_status}]},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"header-mask",on:{click:function(e){t.menu_status=!t.menu_status}}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"header-music"},[n("i",{staticClass:"icon icon-music"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:""}},[n("i",{staticClass:"icon icon-add"}),t._v("新建歌单")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:""}},[n("i",{staticClass:"icon icon-article"}),t._v("管理歌单")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:""}},[n("i",{staticClass:"icon icon-yun"}),t._v("我的音乐云盘")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-main"},[n("router-view"),t._v(" "),n("App-Footer")],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-mymusic"},[n("music-header"),t._v(" "),n("div",{staticClass:"music-content"},[t._m(0),t._v(" "),n("div",{staticClass:"music-sheet"},[n("div",{staticClass:"title",on:{click:function(e){t.sheet_status(e)}}},[n("i",{staticClass:"icon"}),t._v("我创建的歌单(25)")]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"music-sheet"},[n("div",{staticClass:"title",on:{click:function(e){t.sheet_status(e)}}},[n("i",{staticClass:"icon"}),t._v("我收藏的歌单(25)")]),t._v(" "),t._m(2)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"menu-list"},[n("li",[n("a",{attrs:{href:""}},[n("i",{staticClass:"icon icon-download"}),t._v("下载音乐 "),n("span",{staticClass:"num"},[t._v("0>")])])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[n("i",{staticClass:"icon icon-recent-play"}),t._v("最近播放 "),n("span",{staticClass:"num"},[t._v("100>")])])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[n("i",{staticClass:"icon icon-my-singer"}),t._v("我的歌手 "),n("span",{staticClass:"num"},[t._v("7>")])])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[n("i",{staticClass:"icon icon-my-radio"}),t._v("我的电台 "),n("span",{staticClass:"num"},[t._v("12>")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"sheet-list"},[s("li",[s("a",{attrs:{href:""}},[s("div",{staticClass:"item-img"},[s("img",{attrs:{src:n(1),alt:""}})]),t._v(" "),s("div",{staticClass:"item-info"},[s("h1",{staticClass:"item-title"},[t._v("我喜欢的音乐")]),t._v(" "),s("p",{staticClass:"item-text"},[t._v("108首")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[s("div",{staticClass:"item-img"},[s("img",{attrs:{src:n(1),alt:""}})]),t._v(" "),s("div",{staticClass:"item-info"},[s("h1",{staticClass:"item-title"},[t._v("我喜欢的音乐")]),t._v(" "),s("p",{staticClass:"item-text"},[t._v("108首")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"sheet-list"},[s("li",[s("a",{attrs:{href:""}},[s("div",{staticClass:"item-img"},[s("img",{attrs:{src:n(1),alt:""}})]),t._v(" "),s("div",{staticClass:"item-info"},[s("h1",{staticClass:"item-title"},[t._v("我喜欢的音乐")]),t._v(" "),s("p",{staticClass:"item-text"},[t._v("108首")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[s("div",{staticClass:"item-img"},[s("img",{attrs:{src:n(1),alt:""}})]),t._v(" "),s("div",{staticClass:"item-info"},[s("h1",{staticClass:"item-title"},[t._v("我喜欢的音乐")]),t._v(" "),s("p",{staticClass:"item-text"},[t._v("108首")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("路由测试内容")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"app-footer"},[n("div",{staticClass:"footer-bg"}),t._v(" "),n("nav",{staticClass:"footer-nav"},t._l(t.footerdata,function(e,s){return n("router-link",{key:s,staticClass:"item",attrs:{to:e.link,exact:0==s}},[n("i",{class:["icon",e.icon]}),t._v(" "),n("p",{staticClass:"title"},[t._v(t._s(e.text))])])}))])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{attrs:{src:n(89),alt:""}})]),t._v(" "),s("swiper-slide",[s("img",{attrs:{src:n(90),alt:""}})]),t._v(" "),s("swiper-slide",[s("img",{attrs:{src:n(91),alt:""}})]),t._v(" "),s("div",{staticClass:"swiper-pagination",slot:"pagination"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-home"},[n("home-header"),t._v(" "),n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[n("swiper-slide",[this.pageShowFlag.recommend?n("router-view",{attrs:{name:"home_recommend"}}):n("Loading")],1),t._v(" "),n("swiper-slide",[this.pageShowFlag.songlist?n("router-view",{attrs:{name:"home_songlist"}}):n("Loading")],1),t._v(" "),n("swiper-slide",[this.pageShowFlag.radio?n("router-view",{attrs:{name:"home_radio"}}):n("Loading")],1),t._v(" "),n("swiper-slide",[this.pageShowFlag.ranking?n("router-view",{attrs:{name:"home_ranking"}}):n("Loading")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-app",attrs:{id:"app"}},[n("router-view",{attrs:{name:"main"}}),t._v(" "),n("router-view",{attrs:{name:"page"}}),t._v(" "),n("keep-alive",[n("router-view",{attrs:{name:"control"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("div",{staticClass:"loader-inner line-scale"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")]),t._v(" "),n("p",{staticClass:"info"},[t._v("更新中,请稍候...")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:["home-header",{"is-search":t.search_state}]},[n("div",{staticClass:"header-search"},[t._m(0),t._v(" "),n("div",{staticClass:"search-group"},[n("label",{attrs:{for:"header_search"}},[n("i",{staticClass:"icon icon-search"}),t._v(t._s(t.label_text))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search_text,expression:"search_text"}],attrs:{type:"text",id:"header_search"},domProps:{value:t.search_text},on:{focus:function(e){t.search_state=!t.search_state},input:[function(e){e.target.composing||(t.search_text=e.target.value)},function(e){t.clearText()}]}})]),t._v(" "),n("a",{staticClass:"header-music",on:{click:function(e){t.$store.commit("changePlayerStatus")}}},[n("i",{staticClass:"icon icon-music"})]),t._v(" "),n("div",{staticClass:"cancel",on:{click:t.headerSwith}},[t._v("取消")])]),t._v(" "),n("nav",{staticClass:"header-nav"},[n("ul",{staticClass:"nav-menu"},[n("li",{class:{active:0==this.$store.state.HomePageNumber},on:{click:function(e){t.navSwitch(e)}}},[n("span",[t._v("个性推荐")])]),t._v(" "),n("li",{class:{active:1==this.$store.state.HomePageNumber},on:{click:function(e){t.navSwitch(e)}}},[n("span",[t._v("歌单")])]),t._v(" "),n("li",{class:{active:2==this.$store.state.HomePageNumber},on:{click:function(e){t.navSwitch(e)}}},[n("span",[t._v("主播电台")])]),t._v(" "),n("li",{class:{active:3==this.$store.state.HomePageNumber},on:{click:function(e){t.navSwitch(e)}}},[n("span",[t._v("排行榜")])])]),t._v(" "),n("span",{staticClass:"nav-slider",style:t.nav_style[this.$store.state.HomePageNumber]})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"header-voice"},[n("i",{staticClass:"icon icon-voice"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n    "+t._s(t.msg)+"\n")])},staticRenderFns:[]}}],[38]);
//# sourceMappingURL=app.8681deea03c447964c2a.js.map