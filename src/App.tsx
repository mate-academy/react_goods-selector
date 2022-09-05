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

type State = {
  pressedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedGood: 'Jam',
  };

  render() {
    const { pressedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {pressedGood.length > 0 ? `${pressedGood} is selected` : 'No goods selected'}

          {pressedGood.length > 0
            && (
              /*  eslint-disable-next-line jsx-a11y/control-has-associated-label */
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ pressedGood: '' })}
              />
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={(
                  pressedGood === good
                    ? 'has-background-success-light'
                    : ''
                )}
              >
                <td>
                  <button
                    data-cy={(
                      pressedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    )}
                    type="button"
                    className={(
                      pressedGood === good
                        ? 'button is-info'
                        : 'button'
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
