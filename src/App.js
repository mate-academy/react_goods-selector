import React from 'react';
import './App.scss';
import './components/GoodsList/GoodsList.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

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
    selectedGood: '-',
  }

  handleClick = (e) => {
    this.setState({
      selectedGood: e.target.textContent,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <header className="header">
          <h1>
            Selected good:
            <br />
            {selectedGood}
          </h1>
          <button
            type="button"
            className="header__button"
            onClick={() => {
              this.setState({
                selectedGood: 'no selected good',
              });
            }}
          >
            Delete
          </button>
        </header>
        <GoodsList
          goods={goodsFromServer}
          heading={selectedGood}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
