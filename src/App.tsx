import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  title = () => {
    const { selectedGoods } = this.state;

    let message;

    if (selectedGoods.length === 0) {
      message = 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      message = `${selectedGoods[0]} is selected`;
    }

    if (selectedGoods.length === 2) {
      message = `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
    }

    if (selectedGoods.length >= 2) {
      const firstPart = selectedGoods.slice(0, selectedGoods.length);

      message = `${firstPart} are selected`;
    }

    return message;
  };

  selecetGood = (item: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));
  };

  clearGood = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className=".container-xxl d-flex justify-content-center">
          {this.title()}
          {selectedGoods.length >= 1 && (
            <button
              className="rounded border-0 btn btn-success"
              type="button"
              onClick={() => this.clearGood()}
            >
              Clear items
            </button>
          )}
        </h1>
        <ul className="row row-cols-auto d-flex justify-content-center">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'w-auto p-3',
                'rounded',
                { 'bg-success': selectedGoods.includes(good) },
              )}
              key={good}
            >
              {good}
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.selecetGood(good)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
