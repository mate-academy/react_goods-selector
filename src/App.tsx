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

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="container">
          <section className="App__header header">
            <h1>{selectedGood.length ? `${selectedGood} is selected` : 'No goods selected'}</h1>
            {selectedGood && (
              <button
                className="button button--close"
                type="button"
                onClick={() => (
                  this.setState({ selectedGood: '' })
                )}
              >
                X
              </button>
            )}
          </section>

          <ul className="list">
            {goodsFromServer.map((good) => (
              <li key={good} className="list__item">
                <div className={selectedGood === good ? 'list__item_active' : ''}>
                  {good}
                </div>

                {selectedGood !== good && (
                  <button
                    className="button"
                    type="button"
                    onClick={() => {
                      this.setState({ selectedGood: good });
                    }}
                  >
                    Select
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
