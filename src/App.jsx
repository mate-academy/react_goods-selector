import React from 'react';
import './App.scss';

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

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  add = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: [...selectedGoods, goods],
    });
  }

  remove = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(item => item !== goods),
    });
  }

  delete = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;
    const {
      add: addSelectedGoods,
      remove: removeSelectedGoods,
      delete: deleteSelectedGoods,
    } = this;

    return (
      <>
        <div>
          <span>
            Selected goods:
            {`${selectedGoods.join(', ')}`}
          </span>
        </div>
        <div>
          <p>
            {`Selected:
            ${selectedGoods.length}`}
          </p>
          {selectedGoods.length > 1 && (
            <button
              type="button"
              onClick={deleteSelectedGoods}
            >
              x
            </button>
          )}
        </div>
        <ul>
          {goodsFromServer.map(product => (
            <li key={product}>
              { product }
              <div>
                <button
                  type="button"
                  onClick={() => {
                    addSelectedGoods(product);
                  }}
                >
                  Select
                </button>
                {' '}
                <button
                  type="button"
                  onClick={() => {
                    removeSelectedGoods(product);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
