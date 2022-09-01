import './App.scss';
import React, { useState } from 'react';
import className from 'classnames';
import goodsFromServer from './goods';

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelectedGood = (good: string) => {
    setSelectedGood(good);
  };

  const handleRemoveGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="App">
      <header className="App__header">
        <h1 className="App__title">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
        </h1>

        {selectedGood && (
          <button
            type="button"
            className="App__clear"
            onClick={handleRemoveGood}
          >
            Clear
          </button>
        )}

      </header>

      <ul>
        {goodsFromServer.map(good => (
          <li
            key={good}
            className={className('Good', {
              'Good--active': selectedGood === good,
            })}
          >
            {good}
            {selectedGood === good
              ? (
                <button
                  type="button"
                  className="Good__remove"
                  onClick={handleRemoveGood}
                >
                  Remove
                </button>
              )
              : (
                <button
                  type="button"
                  className="Good__select"
                  onClick={() => {
                    handleSelectedGood(good);
                  }}
                >
                  Select
                </button>
              )}
          </li>
        ))}
      </ul>
    </main>
  );
};
