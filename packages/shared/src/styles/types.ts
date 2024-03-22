import { BorderRadiusKeys } from '../theme/values/borderRadius';
import { BorderWidthKeys } from '../theme/values/borderWidth';
import { ColorKeys } from '../theme/values/color';
import { FontSizeKeys } from '../theme/values/fontSize';
import { FontWeightKeys } from '../theme/values/fontWeight';

export interface ISizeStyles {
  height?: string;
  minHeight?: string;
  width?: string;
  minWidth?: string;
}

export interface ITextStyles {
  color?: ColorKeys;
  fontSize?: FontSizeKeys;
  fontWeight?: FontWeightKeys;
  lineHeight?: string;
}

export interface IBorderStyles {
  borderWidth?: BorderWidthKeys;
  borderColor?: ColorKeys;
  borderRadius?: BorderRadiusKeys;
}
