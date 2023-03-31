import { createSlice } from '@reduxjs/toolkit'

const autherSlice = createSlice({
    name: 'auther',
    initialState: {
        isauther: false
    },
    reducers: {
        islogin(state) {
            state.isauther = true
        },
        islogaut(state) {
            state.isauther = false
        }
    }
})

export const auther = autherSlice.actions;

export default autherSlice