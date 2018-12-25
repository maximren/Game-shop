import React, { PureComponent } from 'react';

import '../App.css'

class Navbar extends PureComponent {
	render() {
		return (
			<div>
				<form>
					<label>Sort by genre</label>
					<button>MOBA</button>
					<button>Shooter</button>
					<button>RPG</button>
					<button>all</button>
				</form>
			</div>
		)
	}
}

export default Navbar;
