import PropTypes from 'prop-types';

export const ItemFromServerShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});
