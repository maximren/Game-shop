import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setFilter } from '../actions/filterAction';

class Sort extends PureComponent {

  handleMobaClick() {
    this.props.setFilter('moba')
  }

  handleShooterClick() {
    this.props.setFilter('shooter')
  }

  handleRpgClick() {
    this.props.setFilter('rpg')
  }

  render() {
    return (
      <form>
        <label>Sort games by genre</label>
        <button onClick={this.handleMobaClick}>MOBA</button>
        <button onClick={this.handleShooterClick}>Shooter</button>
        <button onClick={this.handleRpgClick}>RPG</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    setFilter
  },
  dispatch
)

export default connect(null, mapDispatchToProps)(Sort);
