import React from 'react';
import './App.scss';
import { Good } from './components/Good/Good';

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
      const temp = [...prevState.selectedGoods];

      if (temp.includes(good)) {
        return ({
          selectedGoods: temp.filter(item => item !== good),
        });
      }

      temp.push(good);

      return {
        selectedGoods: temp,
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
        <ul className="App__list">
          {goodsFromServer.map((good) => {
            let nameClass = 'good__button';

            if (this.state.selectedGoods.includes(good)) {
              nameClass = 'good__button--active';
            }

            return (
              <Good
                key={good}
                nameOfClass={nameClass}
                nameOfGood={good}
                click={
                  () => {
                    this.toogleGoods(good);
                  }
                }
              />
            );
          })}
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
        </ul>
      </div>
    );
  }
}

export default App;
