(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{346:function(t,e,n){},362:function(t,e,n){"use strict";n(346)},371:function(t,e,n){"use strict";var o={name:"PrototypeUnity",components:{},props:{isIframe:{type:Boolean,default:!1}},data:()=>({showTips:!0,resized:null,canvasSize:{height:"536px",width:"1080px"}}),head:()=>({script:[{src:"/wp-content/themes/SUPERHOT/prototype-2020/Release/UnityLoader.js"}]}),mounted(){this.calcDimensions(),this.resized=window.addEventListener("resize",this.calcDimensions)},beforeDestroy(){window.location.reload()},methods:{calcDimensions(){const t=window.innerWidth<1150?.75:1;this.canvasSize.height=this.isIframe?`${window.innerHeight}px`:536*t+"px",this.canvasSize.width=this.isIframe?`${window.innerWidth}px`:1080*t+"px"}}},r=(n(362),n(0)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sh-loader pointer-events--none"}),t._v(" "),n("canvas",{staticClass:"emscripten",attrs:{id:"canvas",oncontextmenu:"event.preventDefault()",height:t.canvasSize.height,width:t.canvasSize.width}})])}),[],!1,null,"68868fa4",null);e.a=component.exports},499:function(t,e,n){},707:function(t,e,n){"use strict";n(499)},803:function(t,e,n){"use strict";n.r(e);var o={name:"PrototypeIframe",components:{PrototypeUnity:n(371).a},data:()=>({showPrototype:!1}),head:()=>({}),mounted(){this.showPrototype=!0}},r=(n(707),n(0)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPrototype?n("PrototypeUnity",{staticClass:"prototype-unity-grey-bg",attrs:{"is-iframe":!0}}):t._e()}),[],!1,null,"733ada72",null);e.default=component.exports}}]);