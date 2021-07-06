import React from 'react';
import Proptypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, text }) => (
  <button
    className="button"
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
};

export default Button;
