(function(){"use strict";var e={9800:function(e,n,t){var o=t(9242),r=t(3396);function a(e,n,t,o,a,i){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(l)}var i={name:"App"},l=t(89);const s=(0,l.Z)(i,[["render",a]]);var c=s,u=t(678),d=t.p+"img/logo.1cf5a5be.jpg";const p=e=>((0,r.dD)("data-v-4c023bb0"),e=e(),(0,r.Cn)(),e),v={class:"login-page"},m={class:"container"},g=p((()=>(0,r._)("div",{class:"title"},[(0,r._)("img",{src:d,alt:"logo"})],-1))),h={class:"form"},_=p((()=>(0,r._)("p",null,"Or",-1)));function f(e,n,t,o,a,i){const l=(0,r.up)("input-vue"),s=(0,r.up)("button-vue");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",m,[g,(0,r._)("div",h,[(0,r.Wm)(l,{id:"Email",placeholder:"Email"}),(0,r.Wm)(l,{id:"Pass",placeholder:"Password"}),(0,r.Wm)(s,{id:"Login",text:"Login",onClick:n[0]||(n[0]=n=>e.$router.push("/shop"))}),_,(0,r.Wm)(s,{id:"Register",text:"Register",onClick:n[1]||(n[1]=n=>e.$router.push("/register"))})])])])}const b=["id","placeholder"];function w(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("input",{id:t.id,placeholder:t.placeholder},null,8,b)])}var C={name:"input-vue",props:{placeholder:String,id:String}};const y=(0,l.Z)(C,[["render",w],["__scopeId","data-v-76b9d930"]]);var k=y,j=t(7139);const D=["id"];function W(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("button",{class:"btn",id:t.id},(0,j.zw)(t.text),9,D)])}var O={name:"button-vue",props:{id:String,text:String}};const S=(0,l.Z)(O,[["render",W],["__scopeId","data-v-02e85ef3"]]);var x=S,P={name:"login-page",components:{"input-vue":k,"button-vue":x}};const M=(0,l.Z)(P,[["render",f],["__scopeId","data-v-4c023bb0"]]);var Z=M;const I=e=>((0,r.dD)("data-v-27b2f94e"),e=e(),(0,r.Cn)(),e),$={class:"login-page"},R={class:"container"},E=I((()=>(0,r._)("div",{class:"title"},[(0,r._)("h1",null,"Registration Form")],-1))),F={class:"form"},L=I((()=>(0,r._)("p",null,"Or",-1)));function J(e,n,t,o,a,i){const l=(0,r.up)("input-vue"),s=(0,r.up)("button-vue"),c=(0,r.up)("modal-vue");return(0,r.wg)(),(0,r.iD)("div",$,[(0,r._)("div",R,[E,(0,r._)("div",F,[(0,r.Wm)(l,{id:"Username",placeholder:"Username*"}),(0,r.Wm)(l,{id:"Email",placeholder:"Email Address*"}),(0,r.Wm)(l,{id:"First",placeholder:"First Name*"}),(0,r.Wm)(l,{id:"Last",placeholder:"Last Name*"}),(0,r.Wm)(l,{id:"Password",placeholder:"Password*"}),(0,r.Wm)(l,{id:"Confirm",placeholder:"Confrim Password*"}),(0,r.Wm)(s,{id:"Submit",text:"Submit",onClick:i.triggerModal},null,8,["onClick"]),L,(0,r.Wm)(s,{id:"Cancel",text:"Cancel",onClick:n[0]||(n[0]=n=>e.$router.push("/"))})]),a.showModal?((0,r.wg)(),(0,r.j4)(c,{key:0,onClose:i.triggerModal},null,8,["onClose"])):(0,r.kq)("",!0)])])}const T=e=>((0,r.dD)("data-v-05e047e2"),e=e(),(0,r.Cn)(),e),A={id:"myModal",class:"modal"},H={class:"modal-content"},N=T((()=>(0,r._)("p",null,"Registration Successful!",-1)));function U(e,n,t,o,a,i){const l=(0,r.up)("button-vue");return(0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("button",{class:"close",onClick:n[0]||(n[0]=(...e)=>i.close&&i.close(...e))},"X"),(0,r._)("div",H,[N,(0,r.Wm)(l,{id:"done",text:"Done",onClick:n[1]||(n[1]=n=>e.$router.push("/"))})])])}var q={name:"modal-vue",components:{"button-vue":x},props:{show:Boolean},methods:{close(){this.$emit("close",!1)}}};const z=(0,l.Z)(q,[["render",U],["__scopeId","data-v-05e047e2"]]);var B=z,X={name:"register-page",components:{"input-vue":k,"button-vue":x,"modal-vue":B},data(){return{showModal:!1}},methods:{triggerModal(){0==this.showModal?this.showModal=!0:this.showModal=!1}}};const G=(0,l.Z)(X,[["render",J],["__scopeId","data-v-27b2f94e"]]);var K=G;const Q={class:"grid"};function V(e,n,t,o,a,i){const l=(0,r.up)("header-vue"),s=(0,r.up)("post-vue");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(l),(0,r._)("div",Q,[(0,r.Wm)(s),(0,r.Wm)(s)])])}const Y=e=>((0,r.dD)("data-v-34e2d0ea"),e=e(),(0,r.Cn)(),e),ee={class:"headers"},ne=Y((()=>(0,r._)("h2",null,"Hello highinthecoulds!",-1))),te=Y((()=>(0,r._)("a",{href:"/"},"Logout",-1))),oe=[ne,te];function re(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("div",ee,oe)}var ae={name:"header-vue"};const ie=(0,l.Z)(ae,[["render",re],["__scopeId","data-v-34e2d0ea"]]);var le=ie,se=t.p+"img/1.f109e67e.jpg",ce=t.p+"img/2.6063dd1e.jpg",ue=t.p+"img/3.d0f3689a.jpg",de=t.p+"img/4.49228618.jpg";const pe=e=>((0,r.dD)("data-v-3e291a48"),e=e(),(0,r.Cn)(),e),ve={class:"grid"},me=pe((()=>(0,r._)("div",{class:"image"},[(0,r._)("img",{src:se,alt:""})],-1))),ge=pe((()=>(0,r._)("div",{class:"content"},[(0,r._)("h3",null,"Camera"),(0,r._)("p",null,"Rp 5.000.000"),(0,r._)("p",null,"Jejalin Tech")],-1))),he=[me,ge],_e=pe((()=>(0,r._)("div",{class:"image"},[(0,r._)("img",{src:ce,alt:""})],-1))),fe=pe((()=>(0,r._)("div",{class:"content"},[(0,r._)("h3",null,"Phone"),(0,r._)("p",null,"Rp 10.000.000"),(0,r._)("p",null,"Jejalin Tech")],-1))),be=[_e,fe],we=pe((()=>(0,r._)("div",{class:"image"},[(0,r._)("img",{src:ue,alt:""})],-1))),Ce=pe((()=>(0,r._)("div",{class:"content"},[(0,r._)("h3",null,"Dream-Catcher"),(0,r._)("p",null,"Rp 200.000"),(0,r._)("p",null,"Jejalin Dec")],-1))),ye=[we,Ce],ke=pe((()=>(0,r._)("div",{class:"image"},[(0,r._)("img",{src:de,alt:""})],-1))),je=pe((()=>(0,r._)("div",{class:"content"},[(0,r._)("h3",null,"Heels"),(0,r._)("p",null,"Rp 400.000"),(0,r._)("p",null,"Jejalin Fashion")],-1))),De=[ke,je];function We(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("div",ve,[(0,r._)("div",{class:"container",onClick:n[0]||(n[0]=n=>e.$router.push("/pay"))},he),(0,r._)("div",{class:"container",onClick:n[1]||(n[1]=n=>e.$router.push("/pay"))},be),(0,r._)("div",{class:"container",onClick:n[2]||(n[2]=n=>e.$router.push("/pay"))},ye),(0,r._)("div",{class:"container",onClick:n[3]||(n[3]=n=>e.$router.push("/pay"))},De)])}var Oe={name:"post-vue",props:{image:String,title:String,Price:String,Seller:String}};const Se=(0,l.Z)(Oe,[["render",We],["__scopeId","data-v-3e291a48"]]);var xe=Se,Pe={name:"shop-page",components:{"header-vue":le,"post-vue":xe}};const Me=(0,l.Z)(Pe,[["render",V],["__scopeId","data-v-4aab3eec"]]);var Ze=Me;function Ie(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null," Payment ")}var $e={name:"pay-vue"};const Re=(0,l.Z)($e,[["render",Ie],["__scopeId","data-v-6fb40b9e"]]);var Ee=Re;const Fe=[{path:"/",name:"login-page",component:Z},{path:"/register",name:"register-page",component:K},{path:"/shop",name:"shop-page",component:Ze},{path:"/pay",name:"pay-vue",component:Ee}],Le=(0,u.p7)({history:(0,u.PO)("/"),routes:Fe});var Je=Le;(0,o.ri)(c).use(Je).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(s)var u=s(t)}for(n&&n(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(9800)}));o=t.O(o)})();
//# sourceMappingURL=app.c79d3e8e.js.map