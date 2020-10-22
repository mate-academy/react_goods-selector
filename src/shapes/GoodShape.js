import PropTypes from 'prop-types';

export const GoodShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
