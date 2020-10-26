import PropTypes from 'prop-types';
import { GoodShape } from './GoodShape';

export const GoodListShape = {
  goods: PropTypes.arrayOf(PropTypes.shape(GoodShape)).isRequired,
  selectedGoods: PropTypes.func.isRequired,
  toggleGood: PropTypes.func.isRequired,
};
