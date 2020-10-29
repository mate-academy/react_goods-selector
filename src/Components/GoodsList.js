import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

const GoodsList = ({ preparedGoods, clickHandler }) => (
  <>
    {preparedGoods.map(good => (
      <button
        type="button"
        className="ui animated button"
        onClick={() => clickHandler(good)}
        key={good.id}
        tabIndex="-1"
      >
        <Good item={good.name} />
      </button>
    ))
    }
  </>
);

GoodsList.propTypes = {
  preparedGoods: PropTypes.string.isRequired,
  clickHandler: PropTypes.element.isRequired,
};

export default GoodsList;
