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
  selectedGood: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    selectedGood: '',
  };

  saveSelectedItem = (selectedGood: string) => {
    this.setState({ selectedGood });
  };

  removeSelectedItem = () => {
    this.setState({ selectedGood: '' });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => this.setState({ selectedGood: '' })}
          />
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light':
                  (item === selectedGood),
                })}
                key={item}
              >
                <td>
                  {(item === selectedGood)
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
