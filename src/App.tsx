import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

interface Good {
  id: number;
  color: string;
  name: string;
}

const API_URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

async function getData() {
  // const data = fetch(API_URL)
  //   .then((response) => {
  //     return response.json();
  //   });

  const response = await fetch(API_URL);

  return response.json();
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  async function loadData() {
    const goodsFromServer = await getData();

    setGoods(goodsFromServer);
  }

  useEffect(() => {
    // getData()
    //   .then((dataFromServer) => {
    //     setGoods(dataFromServer);
    //   });
    loadData();
  }, []);

  return (
    <main className="section container">
      {goods.length === 0 && (
        <h1 className="title">No goods selected</h1>
      )}

      {goods.map(good => (
        <p key={good.id}>
          {good.name}
        </p>
      ))}
    </main>
  );
};
