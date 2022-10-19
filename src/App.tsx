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
  selectedGood: string
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearSelectedGood = () => (
    this.setState({ selectedGood: '' })
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood && (<h1 className="title">No goods selected</h1>)}

        {selectedGood && (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.clearSelectedGood();
              }}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': good === selectedGood },
                )}
              >
                <td>
                  {good === selectedGood
                    ? (
                      <button
                        data-cy="RemoveButton"
                        className="button is-info"
                        type="button"
                        onClick={() => {
                          this.setState({ selectedGood: '' });
                        }}
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
                          this.setState({ selectedGood: good });
                        }}
                      >
                        +
                      </button>
                    )}
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
