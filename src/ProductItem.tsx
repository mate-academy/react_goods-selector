import React from 'react';
import className from 'classnames';

interface Props {
  product: string
  itemActive: (name: string) => void
  isActive: boolean
}

export class ProductItem extends React.Component<Props> {
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
            onClick={() => this.props
              .itemActive(this.props.isActive ? '' : product)}
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
