import { useState } from 'react';
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
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  const clearHandler = () => {
    setSelectedGood('');
  };

  const buttonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    good: string,
  ) => {
    if (e.currentTarget.textContent === '-') {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

  return (
    <main className="section container">
      {!selectedGood && <h1 className="title">No goods selected</h1>}

      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={clearHandler}
              aria-label="Clear selection"
            />
          )}
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            if (!selectedGood || selectedGood !== good) {
              return (
                <tr data-cy="Good" key={good}>
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={(e) => {
                        buttonClickHandler(e, good);
                      }}
                    >
                      +
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            }

            return (
              <tr
                className="has-background-success-light"
                data-cy="Good"
                key={good}
              >
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={(e) => {
                      buttonClickHandler(e, good);
                    }}
                  >
                    -
                  </button>
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
