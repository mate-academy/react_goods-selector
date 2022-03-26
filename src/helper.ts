export const createSentence = (goods: string[]): string => {
  if (goods.length >= 2) {
    return `${goods.slice(0, -1).join(', ')} and ${goods.slice(-1)} are selected`;
  }

  return goods.length ? `${goods[0]} is selected` : 'No goods selected';
};
