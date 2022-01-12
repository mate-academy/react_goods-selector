import React from 'react';
// import classNames from 'classnames';
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
  selectedGoods: string[],
};

class App extends React.Component<Props, State> {
  state: State = {
    selectedGoods: [],
  };

  remover = (index: number, array: string[]) => {
    array.splice(index, 1);

    return array;
  };

  makephrase = (array: string[]) => {
    if (!array.length) {
      return 'No goods selected';
    }

    if (array.length === 1) {
      return `${array[0]} is selected`;
    }

    let phrase = '';

    for (let i = 0; i < array.length - 1; i += 1) {
      phrase += `${array[i]}, `;
    }

    phrase = phrase.slice(0, -2);

    return `${phrase} and ${array[array.length - 1]} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">
            {this.makephrase(this.state.selectedGoods)}
            {' '}
          </h1>
          <button
            type="button"
            className="clearButton"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            X
          </button>
        </div>
        {
          goodsFromServer.map((item) => (
            <p>
              <li
                key={item}
                className={selectedGoods.includes(item) ? 'active' : ''}
              >
                <button
                  className={selectedGoods.includes(item) ? 'active-button' : 'non-active-button'}
                  type="button"
                  onClick={() => {
                    if (!selectedGoods.includes(item)) {
                      this.setState((prevState: State) => ({
                        selectedGoods: [...prevState.selectedGoods, item],
                      }));
                    } else {
                      const index = selectedGoods.indexOf(item);

                      this.setState((prevState: State) => ({
                        selectedGoods: this.remover(index, prevState.selectedGoods),
                      }));
                    }
                  }}
                >
                  {selectedGoods.includes(item) ? 'Remove' : 'Add'}
                </button>
                {' '}
                {item}
              </li>
            </p>
          ))
        }
      </div>
    );
  }
}

export default App;
