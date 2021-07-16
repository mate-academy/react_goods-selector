import React from 'react';
import PropTypes from 'prop-types';

export const Good = props => (
  <span className="good">{props.good}</span>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
