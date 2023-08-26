import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type Good = string;

export const goods: Good[] = [
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
  const [selectedGood, setSelectedGood] = useState<Good>('Jam');

  const handleGoodClick = (good: Good) => {
    if (good === selectedGood) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

  const handleClearState = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title">No goods selected</h1>
      ) : (
        <>
          <h1 className="title is-flex is-align-items-center">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => handleClearState()}
            >
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            </button>
          </h1>
        </>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              data-cy="Good"
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                {good === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => handleGoodClick(good)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleGoodClick(good)}
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
