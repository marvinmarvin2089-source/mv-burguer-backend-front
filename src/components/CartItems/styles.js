import styled from "styled-components";

export const ProductImage = styled.img`
    width: 80px;
    height: 80px;

    border-radius: 16px;

    object-fit: contain;

    @media (max-width: 600px) {
        width: 110px;
        height: 90px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;

    button {
        width: 30px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 4px;

        background-color: ${(props) => props.theme.purple};

        cursor: pointer;

        transition: all 0.4s;

        &:hover {
            background-color: ${(props) =>
                props.theme.secondDarkPurple};
        }
    }

    @media (max-width: 600px) {
        margin: 6px 0;

        button {
            width: 36px;
            height: 36px;

            font-size: 18px;
        }
    }
`;

export const EmptyCart = styled.td`
    font-size: 20px;

    text-align: center;

    font-weight: bold;

    @media (max-width: 600px) {
        display: block;

        width: 100%;

        padding: 30px 16px;
    }
`;

export const ProductTotalPrice = styled.p`
    margin: 0;

    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const TrashImage = styled.img`
    width: 20px;
    height: 20px;

    cursor: pointer;

    @media (max-width: 600px) {
        width: 24px;
        height: 24px;

        margin-top: 6px;
    }
`;