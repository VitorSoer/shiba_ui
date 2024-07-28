import 'styled-components';
import { DefaultTheme } from 'styled-components';
import { ThemeType } from '@shiba_ui/shared/src/theme';
import { ColorKeys } from '@shiba_ui/shared/src/constants/color';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
