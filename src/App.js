import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { List } from './components/List';

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

const preparedGoods = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

class App extends React.Component {
  state = {
    item: [],
  };

  clickHandler = (event) => {
    if (event.ctrlKey) {
      const target = event.target.textContent;

      this.setState((prevState) => {
        if (prevState.item.includes(target)) {
          prevState.item.splice(prevState.item.indexOf(target), 1);

          return { item: prevState.item };
        }

        const newArr = [...prevState.item, target];

        return { item: newArr };
      });
    } else {
      this.setState({ item: [event.target.textContent] });
    }
  }

  removeAll = () => {
    this.setState({ item: [] });
  }

  render() {
    const { item } = this.state;

    return (
      <div className="App">
        <Header item={item} callback={this.removeAll} />
        <List
          data={preparedGoods}
          stateValue={item}
          callback={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
