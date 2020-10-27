
import PropTypes from 'prop-types';

export const shapeList = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});
