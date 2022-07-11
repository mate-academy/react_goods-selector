import React, { useState } from 'react';
import './App.scss';

const productsgoodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState([' Jam']);

  const add = (newGoods: string) => {
    setSelectedGoods(prev => [...prev, newGoods]);
  };

  const remove = (newGoods: string) => {
    setSelectedGoods(prev => prev.filter(good => good !== newGoods));
  };

  const getTitle = () => {
    switch (selectedGoods.length) {
      case 0:
        return 'No goods selceted';
      case 1:
        return `${selectedGoods} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods} are selected`;
    }
  };

  return (
    <div className="App">
      <ul className="App__list">
        {productsgoodsFromServer.map((product) => {
          return (
            <li key={product} className={selectedGoods.includes(` ${product}`) ? 'App__item--active' : 'App__item'}>
              <span className="App__span">
                {product}
              </span>
              {selectedGoods.includes(` ${product}`)
                ? (
                  <button
                    type="button"
                    className="App__button button"
                    onClick={() => remove(` ${product}`)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="App__button button"
                    onClick={() => add(` ${product}`)}
                  >
                    Select
                  </button>
                )}
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="App__button--clear button"
        onClick={() => setSelectedGoods([])}
      >
        Clear
      </button>

      <h1 className="App__title">
        {getTitle()}
      </h1>
    </div>
  );
};

export default App;
