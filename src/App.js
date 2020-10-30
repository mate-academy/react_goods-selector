import React from 'react';
import './App.scss';

import active from 'classnames';

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

  addGoods = (good) => {
    const goodIndex = this.state.selectedGoods.indexOf(good);

    if (goodIndex !== -1) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods
          .filter(item => good !== item),
      }));
    } else {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.concat(good),
      }));
    }
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: - ${selectedGoods}`}
        </h1>
        <div>
          <button
            type="button"
            className="clear-button"
            onClick={this.clearGoods}
          >
            X
          </button>
          <ul className="list">
            {goodsFromServer.map(good => (
              <li className="list__item" key={good}>
                <button
                  type="button"
                  className={active('list__button', {
                    'list__button--active': good === selectedGoods,
                  })}
                  onClick={() => {
                    this.addGoods(good);
                  }}
                >
                  {good}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
