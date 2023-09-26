/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Detail extends Component {

    render() {
        let { detail } = this.props
        return (
            < div>
                <h1>{detail.name}</h1>
                <h3>{detail.shortDescription}</h3>
                <h3>${detail.price}</h3>
                <img width="{600}" src={detail.image} />

            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        detail: state.shoe.detail
    }
}
export default connect(mapStateToProps)(Detail)
