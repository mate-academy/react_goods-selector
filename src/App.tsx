import 'bulma/css/bulma.css';
import './App.scss';
import { Component } from 'react';

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

export class App extends Component {
  state = {
    selected: 'Jam',
  };

  clearSelected = () => {
    this.setState({ selected: '' });
  }

  selectItem = (itemName: string) => {
    return () => this.setState({ selected: itemName })
  }

  render() {
    const { selected } = this.state;

    return (
      <main className="section container">
        {
          selected
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selected} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clearSelected}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {
              goods.map((item) => {
                return (
                  <tr
                    data-cy="Good"
                    key={item}
                    className={item === selected
                      ? 'has-background-success-light'
                      : undefined}
                  >
                    <td>
                      {
                        item === selected
                          ? (
                            <button
                              data-cy="RemoveButton"
                              type="button"
                              className="button is-info"
                              onClick={this.clearSelected}
                            >
                              -
                            </button>
                          )
                          : (
                            <button
                              data-cy="AddButton"
                              type="button"
                              className="button"
                              onClick={this.selectItem(item)}
                            >
                              +
                            </button>
                          )
                      }
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {item}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    );
  }
}
