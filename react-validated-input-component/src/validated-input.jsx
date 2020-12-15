import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    let icon;
    let error;
    let message;

    if (this.state.input.length === 0) {
      icon = 'fas fa-times icon red';
      error = 'error-message';
      message = 'A password is required.';
    } else if (this.state.input.length < 8) {
      icon = 'fas fa-times icon red';
      error = 'error-message';
      message = 'Your password is too short.';
    } else {
      icon = 'fas fa-check icon green';
    }

    return (
      <div className='container'>
        <div className='password-container'>
          <form>
            <label htmlFor='psw' className='password-label'>Password</label>
            <input type='password' id='psw' name='psw' onChange={this.handlePassword} value={this.state.input}></input>
          </form>
          <i className={icon}></i>
        </div>
        <div className={error}>{message}</div>
      </div>
    );
  }
}
