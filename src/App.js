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

  selectGood = (event, sibling) => {
    this.setState((prevState) => {
      const goods = prevState.selectedGoods;
      const foundIndex = goods.indexOf(sibling.textContent);

      if (foundIndex !== -1) {
        goods.splice(foundIndex, 1);
      } else {
        goods.push(sibling.textContent);
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
          {goodsFromServer.map((goods, index) => (
            <div key={uuid()}>
              <li className={`list-group-item list-group-item--padded
                  ${selectedGoods.includes(goods) ? 'selected' : ''}`
                }
              >
                {goods}
                <button
                  type="button"
                  className={
                    classNames(
                      'btn btn-outline-warning list-group-item__button',
                      { active: selectedGoods.includes(goods) },
                    )
                  }
                  data-bs-toggle="button"
                  onClick={
                    (event) => {
                      this.selectGood(event, event.target.previousSibling);
                    }
                  }
                >
                  {selectedGoods.includes(goods) ? 'Remove' : 'Add'}
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
