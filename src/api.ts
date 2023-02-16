import { Good } from './Good';

const API_URL = 'https://mate.academy/students-api/goods';

export function getGoods(): Promise<Good[]> {
  const result = fetch(API_URL)
    .then(response => response.json());

  return result; // Promise<Good[]>
}

export async function getGoods2() {
  const response = await fetch(API_URL);

  return response.json();
}

export async function getGoodById(goodId: number): Promise<Good> {
  const response = await fetch(`${API_URL}/${goodId}`);

  return response.json();
}
