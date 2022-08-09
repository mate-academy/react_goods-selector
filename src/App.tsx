import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';

import { Product } from './Types/Product';

import goodsFromServer from './goods';

const goods: Product[] = goodsFromServer.map((product) => {
  return {
    name: product,
    id: uuidv4(),
  };
});

interface State {
  selectedGoods: string[];
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  renderSelectedGoods = (goodList: string[]): string => {
    if (goodList.length === 0) {
      return 'No goods selected';
    }

    let stringOfGoods = '';

    for (let i = 0; i < goodList.length; i += 1) {
      const currentGood = goodList[i];
      const penultimateGood = goodList[goodList.length - 2];
      const lastGood = goodList[goodList.length - 1];

      if (goodList.length === 1) {
        stringOfGoods += `${currentGood} is selected`;
      }

      if (currentGood === penultimateGood) {
        stringOfGoods += `${currentGood} and ${lastGood} are selected`;
        break;
      }

      if (currentGood !== lastGood) {
        stringOfGoods += `${currentGood}, `;
      }
    }

    return stringOfGoods;
  };

  handleClear = () => {
    this.setState({ selectedGoods: [] });
  };

  handleRemove = (goodToRemove: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(
        (item) => item !== goodToRemove,
      ),
    }));
  };

  handleSelect = (goodToSelect: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, goodToSelect],
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main
        // eslint-disable-next-line max-len
        className="App font-mono text-2xl text-white pt-10 h-screen bg-slate-900"
      >
        <div className="container mx-auto">
          <header className="App__header mb-20 justify-evenly">
            <h1 className="App__title title is-5 font-extrabold mb-50">
              {this.renderSelectedGoods(selectedGoods)}
            </h1>
            {selectedGoods?.length ? (
              <button
                onClick={this.handleClear}
                type="button"
                // eslint-disable-next-line max-len
                className="App__clear border-2 rounded-2xl p-1 hover:text-amber-300"
              >
                Clear
              </button>
            ) : (
              ''
            )}
          </header>

          <ul className="flex flex-col items-center">
            {goods.map(({ name, id }) => {
              const isSelected = selectedGoods.includes(name);

              return (
                <li
                  key={id}
                  className={classNames('Good', 'mb-5', {
                    'Good--active': isSelected,
                  })}
                >
                  {name}

                  {isSelected ? (
                    <button
                      type="button"
                      // eslint-disable-next-line max-len
                      className="Good__remove button text-base p-1 border-2 rounded hover:text-black"
                      onClick={() => this.handleRemove(name)}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      // eslint-disable-next-line max-len
                      className="Good__select button text-base p-1 border-2 rounded hover:text-amber-600"
                      onClick={() => this.handleSelect(name)}
                    >
                      Select
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}
