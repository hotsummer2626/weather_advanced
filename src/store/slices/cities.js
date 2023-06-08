import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: "cities",
    initialState: {
        dataset: [],
    },
    reducers: {
        setCities: (state, action) => {
            state.dataset = action.payload;
        },
    },
});

export const { setCities } = citiesSlice.actions;
