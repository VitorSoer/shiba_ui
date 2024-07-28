export interface IColor {
  obsidian: string;
  charcoal: string;
  graphite: string;
  steel: string;
  silver: string;
  quartz: string;
  porcelain: string;
  cotton: string;
  violet: string;
  coral: string;
  emerald: string;
  aqua: string;
  sunflower: string;
  tangerine: string;
  crimson: string;
  azure: string;
}

export const color: IColor = {
  obsidian: '#121212',
  charcoal: '#181818',
  graphite: '#404040',
  steel: '#9C9C9C',
  silver: '#C5C5C5',
  quartz: '#E4E4E4',
  porcelain: '#F5F5F5',
  cotton: '#FFFFFF',
  violet: '#9149F9',
  coral: '#EF5975',
  emerald: '#00C948',
  aqua: '#00BEE0',
  sunflower: '#F2C703',
  tangerine: '#F88400',
  crimson: '#D02329',
  azure: '#3676AA',
};

export type ColorKeys = keyof typeof color;
export type ColorType = ColorKeys | string;
