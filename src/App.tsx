import { Component } from 'react';
import cn from 'classnames';
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
  selected: string[];
};

class App extends Component<{}, State> {
  state = {
    selected: ['Jam'],
  };

  handleSelect = (good: string) => {
    this.setState((prevState) => {
      if (prevState.selected.includes(good)) {
        return prevState;
      }

      return {
        selected: [...prevState.selected, good],
      };
    });
  };

  cancelSelect = (good: string) => {
    this.setState((prevState) => {
      prevState.selected.splice(prevState.selected.indexOf(good), 1);

      return {
        selected: prevState.selected,
      };
    });
  };

  addItemsToTitle = (selected: string[]) => {
    let title = '';

    switch (true) {
      case (selected.length === 1):
        title += `${selected} is selected`;
        break;

      case (selected.length > 1):
        title += `${selected.slice(0, -1).join(', ')} and ${selected.slice().pop()} is selected`;
        break;

      default:
        title += 'No goods selected';
        break;
    }

    return title;
  };

  clearSelect = () => {
    this.setState(() => ({
      selected: [],
    }));
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className={cn({
            App__hiden: selected.length === 0,
          })}
          onClick={this.clearSelect}
        >
          X
        </button>
        <h1 className="App__title">
          {this.addItemsToTitle(selected)}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="App__item"
            >
              <span className={`App__span ${selected.includes(good) && 'App__span--active'}`}>
                {good}
              </span>
              <div className="App__btn">
                <button
                  type="button"
                  onClick={() => {
                    return selected.includes(good)
                      ? this.cancelSelect(good)
                      : this.handleSelect(good);
                  }}
                >
                  {selected.includes(good) ? 'Cancel' : 'Select'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
