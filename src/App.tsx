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
  selectedGood: string,
}

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addActiveClass = 'list_item--active';

  render() {
    return (
      <>
        <div className="App">
          <h1>
            {this.state.selectedGood
              ? (`Selected good: - ${this.state.selectedGood}`)
              : 'No goods selected'}
          </h1>

          <button
            type="button"
            className="clear-btn list_btn"
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            Clear
          </button>

          {/* <ul className="list">
            {goodsFromServer.map(good => (
              <li className="list_item" key={good}>
                {good}

                {this.state.selectedGood === good
                  ? (
                    <button
                      type="button"
                      className="list_btn list_btn--remove"
                      onClick={() => {
                        this.setState({ selectedGood: '' });
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="list_btn"
                      onClick={() => {
                        this.setState({ selectedGood: good });
                      }}
                    >
                      Select
                    </button>
                  )}
              </li>
            ))}
          </ul> */}

          <ul className="list">
            {goodsFromServer.map(good => (
              <React.Fragment key={good}>
                {this.state.selectedGood === good
                  ? (
                    <li className="list_item list_item--active">
                      {good}
                      <button
                        type="button"
                        className="list_btn list_btn--remove"
                        onClick={() => {
                          this.setState({ selectedGood: '' });
                        }}
                      >
                        Remove
                      </button>
                    </li>
                  )
                  : (
                    <li className="list_item">
                      {good}
                      <button
                        type="button"
                        className="list_btn"
                        onClick={() => {
                          this.setState({ selectedGood: good });
                        }}
                      >
                        Select
                      </button>
                    </li>
                  )}
              </React.Fragment>
            ))}
          </ul>

        </div>
      </>
    );
  }
}

export default App;
