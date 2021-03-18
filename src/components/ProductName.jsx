import React from 'react';
import PropTypes from 'prop-types';

function className(isActive) {
  return isActive
    ? 'active'
    : '';
}

export const ProductName = (props) => {
  const { id, name, selectedGood } = props;

  return (
    <p
      key={id}
      className={className(selectedGood.includes(name))}
    >
      {name}
    </p>
  );
};

ProductName.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectedGood: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;
