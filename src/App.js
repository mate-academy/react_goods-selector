import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    selectedGood: ['Jam'],
  }

  clear = () => {
    this.setState({ selectedGood: [] });
  }

  addItem = (good) => {
    this.setState(prevState => (
      {
        selectedGood: [...prevState.selectedGood, good],
      }
    ));
  }

  removeItem = (good) => {
    this.setState(prevState => (
      {
        selectedGood: prevState.selectedGood
          .filter(el => el !== good),
      }
    ));
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="header">
            Goods Selector
          </h1>
          <h2 className="selectedList">
            Selected goods:
            {' '}
            {
            selectedGood.length > 0
              ? `${selectedGood.join(', ')} 
                ${selectedGood.length > 1 ? 'are' : 'is'} selected`
              : ' No goods selected'
            }
          </h2>

          {selectedGood.length !== 0
            && (
              <>
                <h2 className="clearText">
                  Clear selection:
                </h2>

                <button
                  type="button"
                  className="clearButton"
                  onClick={this.clear}
                >
                  X
                </button>
              </>
            )
          }

          <ul className="list">
            {goodsFromServer.map((good) => {
              const goodsInBasket = selectedGood.includes(good);

              return (
                <li
                  key={good}
                  className={classNames('good', {
                    selected: goodsInBasket,
                  })}
                >
                  {good}

                  <button
                    type="button"
                    className="button"
                    onClick={() => (
                      goodsInBasket
                        ? this.removeItem(good)
                        : this.addItem(good)
                    )
                    }
                  >
                    {goodsInBasket ? 'Remove' : 'Add'}
                  </button>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    );
  }
}

export default App;
