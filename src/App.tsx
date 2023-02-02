import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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
  selectedGoods: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="section container">
        {!selectedGoods
          ? (<h1 className="title">No goods selected</h1>)
          : (
            <h1 className="title is-flex is-align-items-center">

              {selectedGoods}

              {' '}

              is selected

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGoods: null });
                }}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': good === selectedGoods,
                })}
              >
                <td>
                  <button
                    data-cy={good === selectedGoods
                      ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames(
                      'button',
                      {
                        'is-info': good === selectedGoods,
                      },
                    )}
                    onClick={(event) => {
                      const atribute = event.currentTarget
                        .getAttribute('data-cy');

                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                      this.setState({
                        selectedGoods: atribute === 'RemoveButton'
                          ? null
                          : good,
                      });
                    }}
                  >
                    {good === selectedGoods ? '-' : '+'}
                  </button>
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
