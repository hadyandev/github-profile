(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a27237"],{1511:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container"},[e("Breadcumb",{staticClass:"mb-3"}),e("UserDetail",{attrs:{user:t.user}}),e("p",{staticClass:"mt-5"},[t._v("List of Repositories")]),e("RepoList",{attrs:{username:t.username}})],1)])},r=[],i=e("bc3a"),n=e.n(i),l=e("b92f"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card mb-3 text-center"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"card-img",attrs:{src:t.user.avatar_url}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.user.name)+" (@"+t._s(t.user.login)+")")]),e("p",{staticClass:"card-text"},[t._v(" "+t._s(t.user.bio)+" ")]),e("p",{staticClass:"card-text"},[e("small",[t._v(t._s(t.user.public_repos)+" Public Repos | "+t._s(t.user.public_gists)+" Public Gists")])]),e("p",{staticClass:"card-text"},[e("small",{staticClass:"text-muted"},[t._v(t._s(t.user.following)+" following | "+t._s(t.user.followers)+" followers")])]),e("a",{staticClass:"btn btn-dark btn-sm text-white",attrs:{target:"_blank",href:t.user.html_url}},[t._v("Visit This Profile")])])])])])},u=[],o={name:"UserDetail",props:["user"]},p=o,m=e("2877"),d=Object(m["a"])(p,c,u,!1,null,null,null),f=d.exports,_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"repo-list"}},[e("div",{staticClass:"card"},[e("ul",{staticClass:"list-group list-group-flush"},t._l(t.repos,(function(s){return e("RepoListItem",{key:s.id,attrs:{repo:s,username:t.username}})})),1)])])},v=[],b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"list-group-item"},[e("router-link",{staticClass:"row",attrs:{to:{name:"Repo",params:{username:t.username,repo:t.repo.name}}}},[e("div",{staticClass:"container"},[e("p",{staticClass:"text-dark"},[t._v(t._s(t.repo.name))])])])],1)},h=[],C={name:"RepoListItem",props:["username","repo"]},g=C,w=(e("70fc"),Object(m["a"])(g,b,h,!1,null,"4d8b4fef",null)),x=w.exports,R={name:"RepoList",components:{RepoListItem:x},props:["username"],data:function(){return{repos:[]}},created:function(){var t=this;n.a.get("https://api.github.com/users/"+this.username+"/repos").then((function(s){console.log(s),t.repos=s.data})).catch((function(t){console.log(t)}))}},k=R,L=Object(m["a"])(k,_,v,!1,null,null,null),$=L.exports,j={name:"User",components:{Breadcumb:l["a"],UserDetail:f,RepoList:$},data:function(){return{username:this.$route.params.username,user:{}}},created:function(){var t=this;n.a.get("https://api.github.com/users/"+this.username).then((function(s){t.user=s.data})).catch((function(s){t.username=s}))}},E=j,O=Object(m["a"])(E,a,r,!1,null,null,null);s["default"]=O.exports},5908:function(t,s,e){},"70fc":function(t,s,e){"use strict";var a=e("5908"),r=e.n(a);r.a}}]);
//# sourceMappingURL=chunk-71a27237.4c858296.js.map