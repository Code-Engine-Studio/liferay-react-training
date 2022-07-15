import styled, { css } from "styled-components";

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    border-radius: 9px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    ${({ primary, disabled }) => {
        if (disabled) {
            return css`
                background-color: var(--color-dark-2);
                color: var(--color-dark-4);
                cursor: initial;
            `;
        }

        return primary
            ? css`
                  background-color: var(--blue-color);
                  color: white;
              `
            : css`
                  background-color: white;
                  border: 1px solid #efeeee;
                  color: var(--color-dark-1);
              `;
    }}
`;

export default Button;
