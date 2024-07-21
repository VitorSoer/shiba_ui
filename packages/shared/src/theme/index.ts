import { IBorderRadius, borderRadius } from '../constants/borderRadius';
import { IBorderWidth, borderWidth } from '../constants/borderWidth';
import { IBoxShadow, boxShadow } from '../constants/boxShadow';
import { IColor, color } from '../constants/color';
import { IElevation, elevation } from '../constants/elevation';
import { IFontSize, fontSize } from '../constants/fontSize';
import { IFontWeight, fontWeight } from '../constants/fontWeight';
import { ISpacing, spacing } from '../constants/spacing';

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
  border_width: borderWidth,
};

export default theme;

export type ThemeType = typeof theme;
