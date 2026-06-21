import styled from "styled-components";

export const Container = styled.div`
    padding-left: 40px;
    padding-bottom: 40px;

    .swiper {
        overflow: visible;
    }

    .swiper-slide {
        width: 260px !important;
        height: auto;
    }
`;

export const Title = styled.h2`
    margin: 70px 0;
    font-size: 24px;
    font-weight: bold;
    color: #61a120;
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
        background-color: #61a120;
    }
`;