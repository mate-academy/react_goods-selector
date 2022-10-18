import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cl from 'classnames';
import { v4 as uuidv4 } from 'uuid';

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
  state = {
    selectedGood: 'Jam',
  };

  removeSelection = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className={cl('title',
          { 'is-flex is-align-items-center': selectedGood })}
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeSelection}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isActive = selectedGood === good;

              const handleSelection = () => (
                isActive
                  ? this.removeSelection()
                  : this.setState({ selectedGood: good })
              );

              return (
                <tr
                  key={uuidv4()}
                  data-cy="Good"
                  className={cl(
                    {
                      'has-background-success-light': isActive,
                    },
                  )}
                >
                  <td>
                    <button
                      data-cy={isActive
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={cl(
                        'button',
                        {
                          'is-info': isActive,
                        },
                      )}
                      onClick={handleSelection}
                    >
                      {isActive
                        ? '-'
                        : '+'}
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
