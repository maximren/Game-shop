import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Games from './Games';

class Page extends PureComponent {
	render() {
		return (
			<BrowserRouter>
					<Route exact path="/" component={Games} />
			</BrowserRouter>
		)
	}
}

export default Page;
