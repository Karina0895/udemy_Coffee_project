import {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../../routes';
import Header from '../header/header';
import Banner from '../head-banner/head-banner'

class App extends Component {
  render() {
     return (
      <Router>
        <Header />
        <Banner />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element}/>
          ))}
        </Routes>
      </Router>
    );
  }
}

export default App;
