import React, {Component} from 'react';

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

  render() {
    return (
      <div className='Clock green'>
        <span>{this.state.date.toLocaleTimeString().substr(0, 5)}</span>
      </div>
    );
  }
}
