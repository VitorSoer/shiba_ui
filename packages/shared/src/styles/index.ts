import { css } from 'styled-components';
import * as T from './types';
import { DefaultTheme } from 'styled-components/native';

export const handleSizeStyles = ({
  height,
  minHeight,
  minWidth
}: T.ISizeStyles) => css`
  height: ${height || 'auto'};
  width: ${minWidth || 'auto'};
  min-width: ${minWidth || 'auto'};
  min-height: ${minHeight || 'auto'};
`;

export const handleTextStyles = (
  theme: DefaultTheme,
  { color, fontSize, fontWeight, lineHeight }: T.ITextStyles
) => css`
  line-height: ${lineHeight || 'normal'};
  color: ${theme.color[color || 'BLACK_NIGHT']};
  font-size: ${theme.font_size[fontSize || 'MD']};
  font-weight: ${theme.font_weight[fontWeight || 'REGULAR']};
`;

export const handleBorderStyles = (
  theme: DefaultTheme,
  { borderColor, borderWidth, borderRadius }: T.IBorderStyles
) => css`
  border-style: ${borderWidth !== undefined && 'solid'};
  border-color: ${borderColor && theme.color[borderColor]};
  border-width: ${borderWidth && theme.border_width[borderWidth]};
  border-radius: ${borderRadius && theme.border_radius[borderRadius]};
`;
