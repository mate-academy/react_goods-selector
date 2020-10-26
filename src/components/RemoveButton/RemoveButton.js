import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({ removeAllItems }) => (
  <button
    type="button"
    onClick={removeAllItems}
    className="removeButton"
  >
    Remove everything
  </button>
);

RemoveButton.propTypes = {
  removeAllItems: PropTypes.func.isRequired,
};

export default RemoveButton;
