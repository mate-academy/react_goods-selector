export const getGoodsTitle = (goods: string[]): string => {
  if (goods.length === 1) {
    return `${goods[0]} is selected`;
  }

  if (goods.length === 2) {
    return `${goods[0]} and ${goods[1]} are selected`;
  }

  if (goods.length > 2) {
    let titlePart = '';
    const lastElemIndex = goods.length - 1;

    for (let i = 0; i < lastElemIndex; i += 1) {
      if (i !== lastElemIndex - 1) {
        titlePart += `${goods[i]}, `;
      } else {
        titlePart += goods[i];
      }
    }

    return `${titlePart} and ${goods[lastElemIndex]} are selected`;
  }

  return 'No goods selected';
};
