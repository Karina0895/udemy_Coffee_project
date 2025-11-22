import routes from '../../routes';
import './head-banner.scss';
import { useLocation } from 'react-router-dom';

function Banner() {
  const { pathname } = useLocation();
  const route = routes.find(r => r.path === pathname);

  return (
    <div className="banner" style={{ backgroundImage: `url(${route.bannerImage})` }}>
      <h1>{route?.title}</h1>
      {route?.subtitle && <p>{route.subtitle}</p>}
    </div>
  );
}


export default Banner;