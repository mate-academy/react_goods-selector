import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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
    heading: '-',
  }

  handler = (goodName) => {
    this.setState({
      heading: goodName,
    });
  }

  remove = () => {
    this.setState({
      heading: '-',
    });
  }

  render() {
    const { heading } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <h1>{`Selected good: ${heading}`}</h1>
          <button
            type="button"
            onClick={this.remove}
            className="App__button"
          >
            X
          </button>
        </div>
        <GoodsList
          handler={this.handler}
          goods={goodsFromServer}
          heading={heading}
        />
      </div>
    );
  }
}

export default App;
