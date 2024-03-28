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

  setSelectedEmpty = () => {
    this.setState({ selectedGood: '' });
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood === ''
            ? 'No goods selected'
            : `${selectedGood} is selected`}
          {selectedGood !== '' && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.setSelectedEmpty}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    good === selectedGood ? 'has-background-success-light' : ''
                  }
                >
                  <td>
                    <button
                      data-cy={
                        good === selectedGood ? 'RemoveButton' : 'AddButton'
                      }
                      type="button"
                      className={
                        good === selectedGood ? 'button is-info' : 'button'
                      }
                      onClick={() => {
                        if (good === selectedGood) {
                          this.setSelectedEmpty();
                        } else {
                          this.addGood(good);
                        }
                      }}
                    >
                      {good === selectedGood ? '-' : '+'}
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
