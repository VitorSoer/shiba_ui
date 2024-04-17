export const boxShadow: IBoxShadow = {
  NA: 'none',
  XS: '0px 2px 8px rgba(0, 0, 0, 0.5)',
  SM: '0px 4px 8px rgba(0, 0, 0, 0.5)',
  MD: '0px 6px 8px rgba(0, 0, 0, 0.5)',
  LG: '0px 8px 16px rgba(0, 0, 0, 0.5)'
};

export interface IBoxShadow {
  NA: string;
  XS: string;
  SM: string;
  MD: string;
  LG: string;
}

export type BoxShadowKeys = keyof typeof boxShadow;
