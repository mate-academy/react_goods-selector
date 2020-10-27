import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Good.scss';

export class Good extends React.PureComponent {
  render() {
    const { goodName, selectedGoods, selectGood } = this.props;

    return (
      <div className="good">
        <button
          type="button"
          className={classNames(`good__button`, {
            'good__button--selected': selectedGoods.includes(goodName),
          })}
          onClick={() => {
            selectGood(goodName);
          }}
        >
          {selectedGoods.includes(goodName)
            ? `Remove ${goodName}`
            : `${goodName}`
          }
        </button>
      </div>
    );
  }
}

Good.propTypes = {
  goodName: PropTypes.string.isRequired,
  selectedGoods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  selectGood: PropTypes.func.isRequired,
};
