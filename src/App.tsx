import { Component } from 'react';
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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  buttonHandler = (good: string) => (
    this.setState(prevState => {
      const selectedGood = prevState.selectedGood === good ? '' : good;

      return { selectedGood };
    })
  );

  render() {
    const { selectedGood } = this.state;
    let isSelected = false;

    return (
      <main className="section container">
        {selectedGood ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.setState({ selectedGood: '' })}
            />
          </h1>
        ) : <h1 className="title">No goods selected</h1>}

        <table className="table">
          <tbody>
            {goods.map((good) => {
              isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    isSelected ? 'has-background-success-light' : ''
                  }
                >
                  <td>
                    <button
                      data-cy={
                        isSelected ? 'RemoveButton' : 'AddButton'
                      }
                      type="button"
                      className={
                        isSelected ? 'button is-info' : 'button'
                      }
                      onClick={() => this.buttonHandler(good)}
                    >
                      {isSelected ? '-' : '+'}
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
