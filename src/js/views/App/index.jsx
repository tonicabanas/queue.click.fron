import React, {Component} from 'react';


import Header from 'components/Global/Header/Header';
import Clock from 'components/Global/Clock/Clock';
import Event from 'components/Queue/Event/Event';

import './style.scss';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Clock/>
        <div className="Events">
          <Event username="acabanas" description="Tomar un cafecito que será un día duro" time="10"/>
          <Event username="dseijo" description="Qué son los services?" time="30"/>
          <Event username="dseijo" description="Qué son los services?" time="100"/>
          <Event username="dseijo" description="Qué son los services?" time="120"/>
          <Event username="dseijo" description="Qué son los services?" time="20"/>
          <Event username="dseijo" description="Qué son los services?" time="40"/>
          <Event username="dseijo" description="Qué son los services?" time="80"/>
          <Event username="dseijo" description="Qué son los services?" time="180"/>
          <Event username="dseijo" description="Qué son los services?" time="30"/>
          <Event username="dseijo" description="Qué son los services?" time="30"/>
          <Event username="dseijo" description="Qué son los services?" time="30"/>
        </div>
      </div>
    );
  }
}
