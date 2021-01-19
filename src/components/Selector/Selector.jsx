import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bulma-components';

export class Selector extends React.Component {
  state = {
    selectedGoods: [],
  };

  addItem = (item) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));
  };

  clear = () => {
    this.setState({selectedGoods: []});
  };

  deleteItem = (item) => {
    // this.setState(prevState => ({
    // selectedGoods: prevState.selectedGoods.filter(e => e !== item),
    // }));
    if (this.state.selectedGoods.includes(item)) {
      const copy = [...this.state.selectedGoods];
      const findIndex = copy.findIndex(element => element === item);
      copy.splice(findIndex, 1);

      this.setState(() => ({selectedGoods: copy}));
    }
  };

    render() {
      return (
        <div className="App is-family-code">
          <div className="box">
            <h1 className="has-text-centered has-text-weight-bold is-size-5 p-2">
              Selected good:
              {' '}
              {this.state.selectedGoods.join(', ')}
            </h1>
            {this.props.goods.map((item, idx) => (
              <div
                className="is-flex is-justify-content-center"
                key={idx.toString()}
              >
                <p className="item">
                  {item}
                  {':'}
                </p>
                <Button
                  className="button is-success is-outlined is-small"
                  onClick={() => {
                    this.addItem(item);
                  }}
                  type="button"
                >
                  add
                </Button>
                <Button
                  className="button is-danger is-outlined is-small"
                  onClick={() => {
                    this.deleteItem(item);
                  }}
                  type="button"
                >
                  delete
                </Button>
              </div>
            ))}
            <button
              className="button is-danger is-outlined is-small center"
              onClick={this.clear}
              type="button"
            >
              <span>Clear</span>
              <span className="icon is-small">
              <i className="fas fa-times"/>
            </span>
            </button>
          </div>
        </div>
      );
    }

};

// Selector.propTypes = {
//   goods: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default Selector;
