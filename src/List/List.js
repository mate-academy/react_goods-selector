import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

class List extends React.Component {
  list = this.props.list;

  state = {
    selectedGoods: [],
  };

  handleAdd(goodName) {
    const goodIndex = this.state.selectedGoods.indexOf(goodName);

    if (goodIndex !== -1) {
      this.state.selectedGoods.splice(goodIndex, 1);
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods,
      }));
    } else {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.concat(goodName),
      }));
    }
  }

  handleClear() {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    return (
      <div className="list">
        <h1>
          Selected good:
          {this.state.selectedGoods.map(good => (
            <span key={good}>
              &nbsp;
              {good}
              ,
            </span>
          ))}
        </h1>
        <ol className="list__items">
          {this.list.map(item => (
            <div
              className={`list__row ${this.state.selectedGoods.indexOf(item)
                !== -1 && 'list--selected'}`}
              key={item}
            >
              <li className="list__item">{item}</li>
              <button
                type="button"
                className="list__button"
                onClick={() => this.handleAdd(item)}
              >
                {this.state.selectedGoods.indexOf(item) !== -1
                  ? 'Remove' : 'Add'}
              </button>
            </div>
          ))}
        </ol>

        <button
          type="button"
          className="list__button list--clear"
          onClick={() => this.handleClear()}
        >
          Clear all
        </button>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { List };
