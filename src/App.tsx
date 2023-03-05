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
        {selectedGood === ''
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              <button
                aria-label="button"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => {
              const select = good === selectedGood;
              const activeButton = select ? 'RemoveButton' : 'AddButton';

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': select },
                  )}
                >
                  <td>
                    <button
                      data-cy={activeButton}
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': select },
                      )}
                      onClick={() => {
                        this.setState({ selectedGood: select ? '' : good });
                      }}
                    >
                      {select ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
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
