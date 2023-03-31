/* eslint-disable jsx-a11y/control-has-associated-label */
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import { Component } from 'react';
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
  selected: string;
};

export class App extends Component<{}, State> {
  state: State = {
    selected: 'Jam',
  };

  checkGood = (good: string) => {
    this.setState({
      selected: good,
    });
  };

  unCheckGood = () => {
    this.setState({
      selected: '',
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <main className="section container">
        {selected
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selected} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.unCheckGood}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={classNames(
                  {
                    'has-background-success-light': good === selected,
                  },
                )}
              >
                <td>
                  {good === selected
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.unCheckGood}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.checkGood(good)}
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
