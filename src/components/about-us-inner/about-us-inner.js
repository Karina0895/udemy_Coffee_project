import {Component} from 'react';
import './about-us-inner.scss'; 

class AboutUsInner extends Component {
    render() {
        const { title, imageAbout, imageDescr } = this.props;
        return (
            <section className="about-us-inner">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="image-area">
                        <img src={imageAbout} alt={imageDescr} />
                        </div>
                        <div className="descr-area">
                            <h2>{title}</h2>
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                            <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUsInner;