import React from 'react';
import PropTypes from 'prop-types';

import './SelectedGoods.scss';

export const SelectedGoods = ({ selectedGoods, handleClick }) => (
  <div className="SelectedGoods">
    <div className="SelectedGoods__top">
      <h1 className="SelectedGoods__header">Selected goods</h1>

      <button
        className="SelectedGoods__reset-button"
        type="button"
        onClick={handleClick}
      >
        Clear
      </button>
    </div>

    <div className="SelectedGoods__list">
      {selectedGoods.length > 0
        ? selectedGoods.join(' ')
        : <span>Empty</span>
      }
    </div>

  </div>
);

SelectedGoods.propTypes = {
  selectedGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};
