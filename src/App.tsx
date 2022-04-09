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
  selectedGood: string;
};
class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  addHandler = (arg: string) => {
    this.setState({ selectedGood: arg });
  };

  clearHandler = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>
            {this.state.selectedGood && `${this.state.selectedGood} is selected `}
          </h1>
          {this.state.selectedGood && (
            <button
              className="clearButton"
              type="button"
              onClick={this.clearHandler}
            >
              Clear
            </button>
          )}
        </div>
        <div className="listStyle">
          {goodsFromServer.map(
            (good) => {
              let selected = false;
              let liClass = '';

              if (good === this.state.selectedGood) {
                selected = true;
                liClass = 'selected';
              }

              return (
                <li className={liClass}>
                  {good}
                  {!selected
                    ? (
                      <button
                        className="selectButton"
                        type="button"
                        onClick={() => {
                          this.addHandler(good);
                        }}
                      >
                        Select
                      </button>
                    ) : null}
                </li>
              );
            },
          )}
        </div>
      </div>
    );
  }
}

export default App;
