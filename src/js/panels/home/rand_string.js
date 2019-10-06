import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as VK from '../../services/VK';
import {setPage} from "../../store/router/actions";
import {goBack, openPopout, closePopout, openModal} from "../../store/router/actions";
import {Div, Group, PanelHeader, HeaderButton, Alert, Panel, InfoRow, Button, Select, Slider, Avatar, Progress, Input} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';


class StringRandom extends React.Component {

    StringGenerate = () =>
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

    closeKeys = (e) =>
    {
        if (e.keyCode === 13) {
            e.target.blur();
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

    render() {
        const {id, setPage, goBack} = this.props;
        return (
            <Panel id={id}>
                    <PanelHeader
                        left={<HeaderButton id="backs2" onClick={() => goBack()}>{<Icon24Back/>}</HeaderButton>}
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
        );
    }
}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout
};

export default connect(null, mapDispatchToProps)(StringRandom);