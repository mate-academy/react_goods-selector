import PropTypes from 'prop-types';

export const GoodListProps = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  buttonClick: PropTypes.func.isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
