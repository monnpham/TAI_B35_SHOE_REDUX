import { message } from "antd"
import { dataShoe } from "../data/data"
import { BUY_SHOE, PLUS_SHOE, MINUS_SHOE, REMOVE_SHOE, DETAIL_SHOE, } from "./constant"

let initiaState = {
    dataShoe: dataShoe,
    detail: dataShoe[0],
    cart: [],
}

export let shoeReduxReducer = (state = initiaState, action) => {
    switch (action.type) {
        case BUY_SHOE: {
            let cloneCart = [...state.cart]
            var index = cloneCart.findIndex((item) => {
                return item.id === action.payload.id
            })
            if (index === -1) {
                let newShoe = { ...action.payload, soluong: 1 }
                cloneCart.push(newShoe)
            } else {
                cloneCart[index].soluong++
            }
            state.cart = cloneCart
            return { ...state }
        }
        case PLUS_SHOE: {
            let cloneCart = [...state.cart]
            let index = cloneCart.findIndex
                ((item) => item.id === action.payload)
            cloneCart[index].soluong++
            state.cart = cloneCart
            message.success("Thêm thành công")
            return { ...state }
        }
        case MINUS_SHOE: {
            let cloneCart = [...state.cart]
            let index = cloneCart.findIndex
                ((item) => item.id === action.payload)
            if (cloneCart[index].soluong === 1) {
                cloneCart.splice(index, 1)
            } else {
                cloneCart[index].soluong--
            }
            message.success("Xóa thành công")
            state.cart = cloneCart
            return { ...state }
        }
        case REMOVE_SHOE: {
            let cloneCart = [...state.cart]
            let index = cloneCart.findIndex
                ((item) => item.id === action.payload)
            cloneCart.splice(index, 1)
            state.cart = cloneCart
            //thông báo xóa
            message.success("Xóa thành công")
            return { ...state }
        }

        case DETAIL_SHOE: {
            state.detail = action.payload
            return { ...state }
        }


        default: {
            return state
        }
    }
}