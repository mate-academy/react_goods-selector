/* eslint-disable jsx-a11y/control-has-associated-label */
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
  curentSelector: string,
};

export class App extends Component<{}, State> {
  state: State = {
    curentSelector: 'Jam',
  };

  removeSelecktor = () => {
    this.setState({
      curentSelector: '',
    });
  };

  render() {
    const {
      curentSelector,
    } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {curentSelector !== ''
            ? `${curentSelector} is selected`
            : 'No goods selected'}

          { (curentSelector !== '')
            && (
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeSelecktor}
              />
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(element => (
              <tr
                data-cy="Good"
                className={
                  (curentSelector !== element)
                    ? ''
                    : 'has-background-success-light'
                }
              >
                <td key={element}>
                  <button
                    data-cy={(curentSelector !== element)
                      ? 'AddButton'
                      : 'RemoveButton'}
                    type="button"
                    className={
                      (curentSelector !== element)
                        ? 'button'
                        : 'button is-info'
                    }
                    onClick={(curentSelector !== element)
                      ? () => {
                        this.setState({
                          curentSelector: element,
                        });
                      }
                      : this.removeSelecktor}
                  >
                    {curentSelector !== element
                      ? '+'
                      : '-'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  { element }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
