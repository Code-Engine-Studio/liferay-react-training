import styled from "styled-components";

export const StepContainer = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    padding: 30px 0;
    border-bottom: 1px solid #f2f3f4;
`;

export const Step = styled.div`
    display: flex;
    gap: 5px;
    cursor: pointer;
    font-weight: 600;

    p:first-of-type {
        background-color: ${({ isActive }) =>
            isActive ? "var(--blue-color)" : "var(--color-dark-2)"};
        font-size: 13px;
        color: white;
        width: 23px;
        height: 23px;
        line-height: 23px;
        border-radius: 50%;
        text-align: center;
    }
    p:nth-of-type(2) {
        font-size: 15px;
        color: ${({ isActive }) =>
            isActive ? "var(--color-dark-1)" : "var(--color-dark-3)"};
        line-height: 23px;
    }
`;
