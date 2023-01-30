import React from 'react';
import classNames from 'classnames';
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
  selectedGoodName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoodName: 'Jam',
  };

  render() {
    const { selectedGoodName } = this.state;

    return (
      <main className="section container">
        {
          selectedGoodName
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGoodName} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => {
                    this.setState({ selectedGoodName: '' });
                  }}
                />
              </h1>
            )
            : <h1 className="title">No goods selected</h1>
        }

        <table className="table">
          <tbody>
            {goods.map((name) => (
              <tr
                data-cy="Good"
                key={name}
                className={classNames({
                  'has-background-success-light':
                  (selectedGoodName === name),
                })}
              >

                {
                  selectedGoodName === name
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => {
                            this.setState({ selectedGoodName: '' });
                          }}
                        >
                          -
                        </button>
                      </td>
                    )
                    : (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.setState({ selectedGoodName: name });
                          }}
                        >
                          +
                        </button>
                      </td>
                    )
                }

                <td data-cy="GoodTitle" className="is-vcentered">
                  {name}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
