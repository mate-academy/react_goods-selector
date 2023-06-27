import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
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

export const App = () => {
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value === ''
          ? ('No goods selected')
          : (
            <>
              {`${value} is selected`}

              {value && (
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => {
                    setValue('');
                  }}
                />
              )}
            </>
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selected = good === value;

            const goodClasses = classNames('', {
              'has-background-success-light': selected,
            });
            const buttonClasses = classNames('button', {
              'is-info': selected,
            });

            return (
              <tr
                data-cy="Good"
                className={goodClasses}
              >
                <td>
                  <button
                    data-cy={selected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={buttonClasses}
                    onClick={() => {
                      setValue(selected ? '' : good);
                    }}
                  >
                    {selected ? '-' : '+'}
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
