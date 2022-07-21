import styled from "styled-components";

export const InfoWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid var(--color-dark-2);
    > p {
        font-weight: 700;
        font-size: 25px;
        color: var(--color-dark-1);
        width: 50%;
    }

    > div {
        margin-top: 5px;
    }
`;
export const DetailInfor = styled.div`
    margin-bottom: 10px;
    span:nth-of-type(1) {
        font-weight: 600;
        margin-right: 5px;
        font-size: 17px;
        color: var(--color-dark-1);
    }
    span:last-of-type {
        font-weight: 600;
        margin-right: 5px;
        font-size: 15px;
        color: var(--color-dark-1);
    }
`;