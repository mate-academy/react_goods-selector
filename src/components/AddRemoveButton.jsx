import React from 'react';
import { AddRemoveButtonPropTypes } from '../propTypeShapes/addRemoveButton';

export function AddRemoveButton({ name, selectedGoods, selectItem }) {
  return (
    <button
      className="button add-remove-button"
      type="button"
      onClick={() => {
        selectItem(name);
      }}
    >
      {selectedGoods.includes(name)
        ? 'Remove'
        : 'Add'}
    </button>
  );
}

AddRemoveButton.propTypes = AddRemoveButtonPropTypes;
