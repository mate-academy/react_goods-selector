import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import { Button } from './components';

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

type Props = {};

interface State {
  selectedGoods: string[];
}

class App extends React.Component<Props, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  clearSelection = () => this.setState({ selectedGoods: [] });

  addGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, good] });
  };

  removeGood = (selectedGood: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(
        good => good !== selectedGood,
      ),
    });
  };

  formatTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')}
         and ${selectedGoods[selectedGoods.length - 1]}`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="title app__title">
          {`Selected good: ${this.formatTitle()}`}
        </h1>

        <ul className="goods app__list">
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

                const listClassName = `${isGoodSelected ? 'active' : ''} goods__good`;

                return (
                  <li
                    className={listClassName}
                    key={good.id}
                  >
                    {good.value}
                    <Button
                      clickCallback={buttonCallback}
                      title={buttonTitle}
                    />
                  </li>
                );
              },
            )
          }
        </ul>

        {(selectedGoods.length > 0) && (
          <button
            type="button"
            onClick={this.clearSelection}
            className="button button__clear-all app__button"
          >
            Clear all
          </button>
        )}
      </div>
    );
  }
}

export default App;
