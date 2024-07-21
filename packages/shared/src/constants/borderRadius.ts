export interface IBorderRadius {
  NA: string;
  XS: string;
  SM: string;
  MD: string;
  LG: string;
}

export const borderRadius: IBorderRadius = {
  NA: '0px',
  XS: '4px',
  SM: '8px',
  MD: '16px',
  LG: '32px',
};

export type BorderRadiusKeys = keyof typeof borderRadius;
