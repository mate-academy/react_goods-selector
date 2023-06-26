import { useState } from 'react';
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

export const App = () => {
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className={classNames('title',
        {
          title: selectedGood !== '',
          'is-flex': selectedGood !== '',
          'is-align-items-center': selectedGood !== '',
        })}
      >
        {selectedGood === '' ? (
          'No goods selected'
        ) : (
          <>
            {`${selectedGood} is selected`}

            {selectedGood !== '' && (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setGood('')}
              />
            )}
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button',
                      {
                        'is-info': isSelected,
                      })}
                    onClick={
                      isSelected
                        ? () => setGood('')
                        : () => setGood(good)
                    }
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
