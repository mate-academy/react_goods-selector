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
    selectedGood: [],
  };

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.selectedGood.length
            ? (
              <>
                {this.state.selectedGood.join(', ')}
                {this.state.selectedGood.length > 1 ? ' are ' : ' is '}
                selected
                <button
                  type="button"
                  onClick={() => this.setState({ selectedGood: [] })}
                >
                  X
                </button>
              </>
            )
            : 'No goods selected'}
        </h1>
        {goodsFromServer.length}
        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={
                this.state.selectedGood.includes(item) && 'selected'
              }
            >
              {item}
              {this.state.selectedGood.includes(item)
                ? (
                  <button
                    type="button"
                    onClick={() => {
                      this.setState((state) => {
                        const goodsArray = state.selectedGood;

                        goodsArray.splice(goodsArray.indexOf(item), 1);

                        return { selectedGood: [...goodsArray] };
                      });
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(state => (
                        { selectedGood: [...state.selectedGood, item] }
                      ));
                    }}
                  >
                    Add
                  </button>
                )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
