import React from 'react';
import PropTypes from 'prop-types';
import './Good.scss';

const Good = ({ id, value, selected, handleClick, handleCtrClick }) => (
  <li>
    <button
      type="button"
      className={selected ? 'Good Good--selected' : 'Good'}
      onClick={(event) => {
        if (event.ctrlKey) {
          handleCtrClick(id);
        } else {
          handleClick(id);
        }
      }}
    >
      {value}
      <i className={selected
        ? 'Good__icon Good__icon--selected fas fa-check'
        : 'Good__icon fas fa-check'}
      />
    </button>
  </li>
);

export default Good;

Good.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleCtrClick: PropTypes.func.isRequired,
};
