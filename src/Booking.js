import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Dropdown from './Dropdown';

import './Booking.css';

import { Socket, trigger } from './socket';

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, loc: null };
    trigger((err, res) => this.setState({
      redirect: true,
      loc: res
    }));

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Socket.emit('info', 'info');
    Socket.emit('notify', 'hello from the other side')
  }
  render() {
    if (this.state.redirect) {
      console.log('redirect')
      console.log(this.state.loc);
      const str = `/${this.state.loc}`;
      return <Redirect push to={str} />;
    }
    return (
      <div className="Cool-background booking-wrapper">
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
