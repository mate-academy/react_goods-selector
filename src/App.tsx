import React, { useState, useEffect } from 'react';
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
  const [selectedGood, setSelectedGood] = useState<string>('Jam');

  const handleButtonClick = (good: string) => {
    if (selectedGood === good) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

  useEffect(() => {
  }, [selectedGood]);

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood}
          {' '}
          is selected
          <button
            data-cy="ClearButtonInline"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
            aria-label={`Clear selection of ${selectedGood}`}
          />
        </h1>
      ) : (
        <h1 className="title">No goods selected</h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy="ToggleButton"
                  type="button"
                  className="button"
                  onClick={() => handleButtonClick(good)}
                  aria-label={`Toggle selection of ${good}`}
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
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
