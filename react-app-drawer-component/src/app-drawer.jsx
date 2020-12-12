import React from 'react';

const menuLinks = [
  {
    id: 1,
    link: 'About'
  },
  {
    id: 2,
    link: 'Get Started'
  },
  {
    id: 3,
    link: 'Sign In'
  }
];

const listMenuLinks = menuLinks.map(links => {
  return <li key={links.id}>{links.link}</li>;
});

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    if (!this.state.menuOpen) {
      return <i className='fas fa-bars menuBars' onClick={this.handleMenu}></i>;
    } else {
      return (
        <div className='modal'>
          <div className='menu'>
            <h2>Menu</h2>
            <ul onClick={this.handleMenu} className='menuList'>{listMenuLinks}</ul>
          </div>
          <div className='grey-bg' onClick={this.handleMenu}></div>
        </div>
      );
    }
  }
}
