import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { event } from 'cypress/types/jquery';

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
  const [selectedGood, SetGood] = useState('Jam');

  return (
    <main className="section container">
      {!selectedGood
        ? <h1 className="title">No goods selected</h1>
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                SetGood('');
              }}
            />
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              data-cy="Good"
              key={good}
              className={
                good === selectedGood
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  data-cy={
                    good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    good === selectedGood
                      ? 'button is-info'
                      : 'button'
                  }
                  onClick={() => {
                    if (selectedGood === good) {
                      SetGood('');
                    } else {
                      SetGood(good);
                    }
                  }}
                >
                  {
                    good === selectedGood
                      ? '-'
                      : '+'
                  }
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
