import React from 'react';
import './App.scss';
// import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';

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

class App extends React.PureComponent {
  state = {
    selectedGood: 'Jam',
    isButtonHiden: false,
  };

  addGood = (good) => {
    this.setState({
      selectedGood: good,
      isButtonHiden: false,
    });
  }

  removeGood = (good) => {
    this.setState({
      selectedGood: 'No goods selected',
      isButtonHiden: true,
    });
  }

  render() {
    const { selectedGood, isButtonHiden } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: - ${selectedGood} `}
          <button
            type="button"
            hidden={isButtonHiden}
            onClick={() => {
              this.removeGood();
            }}
          >
            X
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                onClick={() => {
                  this.addGood(good);
                }}
              >
                Select
              </button>
              {' '}
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
