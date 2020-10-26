import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ good, selectGoodClicker, selectedGoods }) => (
  <button
    type="button"
    onClick={() => selectGoodClicker(good)}
    className={selectedGoods.includes(good)
      ? 'btn btn-warning'
      : 'btn btn-info'}
  >
    {good}
  </button>
);

export default Select;

Select.propTypes = {
  good: PropTypes.string.isRequired,
  selectGoodClicker: PropTypes.func.isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
