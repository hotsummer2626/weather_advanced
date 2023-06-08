import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: false,
    reducers: {
        setIsMenuShow: (state, action) => action.payload,
    },
});

export const { setIsMenuShow } = menuSlice.actions;
