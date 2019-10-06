import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader} from "@vkontakte/vkui"
import Icon24Users from '@vkontakte/icons/dist/24/users';
import OrelAndReshkaIC from '@vkontakte/icons/dist/24/money_circle';
import NumIC from '@vkontakte/icons/dist/24/forward_10';
import StrIC from '@vkontakte/icons/dist/24/more_horizontal';
import PassIC from '@vkontakte/icons/dist/24/privacy';
import KosIC from '@vkontakte/icons/dist/24/services';
import Pay from '@vkontakte/icons/dist/24/money_transfer';

class HomePanelBase extends React.Component {

    state = {
        VisiblePay: 'none'
    };

    VKPayDonate = () =>
    {

        connect.send("VKWebAppOpenPayForm", {"app_id": 7132676, "action": "transfer-to-user", "params": {"user_id": 137501023}});

    }

    render() {
        const {id, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Главная</PanelHeader>

                <Group title="Навигация">

                    <Div>
                        <Button size="xl" level="2" before={<OrelAndReshkaIC/>} stretched={true} onClick={() => setPage('home', 'orelandreshka')}  >
                            Орёл и решка
                        </Button>
                    </Div>

                    <Div>
                        <Button size="xl" level="2" before={<KosIC/>} onClick={ () => setPage('home', 'kos')} >
                            Кости
                        </Button>
                    </Div>

                    <Div>
                        <Button size="xl" level="2" before={<NumIC/>} onClick={ () => setPage('home', 'NumberRandom') } >
                            Случайное число
                        </Button>
                    </Div>

                    <Div>
                        <Button size="xl" level="2" before={<StrIC/>} onClick={ () => setPage('home', 'StringRandom') } >
                            Случайное слово
                        </Button>
                    </Div>

                    <Div>
                        <Button size="xl" level="2" before={<PassIC/>} onClick={ () => setPage('home', 'pass')} >
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
                        <Button size="xl" level="2" before={<Icon24Users/>} onClick={() => setPage('home', 'support')}>
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
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);