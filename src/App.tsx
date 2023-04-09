import React from 'react';
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

interface GoodProps {
  name: string;
  selectedGood: string;
  setSelectedGood: (value: string) => void;
}

const Good: React.FC<GoodProps> = ({ selectedGood, setSelectedGood, name }) => (
  <tr data-cy="Good" className={selectedGood === name ? 'has-background-success-light' : ''}>
    <td>
      {selectedGood === name ? <button
        data-cy="RemoveButton"
        type="button"
        className="button is-info"
        onClick={() => setSelectedGood('')}
      >
        -
      </button>
        :
        <button
          data-cy="AddButton"
          type="button"
          className="button"
          onClick={() => setSelectedGood(name)}
        >
          +
        </button>
      }
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {name}
    </td>
  </tr>
)

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = React.useState('Jam');
  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center has-background-success-light">

        {selectedGood.length > 0 ? `${selectedGood} is selected` : 'No goods selected'}

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        {selectedGood && <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => <Good
            key={item}
            name={item}
            selectedGood={selectedGood}
            setSelectedGood={setSelectedGood}
          />
          )}
        </tbody>
      </table>
    </main>
  );
}

