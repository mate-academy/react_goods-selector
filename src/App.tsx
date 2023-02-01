import { Component } from 'react';
import cd from 'classnames';
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

interface States {
  selectedGood: string;
}

export class App extends Component<{}, States> {
  state = {
    selectedGood: 'Jam',
  };

  select = (good: string) => {
    if (good === this.state.selectedGood) {
      this.setState({
        selectedGood: '',
      });

      return;
    }

    this.setState({
      selectedGood: good,
    });
  };

  render() {
    const { selectedGood } = this.state;
    let title = <h1 className="title">No goods selected</h1>;

    if (selectedGood) {
      title = (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      );
    }

    return (
      <main className="section container">

        {title}

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={cd('', {
                    'has-background-success-light': good === selectedGood,
                  })}
                  key={good}
                >
                  <td>

                    {good !== selectedGood
                      ? (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.select(good);
                          }}
                        >
                          +
                        </button>
                      )
                      : (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => {
                            this.select(good);
                          }}
                        >
                          -
                        </button>
                      )}

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
