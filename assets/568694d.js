(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{401:function(t,e,r){"use strict";r.r(e);r(20),r(7),r(6),r(9),r(4),r(195),r(63);var n=r(16),o=r(1),c=r(58);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"CoreDrawer",computed:v(v({},Object(c.b)(["links"])),{},{drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.setDrawer(t)}}}),methods:v(v({},Object(c.c)(["setDrawer"])),{},{onClick:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.stopPropagation(),!e.to&&e.href){n.next=3;break}return n.abrupt("return");case 3:return r.$vuetify.goTo(e.href.endsWith("!")?0:e.href),n.next=6,new Promise((function(t){return setTimeout(t,250)}));case 6:r.setDrawer(!1);case 7:case"end":return n.stop()}}),n)})))()}})},f=r(31),w=r(62),O=r.n(w),d=r(289),h=r(330),j=r(322),k=r(323),y=r(390),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/",text:"",block:""}},[t._v("Home")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/aktuelles/",text:"",block:""}},[t._v("Aktuelles")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/gallery/",text:"",block:""}},[t._v("Bildergalerie")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/organisation/",text:"",block:""}},[t._v("Organisation")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{to:"/anmeldung",text:"",block:""}},[t._v("Hier mitmachen!")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:d.a,VList:h.a,VListItem:j.a,VListItemTitle:k.a,VNavigationDrawer:y.a})}}]);