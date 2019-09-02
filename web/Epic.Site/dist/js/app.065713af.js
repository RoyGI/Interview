(function(t){function e(e){for(var s,r,o=e[0],l=e[1],d=e[2],c=0,u=[];c<o.length;c++)r=o[c],i[r]&&u.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(u.length)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var m=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02a5":function(t,e,a){"use strict";var s=a("096a"),i=a.n(s);i.a},"07d9":function(t,e,a){"use strict";var s=a("8b73"),i=a.n(s);i.a},"096a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=a("43f9"),n=a.n(i),r=a("7bb1"),o=(a("51de"),a("98c0"),a("2f62")),l=a("bc3a"),d=a.n(l),m=a("4be7"),c={namespace:!0,state:{status:"",token:localStorage.getItem("token")||"",user:{name:"",lastName:"",email:"",password:"",passwordConfirm:""}},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,e,a){t.status="success",t.token=e,t.user=a},auth_failure:function(t){t.status="fail"},auth_logout:function(t){t.status="",t.token="",t.user={}}},actions:{login:function(t,e){var a=t.commit;return new m["Promise"](function(t,s){a("auth_request"),d()({url:"http://localhost:5001/api/login",data:e,method:"POST"}).then(function(s){localStorage.setItem("token",s.data.token),d.a.defaults.headers["Authorization"]=s.data.token,a("auth_success",s.data.token,e),t(s)}).catch(function(t){a("auth_failure"),localStorage.removeItem("token"),s(t)})})},register:function(t,e){var a=t.commit;return new m["Promise"](function(t,s){a("auth_request"),d()({url:"http://localhost:5001/api/user",data:e,method:"POST"}).then(function(e){a("success"),t(e)}).catch(function(t){a("auth_failure"),s(t)})})},logout:function(t){var e=t.commit;return new m["Promise"](function(t){e("auth_logout"),localStorage.removeItem("token"),d.a.defaults.headers.common["Authorization"]="",t()})}},getters:{isLogin:function(t){return t.token},status:function(t){return t.status}}},u={namespace:!0,state:{name:""},mutations:{},action:{},getters:{}};s["default"].use(o["a"]);var p=new o["a"].Store({modules:{auth:c,opening:u}}),v=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout page md-alignment-center-center"},[a("md-content",{staticClass:"login md-elevation-23"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLogin?a("div",{key:"1",staticClass:"is-login"},[a("md-content",{staticClass:"md-primary register small-box"},[a("div",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item"},[a("md-empty-state",{attrs:{"md-icon":"face","md-label":"Welcome"}}),a("div",{staticClass:"md-layout md-alignment-bottom-center"},[a("md-button",{staticClass:"md-accent",on:{click:t.register}},[t._v("Create Account")])],1)],1)])]),a("div",{staticClass:"sing large-box"},[a("div",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item"},[a("sign-in",{staticClass:"box"})],1)])])],1):a("div",{key:"2",staticClass:"is-login"},[a("md-content",{staticClass:"md-accent to-login small-box"},[a("div",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item"},[a("md-empty-state",{attrs:{"md-icon":"undo","md-label":"Back to login"}}),a("div",{staticClass:"md-layout md-alignment-bottom-center"},[a("md-button",{staticClass:"md-primary",on:{click:t.login}},[t._v("Back")])],1)],1)])]),a("div",{staticClass:"sing large-box"},[a("div",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item"},[a("register",{staticClass:"box"})],1)])])],1)])],1)],1)},b=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign-in"},[t._m(0),a("form",{staticClass:"md-layout content",attrs:{"data-vv-scope":"login"}},[a("md-field",{class:{"md-invalid":t.errors.has("login.email")}},[a("label",[t._v("user")]),a("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{id:"email",type:"email","data-vv-name":"email"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),a("span",{staticClass:"md-error"},[t._v(t._s(t.errors.first("login.email")))])],1),a("md-field",{class:{"md-invalid":t.errors.has("login.password")}},[a("label",[t._v("password")]),a("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"password",type:"password","data-vv-name":"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("span",{staticClass:"md-error"},[t._v(t._s(t.errors.first("login.password")))])],1)],1),t._m(1),a("div",{staticClass:"md-layout line-2 md-alignment-bottom-center"},[a("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:t.errors.any()},on:{click:t.login}},[t._v("Login")])],1)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout title md-alignment-top-center"},[a("span",{staticClass:"md-title"},[t._v("Sign In")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout line-1 md-alignment-bottom-center"},[a("a",{staticClass:"md-caption"},[t._v("forgot your password")])])}],h=a("cebc"),w=new s["default"],y={name:"SighIn",data:function(){return{user:"",password:""}},computed:Object(h["a"])({},Object(o["b"])(["status","isLogin"])),methods:{login:function(){var t=this;this.$validator.validateAll("login").then(function(e){e&&t.$store.dispatch("login",{user:t.user,password:t.password}).then(function(){return t.$router.push("/")}).catch(function(t){return w.$emit("ERROR",t.message)})})}}},C=y,k=(a("07d9"),a("2877")),x=Object(k["a"])(C,g,_,!1,null,"23b426c4",null),O=x.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[t._m(0),a("form",{staticClass:"md-layout content",attrs:{"data-vv-scope":"register"}},[a("md-field",{class:{"md-invalid":t.errors.has("register.name")}},[a("label",[t._v("name")]),a("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text","data-vv-name":"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("span",{staticClass:"md-error"},[t._v(t._s(t.errors.first("register.name")))])],1),a("md-field",{class:{"md-invalid":t.errors.has("register.lastname")}},[a("label",[t._v("last name")]),a("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text","data-vv-name":"lastname"},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}}),a("span",{staticClass:"md-error"},[t._v(t._s(t.errors.first("register.lastname")))])],1),a("md-field",{class:{"md-invalid":t.errors.has("register.email")}},[a("label",[t._v("email")]),a("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{type:"email","data-vv-name":"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("span",{staticClass:"md-error"},[t._v(t._s(t.errors.first("register.email")))])],1),a("md-field",{class:{"md-invalid":t.errors.has("register.password")}},[a("label",[t._v("password")]),a("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],ref:"password",attrs:{type:"password","data-vv-name":"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("span",{staticClass:"md-error"},[t._v(t._s(t.errors.first("register.password")))])],1),a("md-field",{class:{"md-invalid":t.errors.has("register.password_confirm")}},[a("label",[t._v("password confirm")]),a("md-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8|confirmed:password",expression:"'required|min:8|confirmed:password'"}],attrs:{type:"password","data-vv-name":"password_confirm","data-vv-as":"password"},model:{value:t.password_confirm,callback:function(e){t.password_confirm=e},expression:"password_confirm"}}),a("span",{staticClass:"md-error"},[t._v(t._s(t.errors.first("register.password_confirm")))])],1)],1),a("div",{staticClass:"md-layout button_line md-alignment-bottom-right"},[a("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:t.errors.any()},on:{click:t.create}},[t._v("Save")])],1)])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout title md-alignment-top-center"},[a("span",{staticClass:"md-title"},[t._v("Create User")])])}],S=(a("7f7f"),{name:"Register",event:["created"],data:function(){return{name:"",lastname:"",email:"",password:"",password_confirm:""}},computed:Object(h["a"])({},Object(o["b"])(["status"])),methods:{create:function(){var t=this;this.$validator.validateAll("register").then(function(e){e&&t.$store.dispatch("register",{name:t.name,lastName:t.lastName,email:t.email,password:t.password,passwordConfirm:t.passwordConfirm}).then(function(){return t.$emit("created")}).catch(function(t){return w.$emit("ERROR",t.message)})})}}}),$=S,j=(a("02a5"),Object(k["a"])($,E,N,!1,null,"5a2c7032",null)),A=j.exports,q={name:"Login",components:{SignIn:O,Register:A},data:function(){return{isLogin:!0}},methods:{register:function(){this.isLogin=!1},login:function(){this.isLogin=!0}}},L=q,P=(a("f7ae"),Object(k["a"])(L,f,b,!1,null,"12807325",null)),R=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-app",{attrs:{"md-waterfall":"","md-mode":"reveal"}},[a("md-app-toolbar",{staticClass:"md-primary"},[a("div",{staticClass:"md-toolbar-row"},[a("div",{staticClass:"md-toolbar-section-start"},[a("md-button",{staticClass:"md-icon-button",on:{click:t.toggle}},[a("md-icon",[t._v("dehaze")])],1),a("span",{staticClass:"md-title"},[t._v("Application")])],1),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("more_vert")])],1)],1)])]),a("md-app-drawer",{attrs:{"md-active":t.menuVisible,"md-persistent":"mini"},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[a("navigation",{on:{click:t.toggle}})],1),a("md-app-content",[a("opening")],1)],1)},M=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation"},[a("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"4"}},[a("span",[t._v("Navigation")]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button",attrs:{"md-dense":""},on:{click:t.toggle}},[a("md-icon",[t._v("keyboard_arrow_left")])],1)],1)]),a("md-list",[a("md-list-item",[a("md-icon",[t._v("send")]),a("span",{staticClass:"md-list-item-text"},[t._v("Send Email")])],1)],1)],1)},T=[],V={name:"Navigation",event:["click"],data:function(){return{}},methods:{toggle:function(){this.$emit("click")}}},z=V,D=Object(k["a"])(z,B,T,!1,null,"075941c6",null),J=D.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.validate(e)}}},[a("md-content",[a("md-steppers",{attrs:{"md-alternative":"","md-elevation":"0"}},[a("md-step",{attrs:{id:"first","md-label":"Personal Information"}},[a("md-field",[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("md-input",{attrs:{id:"name",autocomplete:"Name"}})],1),a("md-field",[a("label",{attrs:{for:"lastName"}},[t._v("Last Name")]),a("md-input",{attrs:{id:"lastName",autocomplete:"Last Name"}})],1),a("md-field",[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("md-input",{attrs:{id:"email",type:"email",autocomplete:"Email"}})],1),a("md-field",[a("label",{attrs:{for:"phone"}},[t._v("Phone")]),a("md-input",{attrs:{id:"phone"}})],1),a("md-field",[a("label",{attrs:{for:"linked"}},[t._v("Linked Profile")]),a("md-input",{attrs:{id:"linked"}})],1)],1),a("md-step",{attrs:{id:"second","md-label":"Position"}},[a("md-field",[a("label",{attrs:{for:"food"}},[t._v("Developer")]),a("md-select",{attrs:{id:"position"}},[a("md-optgroup",{attrs:{label:"Development"}},[a("md-option",{attrs:{value:"apple-pie"}},[t._v(".Net")]),a("md-option",{attrs:{value:"chocolate-cake"}},[t._v("Java")])],1),a("md-optgroup",{attrs:{label:"QA"}},[a("md-option",{attrs:{value:"apples"}},[t._v("Automation")])],1),a("md-optgroup",{attrs:{label:"DevOps"}},[a("md-option",{attrs:{value:"broccoli"}},[t._v("Amazon")]),a("md-option",{attrs:{value:"carrots"}},[t._v("Azure")])],1)],1)],1),a("md-field",[a("label",{attrs:{for:"name"}},[t._v("Availability")]),a("md-select",{attrs:{id:"availability"}},[a("md-option",{attrs:{value:"chocolate-cake"}},[t._v("Immediately")]),a("md-option",{attrs:{value:"apples"}},[t._v("two weeks")]),a("md-option",{attrs:{value:"broccoli"}},[t._v("one month")])],1)],1),a("md-field",[a("label",{attrs:{for:"name"}},[t._v("Offer Source")]),a("md-select",{attrs:{id:"availability"}},[a("md-option",{attrs:{value:"chocolate-cake"}},[t._v("Email")]),a("md-option",{attrs:{value:"apples"}},[t._v("Linked Link")]),a("md-option",{attrs:{value:"broccoli"}},[t._v("Referral")]),a("md-option",{attrs:{value:"broccoli"}},[t._v("Other")])],1)],1),a("md-field",[a("label",[t._v("Upload Resume")]),a("md-file")],1)],1),a("md-step",{attrs:{id:"third","md-label":"Status"}},[a("md-field",[a("label",{attrs:{for:"phone"}},[t._v("Nationality")]),a("md-select",{attrs:{id:"position"}},[a("md-option",{attrs:{value:"apple-pie"}},[t._v("Costa Rica")]),a("md-option",{attrs:{value:"chocolate-cake"}},[t._v("USA")]),a("md-option",{attrs:{value:"apples"}},[t._v("Spain")]),a("md-option",{attrs:{value:"broccoli"}},[t._v("Nigeria")]),a("md-option",{attrs:{value:"carrots"}},[t._v("German")])],1)],1),a("md-switch",[t._v("Are you available to work")])],1),a("md-step",{attrs:{id:"fourth","md-label":"Experience"}},[a("md-table",[a("md-table-row",[a("md-table-head",[t._v("Experience")]),a("md-table-head",[t._v("Technology")]),a("md-table-head",[t._v("Years")]),a("md-table-head",[t._v("Domain")])],1),a("md-table-row",[a("md-table-cell",[a("md-checkbox")],1),a("md-table-cell",[a("md-field",{attrs:{type:"label"}},[t._v("Java")])],1),a("md-table-cell",[a("md-field",[a("md-input",{attrs:{type:"number"}})],1)],1),a("md-table-cell",[a("md-field",[a("md-input",{attrs:{type:"range"}})],1)],1)],1),a("md-table-row",[a("md-table-cell",[a("md-checkbox")],1),a("md-table-cell",[a("md-field",{attrs:{type:"label"}},[t._v(".Net")])],1),a("md-table-cell",[a("md-field",[a("md-input",{attrs:{type:"number"}})],1)],1),a("md-table-cell",[a("md-field",[a("md-input",{attrs:{type:"range"}}),a("md-tooltip",[t._v("Advance")])],1)],1)],1),a("md-table-row",[a("md-table-cell",[a("md-checkbox")],1),a("md-table-cell",[a("md-field",{attrs:{type:"label"}},[t._v("Microsoft Sql")])],1),a("md-table-cell",[a("md-field",[a("md-input",{attrs:{type:"number"}})],1)],1),a("md-table-cell",[a("md-field",[a("md-input",{attrs:{type:"range"}}),a("md-tooltip",[t._v("Advance")])],1)],1)],1),a("md-table-row",[a("md-table-cell",[a("md-checkbox")],1),a("md-table-cell",[a("md-field",{attrs:{type:"label"}},[t._v("Oracle")])],1),a("md-table-cell",[a("md-field",[a("md-input",{attrs:{type:"number"}})],1)],1),a("md-table-cell",[a("md-field",[a("md-input",{attrs:{type:"range"}}),a("md-tooltip",[t._v("Advance")])],1)],1)],1)],1)],1),a("md-step",{attrs:{id:"fifth","md-label":"Language"}},[a("md-field",[a("label",{attrs:{for:"name"}},[t._v("English Speaking")]),a("md-select",{attrs:{id:"speak"}},[a("md-option",{attrs:{value:"chocolate-cake"}},[t._v("Beginner")]),a("md-option",{attrs:{value:"apples"}},[t._v("Medium")]),a("md-option",{attrs:{value:"broccoli"}},[t._v("Advance")]),a("md-option",{attrs:{value:"carrots"}},[t._v("Native")])],1)],1),a("md-field",[a("label",{attrs:{for:"name"}},[t._v("English Writing")]),a("md-select",{attrs:{id:"write"}},[a("md-option",{attrs:{value:"chocolate-cake"}},[t._v("Beginner")]),a("md-option",{attrs:{value:"apples"}},[t._v("Medium")]),a("md-option",{attrs:{value:"broccoli"}},[t._v("Advance")]),a("md-option",{attrs:{value:"carrots"}},[t._v("Native")])],1)],1)],1)],1)],1)],1)},W=[],G={name:"Opening"},H=G,Q=Object(k["a"])(H,U,W,!1,null,"01e3d969",null),Y=Q.exports,F={name:"Home",components:{Opening:Y,Navigation:J},data:function(){return{menuVisible:!1}},methods:{toggle:function(){this.menuVisible=!this.menuVisible}}},K=F,X=(a("eb9f"),Object(k["a"])(K,I,M,!1,null,"d28b6bdc",null)),Z=X.exports;s["default"].use(v["a"]);var tt=new v["a"]({mode:"history",routes:[{path:"/",name:"home",component:Z,meta:{auth:!0}},{path:"/login",name:"login",component:R},{path:"*",redirect:"/"}]});tt.beforeEach(function(t,e,a){if(t.matched.some(function(t){return t.meta.auth})){if(p.getters.isLogin)return void a();a("/login")}else a()});var et=tt,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("router-view"),a("error-bar")],1)},st=[],it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-snackbar",{attrs:{"md-position":"center","md-persistent":"","md-active":t.show},on:{"update:mdActive":function(e){t.show=e},"update:md-active":function(e){t.show=e}}},[a("span",[t._v(t._s(t.message))]),a("md-button",{staticClass:"md-primary",on:{click:function(e){t.show=!1}}},[t._v("Close")])],1)},nt=[],rt={name:"ErrorBar",data:function(){return{message:"",show:!1}},mounted:function(){var t=this;w.$on("ERROR",function(e){t.message=e,t.show=!0})}},ot=rt,lt=Object(k["a"])(ot,it,nt,!1,null,"ef99535e",null),dt=lt.exports,mt={name:"app",components:{ErrorBar:dt}},ct=mt,ut=(a("7e18"),Object(k["a"])(ct,at,st,!1,null,"5f164a54",null)),pt=ut.exports;s["default"].config.productionTip=!1,s["default"].use(n.a),s["default"].use(r["a"]),new s["default"]({store:p,router:et,render:function(t){return t(pt)}}).$mount("#app")},"7e18":function(t,e,a){"use strict";var s=a("a314"),i=a.n(s);i.a},"8b73":function(t,e,a){},"98c0":function(t,e,a){},a314:function(t,e,a){},aacf:function(t,e,a){},ca6d:function(t,e,a){},eb9f:function(t,e,a){"use strict";var s=a("ca6d"),i=a.n(s);i.a},f7ae:function(t,e,a){"use strict";var s=a("aacf"),i=a.n(s);i.a}});
//# sourceMappingURL=app.065713af.js.map