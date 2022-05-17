import React from 'react';
import classNames from 'classnames';
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
  selectedGood: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  goodsTitle = (selectedGood: string[]) => {
    if (selectedGood.length === 1) {
      return `${selectedGood} is selected`;
    }

    if (selectedGood.length > 1) {
      return `${selectedGood.slice(0, -1).join(', ')}
        and ${selectedGood.slice(-1)} are selected`;
    }

    return 'No goods selected';
  };

  removeGood = (item: string) => {
    this.setState((prevState) => ({
      selectedGood: prevState.selectedGood.filter(good => good !== item),
    }));
  };

  selectGood = (item: string) => {
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood, item],
    }));
  };

  clearAllGoods = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">{this.goodsTitle(selectedGood)}</h1>
        <ul className="list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={classNames(
                'list__item',
                { list__item_selected: selectedGood.includes(item) },
              )}
            >
              {item}
              <button
                type="button"
                className={classNames(
                  'button',
                  { button__selected: selectedGood.includes(item) },
                )}
                onClick={() => {
                  return (
                    selectedGood.includes(item)
                      ? this.removeGood(item)
                      : this.selectGood(item)
                  );
                }}
              >
                {selectedGood.includes(item) ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="clear_button"
          hidden={selectedGood.length === 0}
          onClick={this.clearAllGoods}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
