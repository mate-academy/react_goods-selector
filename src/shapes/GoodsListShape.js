import PropTypes from 'prop-types';
import { GoodShape } from './GoodShape';

export const GoodsListShape = {
  goods: PropTypes.arrayOf(
    PropTypes.shape(GoodShape).isRequired,
  ).isRequired,
  selectedProducts: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
