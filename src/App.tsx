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

export class App extends Component {
  state = {
    selectedGood: 'Jam',
  };

  handleClear = () => {
    this.setState({ selectedGood: '' });
  };

  handleClick = (good: string) => {
    return this.state.selectedGood === good
      ? this.setState({ selectedGood: '' })
      : this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
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
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isGoodSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': isGoodSelected },
                  )}
                >
                  <td>
                    <button
                      data-cy={classNames(
                        { AddButton: !isGoodSelected },
                        { RemoveButton: isGoodSelected },
                      )}
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': isGoodSelected },
                      )}
                      onClick={() => {
                        this.handleClick(good);
                      }}
                    >
                      {isGoodSelected ? '-' : '+'}
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
