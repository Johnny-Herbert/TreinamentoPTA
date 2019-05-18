import React, { Component } from 'react';
import './product.css'

class Product extends Component {
    state = { 
        count: 0
     }
    render() { 
        const countStyle = this.state.count ? 'amount-style' : 'amount-style-zero'
        return ( 
            <div className="product">
                <img  className="product-image" alt="product" src={ this.props.image }/>
                <div className="product-info-container">
                    <h3 className="product-name">{ this.props.name }</h3>
                    <p className="product-price">R$ { this.props.price }</p>
                    <p className={ countStyle }>{ this.state.count }</p>
                </div>
                <input className="btn-product" type="submit" value="Add" onClick={ this.add }/>
                <input className="btn-product" type="submit" value="Remove" onClick={ this.remove }/>
            </div>
         );
    }
    add = () => {
        this.setState({count: this.state.count + 1})
    }
    remove = () => {
        this.setState({count: this.state.count - 1})
    }
}
 
export default Product;