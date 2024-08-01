import styled, { css, keyframes } from 'styled-components';
import { ISpinner } from '@shiba_ui/shared/src/components/Spinner';
import { getSpinnerSize } from '@shiba_ui/shared/src/components/Spinner';
import { getColorValue } from '@shiba_ui/shared/src/functions/getThemeValues';

const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div<ISpinner>`
  ${({ theme, color, size }) => css`
    ${getSpinnerSize(size)}

    border-radius: 50%;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${getColorValue(theme, color, 'violet')};
    border-right-color: ${getColorValue(theme, color, 'violet')};

    animation: ${spinAnimation} 1s linear infinite;
  `}
`;
