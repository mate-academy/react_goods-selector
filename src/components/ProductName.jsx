import React from 'react';
import PropTypes from 'prop-types';

function classNameParagraph(isActive) {
  return isActive
    ? 'active'
    : '';
}

export const ProductName = (props) => {
  const { name, selectedGood } = props;

  return (
    <p
      className={classNameParagraph(selectedGood.includes(name))}
    >
      {name}
    </p>
  );
};

ProductName.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  selectedGood: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;
