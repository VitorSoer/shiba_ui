export const borderRadius: IBorderRadius = {
  XS: '4px',
  SM: '8px',
  MD: '16px',
  LG: '32px'
};

export interface IBorderRadius {
  XS: string;
  SM: string;
  MD: string;
  LG: string;
}

export type BorderRadiusKeys = keyof typeof borderRadius;
