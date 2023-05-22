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
  selectedGoods: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  removeOption = () => {
    this.setState({ selectedGoods: '' });
  };

  addOption = (good: string) => {
    this.setState({ selectedGoods: good });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        {!selectedGoods ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGoods} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.removeOption}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': good === selectedGoods,
                })}
              >
                <td>
                  {good === selectedGoods ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.removeOption}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.addOption(good)}
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
