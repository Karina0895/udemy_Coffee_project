import { Component } from 'react';

class ProductCard extends Component {
    render () {
        const { item, showCountry = true } = this.props;

        return (
            <div className="product-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                {showCountry && <p className="country">{item.country}</p>}
                <p className="price">{item.price}$</p>
            </div>
        )
    }
}

export default ProductCard;