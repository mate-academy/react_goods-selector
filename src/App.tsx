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
  selectedGoods : string[];
};

function showHeading(goodsArray : string[]) {
  if (goodsArray.length === 0) {
    return ('No goods selected');
  }

  if (goodsArray.length === 1) {
    return (`${goodsArray} is selected`);
  }

  let newHeading = '';

  if (goodsArray.length > 1) {
    for (let i = 0; i <= goodsArray.length - 2; i += 1) {
      if ((i + 2) !== goodsArray.length) {
        newHeading += `${goodsArray[i]}, `;
      } else {
        newHeading += `${goodsArray[i]} and ${goodsArray[i + 1]}`;
      }
    }

    newHeading += ' are selected';
  }

  return newHeading;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  render() {
    return (
      <div className="App">
        <h1>
          { showHeading(this.state.selectedGoods) }
        </h1>
        <div className="goods">
          <ul className="goods__list">
            {goodsFromServer.map(el => (
              <li
                className="goods__list-item"
                key={el}
              >
                {(this.state.selectedGoods.find(element => element === el))
                  ? (
                    <>
                      <p className="goods__list-item-text-selected">
                        {el}
                      </p>
                      <button
                        className="goods__list-button"
                        type="button"
                        onClick={() => {
                          this.setState(
                            (prevState) => {
                              const modifiedGoods = prevState.selectedGoods;

                              const findGood = modifiedGoods.indexOf(el);

                              modifiedGoods.splice(findGood, 1);

                              return { selectedGoods: modifiedGoods };
                            },
                          );
                        }}
                      >
                        remove
                      </button>
                    </>
                  )
                  : (
                    <>
                      <p className="goods__list-item-text">
                        {el}
                      </p>
                      <button
                        className="goods__list-button"
                        type="button"
                        onClick={() => {
                          this.setState(
                            (prevState) => {
                              const modifiedGoods = prevState.selectedGoods;

                              modifiedGoods.push(el);

                              return { selectedGoods: modifiedGoods };
                            },
                          );
                        }}
                      >
                        choose me
                      </button>
                    </>
                  )}
              </li>
            ))}
          </ul>
        </div>
        {((this.state.selectedGoods.length > 0)
          ? (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              CLEAR
            </button>

          )
          : '')}
      </div>
    );
  }
}

export default App;
