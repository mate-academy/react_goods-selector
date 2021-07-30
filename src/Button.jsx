import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => (
  <div className="button__wrapper">
    <button
      className="button"
      type="button"
      onClick={props.onClick}
    >
      {props.name}

    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default Button;
