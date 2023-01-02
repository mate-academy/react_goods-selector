import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

export interface State {
  selectedGood: string
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleClick = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={cn(
          'title',
          {
            'is-flex is-align-items-center': selectedGood,
          },
        )}
        >
          {
            selectedGood
              ? (
                <>
                  {`${selectedGood} is selected`}
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete ml-3"
                    onClick={this.handleClick}
                  />
                </>
              )
              : ('No goods selected')
          }
        </h1>

        <table className="table">
          <tbody>
            <tr data-cy="Good">
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Dumplings
              </td>
            </tr>

            <tr data-cy="Good" className="has-background-success-light">
              <td>
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Jam
              </td>
            </tr>

            <tr data-cy="Good">
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Garlic
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
}
