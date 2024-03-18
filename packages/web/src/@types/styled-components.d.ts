import 'styled-components';
import { ThemeType } from '@shiba_ui/shared/src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
