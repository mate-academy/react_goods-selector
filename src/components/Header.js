import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

export const Header = ({ selectedGood, onClick }) => (
  <div>
    <h1 className="header">
      {`Selected good:  `}
      <span>
        {selectedGood.join(' ')}
      </span>
    </h1>

    <button
      className="clearButton"
      type="button"
      onClick={onClick}
    >
      X
    </button>
  </div>
);

Header.propTypes = {
  selectedGood: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
