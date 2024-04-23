import styled, { css, keyframes } from 'styled-components';
import { ISpinner } from '.';

export const SpinnerWrapper = styled.div<ISpinner>`
  ${({ theme, outsideBarColor, innerBarColor, spinnerSize }) => {
    const customSize = {
      XS: `
        width: 12px;
        height: 12px;
        border-width: 4px;
      `,

      SM: `
        width: 18px;
        height: 18px;
        border-width: 6px;
      `,

      MD: `
        width: 24px;
        height: 24px;
        border-width: 8px;
      `,
      
      LG: `
        width: 30px;
        height: 30px;
        border-width: 10px;
      `
    };

    const spinnerAnimation = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `;

    return css`
      ${customSize[spinnerSize || 'XS']}

      border-radius: 50%;
      border-style: solid;
      border-color: ${theme.color[outsideBarColor || 'LIGHT_GRAY']};
      border-top-color: ${theme.color[innerBarColor || 'ROYAL_PURPLE']};

      animation: ${spinnerAnimation} 1s linear infinite;
    `;
  }}
`;
