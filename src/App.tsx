import { Component } from 'react';
import classNames from 'classnames';
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

type State = {
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearGoods = (): void => {
    this.setState({ selectedGood: '' });
  };

  toggleGood = (good: string): void => {
    return (this.state.selectedGood === good)
      ? this.clearGoods()
      : this.setState({ selectedGood: good });
  };

  chooseOption = (good: string, optionTrue: string, optionFalse: string) => {
    return (this.state.selectedGood === good)
      ? optionTrue
      : optionFalse;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood}
              {' is selected'}

              <button
                aria-label="clearList"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearGoods}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  <button
                    data-cy={
                      this.chooseOption(good, 'RemoveButton', 'AddButton')
                    }
                    type="button"
                    className={classNames(
                      'button',
                      {
                        'is-info': selectedGood === good,
                      },
                    )}
                    onClick={() => this.toggleGood(good)}
                  >
                    {this.chooseOption(good, '-', '+')}
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
