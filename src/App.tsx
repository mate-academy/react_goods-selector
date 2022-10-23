import React from 'react';
import className from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import { ProductItem } from './ProductItem';

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

export class App extends React.Component {
  state = {
    productTitle: '',
  };

  itemActive = (name: string) => {
    this.setState({ productTitle: name });
  };

  render() {
    const { productTitle } = this.state;

    return (
      <main className="section container">
        {productTitle
          ? (
            <h1 className="title is-flex is-align-items-center">
              {productTitle}
              {' is selected'}

              { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */ }
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.itemActive('');
                }}
              />
            </h1>
          )
          : (<h1 className="title">No goods selected</h1>)}

        <table className="table">
          <tbody>
            {goods.map((product) => {
              return (
                <tr
                  data-cy="Good"
                  key={product}
                  className={className({
                    'has-background-success-light': productTitle === product,
                  })}
                >
                  <ProductItem
                    product={product}
                    isActive={productTitle === product}
                    itemActive={this.itemActive}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
