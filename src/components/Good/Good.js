import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './Good.scss';

export const Good = ({ goodName, selected, selectGood }) => (
  <>
    <h1 className={selected
      ? 'Good__title Good--selected'
      : 'Good__title'}
    >
      {goodName}
    </h1>
    <Button
      className="Good__button"
      variant="success"
      disabled={selected}
      onClick={() => selectGood(goodName)}
    >
      Select
    </Button>
  </>
);

Good.propTypes = {
  goodName: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  selectGood: PropTypes.func.isRequired,
};
