(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){e.exports=n(234)},234:function(e,t,n){"use strict";n.r(t);n(152),n(202);var a=n(0),l=n.n(a),c=n(33),r=n.n(c),i=n(29),m=n.n(i),s=n(86),d=n(87),o=n(99),u=n(88),E=n(100),g=n(40),y=n(3),h=(n(233),n(41)),v=n.n(h),p=n(37),f=n.n(p),b=n(95),I=n.n(b),k=n(96),B=n.n(k),P=n(97),S=n.n(P),z=n(98),R=n.n(z),x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"home",fetchedUser:null,popout:null,post:null,CheckSize:"",access_token:"XXXXXXXX",DefSumbol:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890qwertyuioplkjhgfdsazxcvbnm"},n.PassGeneratorUnTimer=n.PassGeneratorUnTimer.bind(Object(g.a)(Object(g.a)(n))),n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),m.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){var e=this;return l.a.createElement(y.r,{activePanel:this.state.activePanel},l.a.createElement(y.m,{id:"home"},l.a.createElement(y.n,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),this.state.fetchedUser&&l.a.createElement(y.g,{title:"\u041f\u0440\u0438\u0432\u0435\u0441\u0442\u0432\u0443\u0435\u043c \u0432 Swanflow Random"},l.a.createElement(y.l,{before:this.state.fetchedUser.photo_200?l.a.createElement(y.a,{src:this.state.fetchedUser.photo_200}):null,description:this.state.fetchedUser.city&&this.state.fetchedUser.city.title?this.state.fetchedUser.city.title:""},"${this.state.fetchedUser.first_name} ${this.state.fetchedUser.last_name}")),l.a.createElement(y.g,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(v.a,null),onClick:function(){return e.setState({activePanel:"Heads_And_Tails"})}},"\u041e\u0440\u0451\u043b \u0438 \u0440\u0435\u0448\u043a\u0430")),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(v.a,null),onClick:function(){return e.setState({activePanel:"NumberRandom"})}},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e")),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(v.a,null),onClick:function(){return e.setState({activePanel:"StringRandom"})}},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e")),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(I.a,null),onClick:function(){return e.setState({activePanel:"PassGener"})}},"Pass"))),l.a.createElement(y.g,{title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438"},l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(v.a,null),onClick:function(){return e.setState({activePanel:"ListCreatePeaple"})}},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c")))),l.a.createElement(y.m,{id:"ListCreatePeaple"},l.a.createElement(y.n,{theme:"light",left:l.a.createElement(y.h,{onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(f.a,null)),addon:l.a.createElement(y.h,{onClick:function(){return e.setState({activePanel:"home"})}},"\u041d\u0430\u0437\u0430\u0434")},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"),l.a.createElement(y.g,null,l.a.createElement(y.k,null,l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun4-12.userapi.com/c845520/v845520191/c1cf5/-TbthP8AtzU.jpg"}),description:"\u041e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c",href:'javascript: document.location.href = "https://vk.com/dantacion";'},"\u0414\u0430\u043d\u0438\u0438\u043b \u041b\u0443\u043d\u044e\u0448\u043a\u0438\u043d")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-20.userapi.com/c831108/v831108559/194a0c/B0MwkUL5qp0.jpg?ava=1"}),description:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",href:'javascript: document.location.href = "https://vk.com/tolmachew_9";'},"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0422\u043e\u043b\u043c\u0430\u0447\u0435\u0432")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-40.userapi.com/c847122/v847122919/2645d/QzTciW-WZk8.jpg?ava=1"}),description:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",href:'javascript: document.location.href = "https://vk.com/danil_16s";'},"\u0414\u0430\u043d\u0438\u043b \u0421\u0430\u0432\u043a\u0438\u043d")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun4-16.userapi.com/c851036/v851036385/11eb87/6NZjCAA9pUc.jpg?ava=1"}),description:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",href:'javascript: document.location.href = "https://vk.com/egortimofeevcooper";'},"\u0415\u0433\u043e\u0440 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-20.userapi.com/c850120/v850120425/1b11e8/fie-eNk1yYI.jpg?ava=1"})},"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0412\u041a")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-20.userapi.com/c850120/v850120425/1b11e8/fie-eNk1yYI.jpg?ava=1"})},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0440\u043e\u044d\u043a\u0442\u0430")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-20.userapi.com/c850120/v850120425/1b11e8/fie-eNk1yYI.jpg?ava=1"})},"\u0422\u0435\u0445. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430")))),l.a.createElement(y.e,null,"4 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430")),l.a.createElement(y.m,{id:"Heads_And_Tails"},l.a.createElement(y.n,{theme:"light",left:l.a.createElement(y.h,{id:"backs1",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(f.a,null))},"\u041e\u0440\u0451\u043b \u0438 \u0420\u0435\u0448\u043a\u0430"),l.a.createElement(y.g,{align:"center",description:"!!!NoComment!!!"},l.a.createElement(y.d,{align:"center"},l.a.createElement(y.i,{title:"Progress",align:"center"},l.a.createElement(y.o,{id:"Prorgs",value:10}))),l.a.createElement(y.d,{align:"center"},l.a.createElement(y.a,{size:200,id:"money",src:S.a})),l.a.createElement(y.d,{align:"center"},l.a.createElement("font",{id:"text",size:"5",color:"#528bcc",face:"Arial"})),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"tertiary",id:"Starting",onClick:this.RandOR},"\u041f\u043e\u0434\u043a\u0438\u043d\u0443\u0442\u044c")))),l.a.createElement(y.m,{id:"NumberRandom"},l.a.createElement(y.n,{theme:"light",left:l.a.createElement(y.h,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(f.a,null))},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"),l.a.createElement(y.g,null,l.a.createElement(y.d,{align:"center"},l.a.createElement(y.i,{title:"Progress",align:"center"},l.a.createElement(y.o,{id:"ProrgsNum",value:16})))),l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanNum",size:"10",color:"#528bcc",face:"Arial"},"0")),l.a.createElement(y.g,null,l.a.createElement(y.d,{align:"center"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0446\u0438\u0444\u0440\u044b."),l.a.createElement(y.d,{style:{display:"flex"}},l.a.createElement("a",null,"\u041e\u0442:",l.a.createElement(y.j,{id:"InNum",type:"number",defaultValue:"0",size:"l"})),l.a.createElement(y.d,null),l.a.createElement("a",null,"\u0414\u043e:",l.a.createElement(y.j,{id:"OutNum",type:"number",defaultValue:"100",size:"l"}))),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"tertiary",id:"StartingRandom",onClick:this.RandNum},"\u041d\u0430\u0447\u0430\u0442\u044c")))),l.a.createElement(y.m,{id:"PassGener"},l.a.createElement(y.n,{theme:"light",left:l.a.createElement(y.h,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(f.a,null))},"Pass"),l.a.createElement(y.g,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},l.a.createElement(y.d,{style:{display:"flex"}},l.a.createElement("a",null,"\u0411\u0430\u0437\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432:",l.a.createElement(y.f,null,l.a.createElement(y.p,{id:"Check",name:"type",defaultChecked:"checked",onClick:this.InputEnabled},"\u041e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"),l.a.createElement(y.p,{name:"type",onClick:this.InputEnabled},"\u0421\u0432\u043e\u044f"))),l.a.createElement(y.d,null),l.a.createElement("a",null,"\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f",l.a.createElement(y.q,{id:"ListSize",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043b\u0438\u043d\u0443"},l.a.createElement("option",{value:"size1"},"4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"),l.a.createElement("option",{value:"size2"},"5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size3"},"6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size4"},"8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size5"},"10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size6"},"12 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size7"},"14 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size8"},"16 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")))),l.a.createElement(y.d,{id:"InputEn",style:{display:"none"}},"\u041d\u0430\u0431\u043e\u0440 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432:",l.a.createElement(y.j,{id:"InSumL",type:"text",defaultValue:this.state.DefSumbol}))),l.a.createElement(y.g,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"},l.a.createElement(y.d,null,l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanPass",size:"4",color:"#FF0000",face:"Arial"},"Awhj123WAQ"))),l.a.createElement(y.d,null),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"0",id:"StartingRandomPass",onClick:this.PassGeneratorUnTimer},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))),l.a.createElement(y.m,{id:"StringRandom"},l.a.createElement(y.n,{theme:"light",left:l.a.createElement(y.h,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(f.a,null))},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"),l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanStringsdwe",size:"5",color:"#528bcc",face:"Arial"},"\u0421\u043b\u043e\u0432\u043e")),l.a.createElement(y.g,null,l.a.createElement(y.d,{align:"center"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u0430 \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435:",l.a.createElement(y.j,{id:"StringAllInput",type:"text",size:"l"})),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"1",id:"StartingRandom",onClick:this.StringGenerate},"\u041d\u0430\u0447\u0430\u0442\u044c"))),l.a.createElement(y.g,null,l.a.createElement(y.d,null,l.a.createElement("p",null,"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?"),l.a.createElement("p",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0432 \u043f\u043e\u043b\u0435 \u0441\u043b\u043e\u0432\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e."),l.a.createElement("p",null,"\u0412\u0441\u0435 \u0441\u043b\u043e\u0432\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u043c."),l.a.createElement("p",null,'\u041f\u0440\u0438\u043c\u0435\u0440: "\u042f\u0431\u043b\u043e\u043a\u043e \u0411\u0430\u043d\u0430\u043d \u0413\u0440\u0443\u0448\u0430".'),l.a.createElement("p",null,'\u0412\u044b\u0432\u043e\u0434: "\u0413\u0440\u0443\u0448\u0430".')))))}},{key:"RandOR",value:function(){document.getElementById("Starting").style.visibility="hidden",document.getElementById("backs1").style.visibility="hidden";var e=0,t=0;Math.round(0+100*Math.random());var n=setInterval(function(){t++,document.getElementById("Prorgs").style="width: "+t+"%;",100===t&&(t=0,document.getElementById("Prorgs").style="width: "+t+"100%;",document.getElementById("Prorgs").value="56%",clearInterval(n))},25),a=setInterval(function(){e++,Math.round(0+100*Math.random())%2?(document.getElementById("text").innerHTML="\u041e\u0440\u0451\u043b",document.getElementById("money").src=B.a):(document.getElementById("text").innerHTML="\u0420\u0435\u0448\u043a\u0430",document.getElementById("money").src=R.a),10===e&&(document.getElementById("Starting").style.visibility="visible",document.getElementById("backs1").style.visibility="visible",clearInterval(a))},250)}},{key:"RandNum",value:function(){document.getElementById("StartingRandom").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var e=0,t=0,n=document.getElementById("InNum").value,a=document.getElementById("OutNum").value,l=0;e=Math.round(n+Math.random()*(a-n));var c=setInterval(function(){t++,e=Math.round(parseInt(n)+Math.random()*(a-n)),document.getElementById("RanNum").innerHTML=e,l++,document.getElementById("ProrgsNum").style="width: "+l+"%;",100===t&&(document.getElementById("StartingRandom").style.visibility="visible",document.getElementById("backs2").style.visibility="visible",clearInterval(c),l=0,document.getElementById("ProrgsNum").style="width: "+l+"100%;",document.getElementById("ProrgsNum").value="56%")},30)}},{key:"InputEnabled",value:function(){document.getElementById("Check").checked?document.getElementById("InputEn").style.display="none":document.getElementById("InputEn").style.display="inline"}},{key:"PassGeneratorUnTimer",value:function(){var e=document.getElementById("ListSize").options[document.getElementById("ListSize").selectedIndex].value,t=0,n=document.getElementById("InSumL").value,a=0;if(""!==n){switch(e){case"size1":document.getElementById("RanPass").innerHTML="****",t=4;break;case"size2":document.getElementById("RanPass").innerHTML="*****",t=5;break;case"size3":document.getElementById("RanPass").innerHTML="******",t=6;break;case"size4":document.getElementById("RanPass").innerHTML="********",t=8;break;case"size5":document.getElementById("RanPass").innerHTML="**********",t=10;break;case"size6":document.getElementById("RanPass").innerHTML="************",t=12;break;case"size7":document.getElementById("RanPass").innerHTML="**************",t=14;break;case"size8":document.getElementById("RanPass").innerHTML="****************",t=16;break;default:return void alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0438\u0437 \u0434\u043b\u0438\u043d \u043f\u0430\u0440\u043e\u043b\u044f.")}var l=document.getElementById("RanPass").innerText,c=0,r=0;document.getElementById("StartingRandomPass").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var i=setInterval(function(){++a%10||c++,r=Math.round(Math.random()*(n.length-1)),l=l.substr(0,c)+n[r]+l.substr(c+1),document.getElementById("RanPass").innerHTML=l,a===10*t-1&&(clearInterval(i),document.getElementById("StartingRandomPass").style.visibility="visible",document.getElementById("backs2").style.visibility="visible")},30)}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0438\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u043e\u043b\u044c.")}},{key:"StringGenerate",value:function(){var e=document.getElementById("StringAllInput").value+" Def",t=0,n=0,a=0,l=0;if(""!==e)if(-1!==e.indexOf(" "))if(e.lastIndexOf(" ")!==e.length-1){for(document.getElementById("StartingRandom").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";-1!==(l=e.indexOf(" ",l+1));)t++;var c=0,r="",i=setInterval(function(){for(a++,n=Math.round(1+Math.random()*(t-1));-1!==(l=e.indexOf(" ",l+1));)++c===n&&(r=e.slice(0,l),document.getElementById("RanStringsdwe").innerHTML=r.slice(r.lastIndexOf(" ")));c=0,40===a&&(clearInterval(i),document.getElementById("StartingRandom").style.visibility="visible",document.getElementById("backs2").style.visibility="visible")},100)}else alert("\u0423\u0431\u0435\u0440\u0438\u0442\u0435 \u0432 \u043a\u043e\u043d\u0446\u0435 \u043f\u0440\u043e\u0431\u0435\u043b");else alert("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e \u0441\u043b\u043e\u0432\u043e, \u0438\u043b\u0438 \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u043f\u0440\u043e\u0431\u0435\u043b");else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u0430 \u0438\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435.")}}]),t}(l.a.Component);m.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(x,null),document.getElementById("root"))},96:function(e,t,n){e.exports=n.p+"static/media/Orel.28dc09ef.png"},97:function(e,t,n){e.exports=n.p+"static/media/OrelAndReshka.0b65ebdc.png"},98:function(e,t,n){e.exports=n.p+"static/media/Reshka.af7eada6.png"}},[[151,1,2]]]);
//# sourceMappingURL=main.8799c1c7.chunk.js.map