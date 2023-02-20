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

export async function addGood(name: string, color: string | null) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ name, color }),
    });
  } catch (error) {
    throw Error('Cant add new good to the server');
  }
}

export async function removeGood(goodId: number) {
  try {
    await fetch(`${API_URL}/${goodId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw Error('Cant remove good from the server');
  }
}
