import PropTypes from 'prop-types';

export const GoodListProps = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  buttonClick: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
};
