import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type State = {
  isSelected: boolean,
  selectedGood: string,
};

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

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isSelected: true,
    selectedGood: 'Jam',
  };

  clearSelector = () => {
    this.setState({ isSelected: false, selectedGood: '' });
  };

  render(): React.ReactNode {
    const { isSelected, selectedGood } = this.state;

    return (
      <main className="section container">
        {isSelected ? (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood}
            {' '}
            is selected

            <button
              aria-label="a"
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearSelector}
            />
          </h1>
        )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={good === selectedGood
                  ? 'has-background-success-light'
                  : ''}
                key={good}
              >
                <td>
                  <button
                    data-cy={good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={good === selectedGood
                      ? 'button is-info'
                      : 'button'}
                    onClick={() => {
                      if (good === selectedGood) {
                        this.clearSelector();
                      } else {
                        this.setState({ selectedGood: good, isSelected: true });
                      }
                    }}
                  >
                    {good === selectedGood ? '-' : '+'}
                  </button>
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
  }
}
