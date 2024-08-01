import { ColorType } from '../../constants/color';
import { SizeType } from '../../constants/size';

export interface ISpinner {
  size?: SizeType;
  color?: ColorType;
}

export const getSpinnerSize = (size: SizeType = 'md', isMobile?: boolean) => {
  const sizes = {
    xs: { size_one: 10, size_two: 20 },
    sm: { size_one: 20, size_two: 30 },
    md: { size_one: 30, size_two: 40 },
    lg: { size_one: 40, size_two: 50 },
  };

  const isNumber = typeof size === 'number';
  const selectedSize = sizes[size] || sizes.md;

  const mobileSize = isNumber ? size : selectedSize?.size_two;
  const browserSize = isNumber ? size : selectedSize?.size_one;

  if (isMobile) return mobileSize;

  return `
    width: ${browserSize}px;
    height: ${browserSize}px;
    border-width: ${browserSize / 5}px;
  `;
};
