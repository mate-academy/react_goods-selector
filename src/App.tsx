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

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">

      {selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              onClick={() => {
                setSelectedGood('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )
        : <h1 className="title">No goods selected</h1>}

      <table className="table">
        <tbody>
          {goods.map(element => {
            const isSelected = element === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={
                  classNames({ 'has-background-success-light': isSelected })
                }
                key={element}
              >
                <td>
                  <button
                    onClick={() => {
                      return (isSelected
                        ? setSelectedGood('')
                        : setSelectedGood(element));
                    }}
                    data-cy={
                      isSelected
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                      classNames('button', { 'is-info': isSelected })
                    }
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {element}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
