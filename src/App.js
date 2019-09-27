import React from 'react';
import connect from '@vkontakte/vk-connect';
import { Panel, platform,Input, Radio, FormLayoutGroup, InfoRow,Select, Progress, Button, HeaderButton, Group, Div, Avatar, PanelHeader, View, List, Cell} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Orel from './texture/orel.png';
import OrelAndReshka from './texture/orelandreshka.png';
import OrelAndReshkaIC from '@vkontakte/icons/dist/24/money_circle';
import Reshka from './texture/reshka.png';
import NumIC from '@vkontakte/icons/dist/24/forward_10';
import StrIC from '@vkontakte/icons/dist/24/more_horizontal';
import PassIC from '@vkontakte/icons/dist/24/privacy';
import KosIC from '@vkontakte/icons/dist/24/services';

import KosNoN from './texture/kos/kosNoN.png';
import Kos1 from './texture/kos/kos1.png';
import Kos2 from './texture/kos/kos2.png';
import Kos3 from './texture/kos/kos3.png';
import Kos4 from './texture/kos/kos4.png';
import Kos5 from './texture/kos/kos5.png';
import Kos6 from './texture/kos/kos6.png';

class App extends React.Component {

// description={this.state.fetchedUser.city && this.state.fetchedUser.city.title ? this.state.fetchedUser.city.title : ''}
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			popout: null,
			post: null,
			CheckSize: '',
			access_token: 'XXXXXXXX',
			DefSumbol: 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890qwertyuioplkjhgfdsazxcvbnm',
			ValueClickGameKosti: 0,
		};
		this.PassGeneratorUnTimer = this.PassGeneratorUnTimer.bind(this);
		this.OS = this.OS.bind(this);
		this.GameKosti = this.GameKosti.bind(this);
	}
	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});


	}

	render() {
		return (
		<View activePanel={this.state.activePanel}>
			<Panel id='home'>
			<PanelHeader>Главная</PanelHeader>
			{this.state.fetchedUser &&
			<Group title="Привествуем в Random" align='center'>
					{this.state.fetchedUser.photo_200 ? <Avatar src={this.state.fetchedUser.photo_200}/> : null}
				{`${this.state.fetchedUser.first_name} ${this.state.fetchedUser.last_name}`}
			</Group>}

			<Group title="Навигация">

				<Div>
					<Button size="xl" level="2" before={<OrelAndReshkaIC/>} onClick={ () => this.setState({ activePanel: 'Heads_And_Tails' }) } >
						Орёл и решка
					</Button>
				</Div>

				<Div>
					<Button size="xl" level="2" before={<KosIC/>} onClick={ () => this.setState({ activePanel: 'KostiPanel' }) } >
						Кости
					</Button>
				</Div>

				<Div>
					<Button size="xl" level="2" before={<NumIC/>} onClick={ () => this.setState({ activePanel: 'NumberRandom' }) } >
						Случайное число
					</Button>
				</Div>

				<Div>
					<Button size="xl" level="2" before={<StrIC/>} onClick={ () => this.setState({ activePanel: 'StringRandom' }) } >
						Случайное слово
					</Button>
				</Div>

				<Div>
					<Button size="xl" level="2" before={<PassIC/>} onClick={ () => this.setState({ activePanel: 'PassGener' })} >
						Pass
					</Button>
				</Div>

			</Group>

			<Group title="Разработчики" description="by CrOfGames & Swanflow">
				<Div>
					<Button size="xl" level="2" before={<Icon24Users/>} onClick={this.OS} >
						Обратная связь
					</Button>
				</Div>

			</Group>
			</Panel>



  			<Panel id="ListCreatePeaple">
    			<PanelHeader
            theme="light"
            left={<HeaderButton onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
            addon={<HeaderButton onClick={() => this.setState({ activePanel: 'home' })}>Назад</HeaderButton>}
        	>
      				Обратная связь
    			</PanelHeader>

    		<Group description="by CrOfGames and Swanflow">
      			<List>

        		<Div>
        			<Cell before={<Avatar 
        				src='https://sun4-12.userapi.com/c845520/v845520191/c1cf5/-TbthP8AtzU.jpg'/>}
        				description="Основатель" 
        				href='https://vk.com/dantacion'
        				>
        				Даниил Лунюшкин
        			</Cell>
        		</Div>

				<Div>
        			<Cell before={<Avatar 
        				src='https://sun9-20.userapi.com/c831108/v831108559/194a0c/B0MwkUL5qp0.jpg?ava=1'/>}
        				description="Модератор" 
        				href='https://vk.com/tolmachew_9'
        				>
        				Дмитрий Толмачев
        			</Cell>
        		</Div>

        		<Div>
        			<Cell before={<Avatar 
        				src='https://sun9-40.userapi.com/c847122/v847122919/2645d/QzTciW-WZk8.jpg?ava=1'/>}
        				description="Модератор" 
        				href='https://vk.com/danil_16s'
        				>
        				Данил Савкин
        			</Cell>
        		</Div>

      			<Div>
        			<Cell before={<Avatar 
        				src='https://sun4-16.userapi.com/c851036/v851036385/11eb87/6NZjCAA9pUc.jpg?ava=1'/>} 
        				description="Разработчик/Вопросы"
        				href='https://vk.com/egortimofeevcooper'
        				>
        				Егор Тимофеев
        			</Cell>
        		</Div>

        		<Div id="money">
        			<Cell before={<Avatar 
        				src='https://sun9-23.userapi.com/c850120/v850120058/4ae63/aWa_jIJwVpI.jpg?ava=1'/>} 
        				href='https://vk.com/crofgames?w=app6795545_-172310220'
        				>
        				Пожертвование
        			</Cell>
        		</Div>

        		<Div>
        			<Cell before={<Avatar 
        				src='https://sun9-44.userapi.com/c850024/v850024594/18a210/EYNpeikl56s.jpg?ava=1'/>}
        				href='https://vk.com/swanflow'
        				>
        				Группа в ВК
        			</Cell>
        		</Div>
      			
      			</List>
    		</Group>
	 		</Panel>







	 		<Panel id="Heads_And_Tails">
    			<PanelHeader
            		theme="light"
            		left={<HeaderButton id="backs1" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
        			>
      				Орёл и Решка
    			</PanelHeader>

    			<Group align='center'>
      				
      				<Div align='center'>
    					<InfoRow title="Progress" align='center'>
            				<Progress id="Prorgs" value={10}/>
          				</InfoRow>

          			</Div>

          			<Div align='center'>
          				<Avatar size={200} id="money" src={OrelAndReshka}/>
          			</Div>


    				<Div align='center'><font id="text" size="5" color="#528bcc" face="Arial"></font></Div>


    				<Div>
    				<Button size="xl" level="tertiary" id="Starting" onClick={this.RandOR}>Испытать удачу</Button>
     				</Div>

    			</Group>

    			<Group description="by CrOfGames & Swanflow">
      				<Div>
      				<p>Как пользоваться?</p>
      				<p>Просто нажмите на "Испытать удачу".</p>
					</Div>
				</Group>

	 		</Panel>




	 		<Panel id="NumberRandom">
    			<PanelHeader
            		theme="light"
            		left={<HeaderButton id="backs2" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
        			>
      				Случайное число
    			</PanelHeader>

    			<Group>
      				
      				<Div align='center'>
    					<InfoRow title="Progress" align='center'>
            				<Progress id="ProrgsNum" value={16}/>
          				</InfoRow>
					</Div>
				</Group>

				<p align='center'>
          			<font id="RanNum" size="10" color="#528bcc" face="Arial">0</font>
          		</p>

          		<Group>
          			<Div align='center' >
					Введите значения для случайной цифры.
					</Div>

					<Div style={{display: 'flex'}}>
					<a>От:
       				<Input id="InNum" type="number" defaultValue="0" size="l"/>
       				</a>
       				<Div></Div>
       				<a>До:
       				<Input id="OutNum" type="number" defaultValue="100" size="l"/>
       				</a>
    				</Div>

    				<Div>
    				<Button size="xl" level="tertiary" id="StartingRandom" onClick={this.RandNum}>Генерировать</Button>
     				</Div>

    			</Group>

    			<Group description="by CrOfGames & Swanflow">
      				<Div>
      				<p>Как пользоваться?</p>
      				<p>Вам нужно ввести 2 числа:</p>
      				<p>1: начальное число.</p>
      				<p>2: конечное число.</p> 
      				<p>Далее нужно нажать кнопку "Генерировать".</p>
					</Div>
				</Group>

	 		</Panel>



	 		<Panel id="PassGener">
    			<PanelHeader
            		theme="light"
            		left={<HeaderButton id="backs2" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
        			>
      				Pass
    			</PanelHeader>

				<Group title="Настройка">
          			
          			<Div style={{display: 'flex'}}>
					
					<a>База символов:
						<FormLayoutGroup>
              			<Radio id="Check"  name="type" defaultChecked="checked" onClick={this.InputEnabled}>От сервиса</Radio>
              			<Radio name="type" onClick={this.InputEnabled}>Своя</Radio>
            			</FormLayoutGroup>
            		</a>

       				<Div>
       				</Div>

       				<a>Длина пароля
       					<Select id="ListSize" placeholder="Выберите длину">
		              		<option value="size1">4 символа</option>
              				<option value="size2">5 символов</option>
              				<option value="size3">6 символов</option>
              				<option value="size4">8 символов</option>
              				<option value="size5">10 символов</option>
              				<option value="size6">12 символов</option>
              				<option value="size7">14 символов</option>
              				<option value="size8">16 символов</option>
            			</Select>
            		</a>

    				</Div>

    				<Div id="InputEn" style={{display: 'none'}}>Набор символов:
       				<Input id="InSumL" type="text" defaultValue={this.state.DefSumbol} />
       				</Div>

    			</Group>

          		<Group title="Результат">
          			<Div>
          				<p align='center'>
          					<font id="RanPass" size="4" color="#FF0000" face="Arial">Awhj123WAQ</font>
          				</p>
          			</Div>

       				<Div></Div>

    				<Div>
    				<Button size="xl" level="0" id="StartingRandomPass" onClick={this.PassGeneratorUnTimer}>Генерировать</Button>
     				</Div>

    			</Group>

    			<Group description="by CrOfGames & Swanflow">
      				<Div>
      				<p>Как пользоваться?</p>
      				<p>Тут всё просто.</p>
      				<p>Вы можете выбрать символы сервиса или же написать свои.</p>
      				<p>Зачем они? Что бы было из чего генерировать пароль.</p> 
      				<p>Следом Вам нужно выбрать длину и нажать "Генерировать".</p>
					</Div>
				</Group>

	 		</Panel>

	 		<Panel id="KostiPanel">
    			<PanelHeader
            		theme="light"
            		left={<HeaderButton id="backs2" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
        			>
      				Кости
    			</PanelHeader>

   				<Group>
    				<Div align='center'>
    				<a id="StatePlayer">Игра не началась</a>
          					<Avatar size={200} type="app" id="KosGame" src={KosNoN}/>
          			</Div>
          		</Group>

				<Group title="Настройка">
          			
       				<a id="VisHisList">Число игроков:
       					<Select id="ListPlayer">
		              		<option value="player_1">1 игрок</option>
              				<option value="player_2">2 игрока</option>
              				<option value="player_3">3 игрока</option>
              				<option value="player_4">4 игрока</option>
              				<option value="player_5">5 игроков</option>
              				<option value="player_6">6 игроков</option>
              				<option value="player_7">7 игроков</option>
              				<option value="player_8">8 игроков</option>
            			</Select>
            		</a>

    				<Div>
    				<Button size="xl" level="0" id="StartingGame" onClick={this.GameKosti}>Подкинуть</Button>
     				</Div>

    			</Group>

    			<Group title="Результат будет тут" id="ListPlayerWins">
          			


    			</Group>

    			<Group description="by CrOfGames & Swanflow">
      				<Div>
      				<p>Как пользоваться?</p>
      				<p>Тут всё просто.</p>
      				<p>Укажите кол-во игроков,</p>
      				<p>И нажмите на кнопку "Подкинуть".</p> 
      				<p>За всех игроков подкидывается автоматически.</p>
      				<p>У кого что выпало будет показано ниже кнопки "Подкинуть"</p>
					</Div>
				</Group>

	 		</Panel>


	 		<Panel id="StringRandom">
    			<PanelHeader
            		theme="light"
            		left={<HeaderButton id="backs2" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
        			>
      				Случайное слово
    			</PanelHeader>

				<p align='center'>
          			<font id="RanStringsdwe" size="5" color="#528bcc" face="Arial">Слово</font>
          		</p>

          		<Group>

          			<Div align='center' >
					Введите слова в это поле:
					<Input id="StringAllInput" type="text" size="l"/>
					</Div>
       				
    				<Div>
    				<Button size="xl" level="1" id="StartingRandom" onClick={this.StringGenerate}>Начать</Button>
     				</Div>

    			</Group>

    			<Group description="by CrOfGames & Swanflow">
      				<Div>
      				<p>Как пользоваться?</p>
      				<p>Для начала Вы должны ввести в поле слова, из которых нужно выбрать случайное слово.</p>
      				<p>Все слова должны разделяться пробелом.</p>
      				<p>Пример: "Яблоко Банан Груша".</p> 
      				<p>Вывод: "Груша".</p>
					</Div>
				</Group>

	 		</Panel>

		</View>
		);
	}

		RandOR(){
		document.getElementById("Starting").style.visibility = 'hidden';
		document.getElementById("backs1").style.visibility = 'hidden';
		let number = 0;
		let tick = 0;

		let pgogr = 0;
		number = Math.round(0 + Math.random() * (100 - 0));


		let progr = setInterval(function randomickProg()
  			{
  				pgogr++;
  				document.getElementById("Prorgs").style='width: ' + pgogr + '%;';

  					if(pgogr === 100){
  						pgogr = 0;
  						document.getElementById("Prorgs").style='width: ' + pgogr + 100 + '%;';
  						document.getElementById("Prorgs").value='56%';
  						clearInterval(progr);
  					}

  			}, 25);


  		let timerRD = setInterval(function randomick()
  			{
  				tick++;
  				number = Math.round(0 + Math.random() * (100 - 0));
  				if(number % 2){
  					document.getElementById("text").innerHTML="Орёл";
  					document.getElementById("money").src=Orel;
  				}
  				else{
  					document.getElementById("text").innerHTML="Решка";
  					document.getElementById("money").src=Reshka;
  				}

  					if(tick === 10){
  						document.getElementById("Starting").style.visibility = 'visible';
  						document.getElementById("backs1").style.visibility = 'visible';
  						clearInterval(timerRD);
  					}

  			}, 250);
	}


	RandNum(){
		let number = 0;
		let tick = 0;

		let InNum = document.getElementById("InNum").value;
		let OutNum = document.getElementById("OutNum").value;

		if(InNum === "")
  			{
  				alert("Введите начальное число.");
  				return;
  			}

  		if(OutNum === "")
  			{
  				alert("Введите конечное число.");
  				return;
  			}

  		document.getElementById("StartingRandom").style.visibility = 'hidden';
		document.getElementById("backs2").style.visibility = 'hidden';

		let pgogr = 0;
		number = Math.round(InNum + Math.random() * (OutNum - InNum));

  		let timerRDNum = setInterval(function randomick()
  			{
  				tick++;
  				number = Math.round(parseInt(InNum) + (Math.random() * (OutNum - InNum)));
  				document.getElementById("RanNum").innerHTML= number;

  				pgogr++;
  				document.getElementById("ProrgsNum").style='width: ' + pgogr + '%;';

  					if(tick >= 100){
  						document.getElementById("StartingRandom").style.visibility = 'visible';
						document.getElementById("backs2").style.visibility = 'visible';
  						clearInterval(timerRDNum);

  						pgogr = 0;
  						document.getElementById("ProrgsNum").style='width: ' + pgogr + 100 + '%;';
  						document.getElementById("ProrgsNum").value='56%';
  					}

  			}, 30);
	}


		InputEnabled()
		{
			if(document.getElementById("Check").checked)
			{
				document.getElementById("InputEn").style.display = 'none';
			}
			else
			{
				document.getElementById("InputEn").style.display = 'inline';
			}
		}

		GameKosti()
		{
			let idPlay = document.getElementById("ListPlayer").options[document.getElementById("ListPlayer").selectedIndex].value;
			
			let sizePlay = idPlay.slice(idPlay.length - 1,idPlay.length);

			let tick = 0;

			let number = 0;

			let imgs = 0;

			let Players = [];
			let PlayersID = [];
			let player = 1;

				document.getElementById("ListPlayerWins").innerHTML="";

			document.getElementById("StartingGame").style.visibility = 'hidden';
			document.getElementById("backs2").style.visibility = 'hidden';

			let timerOneGame = setInterval(function randomick()
  			{
  				tick++;

  				document.getElementById("StatePlayer").innerHTML= "Подкидывает " + player + "-й игрок";

  				number = Math.round(1 + (Math.random() * (6 - 1)));
  			    switch(number)
  			    {
  			    case 1:
  				document.getElementById("KosGame").src=Kos1;
  				break;

  				case 2:
  				document.getElementById("KosGame").src=Kos2;
  				break;

  				case 3:
  				document.getElementById("KosGame").src=Kos3;
  				break;

  				case 4:
  				document.getElementById("KosGame").src=Kos4;
  				break;

  				case 5:
  				document.getElementById("KosGame").src=Kos5;
  				break;

  				case 6:
  				document.getElementById("KosGame").src=Kos6;
  				break;
  				}

  				if(tick % 20 === 0)
  				{
  					Players[player - 1] = number;
  					PlayersID[player - 1] = 1;

  					var picHolder = document.getElementById("ListPlayerWins");
					document.getElementById("ListPlayerWins").title="Результат";
					var img = document.createElement("div");
					img.innerHTML = "<div class=\"Group Group--android\" align=\"center\"><div class=\"Header Header--android Header--level-secondary\"><div class=\"Header__in\"><div class=\"Header__content\">" + player + "-й игрок" + "</div></div></div><div class=\"Group__content\"><div class=\"Div Div--android\"><img style=\"width: 100px; height: 100px; border-radius: 20px;\" class=\"Avatar__img\" src="+ document.getElementById("KosGame").src +" /></div></div></div>";
					picHolder.appendChild(img);

  					player++;
  				}

  				if(tick === 20 * sizePlay){
  					player = 0;
  					document.getElementById("StartingGame").style.visibility = 'visible';
					document.getElementById("backs2").style.visibility = 'visible';

					
 					let max = 0;
  					for (let i = 0; i < Players.length; ++i) {
   				   		if (Players[i] > max) max = Players[i];
 					}

 					let Pl = "";
 					for (let i = 0; i < Players.length; ++i) {
   				   		if (Players[i] === max) Pl = Pl + "" + (i + 1);
 					}

 					if(Pl.length === 1)
 					{
 						document.getElementById("StatePlayer").innerHTML= "Победил " + Pl + "-й игрок";
 					}


 					if(Pl.length > 2)
 					{
 						let str = "Ничья между: "
 						for (let i = 0; i < Pl.length; ++i) {
   				   		str = str + " " + Pl[i] + "-м";
 						}
 						document.getElementById("StatePlayer").innerHTML= str + " игроком";
 					}								

					clearInterval(timerOneGame);
  				}

  			}, 100);
			
		}



		PassGeneratorUnTimer()
		{
  			let idList = document.getElementById("ListSize").options[document.getElementById("ListSize").selectedIndex].value
  			let SizePass = 0;
  			let InSumL = document.getElementById("InSumL").value;
  			let tick= 0;

  			if(InSumL === "")
  			{
  				alert("Введите символы их которых будет генерироваться пароль.");
  				return;
  			}

  			switch(idList) {
  				case "size1":
  				document.getElementById("RanPass").innerHTML="****";
				SizePass = 4;
  				break;

  				case "size2":
  				document.getElementById("RanPass").innerHTML="*****";
				SizePass = 5;
  				break;

  				case "size3":
  				document.getElementById("RanPass").innerHTML="******";
				SizePass = 6;
  				break;

  				case "size4":
				document.getElementById("RanPass").innerHTML="********";
				SizePass = 8;
  				break;

  				case "size5":
				document.getElementById("RanPass").innerHTML="**********";
				SizePass = 10;
  				break;

  				case "size6":
				document.getElementById("RanPass").innerHTML="************";
				SizePass = 12;
  				break;

  				case "size7":
				document.getElementById("RanPass").innerHTML="**************";
				SizePass = 14;
  				break;

  				case "size8":
				document.getElementById("RanPass").innerHTML="****************";
				SizePass = 16;
  				break;

  				default:
    			alert("Выберите одну из длин пароля.");
    			return;
  			}
  			let Password = document.getElementById("RanPass").innerText
  			let tick10 = 0;
  			let defnum = 0;

  			document.getElementById("StartingRandomPass").style.visibility = 'hidden';
			document.getElementById("backs2").style.visibility = 'hidden';

  			let timerPASS = setInterval(function randomick()
  			{
  				tick++;
  				if(!(tick % 10)){
  					tick10++;
  				}
  				defnum = Math.round((Math.random() * (InSumL.length - 1)));
  				Password = Password.substr(0, tick10) + InSumL[defnum] + Password.substr(tick10 + 1);
				document.getElementById("RanPass").innerHTML=Password;
  				if(tick === (SizePass * 10) - 1){
  					clearInterval(timerPASS);
  					document.getElementById("StartingRandomPass").style.visibility = 'visible';
					document.getElementById("backs2").style.visibility = 'visible';
  				}

  			}, 30);
		}


		OS()
		{
			this.setState({ activePanel: 'ListCreatePeaple' });
			let osname = platform();

			let OSCheck = setInterval(function randomick()
  			{
  				if(document.getElementById("money").style != null){
  				if(osname === "ios")
				{
					document.getElementById("money").style.display = 'none'
				}
				else
				{
					document.getElementById("money").style.display = 'inline'
				}

  					clearInterval(OSCheck);
  				}

  			}, 1);
		}


		StringGenerate()
		{
			let StringAllInput = "Def " + document.getElementById("StringAllInput").value + " Def";
			let All_Sumb = 0;
			let defRendSrt = 0;
			let tick = 0;
			let pos = 0;

  			if(StringAllInput.length === 8)
  			{
  				alert("Введите слова их которых будет выбрано случайное.");
  				return;
  			}

  			if(StringAllInput.slice(4 , StringAllInput.length - 4).indexOf(" ") === -1){
  				alert("Вы ввели только одно слово, или не поставили пробел");
  				return;
  			}

  			if(StringAllInput.slice(StringAllInput.length - 5 , StringAllInput.length - 4) === " "){
  				alert("Уберите в конце пробел");
  				return;
  			}

  			document.getElementById("StartingRandom").style.visibility = 'hidden';
			document.getElementById("backs2").style.visibility = 'hidden';

			while ((pos = StringAllInput.indexOf(" ", pos + 1)) !== -1) {
  						All_Sumb++;
					}

			let IndexSumbol = 0;
			let StrLast = "";

			let timerStr = setInterval(function randomick()
  			{
  				tick++;
  				
  				defRendSrt = Math.round(2 + (Math.random() * (All_Sumb - 2)));

  				while ((pos = StringAllInput.indexOf(" ", pos + 1)) !== -1) {
  						IndexSumbol++;
  							if(IndexSumbol === defRendSrt){
  							StrLast = StringAllInput.slice(0 , pos);
  							document.getElementById("RanStringsdwe").innerHTML= StrLast.slice(StrLast.lastIndexOf(" "));
  						}
					}

				IndexSumbol = 0;

  				if(tick === 40){
  					clearInterval(timerStr);
  					document.getElementById("StartingRandom").style.visibility = 'visible';
					document.getElementById("backs2").style.visibility = 'visible';
  				}

  			}, 100);
		}
}

export default App;
