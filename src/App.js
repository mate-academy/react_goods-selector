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
    selectedGoods: ['Jam'],
  }

  addGoods = (good) => {
    if (!this.state.selectedGoods.includes(good)) {
      this.setState(prevState => prevState.selectedGoods.push(good));
    } else {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.filter(x => x !== good),
      }));
    }
  }

  cleanGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  headerText = (goods) => {
    switch (goods) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${this.state.selectedGoods} is selected`;
      default:
        return `${this.state.selectedGoods} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <>
        <h1>
          {this.headerText(selectedGoods.length)}
          {' '}
          {!!selectedGoods.length
            && (
              <button
                type="button"
                onClick={() => this.cleanGoods()}
              >
                clean
              </button>
            )
          }
        </h1>
        <ul>
          {goodsFromServer.map(good => (
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
