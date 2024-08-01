import styled, { css } from 'styled-components/native';
import { ISpinner } from '@shiba_ui/shared/src/components/Spinner';
import { getSpinnerSize } from '@shiba_ui/shared/src/components/Spinner';

export const SpinnerWrapper = styled.ActivityIndicator<ISpinner>`
  ${({ size }) => css`
    ${getSpinnerSize(size)}
    border-width: 0;
  `}
`;
