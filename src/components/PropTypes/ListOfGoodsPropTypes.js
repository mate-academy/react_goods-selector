import PropTypes from 'prop-types';
import { GoodPropTypes } from './GoodPropTypes';

export const ListOfGoodsPropTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape(GoodPropTypes).isRequired,
  ).isRequired,
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
