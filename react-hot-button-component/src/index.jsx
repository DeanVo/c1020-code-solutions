import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
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

    if (clickCounter <= 3) {
      return <button onClick={this.handleClick} className="layer1">Hot Button</button>;
    } else if (clickCounter <= 6) {
      return <button onClick={this.handleClick} className="layer2">Hot Button</button>;
    } else if (clickCounter <= 9) {
      return <button onClick={this.handleClick} className="layer3">Hot Button</button>;
    } else if (clickCounter <= 12) {
      return <button onClick={this.handleClick} className="layer4">Hot Button</button>;
    } else if (clickCounter <= 15) {
      return <button onClick={this.handleClick} className="layer5">Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className="layer6">Hot Button</button>;
    }
  }
}

ReactDOM.render(
  <HotButton/>,
  document.querySelector('#root')
);
