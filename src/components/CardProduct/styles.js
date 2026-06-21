import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;

    border-radius: 12px;

    padding: 20px;

    padding-top: 80px;

    position: relative;

    overflow: visible;

    min-height: 250px;

    cursor: grab;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    div {
        width: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 12px;


        p {
            font-size: 18px;
            color: #ff8c05;
            font-weight: 700;
            margin-top: 40px;
        }

        strong {
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;



        }
    }

`;

export const CardImage = styled.img`
    width: 140px;

    position: absolute;

    top: -50px;

    left: 50%;

    transform: translateX(-50%);
`;