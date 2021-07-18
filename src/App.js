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
    goods: [...goodsFromServer],
    selectedGoods: ['Jam'],

  }

  addGoods = (value) => {
    // this.setState({selectedGoods: [this.state.selectedGoods, ...value]})
    if (!this.state.selectedGoods.includes(value)) {
      this.setState(prevState => prevState.selectedGoods.push(value));
    } else if (this.state.selectedGoods.includes(value)) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.filter(x => x !== value),
      }));
    }
  }

  cleanGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <>
        <h1>
          {selectedGoods.length === 0
            ? 'No goods selected'
            : `${selectedGoods} is selected`
          }
          {' '}
          {selectedGoods.length > 0
            ? (
              <button
                type="button"
                onClick={() => this.cleanGoods()}
              >
                clean
              </button>
            )
            : null
          }
        </h1>
        <ul>
          {this.state.goods.map(good => (
            <>
              {' '}
              <li className={selectedGoods.includes(good)
                ? 'show'
                : 'hide'}
              >
                {good}
              </li>
              <button
                type="button"
                onClick={() => this.addGoods(good)}
              >
                {selectedGoods.includes(good) ? 'remove' : 'add'}
              </button>
            </>
          ))
        }
        </ul>
      </>
    );
  }
}
export default App;
