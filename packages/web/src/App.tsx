import React from 'react';
import theme from '@shiba_ui/shared/src/theme';
import styled, { ThemeProvider } from 'styled-components';
import { WebComponents } from './components';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <WebComponents />
  </ThemeProvider>
);

export default App;
