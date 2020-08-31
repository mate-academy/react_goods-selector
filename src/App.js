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

function App() {
  const [selectedGood, setSelectedGood] = useState('');
  const goods = [...document.querySelectorAll('.good')];

  function selectGood(target, el) {
    setSelectedGood(el);
    cleanGoodClass();
    target.classList.add('selected');
  }

  function removeSelectedGood() {
    setSelectedGood('');
    cleanGoodClass();
  }

  function cleanGoodClass() {
    for (let i = 0; i < goods.length; i += 1) {
      goods[i].className = 'good';
    }
  }

  return (
    <div className="App">
      <div className="selectedGood">
        <h1>
          Selected good:
          {selectedGood}
        </h1>
        <button
          className="selectedGood__btnX"
          onClick={removeSelectedGood}
          type="button"
        >
          X
        </button>
      </div>
      {
        goodsFromServer.map(el => (
          <button
            onClick={event => selectGood(event.target, el)}
            className="good"
            key={Math.random()}
            type="button"
          >
            {el}
          </button>
        ))
      }
    </div>
  );
}

export default App;
