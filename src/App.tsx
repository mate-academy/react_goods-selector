import React from 'react';
import './App.scss';

type State = {
  selectedList: string[];
};

class App extends React.Component<{}, State> {
  goodsFromServer: string[] = [
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

  state = {
    selectedList: ['Jam'],
  };

  changeListItem = (good: string) => {
    const newGoods = [...this.state.selectedList];

    if (!newGoods.includes(good)) {
      newGoods.push(good);
    } else {
      newGoods.splice(newGoods.indexOf(good), 1);
    }

    this.setState(() => ({ selectedList: newGoods }));
  };

  clearList = () => {
    this.setState({ selectedList: [] });
  };

  makeDifferentTitle = () => {
    let title = '';
    const { selectedList } = this.state;
    const listLength = this.state.selectedList.length;

    switch (listLength) {
      case 0:
        title = 'No goods selected';
        break;

      case 1:
        title = `${selectedList} is selected`;
        break;

      case 2:
        title = (
          `${selectedList[0]} and`
          + ` ${selectedList[1]} are selected`
        );
        break;

      default:
        title = (
          `${selectedList.slice(0, -1).join(', ')}`
          + ` and ${selectedList[listLength - 1]}`
          + ' are selected'
        );
    }

    return title;
  };

  render() {
    const { selectedList } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          List of goods
        </h1>
        <ul className="App__list">
          {this.goodsFromServer.map(good => (
            <li
              className="App__list-item"
              key={good}
            >
              {good}
              {' '}
              <button
                className="App__button App__button--list"
                type="button"
                onClick={() => this.changeListItem(good)}
              >
                {
                  selectedList.includes(good)
                    ? 'Delete from list'
                    : 'Add to list'
                }
              </button>
            </li>
          ))}
        </ul>

        <h2 className="App__display">
          {this.makeDifferentTitle()}
        </h2>

        {selectedList.length > 0 && (
          <button
            className="App__button App__button--clear"
            type="button"
            onClick={() => this.clearList()}
          >
            Delete all goods
          </button>
        )}
      </div>
    );
  }
}

export default App;
