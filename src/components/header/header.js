import { Component } from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            {routes.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.icon && <img src={item.icon} alt="icon" className="app-logo" />}
                  {item.navLabel}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
