(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){e.exports=n(238)},237:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);n(155),n(205);var a=n(0),c=n.n(a),i=n(29),l=n.n(i),o=n(25),r=n.n(o),s=n(83),d=n(84),u=n(94),p=n(85),m=n(95),f=n(11),b=(n(236),function(e){var t=e.id,n=e.go,a=e.fetchedUser;return c.a.createElement(f.h,{id:t},c.a.createElement(f.i,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),a&&c.a.createElement(f.d,{title:"\u041f\u0440\u0438\u0432\u0435\u0441\u0442\u0432\u0443\u0435\u043c \u0432 Swanflow Random"},c.a.createElement(f.g,{before:a.photo_200?c.a.createElement(f.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),c.a.createElement(f.d,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},c.a.createElement(f.c,null,c.a.createElement(f.b,{size:"xl",level:"2",id:"but1","data-to":"persik"},"\u0420\u0430\u043d\u0434\u043e\u043c \u0447\u0438\u0441\u0435\u043b"),c.a.createElement("script",null,"window.onload = init; function init()",document.getElementById("but1").onclick=alert("\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443")),c.a.createElement(f.b,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"\u0414\u0430\u0436\u0435 \u0435\u0441\u0442\u044c \u0438 \u0442\u0440\u0435\u0442\u044c\u044f"),c.a.createElement(f.b,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"\u0410\u0445\u0443\u0435\u0442\u044c \u0441\u043a\u043e\u0440\u043b\u044c\u043a\u043e \u043a\u043d\u043e\u043f\u043e\u043a"),c.a.createElement(f.b,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"\u041f\u0438\u0437\u0434\u0435\u0435\u0435\u0446!!!"))))}),h=(n(91),n(237),n(92),n(93),Object(f.k)(),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;r.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),r.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(f.j,{activePanel:this.state.activePanel},c.a.createElement(b,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}))}}]),t}(c.a.Component));r.a.send("VKWebAppInit",{}),l.a.render(c.a.createElement(h,null),document.getElementById("root"))},91:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"}},[[154,1,2]]]);
//# sourceMappingURL=main.2b84188d.chunk.js.map