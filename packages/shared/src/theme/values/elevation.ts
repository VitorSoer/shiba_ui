export const elevation: IElevation = {
  XS: '0px 1px 4px rgba(0, 0, 0, 0.2)',
  SM: '0px 2px 6px rgba(0, 0, 0, 0.2)',
  MD: '0px 3px 8px rgba(0, 0, 0, 0.2)',
  LG: '0px 4px 10px rgba(0, 0, 0, 0.2)'
};

export interface IElevation {
  XS: string;
  SM: string;
  MD: string;
  LG: string;
}

export type ElevationKeys = keyof typeof elevation;
