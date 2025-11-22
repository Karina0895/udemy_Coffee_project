import { Component } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../../routes';
import './head-banner.scss';

// Функціональна обгортка передає pathname у клас через props
function BannerWrapper(props) {
  const location = useLocation();
  return <Banner {...props} pathname={location.pathname} />;
}

class Banner extends Component {
  render() {
    const { pathname } = this.props;
    const route = routes.find(r => r.path === pathname);

    return (
      <div
        className="banner"
        style={{ backgroundImage: `url(${route?.bannerImage})` }}
      >
        <h1>{route?.title}</h1>
        {route?.subtitle && <p>{route.subtitle}</p>}
      </div>
    );
  }
}

export default BannerWrapper;
