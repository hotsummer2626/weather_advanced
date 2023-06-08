import styled, { css } from "styled-components";
import dayjs from "dayjs";
import iconList from "@/constant/iconList";
import getTemperature from "@/utils/getTemperature";
import { useSelector } from "react-redux";

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    ${({ theme }) => {
        switch (theme) {
            case "frame":
                return css``;
            default:
                return css`
                    background: #202b3b;
                    border-radius: 25px;
                    padding: 35px 40px 20px;
                `;
        }
    }}
`;

const Title = styled.h3`
    color: #6e7681;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 15px;
`;

const ListWrapper = styled.ul`
    flex-grow: 1;
    display: grid;
    grid-template-rows: repeat(${({ size }) => size}, 1fr);
`;

const ListItem = styled.li`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #6e7681;
    &:last-child {
        border-bottom: none;
    }
`;

const Day = styled.span`
    color: #6e7681;
    align-self: center;
`;

const IconAndConditionWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 39px;
    margin-right: 10px;
`;

const Condition = styled.span``;

const HighAndLowTemp = styled.span`
    color: #fff;
    align-self: center;
    justify-self: end;
    & span {
        color: #6e7681;
    }
`;

const DailyForecast = ({ lists, size, theme }) => {
    const { settings } = useSelector((state) => state);
    return (
        <Container theme={theme}>
            <Title>{size}-Day forecast</Title>
            <ListWrapper size={size}>
                {lists.slice(0, size).map((item, index) => (
                    <ListItem key={index}>
                        <Day>
                            {index === 0
                                ? "Today"
                                : dayjs(item.dt * 1000).format("dddd")}
                        </Day>
                        <IconAndConditionWrapper>
                            <Icon
                                src={iconList[item.weather[0].id]}
                                alt="weather icon"
                            />
                            <Condition>
                                {item.weather[0].description
                                    .slice(0, 1)
                                    .toUpperCase() +
                                    item.weather[0].description.slice(1)}
                            </Condition>
                        </IconAndConditionWrapper>
                        <HighAndLowTemp>
                            {getTemperature(
                                item.temp.max,
                                settings.temperature
                            )}
                            <span>
                                /
                                {getTemperature(
                                    item.temp.min,
                                    settings.temperature
                                )}
                            </span>
                        </HighAndLowTemp>
                    </ListItem>
                ))}
            </ListWrapper>
        </Container>
    );
};

export default DailyForecast;
