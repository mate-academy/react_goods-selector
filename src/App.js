import React from 'react';
import uuid from 'react-uuid';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const defaultSelectedGoods = ['Jam'];

class App extends React.Component {
  state = {
    selectedGoods: defaultSelectedGoods,
  };

  getSelectedGoodsList() {
    const goods = this.state.selectedGoods;
    const selectedCount = goods.length;

    if (selectedCount === 1) {
      return `${goods[0]} is selected`;
    }

    if (selectedCount > 1) {
      const firstPart = goods.slice(0, -1).join(', ');

      return `${firstPart} and ${goods[selectedCount - 1]} are selected`;
    }

    return 'No goods selected';
  }

  selectGood = (product) => {
    this.setState((prevState) => {
      const goods = prevState.selectedGoods;
      const foundIndex = goods.indexOf(product);

      if (foundIndex !== -1) {
        goods.splice(foundIndex, 1);
      } else {
        goods.push(product);
      }

      return ({
        selectedGoods: goods,
      });
    });
  };

  clearSelection = (event) => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;
    const title = this.getSelectedGoodsList();

    return (
      <div className="container centered">
        <h1 className="container__title">{title}</h1>
        <button
          type="button"
          id="clear-button"
          className="btn btn-outline-danger container__clear-button"
          onClick={this.clearSelection}
          style={{ visibility: selectedGoods.length ? 'visible' : 'hidden' }}
        >
          X
        </button>
        <ul className="list-group list-group-flush">
          {goodsFromServer.map((product, index) => (
            <div key={uuid()}>
              <li className={
                classNames(
                  'list-group-item list-group-item--padded',
                  { selected: selectedGoods.includes(product) },
                )
                }
              >
                {product}
                <button
                  type="button"
                  className={
                    classNames(
                      'btn btn-outline-warning list-group-item__button',
                      { active: selectedGoods.includes(product) },
                    )
                  }
                  data-bs-toggle="button"
                  onClick={
                    (event) => {
                      this.selectGood(product);
                    }
                  }
                >
                  {selectedGoods.includes(product) ? 'Remove' : 'Add'}
                </button>
              </li>

            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
