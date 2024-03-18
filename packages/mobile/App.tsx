import React from 'react';
import { Text } from 'react-native';
import theme from '@shiba_ui/shared/src/theme';
import { ThemeProvider } from 'styled-components/native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text>Mobile</Text>
    </ThemeProvider>
  );
};

export default App;
