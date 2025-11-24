import { Component } from 'react';
import './footer.scss';
import Navigation from '../navigation/nav';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Navigation />
      </footer>
    );
  }
}

export default Footer;
