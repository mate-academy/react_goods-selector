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

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleGoodSelect = (good: string) => {
    setSelectedGood(good);
  };

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
      </h1>

      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
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
                {!selectedGood && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleGoodSelect(good)}
                  >
                    +
                  </button>
                )}
                {selectedGood === good && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleClearSelection}
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
