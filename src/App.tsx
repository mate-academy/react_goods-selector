import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === '' ? (
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
                () => this.setState({ selectedGood: '' })
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
                    classNames(
                      { 'has-background-success-light': selectedGood === item },
                    )
                  }
                  onClick={() => {
                    if (selectedGood === item) {
                      this.setState({ selectedGood: '' });
                    } else {
                      this.setState({ selectedGood: item });
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
