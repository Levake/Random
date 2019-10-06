import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as VK from '../../services/VK';
import {setPage} from "../../store/router/actions";
import {goBack, openPopout, closePopout, openModal} from "../../store/router/actions";
import {Div, Group, PanelHeader, HeaderButton, Alert, Panel, InfoRow, Button, Select, Slider, Avatar, Progress, Input, Radio, FormLayoutGroup, Cell, List} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';

class Support extends React.Component {

    render() {
        const {id, setPage, goBack} = this.props;
        return(
            <Panel id={id}>
                    <PanelHeader
                left={<HeaderButton onClick={() => goBack()}>{<Icon24Back/>}</HeaderButton>}
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

export default connect(null, mapDispatchToProps)(Support);