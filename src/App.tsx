import { Component, ReactNode } from 'react';
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

interface State {
  selectedGood: string;
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearSelection = () => {
    this.setState({ selectedGood: '' });
  };

  handleGoodsButton = (listItem: string) => {
    const { selectedGood } = this.state;
    const resetList = this.clearSelection;
    const isSelected = listItem === selectedGood;

    if (isSelected) {
      resetList();

      return;
    }

    this.setState({ selectedGood: listItem });
  };

  render(): ReactNode {
    const { selectedGood } = this.state;
    const goodsList = [...goods];

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
              onClick={this.clearSelection}
              className="delete ml-3"
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goodsList.map(item => {
              const isSelected = item === selectedGood;

              return (
                <tr
                  key={item}
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    {isSelected
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          onClick={() => this.handleGoodsButton(item)}
                          className="button is-info"
                        >
                          -
                        </button>
                      ) : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          onClick={() => this.handleGoodsButton(item)}
                          className="button"
                        >
                          +
                        </button>
                      )}
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
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
