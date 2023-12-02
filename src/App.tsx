import 'bulma/css/bulma.css';
import { useState } from 'react';
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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState<string>('Jam');

  const handleClearSelected = () => {
    setSelectedGood('');
  };

  const handleSelectGood = (newGood:string) => {
    setSelectedGood(selectedGood === newGood ? '' : newGood);
  };

  type Props = {
    isSelected: boolean,
    good: string,
  };

  const CustomButton = (props:Props) => {
    const { isSelected, good } = props;

    return (
      <button
        data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
        type="button"
        className={`button ${isSelected ? 'is-info' : ''}`}
        onClick={() => handleSelectGood(good)}
      >
        {isSelected ? '-' : '+'}
      </button>
    );
  };

  return (
    <main className="section container">
      {!selectedGood
        ? <h1 className="title">No goods selected</h1>
        : (
          <h1 className="title is-flex is-align-items-centper">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleClearSelected}
            />
          </h1>
        )}
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              <td aria-label={good}>
                <CustomButton
                  isSelected={selectedGood === good}
                  good={good}
                />
              </td>

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
