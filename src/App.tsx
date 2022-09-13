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

type Props = {};

type State = {
  selectedGood: string;
};

export class App extends React.Component <Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClick = (good: string) => {
    if (good === this.state.selectedGood) {
      this.setState({ selectedGood: '' });
    } else {
      this.setState({ selectedGood: good });
    }
  };

  handleClear = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === ''
          ? (
            <h1 className="title">No goods selected</h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleClear}
              />
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map(good => {
              const selected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames(
                    { 'has-background-success-light': good === selectedGood },
                  )}
                >
                  <td>
                    <button
                      onClick={() => this.handleClick(good)}
                      data-cy={selected
                        ? (
                          'RemoveButton'
                        )
                        : (
                          'AddButton'
                        )}
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': selected },
                      )}
                    >
                      {selected
                        ? '-'
                        : '+'}
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
