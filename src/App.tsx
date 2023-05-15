import 'bulma/css/bulma.css';
import './App.scss';
import React from 'react';

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
  selectedGood: string | null;
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  onClickHandler = (item: string | null) => {
    this.setState({
      selectedGood: item,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            <button
              type="button"
              data-cy="ClearButton"
              className="delete ml-3"
              onClick={() => this.onClickHandler(null)}
            >
              {' '}
            </button>
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map((item) => {
              return (
                <tr
                  data-cy="Good"
                  className={
                    selectedGood === item ? 'has-background-success-light' : ''
                  }
                >
                  <td>
                    {selectedGood === item ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => this.onClickHandler(null)}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.onClickHandler(item)}
                      >
                        +
                      </button>
                    )}
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
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
