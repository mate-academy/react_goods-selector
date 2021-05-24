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
    goods: ['Jam'],
  }

  goodAdd = (good) => {
    if (!this.state.goods.includes(good)) {
      this.setState(prevState => ({
        goods: [...prevState.goods, good],
      }));
    }
  }

  goodDelete = (good) => {
    this.setState(prevState => ({
      goods: prevState.goods.filter(element => element !== good),
    }));
  }

  goodClear = (good) => {
    this.setState({ goods: [] });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>
          {goods.length > 0
            ? (`${goods.join(', ')} is selected `)
            : 'No goods selected'}
          {goods.length > 0
            && (<button type="button" onClick={this.goodClear}>X</button>
            )}
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <>
              <div className="App__good">
                <li li key={good} className="App__good-name">{good}</li>
                {goods.includes(good)
                  ? (
                    <button
                      type="button"
                      onClick={() => {
                        this.goodDelete(good);
                      }}
                      className="App__button-delete"
                    >
                      X
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={(evnt) => {
                        this.goodAdd(good);
                      }}
                      className="App__button-add"
                    >
                      +
                    </button>
                  )
                }
              </div>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
