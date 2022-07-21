import styled from "styled-components";

export const InputLabel = styled.div`
    background-color: var(--color-dark-4);
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid
        ${({ isValid, touched }) =>
            !isValid && touched ? "var(--red-color)" : "white"};

    input {
        outline: none;
        border: none;
        width: 100%;
        background-color: var(--color-dark-4);
        color: var(--color-dark-1);
        font-size: 16px;
        font-weight: 500;
    }
`;

export const InputHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    label {
        color: var(--color-dark-3);
        font-weight: 500;
        span {
            margin-left: 3px;
            color: var(--red-color);
        }
    }

    p {
        font-weight: 700;
        color: var(--red-color);
    }
`;
