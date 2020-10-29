import React from 'react';

export const Good = ({ selectedGood, good, onClick }) => (
  <>
    <div
      className={`good-list__name ${selectedGood === good.name ? 'selected' : ''}`}
    >
      {good.name}
    </div>
    <button
      className="good-list__button"
      type="button"
      onClick={() => onClick(good.name)}
    >
      Add
    </button>
  </>
);
