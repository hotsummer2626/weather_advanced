import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentMain: {},
    currentForecasts: [],
    weekForecasts: [],
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCurrentMain: (state, action) => {
            state.currentMain = action.payload;
        },
        setCurrentForecasts: (state, action) => {
            state.currentForecasts = action.payload;
        },
        setWeekForecasts: (state, action) => {
            state.weekForecasts = action.payload;
        },
    },
});

export const { setCurrentMain, setCurrentForecasts, setWeekForecasts } =
    weatherSlice.actions;
