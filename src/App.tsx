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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  render() {
    const {
      selectedGood,
    } = this.state;

    const selectedItem = (event: React.MouseEvent<HTMLButtonElement>) => (
      selectedGood === event.currentTarget.id
        ? this.setState({ selectedGood: '' })
        : this.setState({ selectedGood: event.currentTarget.id }));

    const clearItem = () => {
      this.setState({ selectedGood: '' });
    };

    return (
      <main className="section container">
        {
          selectedGood === ''
            ? <h1 className="title">No goods selected</h1>
            : (
              <h1 className="title is-flex is-align-items-center">
                {selectedGood}
                {' '}
                is selected

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={clearItem}
                />
              </h1>
            )
        }

        <table className="table">
          <tbody>
            {
              goods.map(item => (
                <tr
                  data-cy="Good"
                  key={item}
                  className={classNames(
                    { 'has-background-success-light': selectedGood === item },
                  )}
                >
                  <td>
                    <button
                      id={item}
                      data-cy={(
                        selectedGood === item
                          ? 'RemoveButton'
                          : 'AddButton'
                      )}
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': selectedGood === item },
                      )}
                      onClick={selectedItem}
                    >
                      {
                        selectedGood === item
                          ? '-'
                          : '+'
                      }
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
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
