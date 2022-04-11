import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type Props = {};

interface State {
  selectedGood: string;
}

class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  setSelectedGood = (good: string) => this.setState({ selectedGood: good });

  removeSelectedGood = () => this.setState({ selectedGood: '' });

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="good">
          {selectedGood.length ? `${selectedGood} is selected` : 'No goods selected'}
        </h1>
        {selectedGood && (
          <button
            className="button button_clear"
            type="button"
            onClick={this.removeSelectedGood}
          >
            Clear Good
          </button>
        )}
        <div className="goods">
          <ul className="goods_list">
            {
              goodsFromServer.map(good => (
                <li className="goods_item" key={good}>
                  <div className={selectedGood === good ? 'goods_item_active' : ''}>
                    {good}
                  </div>
                  {selectedGood !== good && (
                    <button
                      className="button button_add"
                      type="button"
                      onClick={() => this.setSelectedGood(good)}
                    >
                      Add Good
                    </button>
                  )}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
