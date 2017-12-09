import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Booking';
import Info from './Info';
import { notification } from './socket';



export default class App extends Component {
  constructor(props) {
    super(props);
    requestPermission();
    notification((err, res) => {
      notifyMe(res);
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Booking} />
          <Route path='/info' component={Info} />
        </Switch>
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
  navigator.serviceWorker.register('./sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
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
          reg.showNotification(reg.title, {
            body: reg.body,
            vibrate: [200, 100, 200, 100, 200, 100, 200]
          });
        });
      // }
    }
  // }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        // var notification = new Notification("Hi there!");
      }
    });
  }

  // Finally, if the user has denied notifications and you
  // want to be respectful there is no need to bother them any more.
}


