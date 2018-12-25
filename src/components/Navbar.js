import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Sort from './Sort';
import '../App.css'

class Navbar extends PureComponent {
	render() {
		return (
			<>
				<Sort />
				<nav>
					<div>
						<ul>
							<li><Link to="/">All Games</Link></li>
							<li><Link to="/topgames">Top Games</Link></li>
						</ul>
					</div>
				</nav>
			</>
		)
	}
}

export default Navbar;
