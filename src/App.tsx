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
  selectedGood: string[];
};

const showGood = (value:string[]) => {
  let rezult = '';

  if (value.length === 0) {
    rezult = 'No goods selected';
  } else if (value.length === 1) {
    rezult = `${value.join(',')} is selected`;
  } else {
    const arr = [...value];
    const last = arr.pop();

    rezult = `${arr.join(',')} and ${last} are selected`;
  }

  return rezult;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addGoods = (item: string) => {
    this.setState((prev) => {
      const newSelectedGoods = prev.selectedGood;

      newSelectedGoods.push(item);

      return { selectedGood: newSelectedGoods };
    });
  };

  removeGoods = (item:string) => {
    this.setState((prev) => {
      const newSelectedGoods = prev.selectedGood;
      const indexOfGood = newSelectedGoods.indexOf(item);

      newSelectedGoods.splice(indexOfGood, 1);

      return { selectedGood: newSelectedGoods };
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="level">
          {selectedGood.length > 0 && (
            <button
              className="button is-danger"
              type="button"
              onClick={() => {
                this.setState({ selectedGood: [] });
              }}
            >
              Clear
            </button>
          )}
          <h1 className="level-item has-text-centered App__title">
            Selected good:
            {showGood(selectedGood)}
          </h1>
        </div>
        <div className="App__item">
          {goodsFromServer.map(item => (
            <div key={item}>
              <p>{item}</p>

              <button
                className={(selectedGood.find(elem => elem === item))
                  ? 'button is-danger is-small'
                  : 'button is-success is-small'}
                type="button"
                onClick={() => {
                  return (selectedGood.find(elem => elem === item))
                    ? this.removeGoods(item)
                    : this.addGoods(item);
                }}
              >
                {
                  (selectedGood.find(elem => elem === item))
                    ? 'Remove'
                    : 'Select'
                }
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
