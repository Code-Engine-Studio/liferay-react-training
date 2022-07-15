import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: relative;
    p {
        font-size: 12px;
        letter-spacing: 0.09px;
        padding: 11px 14px;
        cursor: pointer;
    }
`;

export const DropdownList = styled.ul`
    display: ${(props) => {
        return props.show ? "block" : "none";
    }};
    position: absolute;
    list-style: none;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    margin-top: 2px;
    width: 100%;
    border-radius: 4px;
    z-index: 999;
    background-color: white;
`;

export const DropdownItem = styled.li`
    padding: 11px 14px;
    font-size: 12px;
    letter-spacing: 0.09px;
    cursor: pointer;
    :hover {
        background-color: #fafafa;
    }
`;
