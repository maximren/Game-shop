import React, { PureComponent } from 'react';

class Sort extends PureComponent {
  render() {
    return (
        <form>
            <label>Sort games by genre</label>
            <button>MOBA</button>
            <button>Shooter</button>
            <button>RPG</button>
        </form>
    )
  }
}

export default Sort;
