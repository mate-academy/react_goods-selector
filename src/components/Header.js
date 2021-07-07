import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ selectedGoods, onClick }) => (
  <header className="header">
    <h1>
      {`Selected good: - ${selectedGoods}`}
    </h1>
    <button
      type="button"
      onClick={onClick}
      className="ui secondary button"
    >
      X
    </button>
  </header>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedGoods: PropTypes.string.isRequired,
};
