import styled from "styled-components";

export const Root = styled.table`
    width: 100%;

    border-collapse: separate;
    border-spacing: 0;

    background-color: ${(props) => props.theme.white};

    border-radius: 20px;

    overflow: hidden;

    @media (max-width: 600px) {
        display: block;

        background-color: transparent;

        overflow: visible;
    }
`;

export const Header = styled.thead`
    @media (max-width: 600px) {
        display: none;
    }
`;

export const Body = styled.tbody`
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;

        gap: 20px;

        width: 100%;
    }
`;

export const Tr = styled.tr`
    @media (max-width: 600px) {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 20px 16px;

        box-sizing: border-box;

        background-color: ${(props) => props.theme.white};

        border-radius: 16px;

        box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
    }
`;

export const Th = styled.th`
    padding: 16px;

    text-align: left;

    color: ${(props) => props.theme.white};

    background-color: ${(props) => props.theme.secondBlack};

    border-bottom: 1px solid ${(props) => props.theme.lightGray};

    &:last-child {
        border-top-right-radius: 20px;
    }

    &:first-child {
        border-top-left-radius: 20px;
    }
`;

export const Td = styled.td`
    padding: 16px;

    color: ${(props) => props.theme.secondBlack};

    font-weight: 500;

    vertical-align: middle;

    @media (max-width: 600px) {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 6px 0;

        box-sizing: border-box;

        line-height: normal;

        text-align: center;
    }
`;