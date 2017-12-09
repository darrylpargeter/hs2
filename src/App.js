import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Booking';
import Info from './Info';
import Advert from './advert';
import Arrive from './arrive';
import Qr from './qr';
import { notification, trigger } from './socket';



export default class App extends Component {
  constructor(props) {
    super(props);
    requestPermission();
    this.state = { redirect: false, loc: null };
    notification((err, res) => {
      notifyMe(res);
    });
    trigger((err, res) => {
      console.log(res);
      this.setState({
      redirect: true,
      loc: res
    })});
  }
  render() {
    console.log(location)  // eslint-disable-line 
    if (this.state.redirect && location.pathname !== `/${this.state.loc}`) { // eslint-disable-line
      const str = `/${this.state.loc}`
      return <Redirect push to={str} />
    }
    return (
      <div className="App">
        <div className="navbar"><div className="navicon">
          <div className="naviconbar"></div>
          <div className="naviconbar"></div>
          <div className="naviconbar"></div>
        </div></div>
        <div className="content Cool-background">
        <Switch>
          <Route exact path='/' component={Booking} />
          <Route path='/info' component={Info} />
          <Route path='/qr' component={Qr} />
          <Route path='/advert' component={Advert} />
          <Route path='/arrive' component={Arrive} />
          <Route path='/null' component={Booking} />
        </Switch>
        </div>
      </div>
    );
  }
}

function requestPermission() {
  if("Notification" in window) {
    Notification.requestPermission();
  }
}

function notifyMe(res) {
  // Let's check if the browser supports notifications
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://evening-temple-59899.herokuapp.com/sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}
  if (!("Notification" in window)) {
    // alert("This browser does not support system notifications");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    // var notification = new Notification(res);
    // try {
      // new Notification(res);
    // } catch (e) {
      // if (e.name == "TypeError") {
        navigator.serviceWorker.ready.then(reg => {
          const d = JSON.parse(res);
          reg.showNotification(d.title, {
            body: d.body,
            vibrate: [200, 100, 200, 100, 200, 100, 200]
          });
        });
      // }
    }
  // }

  // Finally, if the user has denied notifications and you
  // want to be respectful there is no need to bother them any more.
}


