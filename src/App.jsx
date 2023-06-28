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
  const [hasSelect, setHasSelect] = useState(true);
  const [selectGood, setSelectGood] = useState('Jam');

  const handleDeleteSelect = () => {
    setSelectGood('');
    setHasSelect(false);
  };

  const handleAddSelect = (good) => {
    setSelectGood(good);
    setHasSelect(true);
  };

  return (
    <main className="section container">

      {hasSelect
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => handleDeleteSelect()}
            />
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectGood === good
                ? 'has-background-success-light'
                : ''
              }
            >
              <td>
                {selectGood === good
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => handleDeleteSelect()}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleAddSelect(good)}
                    >
                      +
                    </button>
                  )
                }
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
