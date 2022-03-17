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

type State = {
  selectedGoods: string[];
};

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    const newArr = this.state.selectedGoods.filter(item => item !== good);

    return this.setState(() => ({
      selectedGoods: newArr,
    }
    ));
  };

  removeAllGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  addGoodsToTitle = (arr: string[]) => {
    if (arr.length === 1) {
      return `${arr[0]} is selected`;
    }

    const start = arr.slice(0, arr.length - 1).join(', ');
    const end = arr[arr.length - 1];

    return `${start} and ${end} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__title-container">
          <h1 className="App__title">
            {(selectedGoods.length > 0)
              ? (this.addGoodsToTitle(selectedGoods))
              : ('No goods selected')}
          </h1>

          <button
            type="button"
            className="App__title-button"
            hidden={selectedGoods.length === 0}
            onClick={() => {
              this.removeAllGoods();
            }}
          >
            X
          </button>
        </div>

        <ul className="App__list">
          {goodsFromServer.map((good, index) => (
            <li
              key={+index}
              className="App__list-item"
            >

              <p className={`App__list-item__good ${selectedGoods.includes(good)
                ? 'App__list-item--selected'
                : ''}`}
              >
                {good}
              </p>

              <button
                className={`App__list-button ${selectedGoods.includes(good)
                  ? 'App__list-button--selected'
                  : ''}`}
                type="button"
                onClick={() => {
                  return (
                    (selectedGoods.includes(good))
                      ? (this.removeGood(good))
                      : (this.addGood(good))
                  );
                }}
              >
                {(selectedGoods.includes(good))
                  ? ('Remove')
                  : ('Add')}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
