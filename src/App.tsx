/* eslint-disable */
import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = ['Dumplings', 'Carrot', 'Eggs',
  'Ice cream', 'Apple', 'Bread', 'Fish', 'Honey', 'Jam', 'Garlic'];

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<string[]>([]);

  const clearAll = () => {
    return setSelectedGoods([]);
  };

  const handleSelectGood = (good: string) => {
    setSelectedGoods(
      (selectedGoods: string[]) => (selectedGoods.includes(good)
        ? selectedGoods.filter((selectedGood) => selectedGood !== good)
        : [...selectedGoods, good]),
    );
  };

  return (
    <main className="section container">
      {selectedGoods.length < 1
        ? <h1 className="title">No goods selected</h1>
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGoods.join(', ')} is selected`}
            <button
              onClick={clearAll}
              className="delete ml-3"
              type="button"
              data-cy="ClearButton"
            />
          </h1>
        )}
      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGoods.includes(good);

            return (
              <tr
                key={good}
                className={isSelected ? 'has-background-success-light' : ''}
                data-cy="Good"
              >
                <td>
                  <button
                    id={good}
                    onClick={() => handleSelectGood(good)}
                    className="button"
                    data-cy="AddButton"
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>
                <td
                  className="is-vcentered"
                  data-cy="GoodTitle"
                >
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
