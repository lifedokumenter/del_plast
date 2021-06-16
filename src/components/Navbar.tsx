import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import logo from '../logo.svg';

import './Navbar.less';

interface NavbarProps {
  title?: string
}

const Navbar = ({title}: NavbarProps) => {

  return (
    <div className="navbar">
      <Menu>
        <Menu.Item
          name='Life'
          onClick={()=>{window.location.href="/"}}
        >
          <img alt="text" src={logo} />
        </Menu.Item>
        { 
          title && 
          <Menu.Item className="navbar-title">
            <Header size='large'>{title}</Header>
          </Menu.Item>
        }
      </Menu>
    </div>
  )

}

export default Navbar;

