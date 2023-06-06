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

export class App extends React.Component {
  state = {
    cellCheck: false,
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;
    const { cellCheck } = this.state;

    return (
      <main className="section container">
        {cellCheck ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={
                () => this.setState({ selectedGood: '', cellCheck: true })
              }
            />
          </h1>
        )}
        <table className="table">
          <tbody>
            {goods.map((item) => {
              return (
                <tr
                  data-cy="Good"
                  key={item}
                  className={
                    selectedGood === item ? 'has-background-success-light' : ''
                  }
                  onClick={() => {
                    if (selectedGood === item) {
                      this.setState({ selectedGood: '', cellCheck: true });
                    } else {
                      this.setState({ selectedGood: item, cellCheck: false });
                    }
                  }}
                >
                  <td>
                    {selectedGood === item ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
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
