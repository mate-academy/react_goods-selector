import PropTypes from 'prop-types';

export const AddRemoveButtonPropTypes = {
  name: PropTypes.string.isRequired,
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  selectItem: PropTypes.func.isRequired,
};
