import React, { Component } from 'react';
import './GoodsList.less';
// import RouterHead from '../RouterHead/RouterHead';
export default class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '商品管理-商品列表'
    };
  }
  render() {
    return (
      <div>
        <div className="head">
          {this.state.title}
        </div>
      </div>
    );
  }
}
