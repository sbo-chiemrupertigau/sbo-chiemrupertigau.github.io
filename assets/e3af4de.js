(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{404:function(t,e,n){"use strict";n.r(e);n(20),n(7),n(6),n(4),n(9),n(195);var r=n(1),o=n(58);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"CoreAppBar",computed:l({},Object(o.b)(["links"])),methods:l(l({},Object(o.c)(["toggleDrawer"])),{},{onClick:function(t,e){console.log(e),t.stopPropagation(),!e.to&&e.href&&this.$vuetify.goTo(e.href.endsWith("!")?0:e.href)}})},f=n(31),O=n(62),d=n.n(O),w=n(406),h=n(392),j=n(289),m=n(296),y=n(314),_=n(367),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",flat:""}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:t.toggleDrawer}}),t._v(" "),n("v-container",{staticClass:"mx-auto py-0"},[n("v-row",{staticClass:"hidden-md-and-down",attrs:{align:"center"}},[n("v-btn",{attrs:{text:"",to:"/"}},[t._v("\n        Home\n      ")]),t._v(" "),n("v-btn",{attrs:{text:"",to:"/aktuelles/"}},[t._v("\n        Aktuelles\n      ")]),t._v(" "),n("v-btn",{attrs:{text:"",to:"/gallery/"}},[t._v("\n        Bildergalerie\n      ")]),t._v(" "),n("v-btn",{attrs:{text:"",to:"/organisation/"}},[t._v("\n        Organisation\n      ")]),t._v(" "),n("v-btn",{attrs:{text:"",to:"/anmeldung/"}},[t._v("\n        Hier mitmachen!\n      ")]),t._v(" "),n("v-spacer")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAppBar:w.a,VAppBarNavIcon:h.a,VBtn:j.a,VContainer:m.a,VRow:y.a,VSpacer:_.a})}}]);