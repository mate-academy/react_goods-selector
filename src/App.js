import React from 'react';
import './App.scss';
import { Title } from './Title';

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

  selectProduct = (good) => {
    this.setState(
      prevState => ({ selectedGoods: [...prevState.selectedGoods, good] }),
    );
  }

  cleanList = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    return (
      <div className="App">
        <div className="panel">
          <div className="panel-heading">
            <Title goodsList={this.state.selectedGoods} />
          </div>
          <ul className="list">
            {goodsFromServer.map(
              good => (
                <>
                  <li key={good}>
                    {good}
                    {!this.state.selectedGoods.includes(good)
                    && (
                      <button
                        type="submit"
                        className="list__button
                      button is-small is-light is-success is-rounded"
                        onClick={() => (
                          this.selectProduct(good))
                      }
                      >
                        Select
                      </button>
                    )}

                  </li>
                </>
              ),
            )}
          </ul>
          <div className="panel-block">
            {this.state.selectedGoods.length > 0
              && (
              <button
                type="submit"
                className="button is-rounded is-black is-small"
                onClick={this.cleanList}
              >
                Clean product list
              </button>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
