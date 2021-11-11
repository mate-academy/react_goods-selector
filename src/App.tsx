import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';
import './App.scss';

interface Good {
  id: string,
  value: string,
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

type Props = {};

interface State {
  selectedGoods: string[],
}

class App extends React.Component<Props, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  clearSelection = () => this.setState({ selectedGoods: [] });

  addGood = (goodToAdd: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, goodToAdd] });
  };

  removeGood = (goodToRemove: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(
        good => good !== goodToRemove,
      ),
    });
  };

  formatHeading = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')}
         and ${selectedGoods[selectedGoods.length - 1]}
         are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;
    const hasGoodsAdded = selectedGoods.length > 0;

    return (
      <div className="App">
        <h1 className="heading">
          Selected goods:
          {' '}
          {this.formatHeading()}
        </h1>
        {hasGoodsAdded && (
          <button
            className="button button--clear"
            onClick={this.clearSelection}
            type="button"
          >
            Clear selection
          </button>
        )}
        <ul className="list">
          {
            goodsFromServer.map(
              good => {
                const isGoodSelected = selectedGoods.includes(good.value);

                const buttonCallback = isGoodSelected
                  ? () => this.removeGood(good.value)
                  : () => this.addGood(good.value);

                const buttonText = isGoodSelected
                  ? 'Remove good'
                  : 'Add good';

                const buttonToRender = (
                  <button
                    className="button"
                    type="button"
                    onClick={buttonCallback}
                  >
                    {buttonText}
                  </button>
                );

                return (
                  <li
                    className={classnames({
                      list__item: true,
                      active: isGoodSelected,
                    })}
                    key={good.id}
                  >
                    {good.value}
                    {buttonToRender}
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
