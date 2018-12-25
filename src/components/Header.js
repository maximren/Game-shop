import React, { PureComponent } from 'react';

import Navbar from './Navbar';

class Header extends PureComponent {
  render() {
    return (
      <div>
        Header
        <Navbar />
      </div>
    )
  }
}

export default Header
