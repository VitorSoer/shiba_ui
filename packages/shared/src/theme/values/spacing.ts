export const spacing: ISpacing = {
  NA: '0px',
  XS: '8px',
  SM: '16px',
  MD: '24px',
  LG: '32px',
  XL: '40px',
  '2X': '48px',
  '3X': '56px',
  '4X': '64px',
  '5X': '72px'
};

export interface ISpacing {
  NA: string;
  XS: string;
  SM: string;
  MD: string;
  LG: string;
  XL: string;
  '2X': string;
  '3X': string;
  '4X': string;
  '5X': string;
}

export type SpacingKeys = keyof typeof spacing;
