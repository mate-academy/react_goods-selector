import 'bulma/css/bulma.css';
import './App.scss';
import React from 'react';
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

type State = {
  selectedGud: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGud: 'Jam',
  };

  render() {
    const { selectedGud } = this.state;

    return (
      <main className="section container">
        {selectedGud
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGud} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGud: '' });
                }}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selectedGud === good,
                })}
              >
                <td>
                  {selectedGud === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          this.setState({
                            selectedGud: '',
                          });
                        }}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.setState({
                            selectedGud: good,
                          });
                        }}
                      >
                        +
                      </button>
                    )}
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
