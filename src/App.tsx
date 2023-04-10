import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Good } from './components/Good';

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


export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = React.useState('Jam');

  return (
    <main className="section container">
      <h1
        className="
          title is-flex
          is-align-items-center
          has-background-success-light"
      >
        {selectedGood.length > 0 ? `${selectedGood} is selected` : 'No goods selected'}
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        {selectedGood && (
          <button
            aria-label="Clear"
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <Good
              key={item}
              name={item}
              selectedGood={selectedGood}
              setSelectedGood={setSelectedGood}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
