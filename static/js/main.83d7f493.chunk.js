(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){e.exports=a(247)},247:function(e,t,a){"use strict";a.r(t);a(165),a(215);var n=a(0),l=a.n(n),i=a(34),r=a.n(i),c=a(30),s=a.n(c),m=a(95),o=a(96),d=a(115),u=a(97),E=a(116),g=a(17),h=a(2),v=(a(246),a(38)),y=a.n(v),f=a(108),p=a.n(f),b=a(109),I=a.n(b),k=a(110),B=a.n(k),P=a(111),S=a.n(P),w=a(112),L=a.n(w),O=a(113),x=a.n(O),z=a(114),C=a.n(z),G=a(60),N=a.n(G),_=a(61),M=a.n(_),R=a(62),T=a.n(R),H=a(63),j=a.n(H),K=a(64),A=a.n(K),U=a(65),W=a.n(U),D=a(66),V=a.n(D),X=a(67),q=a.n(X),F=a(68),J=a.n(F),Q=a(69),Z=a.n(Q),Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"load_img",fetchedUser:null,popout:null,post:null,CheckSize:"",access_token:"XXXXXXXX",DefSumbol:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890qwertyuioplkjhgfdsazxcvbnm",ValueClickGameKosti:0,notifol:null,OS:null,AllImage:10,LoadImage:1,title:null,message:null,valueKosti:1},a.PassGeneratorUnTimer=a.PassGeneratorUnTimer.bind(Object(g.a)(Object(g.a)(a))),a.GameKosti=a.GameKosti.bind(Object(g.a)(Object(g.a)(a))),a.LoadImage=a.LoadImage.bind(Object(g.a)(Object(g.a)(a))),a.OpenNotifi=a.OpenNotifi.bind(Object(g.a)(Object(g.a)(a))),a.closeNotifi=a.closeNotifi.bind(Object(g.a)(Object(g.a)(a))),a.RandNum=a.RandNum.bind(Object(g.a)(Object(g.a)(a))),a.PassGeneratorUnTimer=a.PassGeneratorUnTimer.bind(Object(g.a)(Object(g.a)(a))),a.StringGenerate=a.StringGenerate.bind(Object(g.a)(Object(g.a)(a))),a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),s.a.send("VKWebAppGetUserInfo",{}),"ios"===Object(h.t)()?this.setState({OS:"ios"}):this.setState({OS:"android"})}},{key:"render",value:function(){var e=this;return l.a.createElement(h.s,{popout:this.state.notifol,activePanel:this.state.activePanel},l.a.createElement(h.l,{id:"load_img"},l.a.createElement(h.m,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),l.a.createElement(h.r,{size:"large",style:{marginTop:40}}),l.a.createElement("img",{src:N.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:M.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:T.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:j.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:A.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:W.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:V.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:q.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:J.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""}),l.a.createElement("img",{src:Z.a,width:"1",height:"1",onLoad:this.LoadImage,alt:""})),l.a.createElement(h.l,{id:"home"},l.a.createElement(h.m,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),this.state.fetchedUser&&l.a.createElement(h.g,{title:"\u041f\u0440\u0438\u0432\u0435\u0441\u0442\u0432\u0443\u0435\u043c \u0432 Random",align:"center"},this.state.fetchedUser.photo_200?l.a.createElement(h.b,{src:this.state.fetchedUser.photo_200}):null,"".concat(this.state.fetchedUser.first_name," ").concat(this.state.fetchedUser.last_name)),l.a.createElement(h.g,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"2",before:l.a.createElement(I.a,null),onClick:function(){return e.setState({activePanel:"Heads_And_Tails"})}},"\u041e\u0440\u0451\u043b \u0438 \u0440\u0435\u0448\u043a\u0430")),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"2",before:l.a.createElement(x.a,null),onClick:function(){return e.setState({activePanel:"KostiPanel"})}},"\u041a\u043e\u0441\u0442\u0438")),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"2",before:l.a.createElement(B.a,null),onClick:function(){return e.setState({activePanel:"NumberRandom"})}},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e")),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"2",before:l.a.createElement(S.a,null),onClick:function(){return e.setState({activePanel:"StringRandom"})}},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e")),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"2",before:l.a.createElement(L.a,null),onClick:function(){return e.setState({activePanel:"PassGener"})}},"Pass"))),l.a.createElement(h.g,{title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438"},l.a.createElement(h.e,null,l.a.createElement(h.e,{id:"money"},l.a.createElement(h.c,{size:"xl",level:"2",before:l.a.createElement(C.a,null),onClick:function(){return document.location.href="https://m.vk.com/crofgames?w=app6795545_-172310220"}},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"))),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"2",before:l.a.createElement(p.a,null),onClick:function(){return e.setState({activePanel:"ListCreatePeaple"})}},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"))),l.a.createElement(h.e,{align:"center"},"by ",l.a.createElement("a",{href:"https://vk.com/crofgames",align:"center"},"CrOfGames"),"  & ",l.a.createElement("a",{href:"https://vk.com/swanflow",align:"center"},"Swanflow"))),l.a.createElement(h.l,{id:"ListCreatePeaple"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.h,{onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(y.a,null)),addon:l.a.createElement(h.h,{onClick:function(){return e.setState({activePanel:"home"})}},"\u041d\u0430\u0437\u0430\u0434")},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"),l.a.createElement(h.g,null,l.a.createElement(h.k,null,l.a.createElement(h.e,null,l.a.createElement(h.d,{before:l.a.createElement(h.b,{src:"https://sun4-12.userapi.com/c845520/v845520191/c1cf5/-TbthP8AtzU.jpg"}),description:"\u041e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c",href:"https://vk.com/dantacion"},"\u0414\u0430\u043d\u0438\u0438\u043b \u041b\u0443\u043d\u044e\u0448\u043a\u0438\u043d")),l.a.createElement(h.e,null,l.a.createElement(h.d,{before:l.a.createElement(h.b,{src:"https://sun9-20.userapi.com/c831108/v831108559/194a0c/B0MwkUL5qp0.jpg?ava=1"}),description:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",href:"https://vk.com/tolmachew_9"},"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0422\u043e\u043b\u043c\u0430\u0447\u0435\u0432")),l.a.createElement(h.e,null,l.a.createElement(h.d,{before:l.a.createElement(h.b,{src:"https://sun9-40.userapi.com/c847122/v847122919/2645d/QzTciW-WZk8.jpg?ava=1"}),description:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",href:"https://vk.com/danil_16s"},"\u0414\u0430\u043d\u0438\u043b \u0421\u0430\u0432\u043a\u0438\u043d")),l.a.createElement(h.e,null,l.a.createElement(h.d,{before:l.a.createElement(h.b,{src:"https://sun4-16.userapi.com/c851036/v851036385/11eb87/6NZjCAA9pUc.jpg?ava=1"}),description:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a/\u0412\u043e\u043f\u0440\u043e\u0441\u044b",href:"https://vk.com/egortimofeevcooper"},"\u0415\u0433\u043e\u0440 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432")),l.a.createElement(h.e,null,l.a.createElement(h.d,{before:l.a.createElement(h.b,{src:"https://sun9-44.userapi.com/c850024/v850024594/18a210/EYNpeikl56s.jpg?ava=1"}),href:"https://vk.com/swanflow"},"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0412\u041a")))),l.a.createElement(h.e,{align:"center"},"by ",l.a.createElement("a",{href:"https://vk.com/crofgames",align:"center"},"CrOfGames"),"  & ",l.a.createElement("a",{href:"https://vk.com/swanflow",align:"center"},"Swanflow"))),l.a.createElement(h.l,{id:"Heads_And_Tails"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.h,{id:"backs1",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(y.a,null))},"\u041e\u0440\u0451\u043b \u0438 \u0420\u0435\u0448\u043a\u0430"),l.a.createElement(h.g,{align:"center"},l.a.createElement(h.e,{align:"center"},l.a.createElement(h.i,{title:"Progress",align:"center"},l.a.createElement(h.n,{id:"Prorgs",value:100}))),l.a.createElement(h.e,{align:"center"},l.a.createElement(h.b,{size:200,id:"money",src:M.a})),l.a.createElement(h.e,{align:"center"},l.a.createElement("font",{id:"text",size:"5",color:"#528bcc",face:"Arial"})),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"1",id:"Starting",onClick:this.RandOR},"\u041f\u043e\u0434\u0431\u0440\u043e\u0441\u0438\u0442\u044c")),l.a.createElement(h.e,null),l.a.createElement(h.c,{size:"xl",level:"tertiary",id:"Starting",onClick:function(){return e.OpenNotifi("\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?",'\u041f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 "\u041f\u043e\u0434\u0431\u0440\u043e\u0441\u0438\u0442\u044c"')}},"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?")),l.a.createElement(h.e,{align:"center"},"by ",l.a.createElement("a",{href:"https://vk.com/crofgames",align:"center"},"CrOfGames"),"  & ",l.a.createElement("a",{href:"https://vk.com/swanflow",align:"center"},"Swanflow"))),l.a.createElement(h.l,{id:"NumberRandom"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.h,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(y.a,null))},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"),l.a.createElement(h.g,null,l.a.createElement(h.e,{align:"center"},l.a.createElement(h.i,{title:"Progress",align:"center"},l.a.createElement(h.n,{id:"ProrgsNum",value:100})))),l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanNum",size:"10",color:"#528bcc",face:"Arial"},"0")),l.a.createElement(h.g,null,l.a.createElement(h.e,{align:"center"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0446\u0438\u0444\u0440\u044b."),l.a.createElement(h.e,{style:{display:"flex"}},l.a.createElement("a",null,"\u041e\u0442:",l.a.createElement(h.j,{id:"InNum",type:"number",defaultValue:"0",size:"l"})),l.a.createElement(h.e,null),l.a.createElement("a",null,"\u0414\u043e:",l.a.createElement(h.j,{id:"OutNum",type:"number",defaultValue:"100",size:"l"}))),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"1",id:"StartingRandom",onClick:this.RandNum},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),l.a.createElement(h.e,null),l.a.createElement(h.c,{size:"xl",level:"tertiary",id:"Starting",onClick:function(){return e.OpenNotifi("\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?",'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0447\u0438\u0441\u043b\u043e. \u0414\u0430\u043b\u0435\u0435 \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 "\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c".')}},"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?")),l.a.createElement(h.e,{align:"center"},"by ",l.a.createElement("a",{href:"https://vk.com/crofgames",align:"center"},"CrOfGames"),"  & ",l.a.createElement("a",{href:"https://vk.com/swanflow",align:"center"},"Swanflow"))),l.a.createElement(h.l,{id:"PassGener"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.h,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(y.a,null))},"Pass"),l.a.createElement(h.g,null,l.a.createElement(h.e,{align:"center"},l.a.createElement(h.i,{title:"Progress",align:"center"},l.a.createElement(h.n,{id:"Prorgss",value:100})))),l.a.createElement(h.g,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},l.a.createElement(h.e,null,l.a.createElement("a",null,"\u0411\u0430\u0437\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432:",l.a.createElement(h.f,null,l.a.createElement(h.o,{id:"Check",name:"type",defaultChecked:"checked",onClick:this.InputEnabled},"\u041e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"),l.a.createElement(h.o,{name:"type",onClick:this.InputEnabled},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f"))),l.a.createElement(h.e,null),l.a.createElement("a",null,"\u041a\u043e\u043b-\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432:",l.a.createElement(h.p,{id:"ListSize",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e"},l.a.createElement("option",{value:"size1"},"4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"),l.a.createElement("option",{value:"size2"},"5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size3"},"6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size4"},"8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size5"},"10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size6"},"12 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size7"},"14 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size8"},"16 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")))),l.a.createElement(h.e,{id:"InputEn",style:{display:"none"}},"\u041d\u0430\u0431\u043e\u0440 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432:",l.a.createElement(h.j,{id:"InSumL",type:"text",defaultValue:this.state.DefSumbol}))),l.a.createElement(h.g,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"},l.a.createElement(h.e,null,l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanPass",size:"4",color:"#FF0000",face:"Arial"},"Awhj123WAQ"))),l.a.createElement(h.e,null),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"1",id:"StartingRandomPass",onClick:this.PassGeneratorUnTimer},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),l.a.createElement(h.e,null),l.a.createElement(h.c,{size:"xl",level:"tertiary",id:"Starting",onClick:function(){return e.OpenNotifi("\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?",'\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c \u0438\u043b\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0432\u043e\u0438. \u0417\u0430\u0447\u0435\u043c \u043e\u043d\u0438? \u0418\u0437 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u043e\u043b\u044c. \u0421\u043b\u0435\u0434\u043e\u043c \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u043d\u0430\u0436\u0430\u0442\u044c "\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c".')}},"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?")),l.a.createElement(h.g,{id:"Tool",style:{visibility:"hidden"}},l.a.createElement(h.e,null,l.a.createElement("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c \u0438\u043b\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0432\u043e\u0438."),l.a.createElement("p",null,"\u0417\u0430\u0447\u0435\u043c \u043e\u043d\u0438? \u0418\u0437 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u043e\u043b\u044c. "),l.a.createElement("p",null,'\u0421\u043b\u0435\u0434\u043e\u043c \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u043d\u0430\u0436\u0430\u0442\u044c "\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c".'))),l.a.createElement(h.e,{align:"center"},"by ",l.a.createElement("a",{href:"https://vk.com/crofgames",align:"center"},"CrOfGames"),"  & ",l.a.createElement("a",{href:"https://vk.com/swanflow",align:"center"},"Swanflow"))),l.a.createElement(h.l,{id:"KostiPanel"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.h,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(y.a,null))},"\u041a\u043e\u0441\u0442\u0438"),l.a.createElement(h.g,null,l.a.createElement(h.e,{align:"center"},l.a.createElement(h.i,{title:"Progress",align:"center"},l.a.createElement(h.n,{id:"Prorgs",value:100}))),l.a.createElement(h.e,{align:"center"},l.a.createElement("a",{id:"StatePlayer"},"\u0418\u0433\u0440\u0430 \u043d\u0435 \u043d\u0430\u0447\u0430\u043b\u0430\u0441\u044c"),l.a.createElement(h.e,null),l.a.createElement(h.b,{size:200,type:"app",id:"KosGame",src:j.a}))),l.a.createElement(h.g,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},l.a.createElement(h.e,null,l.a.createElement("a",null,"\u041a\u043e\u043b-\u0432\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432:",l.a.createElement(h.p,{id:"ListPlayer"},l.a.createElement("option",{value:"player_1"},"1 \u0438\u0433\u0440\u043e\u043a"),l.a.createElement("option",{value:"player_2"},"2 \u0438\u0433\u0440\u043e\u043a\u0430"),l.a.createElement("option",{value:"player_3"},"3 \u0438\u0433\u0440\u043e\u043a\u0430"),l.a.createElement("option",{value:"player_4"},"4 \u0438\u0433\u0440\u043e\u043a\u0430"),l.a.createElement("option",{value:"player_5"},"5 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),l.a.createElement("option",{value:"player_6"},"6 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),l.a.createElement("option",{value:"player_7"},"7 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),l.a.createElement("option",{value:"player_8"},"8 \u0438\u0433\u0440\u043e\u043a\u043e\u0432")))),l.a.createElement(h.e,null,l.a.createElement("a",null,"\u041a\u043e\u043b-\u0432\u043e \u043a\u043e\u0441\u0442\u0435\u0439: ",this.state.valueKosti,l.a.createElement(h.q,{id:"ListKost",step:1,min:1,max:4,defaultValue:this.state.valueKosti,onChange:function(t){return e.setState({valueKosti:t})}}))),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"1",id:"StartingGame",onClick:this.GameKosti},"\u0411\u0440\u043e\u0441\u0438\u0442\u044c"))),l.a.createElement(h.g,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u0443\u0434\u0435\u0442 \u0442\u0443\u0442",id:"ListPlayerWins"}),l.a.createElement(h.c,{size:"xl",level:"tertiary",id:"Starting",onClick:function(){return e.OpenNotifi("\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?",'\u0422\u0443\u0442 \u0432\u0441\u0451 \u043f\u0440\u043e\u0441\u0442\u043e. \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u0418 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e \u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043a\u043e\u0441\u0442\u0435\u0439 \u0437\u0430 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430. \u0418 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0411\u0440\u043e\u0441\u0438\u0442\u044c". \u0411\u0440\u043e\u0441\u043e\u043a \u0437\u0430 \u0432\u0441\u0435\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043d\u0438\u0436\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 "\u0411\u0440\u043e\u0441\u0438\u0442\u044c".')}},"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f? "),l.a.createElement(h.e,{align:"center"},"by ",l.a.createElement("a",{href:"https://vk.com/crofgames",align:"center"},"CrOfGames"),"  & ",l.a.createElement("a",{href:"https://vk.com/swanflow",align:"center"},"Swanflow"))),l.a.createElement(h.l,{id:"StringRandom"},l.a.createElement(h.m,{theme:"light",left:l.a.createElement(h.h,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(y.a,null))},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"),l.a.createElement(h.g,null,l.a.createElement(h.e,{align:"center"},l.a.createElement(h.i,{title:"Progress",align:"center"},l.a.createElement(h.n,{id:"Prorgs",value:100})))),l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanStringsdwe",size:"5",color:"#528bcc",face:"Arial"},"\u0421\u043b\u043e\u0432\u043e")),l.a.createElement(h.g,null,l.a.createElement(h.e,{align:"center"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u0430 \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435:",l.a.createElement(h.j,{id:"StringAllInput",type:"text",size:"l"})),l.a.createElement(h.e,null,l.a.createElement(h.c,{size:"xl",level:"1",id:"StartingRandom",onClick:this.StringGenerate},"\u041d\u0430\u0447\u0430\u0442\u044c")),l.a.createElement(h.e,null),l.a.createElement(h.c,{size:"xl",level:"tertiary",id:"Starting",onClick:function(){return e.OpenNotifi("\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?",'\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0432 \u043f\u043e\u043b\u0435 \u0441\u043b\u043e\u0432\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e. \u0412\u0441\u0435 \u0441\u043b\u043e\u0432\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u043c. \u041f\u0440\u0438\u043c\u0435\u0440: "\u042f\u0431\u043b\u043e\u043a\u043e \u0411\u0430\u043d\u0430\u043d \u0413\u0440\u0443\u0448\u0430". \u0412\u044b\u0432\u043e\u0434: "\u0413\u0440\u0443\u0448\u0430".')}},"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?")),l.a.createElement(h.e,{align:"center"},"by ",l.a.createElement("a",{href:"https://vk.com/crofgames",align:"center"},"CrOfGames"),"  & ",l.a.createElement("a",{href:"https://vk.com/swanflow",align:"center"},"Swanflow"))))}},{key:"OpenNotifi",value:function(e,t){this.setState({notifol:l.a.createElement(h.a,{actions:[{title:"\u041e\u043a",autoclose:!0}],onClose:this.closeNotifi},l.a.createElement("h2",null,e),l.a.createElement("p",null,t))})}},{key:"closeNotifi",value:function(){this.setState({notifol:null})}},{key:"LoadImage",value:function(){var e=parseInt(this.state.LoadImage)+1;if(this.setState({LoadImage:e}),this.state.AllImage===this.state.LoadImage){this.setState({activePanel:"home"});var t=this.state.OS,a=setInterval(function(){document.getElementById("money")&&(document.getElementById("money").style.display="ios"===t?"none":"inline",clearInterval(a))},30)}}},{key:"RandOR",value:function(){document.getElementById("Starting").style.visibility="hidden",document.getElementById("backs1").style.visibility="hidden";var e=0,t=0;Math.round(0+100*Math.random());var a=setInterval(function(){t++,document.getElementById("Prorgs").style="width: "+t+"%;",100===t&&(t=0,document.getElementById("Prorgs").style="width: "+t+"100%;",document.getElementById("Prorgs").value="56%",clearInterval(a))},25),n=setInterval(function(){e++,Math.round(0+100*Math.random())%2?(document.getElementById("text").innerHTML="\u041e\u0440\u0451\u043b",document.getElementById("money").src=N.a):(document.getElementById("text").innerHTML="\u0420\u0435\u0448\u043a\u0430",document.getElementById("money").src=T.a),10===e&&(document.getElementById("Starting").style.visibility="visible",document.getElementById("backs1").style.visibility="visible",clearInterval(n))},250)}},{key:"RandNum",value:function(){var e=0,t=0,a=document.getElementById("InNum").value,n=document.getElementById("OutNum").value;if(""!==a)if(""!==n){document.getElementById("StartingRandom").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var l=0;e=Math.round(a+Math.random()*(n-a));var i=setInterval(function(){t++,e=Math.round(parseInt(a)+Math.random()*(n-a)),document.getElementById("RanNum").innerHTML=e,l++,document.getElementById("ProrgsNum").style="width: "+l+"%;",t>=100&&(document.getElementById("StartingRandom").style.visibility="visible",document.getElementById("backs2").style.visibility="visible",clearInterval(i),l=0,document.getElementById("ProrgsNum").style="width: "+l+"100%;",document.getElementById("ProrgsNum").value="56%")},30)}else this.OpenNotifi("\u041e\u0448\u0438\u0431\u043a\u0430","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.");else this.OpenNotifi("\u041e\u0448\u0438\u0431\u043a\u0430","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.")}},{key:"InputEnabled",value:function(){document.getElementById("Check").checked?document.getElementById("InputEn").style.display="none":document.getElementById("InputEn").style.display="inline"}},{key:"GameKosti",value:function(){var e=document.getElementById("ListPlayer").options[document.getElementById("ListPlayer").selectedIndex].value,t=e.slice(e.length-1,e.length),a=parseInt(this.state.valueKosti),n=0,l=0,i=[],r=[],c=1,s=0;document.getElementById("ListPlayerWins").innerHTML="",document.getElementById("StartingGame").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var m=setInterval(function(){switch(n++,document.getElementById("StatePlayer").innerHTML="\u041f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442 "+c+"-\u0439 \u0438\u0433\u0440\u043e\u043a",l=Math.round(1+5*Math.random())){case 1:document.getElementById("KosGame").src=A.a;break;case 2:document.getElementById("KosGame").src=W.a;break;case 3:document.getElementById("KosGame").src=V.a;break;case 4:document.getElementById("KosGame").src=q.a;break;case 5:document.getElementById("KosGame").src=J.a;break;case 6:document.getElementById("KosGame").src=Z.a}if(1===a){if(s=n/(20*t)*100,document.getElementById("Prorgs").style="width: "+s+"%;",n%20===0){i[c-1]=l,r[c-1]=1;var e=document.getElementById("ListPlayerWins");document.getElementById("ListPlayerWins").title="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",(v=document.createElement("div")).innerHTML='<div class="Group Group--android" align="center"><div class="Header Header--android Header--level-secondary"><div class="Header__in"><div class="Header__content">'+c+'-\u0439 \u0438\u0433\u0440\u043e\u043a</div></div></div><div class="Group__content"><div class="Div Div--android"><img style="width: 150px; height: 150px; border-radius: 25px;" class="Avatar__img" src='+document.getElementById("KosGame").src+" /></div></div></div>",e.appendChild(v),c++}if(n===20*t){c=0,document.getElementById("StartingGame").style.visibility="visible",document.getElementById("backs2").style.visibility="visible",document.getElementById("Prorgs").style="width: 100%;";for(var o=0,d=0;d<i.length;++d)i[d]>o&&(o=i[d]);for(var u="",E=0;E<i.length;++E)i[E]===o&&(u=u+""+(E+1));if(1===u.length&&(document.getElementById("StatePlayer").innerHTML="\u041f\u043e\u0431\u0435\u0434\u0438\u043b "+u+"-\u0439 \u0438\u0433\u0440\u043e\u043a"),u.length>=2){for(var g="\u041d\u0438\u0447\u044c\u044f \u043c\u0435\u0436\u0434\u0443: ",h=0;h<u.length;++h)g=g+" "+u[h]+"-\u043c";document.getElementById("StatePlayer").innerHTML=g+" \u0438\u0433\u0440\u043e\u043a\u043e\u043c"}clearInterval(m)}}else{if(s=n/(20*t)*100,document.getElementById("Prorgs").style="width: "+s+"%;",n%20===1){e=document.getElementById("ListPlayerWins");(v=document.createElement("div")).innerHTML='<div class="Group Group--android" align="center"><div class="Header Header--android Header--level-secondary"><div class="Header__in"><div class="Header__content">'+c+'-\u0439 \u0438\u0433\u0440\u043e\u043a</div></div></div><div id="images_player_'+c+'" class="Group__content"><div class="Div Div--android" align="center"></div></div></div>',e.appendChild(v)}if(n%Math.floor(20/a)===0){isNaN(i[c-1])&&(i[c-1]=0),i[c-1]=parseInt(i[c-1])+l;var v;e=document.getElementById("images_player_"+c);(v=document.createElement("div")).style="display: inline-block",v.innerHTML='<img style="width: '+(150-25*(a-1))+"px; height: "+(150-25*(a-1))+"px; border-radius: "+(25-3*(a-1))+'px; margin: 3px;" class="Avatar__img" src='+document.getElementById("KosGame").src+" />",e.appendChild(v)}if(n%20===0&&c++,n===20*t){c=0,document.getElementById("StartingGame").style.visibility="visible",document.getElementById("backs2").style.visibility="visible",document.getElementById("Prorgs").style="width: 100%;";for(var y=0,f=0;f<i.length;++f)i[f]>y&&(y=i[f]);for(var p="",b=0;b<i.length;++b)i[b]===y&&(p=p+""+(b+1));if(1===p.length&&(document.getElementById("StatePlayer").innerHTML="\u041f\u043e\u0431\u0435\u0434\u0438\u043b "+p+"-\u0439 \u0438\u0433\u0440\u043e\u043a"),p.length>=2){for(var I="\u041d\u0438\u0447\u044c\u044f \u043c\u0435\u0436\u0434\u0443: ",k=0;k<p.length;++k)I=I+" "+p[k]+"-\u043c";document.getElementById("StatePlayer").innerHTML=I+" \u0438\u0433\u0440\u043e\u043a\u043e\u043c"}clearInterval(m)}}},50)}},{key:"PassGeneratorUnTimer",value:function(){var e=document.getElementById("ListSize").options[document.getElementById("ListSize").selectedIndex].value,t=0,a=document.getElementById("InSumL").value,n=0,l=0;if(""!==a){switch(e){case"size1":document.getElementById("RanPass").innerHTML="****",t=4;break;case"size2":document.getElementById("RanPass").innerHTML="*****",t=5;break;case"size3":document.getElementById("RanPass").innerHTML="******",t=6;break;case"size4":document.getElementById("RanPass").innerHTML="********",t=8;break;case"size5":document.getElementById("RanPass").innerHTML="**********",t=10;break;case"size6":document.getElementById("RanPass").innerHTML="************",t=12;break;case"size7":document.getElementById("RanPass").innerHTML="**************",t=14;break;case"size8":document.getElementById("RanPass").innerHTML="****************",t=16;break;default:return void this.OpenNotifi("\u041e\u0448\u0438\u0431\u043a\u0430","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u043f\u0430\u0440\u043e\u043b\u044f.")}var i=document.getElementById("RanPass").innerText,r=0,c=0;document.getElementById("StartingRandomPass").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var s=setInterval(function(){l=++n/(10*t)*100,document.getElementById("Prorgss").style="width: "+Math.round(l)+"%;",n%10||r++,c=Math.round(Math.random()*(a.length-1)),i=i.substr(0,r)+a[c]+i.substr(r+1),document.getElementById("RanPass").innerHTML=i,n===10*t-1&&(clearInterval(s),document.getElementById("StartingRandomPass").style.visibility="visible",document.getElementById("backs2").style.visibility="visible",document.getElementById("Prorgss").style="width: 100%;")},30)}else this.OpenNotifi("\u041e\u0448\u0438\u0431\u043a\u0430","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0438\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u043e\u043b\u044c.")}},{key:"StringGenerate",value:function(){var e="Def "+document.getElementById("StringAllInput").value+" Def",t=0,a=0,n=0,l=0,i=0;if(8!==e.length)if(-1!==e.slice(4,e.length-4).indexOf(" "))if(" "!==e.slice(e.length-5,e.length-4)){for(document.getElementById("StartingRandom").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";-1!==(l=e.indexOf(" ",l+1));)t++;var r=0,c="",s=setInterval(function(){for(i=++n/40*100,document.getElementById("Prorgs").style="width: "+i+"%;",a=Math.round(2+Math.random()*(t-2));-1!==(l=e.indexOf(" ",l+1));)++r===a&&(c=e.slice(0,l),document.getElementById("RanStringsdwe").innerHTML=c.slice(c.lastIndexOf(" ")));r=0,40===n&&(clearInterval(s),document.getElementById("StartingRandom").style.visibility="visible",document.getElementById("backs2").style.visibility="visible",document.getElementById("Prorgs").style="width: 100%;")},100)}else this.OpenNotifi("\u041e\u0448\u0438\u0431\u043a\u0430","\u0412\u0423\u0431\u0435\u0440\u0438\u0442\u0435 \u0432 \u043a\u043e\u043d\u0446\u0435 \u043f\u0440\u043e\u0431\u0435\u043b");else this.OpenNotifi("\u041e\u0448\u0438\u0431\u043a\u0430","\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e \u0441\u043b\u043e\u0432\u043e, \u0438\u043b\u0438 \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u043f\u0440\u043e\u0431\u0435\u043b");else this.OpenNotifi("\u041e\u0448\u0438\u0431\u043a\u0430","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u0430 \u0438\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435.")}}]),t}(l.a.Component);s.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(Y,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a.p+"static/media/orel.197537e0.png"},61:function(e,t,a){e.exports=a.p+"static/media/orelandreshka.cf9f3c67.png"},62:function(e,t,a){e.exports=a.p+"static/media/reshka.271608c7.png"},63:function(e,t,a){e.exports=a.p+"static/media/kosNoN.e7e8a02d.png"},64:function(e,t,a){e.exports=a.p+"static/media/kos1.81320fcd.png"},65:function(e,t,a){e.exports=a.p+"static/media/kos2.2c3f5fdd.png"},66:function(e,t,a){e.exports=a.p+"static/media/kos3.8313fcaa.png"},67:function(e,t,a){e.exports=a.p+"static/media/kos4.e6ba8eff.png"},68:function(e,t,a){e.exports=a.p+"static/media/kos5.a5b71293.png"},69:function(e,t,a){e.exports=a.p+"static/media/kos6.a3766195.png"}},[[164,1,2]]]);
//# sourceMappingURL=main.83d7f493.chunk.js.map