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

interface State {
  selectedGood: string;
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  removeBtn = () => {
    this.setState({ selectedGood: '' });
  };

  addBtn = (item: string) => {
    this.setState({ selectedGood: item });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          selectedGood
            ? (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.removeBtn}
                />
              </h1>
            )
            : (
              <h1 className="title">No goods selected</h1>
            )
        }

        <table className="table">
          <tbody>
            {goods.map((item) => {
              const isSelected = item === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={item}
                  className={cn(
                    { 'has-background-success-light': isSelected },
                  )}
                  // className='has-background-success-light'
                >
                  <td>
                    {
                      isSelected
                        ? (
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={this.removeBtn}
                          >
                            -
                          </button>
                        )
                        : (
                          <button
                            data-cy="AddButton"
                            type="button"
                            className="button"
                            onClick={() => this.addBtn(item)}
                          >
                            +
                          </button>
                        )
                    }
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
