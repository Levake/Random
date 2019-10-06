import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {goBack, openPopout, closePopout, openModal} from "../../store/router/actions";
import * as VK from '../../services/VK';
import {setPage} from "../../store/router/actions";

import {Div, Group, PanelHeader, HeaderButton, Alert, Panel, InfoRow, Button, Select, Slider, Avatar, Progress} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';
import KosNoN from './texture/kos/kosNoN.png';
import Kos1 from './texture/kos/kos1.png';
import Kos2 from './texture/kos/kos2.png';
import Kos3 from './texture/kos/kos3.png';
import Kos4 from './texture/kos/kos4.png';
import Kos5 from './texture/kos/kos5.png';
import Kos6 from './texture/kos/kos6.png';

class Kos extends React.Component {
    state = {
        valueKosti: 1
    };
    GameKosti = () =>
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

    OpenNotifi (titles, messages) {
            this.props.openPopout(
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
        );
    }


   closeNotifi = () => {
    this.props.closePopout();
  }

   render() {
        const {id, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
                    <PanelHeader
                        left={<HeaderButton id="backs2" onClick={() => goBack()}>{<Icon24Back/>}</HeaderButton>}
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
        );
    }
}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout
};

export default connect(null, mapDispatchToProps)(Kos);