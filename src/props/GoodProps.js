import PropTypes from 'prop-types';

export const GoodProps = {
  good: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
};
