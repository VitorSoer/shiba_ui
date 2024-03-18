export const color: IColor = {
  BLACK_NIGHT: '#121212',
  DARK_GRAY: '#181818',
  MEDIUM_GRAY: '#404040',
  NORMAL_GRAY: '#9C9C9C',
  LIGHT_GRAY: '#C5C5C5',
  SNOW_WHITE: '#E4E4E4',
  GLACIAL_WHITE: '#F5F5F5',
  PURE_WHITE: '#FFFFFF',
  ROYAL_PURPLE: '#A15FFF',
  BLUSH_PINK: '#EF5975',
  EMERALD_GREEN: '#0EDF59',
  SKY_BLUE: '#1ACFF0',
  MUSTARD_YELLOW: '#EAC20C',
  SUNSET_ORANGE: '#F88705',
  CRIMSON_RED: '#C6393E',
  CYAN_BLUE: '#3676AA'
};

export interface IColor {
  BLACK_NIGHT: string;
  DARK_GRAY: string;
  MEDIUM_GRAY: string;
  NORMAL_GRAY: string;
  LIGHT_GRAY: string;
  SNOW_WHITE: string;
  GLACIAL_WHITE: string;
  PURE_WHITE: string;
  ROYAL_PURPLE: string;
  BLUSH_PINK: string;
  EMERALD_GREEN: string;
  SKY_BLUE: string;
  MUSTARD_YELLOW: string;
  SUNSET_ORANGE: string;
  CRIMSON_RED: string;
  CYAN_BLUE: string;
}

export type ColorKeys = keyof typeof color;
