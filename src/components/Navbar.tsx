import React from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../logo.svg';

import './Navbar.less';

const Navbar = () => {

  return (
    <div className="navbar">
      <Menu>
        <Menu.Item
          name='Life'
        >
          <img alt="text" src={logo} />
        </Menu.Item>
      </Menu>
    </div>
  )

}

export default Navbar;

