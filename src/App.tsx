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

export const App: React.FC = () => {
  const defaultGood = 'Jam';
  const defaultSelection = goods.indexOf(defaultGood);
  const [selectedGood, setSelectedGood] = useState(defaultGood);
  const [
    selectedListItem,
    setSelectedListItem,
  ] = useState<string | null>(defaultSelection.toString());

  const AddSelectHandler = (
    event: React.MouseEvent,
    good: string,
  ) => {
    const currTarget = event.currentTarget.closest('tr');

    if (currTarget) {
      const selectedItem = currTarget.dataset.selected || null;

      setSelectedListItem(selectedItem);
    }

    setSelectedGood(good);
  };

  const clearHandler = () => {
    setSelectedListItem(null);
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          `${selectedGood} is selected`
        ) : (
          'No goods selected'
        )}

        {selectedGood && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => clearHandler()}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              data-cy="Good"
              key={good}
              data-selected={index}
              className={index.toString() === selectedListItem
                ? 'has-background-success-light' : ''}
            >
              {index.toString() === selectedListItem
              && (
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => clearHandler()}
                  >
                    -
                  </button>
                </td>
              )}

              {index.toString() !== selectedListItem
              && (
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={(e) => AddSelectHandler(e, good)}
                  >
                    +
                  </button>
                </td>
              )}

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
