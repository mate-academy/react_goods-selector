import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  pressedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedGood: 'Jam',
  };

  render() {
    const { pressedGood } = this.state;
    const handleClear = () => this.setState({ pressedGood: '' });

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {pressedGood.length
            ? `${pressedGood} is selected`
            : 'No goods selected'}

          {pressedGood.length > 0
            && (

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={handleClear}
              >
                Clear
              </button>
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': pressedGood !== good,
                })}
              >
                <td>
                  <button
                    data-cy={(
                      pressedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    )}
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': pressedGood === good },
                    )}
                    onClick={() => (this.state.pressedGood === good
                      ? this.setState({ pressedGood: '' })
                      : this.setState({ pressedGood: good }))}
                  >
                    {pressedGood === good ? '-' : '+'}
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
