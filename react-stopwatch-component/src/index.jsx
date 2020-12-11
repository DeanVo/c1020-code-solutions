import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchFaceOn: false,
      stopwatchIconOn: false,
      counter: 0
    };
    this.handleIcon = this.handleIcon.bind(this);
  }

  // handleFace() {
  //   this.setState({ stopwatchFaceOn: true });
  // }

  handleIcon() {
    this.setState({ stopwatchIconOn: !this.state.stopwatchIconOn });
  }

  render() {
    // const swFace = this.state.stopwatchFaceOn;
    const swIcon = this.state.stopwatchIconOn;
    const playStatus = {
      play: 'fas fa-play playIcon',
      pause: 'fas fa-pause pauseIcon'
    };

    if (!swIcon) {
      return (
        <div className='container'>
          <div className='circle'>{this.state.counter}</div>
          <i className={playStatus.play} onClick={this.handleIcon}></i>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='circle'>{this.state.counter}</div>
          <i className={playStatus.pause} onClick={this.handleIcon}></i>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <StopWatch/>,
  document.querySelector('#root')
);
