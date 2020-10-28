import PropTypes from 'prop-types';

export const GoodShape = {
  good: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  onClick: PropTypes.func.isRequired,
};
