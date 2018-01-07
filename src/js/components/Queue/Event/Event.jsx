import React, {Component} from 'react';

import './style.scss';

export default class Event extends Component {
  render() {
    return (
      <div className='Event'>
        <h1 className='Event__user'>{this.props.username}</h1>
        <div className='Event__description'>{this.props.description}</div>
      </div>
    );
  }
}
