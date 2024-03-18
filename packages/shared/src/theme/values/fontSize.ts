export const fontSize: IFontSize = {
  XS: '10px',
  SM: '12px',
  MD: '14px',
  LG: '16px',
  XL: '18px',
  '2X': '20px',
  '3X': '24px',
  '4X': '28px',
  '5X': '32px',
  '6X': '36px'
};

export interface IFontSize {
  XS: string;
  SM: string;
  MD: string;
  LG: string;
  XL: string;
  '2X': string;
  '3X': string;
  '4X': string;
  '5X': string;
  '6X': string;
}

export type FontSizeKeys = keyof typeof fontSize;
