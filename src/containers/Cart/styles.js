import styled from "styled-components";

import Texture from '../../assets/bg 1.svg';
import Background from '../../assets/bg.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    background:
        linear-gradient(
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0.6)
        ),
        url('${Background}');

    box-sizing: border-box;
`;

export const Banner = styled.div`
    height: 180px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    background: url('${Texture}');
    background-color: ${(props) => props.theme.mainBlack};
    background-size: cover;
    background-position: center;

    img {
        height: 130px;
    }

    @media (max-width: 480px) {
        height: 130px;

        img {
            height: 95px;
        }
    }
`;

export const Title = styled.div`
    margin-top: 16px;

    padding-bottom: 12px;

    position: relative;

    font-size: 32px;
    font-weight: 800;

    color: ${(props) => props.theme.gren};

    text-align: center;

    &::after {
        content: '';

        position: absolute;

        left: 50%;
        bottom: 0;

        transform: translateX(-50%);

        width: 56px;
        height: 4px;

        background-color: ${(props) => props.theme.gren};
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1280px;

    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;

    gap: 40px;

    margin: 0 auto;

    padding: 40px;

    box-sizing: border-box;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 480px) {
        gap: 24px;

        padding: 24px 16px 40px;
    }
`;