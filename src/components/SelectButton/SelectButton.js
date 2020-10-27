import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SelectButton.scss';

export const SelectButton = ({ handleClick, goodName, isSelected }) => (
  <button
    className={
      classNames(
        'SelectButton',
        { 'SelectButton--active': isSelected },
      )
    }
    type="button"
    onClick={() => handleClick(goodName)}
  >
    {goodName}
  </button>
);

SelectButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  goodName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
