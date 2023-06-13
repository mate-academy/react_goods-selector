import { Component } from 'react';
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
  selectedGood: string | null;
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  toggleSelectUser(good: string) {
    const { selectedGood } = this.state;

    const goodToSelect = selectedGood === good
      ? null
      : good;

    this.setState({
      selectedGood: goodToSelect,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                this.toggleSelectUser('');
              }}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = selectedGood === good;

              return (
                <>
                  <tr
                    data-cy="Good"
                    key={good}
                    className={classNames({
                      'has-background-success-light': isSelected,
                    })}
                  >
                    <td>
                      <button
                        data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                        type="button"
                        className={classNames('button', {
                          'is-info': isSelected,
                        })}
                        onClick={() => {
                          this.setState({
                            selectedGood: good,
                          });

                          this.toggleSelectUser(good);
                        }}
                      >
                        {isSelected ? '-' : '+'}
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
