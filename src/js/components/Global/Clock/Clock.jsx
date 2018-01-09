import React, {Component} from 'react';
import moment from 'moment';

import './style.scss';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    //TODO setInterval not working when is assigned to a var
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  formatTime(){
    return moment(this.state.date).format('HH:mm')
  }

  render() {
    return (
      <div className='Clock green'>
        <span>{this.formatTime()}</span>
      </div>
    );
  }
}
