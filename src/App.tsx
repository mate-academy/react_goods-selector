import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearSelection = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={
            classNames(
              'title',
              { 'is-flex is-align-items-center': selectedGood },
            )
          }
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}

                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.clearSelection}
                  aria-label="clear"
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              const isSelectedGood = good === selectedGood;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={
                    isSelectedGood
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    {
                      isSelectedGood
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
                            onClick={() => this.selectGood(good)}
                          >
                            +
                          </button>
                        )
                    }
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
