import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ handler, good, heading }) => (
  <button
    onClick={() => {
      handler(good);
    }}
    type="button"
    className={classNames('button', {
      button_active: good === heading ? true : '',
    })}
  >
    {good}
  </button>
);

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  good: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};
