import React, {Component} from 'react';

import './style.scss';
import logo from '../../../../assets/img/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <img className='Header__logo' src={logo} alt='logo'/>
        <div className='timer big'>
        </div>
      </header>
    );
  }
}
