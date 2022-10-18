import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

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

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  cancelSelect = () => {
    this.setState({
      selectedGood: '',
    });
  };

  addSelected = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={classNames(
          'title',
          { 'is-flex': selectedGood },
          { 'is-align-items-center': selectedGood },
        )}
        >
          {!selectedGood
            ? 'No goods selected'
            : (
              <>
                {`${selectedGood} is selected`}
                <button
                  data-cy="ClearButton"
                  type="button"
                  aria-label="Clear"
                  className="delete ml-3"
                  onClick={() => {
                    this.setState(this.cancelSelect);
                  }}
                />
              </>
            )}
        </h1>
        <table className="table">
          <tbody>
            {goods.map((good) => {
              return (
                <tr
                  data-cy="Good"
                  key={uuidv4()}
                  className={classNames({
                    'has-background-success-light':
                      selectedGood === good,
                  })}
                >
                  {selectedGood !== good
                    ? (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => this.addSelected(good)}
                        >
                          +
                        </button>
                      </td>
                    )
                    : (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => this.cancelSelect()}
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
