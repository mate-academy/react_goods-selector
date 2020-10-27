import PropTypes from 'prop-types';

export const GoodsListPropTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  selectItem: PropTypes.func.isRequired,
};
