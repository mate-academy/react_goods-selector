import { Component } from 'react';
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
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: goods[goods.indexOf('Jam')] || '',
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood !== ''
            ? `${this.state.selectedGood} is selected`
            : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {this.state.selectedGood && (
            <button
              data-cy="ClearButton"
              aria-label="Clear"
              type="button"
              className="delete ml-3"
              onClick={() => this.setState({ selectedGood: '' })}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const sameGoods: boolean = good === this.state.selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    sameGoods
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy={
                        sameGoods
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        sameGoods
                          ? 'button is-info'
                          : 'button'
                      }
                      onClick={() => (
                        sameGoods
                          ? this.setState({ selectedGood: '' })
                          : this.setState({ selectedGood: good })
                      )}
                    >
                      {sameGoods
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
