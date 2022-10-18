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
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  handleClickTitleButton = () => (
    this.setState({
      selectedGood: '',
    })
  );

  handleClickProductButton = (product: string) => {
    if (this.state.selectedGood === product) {
      this.setState({
        selectedGood: '',
      });
    } else {
      this.setState({
        selectedGood: product,
      });
    }
  };

  clearSelectedGood = () => {
    if (this.state.selectedGood) {
      this.setState({ selectedGood: '' });
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        <h1
          className={classNames(
            'title',
            {
              'is-flex': selectedGood,
              'is-align-items-center': selectedGood,
            },
          )}
        >
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          {selectedGood && (
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

              if (product === selectedGood) {
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
                      onClick={() => this.handleClickProductButton(product)}
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
