import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: false };
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.setState({ toggleOn: !this.state.toggleOn });
  }

  render() {
    const switchOn = this.state.toggleOn;
    const switchStatus = {
      off: 'switch',
      on: 'switch on'
    };
    const sliderStatus = {
      off: 'slider',
      on: 'slider on'
    };
    const switchText = {
      off: 'OFF',
      on: 'ON'
    };

    if (!switchOn) {
      return (
        <div className='switchContainer'>
          <div className={switchStatus.off}>
            <div className={sliderStatus.off} onClick={this.handleSwitch}></div>
          </div>
          <p className='switchStatus'>{switchText.off}</p>
        </div>
      );
    } else {
      return (
        <div className='switchContainer'>
          <div className={switchStatus.on}>
            <div className={sliderStatus.on} onClick={this.handleSwitch}></div>
          </div>
          <p className='switchStatus'>{switchText.on}</p>
        </div>
      );
    }
  }
}
