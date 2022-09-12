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
  className: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
    className: 'has-background-success-light',
  };

  selectedItem = (item: string) => {
    this.setState({ selectedGood: item });
  };

  clearItem = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const {
      selectedGood,
      className,
    } = this.state;

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
                  onClick={this.clearItem}
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
                  className={
                    selectedGood === item
                      ? className
                      : ''
                  }
                >
                  {selectedGood === item
                    ? (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={this.clearItem}
                        >
                          -
                        </button>
                      </td>
                    )
                    : (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.selectedItem(item);
                          }}
                        >
                          +
                        </button>
                      </td>
                    )}

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
