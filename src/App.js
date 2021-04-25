import React, { useState } from 'react';
import './App.scss';

const goodsFromServer = [
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

const App = () => {
  const [selectedGood, setSelected] = useState('Jam');

  function selectTitle() {
    if (selectedGood === null) {
      return 'No goods selected';
    }

    return `${selectedGood} is Select`;
  }

  return (
    <div className="App">
      <ul>
        <h1>
          {selectTitle()}
          <button
            type="button"
            onClick={() => setSelected(null)}
            hidden={selectedGood === null}
          >
            X
          </button>
        </h1>
        {goodsFromServer.map(product => (
          <li
            key={product}
            className={selectedGood === product ? 'selected' : undefined}
          >
            <span>
              {product}
              {' '}
            </span>

            <button
              type="button"
              onClick={() => setSelected(product)}
              hidden={selectedGood === product}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
