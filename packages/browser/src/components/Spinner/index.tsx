import React from 'react';
import * as S from './styles';
import { ISpinner } from '@shiba_ui/shared/src/components/Spinner';
import { withThemeProvider } from '../../theme';

const Spinner: React.FC<ISpinner> = (properties) => (
  <S.SpinnerWrapper {...properties} />
);

export default withThemeProvider(Spinner);
