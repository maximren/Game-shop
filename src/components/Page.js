import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Games from './Games';
import TopGames from './TopGames';

class Page extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Games} />
					<Route path="/topgames" component={TopGames} />
				</Switch>
			</div>
		)
	}
}

export default Page;
