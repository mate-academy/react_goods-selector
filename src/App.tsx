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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: ['Jam'],
  };

  setSelected = (good: string) => {
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  setRemove = (prevGood: string) => {
    return this.setState(prevState => ({
      selectedGood: prevState.selectedGood.filter(good => good !== prevGood),
    }));
  };

  clear = () => {
    this.setState({ selectedGood: [] });
  };

  createTitle = () => {
    const { selectedGood } = this.state;

    switch (selectedGood.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGood[0]} is selected`;

      case 2:
        return `${selectedGood.join(' and ')} are selected`;

      default:
        return `${selectedGood.slice(0, -1).join(', ')} and ${selectedGood[selectedGood.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="product">
          <h1 className="product__title">
            {!selectedGood.length || (
              <button
                type="button"
                className="product__title-clear"
                onClick={() => {
                  this.clear();
                }}
              >
                Clear
              </button>
            )}
            {this.createTitle()}
          </h1>
          <ol className="product__list">
            {goodsFromServer.map((good) => (
              <>
                <li
                  className={classNames(
                    'product__list',
                    {
                      active: selectedGood.includes(good),
                    },
                  )}
                  key={good}
                >
                  {good}
                </li>
                <button
                  type="button"
                  className="product__select"
                  onClick={() => {
                    if (selectedGood.includes(good)) {
                      return this.setRemove(good);
                    }

                    return this.setSelected(good);
                  }}
                >
                  {selectedGood.includes(good) ? 'Remove' : 'Select'}
                </button>
              </>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
