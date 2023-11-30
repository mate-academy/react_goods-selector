import { Color } from '../types/Color';

export const getColorById = (colorId: number, colors: Color[]) => {
  const color = colors.find(c => c.id === colorId);

  return color || null;
};
