import PropTypes from 'prop-types';

export const GoodsListShape = {
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  onClick: PropTypes.func.isRequired,
};
