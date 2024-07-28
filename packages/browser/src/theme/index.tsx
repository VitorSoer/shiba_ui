import React from 'react';
import theme from '@shiba_ui/shared/src/theme/';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const StyledThemeProvider: React.FC<{
  children: React.ReactNode;
  customTheme?: Partial<DefaultTheme>;
}> = ({ children, customTheme = {} }) => {
  const mergedTheme = { ...theme, ...customTheme };
  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

export const withThemeProvider = <T extends object>(
  Component: React.ComponentType<T>
) => {
  return (props: T) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};
