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

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  buttonAction = (good: string): void => {
    if (!this.state.selectedGoods.includes(good)) {
      this.setState((state) => ({
        selectedGoods: [...state.selectedGoods, good],
      }));
    } else {
      this.setState((state) => {
        const newList = state.selectedGoods.filter(item => item !== good);

        return { selectedGoods: newList };
      });
    }
  };

  messageLine = (list: string[]) => {
    if (list.length === 0) {
      return 'No goods selected';
    }

    if (list.length === 1) {
      return `${list[0]} is selected`;
    }

    const result = list.join(', ');
    const index = result.lastIndexOf(', ');

    return `${result.slice(0, index)} and ${result.slice(index + 2)} are selected`;
  };

  clearButton = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
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
          className="columns"
        >
          {goodsFromServer.map(good => {
            const selectCheker: boolean = selectedOrNot(good);

            return (
              <div key={good} className="column block">
                <li
                  className={cn(
                    'is-medium',
                    { 'has-background-success-light': selectCheker },
                  )}
                >
                  {good}
                </li>
                <button
                  type="button"
                  onClick={() => this.buttonAction(good)}
                  className={
                    cn(
                      'button',
                      'is-light',
                      'is-fullwidth',
                      { 'is-primary': selectCheker },
                      { 'is-danger': !selectCheker },
                    )
                  }
                >
                  {selectCheker
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
