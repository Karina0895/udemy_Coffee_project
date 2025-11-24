import { Component } from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import './nav.scss';

class Navigation extends Component {
  render() {
    return (
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
    );
  }
}

export default Navigation;
