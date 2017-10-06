import React, { Component } from 'react';
import ShopView from './ShopView'
import AdminView from './AdminView'
import CartView from './CartView'

class Shop extends Component {
    constructor () {
        super()
        this.state={
            isAdmin: true
        }
    }
    render() {
        return (
            <div className='shop'>
                <div className='products'>
                {this.state.isAdmin ? <AdminView /> : <ShopView /> }
                <ShopView />
                </div>
                <CartView />
            </div>
        );
    }
}

export default Shop;