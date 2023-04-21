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
  const [selectedGood, setSelectedGood] = useState<string>('Jam');

  const onToggleGood = (item: string) => {
    setSelectedGood(prev => (prev === item ? '' : item));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected' }

        {selectedGood && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          >
            {}
          </button>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((item) => (
            <tr
              key={item}
              data-cy="Good"
              className={classNames(
                { 'has-background-success-light': item === selectedGood },
              )}
            >
              <td>
                <button
                  onClick={() => onToggleGood(item)}
                  data-cy="AddButton"
                  type="button"
                  className={classNames(
                    'button', { 'is-info': selectedGood === item },
                  )}
                >
                  {selectedGood === item ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
