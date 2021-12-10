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

type State = {
  selected: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selected: 'Jam',
  };

  selectHandler = (good: string) => {
    this.setState({ selected: good });
  };

  clearSelected = () => {
    this.setState({ selected: '' });
  };

  render() {
    return (
      <div className="App">
        {this.state.selected
          ? <h1>{`${this.state.selected} is selected`}</h1>
          : <h1>No goods selected</h1>}

        <button
          className="App__clearButton"
          type="button"
          onClick={() => {
            this.clearSelected();
          }}
        >
          X
        </button>

        <ul className="App__goodsList">
          {goodsFromServer.map(good => (
            <li className="App__item">
              <div className={this.state.selected === good ? 'App__good--active' : 'App__good'}>
                {good}
              </div>

              {this.state.selected !== good && (
                <button
                  className="App__selectButton"
                  type="button"
                  onClick={() => {
                    this.selectHandler(good);
                  }}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
