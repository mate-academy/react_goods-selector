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
  items: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    items: ['Jam'],
  };

  selectItem = (good: string) => {
    this.setState((prevState) => ({ items: [...prevState.items, good] }));
  };

  removeItem = (good: string) => {
    this.setState((prevState) => ({
      items: prevState.items.filter(remaining => remaining !== good),
    }));
  };

  buttonSelection = (isSelected: boolean, good: string) => {
    return isSelected
      ? this.removeItem(good)
      : this.selectItem(good);
  };

  createMessage = () => {
    const { items } = this.state;

    const exceptLastGood = items.slice(0, -1).join(', ');
    const lastGood = items.slice(-1);

    switch (items.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${items[0]} is selected`;
      case 2:
        return `${items[0]} and ${items[1]} are selected`;
      default:
        return (`${exceptLastGood} and ${lastGood} are selected`);
    }
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <div>
          <h1 className="selectedGood">
            {`Selected good: ${this.createMessage()}`}
          </h1>

          <ul>
            {goodsFromServer.map((good: string) => {
              const isSelected = this.state.items.includes(good);
              const buttonText = isSelected ? 'Remove' : 'Select';

              return (
                <li key={good}>
                  <span>
                    {good}
                  </span>

                  <button
                    type="button"
                    onClick={() => this.buttonSelection(isSelected, good)}
                  >
                    {buttonText}
                  </button>
                </li>
              );
            })}
          </ul>

          {this.state.items.length && (
            <button
              type="button"
              onClick={() => {
                this.setState({ items: [] });
              }}
            >
              Clear goods!
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
