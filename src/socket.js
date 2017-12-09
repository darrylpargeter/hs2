import openSocket from 'socket.io-client';
export const Socket = openSocket('https://arcane-cliffs-24318.herokuapp.com/');

export function trigger(cb) {
  Socket.on('info', res => cb(null, res));
}

export function notification(cb) {
  Socket.on('notify', res => cb(null, res));
}
