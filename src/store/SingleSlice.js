import { createSlice } from "@reduxjs/toolkit";
export const SingleStore = createSlice({
    name: 'SingleStore',
    initialState: {
        data: []
    },
    reducers: {
        StoreData: (state, action) => {
            state.data.push(action.payload)
        },
    }
})
export const { StoreData } = SingleStore.actions
export default SingleStore.reducer