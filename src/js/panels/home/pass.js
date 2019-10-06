import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as VK from '../../services/VK';
import {setPage} from "../../store/router/actions";
import {goBack, openPopout, closePopout, openModal} from "../../store/router/actions";
import {Div, Group, PanelHeader, HeaderButton, Alert, Panel, InfoRow, Button, Select, Slider, Avatar, Progress, Input, Radio, FormLayoutGroup} from "@vkontakte/vkui";
import Icon24Back from '@vkontakte/icons/dist/24/back';

class Pass extends React.Component {

    state = {
        DefSumbol: 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890qwertyuioplkjhgfdsazxcvbnm'
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

    closeKeys = (e) =>
    {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    }

    InputEnabled = () =>
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

        PassGeneratorUnTimer = () =>
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

    render() {
        const {id, setPage, goBack} = this.props;
        return(
             <Panel id={id}>
                    <PanelHeader
                        left={<HeaderButton id="backs2" onClick={() => goBack()}>{<Icon24Back/>}</HeaderButton>}
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

export default connect(null, mapDispatchToProps)(Pass);