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
    goodsStatus: goodsFromServer.map((prod, id) => ({
      value: prod,
      id,
      isSelected: false,
    })),

    selected: [],
  }

  changeProdStat = (prodId) => {
    this.setState(state => (
      {
        goodsStatus: state.goodsStatus.map(product => (product.id === prodId ? {
          value: product.value,
          id: product.id,
          isSelected: !product.isSelected,
        }
          : product
        )),
      }));

    this.setState(state => ({
      selected: state.goodsStatus.filter(
        prod => prod.isSelected,
      ).map(
        ({ value }) => value,
      ),
    }));
  };

  getTitle = () => {
    const { selected } = this.state;

    switch (selected.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selected[0]} is selected`;
      default:
        return `${selected.join(', ')} are selected`;
    }
  };

  render() {
    const { goodsStatus } = this.state;
    const { changeProdStat, getTitle } = this;

    return (
      <div className="App">
        <h1>
          { getTitle() }
        </h1>
        {goodsFromServer.length}

        <ul>
          {goodsStatus.map(product => (
            <li>
              { product.value }
              <button
                type="button"
                onClick={() => changeProdStat(product.id)}
              >
                { product.isSelected ? 'Remove' : 'Add' }
              </button>
              )
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
