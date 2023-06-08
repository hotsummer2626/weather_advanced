import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./slices/weather";
import { sectionSlice } from "./slices/section";
import { citiesSlice } from "./slices/cities";
import { settingSlice } from "./slices/setting";
import { menuSlice } from "./slices/menu";

const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer,
        section: sectionSlice.reducer,
        cities: citiesSlice.reducer,
        settings: settingSlice.reducer,
        isMenuShow: menuSlice.reducer,
    },
});

export default store;
