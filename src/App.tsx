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

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearComponent = () => {
    this.setState({ selectedGood: '' });
  };

  addButton(good: string) {
    this.setState({ selectedGood: good });
  }

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearComponent}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const selected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    selected
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy={`${selected
                        ? 'RemoveButton'
                        : 'AddButton'
                      }`}
                      type="button"
                      className={`button ${selected ? 'is-info' : ''}`}
                      onClick={
                        selected
                          ? this.clearComponent
                          : () => this.addButton(good)
                      }
                    >
                      {`${selected ? '-' : '+'}`}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
