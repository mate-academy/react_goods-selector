import React, { useState } from 'react';
import './App.scss';
import cn from 'classnames';

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

  function selectGood(el) {
    setSelectedGood(el);
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
            className={cn({
              good: true,
              selected: selectedGood === el,
            })}
            onClick={event => selectGood(el)}
            type="button"
            key={el}
          >
            {el}
          </button>
        ))
      }
    </div>
  );
}

export default App;
