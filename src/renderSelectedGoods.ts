export function renderSelectedGoods(goodList: string[]): string {
  if (goodList.length === 0) {
    return 'No goods selected';
  }

  let stringOfGoods = '';

  for (let i = 0; i < goodList.length; i += 1) {
    const currentGood = goodList[i];
    const penultimateGood = goodList[goodList.length - 2];
    const lastGood = goodList[goodList.length - 1];

    if (goodList.length === 1) {
      stringOfGoods += `${currentGood} is selected`;
    }

    if (currentGood === penultimateGood) {
      stringOfGoods += `${currentGood} and ${lastGood} are selected`;
      break;
    }

    if (currentGood !== lastGood) {
      stringOfGoods += `${currentGood}, `;
    }
  }

  return stringOfGoods;
}
