import { createSlice } from "@reduxjs/toolkit";

interface authState {
    user: User | null,
    isLoading: boolean,
}

const initialState: authState = {
    user: null,
    isLoading: true
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})