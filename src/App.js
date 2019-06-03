import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchGetComments } from './services/fetchGetComments';
import { ENDPOINT } from "./services/fetchPostComments";

import ShareIdea from "./components/ShareIdea";
import Game from './components/Game';
import Home from './components/Home';

import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [],
			value: ''
		};

		this.handleTextArea = this.handleTextArea.bind(this);
		this.clearTextArea = this.clearTextArea.bind(this);
	}

	componentDidMount() {
		fetchGetComments().then(data => {
			this.setState({ games: data.games });
		});
	}
	
	handleTextArea(event) {
		const inputValue = event.target.value;
		this.setState({
			value: inputValue
		});
	}

	handleButtonClick = () => {
		fetch(
			`${ENDPOINT}?body=${this.state.value}&game_id=${21}&parent_id=6281`,
			{
				method: 'POST'
			}
		).catch(error => console.log(error));
		this.clearTextArea();
	};

	clearTextArea() {
		fetchGetComments().then(data => {
			this.setState({ 
				games: data.games,
				value: ''
			});
		});
	}

	render() {
		const { value, games } = this.state;
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" render={routerProps => (
						<Home />
					)}/>
					)}/>	
					<Route exact path="/game/:id" render={routerProps => (
						<Game 
						games={games}
						value={value}
						handleTextArea={this.handleTextArea}
						handleButtonClick={this.handleButtonClick}
						clearTextArea={this.clearTextArea} />
					)}/>
					<Route exact path="/game/:id/comment" render={routerProps => (
						<ShareIdea
							value={this.state.value}
							handleTextArea={this.handleTextArea}
							handleButtonClick={this.handleButtonClick}
						/>
					)}/>
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
