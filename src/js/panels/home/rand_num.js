import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as VK from '../../services/VK';
import {setPage} from "../../store/router/actions";
import {goBack, openPopout, closePopout, openModal} from "../../store/router/actions";
import {Div, Group, PanelHeader, HeaderButton, Alert, Panel, InfoRow, Button, Select, Slider, Avatar, Progress, Input} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';


class NumberRandom extends React.Component {
    state = {
        ErrorInputIn: 'valid',
        ErrorInputOut: 'valid',
        InputOut: '',
        InputIn: ''
    };

    closeKeys = (e) =>
    {
        if (e.keyCode === 13) {
            e.target.blur();
        }
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

    RandNum = () => {
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

    render() {
    const {id, setPage, goBack} = this.props;
    return (
        <Panel id={id}>
            <PanelHeader
                left={<HeaderButton id="backs2" onClick={() => goBack()}>{<Icon24Back/>}</HeaderButton>}
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
    );
    }
}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout
};

export default connect(null, mapDispatchToProps)(NumberRandom);