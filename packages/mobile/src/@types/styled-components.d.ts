import 'styled-components/native';
import { ThemeType } from '@shiba_ui/shared/src/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
