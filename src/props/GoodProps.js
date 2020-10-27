import PropTypes from 'prop-types';

export const GoodProps = {
  name: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
