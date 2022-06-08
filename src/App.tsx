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

interface State {
  goodItem: string;
  isGoodSelected: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goodItem: 'No goods selected',
    isGoodSelected: false,
  };

  render() {
    const { goodItem, isGoodSelected } = this.state;

    const h1Content = isGoodSelected
      ? `${goodItem} is selected`
      : `Selected good: - ${goodItem}`;

    let id = 0;

    return (
      <div className="App">
        <h1>
          {goodItem && h1Content}

          <br />

          <button
            type="button"
            onClick={() => {
              this.setState({
                goodItem: '',
                isGoodSelected: false,
              });
            }}
          >
            Clear
          </button>
        </h1>
        {goodsFromServer.length}

        <ul className="list_of_goods">
          {goodsFromServer.map(item => {
            id += 1;

            return (
              <li
                className={goodItem === item ? 'good is-active' : 'good'}
                key={id}
              >
                {item}
                {goodItem === item
                  ? (
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          goodItem: 'No goods selected',
                          isGoodSelected: false,
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
                        this.setState({
                          goodItem: item,
                          isGoodSelected: true,
                        });
                      }}
                    >
                      Select
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
