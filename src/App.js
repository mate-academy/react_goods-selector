import React from 'react';
import './App.scss';

import GoodList from './components/GoodList/GoodList';

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

const goodsPrepared = goodsFromServer.map((good, index) => ({
  id: index,
  item: good,
}));

class App extends React.Component {
  state = {
    goodsSelected: [],
  };

  addItem = (event, item) => {
    const goodsSelectedCurrent = [...this.state.goodsSelected];

    if (goodsSelectedCurrent.includes(item)) {
      goodsSelectedCurrent.splice(goodsSelectedCurrent.indexOf(item), 1);
    } else {
      goodsSelectedCurrent.push(item);
    }

    this.setState({
      goodsSelected: [...goodsSelectedCurrent],
    });
  };

  changeButtonName = (item) => {
    if (this.state.goodsSelected.includes(item)) {
      return 'remove';
    }

    return 'add';
  };

  reset = () => {
    this.setState({
      goodsSelected: [],
    });
  }

  render() {
    const { goodsSelected } = this.state;

    return (
      <div className="app">
        <div className="app__info">
          <h1 className="app__header">
            Selected good:
          </h1>
          <div className="app__goodsSelected">
            {goodsSelected.join(', ')}
          </div>

          <button
            className="app__button"
            type="button"
            onClick={this.reset}
          >
            reset
          </button>
        </div>

        <GoodList
          goodsPrepared={goodsPrepared}
          addItem={this.addItem}
          changeButtonName={this.changeButtonName}
        />
      </div>
    );
  }
}

export default App;
