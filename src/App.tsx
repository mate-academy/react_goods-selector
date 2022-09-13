import React, { useState } from 'react';
import classNames from 'classnames';
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

type State = {
  selectedGood: string;
};

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood]
    = useState<State['selectedGood']>('Jam');

  const addGood = (good: State['selectedGood']) => {
    setSelectedGood(good);
  };

  const removeGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title has-text-info">No goods selected</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center has-text-light">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete is-medium ml-3"
            onClick={removeGood}
          >
            Clear
          </button>
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames(
                  {
                    'has-background-success-light': isSelected,
                    'has-background-success': !isSelected,
                  },
                )}
              >
                <td>
                  <button
                    data-cy={
                      isSelected
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    onClick={
                      isSelected
                        ? removeGood
                        : () => addGood(good)
                    }
                    className={classNames(
                      'button',
                      {
                        'is-info': isSelected,
                      },
                    )}
                  >
                    {
                      isSelected
                        ? '-'
                        : '+'
                    }
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
