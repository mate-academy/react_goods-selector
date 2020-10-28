import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ selectedGoods, onClick }) => (
  <>
    <h1 className="app__heading">
      {`Selected goods: `}
      <span className="app__selected_goods">
        {selectedGoods.join(', ')}
      </span>
    </h1>

    <button
      type="button"
      className="ui header"
      onClick={onClick}
    >
      Clear all
    </button>
  </>
);
Header.propTypes = {
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
