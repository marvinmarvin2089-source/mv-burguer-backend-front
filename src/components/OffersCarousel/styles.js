import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 40px 40px;
    overflow: hidden;

    .swiper {
        width: 100%;
        overflow: hidden;
    }

    .swiper-slide {
        height: auto;
    }
`;

export const Title = styled.h2`
    margin: 70px 0;
    font-size: 24px;
    font-weight: bold;
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
`;