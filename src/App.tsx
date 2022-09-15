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

export type Props = {};

export type State = {
  selectedGood: string;
};

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selecteGood = (item: string) => {
    this.setState({ selectedGood: item });
  };

  clrearGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {selectedGood}
                {' '}
                is selected
                { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clrearGood}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {
              goods.map(good => {
                const selected = selectedGood === good;

                return (
                  <tr
                    data-cy="Good"
                    key={good}
                    className={classNames(
                      { 'has-background-success-light': selected },
                    )}
                  >
                    {selectedGood === good
                      ? (
                        <td>
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={this.clrearGood}
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
                              this.selecteGood(good);
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
