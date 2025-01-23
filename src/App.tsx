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
    selectedGood: 'Jam',
    isSelected: true,
    classNames: `has-background-success-light`,
  };

  render() {
    return (
      <main className="section container">
        {this.state.isSelected ? (
          <h1 className="title is-flex is-align-items-center">
            {this.state.selectedGood} is selected
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.setState({
                  isSelected: false,
                  selectedGood: '',
                  classNames: ``,
                });
              }}
            />
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
                key={item}
                className={
                  this.state.selectedGood === item ? this.state.classNames : ''
                }
              >
                <td>
                  {this.state.selectedGood !== item ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        this.setState({
                          isSelected: true,
                          selectedGood: item,
                          classNames: `has-background-success-light`,
                        });
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        this.setState({
                          isSelected: false,
                          selectedGood: '',
                        });
                      }}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
