import React from 'react';
import PropTypes from 'prop-types';

import Good from '../Good/Good';

const GoodList = (props) => {
  const { goodsPrepared, addItem, changeButtonName } = props;

  return (
    <ul className="app__goodList">
      {goodsPrepared.map(good => (
        <Good
          key={good.id}
          {...good}
          addItem={addItem}
          changeButtonName={changeButtonName}
        />
      ))}
    </ul>
  );
};

GoodList.propTypes = {
  goodsPrepared: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  addItem: PropTypes.func.isRequired,
  changeButtonName: PropTypes.func.isRequired,
};

export default GoodList;
