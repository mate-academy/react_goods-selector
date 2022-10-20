import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

export const goodsFromServer = [
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
  selectedGoods: string,
};

export class App extends React.Component <{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  isSelected = (good: string) => {
    if (this.state.selectedGoods === good) {
      this.resetSelectedGoods();
    } else {
      this.setState({ selectedGoods: good });
    }
  };

  resetSelectedGoods = () => {
    this.setState({ selectedGoods: '' });
  };

  render() {
    const { selectedGoods } = this.state;
    let message = 'No goods selected';

    if (selectedGoods) {
      message = `${selectedGoods} is selected`;
    }

    return (
      <div className="section container">
        <h1 className="title is-flex is-align-items-center">
          {message}

          {selectedGoods && (
            <button
              aria-label="clear"
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.resetSelectedGoods}
            />
          )}
        </h1>
        <table className="table">
          <tbody className="Good">
            {goodsFromServer.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames('Good',
                  {
                    'has-background-success-light': selectedGoods
                      .includes(good),
                  })}
              >
                <td>
                  { selectedGoods === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={this.resetSelectedGoods}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        this.isSelected(good);
                      }}
                    >
                      +
                    </button>
                  )}
                </td>
                <td
                  className="is-vcentered"
                  data-cy="GoodTitle"
                >
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
