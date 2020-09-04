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

export class App extends React.Component {
  state = {
    selected: '-',
  }

  setSelected = (item) => {
    this.setState({ selected: item });
  }

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected good: ${this.state.selected}`}
        </h1>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ selected: '-' });
          }}
        >
          Cancel
        </button>
        <GoodsList
          goods={goodsFromServer}
          selectHandler={this.setSelected}
          selectedItem={this.state.selected}
        />
      </div>
    );
  }
}
