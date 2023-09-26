import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../Item/Item'

class List extends Component {
    renderList = () => {
        return this.props.shoeArr.map((item, index) => {
            return <Item
                key={index} item={item} />
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderList()}
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        shoeArr: state.shoe.dataShoe
    }
}

export default connect(mapStateToProps)(List)