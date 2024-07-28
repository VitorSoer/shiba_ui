export interface IFontSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2x': string;
  '3x': string;
  '4x': string;
  '5x': string;
  '6x': string;
}

export const fontSize: IFontSize = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
  '2x': '20px',
  '3x': '24px',
  '4x': '28px',
  '5x': '32px',
  '6x': '36px',
};

export type FontSizeKeys = keyof typeof fontSize;
