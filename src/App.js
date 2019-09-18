import React from 'react';
import connect from '@vkontakte/vk-connect';
import { Panel, ListItem,Input, InfoRow, Progress, Button, HeaderButton, Group, Div, Avatar, PanelHeader, View, List, Cell, Footer } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Logo from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Orel from './img/Orel.png';
import OrelAndReshka from './img/OrelAndReshka.png';
import Reshka from './img/Reshka.png';

//434b2fa3434b2fa3434b2fa3394327f9a74434b434b2fa31e31718126b5bbed45870c43
class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			popout: null,
			post: null,
			access_tok: null
		};
	}
	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				case 'VKWebAppCallAPIMethodResult':
					this.setState({ post: e.detail.data });
					break;
				case 'VKWebAppAccessTokenReceived':
					this.setState({ access_tok: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		connect.send("VKWebAppGetAuthToken", {"app_id": 7132676, "scope": "wall"});
	}



	render() {
		return (
		<View activePanel={this.state.activePanel}>

			<Panel id='home'>
			<PanelHeader>Главная</PanelHeader>
			{this.state.fetchedUser &&
			<Group title="Привествуем в Swanflow Random">
				<ListItem
					before={this.state.fetchedUser.photo_200 ? <Avatar src={this.state.fetchedUser.photo_200}/> : null}
					description={this.state.fetchedUser.city && this.state.fetchedUser.city.title ? this.state.fetchedUser.city.title : ''}
				>
					{`${this.state.fetchedUser.first_name} ${this.state.fetchedUser.last_name}`}
				</ListItem>
			</Group>}

			<Group title="Навигация">

				<Div>
					<Button size="xl" level="2" before={<Icon24Logo/>} onClick={ () => this.setState({ activePanel: 'Heads_And_Tails' }) } >
						Орёл и решка
					</Button>
				</Div>

				<Div>
					<Button size="xl" level="2" before={<Icon24Logo/>} onClick={ () => this.setState({ activePanel: 'NumberRandom' }) } >
						Случайное число
					</Button>
				</Div>

				<Div>
					<Button size="xl" level="2" before={<Icon24Users/>} onClick={ () => this.setState({ activePanel: 'RandomPost' }) } >
						Случайный победитель
					</Button>
				</Div>

			</Group>

			<Group title="Разработчики">

				<Div>
					<Button size="xl" level="2" before={<Icon24Logo/>} onClick={ () => this.setState({ activePanel: 'ListCreatePeaple' }) } >
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

    		<Group>
      			<List>

      			<Div>
        			<Cell before={<Avatar 
        				src='https://sun9-20.userapi.com/c831108/v831108559/194a0c/B0MwkUL5qp0.jpg?ava=1'/>}
        				description="Основатель" 
        				href='javascript: document.location.href = "https://vk.com/tolmachew_9";'
        				>
        				Дмитрий Толмачев
        			</Cell>
        		</Div>

      			<Div>
        			<Cell before={<Avatar 
        				src='https://sun4-16.userapi.com/c851036/v851036385/11eb87/6NZjCAA9pUc.jpg?ava=1'/>} 
        				description="Разработчик"
        				href='javascript: document.location.href = "https://vk.com/egortimofeevcooper";'
        				>
        				Егор Тимофеев
        			</Cell>
        		</Div>
      			
      			</List>
    		</Group>
    			<Footer>2 администратора</Footer>
	 		</Panel>







	 		<Panel id="Heads_And_Tails">
    			<PanelHeader
            		theme="light"
            		left={<HeaderButton id="backs1" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
        			>
      				Орёл и Решка
    			</PanelHeader>

    			<Group align='center' description="!!!NoComment!!!">
      				
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
    				<Button size="xl" level="tertiary" id="Starting" onClick={this.RandOR}>Подкинуть</Button>
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
    				<Button size="xl" level="tertiary" id="StartingRandom" onClick={this.RandNum}>Начать</Button>
     				</Div>

    			</Group>
	 		</Panel>



	 		<Panel id="RandomPost">
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
    				<Button size="xl" level="tertiary" id="StartingRandom" onClick={this.Test}>Начать</Button>
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
		document.getElementById("StartingRandom").style.visibility = 'hidden';
		document.getElementById("backs2").style.visibility = 'hidden';
		let number = 0;
		let tick = 0;

		let InNum = document.getElementById("InNum").value;
		let OutNum = document.getElementById("OutNum").value;

		let pgogr = 0;
		number = Math.round(InNum + Math.random() * (OutNum - InNum));


  		let timerRDNum = setInterval(function randomick()
  			{
  				tick++;
  				number = Math.round(parseInt(InNum) + (Math.random() * (OutNum - InNum)));
  				document.getElementById("RanNum").innerHTML=number;

  				pgogr++;
  				document.getElementById("ProrgsNum").style='width: ' + pgogr + '%;';

  					if(tick === 100){
  						document.getElementById("StartingRandom").style.visibility = 'visible';
						document.getElementById("backs2").style.visibility = 'visible';
  						clearInterval(timerRDNum);

  						pgogr = 0;
  						document.getElementById("ProrgsNum").style='width: ' + pgogr + 100 + '%;';
  						document.getElementById("ProrgsNum").value='56%';
  					}

  			}, 30);
	}




		Test()
		{
			connect.send("VKWebAppCallAPIMethod", {"method": "wall.getReposts", 
			"params": {"owner_id": "-71729358",
			"post_id": "10196403",
			"v":"5.101", 
			"access_token": this.state.access_tok.access_token }});
			document.getElementById("RanNum").innerHTML= this.state.post.response.profiles[0].id;
		}
}

export default App;
