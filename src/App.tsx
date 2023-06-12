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
  isSelected: boolean,
};

export class App extends React.Component <{}, State> {
  state = {
    selectedGood: 'Jam',
    isSelected: true,
  };

  activeHandler = (good: string) => {
    this.setState({
      selectedGood: good,
      isSelected: true,
    });
  };

  removeHandler = () => {
    this.setState({
      selectedGood: '',
      isSelected: false,
    });
  };

  render() {
    const { selectedGood, isSelected } = this.state;

    return (
      <main className="section container">
        {
          isSelected
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeHandler}
                />
              </h1>
            )
            : (<h1 className="title">No goods selected</h1>)
        }

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selectedGood === good,
                })}
              >
                {selectedGood === good
                  ? (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.removeHandler}
                      >
                        -
                      </button>
                    </td>
                  )
                  : (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.activeHandler(good);
                        }}
                      >
                        +
                      </button>
                    </td>
                  )}

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
