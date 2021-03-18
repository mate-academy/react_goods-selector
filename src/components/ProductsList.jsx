import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { AddButton } from './AddButton';
import { RemoveButton } from './RemoveButton';

export function ProductsList(props) {
  const {
    goodsWithID,
    addGoods,
    removeGoods,
    selectedProducts,
  } = props;

  return (
    <ul>
      {goodsWithID.map(item => (
        <li key={item.id}>
          <span
            className={
              classNames({
                selected: selectedProducts.includes(item.product),
              })}
          >
            {item.product}
          </span>
          <AddButton
            addGoods={addGoods}
            selectedProducts={selectedProducts}
            item={item.product}
          />
          <RemoveButton
            removeGoods={removeGoods}
            selectedProducts={selectedProducts}
            item={item.product}
          />
        </li>
      ))}
    </ul>
  );
}

ProductsList.propTypes = {
  goodsWithID: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  selectedProducts: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  addGoods: PropTypes.func.isRequired,
  removeGoods: PropTypes.func.isRequired,
};
