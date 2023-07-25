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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        { (selectedGood.length > 0)
          ? (
            `${selectedGood} is selected`
          )
          : 'No goods selected'}
        { (selectedGood)
          ? (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setSelectedGood('');
              }}
            />
          )
          : ''}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;
            const trClassName = isSelected
              ? 'has-background-success-light' : '';
            const buttonClassName = `button ${isSelected ? 'is-info' : ''
            }`;

            return (
              <tr
                data-cy="Good"
                className={trClassName}
                key={good}
              >
                <td>
                  <button
                    onClick={() => {
                      setSelectedGood(good);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className={buttonClassName}
                  >
                    {isSelected ? '-' : '+'}
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
