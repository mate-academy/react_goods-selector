import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Good } from '../Good';
import './Goods.scss';

export class Goods extends React.Component {
  state = {
    selected: ' - ',
    clearMode: false,
  }

  clearAll = () => {
    this.setState({
      clearMode: true,
    });
  }

  selected = ({ target }, item) => {
    this.setState({
      selected: ` ${item} `,
      activeItem: target,
      clearMode: false,
    });
  }

  render() {
    const { goods } = this.props;
    const { selected, activeItem, clearMode } = this.state;

    return (
      <div className="goods">
        <div className="goods__header-wrapper">
          <h1>
            Selected good:
            {selected}
          </h1>
          <button
            title="clear selection"
            type="button"
            className="goods__clear"
            onClick={() => {
              this.setState({
                selected: ' - ',
              });
              this.clearAll();
            }}
          >
            Remove
          </button>
        </div>
        <ul className="goods__list">
          {goods.map(item => (
            <li
              key={item}
              className={classNames('goods__item', { active: activeItem
                && activeItem.previousSibling.innerText === item
                && !clearMode })}
            >
              <Good
                good={item}
                goodSelected={this.selected}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
