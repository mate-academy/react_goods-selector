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

export class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  handleSelect = (goodText: string) => {
    const goodTitle = goodText;

    if (this.state.selectedGood === goodText) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: goodTitle });
    }
  };

  handleUnselect = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              { `${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleUnselect}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>

            {goods.map(
              item => {
                const checkIfSelected = () => selectedGood === item;

                return (
                  <tr
                    data-cy="Good"
                    key={item}
                    className={checkIfSelected()
                      ? 'has-background-success-light'
                      : ''}
                  >
                    <td>
                      <button
                        data-cy={checkIfSelected()
                          ? 'RemoveButton'
                          : 'AddButton'}
                        type="button"
                        className={checkIfSelected()
                          ? 'button is-info'
                          : 'button'}
                        onClick={() => {
                          this.handleSelect(item);
                        }}
                      >
                        {checkIfSelected()
                          ? '-'
                          : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {item}
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </main>
    );
  }
}
