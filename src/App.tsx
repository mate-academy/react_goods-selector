import 'bulma/css/bulma.css';
import './App.scss';

import React, { useState } from 'react';

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

type GoodProps = {
  isSelected: boolean;
  name: string;
  setSelectedGood: (good: string | null) => void;
};

const Good: React.FC<GoodProps> = ({ setSelectedGood, isSelected, name }) => {
  return (
    <tr
      data-cy="Good"
      className={isSelected ? 'has-background-success-light' : ''}
    >
      <td>
        {isSelected ? (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={() => setSelectedGood(null)}
          >
            -
          </button>
        ) : (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={() => setSelectedGood(name)}
          >
            +
          </button>
        )}
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {name}
      </td>
    </tr>
  );
};

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState<string | null>('Jam');

  const title = (
    <h1
      className={
        'title ' +
        (selectedGood === null ? '' : 'is-flex is-align-items-center')
      }
    >
      {selectedGood === null
        ? 'No goods selected'
        : `${selectedGood} ${selectedGood[selectedGood.length - 1] === 's' ? 'are' : 'is'} selected`}

      {selectedGood !== null && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood(null)}
        />
      )}
    </h1>
  );

  return (
    <main className="section container">
      {title}

      <table className="table">
        <tbody>
          {goods.map((good, i) => (
            <Good
              key={i}
              isSelected={good === selectedGood}
              name={good}
              setSelectedGood={setSelectedGood}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
