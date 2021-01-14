import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList/GoodList';

class App extends React.Component {
  state = {
    selectedGood: '',
  }

  setGood = (value) => {
    this.setState({
      selectedGood: value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {this.state.selectedGood}
        </h1>
        <button
          type="button"
          onClick={() => this.setState({ selectedGood: '' })}
        >
          X
        </button>
        <GoodList
          setGood={this.setGood}
          selectedGood={this.state.selectedGood}
        />
      </div>
    );
  }
}

export default App;
