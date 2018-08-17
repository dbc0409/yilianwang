import React, { Component } from 'react';
import './Top.css';
export default class Top extends Component {
  render() {
    return (
      <div className="Top">
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
