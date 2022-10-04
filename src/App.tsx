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

  changeState = (good: string): void => {
    this.setState({ selectedGood: good });
  };

  clearState = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood
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
                  this.clearState();
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
                className={good === selectedGood
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={good !== selectedGood
                      ? 'AddButton' : 'RemoveButton'}
                    type="button"
                    className={`button ${good === selectedGood && 'is-info'}`}
                    onClick={() => {
                      if (good !== selectedGood) {
                        this.changeState(good);
                      } else {
                        this.clearState();
                      }
                    }}
                  >
                    {good !== selectedGood ? '+' : '-'}
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
