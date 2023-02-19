import { Good } from '../types/Good';

const API_URL = 'https://mate.academy/students-api/goods';

export async function getGoods() {
  const response = await fetch(API_URL);

  return response.json();
}

export async function getGoodById(goodId: number): Promise<Good> {
  const response = await fetch(`${API_URL}/${goodId}`);

  return response.json();
}
