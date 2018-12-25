import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getGamesList } from '../actions/gameAction';

class Games extends PureComponent {

	componentDidMount() {
		this.props.getGamesList();
	}

	render() {
		return (
			<div className="games-list"> {this.props.games.map(game =>
				<div className="card game-card" key={game.id}>
					<img alt="Icon" src={game.img} className="card-img-top game-image" />
					<div className="card-body">
						<h5 className="card-title">{game.title}</h5>
						<div>Genre: {game.genre}</div>
						<div>Price: {game.price}</div>
						<div>Author: {game.author}</div>
						<a href="#" className="btn btn-primary">Get more informations</a>
					</div>
				</div>
			)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	games: state.gameReducer.gameItem
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getGamesList
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(Games);
