(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{396:function(e,r,t){e.exports=t.p+"img/DSC07811_c.06fb444.jpg"},397:function(e,r,t){e.exports=t.p+"img/DSC07842.1849a8a.jpg"},398:function(e,r,t){e.exports=t.p+"img/DSC07849.80da1f3.jpg"},399:function(e,r,t){e.exports=t.p+"img/DSC07891.fd21495.jpg"},400:function(e,r,t){e.exports=t.p+"img/DSC08015.684e659.jpg"},401:function(e,r,t){e.exports=t.p+"img/DSC08084.0f676cc.jpg"},402:function(e,r,t){e.exports=t.p+"img/0_DSC03855.c8b2fac.JPG"},403:function(e,r,t){e.exports=t.p+"img/1_DSC_9305.f04360e.JPG"},404:function(e,r,t){e.exports=t.p+"img/A7R07739.6a37d6c.JPG"},405:function(e,r,t){e.exports=t.p+"img/A7R07743.8e908ed.JPG"},406:function(e,r,t){e.exports=t.p+"img/A7R07772.c0284e3.JPG"},407:function(e,r,t){e.exports=t.p+"img/A7R07777.da3516e.JPG"},408:function(e,r,t){e.exports=t.p+"img/DSC_9054.37fcab8.JPG"},409:function(e,r,t){e.exports=t.p+"img/DSC_9146.611d6e3.JPG"},410:function(e,r,t){e.exports=t.p+"img/DSC_9171.14ce51c.JPG"},411:function(e,r,t){var map={"./2019/DSC07811_c.jpg":396,"./2019/DSC07842.jpg":397,"./2019/DSC07849.jpg":398,"./2019/DSC07891.jpg":399,"./2019/DSC08015.jpg":400,"./2019/DSC08084.jpg":401,"./2020/0_DSC03855.JPG":402,"./2020/1_DSC_9305.JPG":403,"./2020/A7R07739.JPG":404,"./2020/A7R07743.JPG":405,"./2020/A7R07772.JPG":406,"./2020/A7R07777.JPG":407,"./2020/DSC_9054.JPG":408,"./2020/DSC_9146.JPG":409,"./2020/DSC_9171.JPG":410};function n(e){var r=o(e);return t(r)}function o(e){if(!t.o(map,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=411},412:function(e,r,t){var map={"./gallery/2019/DSC07811_c.jpg":396,"./gallery/2019/DSC07842.jpg":397,"./gallery/2019/DSC07849.jpg":398,"./gallery/2019/DSC07891.jpg":399,"./gallery/2019/DSC08015.jpg":400,"./gallery/2019/DSC08084.jpg":401,"./gallery/2020/0_DSC03855.JPG":402,"./gallery/2020/1_DSC_9305.JPG":403,"./gallery/2020/A7R07739.JPG":404,"./gallery/2020/A7R07743.JPG":405,"./gallery/2020/A7R07772.JPG":406,"./gallery/2020/A7R07777.JPG":407,"./gallery/2020/DSC_9054.JPG":408,"./gallery/2020/DSC_9146.JPG":409,"./gallery/2020/DSC_9171.JPG":410};function n(e){var r=o(e);return t(r)}function o(e){if(!t.o(map,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=412},415:function(e,r,t){"use strict";t.r(r);t(17),t(34),t(109);var n={data:function(){return{yearTab:null,concertTab:null}},computed:{galleryMap:function(){var e=t(411),r={},n=/\/(\d{4})\//;return console.log(e.keys()),e.keys().forEach((function(element){var e=element.match(n);r[e[1]]||(r[e[1]]={images:[]}),r[e[1]].images.push(t(412)("./gallery".concat(element.substring(1))))})),console.log(r),r}}},o=t(21),l=t(30),c=t.n(l),f=t(376),y=t(388),d=t(394),C=t(462),_=t(133),v=t(163),D=t(389),S=t(458),m=t(473),J=t(471),P=t(455),component=Object(o.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-container",{attrs:{id:"gallery",tag:"section"}},[t("v-row",{attrs:{justify:"center"}},[t("base-subheading",[e._v("Bildergalerie")])],1),e._v(" "),t("v-row",{attrs:{justify:"center"}},[e._v("\n    Hier finden sie einen Auszug an Bildern aus unseren vergangenen Konzerten.\n  ")]),e._v(" "),t("br"),e._v(" "),t("v-tabs",{attrs:{centered:""},model:{value:e.yearTab,callback:function(r){e.yearTab=r},expression:"yearTab"}},e._l(e.galleryMap,(function(r,n){return t("v-tab",{key:n},[e._v("\n      "+e._s(n)+"\n    ")])})),1),e._v(" "),t("br"),e._v(" "),t("v-tabs-items",{model:{value:e.yearTab,callback:function(r){e.yearTab=r},expression:"yearTab"}},e._l(e.galleryMap,(function(r,n){return t("v-tab-item",{key:n},[t("v-row",e._l(r.images,(function(image){return t("v-col",{key:image,staticClass:"d-flex child-flex",attrs:{cols:"6",md:"4",lg:"3"}},[t("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[t("v-dialog",{attrs:{width:"60%"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on;return[t("v-img",e._g({staticClass:"grey lighten-2",attrs:{src:image,"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},n))]}}],null,!0)},[e._v(" "),t("v-card",[t("v-img",{attrs:{src:image}})],1)],1)],1)],1)})),1)],1)})),1)],1)}),[],!1,null,null,null);r.default=component.exports;c()(component,{BaseSubheading:t(138).default}),c()(component,{VCard:f.a,VCol:y.a,VContainer:d.a,VDialog:C.a,VImg:_.a,VProgressCircular:v.a,VRow:D.a,VTab:S.a,VTabItem:m.a,VTabs:J.a,VTabsItems:P.a})}}]);