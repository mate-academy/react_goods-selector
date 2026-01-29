import React from 'react';
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
  const [selectedGood, setSelectedGood] = React.useState<string>('Jam');

  const hasSelectedGood = selectedGood !== '';

  const handleClear = () => {
    setSelectedGood('');
  };

  const handleSelect = (good: string) => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      {!hasSelectedGood ? (
        <h1 className="title">No goods selected</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClear}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isCurrentSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isCurrentSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {isCurrentSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={handleClear}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleSelect(good)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
