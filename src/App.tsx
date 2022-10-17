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
  selectedGood: string;
  isSelected: boolean;
};

function switcher(
  condition: boolean,
  product = '',
  selected = '',
): boolean {
  if (product !== selected) {
    return true;
  }

  if (condition) {
    return false;
  }

  return true;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
    isSelected: true,
  };

  handleClickTitleButton = () => (
    this.setState({
      isSelected: false,
    })
  );

  handleClickProductButton = (
    product: string,
    isSelected: boolean,
    selectedGood: string,
  ) => {
    this.setState({
      selectedGood: product,
      isSelected: switcher(
        isSelected,
        product,
        selectedGood,
      ),
    });
  };

  render() {
    const { selectedGood, isSelected } = this.state;

    return (
      <main className="section container">
        <h1
          className={classNames(
            'title',
            {
              'is-flex': isSelected,
              'is-align-items-center': isSelected,
            },
          )}
        >
          {isSelected
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {isSelected && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={this.handleClickTitleButton}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map((product) => {
              let isProductSelected = false;

              if (product === selectedGood && isSelected) {
                isProductSelected = true;
              }

              return (
                <tr
                  data-cy="Good"
                  key={product}
                  className={classNames(
                    {
                      'has-background-success-light': isProductSelected,
                    },
                  )}
                >
                  <td>
                    <button
                      data-cy={isProductSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      onClick={() => this.handleClickProductButton(
                        product,
                        isSelected,
                        selectedGood,
                      )}
                      className={classNames(
                        'button',
                        {
                          'is-info': isProductSelected,
                        },
                      )}
                    >
                      {isProductSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    { product }
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
