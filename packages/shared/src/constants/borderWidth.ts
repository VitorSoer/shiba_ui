export interface IBorderWidth {
  NA: string;
  XS: string;
  SM: string;
  MD: string;
  LG: string;
}

export const borderWidth: IBorderWidth = {
  NA: '0px',
  XS: '0.5px',
  SM: '1px',
  MD: '1.5px',
  LG: '2px',
};

export type BorderWidthKeys = keyof typeof borderWidth;
