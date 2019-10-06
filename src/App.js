import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import * as VK from './js/services/VK';

import {Epic, View, Root, Tabbar, ModalRoot, TabbarItem, ConfigProvider} from "@vkontakte/vkui";
import { Panel, platform, Alert,Slider, Spinner, Input, Radio, FormLayoutGroup, InfoRow,Select, Progress, Button, HeaderButton, Group, Div, Avatar, PanelHeader, List, Cell} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import OrelAndReshkaIC from '@vkontakte/icons/dist/24/money_circle';
import NumIC from '@vkontakte/icons/dist/24/forward_10';
import StrIC from '@vkontakte/icons/dist/24/more_horizontal';
import PassIC from '@vkontakte/icons/dist/24/privacy';
import KosIC from '@vkontakte/icons/dist/24/services';
import Pay from '@vkontakte/icons/dist/24/money_transfer';
import './myStyle.css';

import Orel from './texture/orel.png';
import OrelAndReshka from './texture/orelandreshka.png';
import Reshka from './texture/reshka.png';
import KosNoN from './texture/kos/kosNoN.png';
import Kos1 from './texture/kos/kos1.png';
import Kos2 from './texture/kos/kos2.png';
import Kos3 from './texture/kos/kos3.png';
import Kos4 from './texture/kos/kos4.png';
import Kos5 from './texture/kos/kos5.png';
import Kos6 from './texture/kos/kos6.png';


import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28More from '@vkontakte/icons/dist/28/more';

import HomePanelBase from './js/panels/home/base';
import HomePanelGroups from './js/panels/home/groups';

