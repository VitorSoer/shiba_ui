import { IButton } from './types';
import styled, { css } from 'styled-components';
import { generateHoverScaleEffect } from '../../../functions/hover';

import {
  getBorderRadius,
  getBorderWidth,
  getBoxShadowOrElevation,
  getColorValue,
  getSpacing,
} from '../../../functions/theme';

export const ButtonWrapper = styled.button<IButton>`
  ${({
    theme,
    $buttonColor,
    $borderColor,
    $borderRadius = 'xs',
    $borderWidth,
    $boxShadow,
    $elevation,
    $width,
    $height,
    $padding = 'xs sm',
    $gap = 'sm',
    $isDisabled,
    $variant,
    $fullWidth,
  }) => {
    const determineButtonColor = () => {
      if ($buttonColor) return $buttonColor;
      if ($isDisabled) return $variant !== 'solid' ? 'transparent' : 'steel';

      return $variant !== 'solid' ? 'transparent' : 'primary';
    };

    const determineBorderColor = () => {
      if ($borderColor) return $borderColor;
      if ($isDisabled) return 'steel';

      return $variant === 'outlined' ? 'primary' : 'transparent';
    };

    const determineBorderWidth = () => {
      if ($borderWidth) return $borderWidth;
      if ($variant === 'outlined') return 'lg';
      return 'rm';
    };

    const btnColor = determineButtonColor();
    const btnBorderColor = determineBorderColor();
    const btnBorderWidth = determineBorderWidth();

    return css`
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      height: ${$height || 40}px;
      width: ${$fullWidth ? '100%' : $width ? `${$width}px` : 'auto'};

      gap: ${getSpacing(theme, $gap)};
      padding: ${getSpacing(theme, $padding)};

      background: ${getColorValue(theme, btnColor)};
      box-shadow: ${getBoxShadowOrElevation(theme, $elevation, $boxShadow)};

      border-style: solid;
      border-width: ${getBorderWidth(theme, btnBorderWidth)};
      border-color: ${getColorValue(theme, btnBorderColor)};
      border-radius: ${getBorderRadius(theme, $borderRadius)};

      ${!$isDisabled && generateHoverScaleEffect()}
    `;
  }}
`;