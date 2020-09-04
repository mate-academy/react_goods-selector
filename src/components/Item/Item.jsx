import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Item = ({ item, selectHandler, selectedItem }) => (
  <div className={
    classNames(
      'item',
      { 'item--highlighted': selectedItem === item },
    )
  }
  >
    <span className="item__name">
      {item}
    </span>
    <button
      type="button"
      className="item__button"
      onClick={() => selectHandler(item)}
    >
      Select
    </button>
  </div>
);

Item.propTypes = {
  item: PropTypes.string.isRequired,
  selectHandler: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
};
