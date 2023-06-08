import styled from "styled-components";
import SwitchButton from "@/components/SwitchButton";
import { useSelector } from "react-redux";

const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 30px;
    flex-grow: 1;
    padding-top: 20px;
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

const Title = styled.h2`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Content = styled.div`
    width: 100%;
    background: #202b3b;
    border-radius: 25px;
    padding: 25px;
    @media (max-width: 576px) {
        padding: 15px;
    }
`;

const ListItem = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

const ListItemTitle = styled.h3`
    color: #6e7681;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 10px;
`;

const list = [
    {
        title: "temperature",
        key: "temperature",
        options: [
            { label: "Celsius", value: "celsius" },
            { label: "Fahrenheit", value: "fahrenheit" },
        ],
    },
    {
        title: "wind speed",
        key: "windSpeed",
        options: [
            { label: "km/h", value: "km/h" },
            { label: "m/s", value: "m/s" },
            { label: "Knots", value: "knots" },
        ],
    },
    {
        title: "pressure",
        key: "pressure",
        options: [
            { label: "hPa", value: "hPa" },
            { label: "Inches", value: "inches" },
            { label: "kPa", value: "kPa" },
            { label: "mm", value: "mm" },
        ],
    },
    {
        title: "visibility",
        key: "visibility",
        options: [
            { label: "km", value: "km" },
            { label: "m", value: "m" },
        ],
    },
];

const Settings = () => {
    const { settings } = useSelector((state) => state);

    return (
        <Container>
            <div>
                <Title>Units</Title>
                <Content>
                    {list.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemTitle>{item.title}</ListItemTitle>
                            <SwitchButton
                                settingName={item.key}
                                options={item.options}
                                position={item.options.findIndex(
                                    (option) =>
                                        option.value === settings[item.key]
                                )}
                            />
                        </ListItem>
                    ))}
                </Content>
            </div>
        </Container>
    );
};

export default Settings;
