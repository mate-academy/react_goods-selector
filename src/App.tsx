/* eslint-disable no-else-return */
import React from 'react';
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

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const setValue = (newValue:string) => {
      this.setState({ selectedGood: newValue });
    };

    const removeGood = () => {
      this.setState({ selectedGood: '' });
    };

    return (
      <main className="section container">
        {(this.state.selectedGood === '')
          ? (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              { this.state.selectedGood }
              {' '}
              is selected
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => removeGood()}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((element) => {
              if (this.state.selectedGood === '') {
                return (
                  <tr data-cy="Good">
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setValue(element)}
                      >
                        +
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {element}
                    </td>
                  </tr>
                );
              }

              if (this.state.selectedGood === element) {
                return (
                  <tr data-cy="Good" className="has-background-success-light">
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setValue(element)}
                      >
                        -
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {element}
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr data-cy="Good">
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setValue(element)}
                      >
                        +
                      </button>
                    </td>
                    <td data-cy="GoodTitle" className="is-vcentered">
                      {element}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
