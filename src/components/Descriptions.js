import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getDescriptions } from '../actions/descriptionAction';

class Descriptions extends PureComponent {
    componentDidMount() {
        this.props.getDescriptions(this.props.match.params.id);
    }

    render() {
        return (
            <>
                <img alt="Icon" src={this.props.description.img} className="game-image" />
                <h5>{this.props.description.title}</h5>
                <div>Genre: {this.props.description.genre}</div>
                <div>Price: {this.props.description.price}</div>
                <div>Descriptions: {this.props.description.description}</div>
                <div>Author: {this.props.description.author}</div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    description: state.descriptionReducer.info
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getDescriptions
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Descriptions);
