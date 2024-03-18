import { IBorderRadius, borderRadius } from './values/borderRadius';
import { IBorderWidth, borderWidth } from './values/borderWidth';
import { IBoxShadow, boxShadow } from './values/boxShadow';
import { IColor, color } from './values/color';
import { IElevation, elevation } from './values/elevation';
import { IFontSize, fontSize } from './values/fontSize';
import { IFontWeight, fontWeight } from './values/fontWeight';
import { ISpacing, spacing } from './values/spacing';

export interface IThemeProps {
  color: IColor;
  spacing: ISpacing;
  font_size: IFontSize;
  font_weight: IFontWeight;
  elevation: IElevation;
  box_shadow: IBoxShadow;
  border_radius: IBorderRadius;
  border_width: IBorderWidth;
}

const theme: IThemeProps = {
  color: color,
  spacing: spacing,
  font_size: fontSize,
  font_weight: fontWeight,
  elevation: elevation,
  box_shadow: boxShadow,
  border_radius: borderRadius,
  border_width: borderWidth
};

export default theme;
export type ThemeType = typeof theme;
