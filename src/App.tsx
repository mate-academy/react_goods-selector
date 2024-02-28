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

  clearSelectedGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  addSelectedGood = (newSelectedGood: string) => {
    this.setState({
      selectedGood: newSelectedGood,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === '' ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood} is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearSelectedGood}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(selected => {
              return (
                <tr
                  data-cy="Good"
                  className={
                    selectedGood === selected
                      ? 'has-background-success-light'
                      : ''
                  }
                  key={selected}
                >
                  {selectedGood !== selected ? (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.addSelectedGood(selected);
                        }}
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
                        onClick={this.clearSelectedGood}
                      >
                        -
                      </button>
                    </td>
                  )}

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {selected}
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
