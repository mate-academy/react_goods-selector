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
  const [food, setFood] = useState('');

  function addFood(typeOfFood) {
    return () => {
      setFood(typeOfFood);
    };
  }

  function resetFood() {
    setFood('');
  }

  const noFoodResponse = (
    <h1 className="title is-flex is-align-items-center">
      No goods selected
    </h1>
  );

  const foodResponse = (
    <h1 className="title is-flex is-align-items-center">
      {`${food} is selected`}
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={resetFood}
      />
    </h1>
  );

  return (
    <main className="section container">
      {food ? foodResponse : noFoodResponse}
      <table className="table">
        <tbody>
          <tr
            data-cy="Good"
            className={food === 'Dumplings' && 'has-background-success-light'}
          >
            <td>
              {food === 'Dumplings'
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={resetFood}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={addFood('Dumplings')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={food === 'Jam' && 'has-background-success-light'}
          >
            <td>
              {food === 'Jam'
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={resetFood}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={addFood('Jam')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={food === 'Garlic' && 'has-background-success-light'}
          >
            <td>
              {food === 'Garlic'
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={resetFood}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={addFood('Garlic')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
