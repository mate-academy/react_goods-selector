import { Component } from 'react';
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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleGoodClick = (isCurrent: boolean, good: string) => {
    const nextGood = isCurrent ? '' : good;

    this.setState({ selectedGood: nextGood });
  };

  handleClearButtonClick = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood.length === 0 ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {this.state.selectedGood} is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClearButtonClick}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((good: string) => {
              const isCurrent = good === this.state.selectedGood;
              const buttonClassName = 'button' + (isCurrent ? ' is-info' : '');

              return (
                <tr
                  data-cy="Good"
                  className={isCurrent ? 'has-background-success-light' : ''}
                  key={good}
                >
                  <td>
                    <button
                      data-cy={isCurrent ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={buttonClassName}
                      onClick={() => this.handleGoodClick(isCurrent, good)}
                    >
                      {isCurrent ? '-' : '+'}
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
