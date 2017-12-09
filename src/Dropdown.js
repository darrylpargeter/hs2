import React, { Component } from 'react';

export default class Dropdown extends Component {
  componentDidMount() {
    const select = document.querySelector(`.${this.props.type}_select`);
      this.props.opts.forEach((dest, i) => select.options[select.options.length] = new Option(dest, i) );
  }
  render() {
    return (
      <select className={`${this.props.type}_select select`}></select>
    )
  }
}
