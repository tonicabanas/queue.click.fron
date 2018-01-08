import React, {Component} from 'react';

import './style.scss';

const logFactor = 45.166626117938186;
const pixelReference = 10;
const minSize = 115;

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.heightRems = (this.calculateHeight() / pixelReference).toString().concat('rem');
  }

  calculateHeight() {
    return Math.max(minSize, (Math.log2(this.props.time) * logFactor));
  }

  render() {
    const styleHeight = {height: this.heightRems};

    return (
      <div className='Event' style={styleHeight}>
        <h1 className='Event__user'>{this.props.username}</h1>
        <div className='Event__description'>{this.props.description}</div>
        <div className='Event__time'>{this.props.time}<span className='Event__min'> min</span></div>
      </div>
    );
  }
}
