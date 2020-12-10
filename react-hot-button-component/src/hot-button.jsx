import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCounter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  }

  render() {
    const clickCounter = this.state.clickCounter;
    const style = ['layer1', 'layer2', 'layer3', 'layer4', 'layer5', 'layer6'];

    if (clickCounter <= 3) {
      return <button onClick={this.handleClick} className={style[0]}>Hot Button</button>;
    } else if (clickCounter <= 6) {
      return <button onClick={this.handleClick} className={style[1]}>Hot Button</button>;
    } else if (clickCounter <= 9) {
      return <button onClick={this.handleClick} className={style[2]}>Hot Button</button>;
    } else if (clickCounter <= 12) {
      return <button onClick={this.handleClick} className={style[3]}>Hot Button</button>;
    } else if (clickCounter <= 15) {
      return <button onClick={this.handleClick} className={style[4]}>Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className={style[5]}>Hot Button</button>;
    }
  }
}
