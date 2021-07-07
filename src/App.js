import React from 'react';
import './App.scss';
import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';

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

  toogleGoods = (good) => {
    this.setState((prevState) => {
      const prevSelected = [...prevState.selectedGoods];

      if (prevSelected.includes(good)) {
        return ({
          selectedGoods: prevSelected.filter(item => item !== good),
        });
      }

      prevSelected.push(good);

      return {
        selectedGoods: prevSelected,
      };
    });
  }

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__selected">
          Selected Goods:
          {' '}
          {selectedGoods.join(', ')}
        </h1>
        <ListOfGoods
          goods={goodsFromServer}
          selected={this.state.selectedGoods}
          clickHandler={
            this.toogleGoods
          }
        />
        <button
          type="button"
          className="App__clear"
          onClick={
            () => {
              this.clearSelected();
            }
          }
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
