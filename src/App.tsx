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
  selectedGood: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: [goodsFromServer[8]],
  };

  addStyleSelect = (element: string) => {
    this.setState(
      (prevState) => ({
        selectedGood: [...prevState.selectedGood, element],
      }),
    );
  };

  resetSelected = () => {
    this.setState(
      () => ({
        selectedGood: [],
      }),
    );
  };

  myTitle = (selectedGood: string[]) => {
    const copyselectedGood = [...selectedGood];

    if (selectedGood.length === 0) {
      return 'No goods selected';
    }

    if (selectedGood.length >= 3) {
      const lastItem = copyselectedGood[copyselectedGood.length - 1];

      copyselectedGood.pop();

      return `${copyselectedGood.join(', ')} and ${lastItem} are selected`;
    }

    return `${copyselectedGood.join(' and ')} is selected`;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {this.myTitle(selectedGood)}
        </h1>
        <div>
          Reset your selections
          <button
            type="button"
            onClick={() => this.resetSelected()}
          >
            x
          </button>
        </div>

        <ul>
          {goodsFromServer.map(item => (
            ((selectedGood.includes(item)
              ? (
                <li key={item} className="active">
                  {item}
                  <button
                    type="button"
                    onClick={() => this.addStyleSelect(item)}
                  >
                    selected
                  </button>
                </li>
              )
              : (
                <li key={item}>
                  {item}
                  <button
                    type="button"
                    onClick={() => (
                      this.addStyleSelect(item)
                    )}
                  >
                    selected
                  </button>
                </li>
              )
            )
            )))}
        </ul>
      </div>
    );
  }
}

export default App;
