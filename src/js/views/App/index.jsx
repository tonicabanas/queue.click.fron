import React, {Component} from 'react';


import Header from 'components/Global/Header/Header';
import Clock from 'components/Global/Clock/Clock';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Clock/>
      </div>
    );
  }
}
