import React, {Component} from 'react';

import './style.scss';
import logo from '../../../../assets/img/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img className='Header__logo' src={logo} alt='logo'/>
        <button className='Header__profile'/>
      </header>
    );
  }
}
