import PropTypes from 'prop-types';

const preparedListProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

export const ListShape = PropTypes.shape({
  selected: PropTypes.string.isRequired,
  clicker: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const ListItemShape = {
  item: PropTypes.shape(preparedListProps).isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  clicker: PropTypes.func.isRequired,
};
