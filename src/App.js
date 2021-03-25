import React, { useCallback, useState } from 'react';
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
  const [selectedGood, selectGood] = useState('Jam');

  const changeGood = useCallback(
    good => () => selectGood(good),
    [],
  );

  const clearSelect = useCallback(
    () => selectGood(''),
    [],
  );

  return (
    <div className="App">
      <h1>
        {`Selected good: ${selectedGood || 'None'} `}

        {!selectedGood || (
          <button type="button" onClick={clearSelect}>
            x
          </button>
        )}
      </h1>

      <ul>
        {goodsFromServer.map(good => (
          <li key={good}>
            <span className={good === selectedGood ? 'App__selected' : ''}>
              {good}
            </span>

            {' '}

            <button
              className="App__button"
              type="button"
              onClick={changeGood(good)}
              hidden={good === selectedGood}
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
