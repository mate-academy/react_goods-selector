import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ selectedGoods, onClick }) => (
  <div className="wrapper">
    <h1>
      {`Selected good: - `}
      <span>
        {selectedGoods.join(' ')}
      </span>
    </h1>

    <button
      type="button"
      onClick={onClick}
      className="btn btn-danger"
    >
      X
    </button>
  </div>
);

Header.propTypes = {
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
