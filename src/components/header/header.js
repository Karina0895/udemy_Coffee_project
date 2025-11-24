import { Component } from 'react';
import './header.scss';
import Navigation from '../navigation/nav';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navigation />
      </header>
    );
  }
}

export default Header;
