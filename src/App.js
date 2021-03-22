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

let prevButton;

const App = () => {
  const [selectedGood, selectGood] = useState('Jam');

  const changeGood = (selectEvent) => {
    const selectedButton = selectEvent.target;

    selectGood(selectedButton.parentNode.firstChild.textContent);

    selectedButton.hidden = true;

    if (prevButton) {
      prevButton.hidden = false;
    }

    prevButton = selectEvent.target;
  };

  const clearSelect = () => {
    selectGood(null);

    if (prevButton) {
      prevButton.hidden = false;
    }
  };

  return (
    <div className="App">
      <h1>
        {`Selected good: `}
        <span className="App__selected-good">
          {selectedGood}
        </span>
        {!selectedGood || (
          <button type="button" onClick={clearSelect}>
            x
          </button>
        )}

      </h1>
      <ul>
        {goodsFromServer.map((good, index) => (
          <li key={good} className="App__good">
            {`${good} `}
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
