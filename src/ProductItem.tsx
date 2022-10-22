import React from 'react';
import className from 'classnames';

export class ProductItem extends React.Component<{
  product: string
  itemActive: (name: string) => void
  isActive: boolean
}> {
  state: Readonly<{
    product: string
  }> = {
    product: this.props.product,
  };

  render() {
    const {
      product,
    } = this.state;

    return (
      <>
        <td>
          <button
            data-cy="AddButton"
            type="button"
            className={className('button', {
              'is-info': this.props.isActive,
            })}
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              this.props.isActive
                ? this.props.itemActive('')
                : this.props.itemActive(product);
            }}
          >
            {this.props.isActive
              ? '-'
              : '+'}
          </button>
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {product}
        </td>
      </>
    );
  }
}
