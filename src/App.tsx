import { Component } from 'react';
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
};

type Props = {};

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  deselectGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.deselectGood}
              >
                -
              </button>
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={selectedGood === good
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === good
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames(
                      'button',
                      {
                        'is-info': selectedGood === good,
                      },
                    )}
                    onClick={() => (
                      this.selectGood(good)
                    )}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
                </td>

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
