import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {goBack, openPopout, closePopout, openModal} from "../../store/router/actions";
import * as VK from '../../services/VK';

import {renderGroupsList} from '../../services/renderers';

import {Div, List, Panel, Group, Button, PanelHeader, PanelSpinner, PanelHeaderBack, HeaderButton, InfoRow, Progress, Avatar, Alert} from "@vkontakte/vkui";
import OrelAndReshka from './texture/orelandreshka.png';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Orel from './texture/orel.png';
import Reshka from './texture/reshka.png';

class HomePanelGroups extends React.Component {

    state = {
        groups: {
            notifol: ''
        },
        loading: true,
        errorGetAuthToken: false
    };


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

    RandOR = () => {
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

    render() {
        const {id, goBack} = this.props;

        let adminedGroupsList = renderGroupsList(this.state.groups.admined);
        let otherGroupsList = renderGroupsList(this.state.groups.other);

        return (
            <Panel id={id} poput={this.state.notifol}>
                    <PanelHeader
                        left={<HeaderButton id="backs1" onClick={() => goBack()}>{<Icon24Back/>}</HeaderButton>}
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
        );
    }

}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({goBack, openPopout, closePopout, openModal}, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.vkui.accessToken
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePanelGroups);