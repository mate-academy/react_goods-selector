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
  const [selectedGood, setSelectedGood] = useState<string>('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected' }

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
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
              className={item === selectedGood
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                <button
                  onClick={() => setSelectedGood(prev => (
                    prev === item ? '' : item))}
                  data-cy="AddButton"
                  type="button"
                  className={`button ${selectedGood === item && 'is-info'}`}
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
