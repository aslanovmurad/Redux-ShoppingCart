import { createSlice } from '@reduxjs/toolkit'

const autherCart = createSlice({
    name: 'cart',
    initialState: {
        cardList: [],
        TotalPrice: 0,
        cartShow: false
    },
    reducers: {
        AddToCart(state, action) {
            const Newitem = action.payload

            const exitItem = state.cardList.find((item) => item.id === Newitem.id)
            if (exitItem) {
                exitItem.quentitiy++
                exitItem.TotalPrice += Newitem.price
            } else {
                state.cardList.push({
                    id: Newitem.id,
                    price: Newitem.price,
                    quentitiy: 1,
                    TotalPrice: Newitem.price,
                    name: Newitem.name
                })
                state.TotalPrice++;
            }

        },
        RemoveToCart(state, action) {
            const id = action.payload

            const exsist = state.cardList.find((item) => item.id === id)
            if (exsist.quentitiy === 1) {
                state.cardList = state.cardList.filter((item) => item.id !== id)
                state.TotalPrice--
            } else {
                exsist.quentitiy--
                exsist.TotalPrice -= exsist.price
            }
        },
        setShowCart(state) {
            state.cartShow = !state.cartShow
        }
    }
})

export const cartauther = autherCart.actions;

export default autherCart