import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    temperature: "celsius",
    windSpeed: "m/s",
    pressure: "hPa",
    visibility: "m",
};

export const settingSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setSetting: (state, action) => {
            const { settingName, value } = action.payload;
            state[settingName] = value;
        },
    },
});

export const { setSetting } = settingSlice.actions;
