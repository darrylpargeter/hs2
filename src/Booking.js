import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Dropdown from './Dropdown';

import './Booking.css';

import { Socket, trigger } from './socket';

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, loc: null };
    
    this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount() {
  //   trigger((err, res) => this.setState({
  //         redirect: true,
  //         loc: res
  //   }));
  // }
  handleClick() {
    //Socket.emit('info', 'qr');
    //Socket.emit('notify', 'hello from the other side')
  }
  render() {
    return (
      <div className="booking-wrapper">
        <div className="title">Book tickets</div>
        <div className="sep"></div>
        <Dropdown 
          type={'current'}
          opts={
            ['Work', 'Euston', 'Milton Keynes', 'Brimingham', 'Home']
          }
        />
        <Dropdown 
          type={'dest'}
          opts={
            ['Home', 'Euston', 'Milton Keynes', 'Brimingham', 'Work']
          } 
        />

       <input type='button' value="Book Train" className="book" onClick={this.handleClick} />
      </div>
    )
  }
}
