import PropTypes from 'prop-types';

export const HeaderPropTypes = {
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
