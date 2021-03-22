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

let prevButton;

const App = () => {
  const [selectedGood, selectGood] = useState('Jam');

  const changeGood = useCallback((selectEvent) => {
    const selectedButton = selectEvent.target;

    selectGood(selectedButton.parentNode.firstChild.textContent);

    selectedButton.hidden = true;

    if (prevButton) {
      prevButton.hidden = false;
    }

    prevButton = selectEvent.target;
  });

  const clearSelect = useCallback(() => {
    selectGood('');

    if (prevButton) {
      prevButton.hidden = false;
    }
  });

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
              onClick={changeGood}
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
