import PropTypes from 'prop-types';

export const ListShape = PropTypes.shape({
  selected: PropTypes.string.isRequired,
  clicker: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
});
