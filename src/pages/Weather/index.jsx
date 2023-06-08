import styled from "styled-components";
import MainConditions from "@/components/MainConditions";
import TodayForecasts from "@/components/TodayForecasts";
import OtherConditions from "@/components/OtherConditions";
import DailyForecast from "@/components/DailyForecast";
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
    @media (max-width: 576px) {
        display: none;
    }
`;

const Weather = () => {
    const {
        weather: { currentMain, currentForecasts, weekForecasts },
    } = useSelector((state) => state);
    const { name, sys, main, weather, wind, visibility } = currentMain;

    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <MainConditions
                    location={`${name || ""} ${sys?.country || ""}`}
                    temp={main?.temp}
                    iconId={weather?.[0]?.id}
                />
                <TodayForecasts list={currentForecasts} size={6} />
                <OtherConditions conditions={{ main, wind, visibility, sys }} />
            </div>
            <RightContent>
                <DailyForecast lists={weekForecasts} size={7} />
            </RightContent>
        </Container>
    );
};

export default Weather;
