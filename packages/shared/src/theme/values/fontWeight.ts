export const fontWeight: IFontWeight = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  STRONG: 600,
  BOLD: 700,
  HEAVY: 800
};

export interface IFontWeight {
  LIGHT: number;
  REGULAR: number;
  MEDIUM: number;
  STRONG: number;
  BOLD: number;
  HEAVY: number;
}

export type FontWeightKeys = keyof typeof fontWeight;
