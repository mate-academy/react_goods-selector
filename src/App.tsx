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

type Goods = 'Dumplings' | 'Carrot' | 'Eggs' | 'Ice cream' | 'Apple' | 'Bread'
| 'Fish' | 'Honey' | 'Jam' | 'Garlic' | '';

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelectGood = (good: Goods | string) => {
    setSelectedGood(good);
  };

  const handleClearGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {selectedGood.length === 0 ? (
        <h1 className="title">No goods selected</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearGood}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleClearGood}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleSelectGood(good)}
                  >
                    +
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
