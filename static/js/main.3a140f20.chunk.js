(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a(236)},236:function(e,t,a){"use strict";a.r(t);a(154),a(204);var n=a(0),l=a.n(n),c=a(33),r=a.n(c),i=a(22),m=a.n(i),s=a(86),o=a(87),d=a(98),u=a(88),E=a(99),f=a(39),h=a(3),p=(a(235),a(46)),g=a.n(p),v=a(40),b=a.n(v),y=a(94),k=a.n(y),I=a(95),P=a.n(I),B=a(96),R=a.n(B),N=a(97),C=a.n(N),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"home",fetchedUser:null,popout:null,post:null,access_token:"XXXXXXXX"},a.Test=a.Test.bind(Object(f.a)(Object(f.a)(a))),a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppCallAPIMethodResult":e.setState({post:t.detail.data});break;default:console.log(t.detail.type)}}),m.a.send("VKWebAppGetUserInfo",{}),m.a.send("VKWebAppGetAuthToken",{app_id:7132676,scope:"wall"})}},{key:"render",value:function(){var e=this;return l.a.createElement(h.o,{activePanel:this.state.activePanel},l.a.createElement(h.l,{id:"home"},l.a.createElement(h.m,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),this.state.fetchedUser&&l.a.createElement(h.f,{title:"\u041f\u0440\u0438\u0432\u0435\u0441\u0442\u0432\u0443\u0435\u043c \u0432 Swanflow Random"},l.a.createElement(h.k,{before:this.state.fetchedUser.photo_200?l.a.createElement(h.a,{src:this.state.fetchedUser.photo_200}):null,description:this.state.fetchedUser.city&&this.state.fetchedUser.city.title?this.state.fetchedUser.city.title:""},"".concat(this.state.fetchedUser.first_name," ").concat(this.state.fetchedUser.last_name))),l.a.createElement(h.f,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},l.a.createElement(h.d,null,l.a.createElement(h.b,{size:"xl",level:"2",before:l.a.createElement(g.a,null),onClick:function(){return e.setState({activePanel:"Heads_And_Tails"})}},"\u041e\u0440\u0451\u043b \u0438 \u0440\u0435\u0448\u043a\u0430")),l.a.createElement(h.d,null,l.a.createElement(h.b,{size:"xl",level:"2",before:l.a.createElement(g.a,null),onClick:function(){return e.setState({activePanel:"NumberRandom"})}},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e")),l.a.createElement(h.d,null,l.a.createElement(h.b,{size:"xl",level:"2",before:l.a.createElement(k.a,null),onClick:function(){return e.setState({activePanel:"RandomPost"})}},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c"))),l.a.createElement(h.f,{title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438"},l.a.createElement(h.d,null,l.a.createElement(h.b,{size:"xl",level:"2",before:l.a.createElement(g.a,null),onClick:function(){return e.setState({activePanel:"ListCreatePeaple"})}},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c")))),l.a.createElement(h.l,{id:"ListCreatePeaple"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.g,{onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(b.a,null)),addon:l.a.createElement(h.g,{onClick:function(){return e.setState({activePanel:"home"})}},"\u041d\u0430\u0437\u0430\u0434")},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"),l.a.createElement(h.f,null,l.a.createElement(h.j,null,l.a.createElement(h.d,null,l.a.createElement(h.c,{before:l.a.createElement(h.a,{src:"https://sun4-12.userapi.com/c845520/v845520191/c1cf5/-TbthP8AtzU.jpg"}),description:"\u041e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c",href:'javascript: document.location.href = "https://vk.com/dantacion";'},"\u0414\u0430\u043d\u0438\u0438\u043b \u041b\u0443\u043d\u044e\u0448\u043a\u0438\u043d")),l.a.createElement(h.d,null,l.a.createElement(h.c,{before:l.a.createElement(h.a,{src:"https://sun9-20.userapi.com/c831108/v831108559/194a0c/B0MwkUL5qp0.jpg?ava=1"}),description:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",href:'javascript: document.location.href = "https://vk.com/tolmachew_9";'},"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0422\u043e\u043b\u043c\u0430\u0447\u0435\u0432")),l.a.createElement(h.d,null,l.a.createElement(h.c,{before:l.a.createElement(h.a,{src:"https://sun9-40.userapi.com/c847122/v847122919/2645d/QzTciW-WZk8.jpg?ava=1"}),description:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",href:'javascript: document.location.href = "https://vk.com/danil_16s";'},"\u0414\u0430\u043d\u0438\u043b \u0421\u0430\u0432\u043a\u0438\u043d")),l.a.createElement(h.d,null,l.a.createElement(h.c,{before:l.a.createElement(h.a,{src:"https://sun4-16.userapi.com/c851036/v851036385/11eb87/6NZjCAA9pUc.jpg?ava=1"}),description:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",href:'javascript: document.location.href = "https://vk.com/egortimofeevcooper";'},"\u0415\u0433\u043e\u0440 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432")))),l.a.createElement(h.e,null,"4 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430")),l.a.createElement(h.l,{id:"Heads_And_Tails"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.g,{id:"backs1",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(b.a,null))},"\u041e\u0440\u0451\u043b \u0438 \u0420\u0435\u0448\u043a\u0430"),l.a.createElement(h.f,{align:"center",description:"!!!NoComment!!!"},l.a.createElement(h.d,{align:"center"},l.a.createElement(h.h,{title:"Progress",align:"center"},l.a.createElement(h.n,{id:"Prorgs",value:10}))),l.a.createElement(h.d,{align:"center"},l.a.createElement(h.a,{size:200,id:"money",src:R.a})),l.a.createElement(h.d,{align:"center"},l.a.createElement("font",{id:"text",size:"5",color:"#528bcc",face:"Arial"})),l.a.createElement(h.d,null,l.a.createElement(h.b,{size:"xl",level:"tertiary",id:"Starting",onClick:this.RandOR},"\u041f\u043e\u0434\u043a\u0438\u043d\u0443\u0442\u044c")))),l.a.createElement(h.l,{id:"NumberRandom"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.g,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(b.a,null))},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"),l.a.createElement(h.f,null,l.a.createElement(h.d,{align:"center"},l.a.createElement(h.h,{title:"Progress",align:"center"},l.a.createElement(h.n,{id:"ProrgsNum",value:16})))),l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanNum",size:"10",color:"#528bcc",face:"Arial"},"0")),l.a.createElement(h.f,null,l.a.createElement(h.d,{align:"center"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0446\u0438\u0444\u0440\u044b."),l.a.createElement(h.d,{style:{display:"flex"}},l.a.createElement("a",null,"\u041e\u0442:",l.a.createElement(h.i,{id:"InNum",type:"number",defaultValue:"0",size:"l"})),l.a.createElement(h.d,null),l.a.createElement("a",null,"\u0414\u043e:",l.a.createElement(h.i,{id:"OutNum",type:"number",defaultValue:"100",size:"l"}))),l.a.createElement(h.d,null,l.a.createElement(h.b,{size:"xl",level:"tertiary",id:"StartingRandom",onClick:this.RandNum},"\u041d\u0430\u0447\u0430\u0442\u044c")))),l.a.createElement(h.l,{id:"RandomPost"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.g,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(b.a,null))},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"),l.a.createElement(h.f,null,l.a.createElement(h.d,{align:"center"},l.a.createElement(h.h,{title:"Progress",align:"center"},l.a.createElement(h.n,{id:"ProrgsNum",value:16})))),l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanNum",size:"10",color:"#528bcc",face:"Arial"},"0")),l.a.createElement(h.f,null,l.a.createElement(h.d,{align:"center"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0446\u0438\u0444\u0440\u044b."),l.a.createElement(h.d,{style:{display:"flex"}},l.a.createElement("a",null,"\u041e\u0442:",l.a.createElement(h.i,{id:"InNum",type:"number",defaultValue:"0",size:"l"})),l.a.createElement(h.d,null),l.a.createElement("a",null,"\u0414\u043e:",l.a.createElement(h.i,{id:"OutNum",type:"number",defaultValue:"100",size:"l"}))),l.a.createElement(h.d,null,l.a.createElement(h.b,{size:"xl",level:"tertiary",id:"StartingRandom",onClick:this.Test},"\u041d\u0430\u0447\u0430\u0442\u044c")))))}},{key:"RandOR",value:function(){document.getElementById("Starting").style.visibility="hidden",document.getElementById("backs1").style.visibility="hidden";var e=0,t=0;Math.round(0+100*Math.random());var a=setInterval(function(){t++,document.getElementById("Prorgs").style="width: "+t+"%;",100===t&&(t=0,document.getElementById("Prorgs").style="width: "+t+"100%;",document.getElementById("Prorgs").value="56%",clearInterval(a))},25),n=setInterval(function(){e++,Math.round(0+100*Math.random())%2?(document.getElementById("text").innerHTML="\u041e\u0440\u0451\u043b",document.getElementById("money").src=P.a):(document.getElementById("text").innerHTML="\u0420\u0435\u0448\u043a\u0430",document.getElementById("money").src=C.a),10===e&&(document.getElementById("Starting").style.visibility="visible",document.getElementById("backs1").style.visibility="visible",clearInterval(n))},250)}},{key:"RandNum",value:function(){document.getElementById("StartingRandom").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var e=0,t=0,a=document.getElementById("InNum").value,n=document.getElementById("OutNum").value,l=0;e=Math.round(a+Math.random()*(n-a));var c=setInterval(function(){t++,e=Math.round(parseInt(a)+Math.random()*(n-a)),document.getElementById("RanNum").innerHTML=e,l++,document.getElementById("ProrgsNum").style="width: "+l+"%;",100===t&&(document.getElementById("StartingRandom").style.visibility="visible",document.getElementById("backs2").style.visibility="visible",clearInterval(c),l=0,document.getElementById("ProrgsNum").style="width: "+l+"100%;",document.getElementById("ProrgsNum").value="56%")},30)}},{key:"Test",value:function(){m.a.send("VKWebAppCallAPIMethod",{method:"wall.getReposts",params:{owner_id:"-179284325",post_id:"9",v:"5.101",access_token:"93be330193be330193be3301e393d2e505993be93be3301ce3c149ea61eeff686259e10"}}),document.getElementById("RanNum").innerHTML=this.state.post.response.profiles[1].first_name}}]),t}(l.a.Component);m.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(S,null),document.getElementById("root"))},95:function(e,t,a){e.exports=a.p+"static/media/Orel.28dc09ef.png"},96:function(e,t,a){e.exports=a.p+"static/media/OrelAndReshka.0b65ebdc.png"},97:function(e,t,a){e.exports=a.p+"static/media/Reshka.af7eada6.png"}},[[153,1,2]]]);
//# sourceMappingURL=main.3a140f20.chunk.js.map