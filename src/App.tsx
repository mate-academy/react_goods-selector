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

type Good = (typeof goods)[number];

export const App: React.FC = () => {
  const [ selectedGood, setSelectedGoods] = useState<Good | null>('Jam');
  const selectedHandler = (good: Good | null) => {
    setSelectedGoods(good);
  };

  const title = selectedGood
  ? `${selectedGood} is selected`
  : 'No goods selected';

  const addButton = (good: Good) => (
    <button 
      data-cy="AddButton" 
      type="button" 
      className="button"
      onClick={() => selectedHandler(good)}
    >
      +
    </button>
  );
  const removeButton = (
    <button
      data-cy="RemoveButton"
      type="button"
      className="button is-info"
      onClick={() => selectedHandler(null)}
    >
      -
    </button>
  );
    
  
  return(
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
       {title}
        {selectedGood && (
          <button 
            data-cy="ClearButton" 
            type="button" 
            className="delete ml-3" 
            onClick={() => selectedHandler(null)}
          />
        )}
      </h1>
  
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr 
              data-cy="Good"
              key={good}
              className={selectedGood === good ? 'has-background-success-light' : ''}>
              <td>{selectedGood === good ? removeButton : addButton(good)}</td>
  
              <td 
                data-cy="GoodTitle" 
                className="is-vcentered"
              >
              {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

