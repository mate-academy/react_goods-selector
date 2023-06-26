import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  const messege = selectedGood.length > 0 ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <h1 className={cn('title', {
        'title is-flex is-align-items-center': selectedGood.length > 0,
      })}
      >
        {messege}
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          style={{ display: selectedGood.length > 0 ? 'block' : 'none' }}
          onClick={() => {
            setSelectedGood('');
          }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn('', {
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>
                <button
                  data-cy={`${selectedGood === good ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={cn('button', {
                    ' is-info': selectedGood === good,
                  })}
                  onClick={() => {
                    setSelectedGood(good);
                  }}
                >
                  {selectedGood === good ? '-' : '+'}
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
