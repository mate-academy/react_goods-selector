export function formatGoods(goods: string[]): string {
  return goods.length === 1
    ? `${goods.join(', ')} is selected`
    : `${goods
      .slice(0, -1)
      .join(', ')} and ${goods[goods.length - 1]} are selected`;
}
