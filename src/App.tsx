import { Component } from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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
  selectedGood: string | null,
};

export class App extends Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames(
          'title',
          { 'is-flex is-align-items-center': selectedGood },
        )}
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => {
                    this.setState({ selectedGood: null });
                  }}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(name => (
              <tr
                data-cy="Good"
                key={name}
                className={classNames({
                  'has-background-success-light': name === selectedGood,
                })}
              >
                <td>
                  {name !== selectedGood ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        this.setState({ selectedGood: name });
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {this.setState({ selectedGood: null })}}
                    >
                      -
                    </button>
                  )}

                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
