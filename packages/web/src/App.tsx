import React from 'react';
import theme from '@shiba_ui/shared/src/theme';
import { ThemeProvider } from 'styled-components';
import { Sandbox } from './components/Sandbox';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Sandbox />
  </ThemeProvider>
);

export default App;
