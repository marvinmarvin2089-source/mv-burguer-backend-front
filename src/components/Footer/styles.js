import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    min-height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 20px;

    background-color: ${(props) => props.theme.darkPurple};

    box-sizing: border-box;

    p {
        margin: 0;

        color: ${(props) => props.theme.white};

        font-size: 14px;
        font-weight: 300;

        text-align: center;
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        min-height: 60px;

        padding: 10px 16px;

        p {
            font-size: 12px;
            line-height: 1.4;
        }

        .separator {
            display: block;
            height: 0;
            overflow: hidden;
        }
    }
`;