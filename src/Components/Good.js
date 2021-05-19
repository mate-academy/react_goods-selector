import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ item }) => (
  <>
    <div className="visible content">{item}</div>
    <div className="hidden content">
      <i className="shop icon" />
    </div>
  </>
);

Good.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Good;
