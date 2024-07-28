import styled, { css, keyframes } from 'styled-components';
import { ISpinner } from '@shiba_ui/shared/src/components/Spinner';
import { getSpinnerSize } from '@shiba_ui/shared/src/components/Spinner';
import { getColorValue } from '@shiba_ui/shared/src/functions/getThemeValues';

const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div<ISpinner>`
  ${({ theme, outerColor, innerColor, size }) => css`
    ${getSpinnerSize(size)}

    border-radius: 50%;
    border-style: solid;
    border-color: ${getColorValue(theme, outerColor, 'quartz')};
    border-top-color: ${getColorValue(theme, innerColor, 'violet')};

    animation: ${spinAnimation} 1s linear infinite;
  `}
`;
