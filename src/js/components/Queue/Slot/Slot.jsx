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
      <div className='Slot' style={styleHeight}>
        <button className='Slot__button__add'/>
        <div className='Slot__time'>{this.props.time}<span className='Slot__min'> min</span></div>
      </div>
    );
  }
}
