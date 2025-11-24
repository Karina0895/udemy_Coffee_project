import { Component } from 'react';
import './our-best.scss';
import BestBg from '../../images/best-bg.jpg'


class OurBest extends Component {
    render() {
        return(
            <section className="our-best" style={{backgroundImage: `url(${BestBg})`}}>
                <div className="container">
                    <h2>Our best</h2>
                </div>
            </section>
        );
    }
};

export default OurBest;