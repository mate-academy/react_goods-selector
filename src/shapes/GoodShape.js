import PropTypes from 'prop-types';
import { PreparedListProps } from './PreparedListShape';

export const GoodShape = {
  good: PropTypes.shape(PreparedListProps).isRequired,
  selectedProducts: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
