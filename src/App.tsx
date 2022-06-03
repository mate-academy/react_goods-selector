import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice-cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  items: string[],
};

class App extends React.Component<{}, State> {
  state = {
    items: ['Jam'],
  };

  selected = (good: string) => {
    this.setState((prevState) => ({
      items: [...prevState.items, good],
    }));
  };

  unselected = () => {
    this.setState({ items: [] });
  };

  removeSelect = (selectedItem: string) => {
    this.setState((prevState) => ({
      items: prevState.items.filter(good => good !== selectedItem),
    }));
  };

  renderBoxGoods = () => {
    const { items } = this.state;

    if (items.length === 0) {
      return 'No goods selected';
    }

    if (items.length === 1) {
      return `${items[0]} is selected`;
    }

    return `${items.slice(0, -1).join(', ')}
          and ${items.slice(-1)} are selected`;
  };

  render(): React.ReactNode {
    const { items } = this.state;

    return (
      <div className="container is-max-desktop">

        <h1 className="title">
          {this.renderBoxGoods()}
        </h1>

        <ul className="display">
          {goodsFromServer.map((good) => {
            return (
              <li
                key={good}
                className={`list ${items.includes(good)
                  ? 'list__active' : ''}`}
              >
                {good}

                <button
                  type="button"
                  className="button"
                  onClick={
                    items.includes(good)
                      ? () => this.removeSelect(good)
                      : () => this.selected(good)
                  }
                >
                  {items.includes(good) ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>

        {items.length > 0 && (
          <button
            type="button"
            onClick={this.unselected}
            className="button is-danger"
          >
            Clear Selected Items
          </button>
        )}
      </div>
    );
  }
}

export default App;
