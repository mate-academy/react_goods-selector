import React from 'react';
import { ResetButtonPropTypes } from '../propTypeShapes/resetButton';

export function ResetButton({ resetList }) {
  return (
    <button
      type="button"
      onClick={resetList}
      className="button reset-button"
    >
      X
    </button>
  );
}

ResetButton.propTypes = ResetButtonPropTypes;
