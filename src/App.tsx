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
  selected: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selected: goods[8],
  };

  render() {
    const { selected } = this.state;

    return (
      <main className="section container">
        {selected
          ? (
            <h1 className="title is-flex is-align-items-center">
              {selected}
              {' '}
              is selected

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({
                    selected: '',
                  });
                }}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={
                  classNames({
                    'has-background-success-light': selected === good,
                  })
                }
                key={good}
              >
                <td>
                  {selected !== good
                    ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => {
                          this.setState({
                            selected: good,
                          });
                        }}
                      >
                        +
                      </button>
                    )
                    : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => {
                          this.setState({
                            selected: '',
                          });
                        }}
                      >
                        -
                      </button>
                    )}
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
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
