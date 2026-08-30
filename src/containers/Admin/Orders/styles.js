import styled from "styled-components";
import Select from "react-select";

export const ProductImage = styled.img`
    width: 70px;
    height: 70px;

    padding: 8px;

    object-fit: contain;

    border-radius: 16px;

    @media (max-width: 600px) {
        width: 56px;
        height: 56px;

        padding: 4px;
    }
`;

export const SelectStatus = styled(Select)`
    width: 240px;

    @media (max-width: 768px) {
        width: 180px;
    }

    @media (max-width: 600px) {
        width: 150px;

        font-size: 12px;
    }
`;

export const Filter = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 50px;

    margin: 28px 0;

    box-sizing: border-box;

    @media (max-width: 768px) {
        justify-content: flex-start;

        gap: 28px;

        padding: 8px 12px;

        overflow-x: auto;

        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: 480px) {
        gap: 22px;

        margin: 16px 0;
    }
`;

export const FilterOption = styled.button`
    flex-shrink: 0;

    cursor: pointer;

    background: none;

    border: none;

    color: ${(props) =>
        props.$isActiveStatus
            ? props.theme.purple
            : props.theme.darkGray};

    border-bottom: ${(props) =>
        props.$isActiveStatus
            ? `2px solid ${props.theme.purple}`
            : "2px solid transparent"};

    font-size: 20px;
    line-height: 20px;
    font-weight: 400;

    padding-bottom: 5px;

    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;