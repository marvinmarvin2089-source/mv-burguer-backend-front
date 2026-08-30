import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${(props) => props.theme.black};

    img {
        width: 60%;
        max-width: 160px;

        margin: 40px 0;
    }

    @media (max-width: 768px) {
        height: auto;
        min-height: 64px;

        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 8px 12px;

        box-sizing: border-box;

        img {
            width: 52px;

            margin: 0;
        }
    }
`;

export const NavLinkContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: auto;

        flex: 1;

        flex-direction: row;
        justify-content: center;
        align-items: center;

        gap: 4px;
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;

    gap: 12px;

    padding: 12px 20px;

    text-decoration: none;

    color: ${(props) => props.theme.white};

    background-color: ${(props) =>
        props.$isActive
            ? props.theme.purple
            : 'transparent'};

    transition: background-color 200ms ease;

    &:hover {
        background-color: ${(props) => props.theme.purple};
    }

    @media (max-width: 768px) {
        justify-content: center;

        gap: 6px;

        padding: 10px;

        border-radius: 8px;

        svg {
            width: 22px;
            height: 22px;
        }

        span {
            display: none;
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;

    margin-top: auto;

    @media (max-width: 768px) {
        width: auto;

        margin-top: 0;

        ${NavLink} {
            padding: 10px;
        }

        span {
            display: none;
        }
    }
`;