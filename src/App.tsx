import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods: string[] = [
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
  things: string[];
  selectedItem: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    things: goods,
    selectedItem: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedItem: good });
  };

  clearSelection = () => {
    this.setState({
      selectedItem: '',
    });
  };

  render() {
    const {
      things,
      selectedItem,
    } = this.state;

    return (
      <main className="section container">
        <h1
          className={
            selectedItem
              ? 'title is-flex is-align-items-center'
              : 'title'
          }
        >
          {selectedItem
            ? (
              <>
                {`${selectedItem} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clearSelection}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {things.map(thing => {
              return (
                <tr
                  data-cy="Good"
                  className={
                    thing === selectedItem
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    {
                      selectedItem === thing
                        ? (
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={this.clearSelection}
                          >
                            -
                          </button>
                        )
                        : (
                          <button
                            data-cy="AddButton"
                            type="button"
                            className="button"
                            onClick={() => this.selectGood(thing)}
                          >
                            +
                          </button>
                        )
                    }
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {thing}
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
