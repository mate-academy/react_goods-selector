import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

// interface Props {
//   goodsList: string[];
// }

interface State {
  selectedGood: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  handleGoodSelection = (_event: React.MouseEvent, good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  handleGoodRemoval = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (

      <main className="section container">

        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleGoodRemoval}
              />
            </h1>

          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => {
              let isSelected = false;

              if (good === selectedGood) {
                isSelected = true;
              }

              const className = cn({
                'has-background-success-light': isSelected,
              });

              return (
                <tr key={good} data-cy="Good" className={className}>
                  <td>
                    {isSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.handleGoodRemoval}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={
                            (event) => this.handleGoodSelection(event, good)
                          }
                        >
                          +
                        </button>
                      )}
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
