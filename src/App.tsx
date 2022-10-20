import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goods: string[] = [
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
  selectedItem: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedItem: 'Jam',
  };

  saveSelectedItem = (selectedItem: string) => {
    this.setState({ selectedItem });
  };

  removeSelectedItem = () => {
    this.setState({ selectedItem: '' });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <main className="section container">
        {selectedItem
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedItem} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.removeSelectedItem}
              />
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': (item === selectedItem),
                })}
                key={item}
              >
                <td>
                  {(item === selectedItem)
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.removeSelectedItem}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.saveSelectedItem(item);
                        }}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
