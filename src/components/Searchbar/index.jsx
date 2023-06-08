import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSection } from "@/store/slices/section";
import getCities from "@/services/getCities";
import { setCities } from "@/store/slices/cities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { setIsMenuShow } from "@/store/slices/menu";

const Container = styled.div`
    width: 59%;
    position: relative;
    @media (max-width: 576px) {
        width: 75%;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 15px;
    outline: none;
    border: none;
    border-radius: 18px;
    font-size: 16px;
    background: #202b3b;
    color: #fff;
`;

const MenuIcon = styled.div`
    display: none;
    position: absolute;
    right: -25%;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #202b3b;
    color: #fff;
    font-size: 22px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media (max-width: 576px) {
        display: flex;
    }
`;

const Searchbar = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (inputText) {
                const cities = await getCities(inputText);
                dispatch(setCities(cities));
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [inputText]);

    return (
        <Container>
            <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onFocus={() => dispatch(setSection("cities"))}
                placeholder="Search for cities"
            />
            <MenuIcon onClick={() => dispatch(setIsMenuShow(true))}>
                <FontAwesomeIcon icon={faBars} />
            </MenuIcon>
        </Container>
    );
};

export default Searchbar;
