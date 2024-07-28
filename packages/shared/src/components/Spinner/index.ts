import { ColorType } from '../../constants/color';
import { SizeType } from '../../constants/size';

export interface ISpinner {
  size?: SizeType;
  innerColor?: ColorType;
  outerColor?: ColorType;
}

export const getSpinnerSize = (size: string = 'lg') => {
  const sizes = {
    xs: `
      width: 12px;
      height: 12px;
      border-width: 4px;
    `,
    sm: `
      width: 18px;
      height: 18px;
      border-width: 6px;
    `,
    md: `
      width: 24px;
      height: 24px;
      border-width: 8px;
    `,
    lg: `
      width: 30px;
      height: 30px;
      border-width: 10px;
    `,
  };

  return sizes[size] || sizes.md;
};
