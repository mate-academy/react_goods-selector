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

interface State {
  selectedGood:string | null;
}

export class App extends Component<{}, State> {
  state:Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClear = () => {
    this.setState({ selectedGood: null });
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

        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClear}
            >
              <></>
            </button>
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isGoodSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={isGoodSelected
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    <button
                      data-cy={isGoodSelected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={isGoodSelected
                        ? 'button is-info'
                        : 'button'}
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
