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

class App extends React.Component {
  state = {
    selectedNo: 'No goods selected',
    noGoods: 'No goods selected',
    selectedGood: '',
    selectedGoods: [],
  };

  render() {
    const {
      selectedNo, selectedGood, selectedGoods, noGoods,
    } = this.state;

    return (
      <>
        <div className="App">
          <h1 className="title">
            Selected good:
            <span className="red">
              {selectedGood !== '' ? `${selectedGood} is selected` : `${selectedNo}`}
            </span>

            <button
              type="button"
              className="button button__h1"
              onClick={() => {
                this.setState({ selectedNo: '', selectedGood: '' });
              }}
            >
              X
            </button>
          </h1>

          <ul className="goods">
            {goodsFromServer.map(good => (
              <li key={good} className={`good ${selectedGood !== good ? '' : 'good__active'}`}>
                {good}

                <button
                  type="button"
                  className={`${selectedGood !== good ? 'button' : 'button__disable'}`}
                  onClick={
                    () => {
                      this.setState({ selectedGood: good });
                    }
                  }
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>Advanced task</div>

        <div className="App">
          <h1 className="title">
            Selected good:
            <span className="red">
              {selectedGoods.length > 0
                ? `${selectedGoods.join(',')} ${selectedGoods.length > 1 ? 'are' : 'is'} selected`
                : `${noGoods}`}
            </span>
            <button
              type="button"
              className="button button__h1"
              onClick={() => {
                this.setState({ selectedGoods: [], noGoods: '' });
              }}
            >
              X
            </button>
          </h1>
          <ul className="goods">
            {goodsFromServer.map(good => (
              <div key={good} className="good__block">
                <li className={`good ${selectedGoods.includes(good as never) ? 'good__active' : ''}`}>
                  {good}
                </li>

                <button
                  type="button"
                  className={`${selectedGoods.includes(good as never) ? 'button button__hidden' : 'button'}`}
                  onClick={
                    () => {
                      this.setState(() => ({
                        selectedGoods: [...selectedGoods, good],
                      }));
                    }
                  }
                >
                  Add
                </button>

                <button
                  type="button"
                  className={`${!selectedGoods.includes(good as never) ? 'button button__hidden' : 'button'}`}
                  onClick={
                    () => {
                      this.setState(() => ({
                        selectedGoods: selectedGoods.filter(
                          (item) => item !== good,
                        ),
                      }));
                    }
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
