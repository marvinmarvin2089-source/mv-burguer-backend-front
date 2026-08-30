import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;

    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;

    main {
        width: 100%;
        min-width: 0;

        display: flex;
        flex-direction: column;

        background-color: ${(props) => props.theme.secondWhite};

        overflow-y: auto;
    }

    section {
        width: 100%;
        max-width: 1200px;

        margin: 0 auto;

        padding: 40px 20px;

        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        main {
            min-height: calc(100vh - 64px);
        }

        section {
            padding: 24px 12px;
        }
    }
`;