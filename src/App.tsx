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
    selectedGood: ['Jem'],
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
              {(selectedGood.find(elem => elem === item))
                ? (
                  <button
                    className="button is-danger is-small"
                    type="button"
                    onClick={() => {
                      this.setState((prev) => {
                        const newSelectedGoods = prev.selectedGood;

                        const indexOfGood = newSelectedGoods.indexOf(item);

                        newSelectedGoods.splice(indexOfGood, 1);

                        return { selectedGood: newSelectedGoods };
                      });
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    className="button is-success is-small"
                    type="button"
                    onClick={() => {
                      this.setState((prev) => {
                        const newSelectedGoods = prev.selectedGood;

                        newSelectedGoods.push(item);

                        return { selectedGood: newSelectedGoods };
                      });
                    }}
                  >
                    Select
                  </button>
                )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
