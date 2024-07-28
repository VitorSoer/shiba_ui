import { DefaultTheme } from 'styled-components';
import { ColorKeys } from '../constants/color';

const isKeyOf = <T extends object>(key: string, obj: T) => {
  return Object.keys(obj).includes(key);
};

export const getColorValue = (
  theme: DefaultTheme,
  value?: string,
  defaultValue: ColorKeys = 'obsidian'
) => {
  if (!value) return theme.color[defaultValue];

  return isKeyOf(value, theme.color) ? theme.color[value] : value;
};
