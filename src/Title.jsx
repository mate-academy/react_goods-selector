import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ goodsList }) => {
  if (goodsList.length > 1) {
    return (
      <h1 className="title is-primaty">
        {`Selected goods: ${goodsList.map(good => ` ${good} `)}`}
      </h1>
    );
  }

  if (goodsList.length === 1) {
    return (
      <h1 className="title is-primaty">
        {`${goodsList} is selected`}
      </h1>
    );
  }

  return (
    <h1 className="title is-primaty">
      No goods selected
    </h1>
  );
};

Title.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
