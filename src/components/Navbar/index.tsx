import React from 'react';
import { Header } from 'semantic-ui-react';
import logo from '../../logo.svg';

import './index.less';

interface NavbarProps {
  title?: string
}

const Navbar = ({title}: NavbarProps) => {

  return (
    <div className="navbar">
      <img alt="text" src={logo} />
      { 
        title && 
        <Header size="medium">
          <span dangerouslySetInnerHTML={{__html: title || ''}} />
        </Header>
      }
    </div>
  )

}

export default Navbar;

