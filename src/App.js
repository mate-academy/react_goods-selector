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
    selected: 'Jam',
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        {selected ? (
          <h1>
            {`${selected} is selected`}
            <button
              className="cancel"
              type="button"
              onClick={() => {
                this.setState({ selected: null });
              }}
            >
              X
            </button>
          </h1>
        ) : (
          <h1>No goods selected</h1>
        )}

        {goodsFromServer.map(item => (
          <div className="good">
            <div className={selected === item ? 'item--active' : 'item'}>
              {item}
            </div>
            <button
              key={item}
              type="button"
              className={selected === item ? 'active' : ''}
              onClick={() => {
                this.setState({ selected: item });
              }}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
