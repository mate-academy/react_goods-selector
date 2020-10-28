import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import { GoodsList } from './components/GoodsList';
import { Header } from './components/Header';

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

const transformedGoods = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

class App extends React.Component {
  state = {
    selectedGoods: '',
  };

  saveGood = (good) => {
    this.setState({ selectedGoods: good });
  }

  removeGood = () => {
    this.setState({ selectedGoods: '' });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <Header
          selectedGoods={selectedGoods}
          onClick={this.removeGood}
        />
        <GoodsList
          selectedGoods={selectedGoods}
          data={transformedGoods}
          onClick={this.saveGood}
        />
      </div>
    );
  }
}

export default App;
