import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    width: 100%;
    min-height: 72px;

    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.mainBlack};

    padding: 0 56px;

    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0 24px;
    }

    @media (max-width: 480px) {
        min-height: 72px;
        padding: 0 12px;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px) {
        gap: 8px;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    height: 72px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 20px;

        hr {
            height: 24px;
            border: none;
            border-left: 2px solid #7f3b3b;
        }
    }

    @media (max-width: 768px) {
        div {
            gap: 14px;
        }
    }

    @media (max-width: 480px) {
        height: 72px;

        div {
            gap: 10px;
        }

        div hr {
            height: 22px;
        }
    }
`;

export const HeaderLink = styled(Link)`
    color: ${(props) =>
        props.$isActive
            ? props.theme.purple
            : props.theme.white};

    border-bottom: ${(props) =>
        props.$isActive
            ? `1px solid ${props.theme.purple}`
            : "1px solid transparent"};

    padding-bottom: 5px;

    text-decoration: none;

    font-size: 14px;

    white-space: nowrap;

    transition: color 200ms, border-color 200ms;

    &:hover {
        color: ${(props) => props.theme.purple};
    }

    @media (max-width: 480px) {
        font-size: 13px;
    }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 48px;

    @media (max-width: 768px) {
        gap: 20px;
    }

    @media (max-width: 480px) {
        gap: 10px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    gap: 12px;

    font-size: 14px;

    min-width: 0;

    p {
        color: ${(props) => props.theme.white};

        line-height: 1.1;

        font-weight: 300;

        white-space: nowrap;

        span {
            font-weight: 700;
            color: #9758a9;
        }
    }

    @media (max-width: 768px) {
        gap: 8px;
    }

    @media (max-width: 480px) {
        gap: 4px;

        font-size: 12px;

        svg {
            display: none;
        }

        p {
            font-size: 12px;

            span {
                display: block;

                max-width: 75px;

                overflow: hidden;

                text-overflow: ellipsis;

                white-space: nowrap;
            }
        }
    }
`;

export const Logout = styled.button`
    color: ${(props) => props.theme.red};

    background-color: transparent;

    border: none;

    padding: 0;

    font-weight: 700;

    font-size: 14px;

    cursor: pointer;

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;

    a {
        display: flex;
        align-items: center;

        gap: 10px;

        text-decoration: none;
    }

    svg {
        flex-shrink: 0;
    }

    @media (max-width: 480px) {
        a {
            display: flex;
            padding: 6px;
        }

        a span {
            display: none;
        }
    }
`;