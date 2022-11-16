import React from 'react';
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

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clear = () => {
    this.setState({ selectedGood: '' });
  };

  addGoods = (good: string) => {
    if (this.state.selectedGood === good) {
      this.clear();
    } else {
      this.setState({ selectedGood: good });
    }
  };

  render() {
    const { selectedGood } = this.state;
    let message = 'No goods selected';

    if (selectedGood) {
      message = `${selectedGood} is selected`;
    }

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {message}

          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              aria-label="clear"
              onClick={this.clear}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames('Good',
                  {
                    'has-background-success-light': selectedGood
                      .includes(good),
                  })}
              >
                <td>
                  {selectedGood === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.clear}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => (
                        this.addGoods(good)
                      )}
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
