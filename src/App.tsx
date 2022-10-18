import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

export const goods = [
  {
    name: 'Dumplings',
    id: 1,
  },
  {
    name: 'Carrot',
    id: 2,
  },
  {
    name: 'Eggs',
    id: 3,
  },
  {
    name: 'Ice cream',
    id: 4,
  },
  {
    name: 'Apple',
    id: 5,
  },
  {
    name: 'Bread',
    id: 6,
  },
  {
    name: 'Fish',
    id: 7,
  },
  {
    name: 'Honey',
    id: 8,
  },
  {
    name: 'Jam',
    id: 9,
  },
  {
    name: 'Garlic',
    id: 10,
  },
];

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  classGood = (selectGood: string, good: string) => (
    selectGood === good && 'has-background-success-light'
  );

  render() {
    const { selectedGood } = this.state;
    const {
      selectGood,
      removeGood,
      classGood,
    } = this;

    return (
      <main className="section container">
        <h1 className={cn(
          'title',
          { 'is-flex': selectedGood },
          { 'is-align-items-center': selectedGood },
        )}
        >
          {!selectedGood
            ? 'No goods selected'
            : (
              <>
                {`${selectedGood} is selected`}
                <button
                  data-cy="ClearButton"
                  type="button"
                  aria-label="Clear"
                  className="delete ml-3"
                  onClick={() => {
                    this.setState(removeGood);
                  }}
                />
              </>
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good.id}
                data-cy="Good"
                className={cn(classGood(selectedGood, good.name))}
              >
                <td>
                  <button
                    data-cy={selectedGood === good.name
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={cn(
                      'button',
                      { 'is-info': selectedGood === good.name },
                    )}
                    onClick={selectedGood === good.name
                      ? removeGood
                      : () => selectGood(good.name)}
                  >
                    {selectedGood === good.name
                      ? '-'
                      : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
