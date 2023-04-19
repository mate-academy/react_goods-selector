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

interface S {
  selectedGood: string;
}

// export const App: React.FC = () => (
export class App extends React.Component<{}, S> {
  state = {
    selectedGood: 'Jam',
  };
  // React.MouseEvent<HTMLButtonElement>

  handleGoodButton = (event: React.MouseEvent<HTMLButtonElement>,
    good: string) => {
    const button = event.currentTarget;

    if (button.dataset.cy === 'AddButton') {
      button.dataset.cy = 'RemoveButton';
      this.setState({ selectedGood: good });
    } else {
      button.dataset.cy = 'AddButton';
      this.setState({ selectedGood: '' });
    }
  };

  handleClearButton = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood ? `${selectedGood} is` : 'No goods'} selected` }
          {selectedGood
            ? (
              <>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleClearButton}
                />
              </>
            )
            : null}
        </h1>

        <table className="table">
          <tbody>
            {
              goods.map(good => {
                const isSelected = good === selectedGood;

                return (
                  <tr
                    data-cy="Good"
                    key={good}
                    className={isSelected
                      ? 'has-background-success-light'
                      : ''}
                  >
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className={isSelected ? 'button is-info' : 'button'}
                        onClick={(event) => {
                          this.handleGoodButton(event, good);
                        }}
                      >
                        {isSelected ? '-' : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    );
  }
}
