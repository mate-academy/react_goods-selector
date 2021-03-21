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

const preparedListGoods = goodsFromServer.map((name, index) => (
  {
    name,
    index: index + 1,
  }
));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedGoods: [],
    };
  }

  addGood = (goodName) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, goodName],
    }));
  }

  deleteGood = (goodName) => {
    this.setState((prevState) => {
      const filteredGoods = prevState.selectedGoods.filter(
        selectedGoodName => selectedGoodName !== goodName,
      );

      return {
        selectedGoods: filteredGoods,
      };
    });
  }

  resetGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;
    const listLength = selectedGoods.length;

    return (
      <div className="App">
        <div className="wrap">
          {
              listLength
                ? (
                  <>
                    <h1>
                      {
                        listLength === 1
                          ? (
                            <>
                              {selectedGoods[0]}
                              {' '}
                              is selected
                            </>
                          )
                          : ''
                      }
                      {
                        listLength > 1
                          ? (
                            <>
                              {selectedGoods.join(', ')}
                              {' '}
                              are selected
                            </>
                          )
                          : ''
                      }
                    </h1>
                    <button
                      type="button"
                      onClick={this.resetGoods}
                      className="button"
                    >
                      Reset
                    </button>
                  </>
                )
                : <h1>No goods selected</h1>
            }
        </div>

        {
          preparedListGoods.map(good => (
            <div className="wrap" key={good.index}>
              {
                 selectedGoods.includes(good.name)
                   ? (
                     <>
                       <span className="selected">
                         {good.name}
                       </span>
                       <button
                         type="button"
                         onClick={this.deleteGood.bind(null, good.name)}
                         className="button button--red"
                       >
                         Delete
                       </button>
                     </>
                   )
                   : (
                     <>
                       <span>
                         {good.name}
                       </span>
                       <button
                         type="button"
                         onClick={this.addGood.bind(null, good.name)}
                         className="button"
                       >
                         Select
                       </button>
                     </>
                   )
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
