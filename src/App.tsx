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
  selectedItem: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedItem: 'Jam',
  };

  render() {
    const { selectedItem } = this.state;
    const successBg = 'has-background-success-light';

    return (
      <main className="section container">
        {!selectedItem
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedItem} is selected`}
              <button
                data-cy="ClearButton"
                aria-label="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ selectedItem: '' })}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(item => {
              return (
                <tr
                  data-cy="Good"
                  className={classNames({ [successBg]: selectedItem === item })}
                  key={item}
                >
                  <td>
                    {selectedItem === item
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => this.setState({ selectedItem: '' })}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.setState({ selectedItem: item })}
                        >
                          +
                        </button>
                      )}
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
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
