import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import Dropdown from './Dropdown';
//
// import './Booking.css';

import { Socket, trigger } from './socket';

export default class Advert extends Component {
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
        <div className="title">Still time</div>
        <div className="sepsmall"></div>
        <img className="clock" src="clock.png"/>
        <div className="sepsmall"></div>
        <div className="details">You still have 24mins until the your train departs, why not grab a bite to eat.</div>
        <div className="sepsmall"></div>
        <div className="info">25% off Cool Brunch:</div>
        <div className="info highlight">4HF7E</div>
        <div className="sepsmall"></div>
        <div className="info">£1 Burger @ McDribbles:</div>
        <div className="info highlight">F8G4R</div>
      </div>
    )
  }
}
