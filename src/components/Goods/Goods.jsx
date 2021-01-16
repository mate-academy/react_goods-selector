import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good';

export class Goods extends React.Component {
  state = {
    selected: ' - ',
  }

  clearAll = ({ target }) => {
    const allGoods = target.parentElement.parentElement.lastElementChild;

    [...allGoods.children].forEach((element) => {
      element.classList.remove('active');
    });
  }

  selected = ({ target }, item) => {
    // получение переданного кастомного параметра good = item
    const allGoods = target.closest('.goods').children;

    [...allGoods].forEach((element) => {
      element.classList.remove('active');
    });
    target.closest('.goods__item').classList.add('active');

    this.setState({
      selected: ` ${item} `,
    });
  }

  render() {
    const { goods } = this.props;
    const { selected } = this.state;

    return (
      <div className="App">
        <div className="App__header-wrapper">
          <h1>
            Selected good:
            {selected}
          </h1>
          <button
            title="clear selection"
            type="button"
            className="goods__clear"
            onClick={(event) => {
              this.setState({
                selected: ' - ',
              });
              this.clearAll(event);
            }}
          >
            Remove
          </button>
        </div>
        <ul className="goods">
          {goods.map(item => (
            <li
              key={item}
              className="goods__item"
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
