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
  selectedGood: string,
}

class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  render() {
    return (
      <div className="App">
        {this.state.selectedGood
          ? (
            <h1>
              {`${this.state.selectedGood} is selected`}
              <button
                type="button"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              >
                Clear selected
              </button>
            </h1>
          )
          : <h1>No goods selected</h1>}

        <ol>
          {goodsFromServer.map(item => (
            <div>
              <li key={item}>
                {item}
                {' '}
                {(this.state.selectedGood !== item) && (
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({ selectedGood: item });
                    }}
                  >
                    Select
                  </button>
                )}
              </li>
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
