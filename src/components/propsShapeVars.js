import PropTypes from 'prop-types';

export const commonProps = {
  selected: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export const goodShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
}.isRequired).isRequired;
