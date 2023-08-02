import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: { showModal:{}, currentVisibleModal:{id:"no active modal"}},
    reducers: {
        showModalReducer: (state, action) => {
            const id = action.payload.id
            state.showModal[id] = action.payload.isVisible
            action.payload.isVisible?  
            state.currentVisibleModal.id = id
            : state.currentVisibleModal.id = "no active modal"
        }
    }
})
export const {showModalReducer } = modalSlice.actions
export const showModalState = (state) => state.modal.showModal
export const visibleModalState = (state)=> state.modal.currentVisibleModal.id
export default modalSlice.reducer