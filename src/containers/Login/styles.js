import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

import Background from '../../assets/background-login.jpg';
import BackgroundBg from '../../assets/bg.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;

    overflow-x: hidden;

    box-sizing: border-box;
`;

export const LeftContainer = styled.div`
    width: 50%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: url(${Background}) no-repeat center;
    background-size: cover;

    img {
        width: 80%;
        max-width: 420px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const RightContainer = styled.div`
    width: 50%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 40px;

    box-sizing: border-box;

    background: url(${BackgroundBg}) no-repeat center;
    background-size: cover;
    background-color: #1e1e1e;

    p {
        margin-top: 12px;

        color: ${(props) => props.theme.white};

        font-size: 18px;
        font-weight: 800;

        text-align: center;
    }

    a {
        color: ${(props) => props.theme.purple};

        text-decoration: underline;
    }

    @media (max-width: 768px) {
        width: 100%;

        padding: 32px 24px;
    }

    @media (max-width: 480px) {
        padding: 24px 20px;

        p {
            font-size: 14px;
        }
    }
`;

export const Title = styled.h2`
    width: 100%;
    max-width: 400px;

    margin: 0 0 20px;

    font-family: "Road Rage", sans-serif;

    font-size: 40px;
    line-height: 1;

    color: ${(props) => props.theme.white};

    span {
        color: ${(props) => props.theme.purple};

        font-family: "Road Rage", sans-serif;
    }

    @media (max-width: 480px) {
        font-size: 34px;

        text-align: center;
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;

    gap: 20px;

    box-sizing: border-box;

    button {
        width: 100%;
    }
`;

export const InputContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 6px;

    input {
        width: 100%;
        height: 52px;

        padding: 0 16px;

        border: none;
        border-radius: 5px;

        box-sizing: border-box;

        font-size: 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;

        color: ${(props) => props.theme.white};
    }

    span {
        min-height: 14px;

        font-size: 13px;
        line-height: 1.1;

        color: #af0606;

        font-weight: 600;
    }

    @media (max-width: 480px) {
        input {
            height: 48px;
        }

        label {
            font-size: 16px;
        }
    }
`;

export const Link = styled(ReactLink)`
    color: ${(props) => props.theme.purple};

    text-decoration: underline;
`;