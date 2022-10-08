import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  const defaultGood = 'Jam';
  const [selectedGood, setSelectedGood] = useState(defaultGood);

  const addSelectHandler = (
    good: string,
  ) => {
    setSelectedGood(good);
  };

  const clearHandler = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          `${selectedGood} is selected`
        ) : (
          'No goods selected'
        )}

        {selectedGood && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => clearHandler()}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': isSelected,
                })}
              >
                {isSelected && (
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => clearHandler()}
                    >
                      -
                    </button>
                  </td>
                )}

                {!isSelected && (
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => addSelectHandler(good)}
                    >
                      +
                    </button>
                  </td>
                )}

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
