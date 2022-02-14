export function formatGoods(goods: string[]): string {
  switch (goods.length) {
    case 1:
      return `${goods.join(', ')} is selected`;

    case 2:
      return `${goods[0]} and ${goods[1]} are selected`;

    default:
      return `${goods
        .slice(0, -1)
        .join(', ')} and ${goods[goods.length - 1]} are selected`;
  }
}
