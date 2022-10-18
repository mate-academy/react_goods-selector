import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  selectedProduct: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedProduct: '',
  };

  addRemoveGood = (currentProduct: string) => {
    if (this.state.selectedProduct === currentProduct) {
      this.setState({ selectedProduct: '' });
    } else {
      this.setState({ selectedProduct: currentProduct });
    }
  };

  clearSelector = () => {
    this.setState({ selectedProduct: '' });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <main className="section container">
        {!selectedProduct
          ? (
            <h1 className="title">
              No goods selected
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedProduct} selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clearSelector}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map((item: string) => {
              return (
                <tr
                  key={item}
                  data-cy="Good"
                  className={cn({
                    'has-background-success-light': item === selectedProduct,
                  })}
                >
                  <td>
                    <button
                      data-cy={item === selectedProduct
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={
                        cn('button', { 'is-info': item === selectedProduct })
                      }
                      onClick={() => {
                        this.addRemoveGood(item);
                      }}
                    >
                      {(selectedProduct === item) ? '-' : '+'}
                    </button>

                  </td>

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
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
