import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getGamesList } from '../actions/gameAction';

class Games extends PureComponent {

	componentDidMount() {
		this.props.getGamesList();
	}

	renderGamesList() {
		let games;
		if(this.props.filter){
			games = this.props.games.filter(game => game.genre === this.props.filter)
		} else {
			games = this.props.games
		}

		return games.map(game =>
			<div className="card game-card" key={game.id}>
				<img alt="Icon" src={game.img} className="card-img-top game-image" />
				<div className="card-body">
					<h5 className="card-title">{game.title}</h5>
					<div>Genre: {game.genre}</div>
					<div>Price: {game.price}</div>
					<div>Author: {game.author}</div>
					<Link to={`/description/${game.id}`} className="btn btn-primary">Get more informations</Link>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="games-list"> 
			{this.renderGamesList()}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	games: state.gameReducer.gameItem,
	filter: state.gameReducer.filter
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getGamesList
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(Games);
