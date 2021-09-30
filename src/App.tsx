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

type State = {
  title: [string],
};

class App extends React.Component {
  state: State = {
    title: ['Jam'],
  };

  selectedGoods = (good: string) => {
    this.setState((state: State) => ({
      title: [...state.title, good],
    }));
  };

  removeGoods = (good: string) => {
    const goodToRemove = this.state.title.indexOf(good);

    this.setState((state:State) => {
      const newGoods = [...state.title];

      newGoods.splice(goodToRemove, 1);

      return {
        title: newGoods,
      };
    });
  };

  removeAllGoods = () => {
    this.setState({
      title: [],
    });
  };

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {
            this.state.title.length > 0
              ? ` ${title.join(', ')} ${this.state.title.length > 1 ? 'are ' : 'is '} selected`
              : 'No goods selected'
          }
          <button
            type="button"
            onClick={this.removeAllGoods}
            className="title__button"
          >
            Clear
          </button>
        </h1>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li className="list__item">
              <b>
                {good}
              </b>
              <button
                type="button"
                key={good}
                className="list__button"
                onClick={() => {
                  return !this.state.title.includes(good)
                    ? this.selectedGoods(good)
                    : this.removeGoods(good);
                }}
              >
                <b>
                  {
                    this.state.title.includes(good)
                      ? 'remove'
                      : 'select'
                  }
                </b>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