import MorePanelBase from './js/panels/more/base';
import MorePanelExample from './js/panels/more/example';

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.lastAndroidBackAction = 0;

        this.state = {
            activePanel: 'load_img',
            fetchedUser: null,
            popout: null,
            post: null,
            CheckSize: '',
            access_token: 'XXXXXXXX',
            DefSumbol: 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890qwertyuioplkjhgfdsazxcvbnm',
            ValueClickGameKosti: 0,
            notifol: null,
            OS: null,
            AllImage: 15,
            LoadImage: 1,
            title: null,
            message: null,
            valueKosti: 1,
            VisiblePay: 'none',
            ErrorInputIn: 'valid',
            ErrorInputOut: 'valid',
            InputOut: '',
            InputIn: '',
        };

        this.PassGeneratorUnTimer = this.PassGeneratorUnTimer.bind(this);
        this.GameKosti = this.GameKosti.bind(this);

        this.LoadImage = this.LoadImage.bind(this);

        this.OpenNotifi = this.OpenNotifi.bind(this);
        this.closeNotifi = this.closeNotifi.bind(this);
        this.RandNum = this.RandNum.bind(this);
        this.PassGeneratorUnTimer = this.PassGeneratorUnTimer.bind(this);
        this.StringGenerate = this.StringGenerate.bind(this);

    }

    componentDidMount() {
        const {goBack, dispatch} = this.props;

        dispatch(VK.initApp());

        window.onpopstate = () => {
            let timeNow = +new Date();

            if (timeNow - this.lastAndroidBackAction > 500) {
                this.lastAndroidBackAction = timeNow;

                goBack('Android');
            } else {
                window.history.pushState(null, null);
            }
        };

        if(!navigator.onLine)
        {
            this.OpenNotifi("Ошибка","У вас нет подключения к интернету. Повторите попытку.");
            this.setState({ activePanel:'offLine' });
        }

        let osname = platform();
        if(osname === "ios")
        {
            this.setState({ OS: 'ios', VisiblePay: 'none' });
        }
        else
        {
            this.setState({ OS: 'android', VisiblePay: '' });
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {activeView, activeStory, activePanel, scrollPosition} = this.props;

        if (
            prevProps.activeView !== activeView ||
            prevProps.activePanel !== activePanel ||
            prevProps.activeStory !== activeStory
        ) {
            let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

            window.scroll(0, pageScrollPosition);
        }
    }

    render() {
        const {goBack, setStory, closeModal, popouts, activeView, activeStory, activePanel, activeModals, panelsHistory, colorScheme} = this.props;

        let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
        let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
        let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

        const homeModals = (
            <ModalRoot activeModal={activeModal}>
                <HomeBotsListModal
                    id="MODAL_PAGE_BOTS_LIST"
                    onClose={() => closeModal()}
                />
                <HomeBotInfoModal
                    id="MODAL_PAGE_BOT_INFO"
                    onClose={() => closeModal()}
                />
            </ModalRoot>
        );

        return (
            <View popout={this.state.notifol} activePanel={this.state.activePanel}>

            <Panel id='load_img' style={{user_select: 'none'}}>
            <PanelHeader>Загрузка...</PanelHeader>

            <Div align='center'>
                            <Progress id="ProgressLoadImg" value={100} style={{width: '0%'}}/>
            </Div>

            <Spinner size="large" style={{ marginTop: 40}} />

            <Div align='center' style={{visibility: 'hidden'}}>

                <img style={{visibility: 'hidden'}} src={Orel} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={OrelAndReshka} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={Reshka} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={KosNoN} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={Kos1} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={Kos2} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={Kos3} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={Kos4} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={Kos5} width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img style={{visibility: 'hidden'}} src={Kos6} width="1" height="1" onLoad={this.LoadImage} alt=""/>

                <img src="https://sun4-12.userapi.com/c845520/v845520191/c1cf5/-TbthP8AtzU.jpg" width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img src="https://sun9-20.userapi.com/c831108/v831108559/194a0c/B0MwkUL5qp0.jpg?ava=1" width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img src="https://sun9-40.userapi.com/c847122/v847122919/2645d/QzTciW-WZk8.jpg?ava=1" width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img src="https://sun4-16.userapi.com/c851036/v851036385/11eb87/6NZjCAA9pUc.jpg?ava=1" width="1" height="1" onLoad={this.LoadImage} alt=""/>
                <img src="https://sun9-44.userapi.com/c850024/v850024594/18a210/EYNpeikl56s.jpg?ava=1" width="1" height="1" onLoad={this.LoadImage} alt=""/>
            </Div>

            </Panel>


            <Panel id='offLine'>
            <PanelHeader>Упс...</PanelHeader>

                <Div>
                    Для запуска сервиса нужен интернет...
                </Div>
                <Div>
                    Но к сожалению у вас он не подключен:(
                </Div>

            </Panel>




            <Panel id='home'>
            <PanelHeader>Главная</PanelHeader>

            <Group title="Навигация">

                <Div>
                    <Button size="xl" level="2" before={<OrelAndReshkaIC/>} onClick={() => this.setState({ activePanel: 'Heads_And_Tails' })}  >
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
                        Пароль
                    </Button>
                </Div>

            </Group>

            <Group title="Разработчики">

                <Div id="money" style={{display: this.state.VisiblePay}}>
                    <Button size="xl" level="2" before={<Pay/>} onClick={this.VKPayDonate} >
                        Поддержать проект
                    </Button>
                </Div>


                <Div>
                    <Button size="xl" level="2" before={<Icon24Users/>} onClick={() => this.setState({ activePanel: 'ListCreatePeaple' })}>
                        Обратная связь
                    </Button>
                </Div>

            </Group>

            <Div align="center">
            by <a target="_blank" href="https://vk.com/crofgames" align="center">
            CrOfGames
            </a>  & <a target="_blank" href="https://vk.com/swanflow" align="center">
            Swanflow
            </a>
            </Div>
            </Panel>



            <Panel id="ListCreatePeaple">
                <PanelHeader
            left={<HeaderButton onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
            >
                    Связь
                </PanelHeader>

            <Group>
                <List>

                <Div>
                    <Cell before={<Avatar
                        src='https://sun4-12.userapi.com/c845520/v845520191/c1cf5/-TbthP8AtzU.jpg'/>}
                        description="Основатель"
                        href='https://vk.com/dantacion'
                        target="_blank"
                        >
                        Даниил Лунюшкин
                    </Cell>
                </Div>
                <Div>
                    <Cell before={<Avatar
                        src='https://sun9-20.userapi.com/c831108/v831108559/194a0c/B0MwkUL5qp0.jpg?ava=1'/>}
                        description="Модератор"
                        href='https://vk.com/tolmachew_9'
                        target="_blank"
                        >
                        Дмитрий Толмачев
                    </Cell>
                </Div>

                <Div>
                    <Cell before={<Avatar
                        src='https://sun9-40.userapi.com/c847122/v847122919/2645d/QzTciW-WZk8.jpg?ava=1'/>}
                        description="Модератор"
                        href='https://vk.com/danil_16s'
                        target="_blank"
                        >
                        Данил Савкин
                    </Cell>
                </Div>

                <Div>
                    <Cell before={<Avatar
                        src='https://sun4-16.userapi.com/c851036/v851036385/11eb87/6NZjCAA9pUc.jpg?ava=1'/>}
                        description="Разработчик/Вопросы"
                        href='https://vk.com/egortimofeevcooper'
                        target="_blank"
                        >
                        Егор Тимофеев
                    </Cell>
                </Div>

                <Div>
                    <Cell before={<Avatar
                        src='https://sun9-44.userapi.com/c850024/v850024594/18a210/EYNpeikl56s.jpg?ava=1'/>}
                        href='https://vk.com/swanflow'
                        target="_blank"
                        >
                        Группа в ВК
                    </Cell>
                </Div>

                </List>
            </Group>

            <Div align="center">
            by <a target="_blank" href="https://vk.com/crofgames" align="center">
            CrOfGames
            </a>  & <a target="_blank" href="https://vk.com/swanflow" align="center">
            Swanflow
            </a>
            </Div>

            </Panel>







            <Panel id="Heads_And_Tails">
                <PanelHeader
                    left={<HeaderButton id="backs1" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
                    >
                    Орёл и Решка
                </PanelHeader>

                <Group align='center'>

                    <Div align='center'>
                        <InfoRow title="Прогресс" align='center'>
                            <Progress id="Prorgs" value={100}/>
                        </InfoRow>

                    </Div>

                    <Div align='center'>
                        <Avatar size={200} id="money" src={OrelAndReshka}/>
                    </Div>


                    <Div align='center'><font id="text" size="5" color="#528bcc" face="Arial"></font></Div>


                    <Div>
                    <Button size="xl" level="1" id="Starting" onClick={this.RandOR}>Подбросить</Button>
                    </Div>

                    <Div>
                    </Div>
                </Group>

                <Button size="xl" level="tertiary" id="Starting" onClick={() => this.OpenNotifi("Как пользоваться?","Просто нажмите на \"Подбросить\".")}>Как пользоваться?</Button>

                <Div align="center">
                by <a target="_blank" href="https://vk.com/crofgames" align="center">
                CrOfGames
                </a>  & <a target="_blank" href="https://vk.com/swanflow" align="center">
                Swanflow
                </a>
                </Div>

            </Panel>




            <Panel id="NumberRandom">
                <PanelHeader
                    left={<HeaderButton id="backs2" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
                    >
                    Случайное число
                </PanelHeader>

                <Group>

                    <Div align='center'>
                        <InfoRow title="Прогресс" align='center'>
                            <Progress id="ProrgsNum" value={100}/>
                        </InfoRow>
                    </Div>
                </Group>

                <p align='center'>
                    <font id="RanNum" size="10" color="#528bcc" face="Arial">0</font>
                </p>

                <Group>
                    <Div align='center' >
                    Введите значения для случайного числа.
                    </Div>

                    <Div style={{display: 'flex'}}>
                    <a>От:
                    <Input onKeyDown={this.closeKeys} status={this.state.ErrorInputIn} id="InNum" type="text" onChange={() => this.OnCheckNum(0)} defaultValue="0" size="l"/>
                    </a>
                    <Div></Div>
                    <a>До:
                    <Input onKeyDown={this.closeKeys} status={this.state.ErrorInputOut} id="OutNum" type="text" onChange={() => this.OnCheckNum(1)} defaultValue="100" size="l"/>
                    </a>
                    </Div>

                    <Div>
                    <Button size="xl" level="1" id="StartingRandom" onClick={this.RandNum}>Генерировать</Button>
                    </Div>

                    <Div>
                    </Div>
                </Group>

                <Button size="xl" level="tertiary" id="Starting" onClick={() => this.OpenNotifi("Как пользоваться?","Выберите диапазон, в пределах которого будет генерироваться число. Далее нужно нажать кнопку \"Генерировать\".")}>Как пользоваться?</Button>

                <Div align="center">
                by <a target="_blank" href="https://vk.com/crofgames" align="center">
                CrOfGames
                </a>  & <a target="_blank" href="https://vk.com/swanflow" align="center">
                Swanflow
                </a>
                </Div>

            </Panel>



            <Panel id="PassGener">
                <PanelHeader
                    left={<HeaderButton id="backs2" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
                    >
                    Пароль
                </PanelHeader>

                <Group>

                    <Div align='center'>
                        <InfoRow title="Прогресс" align='center'>
                            <Progress id="Prorgss" value={100}/>
                        </InfoRow>
                    </Div>
                </Group>

                <Group title="Настройка">

                    <Div>

                    <a>База символов:
                        <FormLayoutGroup>
                        <Radio id="Check"  name="type" defaultChecked="checked" onClick={this.InputEnabled}>От сервиса</Radio>
                        <Radio name="type" onClick={this.InputEnabled}>Пользовательская</Radio>
                        </FormLayoutGroup>
                    </a>

                    <Div>
                    </Div>

                    <a>Количество символов:
                        <Select id="ListSize" placeholder="Выберите количество">
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
                    <Input id="InSumL" onKeyDown={this.closeKeys} type="text" placeholder="xqlNdjcK6s"/>
                    </Div>

                </Group>

                <Group title="Результат">
                        <p align='center'>
                            <font id="RanPass" size="4" color="#FF0000" face="Arial">Awhj123WAQ</font>
                        </p>

                    <Div>
                    <Button size="xl" level="2" id="CopyStr" style={{display: 'none'}} onClick={this.Сopys}>Скопировать</Button>
                    </Div>

                    <Div>
                    <Button size="xl" level="1" id="StartingRandomPass" onClick={this.PassGeneratorUnTimer}>Генерировать</Button>
                    </Div>

                    <Div>
                    </Div>
                </Group>

                <Button size="xl" level="tertiary" id="Starting" onClick={() => this.OpenNotifi("Как пользоваться?","Вы можете выбрать символы, предоставленные сервисом, или ввести свои. Зачем они? Из символов будет генерироваться пароль. Следом вам нужно выбрать количество символов и нажать \"Генерировать\". После генерирования пароля его можно скопировать.")}>Как пользоваться?</Button>

                <Div align="center">
                by <a target="_blank" href="https://vk.com/crofgames" align="center">
                CrOfGames
                </a>  & <a target="_blank" href="https://vk.com/swanflow" align="center">
                Swanflow
                </a>
                </Div>

            </Panel>



            <Panel id="KostiPanel">
                <PanelHeader
                    left={<HeaderButton id="backs2" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
                    >
                    Кости
                </PanelHeader>

                <Group>

                <Div align='center'>
                        <InfoRow title="Прогресс" align='center'>
                            <Progress id="Prorgs" value={100}/>
                        </InfoRow>
                </Div>

                    <Div align='center'>
                    <a id="StatePlayer">Игра не началась.</a>
                    <Div></Div>
                            <Avatar size={175} type="app" id="KosGame" src={KosNoN}/>
                    </Div>
                </Group>

                <Group title="Настройка">
                    <Div>
                    <a>Количество игроков:
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
                    </Div>

                    <Div>
                    <a>Количество костей: {this.state.valueKosti}
                        <Slider id="ListKost"
                        step={1}
                            min={1}
                            max={4}
                            defaultValue={this.state.valueKosti}
                            onChange={valueKosti => this.setState({valueKosti})}
                        />
                        </a>
                    </Div>

                    <Div>
                    <Button size="xl" level="1" id="StartingGame" onClick={this.GameKosti}>Бросить</Button>
                    </Div>

                </Group>

                <Group title="Результат будет тут" id="ListPlayerWins">

                </Group>

                <Button size="xl" level="tertiary" id="Starting" onClick={() => this.OpenNotifi("Как пользоваться?","Тут всё просто. Укажите кол-во игроков. Укажите сколько нужно бросить костей за одного игрока. Нажмите на кнопку \"Бросить\". Бросок за всех игроков производится автоматически. Результат будет показан ниже кнопки \"Бросить\".")}>Как пользоваться? </Button>

                <Div align="center">
                by <a target="_blank" href="https://vk.com/crofgames" align="center">
                CrOfGames
                </a>  & <a target="_blank" href="https://vk.com/swanflow" align="center">
                Swanflow
                </a>
                </Div>

            </Panel>


            <Panel id="StringRandom">
                <PanelHeader
                    left={<HeaderButton id="backs2" onClick={() => this.setState({ activePanel: 'home' })}>{<Icon24Back/>}</HeaderButton>}
                    >
                    Случайное слово
                </PanelHeader>

                <Group>

                    <Div align='center'>
                        <InfoRow title="Прогресс" align='center'>
                            <Progress id="Prorgs" value={100}/>
                        </InfoRow>
                    </Div>
                </Group>

                <p align='center'>
                    <font id="RanStringsdwe" size="5" color="#528bcc" face="Arial">Слово</font>
                </p>

                <Group>

                    <Div align='center' >
                    Введите слова в это поле:
                    <Input onKeyDown={this.closeKeys} id="StringAllInput" type="text" size="l"/>
                    </Div>

                    <Div>
                    <Button size="xl" level="1" id="StartingRandom" onClick={this.StringGenerate}>Начать</Button>
                    </Div>

                    <Div>
                    </Div>
                </Group>

                <Button size="xl" level="tertiary" id="Starting" onClick={() => this.OpenNotifi("Как пользоваться?","Для начала Вы должны ввести в поле слова, из которых нужно выбрать случайное слово. Все слова должны разделяться пробелом. Пример: \"Яблоко Банан Груша\". Вывод: \"Груша\".")}>Как пользоваться?</Button>

                <Div align="center">
                by <a target="_blank" href="https://vk.com/crofgames" align="center">
                CrOfGames
                </a>  & <a target="_blank" href="https://vk.com/swanflow" align="center">
                Swanflow
                </a>
                </Div>

            </Panel>

        </View>
        );
    }


OpenNotifi (titles, messages) {

            this.setState({ notifol:
            <Alert
        actions={[{
          title: 'Ок',
          autoclose: true,
        }]}
        onClose={this.closeNotifi}
      >
        <h2>{titles}</h2>
       <p>{messages}</p>
        </Alert>
        });
    }


   closeNotifi () {
    this.setState({ notifol: null });
  }



        LoadImage()
        {
            let a = parseInt(this.state.LoadImage) + 1;
            this.setState({ LoadImage: a})
            let All = this.state.AllImage;

            document.getElementById("ProgressLoadImg").style='width: ' + Math.round(((a - 1) / All) * 100) + '%;';

            if(!navigator.onLine)
            {
            this.OpenNotifi("Ошибка","У вас нет подключения к интернету. Повторите попытку.");
            this.setState({ activePanel:'offLine' });
            }


            if(All === this.state.LoadImage)
            {
                if(this.state.activePanel === "load_img")
                {
                this.setState({ activePanel: 'home' })
                }
            }
        }



        RandOR(){
        document.getElementById("Starting").style.visibility = 'hidden';
        document.getElementById("backs1").style.visibility = 'hidden';
        let number = 0;
        let tick = 0;

        let pgogr = 0;
        number = Math.round(0 + Math.random() * (100 - 0));


        let timerRD = setInterval(function randomick()
            {
                tick++;
                document.getElementById("Prorgs").style='width: ' + tick * 2 + '%;';
                number = Math.round(0 + Math.random() * (100 - 0));
                if(number % 2){
                    document.getElementById("text").innerHTML="Орёл";
                    document.getElementById("money").src=Orel;
                }
                else{
                    document.getElementById("text").innerHTML="Решка";
                    document.getElementById("money").src=Reshka;
                }

                    if(tick === 50){
                        document.getElementById("Prorgs").style='width: ' + pgogr + 100 + '%;';
                        document.getElementById("Starting").style.visibility = 'visible';
                        document.getElementById("backs1").style.visibility = 'visible';
                        clearInterval(timerRD);
                    }

            }, 50);
    }


    RandNum(){
        let number = 0;
        let tick = 0;

        let InNum = document.getElementById("InNum").value;
        let OutNum = document.getElementById("OutNum").value;

        if(InNum === "")
            {
                this.OpenNotifi("Ошибка","Введите начальное число.");
                return;
            }

        if(OutNum === "")
            {
                this.OpenNotifi("Ошибка","Введите конечное число.");
                return;
            }

        if(parseInt(InNum) === parseInt(OutNum))
            {
                this.OpenNotifi("Ошибка","Введите разные числа.");
                return;
            }

        if(InNum === OutNum)
            {
                this.OpenNotifi("Ошибка","Введите разные числа.");
                return;
            }

        if(parseInt(InNum) >= parseInt(OutNum))
            {
                this.OpenNotifi("Ошибка","Начальное число не может быть больше конечного.");
                return;
            }

        if(this.state.ErrorInputIn === 'error' || this.state.ErrorInputOut  === 'error')
        {
            this.OpenNotifi("Ошибка","В полях введены не числа.");
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
                document.getElementById("InputEn").style.display = '';
            }
        }





        GameKosti()
        {
            let idPlay = document.getElementById("ListPlayer").options[document.getElementById("ListPlayer").selectedIndex].value;
            let sizePlay = idPlay.slice(idPlay.length - 1,idPlay.length);

            let sizeKost = parseInt(this.state.valueKosti);


                let tick = 0;
                let number = 0;

                let Players = [];
                let PlayersID = [];
                let player = 1;
                let pgogr = 0;

                let tickKos = 0;

                    document.getElementById("ListPlayerWins").innerHTML="";

                document.getElementById("StartingGame").style.visibility = 'hidden';
                document.getElementById("backs2").style.visibility = 'hidden';



                let timerOneGame = setInterval(function randomick()
                {
                    tick++;
                    tickKos++;

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

                    if(sizeKost === 1)
                    {
                        pgogr = ((tick / (20 * sizePlay)) * 100);
                        document.getElementById("Prorgs").style='width: ' + pgogr + '%;';

                        if(tick % 20 === 0)
                        {
                        Players[player - 1] = number;
                        PlayersID[player - 1] = 1;

                        var picHolder = document.getElementById("ListPlayerWins");
                        document.getElementById("ListPlayerWins").title="Результат";
                        var img = document.createElement("div");
                        img.innerHTML = "<div class=\"Group Group--android\" align=\"center\"><div class=\"Header Header--android Header--level-secondary\"><div class=\"Header__in\"><div class=\"Header__content\">" + player + "-й игрок" + "</div></div></div><div class=\"Group__content\"><div class=\"Div Div--android\"><img style=\"width: 150px; height: 150px; border-radius: 25px;\" class=\"Avatar__img\" src="+ document.getElementById("KosGame").src +" /></div></div></div>";
                        picHolder.appendChild(img);

                        player++;
                        }

                        if(tick === 20 * sizePlay){
                        player = 0;
                        document.getElementById("StartingGame").style.visibility = 'visible';
                        document.getElementById("backs2").style.visibility = 'visible';

                        document.getElementById("Prorgs").style='width: ' + 100 + '%;';


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


                        if(Pl.length >= 2)
                        {
                            let str = "Ничья между: "
                            if(Pl.length === 2)
                            {
                                str = str + " " + Pl[0] + "-м и " + Pl[1] + "-м";
                            }

                            if(Pl.length > 2)
                            {

                                for (let i = 0; i < Pl.length; ++i) {
                                    if(i === 0)
                                    {
                                        str = str + " " + Pl[i] + "-м";
                                    }
                                    if(i > 0)
                                    {
                                        str = str + ", " + Pl[i] + "-м";
                                    }
                                }

                            }
                                document.getElementById("StatePlayer").innerHTML= str + " игроком";
                        }

                        clearInterval(timerOneGame);
                    }

                    }
                    else
                    {

                        pgogr = ((tick / (20 * sizePlay)) * 100);
                        document.getElementById("Prorgs").style='width: ' + pgogr + '%;';

                        if(tick % 20 === 1)
                        {

                        var picHolder = document.getElementById("ListPlayerWins");
                        var img = document.createElement("div");
                        img.innerHTML = "<div class=\"Group Group--android\" align=\"center\"><div class=\"Header Header--android Header--level-secondary\"><div class=\"Header__in\"><div class=\"Header__content\">" + player + "-й игрок" + "</div></div></div><div id=\"images_player_" + player +"\" class=\"Group__content\"><div class=\"Div Div--android\" align=\"center\"></div></div></div>";
                        picHolder.appendChild(img);
                        }

                        if (tickKos % Math.floor(20 / sizeKost) === 0)
                        {
                            if(isNaN(Players[player - 1]))
                            {
                                Players[player - 1] = 0;
                            }


                            Players[player - 1] = parseInt(Players[player - 1]) + number;

                            var picHolder = document.getElementById("images_player_" + player);
                            var img = document.createElement("div");
                            img.style="display: inline-block";
                            img.innerHTML = "<img style=\"width: " + (150 - (25 * (sizeKost -1))) + "px; height: " + (150 - (25 * (sizeKost -1))) + "px; border-radius: " + (25 - (3 * (sizeKost -1))) + "px; margin: 3px;\" class=\"Avatar__img\" src="+ document.getElementById("KosGame").src +" />";
                            picHolder.appendChild(img);
                        }

                        if(tick % 20 === 0)
                        {
                            tickKos = 0;

                            player++;
                        }


                        if(tick === 20 * sizePlay){
                        player = 0;
                        document.getElementById("StartingGame").style.visibility = 'visible';
                        document.getElementById("backs2").style.visibility = 'visible';

                        document.getElementById("Prorgs").style='width: ' + 100 + '%;';


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


                        if(Pl.length >= 2)
                        {
                            let str = "Ничья между: "
                            if(Pl.length === 2)
                            {
                                str = str + " " + Pl[0] + "-м и " + Pl[1] + "-м";
                            }

                            if(Pl.length > 2)
                            {

                                for (let i = 0; i < Pl.length; ++i) {
                                    if(i === 0)
                                    {
                                        str = str + " " + Pl[i] + "-м";
                                    }
                                    if(i > 0)
                                    {
                                        str = str + ", " + Pl[i] + "-м";
                                    }
                                }

                            }
                                document.getElementById("StatePlayer").innerHTML= str + " игроком";
                        }

                        clearInterval(timerOneGame);
                    }

                    }

                }, 50);

        }

        PassGeneratorUnTimer()
        {
            document.getElementById("CopyStr").style.display = 'none';

            let idList = document.getElementById("ListSize").options[document.getElementById("ListSize").selectedIndex].value
            let SizePass = 0;
            let InSumL = document.getElementById("InSumL").value;
            let tick= 0;
            let pgogr=0;

            if(document.getElementById("Check").checked)
            {
                InSumL = this.state.DefSumbol;
            }

            if(InSumL === "")
            {
                this.OpenNotifi("Ошибка","Введите символы их которых будет генерироваться пароль.");
                return;
            }

            if(InSumL.length < 8)
            {
                this.OpenNotifi("Ошибка","Введите как минимум 8 символов для генерации пароля.");
                return;
            }

        let STR_La = InSumL.match(/&#\d/) || []
        if(STR_La.length){
          this.OpenNotifi("Ошибка","Нельзя писать служебные сообщения. \"&#Numbers\"");
          return;
        }

        let STR_uni = InSumL.match(/\\u/) || []
        if(STR_uni.length){
          this.OpenNotifi("Ошибка","Нельзя писать служебные сообщения. \"\\u...\"");
          return;
        }

        let STR_Emoji_emoji_pack = InSumL.match(/😀|😃|😄|😁|😅|😆|😂|🤣|😉|😊|☺|🙂|🙃|😇|😗|😙|😚|😘|😍|🥰|🤩|🤗|😋|😜|🤪|😛|😝|🤑|🤭|🤐|🤫|😶|🤔|🤨|🧐|😐|😑|🙄|😬|🤥|😏|😌|🤤|😴|🤓|😎|🥳|🤠|😒|😔|😪|😕|😟|🙁|☹|😮|😯|😲|😳|🥺|😦|😧|😨|😰|😥|😢|😱|😭|😖|😣|😞|😓|😩|😫|😷|🤒|🤕|🤢|🤮|🤧|🥶|🥵|🥴|😵|🤯|😤|😠|😡|🤬|😈|👿|💀|☠|💩|🤡|👹|👺|👻|👽|👾|🤖|😺|😸|😹|😻|😼|😽|🙀|😿|😾|🙈|🙉|🙊/g) || []

        if(STR_Emoji_emoji_pack.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack + "\".");
          return;
        }

        let STR_Emoji_emoji_pack2 = InSumL.match(/👍|🏻|👎|🏻|👌|🏻|✌|🏻|🤞|🏻|🤟|🏻|🤘|🏻|🤙|🏻|🖕|🏻|✊|🏻|👊|🏻|🤛|🏻|🤜|🏻|👈|🏻|👉|🏻|👆|🏻|👇|🏻|☝|🏻|👋|🏻|🤚|🏻|🖐|🏻|✋|🏻|🖖|🏻|👏|🏻|🙌|🏻|👐|🏻|🤲|🏻|🤝|🏻|🙏|🏻|💪|🏻|🦵|🏻|🦶|🏻|👂|🏻|👃|🏻|🧠|🦷|🦴|👀|👁|👅|👄|✍|🏻|💅|🏻|🤳|👫|👭|👬|👩‍❤‍💋‍👨|👨‍❤‍💋‍👨|👩‍❤‍💋‍👩|👩‍❤‍👨|👨‍❤‍👨|👩‍❤‍👩|👪|👶|🧒|👦|👧|🧑|👱|👨|🧔|👱‍♂|👨‍🦰|👨‍🦱|👨‍🦳|👨‍🦲|👩|👱‍♀|👩‍🦰|👩‍🦱|👩‍🦳|👩‍🦲|🧓|👴|👵|🙍‍♂|🙍‍♀|🙎‍♂|🙎‍♀|🙅‍♂|🙅‍♀|🙆‍♂|🙆‍♀|💁‍♂|💁‍♀|🙋‍♂|🙋‍♀|🙇‍♂|🙇‍♀|🤦‍♂|🤦‍♀|🤷‍♂|🤷‍♀|💆‍♂|💆‍♀|💇‍♂|💇‍♀|🚶‍♂|🚶‍♀|🏃‍♂|🏃‍♀|💃|🕺|🕴|👯‍♂|👯‍♀|🧖‍♂|🧖‍♀|👼|🎅|🤶|🦸‍♂|🦸‍♀|🦹‍♂|🦹‍♀|🧙‍♂|🧙‍♀|🧚‍♂|🧚‍♀|🧛‍♂|🧛‍♀|🧜‍♂|🧜‍♀|🧝‍♂|🧝‍♀|🧞‍♂|🧞‍♀|🧟‍♂|🧟‍♀|👨‍⚕|👩‍⚕|👨‍🎓|👩‍🎓|👨‍🏫|👩‍🏫|👨‍⚖|👩‍⚖|👨‍🌾|👩‍🌾|👨‍🍳|👩‍🍳|👨‍🔧|👨‍🏭|👩‍🔧|👩‍🏭|👨‍💼|👩‍💼|👨‍🔬|👩‍🔬|👨‍💻|👩‍💻|👨‍🎤|👩‍🎤|👨‍🎨|👩‍🎨|👨‍✈|👩‍✈|👨‍🚀|👩‍🚀|👨‍🚒|👩‍🚒|👮‍♂|👮‍♀|🕵‍♂|🕵‍♀|💂‍♂|💂‍♀|👷‍♂|👷‍♀|🤴|👳‍♂|👸|👳‍♀|👲|🧕|🤵|👰|🤰|🤱|🛀|🛌/g) || []

        if(STR_Emoji_emoji_pack2.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack2 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack3 = InSumL.match(/💋|❤|💔|❣|💘|💝|💖|💗|💓|💞|💕|💟|💜|🧡|💛|💙|💚|🖤|💯|💢|💥|🕳|💫|💣|💬|👁‍🗨|🗨|🗯|💭|💤|🗣|👤|👥|👣|🔇|🔊|📢|📣|🔔|🔕|🎼|🎶|⚠|☢|🚸|☣|🆚|🆕|🚮|🚾|🚭|♻|⚕|🔱|‼|⁉|❓|❗|⛔|🚫|🚳|🚯|🚱|🚷|📵|🔞/g) || []

        if(STR_Emoji_emoji_pack3.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack3 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack4 = InSumL.match(/🐵|🐒|🦍|🐶|🐕|🐩|🐺|🦊|🦝|🐱|🐈|🦁|🐯|🐅|🐆|🐴|🐎|🦄|🦓|🦌|🐮|🐂|🐃|🐄|🐷|🐽|🐖|🐗|🐏|🐑|🐀|🐹|🐰|🐇|🐿|🦔|🦇|🐻|🐨|🐼|🦘|🦡|🐾|🦃|🐔|🐓|🐣|🐤|🐥|🐦|🐧|🦅|🕊|🦆|🦢|🦉|🦚|🦜|🐸|🐊|🐢|🦎|🐍|🐲|🐉|🦕|🦖|🐳|🐋|🐬|🐟|🐠|🐡|🦈|🐙|🦀|🦞|🦐|🦑|🐚|🐌|🦋|🐛|🐜|🐝|🐞|🦗|🕷|🕸|🦂|🦟|🦠|🌸|💐|💮|🏵|🌹|🥀|🌺|🌻|🌼|🌷|🌳|🌲|🎄|🌴|🌵|🌾|🌱|🌿|☘|🍀|🍁|🍂|🍃|🌑|🌒|🌓|🌔|🌕|🌖|🌗|🌘|🌙|🌚|🌛|🌜|🌡|☀|🌝|🌞|⭐|🌟|🌠|☁|⛅|⛈|🌤|🌥|🌦|🌧|🌨|🌩|🌪|🌫|🌬|💨|🌀|🌈|🌂|☂|⛱|☔|⚡|❄|☃|⛄|☄|🔥|💦|💧|🌊/g) || []
        
        if(STR_Emoji_emoji_pack4.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack4 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack5 = InSumL.match(/🍏|🍎|🍐|🍅|🥝|🍑|🍒|🍓|🍇|🍈|🍉|🍊|🍋|🍌|🍍|🥭|🥥|🥑|🍆|🥔|🥕|🌽|🌶|🥬|🥒|🥦|🍄|🥜|🌰|🍞|🥐|🥖|🥨|🥯|🥞|🧀|🍖|🍗|🥩|🥓|🍔|🍟|🍕|🌭|🥪|🌮|🌯|🥙|🥚|🍳|🥘|🍲|🥣|🥗|🍿|🧂|🥫|🍱|🍘|🍙|🍚|🍛|🍜|🍝|🍠|🍢|🍣|🍤|🍥|🥮|🍡|🥟|🥠|🥡|🍦|🍧|🍨|🍩|🍪|🎂|🍰|🧁|🥧|🍫|🍬|🍭|🍮|🍯|🍼|🥛|☕|🍵|🍶|🍾|🍷|🍸|🍹|🍻|🍺|🥂|🥃|🥤|🥢|🍽|🍴|🥄/g) || []

        if(STR_Emoji_emoji_pack5.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack5 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack6 = InSumL.match(/⚽|⚾|🥎|🏀|🏐|🏈|🏉|🎾|🥏|🎳|🏏|🏒|🏑|🥍|🏓|🏸|🥊|🥋|🥅|⛳|⛸|🎣|🎽|🛹|🎿|🛷|🥌|🎯|🎱|🎮|🕹|🎰|🎲|🧩|♟|🧗‍♂|🧗‍♀|🤺|🏇|⛷|🏂|🏌‍♂|🏌‍♀|🏄‍♂|🏄‍♀|🚣‍♂|🚣‍♀|🏊‍♂|🏊‍♀|⛹‍♂|⛹‍♀|🏋‍♂|🏋‍♀|🚴‍♂|🚴‍♀|🚵‍♂|🚵‍♀|🤸|🤼‍♂|🤼‍♀|🤽‍♂|🤽‍♀|🤾‍♂|🤾‍♀|🤹‍♂|🤹‍♀|🧘‍♂|🧘‍♀|🎖|🏆|🏅|🥇|🥈|🥉/g) || []

        if(STR_Emoji_emoji_pack6.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack6 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack7 = InSumL.match(/🚂|🚃|🚄|🚅|🚆|🚈|🚇|🚉|🚝|🚊|🚞|🚋|🚌|🚎|🚍|🚐|🚑|🚒|🚓|🚔|🚕|🚖|🚗|🚘|🚙|🚚|🚛|🚜|🏎|🏍|🛵|🚲|🛴|🚏|🛣|🛤|🛢|⛽|🚨|🚥|🛑|🚦|🚧|⚓|⛵|🛶|🛳|🚤|⛴|🛥|🚢|✈|🛩|🛫|🛬|💺|🚁|🚟|🚠|🚡|🛰|🚀|🛸|🌍|🌎|🌏|🌐|🗺|🗾|🧭|🏔|⛰|🌋|🗻|🏕|🏖|🏜|🏝|🏞|🏟|🏛|🏗|🧱|🏘|🏚|🏠|🏡|🏢|🏣|🏤|🏥|🏦|🏨|🏩|🏪|🏫|🏬|🏭|🏯|🏰|💒|🗼|⛪|🗽|🕌|🕍|⛩|🕋|⛲|⛺|🌁|🌃|🏙|🌄|🌆|🌅|🌇|🌉|♨|🌌|🎠|🎡|🎢|💈|🎪/g) || []

        if(STR_Emoji_emoji_pack7.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack7 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack8 = InSumL.match(/🎙|🎚|🎛|🎤|🎧|📻|🎷|🎸|🎹|🎺|🎻|🥁|📯|🎭|🖼|🎨|🧵|🔮|🧶|🧿|🧸|🃏|🎴|🀄|🎃|🎆|🎇|🧨|✨|🎈|🎉|🎊|🎋|🎍|🎎|🎏|🎐|🎑|🧧|🎀|🎁|🎗|🎟|🎫|🛎|🧳|⌛|⏳|⌚|⏰|⏱|⏲|🕰|👓|🕶|🥽|🥼|👔|👕|👖|🧣|🧤|🧦|🧥|👗|👘|👙|👚|👛|👜|👝|🛍|🎒|👞|👟|🥾|🥿|👠|👡|👢|👑|👒|🎩|🎓|🧢|⛑|📿|💄|💍|💎|📱|📲|☎|📞|📟|📠|🔋|🔌|💻|🖥|🖨|⌨|🖱|🖲|💽|💾|💿|📀|🧮|🎥|🎞|📽|🎬|📺|📷|📸|📹|📼|🔍|🔎|🕯|💡|🔦|🏮|📔|📕|📖|📗|📘|📙|📚|📓|📃|📒|📜|📄|📰|🗞|📑|🔖|🏷|💰|💴|💵|💶|💷|💸|💳|🧾|💹|💱|💲|✉|💌|📧|📨|📩|📤|📥|📦|📫|📪|📬|📭|📮|🗳|✒|🖋|🖊|🖌|🖍|📝|📁|💼|📂|📅|🗂|📆|🗒|🗓|📇|📈|📉|📊|📋|📌|📍|📎|🖇|📏|📐|✂|🗃|🗄|🗑|🔒|🔓|🔏|🔐|🔑|🗝|🔨|⛏|⚒|🛠|🗡|⚔|🔪|🔫|🏹|🛡|🔧|🔩|⚙|🗜|⚖|🔗|⛓|🧰|🚪|🧲|⚗|🧪|🧫|🧬|🔬|🔭|📡|💉|💊|🛏|🛋|🚽|🚿|🛁|🧴|🧷|🧹|🧺|🧻|🧼|🧽|🧯|🛒|🚬|⚰|⚱|🏺|🗿/g) || []

        if(STR_Emoji_emoji_pack8.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack8 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack9 = InSumL.match(/🏁|🚩|🎌|🏴|🏳|🏳‍🌈|🏴‍☠/g) || []

        if(STR_Emoji_emoji_pack9.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack9 + "\".");
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
                this.OpenNotifi("Ошибка","Выберите кол-во символов пароля.");
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

                pgogr = tick / (SizePass * 10) * 100;
                document.getElementById("Prorgss").style='width: ' + Math.round(pgogr) + '%;';

                if(!(tick % 10)){
                    tick10++;
                }
                defnum = Math.round((Math.random() * (InSumL.length - 1)));
                Password = Password.substr(0, tick10) + InSumL[defnum] + Password.substr(tick10 + 1);
                document.getElementById("RanPass").innerHTML=Password;
                if(tick === (SizePass * 10) - 1){
                    clearInterval(timerPASS);
                    document.getElementById("CopyStr").style.display = '';
                    document.getElementById("StartingRandomPass").style.visibility = 'visible';
                    document.getElementById("backs2").style.visibility = 'visible';
                    document.getElementById("Prorgss").style='width: ' + 100 + '%;';
                }

            }, 30);
        }


        Сopys(){
            let str = "";
            if(document.getElementById("RanPass") != null){
                str = document.getElementById("RanPass").innerHTML;

            }

            const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected =
          document.getSelection().rangeCount > 0
              ? document.getSelection().getRangeAt(0)
              : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);

                document.getElementById("CopyStr").style.display = 'none';
      }
        }


        StringGenerate()
        {
            let StringAllInput = "Det " + document.getElementById("StringAllInput").value + " Def";
            let All_Sumb = 0;
            let defRendSrt = 0;
            let tick = 0;
            let pos = 0;
      let test = 0;

            let pgogr = 0;

            if(StringAllInput.length === 8)
            {
                this.OpenNotifi("Ошибка","Введите слова, из которых будет выбрано случайное.");
                return;
            }

            if(StringAllInput.slice(4, 5) === " "){
                this.OpenNotifi("Ошибка","Уберите в начале пробел.");
                return;
            }

            let STR_La = StringAllInput.match(/&#\d/) || []
            if(STR_La.length){
                this.OpenNotifi("Ошибка","Нельзя писать служебные сообщения. \"&#Numbers\"");
                return;
            }

        let STR_uni = StringAllInput.match(/\\u/) || []
        if(STR_uni.length){
          this.OpenNotifi("Ошибка","Нельзя писать служебные сообщения. \"\\u...\"");
          return;
        }

        let STR_Emoji_emoji_pack = StringAllInput.match(/😀|😃|😄|😁|😅|😆|😂|🤣|😉|😊|☺|🙂|🙃|😇|😗|😙|😚|😘|😍|🥰|🤩|🤗|😋|😜|🤪|😛|😝|🤑|🤭|🤐|🤫|😶|🤔|🤨|🧐|😐|😑|🙄|😬|🤥|😏|😌|🤤|😴|🤓|😎|🥳|🤠|😒|😔|😪|😕|😟|🙁|☹|😮|😯|😲|😳|🥺|😦|😧|😨|😰|😥|😢|😱|😭|😖|😣|😞|😓|😩|😫|😷|🤒|🤕|🤢|🤮|🤧|🥶|🥵|🥴|😵|🤯|😤|😠|😡|🤬|😈|👿|💀|☠|💩|🤡|👹|👺|👻|👽|👾|🤖|😺|😸|😹|😻|😼|😽|🙀|😿|😾|🙈|🙉|🙊/g) || []

        if(STR_Emoji_emoji_pack.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack + "\".");
          return;
        }

        let STR_Emoji_emoji_pack2 = StringAllInput.match(/👍|🏻|👎|🏻|👌|🏻|✌|🏻|🤞|🏻|🤟|🏻|🤘|🏻|🤙|🏻|🖕|🏻|✊|🏻|👊|🏻|🤛|🏻|🤜|🏻|👈|🏻|👉|🏻|👆|🏻|👇|🏻|☝|🏻|👋|🏻|🤚|🏻|🖐|🏻|✋|🏻|🖖|🏻|👏|🏻|🙌|🏻|👐|🏻|🤲|🏻|🤝|🏻|🙏|🏻|💪|🏻|🦵|🏻|🦶|🏻|👂|🏻|👃|🏻|🧠|🦷|🦴|👀|👁|👅|👄|✍|🏻|💅|🏻|🤳|👫|👭|👬|👩‍❤‍💋‍👨|👨‍❤‍💋‍👨|👩‍❤‍💋‍👩|👩‍❤‍👨|👨‍❤‍👨|👩‍❤‍👩|👪|👶|🧒|👦|👧|🧑|👱|👨|🧔|👱‍♂|👨‍🦰|👨‍🦱|👨‍🦳|👨‍🦲|👩|👱‍♀|👩‍🦰|👩‍🦱|👩‍🦳|👩‍🦲|🧓|👴|👵|🙍‍♂|🙍‍♀|🙎‍♂|🙎‍♀|🙅‍♂|🙅‍♀|🙆‍♂|🙆‍♀|💁‍♂|💁‍♀|🙋‍♂|🙋‍♀|🙇‍♂|🙇‍♀|🤦‍♂|🤦‍♀|🤷‍♂|🤷‍♀|💆‍♂|💆‍♀|💇‍♂|💇‍♀|🚶‍♂|🚶‍♀|🏃‍♂|🏃‍♀|💃|🕺|🕴|👯‍♂|👯‍♀|🧖‍♂|🧖‍♀|👼|🎅|🤶|🦸‍♂|🦸‍♀|🦹‍♂|🦹‍♀|🧙‍♂|🧙‍♀|🧚‍♂|🧚‍♀|🧛‍♂|🧛‍♀|🧜‍♂|🧜‍♀|🧝‍♂|🧝‍♀|🧞‍♂|🧞‍♀|🧟‍♂|🧟‍♀|👨‍⚕|👩‍⚕|👨‍🎓|👩‍🎓|👨‍🏫|👩‍🏫|👨‍⚖|👩‍⚖|👨‍🌾|👩‍🌾|👨‍🍳|👩‍🍳|👨‍🔧|👨‍🏭|👩‍🔧|👩‍🏭|👨‍💼|👩‍💼|👨‍🔬|👩‍🔬|👨‍💻|👩‍💻|👨‍🎤|👩‍🎤|👨‍🎨|👩‍🎨|👨‍✈|👩‍✈|👨‍🚀|👩‍🚀|👨‍🚒|👩‍🚒|👮‍♂|👮‍♀|🕵‍♂|🕵‍♀|💂‍♂|💂‍♀|👷‍♂|👷‍♀|🤴|👳‍♂|👸|👳‍♀|👲|🧕|🤵|👰|🤰|🤱|🛀|🛌/g) || []

        if(STR_Emoji_emoji_pack2.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack2 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack3 = StringAllInput.match(/💋|❤|💔|❣|💘|💝|💖|💗|💓|💞|💕|💟|💜|🧡|💛|💙|💚|🖤|💯|💢|💥|🕳|💫|💣|💬|👁‍🗨|🗨|🗯|💭|💤|🗣|👤|👥|👣|🔇|🔊|📢|📣|🔔|🔕|🎼|🎶|⚠|☢|🚸|☣|🆚|🆕|🚮|🚾|🚭|♻|⚕|🔱|‼|⁉|❓|❗|⛔|🚫|🚳|🚯|🚱|🚷|📵|🔞/g) || []

        if(STR_Emoji_emoji_pack3.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack3 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack4 = StringAllInput.match(/🐵|🐒|🦍|🐶|🐕|🐩|🐺|🦊|🦝|🐱|🐈|🦁|🐯|🐅|🐆|🐴|🐎|🦄|🦓|🦌|🐮|🐂|🐃|🐄|🐷|🐽|🐖|🐗|🐏|🐑|🐀|🐹|🐰|🐇|🐿|🦔|🦇|🐻|🐨|🐼|🦘|🦡|🐾|🦃|🐔|🐓|🐣|🐤|🐥|🐦|🐧|🦅|🕊|🦆|🦢|🦉|🦚|🦜|🐸|🐊|🐢|🦎|🐍|🐲|🐉|🦕|🦖|🐳|🐋|🐬|🐟|🐠|🐡|🦈|🐙|🦀|🦞|🦐|🦑|🐚|🐌|🦋|🐛|🐜|🐝|🐞|🦗|🕷|🕸|🦂|🦟|🦠|🌸|💐|💮|🏵|🌹|🥀|🌺|🌻|🌼|🌷|🌳|🌲|🎄|🌴|🌵|🌾|🌱|🌿|☘|🍀|🍁|🍂|🍃|🌑|🌒|🌓|🌔|🌕|🌖|🌗|🌘|🌙|🌚|🌛|🌜|🌡|☀|🌝|🌞|⭐|🌟|🌠|☁|⛅|⛈|🌤|🌥|🌦|🌧|🌨|🌩|🌪|🌫|🌬|💨|🌀|🌈|🌂|☂|⛱|☔|⚡|❄|☃|⛄|☄|🔥|💦|💧|🌊/g) || []
        
        if(STR_Emoji_emoji_pack4.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack4 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack5 = StringAllInput.match(/🍏|🍎|🍐|🍅|🥝|🍑|🍒|🍓|🍇|🍈|🍉|🍊|🍋|🍌|🍍|🥭|🥥|🥑|🍆|🥔|🥕|🌽|🌶|🥬|🥒|🥦|🍄|🥜|🌰|🍞|🥐|🥖|🥨|🥯|🥞|🧀|🍖|🍗|🥩|🥓|🍔|🍟|🍕|🌭|🥪|🌮|🌯|🥙|🥚|🍳|🥘|🍲|🥣|🥗|🍿|🧂|🥫|🍱|🍘|🍙|🍚|🍛|🍜|🍝|🍠|🍢|🍣|🍤|🍥|🥮|🍡|🥟|🥠|🥡|🍦|🍧|🍨|🍩|🍪|🎂|🍰|🧁|🥧|🍫|🍬|🍭|🍮|🍯|🍼|🥛|☕|🍵|🍶|🍾|🍷|🍸|🍹|🍻|🍺|🥂|🥃|🥤|🥢|🍽|🍴|🥄/g) || []

        if(STR_Emoji_emoji_pack5.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack5 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack6 = StringAllInput.match(/⚽|⚾|🥎|🏀|🏐|🏈|🏉|🎾|🥏|🎳|🏏|🏒|🏑|🥍|🏓|🏸|🥊|🥋|🥅|⛳|⛸|🎣|🎽|🛹|🎿|🛷|🥌|🎯|🎱|🎮|🕹|🎰|🎲|🧩|♟|🧗‍♂|🧗‍♀|🤺|🏇|⛷|🏂|🏌‍♂|🏌‍♀|🏄‍♂|🏄‍♀|🚣‍♂|🚣‍♀|🏊‍♂|🏊‍♀|⛹‍♂|⛹‍♀|🏋‍♂|🏋‍♀|🚴‍♂|🚴‍♀|🚵‍♂|🚵‍♀|🤸|🤼‍♂|🤼‍♀|🤽‍♂|🤽‍♀|🤾‍♂|🤾‍♀|🤹‍♂|🤹‍♀|🧘‍♂|🧘‍♀|🎖|🏆|🏅|🥇|🥈|🥉/g) || []

        if(STR_Emoji_emoji_pack6.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack6 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack7 = StringAllInput.match(/🚂|🚃|🚄|🚅|🚆|🚈|🚇|🚉|🚝|🚊|🚞|🚋|🚌|🚎|🚍|🚐|🚑|🚒|🚓|🚔|🚕|🚖|🚗|🚘|🚙|🚚|🚛|🚜|🏎|🏍|🛵|🚲|🛴|🚏|🛣|🛤|🛢|⛽|🚨|🚥|🛑|🚦|🚧|⚓|⛵|🛶|🛳|🚤|⛴|🛥|🚢|✈|🛩|🛫|🛬|💺|🚁|🚟|🚠|🚡|🛰|🚀|🛸|🌍|🌎|🌏|🌐|🗺|🗾|🧭|🏔|⛰|🌋|🗻|🏕|🏖|🏜|🏝|🏞|🏟|🏛|🏗|🧱|🏘|🏚|🏠|🏡|🏢|🏣|🏤|🏥|🏦|🏨|🏩|🏪|🏫|🏬|🏭|🏯|🏰|💒|🗼|⛪|🗽|🕌|🕍|⛩|🕋|⛲|⛺|🌁|🌃|🏙|🌄|🌆|🌅|🌇|🌉|♨|🌌|🎠|🎡|🎢|💈|🎪/g) || []

        if(STR_Emoji_emoji_pack7.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack7 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack8 = StringAllInput.match(/🎙|🎚|🎛|🎤|🎧|📻|🎷|🎸|🎹|🎺|🎻|🥁|📯|🎭|🖼|🎨|🧵|🔮|🧶|🧿|🧸|🃏|🎴|🀄|🎃|🎆|🎇|🧨|✨|🎈|🎉|🎊|🎋|🎍|🎎|🎏|🎐|🎑|🧧|🎀|🎁|🎗|🎟|🎫|🛎|🧳|⌛|⏳|⌚|⏰|⏱|⏲|🕰|👓|🕶|🥽|🥼|👔|👕|👖|🧣|🧤|🧦|🧥|👗|👘|👙|👚|👛|👜|👝|🛍|🎒|👞|👟|🥾|🥿|👠|👡|👢|👑|👒|🎩|🎓|🧢|⛑|📿|💄|💍|💎|📱|📲|☎|📞|📟|📠|🔋|🔌|💻|🖥|🖨|⌨|🖱|🖲|💽|💾|💿|📀|🧮|🎥|🎞|📽|🎬|📺|📷|📸|📹|📼|🔍|🔎|🕯|💡|🔦|🏮|📔|📕|📖|📗|📘|📙|📚|📓|📃|📒|📜|📄|📰|🗞|📑|🔖|🏷|💰|💴|💵|💶|💷|💸|💳|🧾|💹|💱|💲|✉|💌|📧|📨|📩|📤|📥|📦|📫|📪|📬|📭|📮|🗳|✒|🖋|🖊|🖌|🖍|📝|📁|💼|📂|📅|🗂|📆|🗒|🗓|📇|📈|📉|📊|📋|📌|📍|📎|🖇|📏|📐|✂|🗃|🗄|🗑|🔒|🔓|🔏|🔐|🔑|🗝|🔨|⛏|⚒|🛠|🗡|⚔|🔪|🔫|🏹|🛡|🔧|🔩|⚙|🗜|⚖|🔗|⛓|🧰|🚪|🧲|⚗|🧪|🧫|🧬|🔬|🔭|📡|💉|💊|🛏|🛋|🚽|🚿|🛁|🧴|🧷|🧹|🧺|🧻|🧼|🧽|🧯|🛒|🚬|⚰|⚱|🏺|🗿/g) || []

        if(STR_Emoji_emoji_pack8.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack8 + "\".");
          return;
        }

        let STR_Emoji_emoji_pack9 = StringAllInput.match(/🏁|🚩|🎌|🏴|🏳|🏳‍🌈|🏴‍☠/g) || []

        if(STR_Emoji_emoji_pack9.length){
          this.OpenNotifi("Ошибка", "Незьзя писать смайлы. Уберите данные смайлы: \"" + STR_Emoji_emoji_pack9 + "\".");
          return;
        }


            if(StringAllInput.slice(StringAllInput.length - 5 , StringAllInput.length - 4) === " "){
                StringAllInput = StringAllInput.slice(0, StringAllInput.length - 5) + " Def";
            }

            if(StringAllInput.slice(4 , StringAllInput.length - 4).indexOf(" ") === -1){
                this.OpenNotifi("Ошибка","Вы ввели только одно слово, или не поставили пробел.");
                return;
            }

            for (let i = 0; i < StringAllInput.length; ++i) {

                                if(StringAllInput.slice(i, i + 1) === " ")
                                {
                                    if(StringAllInput.slice(i, i + 1) === StringAllInput.slice(i - 1, i))
                                    {
                                        this.OpenNotifi("Ошибка","Слова должны разделяться одним пробелом.");
                                        return;
                                    }

                                    if(StringAllInput.slice(i, i + 1) === StringAllInput.slice(i + 1, i + 2))
                                    {
                                        this.OpenNotifi("Ошибка","Слова должны разделяться одним пробелом.");
                                        return;
                                    }
                                }

                            }



            document.getElementById("StartingRandom").style.visibility = 'hidden';
            document.getElementById("backs2").style.visibility = 'hidden';

            while ((pos = StringAllInput.indexOf(" ", pos + 1)) !== -1) {
                        All_Sumb++;
                    }


         

              pos = 0;

            let IndexSumbol = 0;
            let StrLast = "";

            let timerStr = setInterval(function randomick()
            {
                tick++;

                pgogr = ((tick / 40) * 100);
                document.getElementById("Prorgs").style='width: ' + pgogr + '%;';

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
                    document.getElementById("Prorgs").style='width: ' + 100 + '%;';
                }

            }, 100);
        }


    OnCheckNum(check)
    {
        let SubmolCheck;
        let Numbers = " -1234567890";

        if(document.getElementById("OutNum") && document.getElementById("InNum"))
        {

            if(check){

                let Str = document.getElementById("OutNum").value;

                if(Str.length > 10)
                {
                    document.getElementById("OutNum").value = Str.slice(0,Str.length - 1);
                    return;
                }

        if(Str[0] === ".")
        {
          this.setState({ErrorInputOut: 'error'});
              return;
        }

                if(isNaN(Str)) {
                    this.setState({ErrorInputOut: 'error'});
                    }
                else {
                this.setState({ErrorInputOut: 'valid'});
                }

            }
            else
            {

                let Str = document.getElementById("InNum").value;

                if(Str.length > 10)
                {
                    document.getElementById("InNum").value = Str.slice(0,Str.length - 1);
                    return;
                }

         if(Str[0] === ".")
        {
          this.setState({ErrorInputIn: 'error'});
              return;
        }

                if(isNaN(Str)) {
                    this.setState({ErrorInputIn: 'error'});
                    }
                else {
                    this.setState({ErrorInputIn: 'valid'});
                }

            }
        }
    }


    VKPayDonate()
    {

        connect.send("VKWebAppOpenPayForm", {"app_id": 7132676, "action": "transfer-to-user", "params": {"user_id": 137501023}});

    }


    closeKeys = (e) =>
    {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        activeView: state.router.activeView,
        activePanel: state.router.activePanel,
        activeStory: state.router.activeStory,
        panelsHistory: state.router.panelsHistory,
        activeModals: state.router.activeModals,
        popouts: state.router.popouts,
        scrollPosition: state.router.scrollPosition,

        colorScheme: state.vkui.colorScheme
    };
};


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);