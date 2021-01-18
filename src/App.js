import React from 'react';
import './App.scss';
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
    selectedGood: [],
  }

  setSelectedGood = (good) => {
    if (this.state.selectedGood.indexOf(good) === -1) {
      this.setState(prevState => (
        { selectedGood: [...prevState.selectedGood, good] }
      ));
    }
  }

  clearSelected = () => {
    this.setState({ selectedGood: [] });
  }

  removeFromSelected = (good) => {
    this.setState(prevState => ({
      selectedGood: prevState.selectedGood
        .filter(item => item !== good),
    }));
  }

  render() {
    return (
      <div
        className="App is-flex is-flex-direction-column is-align-items-center"
      >
        <h1 className="title">
          {`Selected goods: ${this.state.selectedGood.join(', ')}`}
        </h1>
        <button
          type="button"
          className="button is-danger"
          onClick={this.clearSelected}
        >
          X
        </button>
        <p className="subtitle is-2">
          {`Selected: ${this.state.selectedGood.length}`}
        </p>

        <GoodsList
          goods={goodsFromServer}
          setSelectedGood={this.setSelectedGood}
          selectedGood={this.state.selectedGood}
          removeFromSelected={this.removeFromSelected}
        />
      </div>
    );
  }
}

export default App;
