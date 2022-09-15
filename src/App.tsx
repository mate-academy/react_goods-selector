import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

const goods = [
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

export type Props = {};

export type State = {
  selectGoods: string;
};

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    selectGoods: 'Jam',
  };

  selectedGoods = (item: string) => {
    this.setState({ selectGoods: item });
  };

  emptyGoods = () => {
    this.setState({ selectGoods: '' });
  };

  render() {
    const { selectGoods } = this.state;

    return (
      <main className="section container">
        {
          selectGoods
            ? (
              <h1 className="title is-flex is-align-items-center">
                {selectGoods}
                {' '}
                is selected
                { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.emptyGoods}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {
              goods.map(good => {
                const selected = selectGoods === good;

                return (
                  <tr
                    data-cy="Good"
                    key={good}
                    className={classNames(
                      { 'has-background-success-light': selected },
                    )}
                  >
                    {selectGoods === good
                      ? (
                        <td>
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={this.emptyGoods}
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
                              this.selectedGoods(good);
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
                );
              })
            }
          </tbody>
        </table>
      </main>
    );
  }
}
