import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ goodsList }) => {
  let selectedGoods = '';

  switch (goodsList.length) {
    case 1:
      selectedGoods = `${goodsList} is selected`;
      break;
    case 0:
      selectedGoods = `No goods selected`;
      break;
    default:
      selectedGoods = `Selected goods:
        ${goodsList.map(good => ` ${good} `)}`;
      break;
  }

  return (
    <h1 className="title is-primaty">
      {selectedGoods}
    </h1>
  );
};

Title.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
