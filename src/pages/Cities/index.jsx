import styled from "styled-components";
import MainConditions from "@/components/MainConditions";
import TodayForecasts from "@/components/TodayForecasts";
import DailyForecast from "@/components/DailyForecast";
import CityList from "@/components/CityList";
import { useSelector } from "react-redux";

const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 30px;
    flex-grow: 1;
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 576px) {
        display: none;
    }
`;

const Cities = () => {
    const {
        weather: { currentMain, currentForecasts, weekForecasts },
    } = useSelector((state) => state);
    const { name, sys, main, weather } = currentMain;

    return (
        <Container>
            <CityList />
            <RightContent>
                <MainConditions
                    location={`${name || ""} ${sys?.country || ""}`}
                    temp={main?.temp}
                    iconId={weather?.[0]?.id}
                    size="small"
                />
                <TodayForecasts
                    list={currentForecasts}
                    size={3}
                    theme="frame"
                />
                <DailyForecast lists={weekForecasts} size={3} theme="frame" />
            </RightContent>
        </Container>
    );
};

export default Cities;
