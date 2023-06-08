import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import getTemperature from "@/utils/getTemperature";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import getCurrentWeather from "@/services/getCurrentWeather";
import getTodayForecast from "@/services/getTodayForecast";
import getWeekForecast from "@/services/getWeekForecast";
import {
    setCurrentMain,
    setCurrentForecasts,
    setWeekForecasts,
} from "@/store/slices/weather";
import { setSection } from "@/store/slices/section";
import iconList from "@/constant/iconList";
import dayjs from "dayjs";

const Container = styled.ul`
    width: 100%;
    height: 100%;
    padding-top: 30px;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    background: #202b3b;
    border-radius: 18px;
    padding: 10px 30px 10px 10px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        background: transparent;
        border: 1px solid #0195ff;
    }
    @media (max-width: 576px) {
        padding: 10px;
        gap: 10px;
    }
`;

const Icon = styled.img`
    width: 100px;
    margin-right: 10px;
    @media (max-width: 576px) {
        width: 80px;
    }
`;

const CityName = styled.h2`
    font-size: 30px;
    @media (max-width: 576px) {
        font-size: 20px;
    }
`;

const Time = styled.span`
    color: #6e7681;
`;

const Temp = styled.div`
    margin-left: auto;
    font-size: 35px;
    @media (max-width: 576px) {
        font-size: 25px;
    }
`;

const Empty = styled.div`
    width: 100%;
    padding: 25px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
`;

const CityList = () => {
    const {
        cities: { dataset },
        settings,
    } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [cityWeatherDataset, setCityWeatherDataset] = useState([]);

    useEffect(() => {
        setCityWeatherDataset([]);
        if (dataset.length) {
            (async () => {
                dataset.map((item) => {
                    getCurrentWeather({
                        lat: item.lat,
                        lon: item.lon,
                    }).then((data) => {
                        setCityWeatherDataset((prev) => [
                            ...prev,
                            {
                                name: `${item.name} ${item.state} ${item.country}`,
                                icon: iconList[data.weather[0].id],
                                time: dayjs(
                                    (data.dt + data.timezone) * 1000
                                ).format("HH:mm"),
                                temp: data.main.temp,
                                lat: item.lat,
                                lon: item.lon,
                            },
                        ]);
                    });
                    return;
                });
            })();
        }
    }, [dataset]);

    const onClickHandler = (coordinate) => async () => {
        dispatch(setSection("weather"));
        const currentMain = await getCurrentWeather(coordinate);
        const currentForecast = await getTodayForecast(coordinate);
        const weekForecasts = await getWeekForecast(coordinate);
        dispatch(setCurrentMain(currentMain));
        dispatch(setCurrentForecasts(currentForecast.list));
        dispatch(setWeekForecasts(weekForecasts.daily));
    };

    return (
        <Container>
            {cityWeatherDataset.length ? (
                cityWeatherDataset.map((item, index) => (
                    <ListItem
                        key={index}
                        onClick={onClickHandler({
                            lat: item.lat,
                            lon: item.lon,
                        })}
                    >
                        <Icon src={item.icon} alt="weather icon" />
                        <div>
                            <CityName>{item.name}</CityName>
                            <Time>{item.time}</Time>
                        </div>
                        <Temp>
                            {getTemperature(item.temp, settings.temperature)}
                        </Temp>
                    </ListItem>
                ))
            ) : (
                <Empty>
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    Nothing has been found!!!
                </Empty>
            )}
        </Container>
    );
};

export default CityList;
