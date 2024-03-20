import React from 'react';
import * as iconList from '@shiba_ui/shared/src/assets/Icons/iconList';
import { color as colorList } from '@shiba_ui/shared/src/theme//values/color';
import { DefaultIconValues, IIconProps } from '@shiba_ui/shared/src/assets/Icons/types';

export const Icon = ({
  icon,
  size,
  color,
  customColor
}: IIconProps): JSX.Element => {
  const selectedIcon = iconList[icon || DefaultIconValues.Icon];
  const { path, view } = selectedIcon || {};

  return (
    <svg
      width={size || DefaultIconValues.Size}
      height={size || DefaultIconValues.Size}
      viewBox={view || DefaultIconValues.ViewBox}
    >
      {path.map((currentPath, id) => (
        <path
          key={id}
          d={currentPath}
          fill={customColor || colorList[color || DefaultIconValues.Color]}
        />
      ))}
    </svg>
  );
};
