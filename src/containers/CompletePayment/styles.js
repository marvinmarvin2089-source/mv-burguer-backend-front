import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #f5f5f5;

    padding: 20px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px;

    background: #ffffff;

    border-radius: 16px;

    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

    text-align: center;
`;
export const IconContainer = styled.div`
    width: 80px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 20px 0;

    border-radius: 50%;

    background: ${({ $color }) => $color};
    color: #ffffff;

    svg {
        width: 40px;
        height: 40px;
    }
`;

export const BackButton = styled.button`
    width: 100%;
    height: 48px;

    margin-top: 30px;

    border: none;
    border-radius: 8px;

    background: ${(props) => props.theme.orange};
    color: #ffffff;

    font-size: 16px;
    font-weight: 700;

    cursor: pointer;

    transition: opacity 0.2s;

    &:hover {
        opacity: 0.85;
    }
`;