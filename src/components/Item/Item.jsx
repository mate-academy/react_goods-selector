import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Item = ({ item, selectHandler, selectedItem }) => (
  <div className="item">
    <button
      type="button"
      className={
        classNames(
          'item__name',
          { 'item__name--highlighted': selectedItem === item },
        )
      }
      onClick={() => selectHandler(item)}
    >
      {item}
    </button>
  </div>
);

Item.propTypes = {
  item: PropTypes.string.isRequired,
  selectHandler: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
};
