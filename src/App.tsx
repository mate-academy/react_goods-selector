import { useState } from 'react';
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
] as const;

type Good = (typeof goods)[number];

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState<Good | null>('Jam');
  const setSelectedGoodHandler = (good: Good | null) => () =>
    setSelectedGood(good);

  const title = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  const buttonAdd = (good: Good) => (
    <button
      data-cy="AddButton"
      type="button"
      className="button"
      onClick={setSelectedGoodHandler(good)}
    >
      +
    </button>
  );

  const buttonRemove = (
    <button
      data-cy="RemoveButton"
      type="button"
      className="button is-info"
      onClick={setSelectedGoodHandler(null)}
    >
      -
    </button>
  );

  const selectedCssClass = 'has-background-success-light';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={setSelectedGoodHandler(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={selectedGood === good ? selectedCssClass : ''}
              data-cy="Good"
            >
              <td>{selectedGood === good ? buttonRemove : buttonAdd(good)}</td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
