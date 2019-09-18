import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, View, List, Cell, Footer} from '@vkontakte/vkui';
import Icon24Logo from '@vkontakte/icons/dist/24/logo_vk';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Главная</PanelHeader>
		{fetchedUser &&
		<Group title="Привествуем в Swanflow Random">
			<ListItem
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</ListItem>
		</Group>}

		<Group title="Навигация">
			<Div>
				<Button size="xl" level="2" before={<Icon24Logo/>} onClick={ () => this.setState({ activePanel: 'listcontact' }) } >
					Обратная связь
				</Button>
			</Div>
		</Group>


		<View activePanel="listcontact">
  			<Panel id="list">
    			<PanelHeader>
      				Footer
    			</PanelHeader>
    		<Group>
      			<List>
        		<Cell before={<Avatar />}description="Веб-сайт">Команда ВКонтакте</Cell>
        		<Cell before={<Avatar />}description="Музыкант">Robbie Williams</Cell>
        		<Cell before={<Avatar />}description="Издательский дом">ПостНаука</Cell>
      			</List>
    		</Group>
    			<Footer>4 администратора</Footer>
	 		</Panel>
			</View>


	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
