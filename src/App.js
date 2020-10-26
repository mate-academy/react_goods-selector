import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { GoodsList } from './components/GoodsList/GoodsList';
import { ShoppingCard } from './components/ShoppingCard/ShoppingCard';

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

const preparedGoodsFromServer = goodsFromServer.map((good, index) => (
  {
    name: good,
    key: index,
    selected: false,
  }
));

class App extends Component {
  state = {
    selectedList: [],
    selectedGood: '',
    goods: [...preparedGoodsFromServer],
  }

  selectGood = (good) => {
    const goodIndex = this.state.goods.findIndex(goodsItem => (
      goodsItem.name === good
    ));

    this.setState(state => ({
      selectedGood: good,
      selectedList: [...state.selectedList, good],
      goods: state.goods.map((product, productIndex) => {
        if (productIndex === goodIndex) {
          return {
            ...product,
            selected: true,
          };
        }

        return product;
      }),
    }));
  }

  clearHandler = () => {
    this.setState(state => ({
      selectedGood: '',
      selectedList: [],
      goods: state.goods.map(good => ({
        ...good,
        selected: false,
      })),
    }));
  }

  render() {
    const { selectedGood, selectedList, goods } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1>
            {`Selected good: - ${selectedGood}`}
          </h1>
          <Button
            variant="danger"
            size="lg"
            onClick={this.clearHandler}
            disabled={selectedList.length === 0}
          >
            X
          </Button>
        </header>
        <main className="App__main">
          <GoodsList
            goodsList={goods}
            selectGood={this.selectGood}
          />
          {selectedList.length !== 0
          && <ShoppingCard selectedList={selectedList} />
          }
        </main>
      </div>
    );
  }
}

export default App;
