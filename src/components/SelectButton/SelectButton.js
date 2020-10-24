import React from 'react';
import PropTypes from 'prop-types';

import './SelectButton.scss';

export const SelectButton = ({ handleClick, goodName, isSelected }) => {
  const classes = isSelected
    ? 'SelectButton SelectButton--active'
    : 'SelectButton';

  return (
    <button
      className={classes}
      type="button"
      onClick={handleClick}
    >
      {goodName}
    </button>
  );
};

SelectButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  goodName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
