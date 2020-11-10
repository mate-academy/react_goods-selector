import React from 'react';
import { HeaderPropTypes } from '../PropTypes/HeaderPropTypes';

export const Header = ({ selectedGoods, onClick }) => (
  <>
    <h1 className="app__header">
      {`Selected goods: `}
      <span className="app__selected-goods">
        {selectedGoods.join(', ')}
      </span>
    </h1>

    <button
      type="button"
      className="app__clear-all"
      onClick={onClick}
    >
      Clear all
    </button>
  </>
);

Header.propTypes = HeaderPropTypes;
