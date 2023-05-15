import 'bulma/css/bulma.css';
import classNames from 'classnames';
import { Component } from 'react';
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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  RemoveButton = () => {
    this.setState({ selectedGood: '' });
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  AddButton = (goods: string) => {
    this.setState({ selectedGood: goods });
  };

  render() {
    const { selectedGood } = this.state;

    return (

      <main className="section container">
        {
          selectedGood === '' ? (
            <h1 className="title">
              No goods selected
            </h1>
          ) : (
            <h1 className="title is-flex is-align-items-center">
              {selectedGood}
              {' '}
              is selected
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={(this.RemoveButton)}
              />
            </h1>
          )
        }

        <table className="table">
          <tbody>
            {goods.map((good) => {
              return (
                <tr
                  ata-cy="Good"
                  className={classNames(
                    '',
                    { 'has-background-success-light': good === selectedGood },
                  )}
                >
                  {!selectedGood || good !== selectedGood ? (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.AddButton(good)}
                      >
                        +
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.RemoveButton}
                      >
                        -
                      </button>
                    </td>
                  )}
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
