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
  selectedItem: string | null;
};

export class App extends Component {
  state: Readonly<State> = {
    selectedItem: 'Jam',
  };

  switcher(item: string) {
    if (item === this.state.selectedItem) {
      this.setState({ selectedItem: null });
    } else {
      this.setState({ selectedItem: item });
    }
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <main className="section container">
        <h1
          className={classNames(
            'title',
            { 'is-flex is-align-items-center': selectedItem },
          )}
        >
          {selectedItem ? `${selectedItem} is selected` : 'No goods selected'}

          {selectedItem && (
            <>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.switcher(selectedItem)}
              />
            </>
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                data-cy="Good"
                key={item}
                className={classNames(
                  { 'has-background-success-light': selectedItem === item },
                )}
              >
                <td>
                  <button
                    data-cy={selectedItem === item
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': selectedItem === item },
                    )}
                    onClick={() => this.switcher(item)}
                  >
                    {selectedItem === item ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-centered">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
