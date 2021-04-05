import React from 'react';
import PropTypes from 'prop-types';

export function ResetButton({ resetList }) {
  return (
    <button
      type="button"
      onClick={resetList}
      className="button reset-button"
    >
      X
    </button>
  );
}

ResetButton.propTypes = {
  resetList: PropTypes.func.isRequired,
};
