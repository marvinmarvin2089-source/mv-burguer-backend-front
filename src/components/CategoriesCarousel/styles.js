import { Link } from "react-router-dom";
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
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-5px);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

`;

export const CategoryButton = styled(Link)`
position: absolute;
        left: 20px;
        bottom: 20px;

        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.55);

        margin: 0;
        border-radius: 30px;
        padding: 10px 22px;

        font-size: 18px;
        font-weight: bold;
        text-decoration: none;

        &:hover {
            background-color: #8622a2;
        }

        `;