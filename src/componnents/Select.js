import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ good, selectGoodClicker, selectedGood }) => (
  <button
    type="button"
    onClick={() => selectGoodClicker(good)}
    className={selectedGood === good ? 'btn btn-warning' : 'btn btn-info'}
  >
    {good}
  </button>
);

export default Select;

Select.propTypes = {
  good: PropTypes.string.isRequired,
  selectGoodClicker: PropTypes.func.isRequired,
  selectedGood: PropTypes.string.isRequired,
};
