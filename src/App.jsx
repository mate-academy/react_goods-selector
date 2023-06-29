import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

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
  const [selectedGood, setValue] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setValue('')}
            />
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
    }
      <table className="table">
        <tbody>
          {goods.map((item) => {
            const isSelectedGood = selectedGood === item;

            return (
              <tr
                data-cy="Good"
                className={isSelectedGood && 'has-background-success-light'}
              >
                <td>
                  <button
                    data-cy={isSelectedGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelectedGood ? 'button is-info' : 'button'}
                    onClick={() => (isSelectedGood
                      ? setValue('')
                      : setValue(item))}
                  >
                    {isSelectedGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
