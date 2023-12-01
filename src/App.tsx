import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
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

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState<string>('Jam');

  const addGoodHandler = (element: string) => {
    setSelectedGood(element);
  };

  const removeGoodHandler = () => {
    setSelectedGood('');
  };

  const button = (element: string) => {
    if (element === selectedGood) {
      return (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={removeGoodHandler}
        >
          -
        </button>
      );
    }

    return (
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={
          () => addGoodHandler(element)
        }
      >
        +
      </button>
    );
  };

  return (
    <main className="section container">
      {selectedGood.length > 0
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={removeGoodHandler}
            />
          </h1>
        )
        : (<h1 className="title">No goods selected</h1>) }

      <table className="table">
        <tbody>
          {goods.map((element => {
            const itemClasses = classNames({
              'base-class': true,
              'has-background-success-light': selectedGood === element,
            });

            return (
              <tr
                data-cy="Good"
                key={element}
                className={itemClasses}
              >
                <td>

                  {button(element)}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {element}
                </td>
              </tr>
            );
          }))}
        </tbody>
      </table>
    </main>
  );
};
