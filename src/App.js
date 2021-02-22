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

const products = [];

class App extends React.Component {
  state = {
    productName: 'none',
    goodsList: [],
  }

  componentDidMount() {
    this.setState({
      goodsList: goodsFromServer.map((good, index) => ({
        id: index,
        name: good,
        isSelected: false,
      })),
    });
  }

  toggleSelectedGoods = (selectedId, name, isSelected) => {
    if (!isSelected) {
      products.push(name);
    }

    if (isSelected) {
      const deleteIndex = products.indexOf(name);

      products.splice(deleteIndex, 1);
    }

    this.setState(prevState => ({
      productName: products.length === 0 ? 'none' : products.join(', '),
      goodsList: prevState.goodsList.map((good) => {
        if (good.id === selectedId) {
          return {
            ...good,
            isSelected: !isSelected,
          };
        }

        return good;
      }),
    }));
  }

  render() {
    const { productName, goodsList } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: - ${productName}`}
        </h1>
        <ul>
          {goodsList.length > 0 && goodsList.map(({ id, name, isSelected }) => (
            <li
              key={id}
              className={`${isSelected ? 'list-added' : 'list-removed'}`}
            >
              {name}
              <button
                className={`${isSelected ? 'btn-remove' : 'btn-add'}`}
                type="button"
                onClick={() => this.toggleSelectedGoods(id, name, isSelected)}
              >
                { isSelected ? 'Remove' : 'Add' }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
