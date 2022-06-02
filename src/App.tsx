import React from 'react';
import './App.scss';
import cn from 'classnames';

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

interface State {
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  buttonAction = (good: string): void => {
    if (!this.state.selectedGoods.includes(good)) {
      this.setState((state) => {
        state.selectedGoods.push(good);

        return { selectedGoods: state.selectedGoods };
      });
    } else {
      this.setState((state) => {
        const newList = state.selectedGoods.filter(item => item !== good);

        return { selectedGoods: newList };
      });
    }
  };

  messageLine = (list: string[] | []) => {
    if (list.length === 0) {
      return 'No goods selected';
    }

    if (list.length === 1) {
      return `${list.join(', ')} is selected`;
    }

    const result = list.join(', ');
    const index = result.lastIndexOf(', ');

    return `${result.slice(0, index)} and ${result.slice(index + 2)} are selected`;
  };

  clearButton = () => {
    this.setState({ selectedGoods: [] });
  };

  render(): React.ReactNode {
    const { selectedGoods } = this.state;

    const selectedOrNot = (checkItem: string): boolean => {
      return selectedGoods.includes(checkItem);
    };

    return (
      <div className="block container container--margin">
        <div className="box is-size-2 container--margin">
          <h1>
            {this.messageLine(selectedGoods)}
          </h1>
          <button
            type="button"
            onClick={this.clearButton}
            className={cn(
              'button',
              'is-light',
              'is-danger',
              { 'is-invisible': (selectedGoods.length === 0) },
            )}
          >
            Clear
          </button>
        </div>
        <ul
          className="
          columns
          "
        >
          {goodsFromServer.map(good => {
            return (
              <div key={good} className="column block">
                <li
                  // eslint-disable-next-line max-len
                  className={cn(
                    'is-medium',
                    { 'has-background-success-light': selectedOrNot(good) },
                  )}
                >
                  {good}
                </li>
                <button
                  type="button"
                  onClick={(event) => event.target && this.buttonAction(good)}
                  className={
                    cn(
                      'button',
                      'is-light',
                      'is-fullwidth',
                      { 'is-primary': selectedOrNot(good) },
                      { 'is-danger': !selectedOrNot(good) },
                    )
                  }
                >
                  {selectedOrNot(good)
                    ? 'Remove' : 'Select'}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
