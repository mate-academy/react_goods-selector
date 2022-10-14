import { Component } from 'react';
import cn from 'classnames';
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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  removeFromSelected = () => {
    this.setState({
      selectedGood: '',
    });
  };

  toggleSelected = (selectedName: string) => {
    const { selectedGood } = this.state;

    if (selectedName === selectedGood) {
      this.removeFromSelected();
    } else {
      this.setState({
        selectedGood: selectedName,
      });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={cn(
          'title',
          {
            'is-flex': selectedGood,
            'is-align-items-center': selectedGood,
          },
        )}
        >
          {!selectedGood
            ? 'No goods selected'
            : (
              <>
                {`${selectedGood} is selected`}
                <button
                  aria-label="Select good"
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeFromSelected}
                />
              </>
            )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isActive = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={cn(
                    {
                      'has-background-success-light': isActive,
                    },
                  )}
                >
                  <td>
                    <button
                      data-cy={
                        isActive ? 'RemoveButton' : 'AddButton'
                      }
                      type="button"
                      className={cn(
                        'button',
                        {
                          'is-info': isActive,
                        },
                      )}
                      onClick={() => {
                        this.toggleSelected(good);
                      }}
                    >
                      {isActive ? '-' : '+'}
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
