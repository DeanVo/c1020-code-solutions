import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchActive: false,
      counter: 0,
      intervalID: null
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePlay() {
    const stopwatchStatus = this.state.stopwatchActive;
    this.setState({ stopwatchActive: !stopwatchStatus });

    if (!stopwatchStatus) {
      this.setState({
        intervalID: setInterval(() => {
          this.setState({ counter: this.state.counter + 1 });
        }, 1000)
      });
    } else {
      clearInterval(this.state.intervalID);
    }
  }

  handleReset() {
    if (!this.state.stopwatchActive) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    const stopwatchStatus = this.state.stopwatchActive;
    const playStatus = {
      play: 'fas fa-play playIcon',
      pause: 'fas fa-pause pauseIcon'
    };

    if (!stopwatchStatus) {
      return (
        <div className='container'>
          <div className='circle' onClick={this.handleReset}>{this.state.counter}</div>
          <i className={playStatus.play} onClick={this.handlePlay}></i>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div className='circle' onClick={this.handleReset}>{this.state.counter}</div>
          <i className={playStatus.pause} onClick={this.handlePlay}></i>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <StopWatch/>,
  document.querySelector('#root')
);
