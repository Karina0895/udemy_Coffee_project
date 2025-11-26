import { Component } from 'react';
import products from '../../products'
import SearchPanel from '../search-panel/search-panel';
import ProductCard from '../product-card/product-card';
import AboutUsInner from '../about-us-inner/about-us-inner';
import imageAbout from '../../images/our-coffee-about.png'

class OurCoffeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",            // що ввів користувач
            products: products // імпортований масив
        };
    }

    onUpdateSearch = (value) => {
        this.setState({ term: value });
    }; 

    render() {

        const { term, products } = this.state;
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(term.toLowerCase())
        );
        
        return(
            <main className="our-coffee-main">
                <AboutUsInner title="About our beans" imageAbout={imageAbout} imageDescr="Cozziness with our coffee" />
                <section className="search-filter-section">
                    <div className="container">
                        <SearchPanel onSearch={this.onUpdateSearch}/>
                    </div>
                </section>
                <section className="products-section" >
                    <div className="container">
                        <div className="products-area">
                            {filtered.map(item => (
                                <ProductCard key={item.id} item={item}></ProductCard>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        );
    }
};

export default OurCoffeePage;