import styled from "styled-components";
import iconList from "@/constant/iconList";
import getTemperature from "@/utils/getTemperature";
import { useSelector } from "react-redux";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 40px;
    @media (max-width: 576px) {
        padding: 10px 0 10px 20px;
    }
`;

const CityName = styled.h2`
    font-size: 30px;
    color: #fff;
    @media (max-width: 576px) {
        font-size: 24px;
    }
`;

const Temp = styled.p`
    font-size: 70px;
    font-weight: bold;
    margin-top: auto;
    @media (max-width: 576px) {
        font-size: 60px;
    }
`;

const Icon = styled.img`
    width: ${({ size }) => {
        switch (size) {
            case "small":
                return "190px";
            default:
                return "210px";
        }
    }};
    @media (max-width: 576px) {
        width: 140px;
    }
`;

const MainConditions = ({ location, temp, iconId, size }) => {
    const { settings } = useSelector((state) => state);

    return (
        <Container>
            <LeftContent>
                <CityName size={size}>{location}</CityName>
                <Temp>
                    {temp && getTemperature(temp, settings.temperature)}
                </Temp>
            </LeftContent>
            <div>{iconId && <Icon src={iconList[iconId]} alt="sunny" />}</div>
        </Container>
    );
};

export default MainConditions;
