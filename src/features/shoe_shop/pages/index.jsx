import React, { Component } from 'react'
import Cart from '../component/Cart/Cart'
import List from '../component/List/List'
import Detail from '../component/Detail/Detail'

export default class Shoe_Shop extends Component {
    render() {
        return (
            <div >
                <h1>Shoe Shop</h1>
                <div className="row">
                    <div className='col-6'>
                        <Cart />
                    </div>
                    <div className='col-6'>
                        <List
                        />
                    </div>
                </div>
                <Detail />


            </div>

        )
    }
}
