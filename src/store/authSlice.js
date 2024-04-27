import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    acitve: false,
    userData: null

}

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        login: (state,action) => {
            state.acitve = true
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.action = false
            state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer