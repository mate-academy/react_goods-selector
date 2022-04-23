import React from 'react';
import classNames from 'classnames';
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
  selectedGoods: string [];
};
export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectItem = (goods: string) => {
    this.setState((prevGoods) => ({
      selectedGoods: [...prevGoods.selectedGoods, goods],
    }));
  };

  removeItem = (goods: string) => {
    this.setState((prevGoods) => ({
      selectedGoods: prevGoods.selectedGoods.filter(item => item !== goods),
    }));
  };

  clearItems = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  listItems = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected.';

      case goodsFromServer.length:
        return 'All goods selected.';

      case 1:
        return `${selectedGoods} is selected.`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected.`;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">
            {this.listItems()}
          </h1>
          <button
            type="button"
            className={classNames('App__button', 'App__button--clear')}
            onClick={this.clearItems}
          >
            Remove all
          </button>
        </div>

        <ul className="App__list">
          {goodsFromServer.map((item) => {
            const isSelected = this.state.selectedGoods.includes(item);

            return (
              <li
                key={item}
                className={classNames('App__list-item',
                  {
                    'App__list-item--active': isSelected === true,
                  })}
              >
                {item}
                <button
                  type="button"
                  className={classNames('App__button',
                    {
                      'App__button--remove': isSelected === true,
                    })}
                  onClick={() => {
                    return isSelected
                      ? this.removeItem(item)
                      : this.selectItem(item);
                  }}
                >
                  {isSelected ? 'Remove' : 'Add'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
