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
  selectedGood: string | null;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: null });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: null });
                }}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={selectedGood === good
                  ? 'has-background-success-light' : ''}
                key={good}
              >
                <td>
                  <button
                    data-cy={selectedGood === good
                      ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={selectedGood === good
                      ? 'button is-info' : 'button'}
                    onClick={() => {
                      this.addGood(good);
                      if (selectedGood === good) {
                        this.removeGood();
                      }
                    }}
                  >
                    {selectedGood === good ? '-' : '+'}
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
