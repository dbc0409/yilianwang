import React, { Component } from 'react';
import './ChooseGoods.less';
// import RouterHead from '../RouterHead/RouterHead';
export default class ChooseGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '商品管理-添加商品'
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
