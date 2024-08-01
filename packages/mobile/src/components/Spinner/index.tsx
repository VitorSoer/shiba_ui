import React from 'react';
import { withThemeProvider } from '../../theme';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ISpinner } from '@shiba_ui/shared/src/components/Spinner';
import { getSpinnerSize } from '@shiba_ui/shared/src/components/Spinner';
import { getColorValue } from '@shiba_ui/shared/src/functions/getThemeValues';

const Spinner: React.FC<ISpinner> = ({ size, color }) => {
  const theme = useTheme();

  const selectedSize = getSpinnerSize(size, true);
  const selectedColor = getColorValue(theme, color, 'violet');

  return <ActivityIndicator size={selectedSize} color={selectedColor} />;
};

export default withThemeProvider(Spinner);
