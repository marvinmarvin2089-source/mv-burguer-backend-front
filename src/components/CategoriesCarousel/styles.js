import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;


`;

export const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #9758a6;
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
        background-color: #9758a6;
    }
   
`;


export const ContainerItems = styled.div`
    background: #ced1ee;

    border-radius: 20px;

    padding: 20px;

    min-height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 20px;
    }

    p {
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        margin-top: 15px;
        border-radius: 30px;
        padding: 10px 30px;
        font-size: 22.5px;
        font-weight: bold;
    }

`;
