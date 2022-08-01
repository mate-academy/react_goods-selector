import React, { useState } from 'react';
import cn from 'classnames';
import './App.scss';
import 'bulma/css/bulma.min.css';

import goodsFromServer from './goods';

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState(['Jam']);

  function deleteAllProducts(): void {
    setSelectedGood([]);
  }

  function deleteProduct(product: string): void {
    setSelectedGood((products: string[]) => {
      return products.filter(el => el !== product);
    });
  }

  function selectProduct(product: string): void {
    setSelectedGood((products: string[]) => {
      return [...products, product];
    });
  }

  return (
    <main className="App main p-3 box">
      <header className="App__header title is-1 is-flex is-align-items-center">
        <h1 className="App__title">
          {
            selectedGood.length
              ? `
                ${selectedGood.map(el => ` ${el}`)}
                ${selectedGood.length > 1 ? 'are' : 'is'} selected
              `
              : 'No goods selected'
          }
        </h1>

        {selectedGood.length > 0 && (
          <button
            type="button"
            className="App__clear button is-warning"
            onClick={deleteAllProducts}
          >
            Clear
          </button>
        )}
      </header>

      <ul className="is-three-quarters panel-list">
        {goodsFromServer.map((product: string) => (
          <li
            className={
              cn(
                'Good subtitle is-flex is-align-items-center p-1 ',
                { 'Good--active': selectedGood.find(el => el === product) },
              )
            }
            key={product}
          >
            {product}

            {selectedGood.find(el => el === product) && (
              <button
                type="button"
                className="Good__remove button is-warning"
                onClick={() => deleteProduct(product)}
              >
                Remove
              </button>
            )}

            {!selectedGood.find(el => el === product) && (
              <button
                type="button"
                className="Good__select button is-primary"
                onClick={() => selectProduct(product)}
              >
                Select
              </button>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};
