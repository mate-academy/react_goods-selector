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
  state ={
    choosenGoods: [],
  }

  addGood = (good) => {
    if (this.state.choosenGoods.includes(good)) {
      this.setState(prevState => (
        { choosenGoods: prevState.choosenGoods.filter(el => el !== good) }
      ));
    } else {
      this.setState(prevState => (
        {
          choosenGoods: [...prevState.choosenGoods, good],
        }));
    }
  }

  deletingAllButton = () => {
    this.setState({ choosenGoods: [] });
  }

  render() {
    const { choosenGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          { (choosenGoods.length === 0)
            ? 'No goods selected'
            : `Selected: ${choosenGoods.join(', ')}`
          }
        </h1>
        {(choosenGoods.length > 0) && (
          <button
            type="button"
            onClick={this.deletingAllButton}
            className="App__button--delete-all"
          >
            X
          </button>
        )}
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={`${good}`}
              className={choosenGoods.includes(good) && 'App__item-active'}
            >
              {` ${good} `}
              <button
                type="button"
                className="App__button-select"
                onClick={() => {
                  this.addGood(good);
                }}
              >
                {choosenGoods.includes(good) ? 'DELETE' : 'ADD'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
