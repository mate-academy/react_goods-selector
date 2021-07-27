import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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

const preparedGoods = goodsFromServer.map(good => ({
  name: good,
  id: uuidv4(),
}));

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  }

  selectGood = ({ name, id }) => {
    this.setState({
      selectedGood: name,
      id,
    });
  };

  removeGood = () => {
    this.setState({
      selectedGood: null,
      id: null,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.selectedGood
            ? `${this.state.selectedGood} is selected`
            : `No goods selected`
          }
        </h1>
        <button type="button" onClick={this.removeGood}>
          X
        </button>
        <ul>
          {preparedGoods.map(good => (
            <li key={good.id}>
              {good.name}
              {(this.state.id !== good.id)
                && (
                  <button
                    type="button"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
