import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export const Good = ({ good, handler, heading }) => (
  <h3>
    <Button good={good} handler={handler} heading={heading} />
  </h3>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};
