import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
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

type Goods = 'Dumplings' | 'Carrot' | 'Eggs'
| 'Ice cream' | 'Apple' | 'Bread' | 'Fish' | 'Honey' | 'Jam' | 'Garlic' | '';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  const handleGoodsSelect = (good: Goods | string) => {
    setSelectedGoods(good);
  };

  const handleGoodsClear = () => {
    setSelectedGoods('');
  };

  return (
    <main className="section container">
      {selectedGoods.length === 0 ? (
        <h1 className="title">No goods selected</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGoods} is selected`}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleGoodsClear}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGoods === good
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                {selectedGoods !== good ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleGoodsSelect(good)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleGoodsClear}
                  >
                    -
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
