import { ColorKeys } from '../../theme/values/color';
import * as iconList from './iconList';

export enum DefaultIconValues {
  Size = '20',
  ViewBox = '0 0 20 20',
  Color = 'BLACK_NIGHT',
  Icon = 'ErrorIcon'
}

export interface IIconProps {
  icon?: IconKeys;
  size?: string;
  color?: ColorKeys;
  customColor?: string;
}

export interface IIconList {
  path: string[];
  view?: string;
}

export type IconKeys = keyof typeof iconList;
