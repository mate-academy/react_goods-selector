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

type Props = {
};

type State = {
  selectedGood: string[];
};

class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: [],
  };

  componentDidMount() {
    this.setState({ selectedGood: ['Jam'] });
  }

  addGoods = (good: string) => {
    this.setState((state) => ({ selectedGood: [...state.selectedGood, good] }));
  };

  removeGoods = (good: string) => {
    this.setState((state) => ({ selectedGood: state.selectedGood.filter(el => el !== good) }));
  };

  listFormated = () => {
    const { selectedGood } = this.state;
    const list = [...selectedGood];

    const lastWord = list.pop();

    switch (selectedGood.length) {
      case 0: return 'No goods selected';
      case 1: return `${lastWord} is selected`;
      default: return `${list.join(', ')} and ${lastWord} are selected`;
    }
  };

  deleteSelect = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="Title">
          Selected good: -
          {' '}
          {selectedGood && this.listFormated()}
          {selectedGood.length > 0 && (
            <button
              type="button"
              className="Delete__button"
              onClick={this.deleteSelect}
            >
              X
            </button>
          )}
        </h1>
        <ul className="Goods">
          {goodsFromServer.map(good => (
            <li
              key={`name__${good.toLowerCase()}`}
              className={classNames('Goods__item', { active: selectedGood.includes(good) })}
            >
              {good}
              {selectedGood.includes(good) ? (
                <button
                  type="button"
                  className="Goods__button Goods__button--remove"
                  onClick={() => {
                    this.removeGoods(good);
                  }}
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  className="Goods__button Goods__button--add"
                  onClick={() => {
                    this.addGoods(good);
                  }}
                >
                  Add
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
