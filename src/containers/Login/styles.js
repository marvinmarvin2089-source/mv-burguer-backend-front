import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/background-login.jpg';
import BackgroundBg from '../../assets/bg.svg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url(${Background}) no-repeat center;
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    max-width: 50%;
 
    background: url(${BackgroundBg}) no-repeat center;
    background-color: #1e1e1e;

    p {
        color: #fff;
        font-size: 18px;
        font-weight: 800;
    }

    a {
        color: #9758A6;
        text-decoration: underline;
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #fff;

    span {
        color: #9758A6;
        font-family: "Road Rage", sans-serif;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;


`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        
    }

    span {
        font-size: 14px;
        line-height: 80%;
        color: #af0606;
        font-weight: 600;
        height: 10px;

    }

`;

export const Link = styled(ReactLink)`
    color: #9758A6;
    text-decoration: none;
`;

