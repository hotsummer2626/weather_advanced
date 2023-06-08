import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
    name: "section",
    initialState: "weather",
    reducers: {
        setSection: (state, action) => action.payload,
    },
});

export const { setSection } = sectionSlice.actions;
