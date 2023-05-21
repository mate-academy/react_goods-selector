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
  selectedGood: string | null,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectGood = (product: string) => {
    if (this.state.selectedGood !== product) {
      this.setState({
        selectedGood: product,
      });
    } else {
      this.setState({
        selectedGood: null,
      });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: null });
                }}
              />
            </h1>

          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelect = selectedGood === good;

              return (
                <tr
                  data-cy="Good"
                  className={isSelect
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    <button
                      data-cy={isSelect
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={isSelect
                        ? 'button is-info'
                        : 'button'}
                      onClick={() => {
                        this.selectGood(good);
                      }}
                    >
                      {isSelect
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
