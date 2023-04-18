import { Component } from 'react';
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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleRemoveSelected = () => {
    this.setState({ selectedGood: '' });
  };

  handleAddSelected = (product: string) => {
    this.setState({ selectedGood: product });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleRemoveSelected}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>

            {goods.map(product => {
              const isSelected = selectedGood === product;

              return (
                <tr
                  className={classNames({
                    'has-background-success-light': isSelected,
                  })}
                  data-cy="Good"
                  key={product}
                >
                  <td>
                    <button
                      data-cy={isSelected
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={classNames(
                        'button',
                        {
                          'is-info': isSelected,
                        },
                      )}
                      onClick={() => (isSelected
                        ? this.handleRemoveSelected()
                        : this.handleAddSelected(product))}
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
