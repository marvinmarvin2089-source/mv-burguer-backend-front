import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    padding: 0 40px 40px;

    overflow: hidden;

    box-sizing: border-box;

    .swiper {
        width: 100%;
        overflow: hidden;
    }

    .swiper-slide {
        height: auto;

        display: flex;
        justify-content: center;
    }

    .swiper-button-prev,
    .swiper-button-next {
        width: 36px;
        height: 36px;

        margin-top: 0;

        top: 50%;

        transform: translateY(-50%);
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 28px;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        padding: 0 24px 32px;
    }

    @media (max-width: 480px) {
        padding: 0 12px 28px;

        .swiper-button-prev,
        .swiper-button-next {
            width: 30px;
            height: 30px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 24px;
        }
    }
`;

export const Title = styled.h2`
    margin: 60px 0 40px;

    font-size: 24px;
    font-weight: 700;

    color: ${(props) => props.theme.gren};

    padding-bottom: 12px;

    position: relative;

    text-align: center;

    &::after {
        content: '';

        position: absolute;

        bottom: 0;
        left: 50%;

        transform: translateX(-50%);

        width: 50px;
        height: 3px;

        background-color: ${(props) => props.theme.gren};
    }

    @media (max-width: 768px) {
        margin: 48px 0 32px;
    }

    @media (max-width: 480px) {
        margin: 36px 0 24px;

        font-size: 22px;

        padding-bottom: 10px;

        &::after {
            width: 42px;
        }
    }
`;