import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

interface Good {
  id: string;
  value: string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  id: uuidv4(),
  value: good,
}));

interface State {
  selectedGoods: string[];
}

type Props = {

};

class App extends React.Component<Props, State> {
  state: State = {
    selectedGoods: [],
  };

  addGood = (item: string) => {
    const { selectedGoods } = this.state;

    this.setState(({ selectedGoods: [...selectedGoods, item] }));
  };

  clearSelection = () => {
    this.setState({ selectedGoods: [] });
  };

  removeGood = (selectedGood: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: selectedGoods.filter(item => item !== selectedGood) });
  };

  formatTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return ' No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]}`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected good:
          {this.formatTitle()}
        </h1>
        {this.state.selectedGoods.length === 0
          ? null
          : (
            <div className="button-render-container">
              <button
                type="button"
                className="button-render-image"
                onClick={() => this.clearSelection()}
              >
                Remove all
              </button>
            </div>
          )}
        <ul className="goods__ul">
          {
            goodsFromServer.map(
              good => {
                const isGoodSelected = selectedGoods.includes(good.value);

                const buttonCallback = isGoodSelected
                  ? () => this.removeGood(good.value)
                  : () => this.addGood(good.value);

                const buttonTitle = isGoodSelected
                  ? 'Remove good'
                  : 'Add good';

                const buttonToRender = (
                  <button
                    className="goods__button"
                    type="button"
                    onClick={buttonCallback}
                  >
                    {buttonTitle}
                  </button>
                );

                const imageToRender = `./images/${good.value}.jpg`;

                return (
                  <li key={good.id} className="goods__li">
                    <div className="img-container">
                      <img
                        className="goods__image"
                        src={imageToRender}
                        alt={good.value}
                      />
                    </div>
                    <div className="good-container">
                      {good.value}
                    </div>
                    <div className="button-container">
                      {buttonToRender}
                    </div>
                  </li>
                );
              },
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
