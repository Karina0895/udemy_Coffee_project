import { Component } from 'react';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';


class HomePage extends Component {
    render() {
        return(
            <main>
                <AboutUs />
                <OurBest />
            </main>
        );
    }
};

export default HomePage; 