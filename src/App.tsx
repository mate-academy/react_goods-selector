import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
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
  selectedGoods: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: 'Jam',
  };

  handleRemoveGoods = () => {
    this.setState({
      selectedGoods: '',
    });
  };

  handlePickGoods = (el: string) => {
    this.setState({
      selectedGoods: el,
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        {selectedGoods
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGoods} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleRemoveGoods}
              />
            </h1>
          ) : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(el => (
              <tr
                key={el}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light':
                    selectedGoods === el,
                })}
              >
                <td>
                  {selectedGoods === el
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleRemoveGoods}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handlePickGoods(el)}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {el}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
