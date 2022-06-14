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
  items: string[],
}

class App extends React.Component<{}, State> {
  state:State = {
    items: ['Jam'],
  };

  selectItem = (good: string) => {
    this.setState((prevState) => ({ items: [...prevState.items, good] }));
  };

  removeItem = (good : string) => {
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

    switch (items.length) {
      case 0:
        return 'No goods selected!';
      case 1:
        return `${items[0]} is selected`;
      case 2:
        return `${items[0]} and ${items[1]} are selected`;
      default:
        return `${items.slice(0, -1).join(', ')} and ${items.slice(-1)} are selected`;
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">
          {this.createMessage()}
        </h1>

        <ul>
          {goodsFromServer.map((good) => {
            const isSelected = this.state.items.includes(good);
            const textButton = isSelected ? 'Remove' : 'Select';

            return (
              <li key={good} className="columns">
                <span
                  className={`column is-one-fifth ${isSelected
                    ? 'has-text-primary'
                    : ''}`}
                >
                  {good}
                </span>
                <button
                  type="button"
                  onClick={() => this.buttonSelection(isSelected, good)}
                  className={`column is-one-fifth button ${isSelected
                    ? 'is-danger is-outlined'
                    : 'is-success is-outlined'}`}
                >
                  {textButton}
                </button>
              </li>
            );
          })}
        </ul>

        {!!this.state.items.length && (
          <button
            type="button"
            onClick={() => {
              this.setState({ items: [] });
            }}
            className="mt-3 button is-dark is-outlined"
          >
            Clear goods!
          </button>
        )}
      </div>
    );
  }
}

export default App;
