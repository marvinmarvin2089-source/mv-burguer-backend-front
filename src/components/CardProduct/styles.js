import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 280px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${(props) => props.theme.white};

    border-radius: 12px;

    padding: 120px 20px 20px;

    position: relative;

    overflow: visible;

    min-height: 250px;

    cursor: grab;

    box-sizing: border-box;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

    div {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        gap: 12px;

        p {
            margin: 12px 0 0;

            font-size: 18px;
            font-weight: 700;

            color: ${(props) => props.theme.orange};

            text-align: center;
        }

        strong {
            font-size: 22px;
            font-weight: 800;

            color: ${(props) => props.theme.black};

            line-height: 1.2;

            text-align: center;
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 330px;

        min-height: 230px;

        padding: 115px 16px 16px;

        div {
            gap: 8px;

            p {
                margin-top: 6px;

                font-size: 16px;
            }

            strong {
                font-size: 20px;
            }
        }
    }
`;

export const CardImage = styled.img`
    width: 160px;
    height: 120px;

    object-fit: contain;

    position: absolute;

    top: 8px;
    left: 50%;

    transform: translateX(-50%);

    @media (max-width: 480px) {
        width: 170px;
        height: 125px;
    }
`;