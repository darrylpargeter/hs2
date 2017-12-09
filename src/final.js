import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import Dropdown from './Dropdown';
//
// import './Booking.css';

import { Socket, trigger } from './socket';

export default class Final extends Component {
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
        <div className="title">Destination</div>
        <div className="sepsmall"></div>
        <img className="arrive" src="smile.png"/>
        <div className="sepsmall"></div>
        <div className="details">You have reached your destination:</div>
        <div className="sepsmall"></div>
        <div className="info highlight">Rate your journey</div>
        <div className="info">1 - 2 - 3 - 4 - 5</div>
      </div>
    )
  }
}
