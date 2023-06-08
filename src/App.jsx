import React, { useEffect } from "react";
import styled from "styled-components";
import "@/styles/global.less";
import Navbar from "./components/Navbar";
import getCurrentWeather from "./services/getCurrentWeather";
import getTodayForecast from "./services/getTodayForecast";
import getWeekForecast from "./services/getWeekForecast";
import Searchbar from "./components/Searchbar";
import Weather from "./pages/Weather";
import Cities from "./pages/Cities";
import Settings from "./pages/Settings";
import { useSelector, useDispatch } from "react-redux";
import {
    setCurrentMain,
    setCurrentForecasts,
    setWeekForecasts,
} from "./store/slices/weather";

const Container = styled.div`
    background: #0b131e;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: white;
    padding: 20px 50px;
    display: flex;
    gap: 30px;
    @media (max-width: 576px) {
        padding: 20px 10px;
    }
`;

const Content = styled.div`
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const App = () => {
    const { section } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const initialCoordinate = {
                lat: "-33.8698439",
                lon: "151.2082848",
            };
            const currentMain = await getCurrentWeather(initialCoordinate);
            const currentForecast = await getTodayForecast(initialCoordinate);
            const weekForecasts = await getWeekForecast(initialCoordinate);
            dispatch(setCurrentMain(currentMain));
            dispatch(setCurrentForecasts(currentForecast.list));
            dispatch(setWeekForecasts(weekForecasts.daily));
        })();
    }, []);

    return (
        <Container>
            <Navbar />
            <Content>
                <Searchbar />
                {section === "weather" && <Weather />}
                {section === "cities" && <Cities />}
                {section === "settings" && <Settings />}
            </Content>
        </Container>
    );
};

export default App;
