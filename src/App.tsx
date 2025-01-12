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

type Props = {
  goods: string[];
};

type State = {
  selectedGood: string;
};

export class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleHighlight = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearState = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    return (
      <>
        <main className="section container">
          {this.state.selectedGood === '' ? (
            <h1 className="title">No goods selected</h1>
          ) : (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.selectedGood} is selected`}
              {this.state.selectedGood !== '' ? (
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clearState}
                />
              ) : null}
            </h1>
          )}
          <table className="table">
            <tbody>
              {goods.map(good => {
                return (
                  <>
                    <tr
                      key={good}
                      data-cy="Good"
                      className={
                        this.state.selectedGood === good
                          ? 'has-background-success-light'
                          : undefined
                      }
                    >
                      <td>
                        {this.state.selectedGood !== good ? (
                          <button
                            data-cy="AddButton"
                            type="button"
                            className="button"
                            onClick={() => this.handleHighlight(good)}
                          >
                            +
                          </button>
                        ) : (
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={this.clearState}
                          >
                            -
                          </button>
                        )}
                      </td>
                      <td data-cy="GoodTitle" className="is-vcentered">
                        {good}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </main>
      </>
    );
  }
}
