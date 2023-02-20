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
    selectedGood: 'Jam',
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.selectedGood !== ''
            ? `${this.state.selectedGood} is selected`
            : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {this.state.selectedGood !== '' && (
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
              return (
                <tr
                  data-cy="Good"
                  className={
                    good === this.state.selectedGood
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy={
                        good === this.state.selectedGood
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        good === this.state.selectedGood
                          ? 'button is-info'
                          : 'button'
                      }
                      onClick={() => (
                        this.state.selectedGood === good
                          ? this.setState({ selectedGood: '' })
                          : this.setState({ selectedGood: good })
                      )}
                    >
                      {this.state.selectedGood === good
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
