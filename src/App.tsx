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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  saveSelectedGood = (selectedGood: string) => {
    this.setState({ selectedGood });
  };

  removeSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;
    const { saveSelectedGood, removeSelectedGood } = this;

    return (
      <main className="section container">
        { selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={removeSelectedGood}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': (item === selectedGood),
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
                        onClick={removeSelectedGood}
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
                          saveSelectedGood(item);
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
