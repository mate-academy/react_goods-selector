import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.scss';

export const Button = ({ className, clickHandler, label }) => (
  <button
    type="button"
    className={cn('btn', className)}
    onClick={clickHandler}
  >
    {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  label: '',
};
