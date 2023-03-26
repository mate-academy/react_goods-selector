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

interface State {
  selectedGood: string;
}

export const App: React.FC = () => {
  const [state, setState] = useState<State>({
    selectedGood: 'Jam',
  });

  const handleGoodSelect = (good: string) => {
    setState({ selectedGood: good });
  };

  const handleClearSelection = () => {
    setState({ selectedGood: '' });
  };

  const isGoodSelected = (good: string) => {
    return state.selectedGood === good;
  };

  return (
    <main className="section container">
      <h1 className="title">
        {state.selectedGood ? `${state.selectedGood} is selected` : 'No goods selected'}
      </h1>

      {state.selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              data-cy="Good"
              key={good}
              className={isGoodSelected(good)
                ? 'has-background-success-light' : ''}
            >
              <td>
                {!isGoodSelected(good) && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleGoodSelect(good)}
                  >
                    +
                  </button>
                )}

                {isGoodSelected(good) && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={handleClearSelection}
                  >
                    -
                  </button>
                )}
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
