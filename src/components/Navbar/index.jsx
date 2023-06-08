import styled, { css } from "styled-components";
import umbrellaLogo from "@/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faMap, faSliders } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "@/store/slices/section";
import { setIsMenuShow } from "@/store/slices/menu";

const Container = styled.div`
    height: 100%;
    padding: 25px 15px;
    width: max-content;
    background: #202b3b;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s ease;
    @media (max-width: 576px) {
        position: fixed;
        z-index: 2;
        height: 70%;
        width: calc(100% - 20px);
        ${({ isMenuShow }) =>
            isMenuShow
                ? css`
                      transform: translateY(0);
                      opacity: 1;
                  `
                : css`
                      transform: translateY(-100%);
                      opacity: 0;
                  `}
    }
`;

const Logo = styled.img`
    width: 30px;
    margin-bottom: 60px;
`;

const NavWrapper = styled.nav``;

const NavItem = styled.div`
    color: ${({ isActive }) => (isActive ? "#fff" : "#6e7681")};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;
    cursor: pointer;
`;

const NavLink = styled.span`
    font-size: 12px;
    margin-top: 5px;
`;

const navLinks = [
    { label: "Weather", value: "weather", icon: faCloud },
    {
        label: "Cities",
        value: "cities",
        icon: faMap,
    },
    { label: "Settings", value: "settings", icon: faSliders },
];

const Navbar = () => {
    const { section, isMenuShow } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <Container isMenuShow={isMenuShow}>
            <Logo src={umbrellaLogo} alt="umbrella" />
            <NavWrapper>
                {navLinks.map((item) => (
                    <NavItem
                        key={item.value}
                        isActive={section === item.value}
                        onClick={() => {
                            dispatch(setSection(item.value));
                            dispatch(setIsMenuShow(false));
                        }}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <NavLink>{item.label}</NavLink>
                    </NavItem>
                ))}
            </NavWrapper>
        </Container>
    );
};

export default Navbar;
