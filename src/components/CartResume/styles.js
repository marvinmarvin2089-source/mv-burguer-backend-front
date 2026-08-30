import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 20px;

    overflow: hidden;

    background-color: ${(props) => props.theme.white};

    border-radius: 20px;

    box-sizing: border-box;

    * {
        color: ${(props) => props.theme.secondBlack};
        font-weight: 500;
    }

    .container-top {
        display: grid;

        grid-template-columns: 1fr auto;

        grid-template-areas:
            'title title'
            'items items-price'
            'delivery-tax delivery-tax-price';

        gap: 14px 20px;

        .title {
            grid-area: title;

            width: 100%;

            margin: 0 0 10px;

            padding: 15px;

            box-sizing: border-box;

            background-color: ${(props) => props.theme.secondBlack};

            color: ${(props) => props.theme.white};

            font-size: 20px;
            font-weight: 700;

            text-align: center;

            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }

        .items {
            grid-area: items;

            padding-left: 20px;
        }

        .items-price {
            grid-area: items-price;

            padding-right: 20px;

            text-align: right;
        }

        .delivery-tax {
            grid-area: delivery-tax;

            padding-left: 20px;
        }

        .delivery-tax-price {
            grid-area: delivery-tax-price;

            padding-right: 20px;

            text-align: right;
        }
    }

    .container-bottom {
        display: flex;
        justify-content: space-between;

        margin-top: 24px;

        padding: 20px;

        font-size: 20px;
        font-weight: 700;

        * {
            font-weight: 700;
        }
    }

    @media (max-width: 480px) {
        margin-top: 0;

        .container-top {
            gap: 12px 16px;

            .title {
                font-size: 18px;
            }

            .items,
            .delivery-tax {
                padding-left: 16px;
            }

            .items-price,
            .delivery-tax-price {
                padding-right: 16px;
            }
        }

        .container-bottom {
            padding: 16px;

            font-size: 18px;
        }
    }
`;