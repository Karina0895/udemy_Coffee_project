import { Component } from 'react';
import './our-best.scss';
import BestBg from '../../images/best-bg.jpg';
import products from '../../products';
import ProductCard from '../product-card/product-card';


class OurBest extends Component {
    render() {

        const selectedIds = [1, 4, 6];
        const selectedProducts = products.filter (item => selectedIds.includes(item.id));
 
        return(
            <section className="our-best" style={{backgroundImage: `url(${BestBg})`}}>
                <div className="container">
                    <h2>Our best</h2>
                    <div className="products-area">
                        {selectedProducts.map(item => (
                            <ProductCard key={item.id} item={item} showCountry={false}></ProductCard>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
};

export default OurBest;