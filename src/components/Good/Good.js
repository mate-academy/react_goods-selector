import React from 'react';
import './Good.scss';
import PropTypes from 'prop-types';

export const Good = ({ nameOfGood, click, nameOfClass }) => (
  <li>
    <button
      type="button"
      className={nameOfClass}
      onClick={click}
    >
      {nameOfGood}
    </button>
  </li>
);

Good.propTypes = {
  nameOfGood: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  nameOfClass: PropTypes.string.isRequired,
};
