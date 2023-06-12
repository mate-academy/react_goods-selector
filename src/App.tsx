import React from 'react';
import classNames from 'classnames';
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
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleDeselect = () => {
    this.setState({ selectedGood: '' });
  };

  handleSelect = (product: string) => {
    this.setState({ selectedGood: product });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="
        section
        container
        is-flex
        is-flex-direction-column
        is-align-items-center"
      >
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.handleDeselect}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <table className="table radius b-color-light">
          <tbody>
            {goods.map(product => {
              const isSelected = product === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                >
                  <td>
                    <button
                      data-cy={
                        isSelected
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        classNames(
                          'button',
                          { 'is-info': isSelected },
                        )
                      }
                      onClick={() => (
                        isSelected
                          ? this.handleDeselect()
                          : this.handleSelect(product)
                      )}
                    >
                      {isSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {product}
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
