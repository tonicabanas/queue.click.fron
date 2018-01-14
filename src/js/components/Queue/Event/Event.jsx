import React, {Component} from 'react';
import calculateHeight from '../utils.js';

import './style.scss';

const pixelReference = 10;

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.heightRems = (calculateHeight(this.props.time) / pixelReference).toString().concat('rem');
  }


  render() {
    const styleHeight = {height: this.heightRems};

    return (
      <div className='Event' style={styleHeight}>
        <i className="Event__close fa fa-times" aria-hidden="true"/>
        <span className='Event__start'>
          <span className='Event__start_txt'>start </span>
          <i className="fa fa-play" aria-hidden="true"/>
        </span>
        <h1 className='Event__user'>{this.props.username}</h1>
        <div className='Event__description'>{this.props.description}</div>
        <div className='Event__time'>{this.props.time}<span className='Event__min'> min</span></div>
      </div>
    );
  }
}
