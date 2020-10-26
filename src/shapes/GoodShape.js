import PropTypes from 'prop-types';

export const GoodShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
}).isRequired;
