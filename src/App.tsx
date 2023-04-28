/* eslint-disable jsx-a11y/control-has-associated-label */
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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [isGoodSelected, setIsGoodSelected] = useState(true);

  const handleSelect = (item: React.SetStateAction<string>) => {
    setSelectedGood(item);
    setIsGoodSelected(true);
  };

  const handleClearClick = () => {
    setSelectedGood('');
    setIsGoodSelected(false);
  };

  const goodsElements = goods.map(good => (
    <tr
      data-cy="Good"
      className={selectedGood === good ? 'has-background-success-light' : ''}
    >
      <td>
        {selectedGood !== good
          ? (
            <button
              data-cy="AddButton"
              type="button"
              className="button"
              onClick={() => handleSelect(good)}
            >
              +
            </button>
          )
          : (
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
              onClick={handleClearClick}
            >
              -
            </button>
          )}
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  ));

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isGoodSelected ? `${selectedGood} is selected` : 'No goods selected'}

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        {isGoodSelected
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleClearClick}
            />
          )}

      </h1>

      <table className="table">
        <tbody>
          {goodsElements}
        </tbody>
      </table>
    </main>
  );
};
