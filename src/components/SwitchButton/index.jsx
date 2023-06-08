import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSetting } from "@/store/slices/setting";

const Container = styled.ul`
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    background: #0b131e;
    display: grid;
    grid-template-columns: repeat(${({ size }) => size}, 1fr);
    position: relative;
`;

const Indicator = styled.div`
    background: #35455e;
    width: calc(100% / ${({ size }) => size} - 10px / ${({ size }) => size});
    height: calc(100% - 10px);
    position: absolute;
    border-radius: 10px;
    left: 5px;
    top: 5px;
    transform: translateX(${({ position }) => `${position * 100}%`});
    transition: 0.3s ease;
`;

const Option = styled.li`
    padding: 5px;
    z-index: 1;
    text-align: center;
    position: relative;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 60%;
        background: #35455e;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0px;
    }
    &:last-child {
        &::after {
            display: none;
        }
    }
`;

const SwitchButton = ({ settingName, options, position }) => {
    const dispatch = useDispatch();

    const onClickHandler = (name, value) => () =>
        dispatch(setSetting({ settingName: name, value }));

    return (
        <Container size={options.length}>
            <Indicator size={options.length} position={position} />
            {options.map((item, index) => (
                <Option
                    key={index}
                    onClick={onClickHandler(settingName, item.value)}
                >
                    {item.label}
                </Option>
            ))}
        </Container>
    );
};

export default SwitchButton;
