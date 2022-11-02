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
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  cliking = (good: string) => {
    this.setState({
      selectedGood: good,
    });
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
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
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
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                <td>
                  {selectedGood === good ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={this.clear}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        this.addGoods(good);
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
