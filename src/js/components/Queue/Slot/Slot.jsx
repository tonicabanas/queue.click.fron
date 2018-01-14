import React, {Component} from 'react';
import calculateHeight from '../utils.js';
import Popup from 'react-popup';

import './style.scss';


const pixelReference = 10;


export default class Event extends Component {
  constructor(props) {
    super(props);
    this.heightRems = (calculateHeight(this.props.time) / pixelReference).toString().concat('rem');
  }

  showPopupAdd() {
    Popup.alert('I am alert, nice to meet you');
  }

  render() {
    const styleHeight = {height: this.heightRems};
    return (
      <div onClick={this.showPopupAdd} className='Slot' style={styleHeight}>
        <button className='Slot__button__add'/>
        <div className='Slot__time'>{this.props.time}<span className='Slot__min'> min</span></div>
      </div>
    );
  }
}
