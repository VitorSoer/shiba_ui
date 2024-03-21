import React from 'react';
import theme from '@shiba_ui/shared/src/theme';
import { Sandbox } from './src/components/Sandbox';
import { ThemeProvider } from 'styled-components/native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Sandbox />
    </ThemeProvider>
  );
};

export default App;
