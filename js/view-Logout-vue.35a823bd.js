(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-Logout-vue"],{"2d79":function(t,e,a){t.exports=a.p+"img/spinning-circles.34f3fa31.svg"},"6f8d":function(t,e,a){"use strict";a.r(e);var c=a("f2bf"),r=Object(c["M"])("data-v-71d7aaff");Object(c["x"])("data-v-71d7aaff");var s={class:"r-logout"};Object(c["v"])();var n=r((function(t,e,r,n,o,i){return Object(c["u"])(),Object(c["f"])("div",s,[Object(c["j"])("img",{src:a("2d79"),alt:"loading. . "},null,8,["src"])])})),o=a("1da1"),i=(a("96cf"),a("766e")),u={mixins:[i["a"]],mounted:function(){this.setMetaTag(),this.logoutUser()},methods:{logoutUser:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/logoutUser",null);case 2:t.$store.dispatch("logoutStorage"),location.reload();case 4:case"end":return e.stop()}}),e)})))()}}};a("7a73");u.render=n,u.__scopeId="data-v-71d7aaff";e["default"]=u},"766e":function(t,e,a){"use strict";var c=a("5530"),r=(a("a4d3"),a("e01a"),a("5502")),s={title:{text:""},description:{text:""},keywords:{text:""}};e["a"]={computed:Object(c["a"])({},Object(r["c"])({current_locale:"locale/getCurrentLocale"})),watch:{current_locale:function(){this.setMetaTag()}},data:function(){return{params:Object(c["a"])({},s)}},methods:Object(c["a"])(Object(c["a"])({},Object(r["b"])({snackbar:"snackbar/showSnackbar"})),{},{resetMetaTagParams:function(){this.params=s},setMetaTag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",e={title:this.$t("metatag.".concat(t,".title"),this.params.title),description:this.$t("metatag.".concat(t,".description"),this.params.description),keywords:this.$t("metatag.".concat(t,".keywords"),this.params.keywords)};this.$store.dispatch("setMetaTag",e)}})}},"7a73":function(t,e,a){"use strict";a("9dce")},"9dce":function(t,e,a){}}]);
//# sourceMappingURL=view-Logout-vue.35a823bd.js.map