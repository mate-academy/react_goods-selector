import PropTypes from 'prop-types';
import { PreparedListProps } from './PreparedShape';

export const ListItemShape = {
  item: PropTypes.shape(PreparedListProps).isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  clicker: PropTypes.func.isRequired,
};
