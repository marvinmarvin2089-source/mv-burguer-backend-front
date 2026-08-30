import styled from 'styled-components';
import BannerHamburger from '../../assets/pexels-valeria-boltneva-1639562 1.svg';
import Background from '../../assets/bg.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    box-sizing: border-box;

    background-color: ${(props) => props.theme.secondWhite};

    background:
        linear-gradient(
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0.6)
        ),
        url('${Background}');

    overflow-x: hidden;
`;

export const Banner = styled.div`
    width: 100%;
    height: 480px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    background-image: url('${BannerHamburger}');
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.mainBlack};
    background-position: center;
    background-size: cover;

    box-sizing: border-box;

    h1 {
        position: absolute;

        right: 20%;
        top: 30%;

        margin: 0;

        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 0.82;

        color: ${(props) => props.theme.white};

        span {
            display: block;

            margin-top: 14px;

            color: ${(props) => props.theme.white};

            font-family: inherit;
            font-size: 20px;
            line-height: 1.2;
        }
    }

    @media (max-width: 768px) {
        height: 380px;

        h1 {
            right: 10%;

            font-size: 60px;

            span {
                font-size: 18px;
            }
        }
    }

    @media (max-width: 480px) {
        height: 400px;

        background-position: center;

        h1 {
            width: calc(100% - 40px);

            left: 20px;
            right: auto;
            top: 28%;

            font-size: 46px;
            line-height: 0.9;

            span {
                margin-top: 12px;

                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                line-height: 1.4;
            }
        }
    }
`;

export const CategoryMenu = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 50px;

    margin-top: 30px;

    padding: 0 20px;

    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 28px;

        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        justify-content: flex-start;

        flex-wrap: nowrap;

        gap: 24px;

        padding: 16px 20px 8px;

        margin-top: 0;

        overflow-x: auto;

        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const CategoryButton = styled.button`
    flex-shrink: 0;

    font-family: inherit;

    cursor: pointer;

    background: none;

    color: ${(props) =>
        props.$isActiveCategory
            ? props.theme.purple
            : '#696969'};

    font-size: 24px;
    font-weight: 500;

    padding: 0 0 7px;

    line-height: 1.2;

    border: none;

    border-bottom: ${(props) =>
        props.$isActiveCategory
            ? `3px solid ${props.theme.purple}`
            : '3px solid transparent'};

    transition:
        color 200ms ease,
        border-color 200ms ease;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

export const ProductsContainer = styled.div`
    width: 100%;
    max-width: 1280px;

    display: grid;

    grid-template-columns: repeat(3, minmax(0, 1fr));

    gap: 60px;

    margin: 50px auto 0;

    padding: 40px;

    box-sizing: border-box;

    justify-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

        gap: 40px;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        gap: 32px;

        margin-top: 20px;

        padding: 24px 20px 40px;
    }
`;