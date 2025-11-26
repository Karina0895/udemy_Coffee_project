import { Component } from 'react';
import products from '../../products';
import ProductCard from '../product-card/product-card';
import AboutUsInner from '../about-us-inner/about-us-inner';
import imageAbout from '../../images/for-pleasure-about.png'

class ForPleasurePage extends Component {
    render() {
        return(
            <main className="our-coffee-main">
                <AboutUsInner title="About our goods" imageAbout={imageAbout} imageDescr="Cup of coffee" />
                <section className="products-section" >
                    <div className="container">
                        <div className="products-area">
                            {products.map(item => (
                                <ProductCard key={item.id} item={item}></ProductCard>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        );
    }
};

export default ForPleasurePage;