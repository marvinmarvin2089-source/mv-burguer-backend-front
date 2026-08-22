import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 500px;

    margin: 40px auto;
    padding: 30px;

    background: #ffffff;

    border-radius: 12px;

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

    form {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    button {
        width: 100%;
        height: 48px;

        border: none;
        border-radius: 8px;

        font-size: 16px;
        font-weight: 700;

        cursor: pointer;
    }

    button:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    .error-message {
        font-size: 14px;
    }
`;