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

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {this.state.selectedGood === ''
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({
                    selectedGood: '',
                  });
                }}
              />
            </h1>
          )
        }

        <table className="table">
          <tbody>
            {
              goods && goods.map((object) => (
                <tr
                  data-cy="Good"
                  key={object}
                  className={classNames({
                    'has-background-success-light': object === selectedGood,
                  })}
                >
                  <td>
                    {object === selectedGood
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => {
                            this.setState({
                              selectedGood: '',
                            });
                          }}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.setState({
                              selectedGood: object,
                            });
                          }}
                        >
                          +
                        </button>
                      )
                    }
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {object}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    );
  }
}
