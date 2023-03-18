import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
// eslint-disable-next-line import/no-extraneous-dependencies

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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  clickHandle = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        <h1 className="title is-flex is-align-items-center">
          {
            selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'
          }

          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clickHandle}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const selectedG = good === selectedGood;

              const selectedGoods = () => {
                this.setState({ selectedGood: good });
              };

              const classAdd = classNames({
                'has-background-success-light': selectedG,
              });

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classAdd}
                >
                  <td>
                    {
                      selectedG
                        ? (
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={this.clickHandle}
                          >
                            -
                          </button>
                        )
                        : (
                          <button
                            data-cy="AddButton"
                            type="button"
                            className="button"
                            onClick={() => {
                              selectedGoods();
                            }}
                          >
                            +
                          </button>
                        )
                    }
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
