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

interface Props {
  goods: string[];
}

interface State {
  selectedGood: string;
}

export class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClick = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render() {
    return (
      <>
        <main className="section container">
          <h1 className="title">
            {this.state.selectedGood
              ? `${this.state.selectedGood} is selected`
              : 'No goods selected'}
            {this.state.selectedGood && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              ></button>
            )}
          </h1>
          <table className="table">
            <tbody>
              {goods.map(good => {
                return (
                  <tr
                    key={good}
                    data-cy="Good"
                    className={
                      this.state.selectedGood === good
                        ? 'has-background-success-light'
                        : ''
                    }
                  >
                    <td>
                      {this.state.selectedGood === good ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-danger button is-info"
                          onClick={() => {
                            this.setState({
                              selectedGood: '',
                            });
                          }}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button is-info"
                          onClick={() => this.handleClick(good)}
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
      </>
    );
  }
}
