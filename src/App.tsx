import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.min.css';
import './App.scss';

type Good = string;

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
];

type State = {
  selectedGoods: Good[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  goodSelector = (selectedGood: Good) => {
    this.setState(state => {
      const good = [selectedGood];
      const selectedGoods = state.selectedGoods.concat(good);

      return {
        selectedGoods,
      };
    });
  };

  goodRemover = (selectedGood: Good) => {
    this.setState(state => {
      const selectedGoods = state.selectedGoods
        .filter(good => good !== selectedGood);

      return {
        selectedGoods,
      };
    });
  };

  render(): React.ReactNode {
    const { selectedGoods } = this.state;
    const resetButton = (
      <button
        type="button"
        onClick={() => this.setState({ selectedGoods: [] })}
      >
        X
      </button>
    );

    function getListInformation(list: Good[]): string {
      const listCopy = [...list];

      const endGood = listCopy.pop();

      switch (list.length) {
        case 0:
          return 'No goods selected';
        case 1:
          return `${list[0]} is selected`;
        case 2:
          return `${list.join(' and ')} are selected`;
        default:
          return `${listCopy.join(', ')} and ${endGood} are selected`;
      }
    }

    return (
      <div className="App box">
        <h1 className="title is-1">
          {getListInformation(selectedGoods)}
        </h1>
        {selectedGoods.length !== 0 && (
          <div>
            <span className="title is-4">Reset your selections -</span>
            {resetButton}
          </div>
        )}

        <ul>
          {goodsFromServer.map(good => (
            <>
              <li key={good} className="listItem">
                <span
                  className={classNames('listItem__text', { selected: selectedGoods.includes(good) })}
                >
                  {good}
                </span>
                {selectedGoods.includes(good)
                  ? (
                    <button
                      type="button"
                      onClick={() => this.goodRemover(good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={() => this.goodSelector(good)}
                    >
                      Select
                    </button>
                  )}
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
