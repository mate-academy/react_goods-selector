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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  clearItem = () => {
    this.setState({
      selectedGood: '',
    });
  };

  selectedItem = (item: string) => {
    this.setState({
      selectedGood: item,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={classNames(
            'title',
            {
              'is-flex is-align-items-center': selectedGood,
            },
          )}
        >
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
            /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.clearItem}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {
              goods.map(good => (
                <tr
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': good === selectedGood },
                  )}
                >
                  <td>
                    <button
                      data-cy={good === selectedGood
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': good === selectedGood },
                      )}
                      onClick={() => this.selectedItem(
                        selectedGood === good ? '' : good,
                      )}
                    >
                      {good === selectedGood ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    );
  }
}
