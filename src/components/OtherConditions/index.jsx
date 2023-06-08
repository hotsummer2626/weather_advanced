import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTemperatureHalf,
    faWind,
    faCloud,
    faDroplet,
    faWarning,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import getTemperature from "@/utils/getTemperature";
import getWindSpeed from "@/utils/getWindSpeed";
import getPressure from "@/utils/getPressure";
import getVisibility from "@/utils/getVisibility";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const Container = styled.div`
    width: 100%;
    background: #202b3b;
    border-radius: 25px;
    padding: 25px;
    flex-grow: 1;
    position: relative;
    @media (max-width: 576px) {
        padding: 15px;
    }
`;

const Title = styled.h3`
    color: #6e7681;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 15px;
    @media (max-width: 576px) {
        margin-bottom: 25px;
    }
`;

const ListWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        row-gap: 40px;
    }
`;

const ListItem = styled.li`
    display: flex;
    gap: 15px;
    color: #6e7681;
`;

const ListItemTitle = styled.h4`
    font-size: 15px;
    @media (max-width: 576px) {
        font-size: 20px;
    }
`;

const ListItemValue = styled.span`
    color: #fff;
    font-size: 28px;
    font-weight: bold;
`;

const OtherConditions = ({ conditions }) => {
    const { settings } = useSelector((state) => state);
    const { main, wind, visibility, sys } = conditions;
    const lists = [
        {
            icon: faTemperatureHalf,
            label: "Real Feel",
            value:
                main && getTemperature(main.feels_like, settings.temperature),
        },
        {
            icon: faWind,
            label: "Wind",
            value: wind ? getWindSpeed(wind.speed, settings.windSpeed) : "",
        },
        {
            icon: faWarning,
            label: "Pressure",
            value: main ? getPressure(main.pressure, settings.pressure) : "",
        },
        {
            icon: faCloud,
            label: "Visibility",
            value: visibility
                ? getVisibility(visibility, settings.visibility)
                : "",
        },
        {
            icon: faDroplet,
            label: "Humidity",
            value: main ? `${main.humidity}%` : "",
        },
        {
            icon: faSun,
            label: "Sunset",
            value: sys ? dayjs(sys.sunset * 1000).format("HH:mm") : "",
        },
    ];

    return (
        <Container>
            <Title>Other conditions</Title>
            <ListWrapper>
                {lists.map((item, index) => (
                    <ListItem key={index}>
                        <FontAwesomeIcon
                            icon={item.icon}
                            style={{ marginTop: "3px" }}
                        />
                        <div>
                            <ListItemTitle>{item.label}</ListItemTitle>
                            <ListItemValue>{item.value}</ListItemValue>
                        </div>
                    </ListItem>
                ))}
            </ListWrapper>
        </Container>
    );
};

export default OtherConditions;
