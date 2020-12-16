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
    let message;
    let messageDigit;
    let messageCap;
    let messageSpecial;
    const regexrDigit = new RegExp('(?=.*?[0-9])');
    const regexrCapital = new RegExp('(?=.*?[A-Z])');
    const regexrSpecial = new RegExp('(?=.?[!@#$%^&*()])');

    if (this.state.input.length === 0) {
      icon = 'fas fa-times icon red';
      message = 'A password is required.';
    } else if (this.state.input.length < 8) {
      icon = 'fas fa-times icon red';
      message = 'Your password is too short.';
    } else {
      icon = 'fas fa-check icon green';
    }

    if (!regexrDigit.test(this.state.input)) {
      messageDigit = 'You need at least one digit.';
    }

    if (!regexrCapital.test(this.state.input)) {
      messageCap = 'You need at least one capital letter.';
    }

    if (!regexrSpecial.test(this.state.input)) {
      messageSpecial = 'You need at least one special character. (!, @, #, $, %, ^, &, *, (, or ))';
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
        <div className='error-message'>{message}</div>
        <p className='error-message'>
          {messageDigit}<br></br>
          {messageCap}<br></br>
          {messageSpecial}
        </p>
      </div>
    );
  }
}
