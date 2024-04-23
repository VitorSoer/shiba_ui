import React from 'react';
import * as S from './styles';
import { ColorKeys } from '@shiba_ui/shared/src/theme/values/color';

export interface ISpinner {
  innerBarColor?: ColorKeys;
  outsideBarColor?: ColorKeys;
  spinnerSize?: 'XS' | 'SM' | 'MD' | 'LG';
}

export const Spinner: React.FC<ISpinner> = properties => (
  <S.SpinnerWrapper {...properties} />
);
