import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
// import { render } from 'react-dom';

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

// type Props = {
//   goods: string[];
// };

type State = {
  selectedProduct: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedProduct: 'No goods ',
  };

  addRemoveGood = (currentProduct: string) => {
    if (this.state.selectedProduct === currentProduct) {
      this.setState({ selectedProduct: 'No goods ' });
    } else {
      this.setState({ selectedProduct: currentProduct });
    }
  };

  clearSelector = () => {
    this.setState({ selectedProduct: 'No goods ' });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <main className="section container">
        {(selectedProduct === 'No goods ')
          ? (
            <h1 className="title">
              {`${selectedProduct} selected`}
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
                  className={
                    (item === selectedProduct)
                      ? 'has-background-success-light'
                      : ''
                  }
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

            {/* <tr data-cy="Good">
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  // onClick={this.addGood}
                >
                  {isGoodAdded ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Dumplings
              </td>
            </tr>

            <tr data-cy="Good" className="has-background-success-light">
              <td>
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Jam
              </td>
            </tr>

            <tr data-cy="Good">
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                Garlic
              </td>
            </tr> */}
          </tbody>
        </table>
      </main>
    );
  }
}
