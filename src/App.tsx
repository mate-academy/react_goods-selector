import { Component } from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';

type State = {
  goodChoosen: string,
};

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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    goodChoosen: 'Jam',
  };

  handleClickClearSelection = () => (
    this.setState({
      goodChoosen: '',
    })
  );

  handleClickAddSelection = (good: string) => (
    this.setState({
      goodChoosen: good,
    })
  );

  render() {
    const { goodChoosen } = this.state;

    return (
      <main className="section container">
        {goodChoosen.length ? (
          <h1 className="title is-flex is-align-items-center">
            {`${goodChoosen} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClickClearSelection}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">

          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': good === goodChoosen },
                )}
              >
                <td>
                  {good !== goodChoosen ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.handleClickAddSelection(good)}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.handleClickClearSelection}
                    >
                      -
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
