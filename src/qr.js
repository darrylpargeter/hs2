import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import Dropdown from './Dropdown';
//
// import './Booking.css';

import { Socket, trigger } from './socket';

export default class Qr extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, loc: null };
    trigger((err, res) => this.setState({
      redirect: true,
      loc: res
    }));
    //
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    if (this.state.redirect) {
      console.log('redirect')
      console.log(this.state.loc);
      const str = `/${this.state.loc}`;
      return <Redirect push to={str} />;
    }
    return (
      <div className="">
        <div className="title">Scan Ticket</div>
        <div className="sep"></div>
        <img className="qr" src="qr-large.png"/>
      </div>
    )
  }
}
