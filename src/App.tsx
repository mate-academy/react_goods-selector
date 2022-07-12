import React from 'react';
import './App.scss';

// import goodsFromServer from './goods';

export const App: React.FC = () => {
  return (
    <main className="App">
      <header className="App__header">
        <h1 className="App__title">
          Jam is selected
        </h1>

        <button
          type="button"
          className="App__clear"
        >
          Clear
        </button>
      </header>

      <ul>
        <li className="Good">Dumplings</li>
        <li className="Good">Carrot</li>
        <li className="Good">Eggs</li>
        <li className="Good">Ice cream</li>
        <li className="Good">Apple</li>
        <li className="Good">Bread</li>
        <li className="Good">Fish</li>
        <li className="Good">Honey</li>
        <li className="Good Good--active">Jam</li>
        <li className="Good">Garlic</li>
      </ul>

      {/* Put required buttons into each Good */}
      <button
        type="button"
        className="Good__remove"
      >
        Remove
      </button>

      <button
        type="button"
        className="Good__select"
      >
        Select
      </button>
    </main>
  );
};
