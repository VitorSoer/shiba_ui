export const borderWidth: IBorderWidth = {
  XS: '0.5px',
  SM: '1px',
  MD: '1.5px',
  LG: '2px'
};

export interface IBorderWidth {
  XS: string;
  SM: string;
  MD: string;
  LG: string;
}

export type BorderWidthKeys = keyof typeof borderWidth;
