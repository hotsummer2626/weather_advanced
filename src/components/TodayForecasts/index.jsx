import styled, { css } from "styled-components";
import dayjs from "dayjs";
import iconList from "@/constant/iconList";
import getTemperature from "@/utils/getTemperature";
import { useSelector } from "react-redux";

const Container = styled.div`
    width: 100%;
    margin-bottom: 30px;
    ${({ theme }) => {
        switch (theme) {
            case "frame":
                return css`
                    border-top: 1px solid #6e7681;
                    border-bottom: 1px solid #6e7681;
                    padding: 25px 0;
                `;
            default:
                return css`
                    background: #202b3b;
                    border-radius: 25px;
                    padding: 25px;
                    @media (max-width: 576px) {
                        padding: 15px;
                    }
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${({ size }) => size}, 1fr);
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid #6e7681;
    &:last-child {
        border-right: none;
    }
`;

const Time = styled.span`
    color: #6e7681;
    font-size: 20px;
    text-align: center;
`;

const Icon = styled.img`
    width: 60%;
    @media (max-width: 576px) {
        width: 80%;
        margin: 10px 0;
    }
`;

const Temp = styled.span`
    font-size: 15px;
`;

const TodayForecasts = ({ list, size, theme }) => {
    const { settings } = useSelector((state) => state);

    return (
        <Container theme={theme}>
            <Title>Today's forecast</Title>
            <ListWrapper size={size}>
                {list.slice(0, size).map((item, index) => (
                    <ListItem key={index}>
                        <Time>{dayjs(item.dt * 1000).format("h:mm A")}</Time>
                        <Icon
                            src={iconList[item.weather[0].id]}
                            alt="weather icon"
                        />
                        <Temp>
                            {getTemperature(
                                item.main.temp,
                                settings.temperature
                            )}
                        </Temp>
                    </ListItem>
                ))}
            </ListWrapper>
        </Container>
    );
};

export default TodayForecasts;
